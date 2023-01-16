const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: "Founder & CEO",
        foto : "../img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: 'Angela Caroll',
        ruolo: "Chief Editor",
        foto : "../img/angela-caroll-chief-editor.jpg"
    },
    {
        nome: 'Walter Gordon',
        ruolo: "Office Manager",
        foto : "../img/walter-gordon-office-manager.jpg"
    },
    {
        nome: 'Angela Lopez',
        ruolo: "Social Media Manager",
        foto : "../img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome: 'Scott Estrada',
        ruolo: "Developer",
        foto : "../img/scott-estrada-developer.jpg"
    },
    {
        nome: 'Barbara Ramos',
        ruolo: "Grapich Designer",
        foto : "../img/barbara-ramos-graphic-designer.jpg"
    },
];


for (let i = 0; i < team.length; i++) {

    document.write('PERSONA ' + i + "<br>");

    for (let key in team[i]){

        if (key == "foto"){
            document.write("<img src=' ", team[i][key], "' alt=''>", "<br>");
            console.log("ok");
        }
        else{
            document.write('-', key, " ", team[i][key], "<br>");
        }
    }

    document.write('----------------------------------' + "<br>");
}