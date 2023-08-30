import { IonRow, IonLabel, IonButton, IonIcon } from "@ionic/react";
import { thumbsUpOutline, thumbsUpSharp, trashBin } from "ionicons/icons";
import { addLike, deleteBlog, removeLike } from "../firestore";
import { useState } from "react";

export default function BlogControlsBar({ likes, id }: { likes: number, id: string }) {

    const [liked, setLiked] = useState(false);

    function handleLike() {
        if(liked) {
            removeLike(id);
        } else {
            addLike(id);
        }
        setLiked(!liked);
    }

    function handleDeleteBlog() {
        deleteBlog(id);
    }

    return (
        <IonRow className="ion-justify-content-around ion-align-items-center divider-below">
            <IonLabel>Likes: {likes}</IonLabel>
            <IonButton fill="clear" onClick={handleLike}>
                <IonIcon icon={liked ? thumbsUpSharp : thumbsUpOutline} size="large"></IonIcon>
            </IonButton>
            <IonButton fill="clear" onClick={handleDeleteBlog}>
                <IonIcon icon={trashBin} size="large" color="danger" />
            </IonButton>
        </IonRow>
    )
}