const EXPERIENCES = [
    {
        title: 'IT Engineer',
        date: 'Nov 2022 - Present',
        company_name: 'Sustenir Agriculture (Singapore) PTE. LTD',
        location: 'Singapore',
        job_type: 'On Site',
        icon: 'sustenir.png',
        responsibilities: [
            'Office 365 Administration',
            'Developed a label printing system to streamline and improve the operations with NodeJS + React + Raspberry PI',
            'Resolved general day-to-day IT issues.',
            'Managed ordering, replacements, and maintenance of laptops/PC/IT related devices',
        ],
    },
    {
        title: 'Full Stack Developer (Contract)',
        date: 'Mar 2021 - Nov 2022',
        company_name: '-',
        location: 'Singapore',
        job_type: 'Remote',
        icon: 'company.png',
        responsibilities: [
            'Developed Scheduling Web Apps using NodeJS, React + Postgres SQL',
            'Developed Environment Monitoring Apps using Python, MQTT + InfluxDB',
            'Programming, developing or integrating various information and operational technology for the wider business.',
        ],
    },
    {
        title: 'Full Stack Developer (Freelance)',
        date: 'Feb 2021- Feb 2021',
        company_name: 'BlueBell People PTE. LTD',
        location: 'Singapore',
        job_type: 'Remote',
        icon: 'bluebell_people.png',
        responsibilities: [
            'Developed IOT web apps using ReactJS.',
            'Developed backend applications with Node JS.',
            'Developed mobile applications using React Native.',
        ],
    },
    {
        title: 'Junior Web Developer',
        date: 'Sep 2018 - Jan 2021',
        company_name: 'Host Myanmar (Software Solutions)',
        location: 'Yangon (Myanmar)',
        job_type: 'On Site',
        icon: 'host_myanmar.png',
        responsibilities: [
            'Developed HR softwares.',
            'Developed Travels and Tour web apps.',
            'Developed government related softwares using PHP and ReactJS.',
        ],
    },
]

const TESTIMONIALS = [
    {
        name: 'Melvin Chow',
        position: 'Head of Regional Operations Performance and Projects',
        company: 'SUSTENIR AGRICULTURE (SINGAPORE) PTE LTD.',
        recommendation: '<p>&nbsp;&nbsp;&nbsp;Throughout his time with our organization, Ayar has been very diligent and showed great initiative to help the company maintain its existing IT infrastructure for the company personnel, and at the same time aggressively reducing cost for the company .....<p>..... He would be a valuable asset to any employer, and I would recommend him for any endeavour he chooses to pursue.</p>'
    },
    {
        name: '',
        position: '',
        company: '',
        recommendation: ''
    },
    {
        name: '',
        position: '',
        company: '',
        recommendation: ''
    },
]

const PROJECTS = [
    {
        title: "Sunnyside landing page",
        links: [
            { text: "Demo", link: "https://sunnyside-agency-landing-page-pink-six.vercel.app" },
            { text: "Source Code", link: "https://github.com/ayarhlaine/sunnyside-agency-landing-page" }
        ],
        description: "Responsive web landing page",
        image: "projects/sunnyside-agency-landing-page.webp",
        tags: [
            {
                color: '#34D399',
                name: "#frontend mentor", 
            },
            {
                color: '#08B5D4',
                name: "#html", 
            },
            {
                color: '#EC4899',
                name: "#scss", 
            },
        ]
    },
    {
        title: "Loopstudios landing page",
        links: [
            { text: "Demo", link: "https://loopstudios-landing-page-ten-alpha.vercel.app" },
            { text: "Source Code", link: "https://github.com/ayarhlaine/loopstudios-landing-page" }
        ],
        description: "Responsive web landing page",
        image: "projects/loopstudios-landing-page.webp",
        tags: [
            {
                color: '#34D399',
                name: "#frontend mentor", 
            },
            {
                color: '#08B5D4',
                name: "#html", 
            },
            {
                color: '#EC4899',
                name: "#scss", 
            },
        ]
    },
    {
        title: "Monster Chase Game",
        links: [
            { text: "Demo", link: "https://ayar-monster-chase.vercel.app/" },
            { text: "Source Code", link: "https://github.com/ayarhlaine/monster_chase" }
        ],
        description: "A 2D game developed with Unity Game Engine.",
        image: "projects/monster-chase.png",
        tags: [
            {
                color: '#34D399',
                name: "#unity", 
            },
            {
                color: '#08B5D4',
                name: "C#", 
            },
            {
                color: '#EC4899',
                name: "#game", 
            }
        ]
    }
]

export {
    EXPERIENCES,
    TESTIMONIALS,
    PROJECTS
}