    // REGISTER SERVICE WORKER
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function () {
            navigator.serviceWorker
                .register("/service-worker.js")
                .then(function () {
                    console.log("Pendaftaran ServiceWorker berhasil");
                })
                .catch(function () {
                    console.log("Pendaftaran ServiceWorker gagal");
                });
        });
    } else {
        console.log("ServiceWorker belum didukung browser ini.");
    }
    document.addEventListener("DOMContentLoaded", function () {
        var urlParams = new URLSearchParams(window.location.search);
        var id = urlParams.get('id');
        var id = parseInt(id);
        var btnDelete = document.getElementById("delete");
        var item = getSavedTeamsById();

        btnDelete.onclick = function () {
            showNotifikasiIkonHapus();
            console.log("Tombol Delete di klik.");
            deleteFav(id);
        };
    });