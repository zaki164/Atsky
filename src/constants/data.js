import { faCode, faDollarSign, faUser as usersolid, faSpinner, faDiagramProject, faGear, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faChartBar, faCircleUser, faCreditCard, faFile, faUser, faCircleCheck, faRectangleList, faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { images } from "./index";

const nav = [
  {
    name: "Dashboard",
    icon: faChartBar
  },
  {
    name: "Settings",
    icon: faGear
  },
  {
    name: "Profile",
    icon: faUser
  },
  {
    name: "Projects",
    icon: faDiagramProject
  },
  {
    name: "Courses",
    icon: faGraduationCap
  },
  {
    name: "Friends",
    icon: faCircleUser
  },
  {
    name: "Files",
    icon: faFile
  },
  {
    name: "Plans",
    icon: faCreditCard
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
    icon: usersolid,
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
    detail: "Record Python Create Exe Project"
  },
  {
    name: "Write Article",
    detail: "Write Low Level vs High Level Languages"
  },
  {
    name: "Finish Project",
    detail: "Publish Academy Programming Project"
  },
  {
    name: "Attend The Meeting",
    detail: "Attend The Project Business Analysis Meeting",
    done: true
  },
  {
    name: "Finish Lesson",
    detail: "Finish Teaching Flex Box"
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
    followers: "90K Followers",
    subscribe: "Follow",
    icon: faTwitter
  },
  {
    platform: "Facebook",
    followers: "2M Like",
    subscribe: "Like",
    icon: faFacebookF
  },
  {
    platform: "Youtube",
    followers: "1M Subs",
    subscribe: "Subscribe",
    icon: faYoutube
  },
  {
    platform: "Linkedin",
    followers: "70K Followers",
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

const WidgetsData = [
  {
    name: "Quick Draft",
    checked: true
  },
  {
    name: "Yearly Targets",
    checked: true
  },
  {
    name: "Tickets Statistics",
    checked: true
  },
  {
    name: "Latest News",
    checked: true
  },
  {
    name: "Latest Tasks",
    checked: false
  },
  {
    name: "Top Search Items",
    checked: true
  }
];

const ServerNames = ["Megaman", "Zero", "Sigma"];

const ProjectsData = [
  {
    author: "Zaki Dashboard",
    title: "Zaki Dashboard Project Design And Programming And Hosting",
    date: "15/10/2021",
    imgs: [images.team1, images.team2, images.team3, images.team4, images.team5],
    details: ["Programming", "Design", "Hosting", "Marketing"],
    price: "2500 $",
    color: "blue",
    width: "90%"
  },
  {
    author: "Academy Portal",
    title: "Academy Portal Project Design And Programming",
    date: "15/6/2022",
    imgs: [images.team4, images.team2, images.team1],
    details: ["Programming", "Design"],
    price: "1800 $",
    color: "orange",
    width: "50%"
  },
  {
    author: "Chatting Application",
    title: "Chatting Application Project Design",
    date: "8/8/2021",
    imgs: [images.team2, images.team5],
    details: ["Design"],
    price: "950 $",
    color: "green",
    width: "70%"
  },
  {
    author: "Ahmed Dashboard",
    title: "Ahmed Dashboard Project Hosting",
    date: "13/11/2021",
    imgs: [images.team3],
    details: ["Hosting"],
    price: "700 $",
    color: "green",
    width: "80%"
  },
  {
    author: "Ahmed Portal",
    title: "Ahmed Portal Project Design And Programming",
    date: "10/10/2021",
    imgs: [images.team1, images.team2, images.team3],
    details: ["Programming", "Design"],
    price: "1500 $",
    color: "orange",
    width: "30%"
  },
  {
    author: "Mohamed Application",
    title: "Mohamed Application Project Design",
    date: "5/9/2021",
    imgs: [images.team2, images.team3],
    details: ["Design"],
    price: "900 $",
    color: "red",
    width: "10%"
  },
  {
    author: "Mohamed Dashboard",
    title: "Mohamed Dashboard Project Design And Programming And Hosting",
    date: "25/9/2021",
    imgs: [images.team1, images.team3, images.team4, images.team2, images.team5],
    details: ["Programming", "Design", "Hosting", "Marketing"],
    price: "1650 $",
    color: "green",
    width: "40%"
  },
  {
    author: "Mohamed Portal",
    title: "Mohamed Portal Project Design And Programming",
    date: "5/12/2021",
    imgs: [images.team2, images.team4, images.team5],
    details: ["Programming", "Design"],
    price: "2600 $",
    color: "red",
    width: "20%"
  },
  {
    author: "Ahmed Application",
    title: "Ahmed Application Project Design",
    date: "4/8/2021",
    imgs: [images.team1, images.team2, images.team4, images.team5],
    details: ["Design"],
    price: "80 $",
    color: "blue",
    width: "80%",
  },
]



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
}

export default data
