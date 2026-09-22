import waterImg from "../assets/WATER SUPPLY PROJECTS AT KARONMAJIGI VILLAGE, ABUJA 3.png";
import educationImg from "../assets/KOBAPE, ABEOKUTA.png";
import envImg from "../assets/DOWNSTREAM OF USUMA RIVER BEING CLEAN UP.png";
import schoolStudentImg from "../assets/school-student.jpeg";
import schoolStudentImg1 from "../assets/school-student2.jpeg";
import schoolStudentImg2 from "../assets/school-student3.jpeg";
import schoolStudentImg3 from "../assets/school-student4.jpeg";
import schoolStudentImg4 from "../assets/school-student5.jpeg";
import schoolStudentImg6 from "../assets/school-student7.jpeg";
import schoolStudentImg7 from "../assets/school-student8.jpeg";
import schoolStudentImg8 from "../assets/school-student9.jpeg";
import schoolStudentImg9 from "../assets/school-student10.jpeg";
import schoolStudentImg10 from "../assets/school-student11.jpeg";

import studentVideo from "../assets/student-video.mp4";
import studentVideo1 from "../assets/student-video2.mp4";
import studentVideo2 from "../assets/student-video3.mp4";
import studentVideo3 from "../assets/student-video4.mp4";

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
    desc: "Donation of motorized boreholes, hand pump boreholes, and renovation of public latrines as gifts to rural communities across Nigeria.",
    fullDesc: `Access to clean water is a basic human right. WBOF has been at the forefront of donating sustainable water supply solutions to rural and semi-urban communities across Nigeria.

Our water gifts include the installation of motorised boreholes, hand pump boreholes, and the rehabilitation of broken-down water facilities. We also donate the renovation and construction of public latrines to improve sanitation conditions.

Every project is community-driven — we work directly with residents, traditional leaders, and local government to ensure these donated facilities are maintained long after we leave.`,
    areas: ["Apete", "Kuchingoro", "Rubochi"],
    image: waterImg,
    gallery: [
      waterImg,
      water2,
      water3,
      water4,
      water5,
      borehole,
      latrineBefore,
      latrineAfter,
    ],
  },
  {
    slug: "primary-school-education",
    emoji: "🏫",
    title: "Primary School Education",
    desc: "Donating classroom renovations and educational materials — chairs, tables, blackboards, chalks and pencils — as gifts to primary school pupils.",
    fullDesc: `Education is the foundation of lasting change. WBOF donates to the physical and material needs of primary schools that have been neglected in underserved communities.

Our education gifts cover classroom renovation and rehabilitation, supply of furniture (chairs and tables), and donation of blackboards, chalks, pencils, and other learning materials.

We have supported schools across Northern, Eastern, Western, and Southern Nigeria — ensuring that no child has to learn in a dilapidated environment.`,
    areas: [
      "Northern Nigeria",
      "Eastern Nigeria",
      "Western & Southern Nigeria",
    ],
    image: educationImg,
    gallery: [
      educationImg,
      classroomA,
      classroomB,
      odoBefore,
      odoAfter,
      okeBefore,
      okeAfter,
      hygiene,
    ],
  },
  {
    slug: "environment-capacity-building",
    emoji: "🌿",
    title: "Environment & Capacity Building",
    desc: "Gifting river clean-ups and tree planting to communities to reduce desertification and CO₂ emissions, protecting Nigeria's vital waterways.",
    fullDesc: `Nigeria's environment is under constant threat from pollution, deforestation, and climate change. WBOF takes direct action to protect and restore the natural environment as a gift to current and future generations.

Our environmental donations include large-scale river clean-up exercises, tree planting campaigns to combat desertification, and capacity building workshops that empower communities with sustainable environmental practices.

We have conducted clean-ups on major rivers including the Usuma, Imo, and Sokoto rivers, removing waste and raising awareness about the importance of healthy waterways.`,
    areas: ["River Usuma, Abuja", "Imo River", "Sokoto River"],
    image: envImg,
    gallery: [envImg, envCleanup, sokotoCleanup, womenHygiene],
  },
  {
    slug: "donation-of-school-writing-materials",
    emoji: "✏️",
    title: "Donation of Writing Materials for School Students",
    desc: "Equipping school students with the tools they need to stay in class, stay focused, and stay ahead.",
    fullDesc: `A pen and a notebook might seem small, but for many students in under-resourced public schools, they are the difference between participating in class and being left behind.

WBOF visited Honourable Olajiire Akintunde Memorial High School in Ibadan and handed writing materials directly to students. Pens, notebooks, pencils, and other key supplies were distributed to ensure no student had to sit through a lesson without the means to engage.

The response from students and teachers alike was immediate — a renewed energy in the classroom that reminded us why even the simplest act of support can carry lasting impact.`,
    areas: ["Odo Okun, Arapaja, Odo Ona Kekere, Ibadan, Oyo State"],
    location: "Honourable Olajiire Akintunde Memorial High School",
    image: schoolStudentImg,
    gallery: [schoolStudentImg],
    videos: [studentVideo],
  },
  {
    slug: "donation-of-writing-materials-to-primary-school",
    emoji: "✏️",
    title: "Donation of Writing Materials for St. Leo Catholic Primary School",
    desc: "Reaching the youngest learners first — giving primary school pupils the materials that set the tone for a lifetime of learning.",
    fullDesc: `Good habits start early. WBOF believes that investing in a child's earliest years of schooling creates a ripple effect that shapes their entire academic journey.

At St. Leo Catholic Primary School, Orita, Ibadan, we went straight to the source — the pupils themselves — distributing pens, pencils, exercise books, and other writing materials in a warm and engaging session. Many of these children had never received new stationery before.

What struck us most was the pride on their faces. These materials weren't just supplies; they were a signal to each child that someone sees them, values their education, and is willing to invest in their future.`,
    areas: ["Orita, Ibadan, Oyo State"],
    location: "St. Leo Catholic Primary School, Orita",
    image: schoolStudentImg1,
    gallery: [
      schoolStudentImg1,
      schoolStudentImg2,
      schoolStudentImg3,
      schoolStudentImg4,
      schoolStudentImg6,
    ],
    videos: [studentVideo1, studentVideo2],
  },
  {
    slug: "writing-materials-elewura-community-school",
    emoji: "✏️",
    title: "Writing Materials for Community Model Basic Primary School",
    desc: "Taking the classroom further — bringing learning tools to pupils in the heart of a community that needs it most.",
    fullDesc: `In underserved urban communities, access to school supplies can be just as scarce as in rural areas. WBOF made its way to Community Model Basic Primary School, Elewura Challenge, Ibadan to meet pupils where they are.

Children at this school showed up every day with the will to learn — but often without the materials to do so. WBOF stepped in with a targeted supply of writing materials, placing essentials directly in the hands of pupils who needed them most.

This visit reinforced a core belief we hold: education empowerment is not one-size-fits-all. Every community, every school, every child deserves to be seen individually — and supported accordingly.`,
    areas: ["Elewura, Ibadan, Oyo State"],
    location: "Community Model Basic Primary School, Elewura Challenge, Ibadan",
    image: schoolStudentImg8,
    gallery: [
      schoolStudentImg7,
      schoolStudentImg8,
      schoolStudentImg9,
      schoolStudentImg10,
    ],
    videos: [studentVideo3],
  },
];
