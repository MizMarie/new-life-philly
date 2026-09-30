import step1Img from "@/assets/nlp-step1.jpg";
import step2Img from "@/assets/nlp-step2.jpg";
import step3Img from "@/assets/nlp-step3.jpg";
import storyImg from "@/assets/nlp-story.jpg";
import guideImg from "@/assets/nlp-guide.jpg";
import kidsImg from "@/assets/ministry-2.png.asset.json";
import youthImg from "@/assets/ministry-3.png.asset.json";
import youngAdultsImg from "@/assets/ministry-4.png.asset.json";
import womenImg from "@/assets/ministry-5.png.asset.json";
import menImg from "@/assets/ministry-6.png.asset.json";

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
export const YOUTUBE_LIVE_URL = "https://www.youtube.com/@NewLifePhilly/streams";
export const YOUTUBE_PLAYLISTS_URL = "https://www.youtube.com/@NewLifePhilly/playlists";
export const APPLE_PODCAST_URL = "https://podcasts.apple.com/us/podcast/new-life-philly/id1566807007";
export const SPOTIFY_PODCAST_URL = "https://open.spotify.com/show/6O3AeJlMXHC2GmTl6NJVGc";

export const EMAIL = "newlife@newlifephilly.net";
export const PHONE = "215-324-4566";
export const ADDRESS_1 = "425 E Roosevelt Blvd";
export const ADDRESS_2 = "Philadelphia, PA 19120";
export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=425+E+Roosevelt+Blvd,+Philadelphia,+PA+19120&output=embed";
export const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=425+E+Roosevelt+Blvd,+Philadelphia,+PA+19120";

/**
 * Church Center deep links for the "Additional Resources" row.
 */
export const RESOURCE_LINKS = [
  { label: "Someone to pray with", href: PRAYER_URL },
  { label: "Prayer for what keeps me stuck", href: UNBOUND_PRAYER_URL },
  { label: "Someone to talk to", href: COUNSELING_URL },
  { label: "Help with a need", href: RESOURCES_HELP_URL },
  { label: "To be baptized or dedicate my child", href: BAPTISM_URL },
  { label: "To host an event here", href: BUILDING_REQUEST_URL },
];

/** Ministries — drafted copy and placeholder photos until real ones arrive. */
export const MINISTRIES = [
  {
    id: "kids",
    name: "Kids",
    label: "A place for my kids",
    ages: "Ages 1 through 5th grade",
    url: "https://newlifephilly.churchcenter.com/pages/new-life-kids",
    img: kidsImg.url,
    alt: "Green line-art icon of a box of crayons on a navy background",
    body: "Sunday mornings, kids have their own space with people who know their names. Ages 1 through 5th grade.",
  },
  {
    id: "youth",
    name: "Youth",
    label: "A place for my teen",
    ages: "Middle and high school",
    url: "https://newlifephilly.churchcenter.com/groups/fellowship-groups/youth-ministry",
    img: youthImg.url,
    alt: "Green line-art icon of a basketball on a navy background",
    body: "Honest conversation, real friendships, and room to ask the hard questions. Middle and high school.",
  },
  {
    id: "young-adults",
    name: "Young Adults",
    label: "People my age",
    ages: "College & twenties",
    url: "https://newlifephilly.churchcenter.com/groups/fellowship-groups/young-adults",
    img: youngAdultsImg.url,
    alt: "Green line-art icon of a campfire on a navy background",
    body: "For students, workers, and everyone figuring out what's next.",
  },
  {
    id: "women",
    name: "Women",
    label: "Sisters to walk with",
    ages: "All seasons of life",
    url: "https://newlifephilly.churchcenter.com/pages/womens-ministry",
    img: womenImg.url,
    alt: "Green line-art icon of a coffee mug on a navy background",
    body: "Brunches, fireside evenings in homes, and Bible study over coffee. Women of every age and stage.",
  },
  {
    id: "men",
    name: "Men",
    label: "Brothers who show up",
    ages: "All ages",
    url: "https://newlifephilly.churchcenter.com/groups/fellowship-groups/men-s-ministry",
    img: menImg.url,
    alt: "Green line-art icon of a barbecue grill on a navy background",
    body: "Soccer, pickup baseball, retreats, and time in the Word together. Men of every age.",
  },
];

export const NAV_LINKS = [
  { label: "Meet Our Team", to: "/leadership" },
  { label: "What We Believe", to: "/what-we-believe" },
  { label: "Sermons", to: "/sermons" },
  { label: "Next Steps", to: "/next-steps" },
] as const;


export const FIRST_SUNDAY = [
  { title: "10:00 AM on Sundays", body: "About 90 minutes, start to finish." },
  { title: "Free street parking", body: "On D St, Bingham, and Westford." },
  { title: "Wear whatever", body: "Comfortable is fine. Nobody's checking." },
  { title: "Kids are covered", body: "Kids worship with you first, then head to nursery, toddler care, or Kids Church." },
  { title: "We meet upstairs", body: "Someone at the door will walk you to the stairs." },
  { title: "Stay for coffee, or slip out", body: "Both are fine." },
];

/** Refresh these upcoming events monthly. */
export const UPCOMING = [
  {
    date: "Sun, Oct 4",
    title: "Communion Sunday",
    body: "Sunday worship at 10am, and we share communion together.",
    url: "https://newlifephilly.churchcenter.com/calendar/event/200386417",
  },
  {
    date: "Fri, Oct 9",
    title: "Life Group with dinner",
    body: "A meal and real conversation with a group in Cheltenham.",
    url: "https://newlifephilly.churchcenter.com/calendar/event/237971735",
  },
  {
    date: "Oct 9 to 11",
    title: "Young Adult Retreat",
    body: "A weekend away at Camp Men-O-Lan with New Life Young Adults.",
    url: "https://newlifephilly.churchcenter.com/calendar/event/221183709",
  },
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
    body: "Find your people. Groups for every age.",
    cta: "Find Your People →",
    to: "/next-steps",
  },
  {
    n: "3",
    img: step3Img,
    alt: "Volunteers sorting donation boxes on a Philadelphia street",
    title: "Real Hope Acts",
    body: "Serve your neighbors. Use what you've got.",
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
