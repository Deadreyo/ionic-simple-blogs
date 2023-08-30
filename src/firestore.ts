import { initializeApp } from "firebase/app";
import { addDoc, arrayUnion, collection, deleteDoc, doc, getDocs, getFirestore, increment, onSnapshot, updateDoc } from "firebase/firestore";
import { Blog } from "./types/Blog";
import { useEffect, useRef, useState } from "react";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "ionic-simple-blogs.firebaseapp.com",
    projectId: "ionic-simple-blogs",
    storageBucket: "ionic-simple-blogs.appspot.com",
    messagingSenderId: "864626690506",
    appId: "1:864626690506:web:e9cd9415f310ecf491e733"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getAllBlogs(): Promise<Blog[]> {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    return querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}) as Blog);
}

export async function addBlog(title: string, content: string): Promise<void> {
    const blog: Blog = {
        id: crypto.randomUUID(),
        title,
        content,
        likes: 0,
        comments: []
    };

    try{
        await addDoc(collection(db, "blogs"), blog);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function addLike(id: string) {
    const blogRef = doc(db, "blogs", id);
    try {
        await updateDoc(blogRef, {
            likes: increment(1)
        });
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}

export async function removeLike(id: string) {
    const blogRef = doc(db, "blogs", id);
    try {
        await updateDoc(blogRef, {
            likes: increment(-1)
        });
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}

export async function deleteBlog(id: string) {
    const blogRef = doc(db, "blogs", id);
    try {
        await deleteDoc(blogRef);
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}

export async function addComment(id: string, comment: string) {
    const blogRef = doc(db, "blogs", id);
    try {
        await updateDoc(blogRef, {
            comments: arrayUnion(comment)
        });
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [newLikes, setNewLikes] = useState<number>(0);

    const resetLikes = () => setNewLikes(0);

    const blogsRef = useRef<Blog[]>([]);

    useEffect(() => {
        blogsRef.current = blogs;
    }, [blogs]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "blogs"), (doc) => {
            doc.docChanges().forEach((change) => {
                if (change.type === "modified") {
                    const oldBlog = blogsRef.current.find((blog) => blog.id === change.doc.id);
                    const newBlog = change.doc.data() as Blog;
                    
                    if(newBlog.likes > oldBlog?.likes!) {
                        setNewLikes(likes => likes + 1);
                    }
                }
            });
            setBlogs(doc.docs.map((doc) => ({...doc.data(), id: doc.id}) as Blog));
        });
        return () => unsub();
    }, []);

    return {
        blogs,
        newLikes,
        resetLikes,
    }
}
