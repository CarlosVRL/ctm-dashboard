document.addEventListener('DOMContentLoaded', event => {

    const app = firebase.app();
    const db = firebase.firestore();
    const myStrategy = db.collection('strategies').doc('ETH_221105');
    myStrategy.onSnapshot(doc => {
        const data = doc.data();
        //document.write('strategy: ' + data.name + `<br>`);
    });
    const testVal = 'xxx';

});

function anonLogin() {
    firebase.auth().signInAnonymously()
      .then(() => {
        alert('signed in!')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('error!')
      });
}
