'use strict';

//Seleziono gli elementi del DOM
const teamContainer = document.getElementById('team-container');

//Funzione per creare le card dei membri del team
function createTeamCards(array) {
    
    for(let i = 0; i < array.length; i++) {
        const member = array[i];

        const card = document.createElement('div');
        card.classList.add('member');

        const img = document.createElement('img');
        img.src = member.img;

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('member-info');
        

        const name = document.createElement('h3');
        name.textContent = member.name;
        

        const role = document.createElement('p');
        role.textContent = member.role;
        

        const email = document.createElement('p');
        email.textContent = member.email;
        email.classList.add('email');


        teamContainer.appendChild(card);
        infoContainer.appendChild(name);
        infoContainer.appendChild(role);
        infoContainer.appendChild(email);

        card.appendChild(img);
        card.appendChild(infoContainer);

    }
}

//Chiamo la funzione per creare le card dei membri del team
createTeamCards(teamMembers);
