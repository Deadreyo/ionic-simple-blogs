import { IonItemDivider, IonList, IonItem, IonIcon } from "@ionic/react";
import { chatbubbleEllipsesOutline } from "ionicons/icons";
import { Comment } from "../types/Blog";
import BlogCommentItem from "./BlogCommentItem";

export default function BlogCommentList({ comments, blogId }: { comments: Comment[], blogId: string }) {
    return (
        <IonItemDivider>
            <IonList style={{width: "100%"}}>
                <h4>Comments</h4>
                {
                    comments.map((comment, index) => (
                        <BlogCommentItem comment={comment} blogId={blogId} index={index} key={crypto.randomUUID()} />
                    ))
                }
            </IonList>
        </IonItemDivider>
    )
}