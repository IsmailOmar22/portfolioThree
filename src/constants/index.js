export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Edon Kelmendi',
        position: 'Lecturer at Queen Mary University of London',
        img: 'assets/review1.png',
        review:
            'Ismail is a motivated and talented student with excellent problem-solving skills. They apply their knowledge to real-world challenges with impressive results, showing initiative, dedication, and technical expertise in projects.',
        linkedIn:
            'https://www.linkedin.com/in/edon-kelmendi-6a902a318/'
    },
    {
        id: 2,
        name: 'Aqib Miah',
        position: 'Computer Science Student at Queen Mary University of London',
        img: 'assets/review2.png',
        review:
            'Ismail is an amazing teammate who always brings innovative ideas to projects. Their technical skills and problem-solving abilities make them a reliable and dedicated collaborator. Working with them has been a great learning experience for me',
        linkedIn:
            'https://www.linkedin.com/in/aqibmiah1/'
    },
    {
        id: 3,
        name: 'Acil Djehiche',
        position: 'Computer Science Student at Queen Mary University of London ',
        img: 'assets/review3.png',
        review:
            'Ismail is a hardworking and supportive teammate who always goes above and beyond to ensure the success of a project. Their attention to detail and ability to tackle complex problems make them a pleasure to work with',
        linkedIn:
            'https://www.linkedin.com/in/acil-djehiche/'
    },
    {
        id: 4,
        name: 'Usman Naeem',
        position: 'Reader in Computer Science Education, Deputy Director of Education, QMUL',
        img: 'assets/review4.png',
        review:
            'Ismail has demonstrated exceptional talent in web development, consistently delivering creative and well-structured solutions. Their attention to detail, strong technical skills, and dedication to learning make them stand out as a top student in my class',
        linkedIn:
            'https://www.linkedin.com/in/drusmannaeem/'
    },
];

export const myProjects = [
        {
        title: 'Horizon - Online Banking Platform',
        desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
    'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
        backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
        tags: [
        {
            id: 1,
            name: 'React.js',
            path: '/assets/react.svg',
        },
        {
            id: 2,
            name: 'TailwindCSS',
            path: 'assets/tailwindcss.png',
        },
        {
            id: 3,
            name: 'TypeScript',
            path: '/assets/typescript.png',
        },
        {
            id: 4,
            name: 'Framer Motion',
            path: '/assets/framer.png',
        },
    ],
},
    {
        title: 'Samurai vs Kenji - Multiplayer Combat Game',
        desc: 'Samurai vs Kenji is a thrilling 2D fighting game where two players control Samurai Mack or Kenji. Featuring unique moves, fast-paced combat, and responsive controls, it offers an exciting, competitive gaming experience.',
        subdesc:
            'Built with JavaScript, HTML, and CSS, Samurai vs Kenji offers smooth animations and real-time multiplayer gameplay, delivering an exciting and competitive experience for players.' ,
        href: 'https://fighting-game-git-main-ismailomar22s-projects.vercel.app/',
        texture: '/textures/project/samvskenj2.mp4.mp4',
        logo: '/assets/samurai.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/html5.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: '/assets/css.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'Tiled',
                path: '/assets/tiled.png',
            },
        ],
    },
    {
        title: 'PitchAI - AI-powered Football Match Analysis',
        desc: 'An advanced football analysis system designed to evaluate match performance in real time. It tracks player movements, analyses game strategies, and provides insights, helping coaches and analysts make informed decisions.',
        subdesc:
            'With a focus on accuracy, this system integrates player tracking, game analysis, and performance evaluation, powered by Python, YOLO, and OpenCV, to enhance team strategies and optimize match outcomes.',
        href: '',
        texture: '/textures/project/comingsoon.mp4',
        logo: '/assets/footAI.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 2,
                name: 'YOLO',
                path: 'assets/yolo.png',
            },
            {
                id: 3,
                name: 'OpenCV',
                path: '/assets/opencv.png',
            },

        ],
    },
    {
        title: 'GallopSim - 2D Animated Horse Racing Game',
        desc: 'An interactive 2D horse racing game featuring animated races and dynamic gameplay. Players can watch races unfold in real time with engaging visuals and smooth animations.',
        subdesc:
            'With a focus on immersive gameplay, this game leverages Java and Java Swing to create vibrant 2D animations, real-time race mechanics, and a seamless user experience.',
        href: '',
        texture: '/textures/project/comingsoon2.mp4',
        logo: '/assets/horse.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: '/assets/java.png',
            },
            {
                id: 2,
                name: 'Java Swing',
                path: 'assets/swing.png',
            },

        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Outlier',
        pos: 'Generative AI Code Specialist',
        duration: '2024 - Present',
        title: "At Outlier AI, I work on enhancing the capabilities of generative AI by fixing, evaluating, and optimising code. I collaborate with advanced AI systems to create accurate, efficient solutions and improve their performance in coding tasks.",
        icon: '/assets/outlier.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Formula Student',
        pos: 'Engineering Team Member',
        duration: '2023 - Present',
        title: "I contribute to the design, development, and testing of high-performance race cars as part of a dynamic team. My role focuses on applying engineering principles to solve real-world challenges and optimize vehicle performance for competitive motorsport events.",
        icon: '/assets/formula.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Best Tutors',
        pos: 'Maths & Science Tutor',
        duration: '2020 - 2020',
        title: "I provide personalised tutoring sessions in math and science, helping students understand complex concepts and build confidence. I create tailored lesson plans and use interactive methods to engage students and foster their academic growth.",
        icon: '/assets/tutor.png',
        animation: 'salute',
    },
];

export const educationDetails = [
    {
        institution: "Queen Mary University of London",
        degree: "Computer Science (BSc)",
        date: "2022 - Present",
        description:
            "Queen Mary University has been an incredible environment for my growth as a software engineer. Throughout my studies, I've delved into various areas of computer science, with a special focus on artificial intelligence, modeling, and simulations. The university’s rigorous curriculum and innovative approach have allowed me to develop both my technical skills and critical thinking abilities. I’ve gained valuable hands-on experience in software development, programming languages, and data structures, preparing me for real-world challenges in the tech industry.",
        image: "/assets/qmul.png", // Replace with actual image path
    },
    {
        institution: "Kingsmead Sixth Form",
        degree: "Mathematics, Physics, Economics (A-levels)",
        date: "2020 - 2022",
        description:
            "At Kingsmead Sixth Form, I pursued A-levels in Mathematics, Physics, and Economics, subjects that shaped my analytical and problem-solving abilities. My strong grades—ABB—reflect the hard work and dedication I put into my studies. Mathematics honed my logical thinking, Physics expanded my understanding of the world through scientific principles, and Economics provided a solid foundation for understanding global financial systems. These subjects have not only equipped me with technical skills but have also fostered my ability to think critically and adapt to diverse challenges.",
        image: "/path/to/kingsmead-image.jpg", // Replace with actual image path
    },
];
