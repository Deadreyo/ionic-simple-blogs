import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonBadge,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTextarea,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import AddBlog from '../components/AddBlog';
import BlogListItem from '../components/BlogListItem';
import { blogs } from '../data/blogs';
import { notifications } from 'ionicons/icons';
import AppHeader from '../components/AppHeader';

const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const data = blogs;

  return (
    <IonPage id="home-page">
      
      <AppHeader />

      <IonContent fullscreen color="light">
        <AddBlog />

        <IonCard>
          <IonList>
            <IonListHeader>
              <h2>Blogs</h2>
            </IonListHeader>
            {data.map((blog, index) => <BlogListItem key={index} {...blog} />)}
          </IonList>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
