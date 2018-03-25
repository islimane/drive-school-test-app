document.addEventListener('DOMContentLoaded', event => {
	const app  = firebase.app();
	console.log(app);

	const db = firebase.firestore();
	const myPost = db.collection('posts').doc('firstpost');
	/*myPost.get().then(doc => {
		const data = doc.data();
		console.log(data);
		document.write(data.title + `<br>`);
		document.write(data.views);
	});*/

	/*myPost.onSnapshot(doc => {
		const data = doc.data();
		console.log(data);
		document.write(data.title + `<br>`);
		document.write(data.views + `<br>`);
	});*/

	/*myPost.onSnapshot(doc => {
		const data = doc.data();
		document.querySelector('#title').innerHTML = data.title;
	});*/

	/*const productsRef = db.collection('products');
	// const query = productsRef.where('price', '>', 10);
	const query = productsRef.orderBy('price', 'desc');
	query.get().then(products => {
		products.forEach(doc => {
			let data = doc.data();
			document.write(`${data.name} at $${data.price} <br>`);
		});
	});*/

});

function uploadFile(files) {
	const file = files.item(0);
	console.log('file:', file);

	const storageRef = firebase.storage().ref();
	const horseRef = storageRef.child(file.name);

	const task = horseRef.put(file);

	task.then(snapshot => {
		console.log(snapshot);
		const url = snapshot.downloadURL;
		document.querySelector('#imgUpload').setAttribute('src', url);
	});
}

function googleLogin() {
	const provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then(result => {
		const user = result.user;
		document.write(`Hello ${user.displayName}`);
		console.log(user);
	}).catch(err => {
		console.error(err);
	});
}

function updatePost(e) {
	const db = firebase.firestore();
	const myPost = db.collection('posts').doc('firstpost');
	myPost.update({ title: e.target.value });
}