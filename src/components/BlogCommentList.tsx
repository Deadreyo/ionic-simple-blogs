import { IonItemDivider, IonList, IonItem, IonIcon } from "@ionic/react";
import { chatbubbleEllipsesOutline } from "ionicons/icons";

export default function BlogCommentList({ comments }: { comments: string[] }) {
    return (
        <IonItemDivider>
            <IonList>
                <h4>Comments</h4>
                {
                    comments.map((comment, index) => (
                        <IonItem lines="none" key={index}>
                            <IonIcon icon={chatbubbleEllipsesOutline} className="margin-right"/>{comment}
                        </IonItem>
                    ))
                }
            </IonList>
        </IonItemDivider>
    )
}