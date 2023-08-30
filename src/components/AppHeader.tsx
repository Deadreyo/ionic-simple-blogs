import { IonHeader, IonToolbar, IonTitle, IonLabel, IonIcon, IonBadge, IonButton } from "@ionic/react";
import { notifications } from "ionicons/icons";
import './AppHeader.css'
import { useBlogs } from "../firestore";

export default function AppHeader() {

    const {newLikes, resetLikes} = useBlogs();

    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>Simple Ionic Blog</IonTitle>
                <IonLabel slot='end' className='ion-align-items-center notification-label'>
                    <IonIcon slot="end" icon={notifications}size='large'></IonIcon>
                    { newLikes > 0 && 
                        <IonButton onClick={resetLikes} size="small">
                            {newLikes}
                        </IonButton>    
                    }     
                </IonLabel>
            </IonToolbar>
        </IonHeader>
    )
}
