
import Container from '../components/Container';


  function Archive({ item }) {
    return (
      <li className="border md:hover:scale-95 transition-transform border-primary-200 bg-gradient-to-bl from-secondary-100 to-white via-white rounded-xl p-4 flex items-start justify-start space-x-4">
        <img
          src={item.pic}
          alt={item.title}
          className="w-40 h-40 rounded-lg border object-cover border-primary-200"
        />
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="uppercase text-xs font-medium text-primary-600">
              {item.rating} 
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Tags</h4>
            <ul className="flex flex-wrap gap-2">
              {item.your_tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs text-secondary-800 rounded-full px-2 py-0.5 bg-secondary-100"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
  }

  

  

  export default async function Photos() {
    const item ={
      "title": "Wuthering Heights",
      "rating": "2/5",
      "pic": "https://logospressonline.com/cdn/shop/files/canon-classics-books-wuthering-heights-worldview-edition-28066830286896.jpg?v=1711149194",
      "your_tags": ["Novel", "gothic", "romance", "revenge"]
    };

    const item2 ={
      "title": "Rosemary's Baby",
      "rating": "5/5",
      "pic": "https://metro.co.uk/wp-content/uploads/2019/10/PRI_918390761-e1572453613363.jpg?quality=90&strip=all&zoom=1&resize=480%2C387",
      "your_tags": ["Film", "horror"]
    };
  
    const item3 ={
      "title": "Interview With The Vampire",
      "rating": "5/5",
      "pic": "https://pbs.twimg.com/media/GQP2rlRWEAAHKup.jpg",
      "your_tags": ["Television", "drama", "gothic", "romance", "period"]
    };

    const item4 ={
      "title": "Another Country",
      "rating": "2/5",
      "pic": "https://m.media-amazon.com/images/I/81ea9QuhL5L.jpg",
      "your_tags": ["Novel", "drama", "race", "queer", "classics"]
    };

    const item5 ={
      "title": "Piglet",
      "rating": "3/5",
      "pic": "https://m.media-amazon.com/images/I/81YVR59pFUL.jpg",
      "your_tags": ["Novel", "contemporary", "food", "class", "feminism", "character-driven"]
    };

    const item6 ={
      "title": "Daisies",
      "rating": "3/5",
      "pic": "https://i.pinimg.com/736x/e4/42/8c/e4428cb9f994ce51b09456af9a219b96.jpg",
      "your_tags": ["Film", "Czech", "surrealism", "experimental","satire" ]
    };

    const item7 ={
      "title": "Loves of a Blonde",
      "rating": "2/5",
      "pic": "https://i.ytimg.com/vi/2wN7COyj0k4/sddefault.jpg",
      "your_tags": ["Film", "Czech", "romance", "Tragicomedy","Coming of Age", "Drama" ]
    };


    return (
      <Container>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Archive item={item} />
          <Archive item={item2} />
          <Archive item={item3} />
          <Archive item={item4} />
          <Archive item={item5} />
          <Archive item={item6} />
          <Archive item={item7} />
        </ul>
      </Container>
    );
  }