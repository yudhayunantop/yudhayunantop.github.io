function renderDaftar(data) {
    var TeamsHTML = "";
    data.teams.forEach(function (Teams) {
        TeamsHTML += `
                        <div class="row">
                            <div class="col s12 m4 l2">
                                <img src="${Teams.crestUrl}" class="responsive-img icon" alt="logo ${Teams.shortName}"/>
                            </div>
                            <div class = "col s12 m4 l8 grey" >
                                <a href = "/team.html?id=${Teams.id}">
                                    <span class="card-title truncate">${Teams.name} / ${Teams.tla}</span>
                                </a>
                                <a href="${Teams.website}" target="_blank">${Teams.website}</a>
                            </div>
                        </div>
                        `;
    });
    document.getElementById("Teams").innerHTML = TeamsHTML;
}

function renderID(team) {
    var teamsHTML = `
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img src = "${team.crestUrl}" class = "responsive-img featured-image" alt = "logo ${team.shortName}" / >
                        </div>
                        <div class="card-content">
                            <span class="card-title">${team.name} / ${team.tla}</span>
                            <a href="${team.website}" target="_blank">${team.website}</a>
                            <table class = "striped">
                                <tr>
                                	<td>Nama</td>
                                	<td>:</td> 
                                	<td>${team.name}</td>
                                </tr>
                                <tr>
                                	<td>Singkatan</td>
                                	<td>:</td>
                                	<td>${team.tla}</td>
                                </tr>
                                <tr>
                                	<td>Alamat</td>
                                	<td>:</td>
                                	<td>${team.address}</td>
                                </tr>
                                <tr>
                                	<td>No. Telepon</td>
                                	<td>:</td>
                                	<td>${team.phone}</td>
                                </tr>
                                <tr>
                                	<td>E-mail</td>
                                	<td>:</td>
                                	<td>${team.email}</td>
                                </tr>
                                <tr>
                                	<td>Tahun Berdiri</td>
                                	<td>:</td>
                                	<td>${team.founded}</td>
                                </tr>    
                                <tr>
                                	<td>Club Colors</td>
                                	<td>:</td>
                                	<td>${team.clubColors}</td>
                                </tr>
                                <tr>
                                	<td>Kandang</td>
                                	<td>:</td>
                                	<td>${team.venue}</td>
                                </tr>
                                </table> 
                            </div>
                    </div>
                    `;
    document.getElementById("body-content").innerHTML = teamsHTML;

}