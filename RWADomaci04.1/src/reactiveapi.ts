import { from, fromEvent, merge, Observable } from "rxjs";
import { debounceTime, filter, map, switchMap } from "rxjs/operators";
import { Club, Match } from "./interfaces";
import { fetchAllClubs, fetchAllMatches, fetchClubById, fetchClubsByCity, fetchClubsIdByName, fetchMatchesByAway, fetchMatchesByHome, getAnyMatches } from "./servercalls";

export function emitInputMatches():Observable<string>{
    return fromEvent(document.querySelector('.searchBarMatches'),"input").pipe(
        debounceTime(500),
        map((ev:InputEvent)=>(<HTMLInputElement>ev.target).value)
    )
}

export function emitMatches():Observable<any>{
    
    return emitInputMatches().pipe(
     switchMap( async (clubName)=>{
         if(clubName==="")
            return await fetchAllMatches();

        let clubs = await fetchClubsIdByName(clubName);
        let clubsIds = clubs.map(club => club.id)

        let matchesFiltered= new Array<Match>();
        clubsIds.forEach(async id=>{
            matchesFiltered=matchesFiltered.concat(await getAnyMatches(id))
        })
         return from(matchesFiltered);
      }),

      );
 }

 export function emitInputClubs():Observable<string>{
    return fromEvent(document.querySelector('.searchBarClubs'),"input").pipe(
        debounceTime(1000),
        map((ev:InputEvent)=>(<HTMLInputElement>ev.target).value)
    )
}


export function emitClubs():Observable<any>{
    return emitInputClubs().pipe(
     switchMap(async (clubCity:string)=>{
         if(clubCity==="")
            return from( await fetchAllClubs())
         else
            return from( await fetchClubsByCity(clubCity))
      }));
 }