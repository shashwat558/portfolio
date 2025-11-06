import React from 'react'
import Image from 'next/image'

const movies = [
  {
    title: "The Social Network",
    description: "For me, The Social Network is about this guy who builds something massive but ends up alone anyway. Fincher makes it feel calm but tense like everything’s moving too fast for him to notice what he’s losing. It’s not really about Facebook; it’s about someone trying so hard to matter that he forgets the people who helped him get there.",
    image: "/movies/socialnetwork.jpeg",
  },

  {
    title: "La La Land",
    description: "This movie is about two people chasing their dreams in a city that makes it easy to lose yourself. They fall in love, lift each other up, and still drift apart. It’s full of color and music, but underneath, it’s about how love and ambition don’t always move in the same rhythm. It leaves you with a quiet ache the kind that feels both sad and beautiful at the same time.",
    image: "/movies/lalaland.jpeg",
  },

  {
    title: "Whiplash",
    description: "Whiplash honestly feels like a punch in the gut every time I watch it. It’s so intense not just the drumming, but the pressure, the fear, the need to be great. You start feeling the obsession, the pressure, the fear. It’s uncomfortable, but that’s what makes it so powerful.",
    image: "/movies/whiplash.jpeg",
  },
  

  {
    title: "The Prestige",
    description: "the prestige follows two rival magicians whose obsession with each other leads to tragedy.",
    image: "/movies/prestige.jpeg",
  },
  
  {
    title: "Interstellar",
    description: "Interstellar is about survival of people, of hope, of love, of what makes us human. It shows how far we’ll go to keep moving forward when everything seems lost. It’s about curiosity and courage, and how exploring the unknown is both our strength and our weakness. More than anything, it’s about humans trying to find a future when the world they knew is dying.",
    image: "/movies/Interstellar.jpeg",
  },
  {
    title: "Fight Club",
    description: "Fight Club is about the emptiness of modern, materialistic life, the frustration of a world that never gives you what you want, and the need to rebel against it. It’s about how one man’s journey into madness becomes a catalyst for change, how he finds purpose in chaos, anti-consumerism and how he realizes that sometimes the only way to survive is to fight back.",
    image: "/movies/fightclub.jpeg",
  },
  
  
  {
    title: "There Will Be Blood",
    description: "There Will Be Blood is about a man’s obsession with oil and the corruption that comes with it. It’s about how one man’s greed can destroy everything around him, how he’ll stop at nothing to get what he wants, and how his pursuit of wealth ultimately leads to his own destruction. It’s a story of ambition, greed, and the human cost of pursuing power.(one of the best acting performances i have ever seen)",
    image: "/movies/twbb.jpeg",
  },

  {
    title: "Little miss sunshine",
    description: "Little miss sunshine is one of the movies where teens are teaching adults how to live. It's about a dysfunctional family's road trip to a beauty pageant for the daughter.",
    image: "/movies/lms.jpeg",
  },
  {
    title: "The Grand Budapest Hotel",
    description: "The Grand Budapest Hotel is a colorful, whimsical tale about friendship and adventure in a bygone era. It's about a hotel owner and his staff who are trying to save the hotel from being sold to a new owner.",
    image: "/movies/grandbudapest.jpeg",
  },
  {
    title: "The darjeeling limited",
    description: "The Darjeeling Limited feels like healing in disguise. Three brothers on a train, pretending they’re fine while carrying too much inside. It’s awkward and sometimes absurd, but it understands grief in a way few movies do. By the end, it feels like letting go not of the past, but of the weight it leaves behind.",
    image: "/movies/tdl.jpeg",
  },
  {
    title: "Black Swan",
    description: "Black Swan delves into obsession and duality as a ballerina loses herself in the pursuit of perfection. It’s about the pressure to be perfect, the darkness inside that we all have, and how one performance can change everything. It’s a story of ambition, obsession, and the human cost of pursuing perfection.",
    image: "/movies/blackswan.jpeg",
  },
  {
    title: "Parasite",
    description: "Parasite is a dark comedy-drama about a family's parasitic relationship with another family. It's about a family who is trying to survive in a world where they are not wanted. It's about the greed of the rich and the poverty of the poor. It's about the struggle of the human spirit.",
    image: "/movies/parasite.jpeg",
  },
  {
    title: "The Departed",
    description: "The Departed feels like a constant rush of tension, where no one is ever safe not even the ones pretending to be. It’s full of betrayal and blurred lines, and yet it finds moments of raw humanity in all the chaos. Every twist feels earned, and by the end, it’s less about crime and more about what loyalty really costs.",
    image: "/movies/departed.jpeg",
  },
  {

    title: "The Shawshank Redemption",
    description: "The Shawshank Redemption is a story of hope and perseverance inside a brutal prison system. It's about a man who is wrongfully accused of murder and spends 20 years in prison. It's about the power of hope and the human spirit.",
    image: "/movies/shawshank.jpeg",
  },
  {
    title: "Pulp Fiction",
    description: "Pulp Fiction is a wild ride through crime, chaos, and the coolest conversations you’ll ever hear. It jumps between hitmen, gangsters, and small-time crooks, mixing violence with dark humor like no one else can. Every scene feels alive — the dancing, the diner talk, the tension that suddenly explodes. It’s messy, stylish, and completely unforgettable the kind of movie that makes breaking the rules look like an art form.",
    image: "/movies/pulpfiction.jpeg",
  },
  
  {
    title: "The Matrix",
    description: "The Matrix is a sci-fi classic questioning reality and human consciousness in a machine-controlled world. It's about a man who is a hacker who discovers that he is part of a simulation. It's about the choices he makes and the consequences of those choices.",
    image: "/movies/matrix.jpeg",
  },
  {
    title: "The Truman Show",
    description: "The Truman Show feels like waking up inside a dream you didn’t know you were in. It’s gentle, funny, and quietly heartbreaking all at once. The world around its main character looks perfect almost too perfect and you can feel something hidden beneath the surface. It’s a film about freedom, truth, and the quiet bravery it takes to open a door when you don’t know what’s on the other side.",
    image: "/movies/truman.jpeg",
  },
  {
    title: "Nightcrawler",
    description: "Nightcrawler is unsettling because it never looks away. It’s about a man who learns how to win in a world that rewards the wrong things. The way it’s shot, the way it moves it’s almost hypnotic. It makes you realize how easily ambition can turn into something darker when no one tells you to stop.",
    image: "/movies/nightcrawler.jpeg",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    description: "Eternal Sunshine feels like trying to forget someone you still love. It’s quiet and strange and completely human. The way it moves through memories feels like how heartbreak actually happens slowly, in flashes. By the end, it doesn’t tell you love lasts forever; it just says it’s worth remembering, even when it hurts.",
    image: "/movies/esosm.jpeg",
  },
  {
    title: "Into the Wild",
    description: "Into the Wild is about a young man who walks away from comfort to find something real. The film moves like nature itself quiet, harsh, and endlessly beautiful. It’s about freedom, loneliness, and the cost of wanting a life untouched by everything fake. Every frame feels like both a dream and a warning.",
    image: "/movies/intothewild.jpeg",
  },
  {
    title: "12 Angry Men(1957)",
    description: "12 Angry Men is one of those films that reminds you how powerful simple conversation can be. It’s just people in a room, arguing and listening, but it feels huge. It’s about fairness, patience, and standing your ground even when you’re alone. Every time I watch it, I’m reminded how rare it is for someone to really change their mind.",
    image: "/movies/12am.jpeg",
  },
  {
    title: "Inglourious Basterds",
    description: "Inglourious Basterds reimagines World War II as a revenge-fueled Tarantino masterpiece. It's about a group of Jewish soldiers who are trying to avenge the death of their families. It's about the power of one person to change the course of history.",
    image: "/movies/bastards.jpeg",
  },
  {
    title: "The Usual Suspects",
    description: "The Usual Suspects is a crime mystery famous for its twist ending and unreliable narration. It's about a group of people who are involved in a series of crimes. It's about the choices they make and the consequences of those choices.",
    image: "/movies/usualsuspect.jpeg",
  },
  {
    title: "2001: A Space Odyssey",
    description: "2001: A Space Odyssey is less a movie and more an experience calm, vast, and endlessly mysterious. It moves through space and time like a silent thought, asking what it really means to evolve, to exist. Every image feels deliberate, every silence louder than words. It’s not just about space it’s about us, and how small and strange we are in the middle of it all.",
    image: "/movies/spaceodd.jpeg",
  },
  {
    title: "Fantastic Mr. Fox",
    description: "Fantastic Mr. Fox is a stop-motion adventure full of wit, style, and heart. It's about a fox who is trying to live a normal life but is constantly being chased by a farmer. It's about the power of friendship and the importance of family.",
    image: "/movies/fox.jpeg",
  },
  {
    title: "Aftersun",
    description: "Aftersun feels like watching a memory fade in slow motion. It’s quiet, tender, and full of the things left unsaid between a father and daughter. There’s something so real about it how love doesn’t always show itself clearly, but you feel it all the same. It lingers long after, like sunlight you can still feel even when it’s gone.",
    image: "/movies/aftersun.jpeg",
  },
  {
    title: "Dead Poets Society",
    description: "Dead Poets Society celebrates individuality, rebellion, and the power of poetry to awaken the soul. It's about a teacher who is trying to inspire his students to think for themselves and to live their lives to the fullest. It's about the power of words and the importance of standing up for what you believe in.",
    image: "/movies/dps.jpeg",
  },

];


const page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold">movies everyone should watch once in their lifetime</h1>
        <p className="text-md text-muted-foreground">
          these movies are listed no particular order i love them all.
          {"(these are just some of the movies i love the list is not long)"}
        </p>
        <div className='flex flex-col gap-8 mt-8'>
          {movies.map((movie, index) => (
            <div key={index} className='flex flex-col md:flex-row gap-6 items-start'>
              
              <div className='shrink-0 w-full md:w-72 relative aspect-2/3'>
                <Image 
                  src={movie.image} 
                  alt={movie.title}
                  fill
                  className='rounded-lg object-cover shadow-lg'
                />
              </div>
              
              {/* Title and description on the right */}
              <div className='flex-1 flex flex-col gap-2'>
                <h2 className='text-2xl font-bold'>{movie.title}</h2>
                <p className='text-muted-foreground leading-relaxed'>{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  )
}

export default page