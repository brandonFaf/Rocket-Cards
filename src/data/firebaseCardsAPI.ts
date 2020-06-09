import { BlockProps } from './../components/Shared/Block';
import { db } from './firebaseConfig';
export const getCardsForSet = async (id: string) =>
  db
    .collection('cards')
    .where('setId', '==', id)
    .get()
    .then(doc =>
      doc.docs.map<BlockProps>(d => {
        const data = d.data();
        return {
          id: d.id,
          title: data.title,
          img: data.img
        };
      })
    );
