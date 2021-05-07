import { Club, Match } from "./interfaces";

export async function fetchAllMatches():Promise<Match[]>{
    return fetch(`http://localhost:3000/matches`).then(response=>{
        if(response.ok)
            return response.json();
        throw new Error("Bad request!");
    }).catch(err=>{
        console.log(err);
    });
}

export async function fetchAllClubs():Promise<Club[]>{

    return fetch(`http://localhost:3000/clubs`).then((response)=>{

        if(response.ok)
            return response.json();
        else throw new Error("Not found");


  }).catch((err)=>console.log(err));
}

export async function fetchClubById(id:number):Promise<Club>{

    return fetch(`http://localhost:3000/clubs/${id}`).then((response)=>{

        if(response.ok)
            return response.json();
        else throw new Error("Not found");


  }).catch((err)=>console.log(err));
}

export async function fetchClubsByCity(city:string):Promise<Club[]>{
    return fetch(`http://localhost:3000/clubs?city=${city}`).then((response)=>{

        if(response.ok)
            return response.json();
        else throw new Error("Not found");


  }).catch((err)=>console.log(err));
}
export async function fetchClubsIdByName(name:string):Promise<Club[]>{
    return fetch(`http://localhost:3000/clubs?name=${name}`).then((response)=>{

        if(response.ok)
            return response.json();
        else throw new Error("Not found");


  }).catch((err)=>console.log(err));
}
export async function fetchMatchesByHome(homeId:number):Promise<Match[]>{
    return fetch(`http://localhost:3000/clubs?homeId=${homeId}`).then((response)=>{
        if(response.ok)
            return response.json();
        else throw new Error("Not found");
  }).catch((err)=>console.log(err));
}
export async function fetchMatchesByAway(awayId:number):Promise<Match[]>{
    return fetch(`http://localhost:3000/clubs?awayId=${awayId}`).then((response)=>{
        if(response.ok)
            return response.json();
        else throw new Error("Not found");
  }).catch((err)=>console.log(err));
}

export async function getAnyMatches(Id:number){
    let matches =  await fetchMatchesByHome(Id);
    matches.concat(await fetchMatchesByAway(Id));
    return matches;
}