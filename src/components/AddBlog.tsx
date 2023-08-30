import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonInput, IonTextarea } from "@ionic/react";
import './AddBlog.css'
import { FormEventHandler, useState } from "react";
import { addBlog } from "../firestore";

export default function AddBlog() {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addBlog(title, content);
        setTitle('');
        setContent('');
    }

    return(
        <IonCard>
            <form onSubmit={handleSubmit}>
                <IonCardHeader>
                    <IonCardTitle>Add a new blog</IonCardTitle>
                </IonCardHeader>
            
                <IonCardContent>
                    <IonInput type='text' placeholder='Enter text' label="Enter blog title" labelPlacement="stacked" fill="outline" required
                        value={title} onIonChange={e => setTitle(e.target.value as string ?? "")} />
                    <IonTextarea label='Enter blog content' labelPlacement="stacked" placeholder="Enter text" fill="outline"  rows={6} required
                        value={content} onIonChange={e => setContent(e.target.value ?? "")} />
                </IonCardContent>
            
                <IonButton fill="clear" type="submit">Create</IonButton>
            </form>
        </IonCard>
    );
      
}