import waterImg from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 3.png";
import educationImg from "../assets/KOBAPE, ABEOKUTA.png";
import envImg from "../assets/DOWNSTREAM OF USUMA RIVER BEING CLEAN UP.png";
import schoolStudentImg from "../assets/school-student.jpeg";
import studentVideo from "../assets/student-video.mp4";

import water2 from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA.png";
import water3 from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 2.png";
import water4 from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 4.png";
import water5 from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 5.png";
import borehole from "../assets/Motorised Borehole Repaired by WBOF at Dutse Alhaji Abuja.png";
import latrineBefore from "../assets/Community Latrine Rehabilitation at Rubochi Abuja b4.png";
import latrineAfter from "../assets/Community Latrine Rehabilitation at Rubochi Abuja aft.png";

import classroomA from "../assets/CLASSROOMS REHABILITATION AT IJEUN, ABEOKUTA.png";
import classroomB from "../assets/CLASSROOMS REHABILITATION PROJECT AT IJEUN, ABEOKUTA.png";
import odoBefore from "../assets/Odo Ona LEA primary school, Ibadan b4.png";
import odoAfter from "../assets/Odo Ona LEA primary school, Ibadan aft.png";
import okeBefore from "../assets/Primary School, Oke Ado, Ibadan b4.png";
import okeAfter from "../assets/Primary School, Oke Ado, Ibadan aft.png";
import hygiene from "../assets/Primary pupil enlightenment on good sanitation and hygiene.png";

import envCleanup from "../assets/DOWNSTREAM OF USUMA RIVER BEING CLEAN UP.png";
import sokotoCleanup from "../assets/CLEAN UP BY WALTER OLATUNJI FOUNDATION AT THE SOKOTO RIVER DOWN STREAM OF RIVER NIGER AT NIGERIA PORTION OF THE BASIN.png";
import womenHygiene from "../assets/Sensitization of women on good hygiene and sanitation by WBOF.png";

export const programmes = [
  {
    slug: "rural-water-supply-sanitation",
    emoji: "🚰",
    title: "Rural Water Supply & Sanitation",
    desc: "Provision of motorized boreholes, hand pump boreholes, and renovation of public latrines in rural communities across Nigeria.",
    fullDesc: `Access to clean water is a basic human right. WBOF has been at the forefront of providing sustainable water supply solutions to rural and semi-urban communities across Nigeria.

Our water interventions include the installation of motorised boreholes, hand pump boreholes, and the rehabilitation of broken-down water facilities. We also renovate and construct public latrines to improve sanitation conditions.

Every project is community-driven — we work directly with residents, traditional leaders, and local government to ensure facilities are maintained long after we leave.`,
    areas: ["Apete", "Kuchingoro", "Rubochi"],
    image: waterImg,
    gallery: [waterImg, water2, water3, water4, water5, borehole, latrineBefore, latrineAfter],
  },
  {
    slug: "primary-school-education",
    emoji: "🏫",
    title: "Primary School Education",
    desc: "Renovating classrooms and providing educational materials — chairs, tables, blackboards, chalks and pencils — for primary school pupils.",
    fullDesc: `Education is the foundation of lasting change. WBOF invests in the physical and material needs of primary schools that have been neglected in underserved communities.

Our education programme covers classroom renovation and rehabilitation, supply of furniture (chairs and tables), provision of blackboards, chalks, pencils, and other learning materials.

We have worked in schools across Northern, Eastern, Western, and Southern Nigeria — ensuring that no child has to learn in a dilapidated environment.`,
    areas: ["Northern Nigeria", "Eastern Nigeria", "Western & Southern Nigeria"],
    image: educationImg,
    gallery: [educationImg, classroomA, classroomB, odoBefore, odoAfter, okeBefore, okeAfter, hygiene],
  },
  {
    slug: "environment-capacity-building",
    emoji: "🌿",
    title: "Environment & Capacity Building",
    desc: "River system clean-ups and tree planting to reduce desertification and CO₂ emissions, protecting Nigeria's vital waterways.",
    fullDesc: `Nigeria's environment is under constant threat from pollution, deforestation, and climate change. WBOF takes direct action to protect and restore the natural environment.

Our environmental work includes large-scale river clean-up exercises, tree planting campaigns to combat desertification, and capacity building workshops that educate communities on sustainable environmental practices.

We have conducted clean-ups on major rivers including the Usuma, Imo, and Sokoto rivers, removing waste and raising awareness about the importance of healthy waterways.`,
    areas: ["River Usuma, Abuja", "Imo River", "Sokoto River"],
    image: envImg,
    gallery: [envImg, envCleanup, sokotoCleanup, womenHygiene],
  },
  {
    slug: "donation-of-school-writing-materials",
    emoji: "✏️",
    title: "Donation of School Writing Materials",
    desc: "Empowering students through the donation of writing materials, supporting academic success and reducing barriers to learning.",
    fullDesc: `Many students in public secondary schools lack the basic writing materials needed to participate fully in their education. WBOF bridges this gap through targeted supply drives.

At Honourable Olajiire Akintunde Memorial High School in Ibadan, we supplied writing materials directly to students — pens, notebooks, pencils, and other essentials — ensuring they can focus on learning without the burden of resource scarcity.

This initiative reflects our belief that small interventions can make a significant difference in a student's confidence, attendance, and academic performance.`,
    areas: ["Odo Okun, Arapaja, Odo Ona Kekere, Ibadan, Oyo State"],
    location: "Honourable Olajiire Akintunde Memorial High School",
    image: schoolStudentImg,
    gallery: [schoolStudentImg],
    video: studentVideo,
  },
];
