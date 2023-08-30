import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonLabel, IonRow, IonItemDivider, IonInput, IonCol, IonTextarea, IonItem, IonList, IonListHeader } from "@ionic/react";
import { chatbubble, chatbubbleEllipsesOutline, chatbubbleOutline, thumbsUpOutline, thumbsUpSharp, trashBin } from "ionicons/icons";
import './BlogListItem.css'
import BlogCommentList from "./BlogCommentList";
import BlogControlsBar from "./BlogControlsBar";
import { Blog } from "../types/Blog";
import { useState } from "react";
import { addComment } from "../firestore";

export default function BlogListItem({ title, content, comments, id, likes }: Blog) {

    const [comment, setComment] = useState<string>('');

    function handleAddComment() {
        addComment(id, comment);
    }

    return(
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
        
            <IonCardContent>{content}</IonCardContent>

            <BlogControlsBar likes={likes} id={id} />

            <BlogCommentList comments={comments} />

            <div className="addCommentDiv">
                <IonRow>
                    <IonTextarea placeholder='Enter text' label="Add Comment" labelPlacement="stacked" fill="outline"
                        value={comment} onIonChange={e => setComment(e.target.value ?? "")}  />
                    <IonButton fill="clear" onClick={handleAddComment}>Add</IonButton>
                </IonRow>
            </div>
           
        </IonCard>
    );
}