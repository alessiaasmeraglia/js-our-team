'use strict';

//Seleziono gli elementi del DOM
const teamContainer = document.getElementById('team-container');

//Funzione per creare le card dei membri del team
function createTeamCards(array) {
    
    for(const member of array) {
        const card = document.createElement('div');
        card.classList.add('member');

        const name = document.createElement('h3');
        name.textContent = member.name;
        card.appendChild(name);

        const role = document.createElement('p');
        role.textContent = member.role;
        card.appendChild(role);

        const email = document.createElement('p');
        email.textContent = member.email;
        card.appendChild(email);

        const img = document.createElement('img');
        img.src = member.img;
        card.appendChild(img);

        teamContainer.appendChild(card);

    }
}

//Chiamo la funzione per creare le card dei membri del team
createTeamCards(teamMembers);
