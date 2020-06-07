import 'jest';

import * as functions from 'firebase-functions-test';
import * as admin from 'firebase-admin';

import { createSet } from './index';
const projectConfig = {
  projectId: 'rocket-cards-dev',
  databaseURL: 'https://rocket-cards-dev.firebaseio.com'
};

functions(projectConfig, './rocket-cards-admin.json');
describe('create set', () => {
  afterAll(async () => {
    const setRef = await admin
      .firestore()
      .collection('sets')
      .where('name', '==', 'this-is-a-test-name')
      .get();
    const cards = await admin
      .firestore()
      .collection('cards')
      .where('setId', '==', setRef.docs[0].id)
      .get();
    cards.forEach(d => d.ref.delete());
    setRef.docs[0].ref.delete();
  });
  it('should create a new deck', async done => {
    const name = 'this-is-a-test-name';
    const req = {
      query: { name, userId: 'userId', ammount: 10 },
      headers: { origin: 'test' }
    };
    const res = {
      json: async (message: { setId: string; result: string }) => {
        const cards = await admin
          .firestore()
          .collection('cards')
          .where('setId', '==', message.setId)
          .get();
        expect(cards.size).toBe(10);
        done();
      },
      setHeader: jest.fn()
    };
    await createSet(req as any, res as any);
  }, 10000);
  it('should not allow duplicate sets by a user', async done => {
    const name = 'this-is-a-test-name';
    const req = {
      query: { name, userId: 'userId', ammount: 10 },
      headers: { origin: 'test' }
    };
    const res = {
      json: async (message: { setId: string; result: string }) => {
        expect(message.setId).toBe(null);
        expect(message.result).toBe('Set already exists');
        done();
      },
      status: (code: number) => {
        expect(code).toBe(409);
      },
      setHeader: jest.fn()
    };
    await createSet(req as any, res as any);
  });
});
