import { IonHeader, IonToolbar, IonTitle, IonLabel, IonIcon, IonBadge } from "@ionic/react";
import { notifications } from "ionicons/icons";
import './AppHeader.css'

export default function AppHeader() {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>Simple Ionic Blog</IonTitle>
                <IonLabel slot='end' className='ion-align-items-center notification-label'>
                    <IonIcon slot="end" icon={notifications}size='large'></IonIcon>
                    <IonBadge>11</IonBadge>
                </IonLabel>
            </IonToolbar>
        </IonHeader>
    )
}