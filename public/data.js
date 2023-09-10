const topTeamOfTheWeek = [
  "The Dream Team",
  "Coffee Talk",
  "Game Changers",
  "Bookworms Unite",
  "Tech Titans",
  "Foodie Friends",
  "Fitness Fanatics",
  "Creative Minds",
  "Movie Buffs",
  "Travel Enthusiasts",
  "Pet Lovers Club",
  "Music Mania",
  "Outdoor Explorers",
  "Study Squad",
  "Art & Design Collective",
  "Sports Fanatics",
  "Entrepreneurial Hustlers",
  "Health & Wellness Warriors",
  "Parenting Pals",
  "DIY Enthusiasts",
];

const topUsers = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "David Davis",
  "Eva Wilson",
  "Frank Miller",
  "Grace Turner",
  "Hannah Hall",
  "Ivy Parker",
  "Jack Robinson",
  "Kate White",
  "Liam Murphy",
  "Mia Lee",
  "Noah Clark",
  "Olivia King",
  "Parker Young",
  "Quinn Scott",
  "Riley Thomas",
  "Sophia Harris",
];

const feedPosts = [
  {
    id: 1,
    username: "AliceSmith",
    postImage:
      "https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-breathtaking-clouds-sky_181624-2490.jpg?w=740&t=st=1694324832~exp=1694325432~hmac=6475cba1094f58955778be3a42a5dfe4344641d3d6dff0085ef0b5e5386fb246",
    title: "Exploring Nature",
    description: "Spent the day hiking in the mountains. What a view!",
    likes: 100,
    dislikes: 10,
    comments: 25,
  },
  {
    id: 2,
    username: "JohnDoe",
    postImage:
      "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=740&t=st=1694324867~exp=1694325467~hmac=f0b29dbf61f139593309eecf55c8bcf6d028fb5ec2687a31eeb907c5886e2e3b",
    title: "Delicious Homemade Pizza",
    description: "Made pizza from scratch tonight. It turned out amazing!",
    likes: 75,
    dislikes: 5,
    comments: 30,
  },
  {
    id: 3,
    username: "EmilyJohnson",
    postImage:
      "https://img.freepik.com/free-photo/silhouette-couple-walking-water-near-shore-with-beautiful-sky_181624-4832.jpg?w=740&t=st=1694324906~exp=1694325506~hmac=ca70da7538b3716807f7dedbbc4a83bf97f6dcca3ebe3ffef6f4c5db4305ab05",
    title: "Sunset at the Beach",
    description: "Captured this beautiful sunset during my evening walk.",
    likes: 120,
    dislikes: 15,
    comments: 40,
  },
  {
    id: 4,
    username: "DavidBrown",
    postImage:
      "https://img.freepik.com/free-psd/vertical-poster-template-world-poetry-day-celebration_23-2148856626.jpg?w=740&t=st=1694324962~exp=1694325562~hmac=84b36803b6e3cea42204ac62eaa6b2d3881c46668e6473bf7dc46122ad295058",
    title: "New Book Arrival",
    description: "Excited to start reading my new book. #BookLover",
    likes: 50,
    dislikes: 8,
    comments: 20,
  },
  {
    id: 5,
    username: "OliviaWilson",
    postImage:
      "https://img.freepik.com/free-photo/group-man-woman-enjoy-camping-picnic-barbecue-lake-with-tents-background-young-mixed-race-asian-woman-man-young-people-s-hands-toasting-cheering-bottles-beer_1253-1041.jpg?w=740&t=st=1694325009~exp=1694325609~hmac=dbffbab66f31c77cce18b35f37dc394c9afe4a7b3ad539f7ee369b7036c5d51c",
    title: "Family Picnic Day",
    description: "Enjoyed a fun-filled picnic with my family today.",
    likes: 90,
    dislikes: 7,
    comments: 35,
  },
  {
    id: 6,
    username: "JamesMiller",
    postImage:
      "https://img.freepik.com/free-photo/beautiful-view-city-twilight_1137-270.jpg?w=740&t=st=1694325039~exp=1694325639~hmac=a8be7a5a81af3901ae248259239341ba37d2985d3d5eeea7b7ba612d877309f3",
    title: "City Skyline",
    description: "Took a photo of the beautiful city skyline at night.",
    likes: 60,
    dislikes: 3,
    comments: 15,
  },
  {
    id: 7,
    username: "SophiaClark",
    postImage:
      "https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683407.jpg?t=st=1694325088~exp=1694328688~hmac=d82ccc7bfcfabb4fafe53ac1d54cd2167506b3f8ae48f4ad313018a9c1b75fb5&w=360",
    title: "Artistic Creations",
    description: "Visited an art gallery and was inspired by these paintings.",
    likes: 110,
    dislikes: 12,
    comments: 28,
  },
  {
    id: 8,
    username: "DanielTurner",
    postImage:
      "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?w=740&t=st=1694325135~exp=1694325735~hmac=b445545fc316ccb83db82d439179bd4e446ddbd4a357ab2480fce619c786497a",
    title: "Weekend Getaway",
    description: "Spent the weekend in a cozy cabin in the woods.",
    likes: 70,
    dislikes: 6,
    comments: 22,
  },
  {
    id: 9,
    username: "LiamSmith",
    postImage:
      "https://img.freepik.com/free-photo/snow-mountain-blue-sky-leh-ladakh-india_1150-11114.jpg?w=740&t=st=1694325156~exp=1694325756~hmac=3b9f119320fb7644a4054f945d591481adbc490ea656d99f392607c635fdc0c8",
    title: "Mountain Adventure",
    description:
      "Climbed a challenging mountain peak today. Achievement unlocked!",
    likes: 85,
    dislikes: 9,
    comments: 18,
  },
  {
    id: 10,
    username: "AvaBrown",
    postImage:
      "https://img.freepik.com/free-photo/sweet-pastry-assortment-top-view_23-2148516578.jpg?w=740&t=st=1694325198~exp=1694325798~hmac=4dc0a96abb4bed9cbd4641b495ea7718e01ed72e1b593e030e2a65615fe72762",
    title: "Baking Adventures",
    description: "Baked a delicious cake with a new recipe. Yum!",
    likes: 95,
    dislikes: 4,
    comments: 24,
  },
];

const teamRecommendation = [
  "Social Connect",
  "Media Masters",
  "TrendSet",
  "LinkUp",
  "BuzzHub",
  "NetNinjas",
  "TrendSquad",
  "Vibe Tribe",
  "ChatChamps",
  "WebWhiz",
];

export { topTeamOfTheWeek, topUsers, feedPosts, teamRecommendation };
