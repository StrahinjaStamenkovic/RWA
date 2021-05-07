import { Club, Match } from "./interfaces";
import { fetchAllClubs, fetchAllMatches, fetchClubById } from "./servercalls";

export class MatchesView{
    //private archive:MatchesArchive;
    private container:HTMLElement;

    constructor(host:HTMLElement){
        if(!host)
            throw new Error("Host is null!");

        this.container=document.createElement("div");
        host.appendChild(this.container);
        this.container.className="container";

    }
    draw(){
        this.drawSearchBarMatches(this.container);
        this.drawAllMatches(this.container);
        this.drawSearchBarClubs(this.container);
        this.drawAllClubs(this.container);
    }
   
    
    drawAllMatches(host:HTMLElement){
        let allMatchesContainer = document.createElement('div');
        host.appendChild(allMatchesContainer);
        allMatchesContainer.className = 'allMatches';


        fetchAllMatches().then(data=>{
            data.forEach((element:Match)=>
                this.drawIndividualMatch(allMatchesContainer,element))
        })
        .catch(err=>{
            console.log(err);
        });
        
    }

    async drawIndividualMatch(allMatchesContainer: HTMLDivElement,match:Match) {
        let matchDiv = document.createElement('div');
        matchDiv.className = 'matchContainer';
        allMatchesContainer.appendChild(matchDiv);

        let attributeDiv;
        await fetchClubById(match.homeId).then(data=>{
            attributeDiv = document.createElement('div');
            matchDiv.appendChild(attributeDiv);
            attributeDiv.innerHTML = data.name;
        })
        .catch(err=>{
            console.log(err);
        });

        attributeDiv =document.createElement('div');
        matchDiv.appendChild(attributeDiv);
        attributeDiv.innerHTML = match.score;


        await fetchClubById(match.awayId).then(data=>{
            attributeDiv = document.createElement('div');
            matchDiv.appendChild(attributeDiv);
            attributeDiv.innerHTML = data.name;
        })
        .catch(err=>{
            console.log(err);
        });

    }

    drawAllClubs(host:HTMLElement){
        let allClubsContainer = document.createElement('div');
        host.appendChild(allClubsContainer);
        allClubsContainer.className = 'allClubsContainer';
        fetchAllClubs().then(data=>{
            data.forEach((element:Club)=>{
                
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
        })
        .catch(err=>{
            console.log(err);
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
}