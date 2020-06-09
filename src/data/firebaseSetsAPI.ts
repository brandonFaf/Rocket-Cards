import { db } from './firebaseConfig';
import { CardSet } from '../components/Dashboard';
export const getSetsForUser = async (id: string) =>
  db
    .collection('sets')
    .where('userId', '==', id)
    .get()
    .then(doc =>
      doc.docs.map<CardSet>(d => {
        const data = d.data();
        return {
          id: d.id,
          name: data.name,
          img: data.img
        };
      })
    );
