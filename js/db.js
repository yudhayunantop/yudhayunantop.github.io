var dbPromised = idb.open("bola-pedia", 1, function (upgradeDb) {
    var articlesObjectStore = upgradeDb.createObjectStore("teams", {
        keyPath: "id"
    });
    articlesObjectStore.createIndex("name", "name", {
        unique: true
    });
});

function saveForLater(team) {
    dbPromised
        .then(function (db) {
            var tx = db.transaction("teams", "readwrite");
            var store = tx.objectStore("teams");
            console.log(team);
            store.put(team);
            return tx.complete;
        })
        .then(function () {
            console.log("Artikel berhasil di simpan.");
        });
}

function getAll() {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                var tx = db.transaction("teams", "readonly");
                var store = tx.objectStore("teams");
                return store.getAll();
            })
            .then(function (teams) {
                resolve(teams);
            });
    });
}

function getById(id) {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                var tx = db.transaction("teams", "readonly");
                var store = tx.objectStore("teams");
                return store.get(id);
            })
            .then(function (team) {
                resolve(team);
            });
    });
}

function deleteFav(id) {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                var tx = db.transaction("teams", "readwrite");
                var store = tx.objectStore("teams");
                return store.delete(id);
            })
            .then(function () {
                console.log('Item deleted');
            });
    });
}
