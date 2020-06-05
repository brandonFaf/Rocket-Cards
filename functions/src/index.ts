import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

export const createSet = functions.https.onRequest(async (req, res) => {
  const { userId, name, ammount = 1 } = req.query;
  // we should take the word that the user gives us and if it doesn't match one of
  // our categories than we can run it through the related words api and see if there
  // are words that do match one of our categories
  const writeResult = await admin
    .firestore()
    .collection('sets')
    .add({ userId, name });
  const cardsRef = admin.firestore().collection('cards');
  for (let i = 1; i < +ammount + 1; i++) {
    const card = {
      title: `card ${i}`,
      img: `ttps://via.placeholder.com/1${(i * 10) % 100}`
    };
    await cardsRef.add(card);
  }
  res.json({ result: `Set Created with ID: ${writeResult.id} added.` });
});
