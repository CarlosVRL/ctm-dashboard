document.addEventListener('DOMContentLoaded', event => {

    function updateElementInnerHtmlById(id, html) {
        document.getElementById(id).innerHTML = html;
    }

    const app = firebase.app();
    const db = firebase.firestore();

    // btc
    const btcStrategy = db.collection('strategies').doc('CTM_BTC_8_HOUR');
    btcStrategy.onSnapshot(doc => {
        const data = doc.data();
        updateElementInnerHtmlById("btc_status", (data.entry ? '<i class="bi bi-circle-fill" style="color: #00FF00;"></i> ' : "") + '<b>' + data.status + '</b>');
        updateElementInnerHtmlById("btc_entry", data.entry ? data.entry : "-");
        updateElementInnerHtmlById("btc_stop_value", data.entry ? data.stopValue : "-");
        updateElementInnerHtmlById("btc_stop_percent", data.entry ? "(" + data.stopPercent + "%)" : "");
        updateElementInnerHtmlById("btc_gain_value", data.entry ? data.gainValue : "-");
        updateElementInnerHtmlById("btc_gain_percent", data.entry ? "(" + data.gainPercent + "%)" : "");
        updateElementInnerHtmlById("btc_long_value", data.longValue);
        updateElementInnerHtmlById("btc_long_filter", data.longFilter ? '<i class="bi bi-x-octagon"></i>' : "-");
    });

    // eth
    const ethStrategy = db.collection('strategies').doc('CTM_ETH_8_HOUR');
    ethStrategy.onSnapshot(doc => {
        const data = doc.data();
        updateElementInnerHtmlById("eth_status", (data.entry ? '<i class="bi bi-circle-fill" style="color: #00FF00;"></i> ' : "") + '<b>' + data.status + '</b>');
        updateElementInnerHtmlById("eth_entry", data.entry ? data.entry : "-");
        updateElementInnerHtmlById("eth_stop_value", data.entry ? data.stopValue : "-");
        updateElementInnerHtmlById("eth_stop_percent", data.entry ? "(" + data.stopPercent + "%)" : "");
        updateElementInnerHtmlById("eth_gain_value", data.entry ? data.gainValue : "-");
        updateElementInnerHtmlById("eth_gain_percent", data.entry ? "(" + data.gainPercent + "%)" : "");
        updateElementInnerHtmlById("eth_long_value", data.longValue);
        updateElementInnerHtmlById("eth_long_filter", data.longFilter ? '<i class="bi bi-x-octagon"></i>' : "-");
    });

    // ada
    const adaStrategy = db.collection('strategies').doc('CTM_ADA_8_HOUR');
    adaStrategy.onSnapshot(doc => {
        const data = doc.data();
        updateElementInnerHtmlById("ada_status", (data.entry ? '<i class="bi bi-circle-fill" style="color: #00FF00;"></i> ' : "") + '<b>' + data.status + '</b>');
        updateElementInnerHtmlById("ada_entry", data.entry ? data.entry : "-");
        updateElementInnerHtmlById("ada_stop_value", data.entry ? data.stopValue : "-");
        updateElementInnerHtmlById("ada_stop_percent", data.entry ? "(" + data.stopPercent + "%)" : "");
        updateElementInnerHtmlById("ada_gain_value", data.entry ? data.gainValue : "-");
        updateElementInnerHtmlById("ada_gain_percent", data.entry ? "(" + data.gainPercent + "%)" : "");
        updateElementInnerHtmlById("ada_long_value", data.longValue);
        updateElementInnerHtmlById("ada_long_filter", data.longFilter ? '<i class="bi bi-x-octagon"></i>' : "-");
    });

    // metadata
    const metaStrategy = db.collection('metadata').doc('LAST_UPDATED');
    metaStrategy.onSnapshot(doc => {
        const data = doc.data();
        updateElementInnerHtmlById("last_updated", data.lastUpdated);
    });

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
