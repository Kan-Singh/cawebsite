
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
    tile: "Amadeus",
    author: "Milos Forman",
    type: "Film",
    genres: ["historical", "comedy", "drama", "music", "period", "biographical"],
    publishYear: "1984",
    startDate: "11/30/2024",
    currentPosition: "1h 4m/2h 40m",
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
    <Container>
      {/* Create a flex container to position the main content and the side section */}
      <div className="flex items-start justify-between gap-8">
        {/* Main Content Section */}
        <div className="flex-1">
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
  
        {/* Right Section (GIF and Playlist stacked vertically) */}
        <div className="w-full max-w-sm flex flex-col gap-4"> {/* Right-side container */}
          {/* GIF */}
          <div>
            <img
              src="https://i.pinimg.com/originals/d2/b8/ad/d2b8ad9758287638f109e8f75493bc3f.gif" // Replace with your GIF URL
              alt="Exciting Animation"
              className="w-full h-auto rounded-md"
            />
          </div>
  
          {/* Spotify Playlist */}
          <div>
            <iframe
              src="https://open.spotify.com/embed/playlist/5BnH2nGGslkuc8rm8QzDG1?utm_source=generator" // Replace with your playlist ID
              width="100%"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
              title="Spotify Playlist"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}  
 
  

  