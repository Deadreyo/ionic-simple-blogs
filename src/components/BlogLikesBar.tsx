import { IonRow, IonLabel, IonButton, IonIcon } from "@ionic/react";
import { thumbsUpOutline, trashBin } from "ionicons/icons";

export default function BlogControlsBar({ likes }: { likes: number }) {
    return (
        <IonRow className="ion-justify-content-around ion-align-items-center divider-below">
            <IonLabel>Likes: {likes}</IonLabel>
            <IonButton fill="clear">
                <IonIcon icon={thumbsUpOutline} size="large"></IonIcon>
            </IonButton>
            <IonIcon icon={trashBin} size="large" color="danger" />
        </IonRow>
    )
}