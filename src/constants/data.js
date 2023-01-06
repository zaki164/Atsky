import { faCode, faDollarSign, faUser, faSpinner, faDiagramProject, faGear, faGraduationCap, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faChartBar, faCreditCard, faFile, faCircleCheck, faRectangleList, faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { images } from "./index";

const nav = [
  {
    name: "Dashboard",
    icon: faChartBar,
    color: "red"
  },
  {
    name: "Settings",
    icon: faGear,
    color: "green"
  },
  {
    name: "Profile",
    icon: faUser,
    color: "orange"
  },
  {
    name: "Projects",
    icon: faDiagramProject,
    color: "blue"
  },
  {
    name: "Courses",
    icon: faGraduationCap,
    color: "orange"
  },
  {
    name: "Friends",
    icon: faUserGroup,
    color: "red"
  },
  {
    name: "Files",
    icon: faFile,
    color: "blue"
  },
  {
    name: "Plans",
    icon: faCreditCard,
    color: "green"
  },
];

const yearlyData = [
  {
    icon: faDollarSign,
    name: "Money",
    number: "$20.000",
    Per: "80%",
    color: "blue"
  },
  {
    icon: faCode,
    name: "Projects",
    number: "24",
    Per: "55%",
    color: "orange"
  },
  {
    icon: faUser,
    name: "Team",
    number: "12",
    Per: "75%",
    color: "green"
  },
]

const TicketsData = [
  {
    icon: faRectangleList,
    num: 2500,
    status: "Total",
    color: "orange"
  },
  {
    icon: faSpinner,
    num: 500,
    status: "Pending",
    color: "blue"
  },
  {
    icon: faCircleCheck,
    num: 1900,
    status: "Closed",
    color: "green"
  },
  {
    icon: faRectangleXmark,
    num: 100,
    status: "Deleted",
    color: "red"
  }
]

const LatestNewsData = [
  {
    img: images.news1,
    title: "Created SASS Section",
    details: "New SASS Examples & Tutorials",
    date: "3 Days Ago"
  },
  {
    img: images.news2,
    title: "Changed The Design",
    details: "A Brand New Website Design",
    date: "5 Days Ago"
  },
  {
    img: images.news3,
    title: "Team Increased",
    details: "3 Developers Joined The Team",
    date: "7 Days Ago"
  },
  {
    img: images.news4,
    title: "Added Payment Gateway",
    details: "Many New Payment Gateways Added",
    date: "9 Days Ago"
  }
];

const TasksData = [
  {
    name: "Record One New Video",
    detail: "Record Python Create Exe Project",
    id: 1
  },
  {
    name: "Write Article",
    detail: "Write Low Level vs High Level Languages",
    id: 2
  },
  {
    name: "Finish Project",
    detail: "Publish Academy Programming Project",
    id: 3
  },
  {
    name: "Attend The Meeting",
    detail: "Attend The Project Business Analysis Meeting",
    id: 4,
    done: true
  },
  {
    name: "Finish Lesson",
    detail: "Finish Teaching Flex Box",
    id: 5
  },
]

const SearchData = [
  {
    title: "Programming",
    num: 220
  },
  {
    title: "JavaScript",
    num: 180
  },
  {
    title: "PHP",
    num: 160
  },
  {
    title: "Code",
    num: 145
  },
  {
    title: "Design",
    num: 110
  },
  {
    title: "Logic",
    num: 95
  },
  {
    title: "React",
    num: 88
  },
]

const LatestUploadsData = [
  {
    img: images.pdf,
    title: "my-file.pdf",
    author: "Zaki",
    size: 2.9
  },
  {
    img: images.avi,
    title: "My-Video-File.avi",
    author: "Admin",
    size: 4.9
  },
  {
    img: images.psd,
    title: "My-Psd-File.pdf",
    author: "Mohsen",
    size: 4.5
  },
  {
    img: images.zip,
    title: "My-Zip-File.pdf",
    author: "User",
    size: 8.9
  },
  {
    img: images.dll,
    title: "My-DLL-File.pdf",
    author: "Admin",
    size: 4.9
  },
  {
    img: images.eps,
    title: "My-Eps-File.pdf",
    author: "Designer",
    size: 8.9
  },
];

const Reminders = [
  {
    title: "Check My Tasks List",
    date: "28/09/2022 - 12:00am",
    color: "blue"
  },
  {
    title: "Check My Projects",
    date: "26/10/2022 - 12:00am",
    color: "green"
  },
  {
    title: "Call All My Clients",
    date: "05/11/2022 - 12:00am",
    color: "orange"
  },
  {
    title: "Finish The Development Workshop",
    date: "20/12/2022 - 12:00am",
    color: "red"
  },
];

const SocialMedia = [
  {
    platform: "Twitter",
    Platforms: "90K Platforms",
    subscribe: "Follow",
    icon: faTwitter
  },
  {
    platform: "Facebook",
    Platforms: "2M Like",
    subscribe: "Like",
    icon: faFacebookF
  },
  {
    platform: "Youtube",
    Platforms: "1M Subs",
    subscribe: "Subscribe",
    icon: faYoutube
  },
  {
    platform: "Linkedin",
    Platforms: "70K Platforms",
    subscribe: "Follow",
    icon: faLinkedin
  }
];

const Projects = [
  {
    Name: "Ministry Wikipedia",
    FinishDate: "10 May 2022",
    Client: "Ministry",
    Price: "$5300",
    Team: [images.team1, images.team2, images.team3, images.team4, images.team5],
    Status: "Pending"
  },
  {
    Name: "Zaki Shop",
    FinishDate: "12 Oct 2021",
    Client: "Zaki Company",
    Price: "$1500",
    Team: [images.team4, images.team1, images.team2],
    Status: "In Progress"
  },
  {
    Name: "Bouba App",
    FinishDate: "05 Sep 2021",
    Client: "	Bouba",
    Price: "$800",
    Team: [images.team5, images.team3],
    Status: "Completed"
  },
  {
    Name: "Mahmoud Website",
    FinishDate: "22 May 2021",
    Client: "Mahmoud",
    Price: "$600",
    Team: [images.team2, images.team4, images.team1, images.team3],
    Status: "Completed"
  },
  {
    Name: "Sayed Website",
    FinishDate: "24 May 2021",
    Client: "Sayed",
    Price: "$300",
    Team: [images.team1],
    Status: "Rejected"
  },
  {
    Name: "Arena Application",
    FinishDate: "01 Mar 2021",
    Client: "Arena Company",
    Price: "$2600",
    Team: [images.team2, images.team3, images.team4, images.team5],
    Status: "Completed"
  }
];

const ProfileInfo = {
  "General Information": {
    "Full Name": "Zaki Mohsen",
    "Gender": "Male",
    "Country": "Egypt",
    "checked": true
  },
  "Personal Information": {
    "Email": "o@nn.sa",
    "Phone": "019123456789",
    "Date Of Birthy": "25/10/1982",
    "checked": true
  },
  "Job Information": {
    "Title": "Full Stack Developer",
    "Programming Language": "Python",
    "Years Of Experience": "+2",
    "checked": false
  },
  "Billing  Information": {
    "Payment Method": "Paypal",
    "Email": "email@website.com",
    "Subscription": "Monthly",
    "checked": false
  }
};

const SkillsData = {
  1: ["HTML", "Pugjs", "HAML"],
  2: ["CSS", "SASS", "Stylus"],
  3: ["JavaScript", "TypeScript"],
  4: ["Vuejs", "Reactjs"],
  5: ["PHP", "Laravel"],
  6: ["Python", "Django"],
}

const ActivitiesData = [
  {
    img: images.activity1,
    name: "Store",
    details: "Bought The Mastering Python Course",
    time: "18:10",
    date: "Yesterday"
  },
  {
    img: images.activity2,
    name: "Academy",
    details: "Got The PHP Certificate",
    time: "16:05",
    date: "Yesterday"
  },
  {
    img: images.activity3,
    name: "Badges",
    details: "Unlocked The 10 Skills Badge",
    time: "18:05",
    date: "Yesterday"
  },
  {
    img: images.activity1,
    name: "Store",
    details: "Bought The Typescript Course",
    time: "12:05",
    date: "Yesterday"
  },
];

const WidgetsData = {
  "Quick Draft": true,
  "Yearly Targets": true,
  "Tickets Statistics": true,
  "Latest News": true,
  "Latest Tasks": true,
  "Top Search Items": true,
}

const ServerNames = ["Megaman", "Zero", "Sigma"];

const ProjectsData = [
  {
    author: "Zaki Dashboard",
    title: "Zaki Dashboard Project Design And Programming And Hosting",
    date: "15/10/2021",
    imgs: [images.team1, images.team2, images.team3, images.team4, images.team5],
    details: ["Programming", "Design", "Hosting", "Marketing"],
    price: "2500 $",
    width: "90%"
  },
  {
    author: "Academy Portal",
    title: "Academy Portal Project Design And Programming",
    date: "15/6/2022",
    imgs: [images.team4, images.team2, images.team1],
    details: ["Programming", "Design"],
    price: "1800 $",
    width: "50%"
  },
  {
    author: "Chatting Application",
    title: "Chatting Application Project Design",
    date: "8/8/2021",
    imgs: [images.team2, images.team5],
    details: ["Design"],
    price: "950 $",
    width: "70%"
  },
  {
    author: "Ahmed Dashboard",
    title: "Ahmed Dashboard Project Hosting",
    date: "13/11/2021",
    imgs: [images.team3],
    details: ["Hosting"],
    price: "700 $",
    width: "80%"
  },
  {
    author: "Ahmed Portal",
    title: "Ahmed Portal Project Design And Programming",
    date: "10/10/2021",
    imgs: [images.team1, images.team2, images.team3],
    details: ["Programming", "Design"],
    price: "1500 $",
    width: "30%"
  },
  {
    author: "Mohamed Application",
    title: "Mohamed Application Project Design",
    date: "5/9/2021",
    imgs: [images.team2, images.team3],
    details: ["Design"],
    price: "900 $",
    width: "10%"
  },
  {
    author: "Mohamed Dashboard",
    title: "Mohamed Dashboard Project Design And Programming And Hosting",
    date: "25/9/2021",
    imgs: [images.team1, images.team3, images.team4, images.team2, images.team5],
    details: ["Programming", "Design", "Hosting", "Marketing"],
    price: "1650 $",
    width: "40%"
  },
  {
    author: "Mohamed Portal",
    title: "Mohamed Portal Project Design And Programming",
    date: "5/12/2021",
    imgs: [images.team2, images.team4, images.team5],
    details: ["Programming", "Design"],
    price: "2600 $",
    width: "20%"
  },
  {
    author: "Ahmed Application",
    title: "Ahmed Application Project Design",
    date: "4/8/2021",
    imgs: [images.team1, images.team2, images.team4, images.team5],
    details: ["Design"],
    price: "80 $",
    width: "86%",
  },
];

const CoursesData = [
  {
    img: images.course1,
    avatar: images.team1,
    name: "Mastering Web Design",
    details: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
    subs: "950",
    price: "165 $",
  }, 
  {
    img: images.course2,
    avatar: images.team2,
    name: "Data Structure And Algorithms",
    details: "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
    subs: "1150",
    price: "210 $",
  }, 
  {
    img: images.course3,
    avatar: images.team1,
    name: "Responsive Web Design",
    details: "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
    subs: "650",
    price: "90 $",
  }, 
  {
    img: images.course4,
    avatar: images.team3,
    name: "Mastering Python",
    details: "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
    subs: "950",
    price: "250 $",
  }, 
  {
    img: images.course5,
    avatar: images.team3,
    name: "PHP Examples",
    details: "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
    subs: "850",
    price: "150 $",
  }, 
  {
    img: images.course2,
    avatar: images.team2,
    name: "Mastering Web Design",
    details: "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
    subs: "1150",
    price: "210 $",
  }, 
  {
    img: images.course3,
    avatar: images.team1,
    name: "Responsive Web Design",
    details: "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
    subs: "650",
    price: "90 $",
  }, 
  {
    img: images.course1,
    avatar: images.team1,
    name: "Mastering Web Design",
    details: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
    subs: "850",
    price: "145 $",
  },
  {
    img: images.course5,
    avatar: images.team3,
    name: "PHP Examples",
    details: "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
    subs: "850",
    price: "150 $",
  }, 
  {
    img: images.course4,
    avatar: images.team3,
    name: "Mastering Python",
    details: "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
    subs: "950",
    price: "250 $",
  }, 
];

const FriendsData = [
  {
    img: images.friend1,
    name: "Ahmed Nasser",
    job: "JavaScript Developer",
    friendsNum: 99,
    projectsNum: 15,
    articlesNum: 25,
    joined: "02/10/2021",
    vip: true,
    id: 1
  },
  {
    img: images.friend2,
    name: "Omar Fathy",
    job: "Cloud Developer",
    friendsNum: 30,
    projectsNum: 11,
    articlesNum: 12,
    joined: "02/08/2020",
    vip: false,
    id: 2
  },
  {
    img: images.friend3,
    name: "Omar Ahmed",
    job: "Mobile Developer",
    friendsNum: 80,
    projectsNum: 20,
    articlesNum: 18,
    joined: "02/06/2020",
    vip: false,
    id: 3
  },
  {
    img: images.friend4,
    name: "Zaki Mohsen",
    job: "Front-End Developer",
    friendsNum: 88,
    projectsNum: 16,
    articlesNum: 44,
    joined: "06/08/2022",
    vip: true,
    id: 4
  },
  {
    img: images.friend5,
    name: "Shady Nabil",
    job: "Back-End Developer",
    friendsNum: 70,
    projectsNum: 30,
    articlesNum: 18,
    joined: "28/06/2020",
    vip: false,
    id: 5
  },
  {
    img: images.friend2,
    name: "Amr Hendawy",
    job: "Algorithm Developer",
    friendsNum: 79,
    projectsNum: 30,
    articlesNum: 20,
    joined: "28/06/2020",
    vip: false,
    id: 6
  },
  {
    img: images.friend3,
    name: "Mahmoud Adel",
    job: "Cloud Developer",
    friendsNum: 30,
    projectsNum: 11,
    articlesNum: 12,
    joined: "02/08/2020",
    vip: false,
    id: 7
  },
  {
    img: images.friend1,
    name: "Ahmed Abuzaid",
    job: "Content Creator",
    friendsNum: 80,
    projectsNum: 30,
    articlesNum: 18,
    joined: "28/08/2020",
    vip: false,
    id: 8
  },
  {
    img: images.friend5,
    name: "Gareeb Elshiekh",
    job: "JavaScript Developer",
    friendsNum: 90,
    projectsNum: 15,
    articlesNum: 25,
    joined: "02/10/2020",
    vip: false,
    id: 9
  },
  {
    img: images.friend4,
    name: "Hamza Nabil",
    job: "Front-End Developer",
    friendsNum: 80,
    projectsNum: 20,
    articlesNum: 14,
    joined: "02/06/2020",
    vip: true,
    id: 10
  },
];

const FilesData = [
  {
    img: images.pdf,
    extention: "pdf",
    name: "Zaki",
    date: "22/08/2021",
    size: 5.5,
  },
  {
    img: images.avi,
    extention: "avi",
    name: "Admin",
    date: "20/06/2020",
    size: 14.2,
  },
  {
    img: images.eps,
    extention: "eps",
    name: "Uploader",
    date: "20/06/2020",
    size: 22.4,
  },
  {
    img: images.psd,
    extention: "psd",
    name: "Ahmed",
    date: "20/06/2020",
    size: 18.1,
  },
  {
    img: images.dll,
    extention: "dll",
    name: "Coder",
    date: "20/06/2020",
    size: 2.2,
  },
  {
    img: images.png,
    extention: "png",
    name: "Designer",
    date: "20/06/2020",
    size: 1.9,
  },
  {
    img: images.dll,
    extention: "dll",
    name: "Coder",
    date: "16/5/2021",
    size: 20.5,
  },
  {
    img: images.png,
    extention: "png",
    name: "Designer",
    date: "16/5/2021",
    size: 20.2,
  },
  {
    img: images.psd,
    extention: "psd",
    name: "Coder",
    date: "16/5/2021",
    size: 22.5,
  },
  {
    img: images.pdf,
    extention: "pdf",
    name: "Osama",
    date: "16/5/2021",
    size: 26.5,
  },
  {
    img: images.avi,
    extention: "avi",
    name: "Uploader",
    date: "16/5/2021",
    size: 8.8,
  },
  {
    img: images.pdf,
    extention: "pdf",
    name: "Admin",
    date: "16/5/2021",
    size: 24.4,
  },
  {
    img: images.psd,
    extention: "psd",
    name: "Coder",
    date: "16/5/2021",
    size: 2.1,
  },
  {
    img: images.eps,
    extention: "eps",
    name: "Designer",
    date: "16/5/2021",
    size: 4.3,
  },
  {
    img: images.avi,
    extention: "avi",
    name: "Shawky",
    date: "16/5/2021",
    size: 6.2,
  },
  {
    img: images.dll,
    extention: "dll",
    name: "Coder",
    date: "16/5/2021",
    size: 3.3,
  },
  {
    img: images.psd,
    extention: "psd",
    name: "Kamal",
    date: "07/2/2020",
    size: 8.1,
  },
  {
    img: images.eps,
    extention: "eps",
    name: "Admin",
    date: "07/2/2020",
    size: 4.4,
  },
  {
    img: images.dll,
    extention: "dll",
    name: "Ahmed",
    date: "07/2/2020",
    size: 3.2,
  },
  {
    img: images.avi,
    extention: "avi",
    name: "Uploader",
    date: "07/2/2020",
    size: 3.3,
  },
  {
    img: images.pdf,
    extention: "pdf",
    name: "Designer",
    date: "07/2/2020",
    size: 2.1,
  },
  {
    img: images.psd,
    extention: "psd",
    name: "Coder",
    date: "07/2/2020",
    size: 3.6,
  },
  {
    img: images.avi,
    extention: "avi",
    name: "Admin",
    date: "07/2/2020",
    size: 2.5,
  },
  {
    img: images.dll,
    extention: "dll",
    name: "Hamza",
    date: "07/2/2020",
    size: 1.5,
  },
  {
    img: images.psd,
    extention: "psd",
    name: "Designer",
    date: "07/2/2020",
    size: 7.7,
  }
];

const PlansData = [
  {
    plan: "Free",
    price: 0.00,
    color: "green",
    allow: ["Access All Text Lessons", "Access All Videos Lessons", "Appear On Leaderboard"],
    blocked: ["Browse Content Without Ads", "Access All Assignments", "Get Daily Prizes", "Earn Certificate", "1 GB Space For Hosting Files", "Access Badge System"],
    current: true
  },
  {
    plan: "Basic",
    price: 7.99,
    color: "blue",
    allow: ["Access All Text Lessons", "Access All Videos Lessons", "Appear On Leaderboard", "Browse Content Without Ads", "Access All Assignments", "Get Daily Prizes", "Earn Certificate"],
    blocked: ["1 GB Space For Hosting Files", "Access Badge System"],
    current: false
  },
  {
    plan: "Premium",
    price: 19.99,
    color: "orange",
    allow: ["Access All Text Lessons", "Access All Videos Lessons", "Appear On Leaderboard", "Browse Content Without Ads", "Access All Assignments", "Get Daily Prizes", "Earn Certificate", "1 GB Space For Hosting Files", "Access Badge System"],
    blocked: [],
    current: false
  },
];

const PlatformsData = [
  {
    platform: 'Facebook',
    A: 120,
  },
  {
    platform: 'Youtube',
    A: 110,
  },
  {
    platform: 'TikTok',
    A: 86,
  },
  {
    platform: 'WhatsApp',
    A: 99,
  },
  {
    platform: 'Twitter',
    A: 85,
  },
  {
    platform: 'Instagram',
    A: 65,
  },
];

const data = {
  nav,
  LatestUploadsData,
  Reminders,
  SocialMedia,
  Projects,
  ProfileInfo,
  SkillsData,
  ActivitiesData,
  LatestNewsData,
  SearchData,
  TasksData,
  yearlyData,
  TicketsData,
  WidgetsData,
  ServerNames,
  ProjectsData,
  CoursesData,
  FriendsData,
  FilesData,
  PlansData,
  PlatformsData,
}

export default data
