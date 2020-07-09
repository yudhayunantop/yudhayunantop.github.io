var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BHncSj_ZzTuVS8UINRdtAUlVFTLgE6yvvKqqC82xlunzjLXqaP9J1ernEdAbLRmoylDeha67CrhONTJ2eMgjPZY",
    "privateKey": "PE-NbqAku1l2nw3BrEykQo6gXQf6Lc67bivYh-tlHF4"
};


webPush.setVapidDetails(
    'mailto:yudha.yunanto.2010@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cWoZADjxO90:APA91bEagJ3SUYeeNu5bkbW96OcsjvOeV4zql3n2Db8aQJoAaK8TBgY68TvbwOMm6O2ifkgHz61PCvcqoZnZlR7-wVb2AMtyYZ3Ox0JbngTiyHPkatygxFiIAhXkWfyRF6fdWpD0SG1Z",
    "keys": {
        "p256dh": "BGQNWa93SMZ0MQimRjmISqek3LkCV1GBt6o4jp/TzAPTUO5relpZkEk5LDVU42J8WEPlo09KnUz90vXHlvojZc8=",
        "auth": "TbI0wY5bMEFWoUlcURJxtw=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '648272738768',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);