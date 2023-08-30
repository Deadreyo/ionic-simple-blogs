import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInput, IonTextarea } from "@ionic/react";
import './AddBlog.css'

export default function AddBlog() {

    return(
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Add a new blog</IonCardTitle>
            </IonCardHeader>
        
            <IonCardContent>
                <IonInput type='text' placeholder='Enter text' label="Enter blog title" labelPlacement="stacked" fill="outline" />
                <IonTextarea label='Enter blog content' labelPlacement="stacked" placeholder="Enter text" fill="outline"  rows={6}/>
            </IonCardContent>
        
            <IonButton fill="clear">Create</IonButton>
        </IonCard>
    );
      
}