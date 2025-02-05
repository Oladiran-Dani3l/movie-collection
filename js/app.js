document.addEventListener('DOMContentLoaded', () => {
    loadMovies();

});

function loadMovies() {
    // using sample data to avoid fetch requests issues
    const sampleMovies = [
        {
            name: "Dune",
            year: "2022",
            genre: ["Adventure", "Scifi"],
            overview: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness.",
            image: "images/dune.jfif"
       },

        {
            name: "Barbie",
            year: "2023",
            genre: ["Comedy", "Fantasy"],
            overview: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
            image: "images/barbie.jpg"
        },
        
        {
            name: "Fantastic Mr Fox",
            year: "2009",
            genre: ["Family", "Comedy"],
            overview: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
            image: "images/fantastic-mr-fox.jfif"
        },
        
        {
            name: "Gangs of Lagos",
            year: "2023",
            genre: ["Thriller", "Crime"],
            overview:"A group of friends who each have to navigate their own destiny, growing up on the bustling streets and neighborhood of Isale Eko, Lagos.",
            image: "images/gangs-of-lagos.jfif"
        },
        
        {
            name: "Get Out",
            year: "2017",
            genre: ["Horror", "Comedy"],
            overview:"A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
            image: "images/get-out.jpg"
        },
        
        {
            name: "Zootopia",
            year: "2016",
            genre: ["Family", "Comedy"],
            overview:"In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
            image: "images/zootopia.jpg"
        },
        
        {
            name: "Interstellar",
            year: "2014",
            genre: ["Adventure", "Scifi"],
            overview:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
            image: "images/interstellar.jpg"
        },
        
        {
            name: "Superman",
            year: "2025",
            genre: ["Action", "Scifi"],
            overview:"Follows the titular superhero as he reconciles his heritage with his human upbringing. He is the embodiment of truth, justice and the human way in a world that views this as old-fashioned.",
            image: "images/superman.jfif"
        },
        
        {
            name: "The Batman",
            year: "2022",
            genre: ["Action", "Crime"],
            overview:"When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
            image: "images/the-batman.jpg"
        },
        
        {
            name: "Oppenheimer",
            year: "2023",
            genre: ["Thriller", "Historical drama"],
            overview:"A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.",
            image: "images/oppenheimer-2.jfif"
        }
    ];

    displayMovies(sampleMovies);
}