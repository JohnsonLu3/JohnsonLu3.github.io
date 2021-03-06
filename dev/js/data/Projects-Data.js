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
        id: "b0cb7f7472bb0fd781e",
        Name: "Midtown Comics Website",
        Section: Sect.WEBAPP,
        Description: "An ecommerce website built for Midtown Comics. Designed for both desktop and mobile use. Worked with Accessibility360 to ensure a nice user experience for all kinds of users",
        Img: [
            "midtown1.png",
			"midtown2.png",
			"midtown3.png",
			"midtown4.png"
        ],
        SourceLink: null,
        Visit: "https://www.midtowncomics.com/",
        ShowCase: true,
        languages:[
            Lang.JS,
            Lang.JQ
        ],
        Details:[
            'Responsive design for both mobile and desktop use',
            'Built with Accessibility in mind',
            'Contains features such as dynamically sizing carousels',
        ],
		Skill:[
			'HTML',
			'JS',
			'CSS',
			'JQuery',
			'Bootstrap',
			'ADA' 
		]

    },
    {
        id: "b0cb7f7472bb0fd1ikd",
        Name: "Midtown Comics Android App",
        Section: Sect.SOFTWARE,
        Description: "Android App for Midtown Comics",
        Img: [
            "midtown-android1.png",
			"midtown-android2.png",
			"midtown-android3.png",
			"midtown-android4.png",
            "midtown-android5.png",
            "midtown-android6.png",
            "midtown-android7.png",
            "midtown-android8.png",
            "midtown-android9.png",
            "midtown-android10.png"
        ],
        SourceLink: null,
        Visit: null,
        ShowCase: true,
        languages:[
            Lang.JAVA,
            Lang.MYSQL
        ],
        Details:[
            'Built Front/Back end of Mobile app from ground up',
            'Built Web API to talk with the mobile app.'
        ],
		Skill:[
			'Java',
			'Android',
			'C#',
			'.NET',
			'SQLite'
		]

    },
	{
        id: "f7g9t4G9Ik75YF2WvbSm",
        Name: "SoundBoard",
        Section: Sect.WEBAPP,
        Description: "An Online sound board created with React along side with a Web API developed in Node.js. I developed a sound board to use voice clips from my friend's YouTube channel. The web app sends GET request to the web API which returns the voice clips and the app then plays it in sequence. Generated lines are also sharable.",
        Img: [
            "SoundBoard.jpg",
        ],
        SourceLink: "https://github.com/JohnsonLu3/FleshmonkSoundBoard",
        Visit: "https://johnsonlu.dev/FleshmonkSoundBoard/",
        ShowCase: true,
        languages:[
            Lang.JS,
            Lang.REACT
        ],
        Details:[
            'Web App developed with React.js',
            'Web API developed with Node.js',
            'Server hosted on AWS',
            'SoundBoard sends GET request to the API to get a series of voice clips',
			'Voice clips are gathers in the API and the audio data is sent over as a response'
        ],
		Skill:[
			'React.js',
			'Node.js',
			'JQuery',
			'HTML',
			'CSS',
			'JS',
			'AWS'
		]

    },
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
        ],
		Skill:[
			'React.js',
			'React Redux',
			'JQuery',
			'HTML',
			'CSS',
			'JS'
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
        ],
		Skill:[
			'MySQL',
			'Java',
			'BootStrap',
			'Java Spring'
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
        ],
		Skill:[
			'Java',
			'Java Spring',
			'JQuery',
			'HTML',
			'JS',
			'JQuery'
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
        ],
		Skill:[
			'Java',
			'Java Spring',
			'MySQL',
			'HTML',
			'JS',
			'JQuery',
			'CSS',
			'AWS'
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
        ],
		Skill:[
			'Java',
			'Processing'
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
        ],
		Skill:[
			'Java',
			'Processing'
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
        ],
		Skill:[
			'Phaser.js',
			'JS'
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
        ],
		Skill:[
			'C++'
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
        ],
		Skill:[
			'Java',
			'Processing'
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
        ],
		Skill:[
			'C#',
			'Unity'
		]

    }
]
export default Projects;