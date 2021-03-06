import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp(functions.config().firebase);

exports.sendMessage = functions.firestore
	.document('products/{productId}')
	.onCreate(event => {
		const docId = event.params.productId;
		const name = event.data.data().name;
		const productRef = admin.firestore().collection('products').doc(docId);

		return productRef.update({ message: `Nice ${name}! - Love Cloud Functions` });
	});