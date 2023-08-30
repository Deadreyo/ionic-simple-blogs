import { useEffect, useState } from 'react';
import {
  IonCard,
  IonContent,
  IonList,
  IonListHeader,
  IonPage} from '@ionic/react';
import AddBlog from '../components/AddBlog';
import BlogListItem from '../components/BlogListItem';
import AppHeader from '../components/AppHeader';
import { useBlogs } from '../firestore';

const Home: React.FC = () => {

  const { blogs } = useBlogs();

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
            {blogs.map((blog, index) => <BlogListItem key={index} {...blog} />)}
          </IonList>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
