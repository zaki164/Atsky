import { faFacebookF, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChartBar, faCircleUser, faCreditCard, faFile, faUser } from "@fortawesome/free-regular-svg-icons";
import { faDiagramProject, faGear, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { images } from "./index";

const nav =
[
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
]


const data = {
  nav,
  LatestUploadsData,
  Reminders,
  SocialMedia,
  Projects,
} 

export default data
