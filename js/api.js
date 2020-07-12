const base_url = "https://api.football-data.org/v2/teams/";
const token = "af10bcb51bd84c39b21df35432d0d0fe";
let data;
// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        // Method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.statusText));
    } else {
        // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
        return Promise.resolve(response);
    }
}
// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
    return response.json();
}
// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
    // Parameter error berasal dari Promise.reject()
    console.log("Error : " + error);
}
// Blok kode untuk melakukan request data json
function getTeams() {
    if ('caches' in window) {
        caches.match(base_url).then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    renderDaftar(data);
                })
            }
        })
    }
    fetch(base_url, {
            method: "GET",
            headers: {
                "X-Auth-Token": token
            }
        })
        .then(status)
        .then(json)
        .then(function (data) {
            renderDaftar(data);
        })
        .catch(error);
}

function getTeamsById() {
    return new Promise(function (resolve, reject) {
        // Ambil nilai query parameter (?id=)
        var urlParams = new URLSearchParams(window.location.search);
        var idParam = urlParams.getAll("id");
        if ("caches" in window) {
            caches.match(base_url + idParam).then(function (response) {
                if (response) {
                    response.json().then(function (team) {
                        renderID(team);
                    });
                }
            });
        }
        fetch(base_url + idParam, {
                method: "GET",
                headers: {
                    "X-Auth-Token": token
                }
            })
            .then(status)
            .then(json)
            .then(function (team) {
                // Objek JavaScript dari response.json() masuk lewat variabel data.
                console.log(team);
                renderID(team);
                // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
                resolve(team);
            });
    });
}

function getSavedTeams() {
    getAll().then(function (teams) {
        console.log(teams);
        // Menyusun komponen card artikel secara dinamis
        var teamsHTML = "";
        teams.forEach(function (teams) {
            teamsHTML += `
                        <div class="row">
                            <div class="col s12 m4 l2">
                                <img src="${teams.crestUrl}" class="responsive-img icon" alt="logo ${teams.shortName}"/>
                            </div>
                            <div class = "col s12 m4 l8 grey" >
                                <a href = "/teamDelete.html?id=${teams.id}">
                                    <span class="card-title truncate">${teams.name} / ${teams.tla}</span>
                                </a>
                                <a href="${teams.website}" target="_blank">${teams.website}</a>
                            </div>
                        </div>
                        `;
        });
        // Sisipkan komponen card ke dalam elemen dengan id #body-content
        document.getElementById("Teams").innerHTML = teamsHTML;
    });
}

function getSavedTeamsById() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    var id = parseInt(id);

    getById(id).then(function (team) {
        console.log(team);
        teamHTML = '';
        renderID(team);
    });
}