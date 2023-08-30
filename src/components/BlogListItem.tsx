import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonLabel, IonRow, IonItemDivider, IonInput, IonCol, IonTextarea, IonItem, IonList, IonListHeader } from "@ionic/react";
import { chatbubble, chatbubbleEllipsesOutline, chatbubbleOutline, thumbsUpOutline, thumbsUpSharp, trashBin } from "ionicons/icons";
import './BlogListItem.css'
import BlogCommentList from "./BlogCommentList";
import BlogControlsBar from "./BlogLikesBar";
import { Blog } from "../data/blogs";

export default function BlogListItem({ title, content, comments, id, likes }: Blog) {
    return(
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
        
            <IonCardContent>{content}</IonCardContent>

            <BlogControlsBar likes={likes} />

            <BlogCommentList comments={comments} />

            <div className="addCommentDiv">
                <IonRow>
                    <IonTextarea placeholder='Enter text' label="Add Comment" labelPlacement="stacked" fill="outline" />
                    <IonButton fill="clear">Add</IonButton>
                </IonRow>
            </div>
           
        </IonCard>
    );
}