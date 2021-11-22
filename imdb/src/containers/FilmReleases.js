import React, { useState } from "react";
import FilmList from "../components/FilmList";

const FilmReleases = () => {

    const [films, setFilms] = useState(
        [
            {
              id: 1,
              name: "Encanto",
              url: "https://www.imdb.com/title/tt2953050/?ref_=rlm"
            },
            {
              id: 2,
              name: "Dying to Divorce",
              url: "https://www.imdb.com/title/tt13234764/?ref_=rlm"
            },
            {
              id: 3,
              name: "House of Gucci",
              url: "https://www.imdb.com/title/tt11214590/?ref_=rlm"
            },
            {
              id: 4,
              name: "A Boy Called Christmas", 
              url: "https://www.imdb.com/title/tt10187208/?ref_=rlm"
            },
            {
              id: 5,
              name: "The First Wave",
              url: "https://www.imdb.com/title/tt13391444/?ref_=rlm"
            }
          ]
    )



    return(
        <>
            <h1>Upcoming Film Releases for UK</h1>
            <FilmList films={films}/>
        </>
    );
};

export default FilmReleases;