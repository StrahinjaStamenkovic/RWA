import { Club, Match } from "./interfaces";
import { emitClubs, emitMatches } from "./reactiveapi";
import { fetchAllClubs, fetchAllMatches, fetchClubById } from "./servercalls";

export class MatchesView{
    private container:HTMLElement;

    constructor(host:HTMLElement){
        if(!host)
            throw new Error("Host is null!");

        this.container=document.createElement("div");
        host.appendChild(this.container);
        this.container.className="container";

    }
    async draw(){
        this.drawSearchBarMatches(this.container);

        let allMatchesContainer = document.createElement('div');
        this.container.appendChild(allMatchesContainer);
        allMatchesContainer.className = 'allMatches';
        this.drawAllMatches(allMatchesContainer,await fetchAllMatches());

        this.drawSearchBarClubs(this.container);

        let allClubsContainer = document.createElement('div');
        this.container.appendChild(allClubsContainer);
        allClubsContainer.className = 'allClubsContainer';
        this.drawAllClubs(allClubsContainer,await fetchAllClubs());


        this.generateSubscribers();
    }
    generateSubscribers(){
        emitMatches().subscribe(matches=>{
            this.drawAllMatches(document.querySelector('.allMatches'),matches);
        });
        emitClubs().subscribe(clubs=>{
            this.drawAllClubs(document.querySelector('.allClubsContainer'),clubs)
        })
    }
    
    drawAllMatches(host:HTMLElement,matches:Match[]){
        this.removeChildren(host);
            matches.forEach((element:Match)=>{
                let matchDiv = document.createElement('div');
                matchDiv.className = 'matchContainer';
                host.appendChild(matchDiv);
                this.drawIndividualMatch(matchDiv,element)});
    }

    async drawIndividualMatch(host: HTMLDivElement,match:Match) {
        

        let attributeDiv;
        await fetchClubById(match.homeId).then(data=>{
            attributeDiv = document.createElement('div');
            host.appendChild(attributeDiv);
            attributeDiv.innerHTML = data.name;
        })
        .catch(err=>{
            console.log(err);
        });

        attributeDiv =document.createElement('div');
        host.appendChild(attributeDiv);
        attributeDiv.innerHTML = match.score;


        await fetchClubById(match.awayId).then(data=>{
            attributeDiv = document.createElement('div');
            host.appendChild(attributeDiv);
            attributeDiv.innerHTML = data.name;
        })
        .catch(err=>{
            console.log(err);
        });

    }

    drawAllClubs(host:HTMLElement,clubs:Club[]){
        
        this.removeChildren(host);
            clubs.forEach((element:Club)=>{
                
            let clubContainer = document.createElement('div');
            host.appendChild(clubContainer);
            clubContainer.className = 'clubContainer';

            let clubAttribute = document.createElement('div');
            clubContainer.appendChild(clubAttribute);
            clubAttribute.className = 'clubAttribute';
            clubAttribute.innerHTML = element.name;

            clubAttribute = document.createElement('div');
            clubContainer.appendChild(clubAttribute);
            clubAttribute.className = 'clubAttribute';
            clubAttribute.innerHTML = element.city;

            });
    }
    drawSearchBarMatches(host: HTMLElement) {
        let searchBarMatches = document.createElement('div');
        host.appendChild(searchBarMatches);
        searchBarMatches.className = 'searchBarMatches';

        let label = document.createElement('label');
        label.innerHTML = 'Ime kluba: ';
        searchBarMatches.appendChild(label);

        let searchBar = document.createElement('input');
        searchBar.className = 'searchMatches';
        searchBarMatches.appendChild(searchBar);
    } 
    drawSearchBarClubs(host: HTMLElement) {

        let searchBarClubs = document.createElement('div');
        host.appendChild(searchBarClubs);
        searchBarClubs.className = 'searchBarClubs';

        let label = document.createElement('label');
        label.innerHTML = 'Ime grada: ';
        searchBarClubs.appendChild(label);

        let searchBar = document.createElement('input');
        searchBar.className = 'searchClubs'
        searchBarClubs.appendChild(searchBar);
    }
    removeChildren(host:HTMLElement){
        while(host.hasChildNodes())
        {
            host.removeChild(host.childNodes[0]);
        }
    }
}