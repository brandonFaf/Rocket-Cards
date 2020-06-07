import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
// tslint:disable-next-line
import 'firebase-functions';
admin.initializeApp();

export const createSet = functions.https.onRequest((req, res) => {
  const corsWrapper = cors({ origin: '*' });
  return corsWrapper(req, res, async () => {
    const { userId, name, ammount = 1 } = req.query;
    // we should take the word that the user gives us and if it doesn't match one of
    // our categories than we can run it through the related words api and see if there
    // are words that do match one of our categories
    const setCol = await admin.firestore().collection('sets');

    const existingSet = await setCol
      .where('name', '==', name)
      .where('userId', '==', userId)
      .get();
    if (!existingSet.empty) {
      res.status(409);
      res.json({ result: 'Set already exists', setId: null });
      return;
    }
    const newSet = await setCol.add({ userId, name });
    const cardsRef = admin.firestore().collection('cards');
    for (let i = 1; i < +ammount + 1; i++) {
      const card = {
        setId: newSet.id,
        title: `card ${i}`,
        img: `https://via.placeholder.com/1${(i * 10) % 100}`
      };
      await cardsRef.add(card);
    }
    res.json({
      setId: newSet.id,
      result: `Set Created ${userId} ${name} ${ammount}.`
    });
  });
});
