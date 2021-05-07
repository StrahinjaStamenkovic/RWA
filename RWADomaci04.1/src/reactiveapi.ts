import { from, fromEvent, Observable } from "rxjs";
import { debounceTime, filter, map, switchMap } from "rxjs/operators";
import { Match } from "./interfaces";
import { fetchAllMatches, fetchClubIdByName, fetchMatchesByAway, fetchMatchesByHome } from "./servercalls";

/*export function emitInputMatches():Observable<string>{
    return fromEvent(document.querySelector('.searchBarMatches'),"input").pipe(
        debounceTime(1000),
        map((ev:InputEvent)=>(<HTMLInputElement>ev.target).value),
        filter(el=>el.length>2)
    )
}

export function emitMatches(inputPolaziste:HTMLInputElement):Observable<Match[]>{
    return <Observable<Match[]>> emitInputMatches().pipe(
     switchMap( async (clubName)=>{
        let clubId = await fetchClubIdByName(clubName);

         let matchesHome= await fetchMatchesByHome(clubId);
         let matchesAway= await fetchMatchesByAway(clubId);

         return from(matchesHome.join(matchesAway));
 
      } ));
 }

 export function emitInputClubs():Observable<string>{
    return fromEvent(document.querySelector('.searchBarClubs'),"input").pipe(
        debounceTime(1000),
        map((ev:InputEvent)=>(<HTMLInputElement>ev.target).value),
        filter(el=>el.length>2)
    )
}


export function emitClubs():Observable<Match[]>{
    return emitInput().pipe(
     switchMap(clubCity=>{
         return from(())
 
      } ))
 }*/