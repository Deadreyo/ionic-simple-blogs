import { IonItem, IonIcon, IonLabel, IonButton } from "@ionic/react";
import { chatbubbleEllipsesOutline, thumbsUp, trashBin } from "ionicons/icons";
import { Comment } from "../types/Blog";
import './BlogCommentItem.css'
import { deleteComment, likeComment } from "../firestore";


export default function BlogCommentItem({ comment, blogId, index }: { comment: Comment, blogId: string, index: number }) {

    const handleDelete = () => {
        deleteComment(blogId, comment)
    }

    const handleLike = () => {
        likeComment(blogId, index);
    }

    return (
        <IonItem lines="none">
            <IonIcon icon={chatbubbleEllipsesOutline} className="margin-right"/>{comment.content}
            <IonLabel slot="end" className="comment-like-label">{comment.likes}{" "}
                <IonButton fill="clear" size="small" onClick={handleLike}>
                    <IonIcon icon={thumbsUp}></IonIcon>
                </IonButton>
                <IonButton fill="clear" size="small" color="danger" onClick={handleDelete}>
                    <IonIcon icon={trashBin}></IonIcon>
                </IonButton>
            </IonLabel>
        </IonItem>
    )
}