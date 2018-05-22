const Lang ={
    JAVA : "devicon-java-plain",
    PYTHON : "devicon-python-plain",
    MYSQL : "devicon-mysql-plain",
    REACT : "devicon-react-original",
    JS : "devicon-javascript-plain",
    CPP : "devicon-cplusplus-plain",
    CSHARP : "devicon-csharp-plain",
    JQ : "devicon-jquery-plain",
    AWS: "devicon-amazonwebservices-original"
}

const Sect ={
    WEBAPP : "WEBAPP",
    SOFTWARE : "SOFTWARE",
    GAME : "GAME"

}

const Projects = [

    {
        id: "gnaASWvbFSG9g9t5YIkm",
        Name: "NoteSpace",
        Section: Sect.WEBAPP,
        Description: "An Online Stick Note Board. Create new Sticky Notes or edit old ones. You can even have custom Stick Note colors. This project was made in React.js with Redux",
        Img: [
            "NoteSpace.jpg",
        ],
        SourceLink: "https://github.com/JohnsonLu3/NoteSpace",
        Visit: "https://johnsonlu3.github.io/NoteSpace/src/index.html",
        ShowCase: true,
        languages:[
            Lang.JS,
            Lang.REACT
        ],
        Details:[
            'Website version of a sticky note board',
            'Create new sticky notes or edit old ones',
            'Freedom to choose what color note to post',
            'Created in React.js with Redux'
        ]

    },
    {
        id: "17V7b9f5ltkxvqcbAyT5",
        Name: "CinApex",
        Section: Sect.WEBAPP,
        Description: "Group project, where we developed a database for a ‘movie rental company’. We used MySql for the database. Website was designed with Java along with technologies like JDBC were used for the backend of the website.",
        Img: [
            "CinApex.png",
            "CinApex2.png"
        ],
        SourceLink: "https://github.com/JohnsonLu3/CinApex",
        Visit: null,
        ShowCase: true,
        languages:[
            Lang.JAVA,
            Lang.JS,
            Lang.JQ
        ],
        Details:[
            'Mock website that acted as a movie rental service.',
            'Backend developed with JDBC and frontend using BootStrap.',
            'Backend developed with Java Spring Framework and frontend developed with Bootstrap.',
            'MySQL used to store customer and movie rental data.'
        ]

    },

    {
        id: "PMT7MTY34F2zCOcufSeE",
        Name: "Youtube Spoiler Free",
        Section: Sect.WEBAPP,
        Description: "Don't you get tired when you're trying to share a video with your friends but the video's title and thumbnail spoil it? Well thats what YTSF, YTSpoilerFree is for. Just replace youtube with ytSpoilerFree in the url and boom, spoiler free video to share.",
        Img: [
            "ytsf.png"
        ],
        SourceLink: null,
        Visit: "http://www.ytspoilerfree.com/",
        ShowCase: true,
        languages:[
            Lang.JAVA,
            Lang.JS,
            Lang.JQ,
            Lang.AWS
        ],
        Details:[
            'Restful website with frontend and backend. Developed by myself',
            'Website designed to remove title and thumbnail from Youtube videos'
        ]

    },
    {
        id: "JVFteLyrIZhGob4zCD36",
        Name: "Gerry Mandering Analyzer",
        Section: Sect.WEBAPP,
        Description: "Created a restful web app in a team of four. The site was built in Java using the spring framework and was integrated with a mySQL 5.7 database. The app’s purpose was to analysis a state and it’s districts to determine if the state was gerrymandered.",
        Img: [
            "GerryMandering.png"
        ],
        SourceLink: "https://github.com/JohnsonLu3/Gerrymandering-Analysis",
        Visit: null,
        ShowCase: true,
        languages:[
            Lang.JAVA,
            Lang.MYSQL,
            Lang.PYTHON,
            Lang.JS,
            Lang.JQ
        ],
        Details:[
            "Restful website with frontend and backend. Developed in a team of three.",
            "Used Agile development process.",
            "Backend developed with Java Spring Framework and frontend developed with Bootstrap.",
            "MySQL 5.7, hosted on AWS DB, was used to hold large amounts of geospatial data.",
            "Python was used to parse and reduce size of data by 75% while retaining accuracy of data.",
            "Turned into a research project at Stonybrook for Spring 2018.",
        ]

    },
    {
        id: "5RdIUmyV1CBmK83JQS1p",
        Name: "Maze Generator",
        Section: Sect.SOFTWARE,
        Description: "Backtracing algorithm that generates a maze in java script using the P5.js library.",
        Img: [
            "MazeGenerator.png"
        ],
        SourceLink: "https://github.com/JohnsonLu3/MazeGenerator",
        Visit: "https://johnsonlu3.github.io/MazeGenerator/",
        ShowCase: true,
        languages:[
            Lang.JAVA,
        ],
        Details:[
            'Made in processing with Java',
            'Generates a maze using backtracing'
        ]

    },
    {
        id: "H1zxiq6E6VbhW8YGfsVo",
        Name: "Smart Snake",
        Section: Sect.SOFTWARE,
        Description: "A classic game of snake but played by a Neural Network. Created in processing with Java. Both the game and neural network are made from scratch.",
        Img: [
            "SmartSnake.png"
        ],
        SourceLink: "https://github.com/JohnsonLu3/smartSnake",
        Visit: null,
        ShowCase: true,
        languages:[
            Lang.JAVA
        ],
        Details:[
            'Made in processing with Java',
            'Can be played as a normal game of snake',
            'Can be switch into AI or User modes',
            'Uses a shallow neural network to learn how to play the game'            
        ]

    },
    {
        id: "iyqQCfuNoWdSBuOR7ilf",
        Name: "Phase Shifter",
        Section: Sect.GAME,
        Description: "Video game developed in a team of 3. We used the phaser js library.",
        Img: [
            "PhaseShifter.png"
        ],
        SourceLink: "https://github.com/JohnsonLu3/PhaseShifter",
        Visit: "https://johnsonlu3.github.io/PhaseShifter/",
        ShowCase: false,
        languages:[
            Lang.JS
        ],
        Details:[
            'PhaseShifter was created in javascript.',
            'Developed using Phaser.js game engine.',
            'The game plays as a platformer.',
            'Using the shift key PhaseShifter can change colors.',
            'Based on his color, PhaseShifter can interact with objects of the same color.'            
        ]

    },
    {
        id: "HQrIw0zQLg42M7UMk275",
        Name: "Text Editor",
        Section: Sect.SOFTWARE,
        Description: "A basic Text Editor app made in C++ using the QT Framework. Supports many of the basic functionalities of a text editor. Such as, cut, copy, paste and undo/redo.",
        Img: [
            "TextEditor.jpg"
        ],
        SourceLink: "https://github.com/JohnsonLu3/TextEditor",
        Visit: null,
        ShowCase: false,
        languages:[
            Lang.CPP
        ],
        Details:[
            'Made in C++ with QT framework',
            'Supports cut, copy, paste',
            'Supports save, saveAs, and undo/redo'
        ]

    },
    {
        id: "Lm9BmDLOfoqjEIPuh25d",
        Name: "Specturm Analyzer",
        Section: Sect.SOFTWARE,
        Description: "A audio spectrum Analyzer made in processing. This was made out of boredom and it was a real fun quick project to make.",
        Img: [
            "Analyzer.png",
            "Analyzer2.png"
        ],
        SourceLink: "https://github.com/JohnsonLu3/SpectrumAnalyzer",
        Visit: null,
        ShowCase: false,
        languages:[
            Lang.JAVA
        ],
        Details:[
            'Made in Processing with Java',
            'Listens to input audio and displays the audio spectrum',
            'With the press of a mouse click the user can switch between visual modes'
        ]

    },
    {
        id: "cbMO4HlsfETEk1BUCZ4V",
        Name: "Super RPS Fighters Deluxe",
        Section: Sect.GAME,
        Description: "Rock, Paper, Scissors as a fighting game. Created with a friend. I handle coding and he handled art assets.",
        Img: [
            "SRPSFD.png",
            "SRPSFD2.png"
        ],
        SourceLink: "https://github.com/JohnsonLu3/SuperRPSFightersDeluxe",
        Visit: null,
        ShowCase: false,
        languages:[
            Lang.CSHARP
        ],
        Details:[
            'Made in C# with unity.',
            'Programming done by me and art and idea created by a friend.',
            'The game is a rock paper scissors style fighting game.'
        ]

    }
]
export default Projects;