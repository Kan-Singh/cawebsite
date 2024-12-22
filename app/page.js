
import Container from './components/Container';



function Work({work}) {
  return (
    <div className="max-w-sm border border-primary-200 rounded-xl px-4 pb-4 pt-6 bg-gradient-to-bl from-secondary-100 to-white via-white md:hover:shadow-xl md:hover:scale-105 transition-all space-y-4">
      <div className="space-y-2">
        <h3 className="font-medium text-xl">{work.tile}</h3>
        <p className="flex items-center justify-start space-x-2 text-xs font-medium uppercase text-primary-600">
        {work.author}
        </p>
        <p className="flex items-center justify-start space-x-2 text-xs font-medium uppercase text-primary-600">
        {work.type}
        </p>
        <p className="flex items-center justify-start space-x-2 text-xs font-medium uppercase text-primary-600">
        {work.publishYear}
        </p> 
      </div>
      <div className="space-y-1">
        <h4 className="font-medium">Genres</h4>
        <ul className="flex flex-wrap gap-2 text-sm text-secondary-800">
        {work.genres.map((genre) => (
    <li
      className="bg-secondary-100 px-2 py-0.5 rounded-full"
      key={genre}
    >
      {genre}
    </li>
  ))}
        </ul>
      </div>
      <div className="space-y-1">
        <h4 className="font-medium">Progress</h4>
        <ul className="font-mono text-sm">
          <li>{work.startDate}</li>
          <li>{work.currentPosition}</li>
        </ul>
      </div>
    </div>
  );
}

/*
function Env ({decor}) {
  return (
    {ed.gif}
  );
}
*/

export default function Home() {
  const work = {
    tile: "We Have Always Lived in the Castle",
    author: "Shirley Jackson",
    type: "Novel",
    genres: ["gothic", "horror", "classics", "thriller"],
    publishYear: "1962",
    startDate: "10/30/2024",
    currentPosition: "163/214",
  };

  const work2 = {
    tile: "Interview with The Vampire",
    author: "Rolin Jones",
    type: "Television",
    genres: ["gothic", "horror", "drama", "romance"],
    publishYear: "2022",
    startDate: "9/15/2024",
    currentPosition: "4/8",
  };

  const work3 = {
    tile: "Severance",
    author: "Ling Ma",
    type: "Novel",
    genres: ["dystopian", "science-fiction", "apocalyptic fiction", "satire"],
    publishYear: "2018",
    startDate: "Not Yet Started",
  };
  

  return (
    <Container  >
      {/* Create a flex container to position the GIF on the side */}
      <div className=" flex items-start justify-between gap-8">
        {/* Main Content Section */}
        <div className= " flex-1">
          <h4 className="font-medium">Current:</h4>
          <br />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Work work={work} />
            <Work work={work2} />
          </ul>
          <br />
          <br />
          <br />
          <h4 className="font-medium">Up Next:</h4>
          <br />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Work work={work3} />
          </ul>
        </div>

        {/* Side GIF */}
        <div className="w-full max-w-xs">
          <br />
          <br />
          <br />
          <br />
          <img
            src="https://i.pinimg.com/originals/d2/b8/ad/d2b8ad9758287638f109e8f75493bc3f.gif"  // Replace with your GIF URL
            alt="Exciting Animation"
            className="w-full h-auto rounded-md"
          />
        </div>
        
      </div>
    </Container>
  );
}