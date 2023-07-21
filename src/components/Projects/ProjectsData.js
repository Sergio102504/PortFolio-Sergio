import reactBootstrapImage from "../../images/images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/images/techs/react-router-dom.png";
import sassImage from "../../images/images/techs/sass.png";
import reactImage from "../../images/images/techs/react.png";
import semanticImage from "../../images/images/techs/semantic.png";
import styledImage from "../../images/images/techs/styled-logo.png";
import cssImage from "../../images/images/techs/css.png";
import simpsonProject from "../../images/images/projects/simpson.jpeg";
import dynamicFormProject from "../../images/images/projects/dynamic.jpeg";
import marvelProject from "../../images/images/projects/marvel.jpeg";
import rickMorty from "../../images/images/projects/rick-morty.jpeg";
import tareasProject from "../../images/images/projects/todo.jpeg";

export const projectsPortfolio = [
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
            {name:"React", src:reactImage},
            {name:"CSS",   src:cssImage  },
        ],
        description: "Aplicacion creada basada en un api publica sobre la famosa seria rick and morty.",
        repository: "https://github.com/Sergio102504/rickandmorty",
        website:"https://master--dashing-crostata-df5df4.netlify.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Todo list",
        image: tareasProject,
        techs: [
            {name:"React", src:reactImage},
            {name:"Semantic UI React",   src:semanticImage  },
        ],
        description: "Aplicacion creada para el listado de tareas de la cotidianidad.",
        repository: "https://github.com/Sergio102504/Todo-list",
        website:"https://endearing-daifuku-0a4e5c.netlify.app/" 
    },
    {
        title: "Simpsons API",
        image: simpsonProject,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"Styled Components",   src:styledImage  },
        ],
        description: "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
        repository: "https://github.com/Sergio102504/lossimpson",
        website:"https://master--superb-sunflower-6d8cf4.netlify.app/" 
    },
    {
        title: "Marvel API",
        image: marvelProject,
        techs: [
            {name:"React", src:reactImage},
            {name:"React Router",   src:reactRouterdomImage  },
            {name:"Sass",   src:sassImage  },
            {name:"Semantic",   src:semanticImage  },
        ],
        description: "Application created with React JS, React-Router and Sass to make a request an external API of Marvel.",
        repository: "https://github.com/Sergio102504/MarvelComics",
        website:"#!" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Dynamic Form",
        image: dynamicFormProject,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"React Bootstrap",   src:reactBootstrapImage  },
        ],
        description: "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
        repositorSy: "https://github.com/Sergio102504/Dinamic-Form",
        website:"https://master--legendary-dodol-51b22b.netlify.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    
];