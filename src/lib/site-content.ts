import step1Img from "@/assets/nlp-step1.jpg";
import step2Img from "@/assets/nlp-step2.jpg";
import step3Img from "@/assets/nlp-step3.jpg";
import storyImg from "@/assets/nlp-story.jpg";
import guideImg from "@/assets/nlp-guide.jpg";

/** Set to false when the site is ready for public search indexing. */
export const IS_STAGING_PREVIEW = true;

export const GIVE_URL = "https://newlifephilly.churchcenter.com/giving";
export const PRAYER_URL = "https://newlifephilly.churchcenter.com/people/forms/382423";
export const CHURCH_CENTER_URL = "https://newlifephilly.churchcenter.com/home";
export const GROUPS_URL =
  "https://newlifephilly.churchcenter.com/groups/life-groups?enrollment=open_signup%2Crequest_to_join&filter=enrollment";
export const CALENDAR_URL = "https://newlifephilly.churchcenter.com/calendar?view=gallery";
export const SERVE_URL = CALENDAR_URL;
export const UNBOUND_PRAYER_URL = "https://newlifephilly.churchcenter.com/pages/unbound-prayer";
export const SERVING_INTEREST_URL = "https://newlifephilly.churchcenter.com/people/forms/559863";
export const COUNSELING_URL = "https://docs.google.com/forms/d/e/1FAIpQLScWzQqmwyWp5h_xrPQBX1BPltE9q7nZU1rY98tlrTqwoEcqEQ/viewform?pli=1";
export const BAPTISM_URL = "https://newlifephilly.churchcenter.com/people/forms/474912";
export const RESOURCES_HELP_URL = "https://newlifephilly.churchcenter.com/people/forms/875034";
export const BUILDING_REQUEST_URL = "https://newlifephilly.churchcenter.com/people/forms/400853";
export const YOUTUBE_URL = "https://www.youtube.com/@NewLifePhilly";
export const EMAIL = "newlife@newlifephilly.net";
export const PHONE = "215-324-4566";
export const ADDRESS_1 = "425 E Roosevelt Blvd";
export const ADDRESS_2 = "Philadelphia, PA 19120";

/**
 * Church Center deep links for the "Additional Resources" row.
 */
export const RESOURCE_LINKS = [
  { label: "How Can We Pray for You?", href: PRAYER_URL },
  { label: "Unbound Prayer", href: UNBOUND_PRAYER_URL },
  { label: "Counseling Help", href: COUNSELING_URL },
  { label: "Resources Help", href: RESOURCES_HELP_URL },
  { label: "Baptism / Dedication", href: BAPTISM_URL },
  { label: "Building Requests", href: BUILDING_REQUEST_URL },
  { label: "Serving Interest", href: SERVING_INTEREST_URL },
];

/** Ministries — drafted copy and placeholder photos until real ones arrive. */
export const MINISTRIES = [
  {
    id: "kids",
    name: "Kids",
    ages: "Ages 1 – 5th grade",
    url: "https://newlifephilly.churchcenter.com/pages/new-life-kids",
    img: step1Img,
    alt: "Children playing together at New Life Philly",
    body: "Sunday mornings kids have their own space with people who know their names. Safe check-in, age-appropriate teaching, and plenty of room to be a kid.",
  },
  {
    id: "youth",
    name: "Youth",
    ages: "Middle & high school",
    url: "https://newlifephilly.churchcenter.com/groups/fellowship-groups/youth-ministry",
    img: step3Img,
    alt: "Youth group playing games in the gym",
    body: "Games in the gym, honest conversation, and a place to ask the hard questions without being handed a script. Students find real friendships here.",
  },
  {
    id: "young-adults",
    name: "Young Adults",
    ages: "College & twenties",
    url: "https://newlifephilly.churchcenter.com/groups/fellowship-groups/young-adults",
    img: guideImg,
    alt: "Young adults on a retreat together",
    body: "For students, workers, and everyone figuring out what's next. Community that meets you in the middle of the mess and points you toward Jesus.",
  },
  {
    id: "women",
    name: "Women",
    ages: "All seasons of life",
    url: "https://newlifephilly.churchcenter.com/pages/womens-ministry",
    img: storyImg,
    alt: "Women gathered around a table together",
    body: "Tables, Bibles, and coffee. Women across every age and stage gather to study Scripture, pray for one another, and carry each other's real life.",
  },
  {
    id: "men",
    name: "Men",
    ages: "All ages",
    url: "https://newlifephilly.churchcenter.com/groups/fellowship-groups/men-s-ministry",
    img: step2Img,
    alt: "Men gathered outside the church building",
    body: "Straight talk, shared work, and brothers who show up. Men meet to grow in Christ and to take responsibility at home, at work, and in the neighborhood.",
  },
];

export const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Sermons", to: "/sermons" },
  { label: "Next Steps", to: "/next-steps" },
] as const;


export const FIRST_SUNDAY = [
  { title: "10:00 AM on Sundays", body: "About 90 minutes, start to finish." },
  { title: "Free street parking", body: "On D St, Bingham, and Westford." },
  { title: "Wear whatever", body: "Most people are in jeans." },
  { title: "Kids are covered", body: "Ages 1 through 5th grade have their own space." },
  { title: "We meet upstairs", body: "Someone at the door will walk you to the stairs." },
  { title: "Stay for coffee — or slip out", body: "Both are completely fine." },
];

export const STEPS = [
  {
    n: "1",
    img: step1Img,
    alt: "People greeting each other as they arrive for a Sunday gathering",
    title: "Real People Gather",
    body: "Sundays at 10am. You're welcome here.",
    cta: "Plan a Visit →",
    to: "/plan-your-visit",
  },
  {
    n: "2",
    img: step2Img,
    alt: "A small group laughing together around a table",
    title: "Real Love Connects",
    body: "Find your people. There's a place for every age and every stage.",
    cta: "Find Your People →",
    to: "/next-steps",
  },
  {
    n: "3",
    img: step3Img,
    alt: "Volunteers sorting donation boxes on a Philadelphia street",
    title: "Real Hope Acts",
    body: "Serve your neighbors. Live your purpose.",
    cta: "See Ways to Serve →",
    href: SERVE_URL,
  },
];


export const SOCIALS = [
  {
    label: "YouTube",
    href: YOUTUBE_URL,
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/NewLifePhilly/",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/newlifephilly/",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-.8-.7-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.4 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Zm6.9-11.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  },
];
