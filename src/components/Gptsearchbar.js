import React, { useRef } from "react";
import language from "../utils/languageconstant";
import { useSelector,useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { moviesgptapi } from "../utils/gptslice";

const Gptsearchbar = () => {

  const dispatch=useDispatch();

  const langaugekey = useSelector((store) => store.config.language);

  const searchtext = useRef(null);

  const searchTMDB = async (movie) => {
    const results = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const jsonresults=await results.json();

    return jsonresults;

  };

  const gptserachapi = async () => {
    //console.log('api calling..')

    //console.log(searchtext.current.value)

    //make api call to GPT API and get movie results

    const query =
      "Act as a movie recommetation system and suggest some movies for the query :" +
      searchtext.current.value +
      "only give me name of 10 movies,comma seprated.like the example result given ahead .Example Result: Gadar,sholay,don,koimilkaya,kolmal   ";

    const results = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    if (!results.choices) {
      //Error handling
    }

    console.log(results.choices?.[0]?.message?.content);

    //Andaz Apna Apna, Chupke Chupke, Gol Maal, Angoor, Padosan

    const gptmovies = results.choices?.[0]?.message?.content.split(",");

    // it will convert into array

    //["Andaz" , "Apna Apna", "Chupke Chupke", "Gol Maal", "Angoor", "Padosan"]

    console.log(gptmovies);

    const promisearray=gptmovies.map((movie)=>searchTMDB(movie));

    //["promise","promise","promise","promise","promise"]

    const finalresults=await Promise.all(promisearray);
    
    console.log(finalresults);

    dispatch(moviesgptapi({movienames:gptmovies,Tmdbresults:finalresults})) //multi data we can send this way

  };

  return (
    <div className=" pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          className="col-span-9 p-4 m-4 rounded-lg"
          type="text"
          placeholder={language[langaugekey].gptsearchplaceholder}
        />
        <button
          className="text-white col-span-3 m-4 bg-red-950 rounded-lg"
          onClick={gptserachapi}
        >
          {language[langaugekey].search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;

/*

Note:
<input className='col-span-9 p-4 m-4 rounded-lg' type='text' placeholder={language[langaugekey].gptsearchplaceholder}/> 
<button className='text-white col-span-3 m-4 bg-red-950 rounded-lg'>{language[langaugekey].search}</button>

in constant.js file

supported language variable identifier and language constant.js file object name such as

en,tamil and spanish should be same string.

also its need to give in array format language[langaugekey],language[langaugekey]


export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "tamil", name: "Tamil" },
  { identifier: "spanish", name: "Spanish" },
];


const language = {
  en: {
    search: "search",
    gptsearchplaceholder: "what you like to watch today",
  },
  tamil: {
    search: "தேடல்",
    gptsearchplaceholder: "இன்று நீங்கள் என்ன பார்க்க விரும்புகிறீர்கள்......",
  },

  spanish: {
    search: "buscar",
    gptsearchplaceholder: "lo que te gusta ver hoy",
  },
};

*/
