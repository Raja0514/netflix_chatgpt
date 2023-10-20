
import Header from "./Header";
import usenowplayingmovies from "../hooks/usenowplayingmovie";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";


const Browse = () => {

  
  usenowplayingmovies();


  return (
    <div>
      <Header />
      <Maincontainer/>
      <Secondarycontainer/>
      {
        /*

        main container
            videobackground
            video title
        seconddary container
           list of movies
           video cards

        */
      }
    </div>
  );
};

export default Browse;
