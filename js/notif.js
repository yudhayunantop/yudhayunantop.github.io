    function showNotifikasiIkon() {
        const title = 'Notifikasi Sederhana';
        const options = {
            'body': 'Team Favorit telah ditambahkan!',
            'icon': '/icon/icon-48.png'
        };
        if (Notification.permission === 'granted') {
            navigator.serviceWorker.ready.then(function (registration) {
                registration.showNotification(title, options);
            });
        } else {
            console.error('Fitur notifikasi tidak diijinkan.');
        }
    }

    function showNotifikasiIkonHapus() {
        const title = 'Notifikasi Sederhana';
        const options = {
            'body': 'Team Favorit telah dihapus!',
            'icon': '/icon/icon-48.png'
        };
        if (Notification.permission === 'granted') {
            navigator.serviceWorker.ready.then(function (registration) {
                registration.showNotification(title, options);
            });
        } else {
            console.error('Fitur notifikasi tidak diijinkan.');
        }
    }