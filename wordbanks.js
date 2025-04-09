const wordBanks = {
    basic: {
    "apple": {
        definition: "A round fruit with red, yellow, or green skin and white flesh",
        options: ["A round fruit", "A type of vegetable", "A kind of meat", "A dairy product"],
        explanation: "An apple is a common fruit that grows on apple trees. It's known for being nutritious and is often used in various dishes and snacks."
    },
    "book": {
        definition: "A written or printed work consisting of pages",
        options: ["Written work with pages", "A type of food", "A musical instrument", "A piece of furniture"],
        explanation: "A book is a collection of written or printed pages that are fastened together and contain information, stories, or literature."
    },
    "chair": {
        definition: "A piece of furniture for sitting",
        options: ["A piece of furniture for sitting", "A kind of clothing", "A type of fruit", "A kitchen tool"],
        explanation: "A chair is a piece of furniture designed for one person to sit on, usually with a back and four legs."
    },
    "dog": {
        definition: "A common animal kept as a pet or for work",
        options: ["A common animal kept as a pet", "A type of bird", "A farm tool", "A kind of tree"],
        explanation: "Dogs are domesticated animals known for loyalty. They are kept as pets and also used for hunting or guarding."
    },
    "car": {
        definition: "A road vehicle with four wheels powered by an engine",
        options: ["A road vehicle with four wheels", "A kind of boat", "A flying vehicle", "A train part"],
        explanation: "A car is a vehicle people use to travel on roads. It runs on fuel or electricity and can carry a few passengers."
    },
    "table": {
        definition: "A piece of furniture with a flat top and legs",
        options: ["A piece of furniture", "A type of food", "A kind of tool", "A musical instrument"],
        explanation: "A table is used for eating, writing, or placing things. It usually has a flat surface and stands on legs."
    },
    "school": {
        definition: "A place where children go to learn",
        options: ["A place where children learn", "A restaurant", "A store", "A hospital"],
        explanation: "A school is a place where students are taught subjects by teachers in classrooms."
    },
    "pen": {
        definition: "An instrument used for writing with ink",
        options: ["An instrument used for writing", "A tool for eating", "A kind of ruler", "A piece of jewelry"],
        explanation: "A pen is a writing tool filled with ink, commonly used for taking notes or drawing."
    },
    "milk": {
        definition: "A white liquid produced by cows and used as a drink or for cooking",
        options: ["A white liquid from cows", "A soft fabric", "A type of metal", "A writing tool"],
        explanation: "Milk is a nutritious liquid often consumed as a drink and used in making dairy products like cheese and yogurt."
    },
    "hat": {
        definition: "A piece of clothing worn on the head",
        options: ["A piece of clothing for the head", "A kind of shoe", "A kitchen tool", "A type of paper"],
        explanation: "A hat is worn to cover the head, often for warmth, style, or protection from the sun."
    },
    "ball": {
        definition: "A round object used in games and sports",
        options: ["A round object for games", "A kind of fruit", "A household item", "A writing tool"],
        explanation: "A ball is a round object used in many sports like soccer, basketball, and baseball."
    },
    "cat": {
        definition: "A small animal often kept as a pet",
        options: ["A small pet animal", "A farm tool", "A bird", "A kind of plant"],
        explanation: "Cats are popular pets known for their independence and ability to catch mice."
    },
    "shoe": {
        definition: "Something you wear on your foot",
        options: ["Footwear", "Headgear", "A type of glove", "Jewelry"],
        explanation: "Shoes protect your feet and are worn when walking or running outside."
    },
    "house": {
        definition: "A building where people live",
        options: ["A place where people live", "A school building", "A kind of office", "A storage place"],
        explanation: "A house is a structure where a person or family lives and sleeps."
    },
    "water": {
        definition: "A clear liquid that all living things need",
        options: ["A clear liquid needed for life", "A type of solid", "A cooking tool", "A sweet drink"],
        explanation: "Water is essential for survival. People drink it and use it for cleaning and cooking."
    },
    "sun": {
        definition: "The star at the center of our solar system",
        options: ["The star at the center", "A planet", "A moon", "A type of weather"],
        explanation: "The sun gives light and heat to the Earth and is necessary for life to exist."
    },
    "tree": {
        definition: "A tall plant with a trunk and branches",
        options: ["A tall plant", "A garden tool", "A kind of bird", "A kitchen appliance"],
        explanation: "Trees provide oxygen, shade, and wood. They are important parts of the environment."
    },
    "clock": {
        definition: "A device used to tell time",
        options: ["A time-telling device", "A tool for cooking", "A writing instrument", "A musical instrument"],
        explanation: "A clock shows the current time and can be hung on a wall or worn on the wrist as a watch."
    },
    "banana": {
        definition: "A long yellow fruit with soft sweet flesh",
        options: ["A long yellow fruit", "A leafy vegetable", "A kind of nut", "A type of grain"],
        explanation: "Bananas are sweet fruits high in potassium and often eaten as snacks or used in desserts."
    },
    "bed": {
        definition: "A piece of furniture for sleeping",
        options: ["A sleeping furniture", "A kind of toy", "A cooking tool", "A desk accessory"],
        explanation: "A bed is where people sleep or rest, usually with a mattress and blanket."
    },
      "door": {
        definition: "A movable part of a building used to open and close an entrance",
        options: ["A movable part of a building", "A type of window", "A tool for writing", "A piece of clothing"],
        explanation: "A door allows people to enter or leave a room or building and can be opened or closed for privacy or security."
    },
    "fish": {
        definition: "An animal that lives in water and has fins and gills",
        options: ["An animal that lives in water", "A type of fruit", "A garden tool", "A kind of insect"],
        explanation: "Fish are animals that breathe through gills and swim using fins. Many are eaten as food."
    },
    "phone": {
        definition: "A device used for speaking to someone far away",
        options: ["A communication device", "A type of toy", "A kitchen appliance", "A piece of clothing"],
        explanation: "Phones are used to talk, text, or access the internet and are important tools in daily life."
    },
    "coat": {
        definition: "A piece of clothing worn to keep warm",
        options: ["A warm piece of clothing", "A writing tool", "A kitchen tool", "A type of hat"],
        explanation: "A coat is usually worn in cold weather to keep the body warm and protected from wind or rain."
    },
    "cup": {
        definition: "A small container used to drink liquids",
        options: ["A drinking container", "A writing tool", "A food item", "A type of vehicle"],
        explanation: "A cup is used to hold beverages like water, tea, or coffee and is common in households."
    },
    "key": {
        definition: "A small metal object used to open locks",
        options: ["Used to open locks", "A kind of food", "A clothing item", "A musical note"],
        explanation: "A key fits into a lock and allows people to open doors or start machines like cars."
    },
    "toy": {
        definition: "An object for children to play with",
        options: ["An object for play", "A kitchen item", "A musical instrument", "A writing tool"],
        explanation: "Toys are made for fun and often help children learn while they play."
    },
    "bag": {
        definition: "A container for carrying things",
        options: ["A container for carrying items", "A type of shoe", "A writing tool", "A wall decoration"],
        explanation: "A bag is used to hold and carry personal items, often made of cloth, leather, or plastic."
    },
    "ice": {
        definition: "Frozen water",
        options: ["Frozen water", "A cooking oil", "A type of sand", "A food ingredient"],
        explanation: "Ice forms when water freezes. It's used to cool drinks or preserve food."
    },
    "juice": {
        definition: "A drink made from the liquid of fruits or vegetables",
        options: ["A drink from fruits", "A tool for writing", "A dairy product", "A frozen snack"],
        explanation: "Juice is the liquid squeezed from fruits or vegetables and often served as a refreshing drink."
    },
    "lamp": {
        definition: "A device that gives light",
        options: ["A device that gives light", "A writing tool", "A container", "A small table"],
        explanation: "A lamp helps brighten a room and is used for reading, working, or decoration."
    },
    "pizza": {
        definition: "A flat food made with dough, sauce, cheese, and toppings",
        options: ["A flat food with toppings", "A type of drink", "A kind of dessert", "A vegetable dish"],
        explanation: "Pizza is a popular food that comes in slices and is made with baked dough, sauce, cheese, and various toppings."
    },
    "rice": {
        definition: "A small white or brown grain used as food",
        options: ["A type of grain", "A fruit", "A vegetable", "A dairy product"],
        explanation: "Rice is a staple food in many countries and is often served with meat, vegetables, or sauce."
    },
    "egg": {
        definition: "A round object from a bird, eaten as food",
        options: ["A food from birds", "A tool", "A kind of vegetable", "A metal object"],
        explanation: "Eggs are laid by birds and are eaten boiled, fried, or used in cooking and baking."
    },
    "sock": {
        definition: "A piece of clothing worn on the foot",
        options: ["Footwear item", "A hat", "A shirt", "A scarf"],
        explanation: "Socks are worn on the feet, usually inside shoes, to keep the feet warm and dry."
    },
    "nose": {
        definition: "The part of the face used for smelling and breathing",
        options: ["Used for smelling", "Used for hearing", "Used for seeing", "Used for eating"],
        explanation: "The nose is a part of the face that detects smells and allows you to breathe air."
    },
    "ear": {
        definition: "The part of the body used for hearing",
        options: ["Used for hearing", "Used for walking", "Used for touching", "Used for smelling"],
        explanation: "Ears allow you to hear sounds. Humans usually have two ears, one on each side of the head."
    },
    "mouth": {
        definition: "The part of the face used for eating and speaking",
        options: ["Used for eating and speaking", "Used for seeing", "Used for hearing", "Used for smelling"],
        explanation: "The mouth is used to chew food and speak. It includes the lips, tongue, and teeth."
    },
    "nose": {
        definition: "The part of the face used to smell and breathe",
        options: ["Used to smell", "Used to eat", "Used to hear", "Used to think"],
        explanation: "Your nose helps you smell things and breathe in air. It sits in the middle of your face."
    },
    "eye": {
        definition: "The part of the body used for seeing",
        options: ["Used for seeing", "Used for hearing", "Used for walking", "Used for speaking"],
        explanation: "Eyes allow you to see the world around you. Most people have two eyes, which help with depth and focus."
    },
    "hand": {
        definition: "The part of your body at the end of your arm",
        options: ["Used for holding things", "Used for seeing", "Used for smelling", "Used for thinking"],
        explanation: "Your hands help you hold, grab, and touch objects. They are essential for daily activities."
    },
    "foot": {
        definition: "The lower part of the leg used for standing and walking",
        options: ["Used for walking", "Used for writing", "Used for talking", "Used for eating"],
        explanation: "Your foot supports your body and allows you to stand, walk, and run."
    },
    "rain": {
        definition: "Water that falls from the sky",
        options: ["Water from the sky", "A type of cloud", "A kind of fog", "A form of ice"],
        explanation: "Rain is when water droplets fall from clouds, often making the ground wet and helping plants grow."
    },
    "wind": {
        definition: "Moving air",
        options: ["Moving air", "A kind of wave", "A form of cloud", "A type of light"],
        explanation: "Wind is air in motion. It can be a gentle breeze or a strong force that moves trees and flags."
    },
    "snow": {
        definition: "Soft white flakes of frozen water",
        options: ["Frozen water flakes", "Pieces of ice", "Sand particles", "Rain drops"],
        explanation: "Snow forms in cold weather and falls from the sky in flakes. It covers the ground in white."
    },
    "cloud": {
        definition: "A white or gray mass in the sky made of water",
        options: ["A sky mass of water", "A planet", "A flying object", "A type of light"],
        explanation: "Clouds float in the sky and can bring rain, snow, or just shade from the sun."
    },
    "star": {
        definition: "A ball of burning gas in space that gives off light",
        options: ["A ball of light in space", "A moon", "A planet", "A cloud"],
        explanation: "Stars shine in the night sky. The sun is the closest star to Earth."
    },
    "moon": {
        definition: "A round object that orbits the Earth",
        options: ["Orbits the Earth", "A kind of star", "A floating cloud", "A planet near Mars"],
        explanation: "The moon reflects sunlight and causes tides. It changes shape during the month."
    },
    "tooth": {
        definition: "A hard, white part in the mouth used for chewing",
        options: ["Used for chewing", "Used for walking", "Used for seeing", "Used for smelling"],
        explanation: "Teeth help break down food when you chew and are important for speaking clearly."
    },
    "milk": {
        definition: "A white liquid from animals used as a drink",
        options: ["A white drink from animals", "A kind of fruit", "A cooking tool", "A type of grain"],
        explanation: "Milk is full of calcium and helps build strong bones. It's often served with breakfast."
     },
      "name": {
        definition: "A word or set of words by which a person or thing is known",
        options: ["A word identifying someone", "A number code", "A type of food", "A physical object"],
        explanation: "A name is what you call a person, place, or thing. It helps identify and distinguish individuals or items."
    },
    "age": {
        definition: "The number of years a person has lived",
        options: ["How old someone is", "A person's name", "A type of job", "A kind of food"],
        explanation: "Age tells you how many years someone has been alive. It's often used in personal information."
    },
    "address": {
        definition: "The place where someone lives or receives mail",
        options: ["Where someone lives", "A person’s age", "A kind of vehicle", "A school subject"],
        explanation: "An address tells others where to find you or send mail. It includes a number, street, city, and sometimes a postal code."
    },
    "phone": {
        definition: "A device used to talk to people over long distances",
        options: ["A communication device", "A type of clothing", "A kitchen tool", "A musical instrument"],
        explanation: "A phone lets you speak with others even when they are far away. Today, phones often include many digital features."
    },
    "number": {
        definition: "A symbol or word used to represent a quantity",
        options: ["A symbol for a quantity", "A person’s name", "A color", "A type of book"],
        explanation: "Numbers are used to count, measure, and label things. They are part of math and everyday use."
    },
    "email": {
        definition: "A way to send messages using the internet",
        options: ["Internet message system", "Handwritten letter", "Newspaper ad", "Phone number"],
        explanation: "Email stands for electronic mail. It’s a fast and common way to communicate online for both personal and work purposes."
    },
    "friend": {
        definition: "A person you like and enjoy spending time with",
        options: ["A person you like", "A stranger", "A boss", "A family member"],
        explanation: "Friends are people you choose to be close to. You share time, interests, and feelings with them."
    },
    "family": {
        definition: "A group of people related by blood or marriage",
        options: ["Relatives", "Strangers", "Neighbors", "Co-workers"],
        explanation: "Family includes parents, children, and other relatives. They usually live together or stay connected."
    },
    "mother": {
        definition: "A female parent",
        options: ["Female parent", "Male child", "Older sister", "Aunt"],
        explanation: "A mother is a woman who has a child. She often takes care of and raises her children."
    },
    "father": {
        definition: "A male parent",
        options: ["Male parent", "Female child", "Uncle", "Teacher"],
        explanation: "A father is a man who has a child. He helps support and care for the family."
    },
    "sister": {
        definition: "A girl or woman who has the same parents as another person",
        options: ["Female sibling", "Male cousin", "Aunt", "Mother"],
        explanation: "A sister shares one or both parents with you. She can be older or younger than you."
    },
    "brother": {
        definition: "A boy or man who has the same parents as another person",
        options: ["Male sibling", "Female cousin", "Uncle", "Grandfather"],
        explanation: "A brother is a male sibling. He shares parents with you and is part of your family."
    },
    "husband": {
        definition: "A married man in relation to his spouse",
        options: ["Married man", "Single man", "Father-in-law", "Cousin"],
        explanation: "A husband is a man who is married. He has a wife or partner."
    },
    "wife": {
        definition: "A married woman in relation to her spouse",
        options: ["Married woman", "Single woman", "Mother-in-law", "Sister"],
        explanation: "A wife is a woman who is married. She has a husband or partner."
    },
    "married": {
        definition: "Legally joined in marriage",
        options: ["Having a husband or wife", "Being single", "Living alone", "Dating casually"],
        explanation: "Married means two people have agreed to live together as a couple in a legal or religious union."
    },
    "single": {
        definition: "Not married or in a romantic relationship",
        options: ["Not married", "In a group", "Having children", "Divorced"],
        explanation: "Single means not having a spouse or partner. A person may be single by choice or before marriage."
    },
    "man": {
        definition: "An adult male human",
        options: ["Adult male", "Adult female", "Child", "Pet"],
        explanation: "A man is a grown male. The word is often used to describe adult males in general conversation."
    },
    "woman": {
        definition: "An adult female human",
        options: ["Adult female", "Male child", "Baby", "Brother"],
        explanation: "A woman is a grown female. She may be a mother, wife, worker, or friend."
    },
    "person": {
        definition: "An individual human being",
        options: ["An individual", "A group", "An animal", "A robot"],
        explanation: "A person is any human being. The word is often used when gender is not specified."
    },
    "people": {
        definition: "More than one person",
        options: ["More than one person", "A single individual", "A specific country", "A type of animal"],
        explanation: "People is the plural of person. It refers to a group of individuals, often used when talking about communities or groups."
    },
        "eat": {
        definition: "To put food in your mouth, chew it, and swallow it",
        options: ["To consume food", "To prepare food", "To buy food", "To grow food"],
        explanation: "When you eat, you take in food to give your body energy. Everyone eats every day to stay healthy."
    },
    "drink": {
        definition: "To take a liquid into your mouth and swallow it",
        options: ["To swallow liquid", "To pour water", "To cook soup", "To spill juice"],
        explanation: "Drinking helps keep your body hydrated. Water, juice, and milk are common drinks."
    },
    "sleep": {
        definition: "To rest your body and mind by being unconscious",
        options: ["To rest at night", "To eat breakfast", "To sit on a chair", "To read a book"],
        explanation: "Sleep is important for health and energy. Most people sleep for several hours each night."
    },
    "wake": {
        definition: "To stop sleeping and become conscious again",
        options: ["To stop sleeping", "To go to bed", "To take a nap", "To stay asleep"],
        explanation: "When you wake up, your sleep ends and your day begins. Alarms often help people wake in the morning."
    },
    "wash": {
        definition: "To clean something with water and soap",
        options: ["To clean with water", "To make dirty", "To dry quickly", "To paint something"],
        explanation: "Washing helps keep things clean. You can wash hands, clothes, or dishes using water and soap."
    },
    "cook": {
        definition: "To prepare food using heat",
        options: ["To make food with heat", "To clean the kitchen", "To grow vegetables", "To shop for meals"],
        explanation: "Cooking means heating food to make it safe and tasty to eat. People cook by boiling, frying, or baking."
    },
    "clean": {
        definition: "To remove dirt or mess from something",
        options: ["To remove dirt", "To decorate", "To move furniture", "To paint a room"],
        explanation: "Cleaning keeps homes and objects tidy and hygienic. You might clean the floor, your room, or your hands."
    },
    "walk": {
        definition: "To move forward by putting one foot in front of the other",
        options: ["To move on foot", "To jump in place", "To drive a car", "To ride a bike"],
        explanation: "Walking is a way of getting around using your feet. It’s good exercise and doesn’t require any equipment."
    },
    "run": {
        definition: "To move quickly on foot",
        options: ["To move fast on foot", "To walk slowly", "To ride a scooter", "To sit and rest"],
        explanation: "Running is faster than walking and is a common way to exercise or move quickly when needed."
    },
    "drive": {
        definition: "To control a car or another vehicle",
        options: ["To operate a car", "To ride a bicycle", "To clean the garage", "To repair the engine"],
        explanation: "Driving means using a vehicle like a car or truck to go from one place to another."
    },
    "study": {
        definition: "To spend time learning or practicing something",
        options: ["To learn something", "To play a game", "To sleep well", "To clean a room"],
        explanation: "Studying helps people gain knowledge, usually by reading or practicing for school or work."
    },
    "read": {
        definition: "To look at and understand written words",
        options: ["To look at written words", "To speak loudly", "To cook something", "To draw a picture"],
        explanation: "Reading is how we learn from books, signs, or papers. It helps us get information or enjoy stories."
    },
    "write": {
        definition: "To use letters, words, or symbols to communicate on paper or screen",
        options: ["To put words on paper", "To read a book", "To speak to someone", "To type numbers"],
        explanation: "Writing helps us express ideas, send messages, or record things using a pen, pencil, or keyboard."
    },
    "listen": {
        definition: "To give attention to sound or someone speaking",
        options: ["To pay attention to sound", "To read quietly", "To look at something", "To sleep deeply"],
        explanation: "Listening means using your ears to understand sounds, music, or spoken words."
    },
    "speak": {
        definition: "To say words with your voice",
        options: ["To use your voice", "To write notes", "To listen to music", "To read a book"],
        explanation: "Speaking lets you share thoughts, ask questions, or give information to others."
    },
    "talk": {
        definition: "To have a conversation with someone",
        options: ["To have a conversation", "To play a game", "To draw a picture", "To study alone"],
        explanation: "Talking is when people speak with each other. It helps us communicate and build relationships."
    },
    "watch": {
        definition: "To look at something carefully for a period of time",
        options: ["To look at something", "To close your eyes", "To clean a surface", "To smell something"],
        explanation: "Watching is using your eyes to follow or observe something, like a movie, show, or person."
    },
    "go": {
        definition: "To move from one place to another",
        options: ["To move away", "To stay still", "To turn off lights", "To rest at home"],
        explanation: "Going means leaving your current place and traveling to a new one, by foot, car, or other transport."
    },
    "come": {
        definition: "To move toward the person speaking",
        options: ["To move closer", "To go away", "To sit still", "To sleep early"],
        explanation: "Coming means approaching or arriving where someone is. It's the opposite of going."
    },
    "play": {
        definition: "To do something fun or enjoyable like a game or sport",
        options: ["To do something fun", "To clean the house", "To study hard", "To cook dinner"],
        explanation: "Playing is a way to relax or have fun. Kids and adults play games, sports, or instruments."
    },
        "home": {
        definition: "The place where you live",
        options: ["Place you live", "Place you work", "Place you shop", "Place you study"],
        explanation: "A home is where a person or family lives. It provides comfort, safety, and shelter."
    },
    "school": {
        definition: "A place where people go to learn",
        options: ["Place to learn", "Place to eat", "Place to play games", "Place to sleep"],
        explanation: "Schools are places where students are taught by teachers in different subjects like math and language."
    },
    "office": {
        definition: "A place where people work, usually at a desk",
        options: ["Workplace with desks", "Place to cook", "Playground for children", "Room for sleeping"],
        explanation: "An office is a workspace used by employees to do jobs that involve writing, typing, or meetings."
    },
    "shop": {
        definition: "A place where you can buy things",
        options: ["Place to buy items", "Place to sleep", "Place to play", "Place to wash clothes"],
        explanation: "Shops sell goods like food, clothes, and tools. People go shopping to get what they need."
    },
    "market": {
        definition: "An open area where people sell goods, often fresh food",
        options: ["Outdoor selling area", "Office for work", "Place for doctors", "Library for reading"],
        explanation: "Markets are places where sellers and buyers meet. Many sell fruits, vegetables, and other products."
    },
    "bank": {
        definition: "A place where people keep and manage their money",
        options: ["Money storage place", "Place to eat", "Place to play sports", "Hospital room"],
        explanation: "Banks help people save, withdraw, or transfer money. You can also get loans there."
    },
    "hospital": {
        definition: "A place where sick or injured people go for treatment",
        options: ["Medical care center", "Restaurant", "Library", "Market stall"],
        explanation: "Hospitals have doctors and nurses who help people get better when they are sick or hurt."
    },
    "station": {
        definition: "A place where buses or trains stop for passengers",
        options: ["Transit stop", "Park bench", "Store room", "Study hall"],
        explanation: "Stations are used for travel. You can catch a bus, train, or subway at a station."
    },
    "park": {
        definition: "A public area with grass and trees for people to relax and play",
        options: ["Outdoor public area", "Car garage", "Hospital room", "School cafeteria"],
        explanation: "Parks are places for walking, playing, and relaxing. They often have trees, benches, and open space."
    },
    "street": {
        definition: "A road in a city or town with buildings on the sides",
        options: ["City road", "River path", "Shopping cart", "Kitchen floor"],
        explanation: "Streets are public roads that connect buildings and places in towns and cities."
    },
    "road": {
        definition: "A path for cars and other vehicles to travel on",
        options: ["Vehicle path", "Mountain", "Library", "Shop"],
        explanation: "Roads connect cities and towns and are used by vehicles like cars and buses to move around."
    },
    "left": {
        definition: "The direction opposite of right",
        options: ["Opposite of right", "Same as right", "Straight ahead", "Behind you"],
        explanation: "Left is a direction. When giving or following directions, knowing left and right is important."
    },
    "right": {
        definition: "The direction opposite of left",
        options: ["Opposite of left", "Straight ahead", "Next to up", "Behind you"],
        explanation: "Right is one of the basic directions. It's used when navigating or giving instructions."
    },
    "straight": {
        definition: "Moving in one direction without turning",
        options: ["No turning", "To the left", "To the right", "Going backward"],
        explanation: "When you go straight, you move forward in a direct line. It's helpful in giving directions."
    },
    "near": {
        definition: "Close in distance",
        options: ["Close by", "Far away", "Very high", "Behind something"],
        explanation: "If something is near, it’s not far from you. You can usually see or reach it easily."
    },
    "far": {
        definition: "A long distance away",
        options: ["Long distance", "Very close", "Under something", "Next to you"],
        explanation: "Far means something is not close to you. You might need to walk or drive to get to it."
    },
    "here": {
        definition: "In this place",
        options: ["This place", "That place", "Far away", "Next time"],
        explanation: "Here refers to the place where the speaker is. It’s used to point out the current location."
    },
    "there": {
        definition: "In that place",
        options: ["That place", "This place", "Next week", "In the future"],
        explanation: "There points to a place away from the speaker, opposite of 'here'."
    },
    "behind": {
        definition: "At the back of something",
        options: ["At the back", "In front", "Next to", "On top"],
        explanation: "Behind means something is located at the back or rear of another object or place."
    },
    "in front": {
        definition: "At the forward-facing part of something",
        options: ["At the front", "Behind something", "Next to it", "Below it"],
        explanation: "In front means something is positioned before or ahead of something else."
    },
        "today": {
        definition: "The present day",
        options: ["The present day", "The day before", "The next day", "Last year"],
        explanation: "Today refers to the current day between yesterday and tomorrow."
    },
    "yesterday": {
        definition: "The day before today",
        options: ["The day before today", "The current day", "The next day", "Next week"],
        explanation: "Yesterday is the day that happened before today."
    },
    "tomorrow": {
        definition: "The day after today",
        options: ["The day after today", "The current day", "The day before today", "Last month"],
        explanation: "Tomorrow refers to the day that comes after today."
    },
    "morning": {
        definition: "The early part of the day, before noon",
        options: ["Early part of the day", "Middle of the day", "Late at night", "Evening time"],
        explanation: "Morning is when the sun rises and people usually start their day."
    },
    "afternoon": {
        definition: "The part of the day after 12 p.m. and before evening",
        options: ["After 12 p.m.", "Before sunrise", "Late night", "Early morning"],
        explanation: "Afternoon is the time after lunch and before the evening begins."
    },
    "evening": {
        definition: "The part of the day between late afternoon and night",
        options: ["Before night", "Early morning", "Midday", "Late night"],
        explanation: "Evening is when the sun sets and people relax after work or school."
    },
    "night": {
        definition: "The time of day when it is dark and people usually sleep",
        options: ["When it's dark", "Early morning", "Mid-afternoon", "Around lunchtime"],
        explanation: "Night is the time after evening and before morning when people rest or sleep."
    },
    "day": {
        definition: "A 24-hour period from midnight to midnight",
        options: ["24-hour period", "One week", "Only sunlight hours", "Time between meals"],
        explanation: "A day includes both daytime and nighttime and lasts 24 hours."
    },
    "week": {
        definition: "A period of seven days",
        options: ["Seven days", "Five days", "One month", "A year"],
        explanation: "A week includes Monday through Sunday, totaling seven days."
    },
    "month": {
        definition: "A period of about 30 or 31 days, or 28/29 for February",
        options: ["About 30 days", "Seven days", "One day", "Twelve hours"],
        explanation: "A month is one of twelve parts of a year, such as January or February."
    },
    "year": {
        definition: "A period of 12 months or 365 days",
        options: ["12 months", "One week", "100 days", "30 days"],
        explanation: "A year is the time it takes for the Earth to go around the sun once."
    },
    "Monday": {
        definition: "The first day of the work or school week in many countries",
        options: ["First weekday", "Weekend day", "Holiday", "Nighttime"],
        explanation: "Monday usually starts the business or school week in many cultures."
    },
    "Tuesday": {
        definition: "The day after Monday",
        options: ["Day after Monday", "Day before Monday", "Weekend day", "Last day of the week"],
        explanation: "Tuesday is the second day of the week in many calendars."
    },
    "Wednesday": {
        definition: "The third day of the workweek",
        options: ["Third workday", "First day", "Last day", "Weekend"],
        explanation: "Wednesday is often called the 'middle of the week' or 'hump day.'"
    },
    "Thursday": {
        definition: "The day between Wednesday and Friday",
        options: ["Between Wednesday and Friday", "Before Monday", "After Sunday", "Weekend day"],
        explanation: "Thursday comes right before Friday and is usually the fourth workday."
    },
    "Friday": {
        definition: "The fifth day of the work or school week",
        options: ["Fifth weekday", "First day", "Last day", "Middle day"],
        explanation: "Friday is often seen as the last day of the work or school week."
    },
    "Saturday": {
        definition: "A weekend day following Friday",
        options: ["Weekend day", "First workday", "Middle of the week", "Monday’s partner"],
        explanation: "Saturday is a day when many people rest or enjoy free time. It's not usually a workday."
    },
    "Sunday": {
        definition: "The last day of the week, often a rest or religious day",
        options: ["Last day of the week", "First workday", "Middle weekday", "School day"],
        explanation: "Sunday is often a day of rest or worship in many countries and comes before Monday."
    },
    "hour": {
        definition: "A unit of time equal to 60 minutes",
        options: ["60 minutes", "30 minutes", "1 second", "1 day"],
        explanation: "An hour is a basic unit used to measure time. There are 24 hours in a day."
    },
    "minute": {
        definition: "A unit of time equal to 60 seconds",
        options: ["60 seconds", "60 minutes", "1 hour", "1 second"],
        explanation: "A minute is a short time measurement, and there are 60 minutes in an hour."
    },
        "water": {
        "definition": "A clear liquid that has no color, taste, or smell and that falls from clouds as rain",
        "options": ["A clear liquid", "A type of food", "A kind of gas", "A metal object"],
        "explanation": "Water is essential for all living things. People drink it, use it for cooking, and need it to stay alive."
    },
    "bread": {
        "definition": "A food made from flour, water, and yeast, mixed together and baked",
        "options": ["A baked food", "A kind of fruit", "A drink", "A vegetable"],
        "explanation": "Bread is a common food item made from dough and baked. It's often used for sandwiches or eaten with butter."
    },
    "rice": {
        "definition": "Small white or brown grains that are cooked and eaten as food",
        "options": ["A type of grain", "A kind of drink", "A fruit", "A dairy product"],
        "explanation": "Rice is a staple food in many cultures. It’s usually boiled or steamed and served with other dishes."
    },
    "meat": {
        "definition": "The flesh of animals used as food",
        "options": ["Animal flesh used as food", "A kind of drink", "A dairy item", "A fruit"],
        "explanation": "Meat comes from animals and is a good source of protein. It includes beef, pork, and lamb."
    },
    "fish": {
        "definition": "A cold-blooded animal that lives in water and has fins and gills",
        "options": ["A water animal", "A type of fruit", "A bird", "A type of grain"],
        "explanation": "Fish live in water and are often eaten as food. They have gills for breathing underwater."
    },
    "chicken": {
        "definition": "A type of bird that is often kept for its eggs and meat",
        "options": ["A bird used for meat", "A kind of vegetable", "A fish", "A fruit"],
        "explanation": "Chicken is a common farm bird. People eat its meat and sometimes keep them for eggs."
    },
    "fruit": {
        "definition": "The sweet and fleshy product of a tree or other plant that contains seeds",
        "options": ["A sweet plant product", "A type of meat", "A dairy food", "A grain"],
        "explanation": "Fruits are sweet, come from plants, and often have seeds. Apples, bananas, and oranges are fruits."
    },
    "vegetable": {
        "definition": "A plant or part of a plant used as food, usually not sweet",
        "options": ["An edible plant", "A type of meat", "A drink", "A dessert"],
        "explanation": "Vegetables are plants eaten for food. They are important for a healthy diet and include carrots, spinach, and broccoli."
    },
    "apple": {
        "definition": "A round fruit with red, yellow, or green skin and white flesh",
        "options": ["A round fruit", "A type of vegetable", "A kind of meat", "A dairy product"],
        "explanation": "An apple is a common fruit that grows on apple trees. It's known for being nutritious and is often used in various dishes and snacks."
    },
    "banana": {
        "definition": "A long curved fruit with yellow skin and soft sweet flesh",
        "options": ["A long yellow fruit", "A type of meat", "A dairy item", "A vegetable"],
        "explanation": "Bananas are long fruits with soft inside and yellow skin. They are sweet and easy to eat."
    },
    "orange": {
        "definition": "A round citrus fruit with a thick skin and juicy segments",
        "options": ["A citrus fruit", "A kind of grain", "A meat product", "A vegetable"],
        "explanation": "Oranges are sweet and juicy fruits. They are high in vitamin C and often used to make juice."
    },
    "milk": {
        "definition": "A white liquid produced by cows and used by people as a drink or in cooking",
        "options": ["A white drink from cows", "A kind of fruit", "A vegetable", "A meat product"],
        "explanation": "Milk is a nutritious drink that comes from cows. It is used in many dairy products like cheese and yogurt."
    },
    "coffee": {
        "definition": "A hot drink made from roasted coffee beans",
        "options": ["A drink from beans", "A type of food", "A fruit", "A vegetable"],
        "explanation": "Coffee is a popular drink made from ground coffee beans. Many people drink it in the morning for energy."
    },
    "tea": {
        "definition": "A hot drink made by pouring boiling water over dried leaves",
        "options": ["A hot drink from leaves", "A type of fruit", "A meat dish", "A vegetable"],
        "explanation": "Tea is made from the leaves of certain plants and is often served hot. It comes in many flavors."
    },
    "juice": {
        "definition": "A drink made from the liquid of fruits or vegetables",
        "options": ["A drink from fruits", "A type of grain", "A dairy drink", "A meat soup"],
        "explanation": "Juice is a liquid that comes from fruits or vegetables. It’s often enjoyed as a refreshing drink."
    },
    "egg": {
        "definition": "An oval object laid by birds, often eaten as food",
        "options": ["Bird product used as food", "A kind of fruit", "A dairy product", "A drink"],
        "explanation": "Eggs come from birds like chickens and are a common food. They are used in many recipes."
    },
    "sugar": {
        "definition": "A sweet substance used to add flavor to food and drinks",
        "options": ["Sweetener for food", "A kind of meat", "A drink", "A vegetable"],
        "explanation": "Sugar is used in baking and cooking to make things taste sweet. It can be white or brown."
    },
    "salt": {
        "definition": "A white substance used to season or preserve food",
        "options": ["A seasoning", "A kind of fruit", "A dairy item", "A drink"],
        "explanation": "Salt adds flavor to food and is also used to preserve it. It’s a basic cooking ingredient."
    },
    "breakfast": {
        "definition": "The first meal of the day, usually eaten in the morning",
        "options": ["First meal of the day", "Last meal", "Midday snack", "A type of drink"],
        "explanation": "Breakfast is eaten in the morning to start the day. It can include eggs, toast, or cereal."
    },
    "lunch": {
        "definition": "A meal eaten in the middle of the day",
        "options": ["Midday meal", "Evening meal", "Morning drink", "Night snack"],
        "explanation": "Lunch is typically eaten around noon. It often includes sandwiches, rice, or other dishes."
    },
        "buy": {
        "definition": "To get something by paying money for it",
        "options": ["To get with money", "To give away", "To make something", "To borrow"],
        "explanation": "When you buy something, you pay money to own it. People buy food, clothes, and many other things."
    },
    "sell": {
        "definition": "To give something in exchange for money",
        "options": ["To give for money", "To keep something", "To donate freely", "To borrow"],
        "explanation": "When you sell something, you let someone else buy it from you for money."
    },
    "price": {
        "definition": "The amount of money that something costs",
        "options": ["Amount of money", "Type of product", "Brand name", "Shop address"],
        "explanation": "The price tells you how much you need to pay to buy something. Prices can be high or low."
    },
    "cheap": {
        "definition": "Costing little money",
        "options": ["Not expensive", "Very costly", "Free of charge", "Old or broken"],
        "explanation": "If something is cheap, it doesn't cost a lot. It is the opposite of expensive."
    },
    "expensive": {
        "definition": "Costing a lot of money",
        "options": ["Costs a lot", "Very cheap", "Free", "Easy to carry"],
        "explanation": "Something that is expensive needs a lot of money to buy. It's not affordable for everyone."
    },
    "money": {
        "definition": "Coins or paper used to buy things",
        "options": ["Used to buy things", "A type of food", "A shopping bag", "A store receipt"],
        "explanation": "Money is what we use to pay for things. It can be in the form of coins or bills."
    },
    "coin": {
        "definition": "A small, round piece of metal used as money",
        "options": ["Metal money", "A type of card", "A bank note", "A paper receipt"],
        "explanation": "Coins are round pieces of metal used to buy things. They come in different values."
    },
    "bill": {
        "definition": "Paper money or a statement showing what you owe",
        "options": ["Paper money or receipt", "A plastic card", "A product label", "A shopping bag"],
        "explanation": "A bill can be paper money or a note that shows how much money you need to pay for something."
    },
    "shop": {
        "definition": "A place where you can buy things",
        "options": ["A place to buy things", "A food item", "A tool", "A game"],
        "explanation": "A shop is a small store where people go to buy different kinds of goods."
    },
    "store": {
        "definition": "A place where goods are sold",
        "options": ["Place that sells things", "A delivery box", "A market worker", "A money tool"],
        "explanation": "A store is a business where people buy things. It can be small or large."
    },
    "supermarket": {
        "definition": "A large store that sells food and other goods",
        "options": ["Large food store", "Bank office", "Small snack shop", "Furniture showroom"],
        "explanation": "A supermarket sells many items like food, drinks, and household goods all in one place."
    },
    "cashier": {
        "definition": "A person who takes payment at a store",
        "options": ["Person at checkout", "Delivery driver", "Security guard", "Store manager"],
        "explanation": "A cashier is the person who helps customers pay for what they buy at a store."
    },
    "wallet": {
        "definition": "A small flat case for carrying money and cards",
        "options": ["Case for money", "A phone", "A bag of food", "A receipt book"],
        "explanation": "A wallet is something you carry with you to keep money, credit cards, and IDs."
    },
    "credit": {
        "definition": "An arrangement to buy now and pay later",
        "options": ["Buy now, pay later", "Pay with cash", "Return an item", "Cancel a bill"],
        "explanation": "Credit means you can get things now and pay for them in the future, often with a card."
    },
    "card": {
        "definition": "A plastic item used to pay instead of cash",
        "options": ["Plastic payment tool", "Paper receipt", "Price tag", "Bank form"],
        "explanation": "A card can be a credit or debit card used to make purchases instead of using money directly."
    },
    "pay": {
        "definition": "To give money for something",
        "options": ["Give money", "Take something", "Ask a question", "Pack an item"],
        "explanation": "To pay means to give money to someone in exchange for a product or service."
    },
    "change": {
        "definition": "The money returned when you pay more than the cost",
        "options": ["Money returned", "Full price", "Product warranty", "Price tag"],
        "explanation": "Change is what you get back if you pay more money than the item costs."
    },
    "cost": {
        "definition": "The amount of money needed to buy something",
        "options": ["Money needed", "A shopping cart", "Store receipt", "Product label"],
        "explanation": "Cost shows how much you must pay to buy a product or use a service."
    },
    "customer": {
        "definition": "A person who buys goods or services",
        "options": ["Person who buys", "Store worker", "Cash machine", "Bag of goods"],
        "explanation": "A customer is someone who goes into a store or business to buy something."
    },
    "product": {
        "definition": "Something that is made or grown to be sold",
        "options": ["Item to sell", "Store sign", "Bank service", "Cooking tool"],
        "explanation": "A product is anything you can buy, like clothes, food, or tools. It’s something stores sell."
    },
        "job": {
        "definition": "Work that a person does regularly to earn money",
        "options": ["Work that a person does", "A kind of toy", "A type of food", "A place to go"],
        "explanation": "A job is the regular work someone does, often for payment. It can be full-time or part-time in many different fields."
    },
    "work": {
        "definition": "To do tasks that require effort, usually to earn money",
        "options": ["To do tasks", "To play games", "To rest", "To sleep"],
        "explanation": "To work means to use effort and time to accomplish tasks, especially for a company or employer."
    },
    "office": {
        "definition": "A place where people do business or professional work",
        "options": ["A workplace", "A school", "A store", "A kitchen"],
        "explanation": "An office is where people do work such as writing, typing, or meetings. It's common in businesses and companies."
    },
    "company": {
        "definition": "A business that sells goods or services",
        "options": ["A business", "A person", "A house", "A street"],
        "explanation": "A company is a group or organization that provides goods or services for money, like Apple or Toyota."
    },
    "boss": {
        "definition": "A person in charge of a group of workers",
        "options": ["A person in charge", "A friend", "A customer", "A student"],
        "explanation": "A boss is someone who tells others what to do at work and makes sure everything runs smoothly."
    },
    "manager": {
        "definition": "A person who organizes and directs part of a business",
        "options": ["Business organizer", "A cook", "A driver", "A cleaner"],
        "explanation": "A manager is responsible for planning, organizing, and overseeing a team or department in a company."
    },
    "worker": {
        "definition": "A person who does a job",
        "options": ["Person with a job", "A type of machine", "A place", "A tool"],
        "explanation": "A worker is anyone who does work, whether in an office, factory, or any other job setting."
    },
    "teacher": {
        "definition": "A person who helps students learn",
        "options": ["Someone who teaches", "A person who cooks", "A kind of student", "A type of boss"],
        "explanation": "A teacher works in schools or other educational places to help people gain knowledge and skills."
    },
    "student": {
        "definition": "A person who studies at a school or university",
        "options": ["Person studying", "A teacher", "A boss", "A driver"],
        "explanation": "A student is someone who goes to school or another learning place to gain knowledge or training."
    },
    "doctor": {
        "definition": "A person who helps sick or injured people",
        "options": ["Medical helper", "A driver", "A teacher", "A police officer"],
        "explanation": "A doctor is trained to understand health and treat illnesses or injuries to help people feel better."
    },
    "nurse": {
        "definition": "A person who helps doctors take care of patients",
        "options": ["Doctor's helper", "A cook", "A teacher", "A cleaner"],
        "explanation": "A nurse works in hospitals or clinics, helping care for patients and assist doctors with medical tasks."
    },
    "driver": {
        "definition": "A person who drives a vehicle",
        "options": ["Vehicle operator", "A cook", "A banker", "A nurse"],
        "explanation": "A driver is someone who operates cars, buses, or trucks to transport people or goods."
    },
    "cleaner": {
        "definition": "A person whose job is to clean places",
        "options": ["Person who cleans", "A person who cooks", "A kind of teacher", "A driver"],
        "explanation": "A cleaner helps keep homes, offices, or buildings tidy and clean by removing dirt and waste."
    },
    "cook": {
        "definition": "A person who prepares food",
        "options": ["Food preparer", "A teacher", "A cleaner", "A police officer"],
        "explanation": "A cook makes meals in restaurants, homes, or other places using ingredients and recipes."
    },
    "farmer": {
        "definition": "A person who grows crops or raises animals",
        "options": ["Crops and animals grower", "A banker", "A driver", "A doctor"],
        "explanation": "A farmer works on a farm to grow food like vegetables or fruits and raise animals like cows or chickens."
    },
    "engineer": {
        "definition": "A person who designs and builds machines, buildings, or roads",
        "options": ["Designer and builder", "A doctor", "A teacher", "A cook"],
        "explanation": "An engineer uses science and math to create things like bridges, machines, or technology systems."
    },
    "police": {
        "definition": "People who protect the public and make sure laws are followed",
        "options": ["Law enforcers", "Doctors", "Drivers", "Cleaners"],
        "explanation": "Police officers help keep cities safe by stopping crime, helping people, and enforcing laws."
    },
    "fireman": {
        "definition": "A person whose job is to stop fires",
        "options": ["Fire stopper", "A teacher", "A driver", "A cook"],
        "explanation": "A fireman, or firefighter, puts out fires, rescues people, and teaches fire safety."
    },
    "shop assistant": {
        "definition": "A person who helps customers in a store",
        "options": ["Store helper", "A boss", "A cleaner", "A driver"],
        "explanation": "A shop assistant helps people find and buy things in stores, often giving advice or using a cash register."
    },
    "waiter": {
        "definition": "A person who serves food in a restaurant",
        "options": ["Food server", "A nurse", "A police officer", "A teacher"],
        "explanation": "A waiter takes food and drink orders, serves them to customers, and often works in restaurants or cafes."
    },
      "house": {
    "definition": "A building where people live",
    "options": ["A place to live", "A kind of vehicle", "A school", "A shop"],
    "explanation": "A house is a structure that serves as a home for people to live in. It usually includes rooms like bedrooms and kitchens."
  },
  "room": {
    "definition": "A part of a building enclosed by walls",
    "options": ["A part of a building", "A type of food", "A mode of transport", "A plant"],
    "explanation": "A room is a space within a house or building, such as a bedroom or kitchen."
  },
  "kitchen": {
    "definition": "A room where food is prepared and cooked",
    "options": ["A place to cook", "A place to sleep", "A place to shop", "A place to study"],
    "explanation": "The kitchen is the part of the home where cooking and food preparation happen. It usually has a stove and fridge."
  },
  "bedroom": {
    "definition": "A room used for sleeping",
    "options": ["A place to sleep", "A place to cook", "A classroom", "A hallway"],
    "explanation": "A bedroom is a room in a home where people sleep. It usually contains a bed and other furniture."
  },
  "bathroom": {
    "definition": "A room containing a toilet and a place to wash",
    "options": ["A place to wash", "A place to eat", "A living room", "A garage"],
    "explanation": "The bathroom is where people wash, bathe, or use the toilet. It typically has a sink, toilet, and sometimes a shower or bath."
  },
  "living room": {
    "definition": "A room in a home for relaxing and socializing",
    "options": ["A room for relaxing", "A room for cooking", "A storage space", "A bathroom"],
    "explanation": "The living room is often where people gather to relax, watch TV, or entertain guests."
  },
  "door": {
    "definition": "A flat object that opens and closes to let people in or out",
    "options": ["An entrance or exit", "A type of food", "A type of clothing", "A tool"],
    "explanation": "A door is used to open or close a space, such as a room or a building. It provides access in and out."
  },
  "window": {
    "definition": "An opening in a wall to let in light and air",
    "options": ["An opening for light and air", "A piece of furniture", "A cooking tool", "A floor mat"],
    "explanation": "A window is a glass-covered opening that lets sunlight and fresh air into a room."
  },
  "chair": {
    "definition": "A piece of furniture for sitting",
    "options": ["Something to sit on", "A place to sleep", "A way to cook", "A cleaning tool"],
    "explanation": "A chair has a seat, back, and often legs, and is used for sitting, often at a table or desk."
  },
  "table": {
    "definition": "A piece of furniture with a flat top used for working or eating",
    "options": ["A flat surface for use", "A place to sleep", "A piece of clothing", "A toy"],
    "explanation": "A table is used for dining, writing, or placing things. It usually has a flat top and legs."
  },
  "bed": {
    "definition": "A piece of furniture used for sleeping",
    "options": ["Something to sleep on", "Something to sit on", "A bookshelf", "A carpet"],
    "explanation": "A bed is used for sleeping or resting and typically includes a mattress and pillows."
  },
  "sofa": {
    "definition": "A comfortable seat for more than one person",
    "options": ["A large seat", "A small table", "A desk", "A cabinet"],
    "explanation": "A sofa is a cushioned seat for several people, often found in the living room."
  },
  "lamp": {
    "definition": "A device that gives light",
    "options": ["A light source", "A type of bed", "A kitchen tool", "A vehicle"],
    "explanation": "A lamp is used to light up a room. It often sits on a table or stands on the floor."
  },
  "fridge": {
    "definition": "A machine that keeps food cold",
    "options": ["A cold food storage", "A heater", "A cooking tool", "A television"],
    "explanation": "A fridge (or refrigerator) is used to keep food and drinks cold and fresh."
  },
  "TV": {
    "definition": "An electronic device for watching shows and movies",
    "options": ["A screen for watching", "A cooking appliance", "A type of chair", "A window"],
    "explanation": "TV stands for television. It plays programs, movies, and news for entertainment or learning."
  },
  "phone": {
    "definition": "A device used for talking to people far away",
    "options": ["A device for calling", "A food container", "A cleaning tool", "A type of paper"],
    "explanation": "A phone allows people to talk to each other over long distances and is often used for texting and internet too."
  },
  "mirror": {
    "definition": "A smooth surface that reflects images",
    "options": ["A reflective surface", "A wall decoration", "A heater", "A light bulb"],
    "explanation": "A mirror is used to see yourself, often found in bathrooms and bedrooms."
  },
  "clock": {
    "definition": "A device that shows the time",
    "options": ["A time-telling device", "A type of calculator", "A television remote", "A computer"],
    "explanation": "A clock shows what time it is and can be digital or have hands that move around a face."
  },
  "shelf": {
    "definition": "A flat board fixed to a wall for holding items",
    "options": ["A board for storage", "A cooking tool", "A picture frame", "A television stand"],
    "explanation": "A shelf is used to hold things like books, decorations, or kitchen items and is attached to a wall or part of furniture."
  },
  "floor": {
    "definition": "The bottom surface of a room",
    "options": ["The ground inside a room", "A ceiling", "A piece of furniture", "A window shade"],
    "explanation": "The floor is the surface you walk on in a room. It can be made of wood, tile, carpet, or other materials."
  },
      "happy": {
    "definition": "Feeling good, content, or pleased",
    "options": ["Feeling content", "Feeling sad", "Feeling angry", "Feeling tired"],
    "explanation": "When someone is happy, they feel joy or pleasure, often as a result of positive events."
  },
  "sad": {
    "definition": "Feeling sorrowful or upset",
    "options": ["Feeling sorrowful", "Feeling excited", "Feeling hungry", "Feeling cold"],
    "explanation": "When someone is sad, they feel unhappy or disappointed, often due to loss or misfortune."
  },
  "tired": {
    "definition": "Feeling a lack of energy, wanting to rest",
    "options": ["Lacking energy", "Feeling excited", "Feeling hungry", "Feeling strong"],
    "explanation": "When someone is tired, they feel weary or fatigued, usually from physical or mental activity."
  },
  "hungry": {
    "definition": "Feeling the need for food",
    "options": ["Needing food", "Needing sleep", "Needing water", "Needing rest"],
    "explanation": "When someone is hungry, they feel a desire or need to eat food."
  },
  "thirsty": {
    "definition": "Feeling the need for a drink, especially water",
    "options": ["Needing a drink", "Needing food", "Needing sleep", "Needing exercise"],
    "explanation": "When someone is thirsty, they feel the need to drink liquids, typically water."
  },
  "hot": {
    "definition": "Having a high temperature",
    "options": ["High in temperature", "Low in temperature", "Wet", "Cold"],
    "explanation": "When something is hot, it has a high temperature, often making it uncomfortable to touch."
  },
  "cold": {
    "definition": "Having a low temperature",
    "options": ["Low in temperature", "High in temperature", "Wet", "Sticky"],
    "explanation": "When something is cold, it has a low temperature, often making it uncomfortable or shivery."
  },
  "big": {
    "definition": "Large in size or amount",
    "options": ["Large in size", "Small in size", "Heavy", "Round"],
    "explanation": "When something is big, it has a large size, volume, or importance."
  },
  "small": {
    "definition": "Little in size or amount",
    "options": ["Little in size", "Large in size", "Heavy", "Tall"],
    "explanation": "When something is small, it has a small size or amount compared to others."
  },
  "tall": {
    "definition": "Having a greater height than average",
    "options": ["Greater in height", "Short in height", "Wide", "Heavy"],
    "explanation": "When someone or something is tall, they are higher in height than most others."
  },
  "short": {
    "definition": "Having a small height or length",
    "options": ["Small in height", "Big in height", "Wide", "Heavy"],
    "explanation": "When something is short, it has a small height or length."
  },
  "young": {
    "definition": "Having lived for only a small number of years",
    "options": ["Having a small age", "Having a large age", "Having much experience", "Having great wisdom"],
    "explanation": "When someone is young, they have lived only a short amount of time and are often in the early stages of life."
  },
  "old": {
    "definition": "Having lived for a long time",
    "options": ["Having a long age", "Having a short age", "Having much energy", "Having little wisdom"],
    "explanation": "When someone is old, they have lived many years and often have more life experience."
  },
  "good": {
    "definition": "Having positive qualities or being morally right",
    "options": ["Having positive qualities", "Having bad qualities", "Being selfish", "Being rude"],
    "explanation": "Good refers to something that is positive, virtuous, or desirable, such as kind actions or good outcomes."
  },
  "bad": {
    "definition": "Having negative qualities or being morally wrong",
    "options": ["Having negative qualities", "Having positive qualities", "Being helpful", "Being healthy"],
    "explanation": "Bad refers to something that is harmful, undesirable, or morally wrong, like bad behavior or outcomes."
  },
  "beautiful": {
    "definition": "Pleasing to the eye, attractive",
    "options": ["Pleasing in appearance", "Unattractive", "Shiny", "Rough"],
    "explanation": "Beautiful refers to something that is visually appealing, whether it’s a person, object, or scene."
  },
  "ugly": {
    "definition": "Unpleasant in appearance, unattractive",
    "options": ["Unattractive", "Attractive", "Bright", "Clean"],
    "explanation": "Ugly refers to something that is unpleasant or displeasing to look at."
  },
  "fast": {
    "definition": "Moving or happening quickly",
    "options": ["Moving quickly", "Moving slowly", "Heavy", "Tall"],
    "explanation": "Fast refers to speed, describing something that moves or happens in a short amount of time."
  },
  "slow": {
    "definition": "Moving or happening at a low speed",
    "options": ["Moving slowly", "Moving quickly", "Heavy", "Tall"],
    "explanation": "Slow refers to something that moves or happens at a leisurely or delayed pace."
  },
  "easy": {
    "definition": "Not difficult to do, understand, or achieve",
    "options": ["Not difficult", "Very hard", "Complicated", "Challenging"],
    "explanation": "Easy refers to tasks or activities that are simple, requiring little effort or skill."
  },
     "car": {
    "definition": "A motor vehicle with four wheels, usually powered by an engine",
    "options": ["A motor vehicle", "A type of bike", "A type of plane", "A boat"],
    "explanation": "A car is a common means of transportation, used for traveling on roads and powered by gasoline or electricity."
  },
  "bus": {
    "definition": "A large vehicle that carries passengers by road, typically one that stops at designated places",
    "options": ["A large passenger vehicle", "A small passenger vehicle", "A motorbike", "A train"],
    "explanation": "A bus is a vehicle designed to carry many people, commonly used for public transportation."
  },
  "train": {
    "definition": "A series of connected vehicles that run on rail tracks and transport goods or passengers",
    "options": ["A vehicle on tracks", "A vehicle for the sea", "A vehicle in the air", "A type of car"],
    "explanation": "A train travels on fixed tracks and is used for transporting people or cargo over long distances."
  },
  "bike": {
    "definition": "A two-wheeled vehicle that is powered by pedaling",
    "options": ["A two-wheeled vehicle", "A motorized vehicle", "A type of car", "A type of train"],
    "explanation": "A bike is a human-powered vehicle, typically used for exercise, recreation, or short-distance travel."
  },
  "plane": {
    "definition": "A large, flying vehicle used for air travel",
    "options": ["A flying vehicle", "A road vehicle", "A type of boat", "A type of bus"],
    "explanation": "A plane is an aircraft designed for traveling in the air, often used for long-distance or international travel."
  },
  "taxi": {
    "definition": "A car for hire that transports passengers to their destinations",
    "options": ["A car for hire", "A type of train", "A type of bus", "A bicycle"],
    "explanation": "A taxi is a vehicle that passengers pay to travel in, offering door-to-door service."
  },
  "ticket": {
    "definition": "A piece of paper or electronic record that allows entry to a place or travel on a vehicle",
    "options": ["A travel pass", "A type of food", "A clothing item", "A tool"],
    "explanation": "A ticket is a document used to gain access to an event, transportation, or service, often purchased in advance."
  },
  "passport": {
    "definition": "An official document issued by a government that allows a person to travel internationally",
    "options": ["A travel document", "A type of ticket", "A travel guide", "A map"],
    "explanation": "A passport is required for international travel and verifies a person's identity and nationality."
  },
  "suitcase": {
    "definition": "A large container with a handle, used for carrying clothes and personal belongings during travel",
    "options": ["A travel container", "A type of vehicle", "A document", "A type of clothing"],
    "explanation": "A suitcase is used for packing clothes and other items, making it easier to carry belongings while traveling."
  },
  "travel": {
    "definition": "To go from one place to another, typically over a long distance",
    "options": ["To move from one place to another", "To stay in one place", "To walk slowly", "To rest"],
    "explanation": "Travel refers to the act of moving or journeying to different locations for leisure, business, or other purposes."
  },
  "journey": {
    "definition": "The act of traveling from one place to another, typically taking a long time",
    "options": ["A trip or voyage", "A short walk", "A rest", "A stay at home"],
    "explanation": "A journey refers to the process of traveling, often over a significant distance, and can last from hours to days."
  },
  "trip": {
    "definition": "A journey or excursion to a specific destination",
    "options": ["A journey", "A type of sleep", "A type of rest", "A type of work"],
    "explanation": "A trip is a visit or excursion to a particular place, often planned for business or leisure purposes."
  },
  "holiday": {
    "definition": "A period of time for relaxation or travel, away from work or school",
    "options": ["A time of rest", "A type of work", "A busy time", "A long journey"],
    "explanation": "A holiday is a time for relaxation or celebration, often involving travel or leisure activities."
  },
  "map": {
    "definition": "A diagram representing a geographical area, showing locations, roads, and other features",
    "options": ["A geographical diagram", "A type of ticket", "A travel bag", "A vehicle"],
    "explanation": "A map helps people navigate by providing a visual representation of geographic locations and distances."
  },
  "airport": {
    "definition": "A place where aircraft take off and land, with facilities for passengers",
    "options": ["An air travel hub", "A train station", "A type of bus stop", "A vehicle garage"],
    "explanation": "An airport is a large complex designed for air travel, providing services for both domestic and international flights."
  },
  "station": {
    "definition": "A place where vehicles like trains, buses, or subways stop to pick up or drop off passengers",
    "options": ["A transport stop", "A place for rest", "A type of vehicle", "A travel document"],
    "explanation": "A station is a fixed location where passengers board or disembark from public transportation."
  },
  "stop": {
    "definition": "A designated location where transportation vehicles pick up or drop off passengers",
    "options": ["A transport pickup point", "A type of car", "A travel bag", "A travel document"],
    "explanation": "A stop is a place where a vehicle pauses to let passengers get on or off, such as a bus stop or train stop."
  },
  "drive": {
    "definition": "To operate and control a motor vehicle",
    "options": ["To operate a vehicle", "To rest", "To walk", "To swim"],
    "explanation": "Driving refers to controlling a vehicle, such as a car, truck, or bus, to move it from one place to another."
  },
  "ride": {
    "definition": "To travel in or on a vehicle or animal, typically as a passenger",
    "options": ["To travel as a passenger", "To drive", "To walk", "To fly"],
    "explanation": "To ride means to travel in a vehicle or on an animal, usually as a passenger."
  },
  "walk": {
    "definition": "To move at a steady pace by lifting and setting down each foot in turn",
    "options": ["To move on foot", "To drive", "To fly", "To run quickly"],
    "explanation": "Walking involves moving at a slow or moderate pace on foot and is one of the most basic forms of movement."
  } 
        // Add more basic words...
    },
    intermediate: {
"absurd": {
    definition: "Extremely unreasonable, foolish, or silly",
    options: ["Extremely foolish", "Very reasonable", "Completely correct", "Extremely serious"],
    explanation: "An absurd idea or statement is one that does not make sense or is completely ridiculous."
},
"benevolent": {
    definition: "Well meaning and kindly",
    options: ["Kind and good-hearted", "Rude and harsh", "Uncaring", "Selfish"],
    explanation: "A benevolent person is generous and caring, often willing to help others without expecting anything in return."
},
"cynical": {
    definition: "Believing that people are motivated by self-interest; distrustful of others' sincerity",
    options: ["Distrustful of others", "Optimistic", "Trusting and kind", "Hopeful and positive"],
    explanation: "A cynical person often thinks that others do things only for their own benefit, rather than out of kindness."
},
"elusive": {
    definition: "Difficult to find, catch, or achieve",
    options: ["Hard to catch or understand", "Easily found", "Easily understood", "Clear and obvious"],
    explanation: "Something or someone that is elusive is hard to locate or grasp, often because it keeps moving or changing."
},
"flourish": {
    definition: "To grow or develop in a healthy or vigorous way",
    options: ["To grow or develop well", "To shrink", "To disappear", "To stay the same"],
    explanation: "When something flourishes, it thrives and becomes successful, often in an environment of support."
},
"grievous": {
    definition: "Very serious or severe",
    options: ["Very serious or severe", "Not serious", "Of little importance", "Unusual"],
    explanation: "A grievous injury or mistake is one that is severe, painful, or very harmful."
},
"hypothetical": {
    definition: "Based on a suggested idea or theory",
    options: ["Based on a theory", "Based on a fact", "Based on experience", "Completely real"],
    explanation: "A hypothetical situation is imagined or proposed to explain something or to think about possible outcomes."
},
"immense": {
    definition: "Extremely large or great",
    options: ["Extremely large", "Quite small", "Average size", "Hard to measure"],
    explanation: "Something that is immense is vast or enormous, like the size of a mountain or ocean."
},
"jovial": {
    definition: "Cheerful and friendly",
    options: ["Cheerful and friendly", "Angry", "Sad", "Rude"],
    explanation: "A jovial person is full of high spirits and good humor, often making others feel happy too."
},
"keen": {
    definition: "Having a sharp mind or interest",
    options: ["Sharp and interested", "Lazy", "Dull", "Unaware"],
    explanation: "A keen person is eager or enthusiastic about something and often has a strong ability to understand it."
},
"lethargic": {
    definition: "Sluggish and lacking energy",
    options: ["Slow and tired", "Full of energy", "Very active", "Highly motivated"],
    explanation: "If someone is lethargic, they feel tired and weak, often lacking the energy to do everyday activities."
},
"meticulous": {
    definition: "Showing great attention to detail; very careful and precise",
    options: ["Careful and precise", "Hasty and careless", "Unorganized", "Imprecise"],
    explanation: "A meticulous person pays close attention to every small detail and takes care to avoid mistakes."
},
"novel": {
    definition: "New and unusual",
    options: ["New and original", "Old and traditional", "Common", "Unimportant"],
    explanation: "A novel idea is one that is new and different from what has been done before."
},
"obsolete": {
    definition: "No longer in use or no longer relevant",
    options: ["No longer in use", "Very useful", "New and improved", "Widely used"],
    explanation: "An obsolete object or method is no longer needed or has been replaced by something newer and better."
},
"perplex": {
    definition: "To confuse or puzzle someone",
    options: ["To confuse", "To explain", "To entertain", "To impress"],
    explanation: "To perplex someone is to make them feel confused, as they are unable to understand something."
},
"quaint": {
    definition: "Charming or unusual in an old-fashioned way",
    options: ["Old-fashioned but charming", "Modern and trendy", "Unfashionable", "Expensive"],
    explanation: "A quaint object or place is charming because of its old-fashioned or unusual qualities."
},
"resilient": {
    definition: "Able to recover quickly from difficulties",
    options: ["Able to recover easily", "Unable to adapt", "Weak", "Sensitive"],
    explanation: "A resilient person or thing bounces back from challenges or setbacks with strength and determination."
},
"sophisticated": {
    definition: "Advanced in design or development, showing high levels of refinement",
    options: ["Advanced and refined", "Simple and basic", "Old-fashioned", "Easily understood"],
    explanation: "A sophisticated object or person is complex, well-developed, and often shows a high level of taste or education."
},
"turbulent": {
    definition: "Characterized by disorder or confusion",
    options: ["Full of disorder", "Calm", "Peaceful", "Orderly"],
    explanation: "Turbulent times or situations are filled with chaos, confusion, or conflict."
},
"unprecedented": {
    definition: "Never before known or experienced",
    options: ["Never experienced before", "Very common", "A regular occurrence", "Well-known"],
    explanation: "An unprecedented event is one that has never happened before and is therefore extraordinary."
},
"vibrant": {
    definition: "Full of life, energy, or color",
    options: ["Full of energy", "Dull", "Lifeless", "Quiet"],
    explanation: "A vibrant person or thing is lively, energetic, and full of bright colors or enthusiasm."
},
"wary": {
    definition: "Cautious and alert to danger or problems",
    options: ["Cautious and careful", "Careless", "Confident", "Inexperienced"],
    explanation: "A wary person is cautious and alert, especially when they think something might be dangerous or risky."
},
"zealous": {
    definition: "Showing great energy or enthusiasm for something",
    options: ["Full of enthusiasm", "Uninterested", "Lazy", "Indifferent"],
    explanation: "A zealous person is extremely passionate and energetic about a cause, goal, or interest."
},
"ambiguous": {
    definition: "Open to more than one interpretation",
    options: ["Open to multiple meanings", "Very clear", "Easy to understand", "Straightforward"],
    explanation: "Something ambiguous can be understood in different ways, making it unclear or confusing."
},
"banal": {
    definition: "Lacking originality, dull",
    options: ["Lacking originality", "Very interesting", "Unique", "Creative"],
    explanation: "A banal idea, expression, or work is unimaginative, lacking in freshness or originality."
},
"contemplate": {
    definition: "To think deeply about something",
    options: ["To think deeply", "To forget", "To ignore", "To reject"],
    explanation: "To contemplate something is to consider it carefully, often in a thoughtful or serious way."
},
"eliminate": {
    definition: "To remove or get rid of something",
    options: ["To remove", "To add", "To examine", "To collect"],
    explanation: "To eliminate something is to completely remove it from a situation or environment."
},
"fabricate": {
    definition: "To invent or make up something, often with the intention of deceiving",
    options: ["To invent or lie", "To tell the truth", "To clarify", "To share facts"],
    explanation: "To fabricate is to create a false story or statement, often with the aim of deceiving others."
},
"genuine": {
    definition: "Real and authentic, not fake",
    options: ["Real and authentic", "Fake", "Imperfect", "Old-fashioned"],
    explanation: "Something genuine is true and not made up or imitated. It is authentic in nature."
},
"harsh": {
    definition: "Rough, severe, or unpleasant",
    options: ["Severe and unpleasant", "Gentle", "Comfortable", "Friendly"],
    explanation: "Harsh conditions or words are severe, unkind, or difficult to endure."
},
"indignant": {
    definition: "Feeling anger or annoyance at something perceived as unfair",
    options: ["Feeling angry or upset", "Feeling happy", "Feeling relaxed", "Feeling confused"],
    explanation: "An indignant person feels angry or upset because they believe something is unjust or wrong."
},
"jargon": {
    definition: "Specialized language used by a particular group or profession",
    options: ["Specialized language", "Common language", "General speech", "Everyday words"],
    explanation: "Jargon is often used by specific groups to communicate more efficiently but may be hard for outsiders to understand."
},
"keen": {
    definition: "Having a sharp interest or ability",
    options: ["Sharp and interested", "Weak", "Bored", "Unskilled"],
    explanation: "Being keen means having a strong desire or ability, especially in learning or understanding something."
},
"lofty": {
    definition: "Very high or elevated in position or ideas",
    options: ["High or elevated", "Low and unimportant", "Ordinary", "Easy to reach"],
    explanation: "Lofty ideas or goals are grand or ambitious, often difficult to achieve."
},
"mundane": {
    definition: "Ordinary and dull, lacking excitement",
    options: ["Ordinary and dull", "Exciting", "Extraordinary", "Unique"],
    explanation: "Mundane tasks or events are everyday activities that lack interest or excitement."
},
"nuance": {
    definition: "A subtle difference or variation",
    options: ["A subtle difference", "A major change", "A loud sound", "An obvious choice"],
    explanation: "A nuance is a small but important difference, often in meaning or expression."
},
"permanent": {
    definition: "Lasting or intended to last forever",
    options: ["Lasting forever", "Temporary", "Short-lived", "Changing constantly"],
    explanation: "Something permanent stays the same over time and doesn't change or disappear easily."
},
"quintessential": {
    definition: "Representing the most perfect or typical example of something",
    options: ["The perfect example", "The worst example", "An unusual example", "An incomplete example"],
    explanation: "The quintessential thing is the ideal or most perfect version of something, often seen as the standard."
},
"relevant": {
    definition: "Closely connected or appropriate to the matter at hand",
    options: ["Connected and important", "Unconnected", "Distant", "Inappropriate"],
    explanation: "Relevant information is directly related to the topic or issue being discussed."
},
"scant": {
    definition: "Insufficient or barely enough",
    options: ["Insufficient", "Plentiful", "Overwhelming", "Excessive"],
    explanation: "If something is scant, there is not enough of it to meet needs or expectations."
},
"tenacious": {
    definition: "Holding fast; persistent in maintaining something valued",
    options: ["Persistent", "Lazy", "Unmotivated", "Weak"],
    explanation: "A tenacious person is determined and refuses to give up easily, holding on tightly to their goals."
},
"uphold": {
    definition: "To support or maintain something",
    options: ["To support or maintain", "To destroy", "To question", "To neglect"],
    explanation: "To uphold a principle or law is to ensure it is followed or respected."
},
      "opinion": {
    "definition": "A personal view or belief about something",
    "options": ["A personal view", "A fact", "A type of news", "A law"],
    "explanation": "An opinion is an individual's perspective or belief about a subject, and it may differ from person to person."
  },
  "advice": {
    "definition": "Guidance or recommendations offered to someone about what they should do",
    "options": ["Guidance or recommendations", "A decision", "A fact", "A law"],
    "explanation": "Advice is the help or suggestions given to someone to make decisions or solve problems."
  },
  "attitude": {
    "definition": "A settled way of thinking or feeling about someone or something",
    "options": ["A way of thinking or feeling", "A decision", "A physical action", "A place"],
    "explanation": "Attitude refers to a person's mindset or approach toward situations, people, or ideas."
  },
  "relationship": {
    "definition": "The way in which two or more people or things are connected",
    "options": ["A connection between people", "A physical object", "A place", "A type of food"],
    "explanation": "A relationship is a bond or connection between individuals, whether personal or professional."
  },
  "conversation": {
    "definition": "A talk between two or more people in which ideas and feelings are exchanged",
    "options": ["A talk between people", "A written document", "A one-way communication", "A public speech"],
    "explanation": "A conversation is an informal exchange of ideas or feelings between people."
  },
  "friendship": {
    "definition": "The relationship between friends",
    "options": ["The relationship between friends", "A professional relationship", "A family bond", "A business partnership"],
    "explanation": "Friendship is the bond shared between two or more people who trust and care for each other."
  },
  "colleague": {
    "definition": "A person who works with you in the same organization or profession",
    "options": ["A workmate", "A family member", "A neighbor", "A friend"],
    "explanation": "A colleague is someone you work with, usually in the same office or field of expertise."
  },
  "partner": {
    "definition": "A person you work with, especially in a business or collaborative project",
    "options": ["A business or collaborative associate", "A family member", "A customer", "A competitor"],
    "explanation": "A partner is someone you collaborate with in a business or joint venture."
  },
  "family": {
    "definition": "A group consisting of parents and their children, or all the descendants of a common ancestor",
    "options": ["A group of people related by blood or marriage", "A group of friends", "A group of colleagues", "A group of students"],
    "explanation": "Family refers to a group of individuals who are related by blood, marriage, or adoption."
  },
  "support": {
    "definition": "Assistance or help provided to someone in need",
    "options": ["Help or assistance", "A financial reward", "A job promotion", "A physical object"],
    "explanation": "Support refers to the aid or help provided to someone, either emotionally, financially, or physically."
  },
  "disagreement": {
    "definition": "A situation where two or more people have different opinions or views",
    "options": ["A difference in opinion", "A strong agreement", "A mutual understanding", "A celebration"],
    "explanation": "Disagreement occurs when individuals or groups do not share the same perspective on an issue."
  },
  "agreement": {
    "definition": "A mutual understanding or arrangement between two or more people",
    "options": ["A mutual understanding", "A disagreement", "A fight", "A rule"],
    "explanation": "An agreement is when parties come to a consensus or decision on a particular matter."
  },
  "experience": {
    "definition": "Knowledge or skill gained through involvement in or exposure to something over time",
    "options": ["Knowledge gained from doing", "A specific event", "A family relationship", "A job title"],
    "explanation": "Experience refers to what you learn by doing something, which helps you gain expertise or skills."
  },
  "belief": {
    "definition": "A feeling of certainty that something is true or real",
    "options": ["A strong feeling of certainty", "A fact", "A rule", "A guess"],
    "explanation": "A belief is something a person holds to be true, often without proof."
  },
  "event": {
    "definition": "An occurrence, especially one of importance or interest",
    "options": ["An important occurrence", "A form of communication", "A document", "A type of food"],
    "explanation": "An event refers to something that happens, usually of significance or interest."
  },
  "ambition": {
    "definition": "A strong desire to achieve something, typically requiring determination and hard work",
    "options": ["A strong desire to achieve", "A relaxed attitude", "A type of feeling", "A job title"],
    "explanation": "Ambition is the drive to succeed and reach personal or professional goals."
  },
  "emotion": {
    "definition": "A natural instinctive state of mind deriving from one's circumstances or relationships",
    "options": ["A feeling", "A decision", "A memory", "A plan"],
    "explanation": "Emotion refers to feelings such as happiness, sadness, anger, and fear, which can influence behavior."
  },
  "feeling": {
    "definition": "An emotional state or reaction",
    "options": ["An emotional response", "A logical thought", "A fact", "A physical action"],
    "explanation": "A feeling is an emotional experience, such as happiness, sadness, or excitement."
  },
  "sympathy": {
    "definition": "Feelings of pity or sorrow for someone's misfortune",
    "options": ["Feelings of sorrow for others", "Happiness", "Pride", "Anger"],
    "explanation": "Sympathy is showing understanding and care for someone's difficulties or suffering."
  },
  "communication": {
    "definition": "The process of exchanging information or ideas through speaking, writing, or other means",
    "options": ["Exchanging information", "A type of food", "A law", "A place"],
    "explanation": "Communication is the exchange of information through various methods, such as speaking, writing, or gestures."
  },
  "career": {
    "definition": "An occupation or profession, especially one that requires special training or education",
    "options": ["A long-term occupation", "A short-term job", "A hobby", "A family role"],
    "explanation": "A career is a professional path that someone follows, typically involving education and long-term development."
  },
  "profession": {
    "definition": "A paid occupation, especially one that requires training or formal education",
    "options": ["A job requiring special skills", "An informal job", "A part-time job", "A hobby"],
    "explanation": "A profession is an occupation that requires specialized knowledge and training, such as law or medicine."
  },
  "qualification": {
    "definition": "A skill, achievement, or experience that makes someone suitable for a particular job or activity",
    "options": ["A skill or credential", "A job", "A location", "A work schedule"],
    "explanation": "Qualifications refer to the skills or experience necessary to perform a particular job or task."
  },
  "achievement": {
    "definition": "A thing done successfully with effort, skill, or courage",
    "options": ["A successful accomplishment", "A failure", "A disagreement", "A problem"],
    "explanation": "An achievement is the successful completion of a goal or task, often requiring hard work and determination."
  },
  "position": {
    "definition": "A job or role within an organization or company",
    "options": ["A job role", "A feeling", "A place", "A goal"],
    "explanation": "Position refers to a specific role or job title within a company or organization."
  },
      "adventure": {
    "definition": "An unusual and exciting experience or activity",
    "options": ["An exciting experience", "A boring task", "A regular routine", "A scientific experiment"],
    "explanation": "An adventure is an exciting or unusual activity or journey that often involves exploration and risk."
  },
  "destination": {
    "definition": "The place to which someone or something is going or being sent",
    "options": ["A place to go", "A vehicle", "A route", "A task"],
    "explanation": "A destination is the final stop or location where a journey or trip leads."
  },
  "journey": {
    "definition": "The act of traveling from one place to another",
    "options": ["The act of traveling", "A destination", "A short trip", "A daily routine"],
    "explanation": "A journey refers to the travel or process of moving from one place to another, often over a long distance."
  },
  "itinerary": {
    "definition": "A planned route or schedule for a journey or trip",
    "options": ["A travel plan", "A map", "A type of vehicle", "A place of interest"],
    "explanation": "An itinerary is a detailed plan or schedule that outlines the locations, dates, and activities of a trip."
  },
  "accommodation": {
    "definition": "A place where someone can stay, such as a hotel or guesthouse",
    "options": ["A place to stay", "A method of transportation", "A type of food", "A tool"],
    "explanation": "Accommodation refers to a place to live or stay temporarily while traveling or visiting."
  },
  "sightseeing": {
    "definition": "The activity of visiting interesting or famous places, usually while traveling",
    "options": ["Visiting interesting places", "Going shopping", "Working in an office", "Studying at school"],
    "explanation": "Sightseeing involves visiting famous landmarks and attractions, often as part of a vacation."
  },
  "landmark": {
    "definition": "A recognizable or historical place or feature, typically used for navigation",
    "options": ["A recognizable feature", "A place to eat", "A type of food", "A hotel room"],
    "explanation": "A landmark is a prominent or historic feature that makes a place easily identifiable or significant."
  },
  "tour": {
    "definition": "A journey or trip for pleasure in which various places are visited",
    "options": ["A guided trip", "A type of food", "A piece of art", "A daily task"],
    "explanation": "A tour is a journey or visit to various places, often guided, for the purpose of sightseeing."
  },
  "explore": {
    "definition": "To travel through an area to learn more about it or discover new things",
    "options": ["To discover new things", "To rest", "To stay in one place", "To ignore"],
    "explanation": "To explore means to investigate or travel through an area to learn about it, often involving curiosity and discovery."
  },
  "guide": {
    "definition": "A person who shows tourists around and provides information about a place",
    "options": ["A person who leads and informs", "A type of vehicle", "A place to eat", "A travel document"],
    "explanation": "A guide is someone who leads tourists on visits, explaining the history, culture, or significance of places."
  },
  "vacation": {
    "definition": "An extended period of leisure and rest, often away from home",
    "options": ["A holiday or break", "A type of food", "A daily routine", "A work meeting"],
    "explanation": "A vacation is a time when people take a break from work or school to relax or travel."
  },
  "passport": {
    "definition": "A government-issued document that allows someone to travel internationally",
    "options": ["A travel document", "A type of visa", "A piece of luggage", "A transportation ticket"],
    "explanation": "A passport is an official document that allows individuals to travel internationally and verifies their identity and citizenship."
  },
  "tourist": {
    "definition": "A person who travels for pleasure and visits places of interest",
    "options": ["A person visiting a place for leisure", "A local resident", "A hotel worker", "A tour guide"],
    "explanation": "A tourist is someone who travels to new locations for sightseeing, relaxation, or exploration."
  },
  "exhibition": {
    "definition": "A public display of art, products, or other items of interest",
    "options": ["A public display", "A type of performance", "A private gathering", "A business deal"],
    "explanation": "An exhibition is an event where items such as art, goods, or information are displayed for the public to view."
  },
  "museum": {
    "definition": "A building where historical, scientific, or artistic items are kept and displayed",
    "options": ["A place to view artifacts", "A place to eat", "A place to shop", "A place to work"],
    "explanation": "A museum is a building where various collections of items, such as artwork, fossils, or historical artifacts, are preserved and displayed."
  },
  "culture": {
    "definition": "The shared beliefs, values, customs, and traditions of a group or society",
    "options": ["Shared beliefs and customs", "A specific product", "A type of weather", "A style of art"],
    "explanation": "Culture refers to the behaviors, beliefs, and traditions that are passed down through generations within a society."
  },
  "festival": {
    "definition": "A special event or celebration, often with music, food, and cultural activities",
    "options": ["A celebration or event", "A business meeting", "A travel document", "A shopping event"],
    "explanation": "A festival is a celebration that typically includes entertainment, food, and cultural practices."
  },
  "custom": {
    "definition": "A traditional practice or habit followed by a group or society",
    "options": ["A traditional practice", "A legal rule", "A form of entertainment", "A social issue"],
    "explanation": "A custom refers to practices or rituals that are regularly followed by a group of people."
  },
  "tradition": {
    "definition": "The transmission of customs, beliefs, or practices from one generation to another",
    "options": ["Cultural practices passed down", "A type of food", "A type of work", "A new habit"],
    "explanation": "A tradition is a long-established custom or practice that is passed down through generations."
  },
  "souvenir": {
    "definition": "An item kept as a reminder of a person, place, or event",
    "options": ["A keepsake", "A form of payment", "A type of transportation", "A job title"],
    "explanation": "A souvenir is an item bought or kept to remember a particular place, event, or experience."
  },
  "democracy": {
    "definition": "A form of government where the people have the power to make decisions",
    "options": ["A system of government by the people", "A form of dictatorship", "A monarchy", "A military rule"],
    "explanation": "Democracy is a system where citizens vote to choose leaders and influence decisions in the government."
  },
  "equality": {
    "definition": "The state of being treated equally, with the same rights and opportunities for all",
    "options": ["Equal treatment for all", "A hierarchy of people", "The right to govern", "Unequal rights for some"],
    "explanation": "Equality ensures that everyone has the same rights and opportunities, regardless of their background or identity."
  },
  "discrimination": {
    "definition": "The unfair treatment of people based on characteristics like race, gender, or age",
    "options": ["Unfair treatment", "Equality for all", "A legal right", "A form of kindness"],
    "explanation": "Discrimination occurs when individuals are treated unfairly due to factors such as race, gender, or other personal characteristics."
  },
  "justice": {
    "definition": "The concept of fairness and the legal system enforcing rights and laws",
    "options": ["Fairness and law", "An unfair system", "A type of punishment", "A specific group of people"],
    "explanation": "Justice refers to the fair treatment of individuals according to the law and the enforcement of rights and duties."
  },
  "freedom": {
    "definition": "The power or right to act, speak, or think as one wants without hindrance or restraint",
    "options": ["The right to act freely", "The restriction of movement", "A type of law", "A type of work"],
    "explanation": "Freedom is the ability to make choices and live without unnecessary restrictions or oppression."
  },
      "illness": {
    "definition": "A condition of being sick or having a disease",
    "options": ["A condition of being sick", "A form of exercise", "A healthy lifestyle", "A medical treatment"],
    "explanation": "Illness refers to a state of poor health caused by various factors such as infections, diseases, or other conditions."
  },
  "recovery": {
    "definition": "The process of getting better after an illness or injury",
    "options": ["Getting better from illness", "A state of being sick", "A medical procedure", "A form of exercise"],
    "explanation": "Recovery is the process in which someone regains their health and strength after being ill or injured."
  },
  "treatment": {
    "definition": "The care or actions taken to cure or alleviate a health problem",
    "options": ["Care for health issues", "A type of illness", "A method of exercise", "A medical diagnosis"],
    "explanation": "Treatment refers to the medical procedures or medications used to improve or cure an illness or injury."
  },
  "symptoms": {
    "definition": "Signs or feelings that indicate the presence of a disease or condition",
    "options": ["Signs of a disease", "A medical cure", "A type of disease", "A way to relax"],
    "explanation": "Symptoms are the physical or mental signs that suggest someone might be ill, such as a cough, fever, or pain."
  },
  "healthy": {
    "definition": "Being in good physical or mental condition",
    "options": ["In good health", "Sick or unwell", "Unfit", "Having symptoms"],
    "explanation": "Being healthy means having a strong body, mind, and well-being, free from illness or disease."
  },
  "fitness": {
    "definition": "The condition of being physically healthy and strong, usually through exercise",
    "options": ["Physical health and strength", "A form of illness", "A type of stress", "An emotional feeling"],
    "explanation": "Fitness refers to the state of being physically strong and healthy, often achieved through regular exercise."
  },
  "exercise": {
    "definition": "Physical activity that is done to improve health and fitness",
    "options": ["Physical activity for health", "A type of illness", "A form of relaxation", "A medical treatment"],
    "explanation": "Exercise is physical activity performed to enhance strength, fitness, and overall health."
  },
  "diet": {
    "definition": "The food and drink regularly consumed by a person",
    "options": ["Food and drink habits", "A form of exercise", "A type of stress", "A medical treatment"],
    "explanation": "Diet refers to the types of food and drinks a person regularly consumes, which can affect health."
  },
  "nutrition": {
    "definition": "The process of obtaining and using food for growth, metabolism, and health",
    "options": ["The process of eating for health", "A form of illness", "A medical procedure", "A type of exercise"],
    "explanation": "Nutrition is the process of providing or obtaining the food necessary for health and growth."
  },
  "mental": {
    "definition": "Relating to the mind or psychological health",
    "options": ["Relating to the mind", "A type of exercise", "A form of illness", "A physical injury"],
    "explanation": "Mental health refers to the condition of a person's mind, including emotions, thoughts, and well-being."
  },
  "stress": {
    "definition": "A state of mental or emotional strain caused by difficult situations",
    "options": ["Mental strain or pressure", "Physical relaxation", "A form of fitness", "A medical procedure"],
    "explanation": "Stress refers to the emotional and mental pressure one experiences in response to challenges or demands."
  },
  "relaxation": {
    "definition": "The process of becoming less tense or anxious, often through rest or activities",
    "options": ["Becoming less tense", "A type of illness", "A form of exercise", "A medical treatment"],
    "explanation": "Relaxation is the act of resting and reducing tension or stress, which helps improve well-being."
  },
  "doctor": {
    "definition": "A medical professional who diagnoses and treats illnesses",
    "options": ["A medical professional", "A type of exercise", "A person who sells medicine", "A type of illness"],
    "explanation": "A doctor is a professional trained to diagnose, treat, and prevent health problems in patients."
  },
  "nurse": {
    "definition": "A healthcare professional who cares for patients and assists doctors",
    "options": ["A healthcare professional", "A medical procedure", "A type of illness", "A form of relaxation"],
    "explanation": "A nurse provides care and support to patients, often working alongside doctors in hospitals or clinics."
  },
  "hospital": {
    "definition": "A medical facility where people are treated for illnesses and injuries",
    "options": ["A place for medical treatment", "A place for fitness", "A type of office", "A type of shop"],
    "explanation": "A hospital is a healthcare institution where patients receive medical treatment, surgeries, and emergency care."
  },
  "medicine": {
    "definition": "A substance used to treat or prevent illness and promote health",
    "options": ["A substance for health", "A type of exercise", "A form of relaxation", "A type of stress"],
    "explanation": "Medicine refers to substances used for diagnosing, treating, or preventing illnesses and improving health."
  },
  "surgery": {
    "definition": "A medical procedure involving the cutting or removal of body tissue to treat a disease or injury",
    "options": ["A medical procedure", "A type of fitness", "A form of relaxation", "A mental health issue"],
    "explanation": "Surgery is a procedure performed by a doctor to treat injuries, diseases, or other health issues through physical intervention."
  },
  "vaccine": {
    "definition": "A biological preparation that improves immunity to a particular disease",
    "options": ["A substance to prevent disease", "A medical procedure", "A type of illness", "A form of exercise"],
    "explanation": "A vaccine is a medical substance that helps the body develop immunity to specific diseases by stimulating the immune system."
  },
  "disease": {
    "definition": "A condition that affects the body or mind, causing illness or dysfunction",
    "options": ["A health condition", "A form of exercise", "A type of relaxation", "A mental state"],
    "explanation": "A disease is an abnormal condition that negatively impacts a person's body or mind, causing symptoms like pain or dysfunction."
  },
  "therapy": {
    "definition": "Treatment intended to relieve or heal a disorder, often through physical, mental, or emotional approaches",
    "options": ["Treatment for health issues", "A form of stress", "A mental state", "A type of illness"],
    "explanation": "Therapy involves various methods used to help treat illnesses or emotional issues, including counseling and physical rehabilitation."
  },
      "internet": {
    "definition": "A global system of interconnected computer networks used for communication and information sharing",
    "options": ["A global communication network", "A type of phone", "A form of exercise", "A social media platform"],
    "explanation": "The internet is a network of networks that allows devices to connect and communicate with each other, providing access to various services like websites, emails, and social media."
  },
  "device": {
    "definition": "A piece of equipment or tool designed for a specific purpose",
    "options": ["A piece of equipment", "A type of food", "A medical procedure", "A type of exercise"],
    "explanation": "A device is a tool or gadget created to perform specific tasks, such as a smartphone, computer, or kitchen appliance."
  },
  "smartphone": {
    "definition": "A portable device that combines a phone, computer, and camera, and has internet access",
    "options": ["A portable communication device", "A type of television", "A piece of furniture", "A medical tool"],
    "explanation": "A smartphone is a handheld device that allows you to make calls, send messages, browse the internet, and use various apps."
  },
  "social media": {
    "definition": "Platforms and websites that allow users to create and share content or participate in social networking",
    "options": ["Online platforms for sharing content", "A form of entertainment", "A physical activity", "A traditional form of communication"],
    "explanation": "Social media refers to websites and apps that allow users to create and share content, such as Facebook, Instagram, Twitter, and TikTok."
  },
  "application": {
    "definition": "A software program designed to perform specific tasks or functions",
    "options": ["A software program", "A physical device", "A piece of furniture", "A type of event"],
    "explanation": "An application, or app, is a software program designed to help users complete specific tasks, such as checking email, managing schedules, or playing games."
  },
  "website": {
    "definition": "A set of related web pages under a domain name, typically containing text, images, and other media",
    "options": ["A collection of web pages", "A type of social media", "A medical procedure", "A physical device"],
    "explanation": "A website is an online platform containing web pages with various content, often used for providing information or services."
  },
  "software": {
    "definition": "The programs and operating information used by a computer",
    "options": ["Programs for computers", "A type of hardware", "A physical device", "A social media platform"],
    "explanation": "Software includes the applications, operating systems, and other programs that enable a computer to perform tasks."
  },
  "hardware": {
    "definition": "The physical components of a computer or electronic system",
    "options": ["Physical computer components", "A type of software", "A form of exercise", "A communication method"],
    "explanation": "Hardware refers to the tangible, physical parts of a computer or electronic device, such as the CPU, keyboard, and monitor."
  },
  "technology": {
    "definition": "The application of scientific knowledge for practical purposes, especially in industry",
    "options": ["The application of science for practical use", "A form of exercise", "A type of clothing", "A social activity"],
    "explanation": "Technology refers to the tools, machines, and systems created through scientific knowledge to solve problems and improve human life."
  },
  "innovation": {
    "definition": "The introduction of new ideas, methods, or products",
    "options": ["The introduction of new ideas", "A type of exercise", "A social event", "A form of relaxation"],
    "explanation": "Innovation involves the creation and application of new solutions, products, or methods that improve upon existing ideas."
  },
  "research": {
    "definition": "The systematic investigation to discover new facts, theories, or information",
    "options": ["Systematic investigation for knowledge", "A type of social activity", "A physical activity", "A business process"],
    "explanation": "Research is the process of conducting studies and experiments to acquire new information or validate existing knowledge."
  },
  "development": {
    "definition": "The process of improving or creating something, particularly in business or technology",
    "options": ["Improvement or creation of something", "A form of illness", "A type of social media", "A physical device"],
    "explanation": "Development refers to the stages of progress or creation, especially in industries such as technology, business, or education."
  },
  "virtual": {
    "definition": "Existing in the digital world, rather than in the physical world",
    "options": ["Existing in the digital realm", "A type of exercise", "A physical object", "A type of disease"],
    "explanation": "Virtual refers to anything that is created and accessed through computers or the internet, like virtual meetings or games."
  },
  "online": {
    "definition": "Connected to or available through the internet",
    "options": ["Available through the internet", "A type of exercise", "A type of media", "A physical event"],
    "explanation": "Online refers to anything that is accessible or done through the internet, such as online shopping or learning."
  },
  "content": {
    "definition": "Information or material provided on websites, media, or digital platforms",
    "options": ["Information or material provided online", "A type of hardware", "A social media post", "A form of communication"],
    "explanation": "Content includes any form of information presented online, such as articles, videos, and images."
  },
  "broadcast": {
    "definition": "To transmit information or entertainment to a wide audience, usually via radio or television",
    "options": ["Transmission of information to an audience", "A type of physical communication", "A social media post", "A type of advertisement"],
    "explanation": "Broadcasting involves sending audio or video content to be received by the public through radio, TV, or other mediums."
  },
  "digital": {
    "definition": "Relating to technology that uses binary data, such as computers or the internet",
    "options": ["Relating to technology using binary data", "A form of exercise", "A social activity", "A physical object"],
    "explanation": "Digital refers to the use of electronic technology and data, such as computers, smartphones, and online platforms."
  },
  "advertisement": {
    "definition": "A public notice or announcement promoting a product, service, or event",
    "options": ["Public promotion of a product or service", "A type of digital communication", "A form of exercise", "A medical treatment"],
    "explanation": "An advertisement is a method of marketing that promotes a product, service, or event to attract potential customers."
  },
  "communication": {
    "definition": "The act of exchanging information through speech, writing, or other mediums",
    "options": ["Exchange of information", "A type of event", "A form of relaxation", "A social activity"],
    "explanation": "Communication involves the sharing or exchange of ideas, thoughts, and information through various methods such as speaking, writing, or using technology."
  },
  "platform": {
    "definition": "A digital or physical space where activities, content, or services are offered or accessed",
    "options": ["A space for accessing services or content", "A type of physical event", "A form of exercise", "A social media post"],
    "explanation": "A platform refers to any online or physical space where people can access services, content, or tools, such as social media platforms, online stores, or tech tools."
  },
      "opinion": {
    "definition": "A personal view, belief, or judgment about something",
    "options": ["A personal belief", "A scientific fact", "A type of fact", "A physical object"],
    "explanation": "An opinion is an individual's view or judgment on a particular subject, often shaped by their experiences or preferences."
  },
  "perspective": {
    "definition": "A particular attitude toward or way of regarding something",
    "options": ["A particular way of looking at something", "A type of argument", "A physical object", "A feeling or emotion"],
    "explanation": "Perspective refers to how one perceives or interprets a situation, event, or topic, influenced by personal experiences or background."
  },
  "viewpoint": {
    "definition": "A person's opinion or way of thinking about something",
    "options": ["A person's opinion", "A type of belief", "A piece of evidence", "A scientific conclusion"],
    "explanation": "A viewpoint is an individual’s stance or outlook on a particular matter, which may differ from others based on experience and values."
  },
  "reasoning": {
    "definition": "The action of thinking about something in a logical way",
    "options": ["Logical thinking process", "A type of feeling", "A physical object", "A form of social activity"],
    "explanation": "Reasoning refers to the mental process of drawing conclusions from facts, observations, or premises."
  },
  "conclusion": {
    "definition": "A judgment or decision reached after considering the relevant facts",
    "options": ["A final decision after reasoning", "A type of question", "A form of action", "A particular opinion"],
    "explanation": "A conclusion is the final judgment or decision drawn after considering evidence or reasoning."
  },
  "idea": {
    "definition": "A thought or suggestion as to a possible course of action",
    "options": ["A thought or suggestion", "A physical object", "A type of argument", "A scientific fact"],
    "explanation": "An idea is a mental concept or thought that represents a possible solution or understanding of something."
  },
  "suggestion": {
    "definition": "An idea or plan put forward for consideration or action",
    "options": ["A proposed idea", "A final decision", "A feeling or emotion", "A type of reasoning"],
    "explanation": "A suggestion is a proposal or recommendation that someone makes to offer an alternative or solution to a problem."
  },
  "point": {
    "definition": "An idea, argument, or element of a discussion",
    "options": ["An idea in a discussion", "A physical object", "A type of reasoning", "A conclusion"],
    "explanation": "A point in a conversation or argument refers to a specific piece of information or argument being presented."
  },
  "argue": {
    "definition": "To give reasons or evidence in support of or against something",
    "options": ["To provide reasons for or against something", "To give a suggestion", "To summarize an opinion", "To explain a decision"],
    "explanation": "To argue means to present reasons or evidence in support of a particular stance or to counter opposing arguments."
  },
  "debate": {
    "definition": "A formal discussion or argument where opposing views are presented",
    "options": ["A formal discussion or argument", "A casual conversation", "A scientific fact", "A type of reasoning"],
    "explanation": "A debate is a structured discussion where individuals or groups present different viewpoints on a particular issue."
  },
  "theory": {
    "definition": "A system of ideas intended to explain something, based on principles independent of the things to be explained",
    "options": ["A system of ideas for explaining something", "A casual opinion", "A proven fact", "A final conclusion"],
    "explanation": "A theory is an explanation for a phenomenon or series of observations, often tested and supported by evidence."
  },
  "belief": {
    "definition": "A conviction or acceptance that something is true, especially without absolute proof",
    "options": ["A conviction or acceptance", "A logical conclusion", "A type of reasoning", "A proven fact"],
    "explanation": "A belief is an acceptance that something exists or is true, typically without direct evidence or proof."
  },
  "logic": {
    "definition": "A system of reasoning based on principles of validity and consistency",
    "options": ["Systematic reasoning", "A type of physical activity", "A casual opinion", "A social activity"],
    "explanation": "Logic refers to the principles used to make valid and consistent conclusions, often in argumentation or problem-solving."
  },
  "insight": {
    "definition": "An accurate and deep understanding of a complex issue or situation",
    "options": ["Deep understanding of something", "A type of argument", "A form of opinion", "A logical conclusion"],
    "explanation": "Insight is a clear and deep understanding of a situation, allowing one to grasp the underlying meaning or cause."
  },
  "contradiction": {
    "definition": "A statement or proposition that contradicts another statement or proposition",
    "options": ["A disagreement between two statements", "A logical argument", "A type of reasoning", "A social activity"],
    "explanation": "A contradiction occurs when two statements or ideas are in opposition or conflict with each other, making them incompatible."
  },
  "assumption": {
    "definition": "A belief or statement taken for granted without proof",
    "options": ["A belief taken for granted", "A proven fact", "A type of debate", "A type of argument"],
    "explanation": "An assumption is something accepted as true without concrete evidence, often serving as the foundation for further reasoning."
  },
  "influence": {
    "definition": "The ability to affect the behavior or opinions of others",
    "options": ["The ability to affect others", "A type of reasoning", "A scientific fact", "A casual discussion"],
    "explanation": "Influence refers to the power or capacity to shape or change the opinions, decisions, or actions of others."
  },
  "meaning": {
    "definition": "The significance or interpretation of something",
    "options": ["The significance of something", "A logical conclusion", "A contradiction", "An opinion"],
    "explanation": "Meaning refers to the significance or intended interpretation of a word, phrase, action, or situation."
  },
  "interpretation": {
    "definition": "The act of explaining the meaning of something, especially a complex concept or idea",
    "options": ["Explaining the meaning of something", "A logical argument", "A type of contradiction", "A casual opinion"],
    "explanation": "Interpretation involves explaining or understanding the meaning of something, often in a way that clarifies its intent or purpose."
  },
  "success": {
    "definition": "The accomplishment of an aim or purpose",
    "options": ["Achievement of a goal", "A form of failure", "A disagreement", "A type of opinion"],
    "explanation": "Success is the achievement of a desired result, goal, or purpose, often marked by satisfaction or recognition."
  },
  "failure": {
    "definition": "The lack of success in achieving a goal or completing a task",
    "options": ["Lack of success", "A form of success", "A type of motivation", "A casual opinion"],
    "explanation": "Failure refers to the inability to reach a goal or fulfill a desired objective, often leading to disappointment."
  },
  "responsibility": {
    "definition": "The state or fact of having a duty to deal with something or of having control over someone",
    "options": ["Duty or obligation", "A form of success", "A type of failure", "A casual opinion"],
    "explanation": "Responsibility refers to the duty or obligation to manage tasks, make decisions, or care for others."
  },
  "motivation": {
    "definition": "The reason or reasons one has for acting or behaving in a particular way",
    "options": ["The reason for actions or behaviors", "A type of failure", "A casual thought", "A contradiction"],
    "explanation": "Motivation is the driving force that prompts individuals to take action toward achieving a goal or completing a task."
  },
  "decision": {
    "definition": "A conclusion or resolution reached after consideration",
    "options": ["A choice or conclusion", "A casual opinion", "A contradiction", "A form of failure"],
    "explanation": "A decision is the result of considering options and choosing a course of action based on judgment."
  },
  "challenge": {
    "definition": "A task or situation that tests someone's abilities",
    "options": ["A difficult task", "A simple task", "A failure", "A contradiction"],
    "explanation": "A challenge refers to something difficult or demanding that requires effort and skill to overcome."
  },
      "responsibility": {
    "definition": "The state or fact of having a duty to deal with something or of having control over someone",
    "options": ["Duty", "Negligence", "Carelessness", "Inaction"],
    "explanation": "Responsibility refers to the obligation or duty to perform certain tasks or oversee something, often within a job or role."
  },
  "department": {
    "definition": "A distinct part of an organization or business, typically responsible for a specific function or area",
    "options": ["Section", "Meeting room", "Person", "Computer system"],
    "explanation": "A department is an area of an organization where specific tasks or functions are handled, such as human resources or finance."
  },
  "interview": {
    "definition": "A formal meeting in which one person asks another questions to gather information or assess qualifications",
    "options": ["Formal conversation", "Casual chat", "Social gathering", "Written test"],
    "explanation": "An interview is a structured conversation where questions are asked to evaluate a person's skills, qualifications, or fit for a role."
  },
  "contract": {
    "definition": "A written or spoken agreement, especially one concerning employment or business",
    "options": ["Agreement", "Casual promise", "Verbal commitment", "Implied rule"],
    "explanation": "A contract is a legally binding agreement between two or more parties, outlining rights, obligations, and expectations."
  },
  "salary": {
    "definition": "A fixed regular payment, typically paid monthly or annually, made by an employer to an employee",
    "options": ["Payment", "Benefit", "Bonus", "Allowance"],
    "explanation": "Salary refers to the regular compensation an employee receives for their work, usually expressed on an annual or monthly basis."
  },
  "promotion": {
    "definition": "The action of raising someone to a higher position or rank within an organization",
    "options": ["Advancement", "Demotion", "Transfer", "Layoff"],
    "explanation": "A promotion is the process of being moved to a higher position or rank, often accompanied by increased responsibilities and pay."
  },
  "meeting": {
    "definition": "A gathering of people, typically for work or discussion, to address specific issues or make decisions",
    "options": ["Gathering", "Training", "Ceremony", "Leisure event"],
    "explanation": "A meeting is a scheduled time for individuals to come together, often for business purposes, to discuss and make decisions on various matters."
  },
  "presentation": {
    "definition": "A formal display or demonstration of information to an audience, often with the aim of informing or persuading",
    "options": ["Display", "Speech", "Discussion", "Casual chat"],
    "explanation": "A presentation is a structured delivery of information, often visualized with slides, aimed at educating or persuading an audience."
  },
  "deadline": {
    "definition": "The latest time or date by which something should be completed or submitted",
    "options": ["Due date", "Starting point", "Ongoing task", "Optional time"],
    "explanation": "A deadline is the final date by which a task, project, or assignment must be finished or delivered."
  },
  "assignment": {
    "definition": "A task or duty given to someone, often as part of their job or studies",
    "options": ["Task", "Meeting", "Break", "Report"],
    "explanation": "An assignment is a specific task or responsibility that is given to someone, often with a set deadline for completion."
  },
  "colleague": {
    "definition": "A person who works with someone in the same organization or profession",
    "options": ["Co-worker", "Manager", "Client", "Customer"],
    "explanation": "A colleague is a person who works alongside you in a professional setting, typically in the same department or field."
  },
  "manager": {
    "definition": "A person responsible for overseeing and guiding the work of others in an organization",
    "options": ["Supervisor", "Employee", "Intern", "Customer"],
    "explanation": "A manager is responsible for coordinating and overseeing the work of employees or a department within an organization."
  },
  "employee": {
    "definition": "A person employed to work for an organization in exchange for compensation",
    "options": ["Worker", "Employer", "Client", "Freelancer"],
    "explanation": "An employee is an individual who performs work for an organization in return for salary, benefits, or other compensation."
  },
  "internship": {
    "definition": "A temporary position, often for students or recent graduates, where a person works for experience rather than monetary compensation",
    "options": ["Training program", "Full-time job", "Freelance work", "Part-time work"],
    "explanation": "An internship is a learning experience where an individual gains practical experience in a field of interest, often with minimal or no pay."
  },
  "training": {
    "definition": "The process of learning and developing skills, often for a specific job or task",
    "options": ["Learning", "Working", "Resting", "Consulting"],
    "explanation": "Training involves educating individuals in the skills, knowledge, and abilities needed to perform a specific job or task effectively."
  },
      "environment": {
    "definition": "The natural world, including the land, air, water, and all living organisms",
    "options": ["Natural world", "Urban space", "Technology", "Economic system"],
    "explanation": "The environment refers to the surroundings in which all living organisms exist, including natural resources, ecosystems, and weather patterns."
  },
  "pollution": {
    "definition": "The presence of harmful substances or contaminants in the environment, causing harm to living organisms",
    "options": ["Contamination", "Renewable energy", "Sustainability", "Conservation"],
    "explanation": "Pollution is the release of harmful substances into the air, water, or land, often as a result of human activity, which can harm ecosystems and health."
  },
  "poverty": {
    "definition": "The state of being extremely poor, lacking the basic necessities of life such as food, shelter, and access to resources",
    "options": ["Impoverishment", "Wealth", "Security", "Affluence"],
    "explanation": "Poverty refers to the condition where individuals or groups do not have enough money or resources to meet their basic needs for survival."
  },
  "immigration": {
    "definition": "The movement of people from one country to another with the intention of settling permanently or temporarily",
    "options": ["Migration", "Tourism", "Exile", "Refuge"],
    "explanation": "Immigration is the process of people moving from their home country to another country, often for better opportunities or to escape hardships."
  },
  "volunteer": {
    "definition": "A person who freely offers to do something, typically without payment, for a cause or organization",
    "options": ["Helper", "Employee", "Client", "Contractor"],
    "explanation": "A volunteer is someone who offers their time and skills without expecting payment, often to help a cause or assist an organization."
  },
  "charity": {
    "definition": "An organization or activity that aims to provide help and support to people in need",
    "options": ["Non-profit organization", "Business", "Government", "School"],
    "explanation": "Charity is an organization or initiative focused on helping people, particularly those who are disadvantaged or in need of aid."
  },
  "community": {
    "definition": "A group of people living in the same area or sharing common interests or values",
    "options": ["Group", "Individual", "Business", "Government"],
    "explanation": "A community is a group of people who live in close proximity or share common interests, and often work together for mutual benefit."
  },
  "campaign": {
    "definition": "An organized effort to achieve a particular goal, often related to social, political, or marketing objectives",
    "options": ["Movement", "Game", "Contest", "Vacation"],
    "explanation": "A campaign is a coordinated series of actions or events aimed at promoting a specific cause or achieving a goal, such as a political election or a social cause."
  },
  "rights": {
    "definition": "Legal or moral entitlements to have or do something, often guaranteed by law or social norms",
    "options": ["Entitlements", "Responsibilities", "Privileges", "Restrictions"],
    "explanation": "Rights are fundamental freedoms and protections that individuals are entitled to, often protected by laws or constitutions."
  },
  "law": {
    "definition": "A system of rules created and enforced by a government or authority to regulate behavior",
    "options": ["Regulations", "Customs", "Morality", "Suggestion"],
    "explanation": "Law refers to the set of rules that govern society, ensuring order and justice by regulating behavior and establishing consequences for violations."
  },
  "government": {
    "definition": "The governing body or system of a country, state, or community, responsible for making and enforcing laws and policies",
    "options": ["Authority", "Family", "Business", "Social group"],
    "explanation": "A government is an organization that manages the affairs of a state or nation, creating laws, policies, and providing services for citizens."
  },
  "politics": {
    "definition": "The activities, actions, and policies used to gain and hold power in a government or organization",
    "options": ["Governance", "Entertainment", "Sports", "Philosophy"],
    "explanation": "Politics refers to the activities and actions surrounding the distribution and exercise of power, often focused on elections, policies, and decision-making processes."
  },
  "social": {
    "definition": "Relating to society, community, and human interaction",
    "options": ["Community-based", "Private", "Technical", "Personal"],
    "explanation": "Social refers to activities, behaviors, or aspects related to the interaction between individuals or groups within a society."
  },
  "urban": {
    "definition": "Related to or characteristic of a city or town, often with a high population density and infrastructure",
    "options": ["City-related", "Rural", "Industrial", "Suburban"],
    "explanation": "Urban refers to areas that are part of a city or town, typically featuring dense populations, advanced infrastructure, and more developed services."
  },
  "rural": {
    "definition": "Relating to the countryside, typically characterized by low population density and natural surroundings",
    "options": ["Countryside", "Urban", "Industrial", "Suburban"],
    "explanation": "Rural areas are regions located outside of cities and towns, often characterized by farmland, natural landscapes, and low population density."
  },
      "ecosystem": {
    "definition": "A biological community of interacting organisms and their physical environment",
    "options": ["Biological system", "Individual organism", "Weather pattern", "Technology system"],
    "explanation": "An ecosystem is a network of living organisms (plants, animals, microbes) interacting with their physical surroundings (soil, water, air) in a particular area."
  },
  "species": {
    "definition": "A group of living organisms that can interbreed and produce fertile offspring",
    "options": ["Biological group", "Single organism", "Ecosystem", "Environment"],
    "explanation": "Species refer to a group of organisms that share common characteristics and can mate to produce offspring that are capable of reproduction."
  },
  "climate": {
    "definition": "The long-term patterns of temperature, humidity, wind, and precipitation in a particular area",
    "options": ["Weather", "Short-term conditions", "Seasonal variation", "Environmental impact"],
    "explanation": "Climate describes the average weather conditions in a region over a long period, including temperature, humidity, and rainfall patterns."
  },
  "biodiversity": {
    "definition": "The variety of life in the world or in a particular habitat or ecosystem",
    "options": ["Variety of life", "Plant growth", "Climate change", "Human population"],
    "explanation": "Biodiversity refers to the variety of species, ecosystems, and genetic variations that exist in the natural world, crucial for ecological balance and resilience."
  },
  "conservation": {
    "definition": "The protection, preservation, and management of natural resources and environments",
    "options": ["Preservation", "Pollution", "Resource exploitation", "Waste management"],
    "explanation": "Conservation is the practice of protecting and preserving natural environments, wildlife, and natural resources to ensure their survival and prevent degradation."
  },
  "recycling": {
    "definition": "The process of converting waste materials into reusable materials",
    "options": ["Reusing materials", "Creating waste", "Discarding objects", "Resource depletion"],
    "explanation": "Recycling involves processing used materials (such as plastic, glass, or metal) to create new products, helping to reduce waste and conserve resources."
  },
  "pollution": {
    "definition": "The presence of harmful substances in the environment, often as a result of human activity",
    "options": ["Contamination", "Conservation", "Restoration", "Sustainability"],
    "explanation": "Pollution occurs when harmful chemicals or materials are introduced into the environment, often harming ecosystems, wildlife, and human health."
  },
  "waste": {
    "definition": "Unwanted or unusable materials or substances discarded after use",
    "options": ["Refuse", "Resource", "Energy", "Food"],
    "explanation": "Waste refers to materials that are discarded because they are no longer needed or usable, and may contribute to pollution if not managed properly."
  },
  "sustainability": {
    "definition": "The ability to maintain or support processes over the long term without depleting resources or harming the environment",
    "options": ["Eco-friendly", "Overexploitation", "Resource depletion", "Wastefulness"],
    "explanation": "Sustainability involves using resources in a way that meets present needs without compromising the ability of future generations to meet their own needs."
  },
  "greenhouse": {
    "definition": "A structure made of glass or transparent material used to grow plants by trapping sunlight and heat",
    "options": ["Plant nursery", "Building for shelter", "Energy-efficient home", "Solar panel"],
    "explanation": "A greenhouse is a building that allows sunlight to enter and trap heat, creating an environment ideal for growing plants even in colder weather."
  },
  "energy": {
    "definition": "The capacity to do work or cause change, typically in the form of electricity, heat, or movement",
    "options": ["Power", "Inactivity", "Waste", "Dissipation"],
    "explanation": "Energy is the ability to perform work, whether through heat, electricity, or mechanical movement. It can be produced from various sources like fossil fuels or renewables."
  },
  "renewable": {
    "definition": "Describing resources that can be replenished naturally over time, such as wind, solar, and hydropower",
    "options": ["Sustainable", "Finite", "Non-recyclable", "Limited"],
    "explanation": "Renewable energy sources are those that are replenished naturally and can be used indefinitely without depleting the resource, such as solar and wind energy."
  },
  "resource": {
    "definition": "A supply of materials or assets that can be used to generate energy, create goods, or provide services",
    "options": ["Material", "Waste", "Pollution", "Garbage"],
    "explanation": "Resources are assets such as water, energy, minerals, or labor that are used in various industries to create products and support human activities."
  },
  "forest": {
    "definition": "A large area covered chiefly with trees and undergrowth",
    "options": ["Woodland", "Desert", "Farm", "Ocean"],
    "explanation": "A forest is a vast area of land dominated by trees, which plays a crucial role in maintaining biodiversity, absorbing carbon dioxide, and supporting wildlife."
  },
  "ocean": {
    "definition": "A large body of saltwater that covers most of Earth's surface",
    "options": ["Sea", "Lake", "River", "Cloud"],
    "explanation": "The ocean is the vast expanse of water that covers approximately 71% of Earth's surface and plays a key role in regulating climate, supporting marine life, and providing resources."
  },
  "wildlife": {
    "definition": "Animals and other living organisms that are not domesticated and live in their natural habitats",
    "options": ["Animals", "Domestic pets", "Plants", "Fungi"],
    "explanation": "Wildlife includes all undomesticated animals, plants, and microorganisms that live in the wild, such as forests, oceans, and grasslands."
  },
  "endangered": {
    "definition": "A species at risk of extinction due to loss of habitat, environmental changes, or overexploitation",
    "options": ["At risk of extinction", "Common", "Thriving", "Non-native"],
    "explanation": "Endangered species are those whose numbers are so low that they are at risk of disappearing completely from the Earth."
  },
  "deforestation": {
    "definition": "The clearing of trees and forests to make way for other land uses such as farming or urban development",
    "options": ["Forest removal", "Reforestation", "Afforestation", "Woodland conservation"],
    "explanation": "Deforestation is the process of cutting down and clearing forests, often leading to habitat loss, increased carbon emissions, and disruption of local ecosystems."
  },
  "habitat": {
    "definition": "The natural environment where an organism lives, grows, and thrives",
    "options": ["Living area", "Zoo", "Building", "Factory"],
    "explanation": "A habitat is the place where a species lives and interacts with its environment, providing the resources necessary for its survival."
  },
  "global warming": {
    "definition": "The gradual increase in Earth's average surface temperature due to human activity, such as burning fossil fuels",
    "options": ["Climate change", "Ice age", "Seasonal variation", "Sunlight exposure"],
    "explanation": "Global warming refers to the rise in Earth's temperature caused by the accumulation of greenhouse gases in the atmosphere, which leads to climate change and environmental shifts."
  },
      "schedule": {
    "definition": "A plan for carrying out a process or procedure, detailing the time and order of events",
    "options": ["Plan for events", "Random events", "Flexible time", "Spontaneous activity"],
    "explanation": "A schedule is a structured plan that organizes tasks, events, or appointments at specific times, helping to manage time effectively."
  },
  "responsibility": {
    "definition": "The state or fact of having a duty to deal with something or of having control over someone",
    "options": ["Duty", "Carelessness", "Inactivity", "Neglect"],
    "explanation": "Responsibility refers to being accountable for tasks or decisions, whether in personal, professional, or social contexts."
  },
  "task": {
    "definition": "A piece of work to be done or undertaken",
    "options": ["Work assignment", "Rest", "Social gathering", "Random activity"],
    "explanation": "A task is a specific duty or job that needs to be completed, often as part of a larger project or responsibility."
  },
  "appointment": {
    "definition": "An arrangement to meet someone at a particular time and place",
    "options": ["Meeting", "Casual visit", "Unscheduled encounter", "Chance meeting"],
    "explanation": "An appointment is a pre-arranged meeting or engagement, often involving a professional or formal context."
  },
  "event": {
    "definition": "A planned public or social occasion",
    "options": ["Occasion", "Random happening", "Unpredictable incident", "Private gathering"],
    "explanation": "An event is a planned or organized activity or gathering, such as a conference, party, or wedding."
  },
  "occasion": {
    "definition": "A particular time or instance of an event or happening",
    "options": ["Moment", "Everyday activity", "Routine", "Casual day"],
    "explanation": "An occasion refers to a specific event or time, often one with significance, such as a birthday or holiday."
  },
  "routine": {
    "definition": "A regular and predictable sequence of activities or behaviors",
    "options": ["Habit", "One-time event", "New activity", "Unpredictable change"],
    "explanation": "A routine is a set of activities or tasks that are performed regularly, typically as part of daily or weekly habits."
  },
  "habit": {
    "definition": "A regular behavior or practice, especially one that is hard to give up",
    "options": ["Customary behavior", "Unplanned action", "New experience", "Unusual practice"],
    "explanation": "A habit is a behavior that becomes automatic due to repetition, such as brushing teeth every morning."
  },
  "delay": {
    "definition": "The action or process of postponing something or causing it to happen later than expected",
    "options": ["Postpone", "Advance", "Immediate action", "Hurry"],
    "explanation": "A delay refers to making something happen later than originally planned or expected, often due to unforeseen circumstances."
  },
  "punctual": {
    "definition": "Being on time for appointments or events",
    "options": ["On time", "Late", "Early", "Delayed"],
    "explanation": "Being punctual means arriving at the scheduled time, neither early nor late, which reflects responsibility and reliability."
  },
  "wait": {
    "definition": "To stay in one place or remain inactive until something happens or someone arrives",
    "options": ["Stay in place", "Go immediately", "Leave early", "Avoid action"],
    "explanation": "To wait means to remain in place or inactive while anticipating an event or arrival of something or someone."
  },
  "rush": {
    "definition": "To move or do something with haste or urgency",
    "options": ["Hurry", "Take it slow", "Relax", "Postpone"],
    "explanation": "To rush means to hurry or speed up an action, often because of time constraints or urgency."
  },
  "organize": {
    "definition": "To arrange or structure something in a systematic way",
    "options": ["Arrange", "Disorder", "Mess up", "Scatter"],
    "explanation": "To organize is to arrange items, activities, or information in an orderly manner, ensuring everything has its proper place."
  },
  "plan": {
    "definition": "A detailed proposal for achieving something, often outlining steps and timeframes",
    "options": ["Strategy", "Improvise", "Forget", "Random action"],
    "explanation": "A plan is a blueprint or scheme designed to achieve a specific goal, often involving careful thought and preparation."
  },
  "manage": {
    "definition": "To oversee or control something, typically a project, team, or task",
    "options": ["Oversee", "Neglect", "Avoid", "Forget"],
    "explanation": "To manage is to take charge of resources, people, or tasks, ensuring they are completed effectively and efficiently."
  },
  "arrange": {
    "definition": "To put things into a proper or desired order or position",
    "options": ["Organize", "Scatter", "Ignore", "Confuse"],
    "explanation": "To arrange means to systematically place items or organize tasks to achieve an intended result or order."
  },
  "prepare": {
    "definition": "To make something ready for use or action",
    "options": ["Get ready", "Forget", "Postpone", "Delay"],
    "explanation": "Preparing involves getting things ready in advance for a particular task or event, such as packing for a trip or setting up for a meeting."
  },
  "pack": {
    "definition": "To fill a container or bag with items, especially for travel",
    "options": ["Fill", "Empty", "Discard", "Throw away"],
    "explanation": "Packing involves placing items into a container or bag, typically in preparation for travel or moving."
  },
  "clean": {
    "definition": "To remove dirt, dust, or impurities from something",
    "options": ["Remove dirt", "Make dirty", "Ignore", "Pollute"],
    "explanation": "Cleaning involves removing dirt or unwanted substances to make an area, object, or space neat and hygienic."
  },
  "tidy": {
    "definition": "Arranged neatly and in good order",
    "options": ["Neat", "Messy", "Disordered", "Chaotic"],
    "explanation": "To tidy is to arrange things neatly and in an organized manner, often referring to spaces or rooms."
  },
      "opportunity": {
    "definition": "A set of circumstances that makes it possible to do something",
    "options": ["Chance", "Obstacle", "Barrier", "Risk"],
    "explanation": "An opportunity refers to a favorable situation or set of circumstances that allows for growth or success."
  },
  "solution": {
    "definition": "A means of solving a problem or dealing with a difficult situation",
    "options": ["Answer", "Problem", "Question", "Obstacle"],
    "explanation": "A solution is an answer or method for resolving an issue or challenge that has been identified."
  },
  "consequence": {
    "definition": "A result or effect of an action or decision",
    "options": ["Outcome", "Cause", "Prevention", "Suggestion"],
    "explanation": "A consequence refers to the result that follows an action, decision, or event, often used to refer to negative results."
  },
  "reaction": {
    "definition": "An action or response to something that has happened or been said",
    "options": ["Response", "Action", "Inaction", "Neglect"],
    "explanation": "A reaction is an individual's immediate response to a stimulus, event, or change."
  },
  "effect": {
    "definition": "A change that has occurred due to a particular action or event",
    "options": ["Result", "Cause", "Question", "Idea"],
    "explanation": "An effect refers to the result or outcome produced by an event, action, or situation."
  },
  "cause": {
    "definition": "A person or thing that gives rise to an action, phenomenon, or condition",
    "options": ["Reason", "Effect", "Result", "Consequence"],
    "explanation": "A cause is the reason or factor that leads to an event or situation happening."
  },
  "growth": {
    "definition": "The process of increasing in size, number, or importance",
    "options": ["Expansion", "Decline", "Stagnation", "Contraction"],
    "explanation": "Growth refers to the process of development or improvement, whether in size, quality, or significance."
  },
  "change": {
    "definition": "The act or instance of making or becoming different",
    "options": ["Alteration", "Stability", "Sameness", "Constancy"],
    "explanation": "Change involves the transformation or modification of something from one state to another, often in response to circumstances."
  },
  "development": {
    "definition": "The process of improving, expanding, or evolving",
    "options": ["Progress", "Stagnation", "Recession", "Decline"],
    "explanation": "Development refers to the growth or progress of something, often over time, toward improvement or completion."
  },
  "future": {
    "definition": "The time that comes after the present, often anticipated or planned for",
    "options": ["Time ahead", "Past", "Present", "History"],
    "explanation": "The future refers to the period that is yet to come, involving potential opportunities, challenges, and changes."
  },
  "progress": {
    "definition": "Forward or onward movement towards a goal or development",
    "options": ["Advancement", "Stagnation", "Regression", "Delay"],
    "explanation": "Progress is the movement or development toward a better or more complete state or goal."
  },
  "innovation": {
    "definition": "The act of creating new ideas, products, or methods",
    "options": ["Creation", "Tradition", "Stagnation", "Repetition"],
    "explanation": "Innovation refers to the introduction of new ideas, methods, or products that improve or change existing practices."
  },
  "potential": {
    "definition": "The inherent ability or capacity for growth or development",
    "options": ["Possibility", "Stagnation", "Limit", "Failure"],
    "explanation": "Potential refers to the possibility or latent ability to achieve success, often with effort and development."
  },
  "achievement": {
    "definition": "The accomplishment of a goal or task through effort or skill",
    "options": ["Success", "Failure", "Stagnation", "Decline"],
    "explanation": "Achievement is the successful completion or attainment of a goal, often resulting from hard work and determination."
  },  
        // Add more intermediate words...
    },
    advanced: {
"aberration": {
    definition: "A deviation from what is normal, usual, or expected",
    options: ["A deviation from the norm", "A regular occurrence", "A common practice", "A predictable outcome"],
    explanation: "An aberration is something that differs greatly from what is normal or expected, often in a surprising or unusual way."
},
"belligerent": {
    definition: "Hostile and aggressive",
    options: ["Hostile and aggressive", "Friendly and peaceful", "Calm and relaxed", "Supportive and cooperative"],
    explanation: "A belligerent person or group is eager to fight or argue, often showing aggression and a lack of cooperation."
},
"cogent": {
    definition: "Clear, logical, and convincing",
    options: ["Clear and convincing", "Unclear and confusing", "Unnecessary", "Lacking relevance"],
    explanation: "A cogent argument is one that is persuasive because it is well-reasoned and easy to understand."
},
"disparate": {
    definition: "Fundamentally different or distinct in kind",
    options: ["Fundamentally different", "Very similar", "Related", "Uniform"],
    explanation: "Disparate things or ideas are so different that they cannot easily be compared or combined."
},
"enervate": {
    definition: "To weaken or drain of energy",
    options: ["To weaken", "To strengthen", "To excite", "To improve"],
    explanation: "To enervate someone or something is to reduce their strength or energy, often making them feel tired or exhausted."
},
"facetious": {
    definition: "Treating serious issues with deliberately inappropriate humor",
    options: ["Humorous inappropriately", "Extremely serious", "Very respectful", "Sincere"],
    explanation: "A facetious comment or attitude is one that treats serious topics in a playful or disrespectful way."
},
"gregarious": {
    definition: "Fond of company; sociable",
    options: ["Sociable", "Introverted", "Shy", "Hostile"],
    explanation: "A gregarious person enjoys being around others and often seeks out social interaction."
},
"harangue": {
    definition: "A lengthy and aggressive speech",
    options: ["An aggressive speech", "A short talk", "A calm discussion", "A friendly chat"],
    explanation: "A harangue is a forceful, often angry speech that criticizes or lectures others in a long and loud manner."
},
"implacable": {
    definition: "Unable to be calmed down or appeased",
    options: ["Unyielding", "Easygoing", "Calm", "Friendly"],
    explanation: "An implacable person or force cannot be soothed or made less angry, often leading to relentless opposition."
},
"juxtapose": {
    definition: "To place two or more things side by side to compare or contrast them",
    options: ["To compare side by side", "To separate", "To destroy", "To ignore"],
    explanation: "When you juxtapose two things, you place them together to highlight their differences or similarities."
},
"laconic": {
    definition: "Using few words, concise in speech",
    options: ["Concise in speech", "Verbose", "Talkative", "Detailed"],
    explanation: "A laconic person or statement uses minimal words, often to convey meaning in a brief and direct way."
},
"nefarious": {
    definition: "Wicked or criminal",
    options: ["Wicked", "Good-natured", "Honest", "Harmless"],
    explanation: "A nefarious person or act is evil or morally wrong, often involving illegal or harmful behavior."
},
"obfuscate": {
    definition: "To deliberately make something unclear or difficult to understand",
    options: ["To make unclear", "To simplify", "To clarify", "To explain"],
    explanation: "To obfuscate is to intentionally make something confusing or obscure, often to mislead or confuse others."
},
"panacea": {
    definition: "A universal solution or remedy for all problems",
    options: ["A universal cure", "A temporary fix", "A specific solution", "A minor improvement"],
    explanation: "A panacea is a solution that is believed to solve all problems, often seen as unrealistic or idealistic."
},
"quixotic": {
    definition: "Extremely idealistic, unrealistic, and impractical",
    options: ["Unrealistically idealistic", "Realistic and practical", "Pragmatic", "Pessimistic"],
    explanation: "A quixotic plan or person has unrealistic or impractical goals that are often not achievable."
},
"recalcitrant": {
    definition: "Resistant to authority or control",
    options: ["Disobedient", "Obedient", "Cooperative", "Respectful"],
    explanation: "A recalcitrant person is stubborn and unwilling to follow rules or comply with authority."
},
"sagacious": {
    definition: "Having or showing good judgment and wisdom",
    options: ["Wise and perceptive", "Naive", "Unwise", "Ignorant"],
    explanation: "A sagacious person is one who possesses great wisdom and makes well-considered decisions."
},
"taciturn": {
    definition: "Habitually silent or uncommunicative",
    options: ["Reserved and silent", "Talkative", "Loud", "Friendly"],
    explanation: "A taciturn person is one who speaks very little, often preferring to remain quiet in most situations."
},
"umbrage": {
    definition: "Offense or annoyance",
    options: ["Offense or resentment", "Delight", "Happiness", "Indifference"],
    explanation: "To take umbrage means to be offended or annoyed by something, often in a sensitive or overreactive manner."
},
"veracity": {
    definition: "Conformity to facts; accuracy or truthfulness",
    options: ["Truthfulness", "Lying", "Dishonesty", "Confusion"],
    explanation: "Veracity refers to the quality of being truthful or accurate, often related to statements or information."
},
"wanton": {
    definition: "Deliberate and unprovoked, often causing harm",
    options: ["Deliberate and harmful", "Random and harmless", "Innocent", "Kind"],
    explanation: "A wanton act is one that is done on purpose, without regard for the consequences or harm it might cause."
},
"xenophobia": {
    definition: "Fear or hatred of foreigners or strangers",
    options: ["Fear of foreigners", "Love for all cultures", "Interest in other countries", "Tolerance"],
    explanation: "Xenophobia is an irrational fear or dislike of people from other countries, often leading to prejudice."
},
"yoke": {
    definition: "A device used to join two animals together for work; something that binds or restrains",
    options: ["A device that binds", "A type of food", "A musical instrument", "A kind of clothing"],
    explanation: "A yoke is a wooden frame used to pair animals, usually oxen, for plowing. It can also refer to something that restricts freedom."
},
"zephyr": {
    definition: "A gentle, mild breeze, often associated with the west wind",
    options: ["A gentle breeze", "A strong storm", "A heavy gust", "A dry heat"],
    explanation: "A zephyr is a soft, light breeze, often symbolizing calm and pleasant weather."
},
"acquiesce": {
    definition: "To accept or agree to something without protest",
    options: ["To agree without protest", "To argue", "To oppose", "To ignore"],
    explanation: "To acquiesce is to accept or agree to something passively, often without making objections or expressing any resistance."
},
"belie": {
    definition: "To misrepresent or give a false impression of something",
    options: ["To give a false impression", "To confirm", "To exaggerate", "To clarify"],
    explanation: "To belie something is to present a misleading appearance or to contradict what is actually true."
},
"capitulate": {
    definition: "To surrender or give in after resistance",
    options: ["To surrender", "To fight back", "To ignore", "To retreat"],
    explanation: "To capitulate is to give in or surrender, often after a period of resistance or struggle."
},
"deleterious": {
    definition: "Harmful or damaging",
    options: ["Harmful", "Helpful", "Safe", "Neutral"],
    explanation: "Something deleterious causes damage or harm, often in a subtle or gradual way."
},
"effervescent": {
    definition: "Bubbling, fizzy; enthusiastic and lively",
    options: ["Bubbling or lively", "Flat", "Dull", "Boring"],
    explanation: "Effervescent refers to something that is bubbly and lively, often used to describe sparkling drinks or enthusiastic personalities."
},
"flabbergasted": {
    definition: "Extremely surprised or shocked",
    options: ["Very surprised", "Calm", "Unmoved", "Uninterested"],
    explanation: "To be flabbergasted is to be completely astonished or amazed, often in a way that leaves you speechless."
},
"garner": {
    definition: "To gather or collect something, especially information or support",
    options: ["To gather", "To scatter", "To lose", "To waste"],
    explanation: "To garner something means to collect it, often with effort or intention, such as gathering support or knowledge."
},
"hegemony": {
    definition: "Leadership or dominance, especially by one country or social group over others",
    options: ["Dominance", "Equality", "Weakness", "Disorganization"],
    explanation: "Hegemony refers to the dominance or leadership one entity has over others, especially in political, cultural, or economic matters."
},
"iconoclast": {
    definition: "A person who attacks or criticizes established beliefs or institutions",
    options: ["A critic of traditions", "A supporter of tradition", "A follower", "A passive observer"],
    explanation: "An iconoclast challenges or overturns traditional beliefs, customs, or institutions, often in a disruptive manner."
},
"jaded": {
    definition: "Tired, bored, or lacking enthusiasm after too much of something",
    options: ["Bored and weary", "Eager", "Excited", "Fresh"],
    explanation: "A jaded person has lost enthusiasm or excitement, often due to overexposure or excessive experience."
},
"kowtow": {
    definition: "To act in an excessively subservient manner",
    options: ["To be excessively obedient", "To rebel", "To refuse", "To argue"],
    explanation: "To kowtow is to show excessive deference or submission, often by bowing down or being overly respectful."
},
"lugubrious": {
    definition: "Looking or sounding sad and dismal",
    options: ["Sad and mournful", "Cheerful", "Lively", "Excited"],
    explanation: "Lugubrious describes a person or situation that appears sorrowful, gloomy, or excessively mournful."
     },
      "articulate": {
    "definition": "Able to express thoughts and ideas clearly and effectively",
    "options": ["Able to express ideas clearly", "Unable to speak", "A type of emotion", "A form of reasoning"],
    "explanation": "Being articulate means being able to speak or write clearly and coherently, conveying your thoughts in an understandable way."
  },
  "eloquent": {
    "definition": "Fluent or persuasive in speaking or writing",
    "options": ["Fluent and persuasive in speech", "A type of reasoning", "A casual expression", "A way of listening"],
    "explanation": "Eloquent speech is characterized by its ability to persuade or inspire, using clear and expressive language."
  },
  "nuance": {
    "definition": "A subtle difference or distinction in meaning, expression, or feeling",
    "options": ["A subtle difference", "A large difference", "A clear statement", "A contradiction"],
    "explanation": "Nuance refers to the small, subtle distinctions or variations that can change the understanding of a situation, idea, or argument."
  },
  "rhetoric": {
    "definition": "The art of effective or persuasive speaking or writing",
    "options": ["The art of persuasion", "A scientific theory", "A type of tone", "A casual conversation"],
    "explanation": "Rhetoric involves the use of language to persuade or influence others, often involving strategies like ethos, pathos, and logos."
  },
  "coherence": {
    "definition": "The quality of being logical and consistent",
    "options": ["Logical and consistent quality", "A type of tone", "A form of expression", "A contradiction"],
    "explanation": "Coherence in speech or writing means that the ideas are logically organized and flow smoothly, making the content easy to follow."
  },
  "ambiguity": {
    "definition": "The quality of being open to more than one interpretation",
    "options": ["Open to multiple interpretations", "Clear and straightforward", "A form of persuasion", "A contradiction"],
    "explanation": "Ambiguity refers to situations where something can be understood in different ways, often leading to confusion or debate."
  },
  "implication": {
    "definition": "A possible effect or result that is suggested, but not explicitly stated",
    "options": ["A suggested result", "A direct statement", "A clear fact", "A contradiction"],
    "explanation": "An implication is something that is hinted at or suggested, but not directly expressed, often leaving room for interpretation."
  },
  "contradiction": {
    "definition": "A statement that is in opposition to another statement",
    "options": ["An opposing statement", "A form of persuasion", "A logical conclusion", "A casual opinion"],
    "explanation": "A contradiction occurs when two statements or ideas conflict with each other, making both impossible to be true at the same time."
  },
  "convey": {
    "definition": "To communicate or express something",
    "options": ["To communicate or express", "To keep secret", "To misunderstand", "To confuse"],
    "explanation": "To convey something means to express or communicate it, whether through speech, writing, or actions."
  },
  "perspective": {
    "definition": "A particular attitude toward or way of viewing something",
    "options": ["A way of viewing something", "A logical argument", "A contradiction", "A conclusion"],
    "explanation": "Perspective refers to how one sees or interprets a situation, influenced by personal experiences and beliefs."
  },
  "expression": {
    "definition": "The process of making one's thoughts, feelings, or ideas known",
    "options": ["Making thoughts known", "A form of silence", "A logical conclusion", "A contradiction"],
    "explanation": "Expression involves conveying one's thoughts, emotions, or ideas through words, actions, or other forms of communication."
  },
  "tone": {
    "definition": "The general character or attitude of a piece of writing, speech, or conversation",
    "options": ["General attitude or character", "A form of persuasion", "A clear conclusion", "A casual phrase"],
    "explanation": "Tone refers to the emotional quality or mood of a piece of communication, which can be serious, humorous, formal, or informal."
  },
  "register": {
    "definition": "The level of formality or informality in language, depending on context",
    "options": ["The level of formality", "A casual opinion", "A contradiction", "A final statement"],
    "explanation": "Register refers to the way language is used in different social contexts, with variations in formality, such as formal or informal speech."
  },
  "discourse": {
    "definition": "Written or spoken communication or debate",
    "options": ["Communication or debate", "A type of conclusion", "A contradiction", "A specific opinion"],
    "explanation": "Discourse refers to any form of communication, whether written or spoken, particularly in a formal or academic setting."
  },
  "dialect": {
    "definition": "A particular form of a language specific to a region or group",
    "options": ["A regional form of language", "A type of tone", "A logical argument", "A type of conclusion"],
    "explanation": "A dialect is a variation of a language spoken by a particular group, often shaped by geographic, social, or cultural factors."
  },
  "connotation": {
    "definition": "An idea or feeling that a word invokes in addition to its literal meaning",
    "options": ["Additional meaning of a word", "Literal meaning of a word", "A contradiction", "A form of expression"],
    "explanation": "Connotation refers to the emotional or cultural associations attached to a word, beyond its literal definition."
  },
  "fluency": {
    "definition": "The ability to speak or write smoothly, with ease and correctness",
    "options": ["Smoothness and ease in communication", "A type of contradiction", "A casual opinion", "A final conclusion"],
    "explanation": "Fluency refers to the ease with which someone communicates, without frequent pauses or mistakes, especially in a foreign language."
  },
  "spontaneity": {
    "definition": "The quality of being impulsive or unplanned",
    "options": ["Impulsive or unplanned action", "A contradiction", "A type of formality", "A type of reasoning"],
    "explanation": "Spontaneity refers to actions or decisions made without premeditation, often driven by natural impulse or a sudden inspiration."
  },
  "persuasion": {
    "definition": "The act of convincing someone to believe or do something",
    "options": ["The act of convincing", "A form of reasoning", "A contradiction", "A casual discussion"],
    "explanation": "Persuasion involves using arguments, appeals, or emotional appeals to influence someone’s beliefs or actions."
  },
  "emphasis": {
    "definition": "Special importance, value, or prominence given to something",
    "options": ["Special importance or focus", "A casual opinion", "A contradiction", "A type of persuasion"],
    "explanation": "Emphasis is the act of giving particular attention or importance to something, often by stressing it in communication."
  },
  "hypothesis": {
    "definition": "A proposed explanation for a phenomenon based on limited evidence",
    "options": ["A proposed explanation", "A proven fact", "A type of contradiction", "A clear conclusion"],
    "explanation": "A hypothesis is a tentative explanation that requires further testing or investigation to determine its validity."
  },
  "assumption": {
    "definition": "A belief or statement taken for granted without proof",
    "options": ["A belief without proof", "A logical conclusion", "A contradiction", "A final statement"],
    "explanation": "An assumption is something accepted as true without concrete evidence, often serving as a starting point for reasoning."
  },
  "premise": {
    "definition": "A statement or idea that forms the basis for an argument or reasoning",
    "options": ["A statement for reasoning", "A casual thought", "A contradiction", "A logical conclusion"],
    "explanation": "A premise is a fundamental idea or assumption used as the foundation for making a conclusion or argument."
  },
      "research": {
    "definition": "The systematic investigation into and study of materials and sources to establish facts and reach new conclusions",
    "options": ["Systematic investigation", "A casual search", "A simple observation", "A final conclusion"],
    "explanation": "Research is the process of collecting, analyzing, and interpreting information to answer questions or solve problems, often leading to new insights."
  },
  "methodology": {
    "definition": "A system of methods used in a particular area of study or activity",
    "options": ["System of methods", "A specific theory", "A contradiction", "A simple technique"],
    "explanation": "Methodology refers to the systematic approach or set of principles used to conduct research or analysis in a specific field."
  },
  "hypothesis": {
    "definition": "A proposed explanation for a phenomenon based on limited evidence, used as a starting point for further investigation",
    "options": ["Proposed explanation", "Final conclusion", "A fact", "A contradiction"],
    "explanation": "A hypothesis is an educated guess or theory based on prior knowledge, to be tested through research and experimentation."
  },
  "framework": {
    "definition": "A basic structure underlying a system, concept, or method",
    "options": ["Basic structure", "A casual opinion", "A conclusion", "A contradiction"],
    "explanation": "A framework provides the foundational structure for a system, theory, or methodology, guiding the approach to a subject."
  },
  "literature": {
    "definition": "Written works, especially those considered of superior or lasting artistic merit",
    "options": ["Written works of artistic merit", "A simple study", "A type of opinion", "A contradiction"],
    "explanation": "Literature encompasses written works, particularly those considered to have artistic value, such as novels, poems, and academic writings."
  },
  "analysis": {
    "definition": "Detailed examination of the elements or structure of something, often as a basis for discussion or interpretation",
    "options": ["Detailed examination", "A casual observation", "A logical conclusion", "A contradiction"],
    "explanation": "Analysis involves breaking down a complex subject into smaller components to better understand and interpret it."
  },
  "study": {
    "definition": "The act of learning about a subject, typically through reading, research, or practical application",
    "options": ["Learning through research", "A type of observation", "A contradiction", "A casual activity"],
    "explanation": "Study refers to focused learning or investigation into a specific area of knowledge, often for academic or practical purposes."
  },
  "theory": {
    "definition": "A well-substantiated explanation of an aspect of the natural world that can be repeatedly tested",
    "options": ["Well-substantiated explanation", "A guess", "A casual opinion", "A final conclusion"],
    "explanation": "A theory is an explanation based on evidence and reasoning that can be tested and refined through experimentation and observation."
  },
  "academic": {
    "definition": "Relating to education, scholarly pursuits, or institutions of learning",
    "options": ["Relating to education", "A casual opinion", "A contradiction", "A specific object"],
    "explanation": "Academic refers to anything associated with formal education, research, and scholarly work, often in a school or university context."
  },
  "seminar": {
    "definition": "A group meeting for academic discussion or training on a particular subject",
    "options": ["Academic discussion group", "A casual conversation", "A final presentation", "A contradiction"],
    "explanation": "A seminar is an educational meeting where people gather to discuss, learn, and exchange ideas on a specific topic or subject."
  },
  "dissertation": {
    "definition": "A lengthy written work on a particular subject, especially one required for a doctoral degree",
    "options": ["Lengthy academic work", "A casual essay", "A contradiction", "A short article"],
    "explanation": "A dissertation is a substantial academic paper, typically required for advanced degrees, presenting original research on a specific topic."
  },
  "peer-reviewed": {
    "definition": "A process where academic work is evaluated by experts in the same field before publication",
    "options": ["Reviewed by experts", "A casual opinion", "A contradiction", "A final presentation"],
    "explanation": "Peer review is a method of quality control in academia where experts evaluate research before it is published, ensuring its validity and credibility."
  },
  "conference": {
    "definition": "A formal meeting for discussion, often about academic or professional topics",
    "options": ["Formal discussion meeting", "Casual conversation", "A contradiction", "A presentation"],
    "explanation": "A conference is a gathering where professionals or academics meet to share knowledge, discuss ideas, and present research findings."
  },
  "publication": {
    "definition": "The act of making content available to the public, typically in print or online",
    "options": ["Making content available", "A type of argument", "A contradiction", "A casual conversation"],
    "explanation": "A publication is any work, such as a book, article, or report, that is made available to the public through printing or digital media."
  },
  "journal": {
    "definition": "A periodical publication that contains academic articles, research, and reviews in a specific field",
    "options": ["Academic periodical", "A casual blog", "A contradiction", "A final conclusion"],
    "explanation": "A journal is a scholarly publication that provides a platform for the presentation and discussion of new research in a particular academic field."
  },
  "findings": {
    "definition": "The results or conclusions reached from research or analysis",
    "options": ["Research results", "A contradiction", "A final opinion", "A casual observation"],
    "explanation": "Findings are the outcomes or conclusions drawn from research or investigation, often contributing new knowledge to a field."
  },
  "abstract": {
    "definition": "A brief summary of a larger work, such as a research paper or dissertation",
    "options": ["Brief summary", "A full analysis", "A contradiction", "A detailed conclusion"],
    "explanation": "An abstract provides a concise summary of the main points of a research paper, allowing readers to understand the content quickly."
  },
  "argument": {
    "definition": "A reasoned presentation of ideas and evidence to support a specific point of view",
    "options": ["Reasoned presentation of ideas", "A contradiction", "A casual conversation", "A type of persuasion"],
    "explanation": "An argument involves presenting evidence and reasoning to support or oppose a particular idea or perspective."
  },
  "citation": {
    "definition": "A reference to a source used in academic work, often including author, title, and publication details",
    "options": ["Reference to a source", "A casual opinion", "A contradiction", "A casual conversation"],
    "explanation": "Citations are used in academic work to credit sources and allow readers to locate the referenced material for further study."
  },
  "reference": {
    "definition": "A mention or citation of a source of information, often in an academic context",
    "options": ["Mention of a source", "A contradiction", "A final conclusion", "A casual discussion"],
    "explanation": "A reference is a formal acknowledgment of a source used in academic or professional writing, often accompanied by full details."
  },
      "critique": {
    "definition": "A detailed analysis and assessment of something, especially a literary, philosophical, or artistic work",
    "options": ["Detailed assessment", "Casual observation", "Final judgment", "A contradiction"],
    "explanation": "A critique is a careful and thorough examination of a work, offering feedback, analysis, and suggestions for improvement."
  },
  "examination": {
    "definition": "A detailed inspection or investigation of something, often for evaluation or analysis",
    "options": ["Detailed inspection", "A casual glance", "A final judgment", "A contradiction"],
    "explanation": "An examination refers to a thorough investigation or analysis of a subject, used to assess its quality or condition."
  },
  "scrutiny": {
    "definition": "Critical observation or examination",
    "options": ["Critical examination", "Casual look", "Final conclusion", "Contradiction"],
    "explanation": "Scrutiny is the careful and detailed examination of something, often to ensure accuracy or detect problems."
  },
  "analysis": {
    "definition": "The process of examining something in detail in order to understand it or make decisions based on the findings",
    "options": ["Detailed examination", "A casual observation", "A general assumption", "A contradiction"],
    "explanation": "Analysis involves breaking down complex data or information into smaller parts to understand it better and make informed decisions."
  },
  "discernment": {
    "definition": "The ability to make good judgments and perceive things clearly",
    "options": ["Good judgment", "Casual opinion", "A contradiction", "A final conclusion"],
    "explanation": "Discernment is the capacity to judge and understand things clearly, often leading to insightful conclusions."
  },
  "appraisal": {
    "definition": "An evaluation or assessment of the value, quality, or importance of something",
    "options": ["Evaluation or assessment", "Casual review", "A contradiction", "Final judgment"],
    "explanation": "An appraisal is a formal evaluation of something’s worth, value, or quality, commonly used in professional settings like real estate or performance reviews."
  },
  "distinction": {
    "definition": "The recognition of differences, or the quality of being excellent",
    "options": ["Recognition of differences", "A casual opinion", "A contradiction", "Final decision"],
    "explanation": "Distinction refers to a notable difference or excellence that sets something apart from others."
  },
  "deconstruction": {
    "definition": "The process of analyzing and interpreting something by breaking it down into its components to understand its deeper meanings",
    "options": ["Breaking something down", "Final judgment", "A contradiction", "Casual analysis"],
    "explanation": "Deconstruction is a critical approach that examines the underlying assumptions or structures in a work to reveal hidden meanings."
  },
  "paradox": {
    "definition": "A statement or situation that seems contradictory or opposed to common sense, yet may be true",
    "options": ["Contradictory statement", "Final solution", "A contradiction", "A conclusion"],
    "explanation": "A paradox presents an apparent contradiction that, upon further investigation, may reveal an unexpected truth."
  },
  "fallacy": {
    "definition": "A mistaken belief or idea based on unsound reasoning or logic",
    "options": ["Mistaken reasoning", "A contradiction", "A fact", "A solution"],
    "explanation": "A fallacy is an error in reasoning or logic that leads to a false or misleading conclusion."
  },
  "bias": {
    "definition": "A tendency to favor one thing, person, or group over another, often in an unfair way",
    "options": ["Unfair preference", "Objective judgment", "Final decision", "A contradiction"],
    "explanation": "Bias occurs when personal preferences or prejudices affect judgment, often leading to unfair or unbalanced conclusions."
  },
  "objective": {
    "definition": "Not influenced by personal feelings or opinions; based on facts",
    "options": ["Fact-based", "Emotionally influenced", "A contradiction", "Casual opinion"],
    "explanation": "Being objective means making decisions or forming opinions based on facts and evidence, free from personal feelings or bias."
  },
  "subjective": {
    "definition": "Based on personal feelings, tastes, or opinions",
    "options": ["Personal opinion", "Fact-based", "A contradiction", "Final decision"],
    "explanation": "Subjective refers to ideas or opinions that are influenced by personal experiences or emotions rather than objective facts."
  },
  "insight": {
    "definition": "An accurate and deep understanding of a person, thing, or situation",
    "options": ["Deep understanding", "Casual observation", "Final judgment", "A contradiction"],
    "explanation": "Insight refers to the ability to gain a deep, clear understanding of complex issues or situations."
  },
  "reflection": {
    "definition": "Serious thought or consideration, especially on one's own actions or ideas",
    "options": ["Thoughtful consideration", "Casual opinion", "Final conclusion", "A contradiction"],
    "explanation": "Reflection involves carefully considering or thinking about something, often for self-improvement or understanding."
  },
  "evaluation": {
    "definition": "The process of assessing something based on specific criteria or standards",
    "options": ["Assessment of value", "Casual judgment", "A contradiction", "Final solution"],
    "explanation": "Evaluation is the process of carefully examining something to determine its worth, quality, or effectiveness."
  },
  "logical": {
    "definition": "Relating to or based on clear reasoning or sound judgment",
    "options": ["Clear reasoning", "Emotional reasoning", "A contradiction", "Final decision"],
    "explanation": "Logical thinking involves making decisions or arguments that are clear, coherent, and based on sound reasoning."
  },
  "conclusion": {
    "definition": "The final decision or judgment reached after consideration or analysis",
    "options": ["Final decision", "Initial opinion", "A contradiction", "Casual observation"],
    "explanation": "A conclusion is the final judgment or decision made after evaluating all available information or evidence."
  },
  "observation": {
    "definition": "The action or process of closely watching or monitoring something to gather information",
    "options": ["Close monitoring", "Casual look", "A final judgment", "A contradiction"],
    "explanation": "Observation involves carefully watching something or someone in order to collect data or insights for further analysis."
  },
  "reasoning": {
    "definition": "The process of thinking logically and drawing conclusions from evidence or facts",
    "options": ["Logical thinking", "Emotional judgment", "Casual opinion", "A contradiction"],
    "explanation": "Reasoning is the mental process of drawing conclusions or making decisions based on evidence, facts, and logical principles."
  },
      "diplomacy": {
    "definition": "The practice of managing international relations through negotiation and dialogue",
    "options": ["Managing international relations", "A form of conflict", "A type of entertainment", "A scientific method"],
    "explanation": "Diplomacy is the process through which countries manage their relations, resolve conflicts, and promote peaceful cooperation through discussions and treaties."
  },
  "multicultural": {
    "definition": "Relating to or representing several different cultures or ethnic groups",
    "options": ["Representing multiple cultures", "A single culture", "A foreign culture", "An isolated culture"],
    "explanation": "Multicultural refers to the coexistence and recognition of diverse cultural or ethnic groups within a society, promoting inclusivity and respect for differences."
  },
  "diversity": {
    "definition": "The state of having a variety of different elements, such as cultures, people, or ideas",
    "options": ["Variety of elements", "Uniformity", "A single element", "A contradiction"],
    "explanation": "Diversity refers to the presence of different characteristics within a group or community, such as race, culture, gender, and ideas, enriching the group."
  },
  "integration": {
    "definition": "The process of combining or incorporating different groups into a unified whole",
    "options": ["Combining diverse groups", "Isolating groups", "A single group", "A contradiction"],
    "explanation": "Integration is the process of making different groups or elements work together in harmony, ensuring equality and access for all."
  },
  "tolerance": {
    "definition": "The willingness to accept or allow beliefs, practices, or behaviors that one does not necessarily agree with",
    "options": ["Acceptance of differences", "Intolerance", "Exclusion of others", "A contradiction"],
    "explanation": "Tolerance is the acceptance and respect of differing views, practices, and beliefs, promoting peaceful coexistence and understanding."
  },
  "equity": {
    "definition": "Fairness and justice in the distribution of resources, opportunities, and treatment",
    "options": ["Fairness in distribution", "Unequal distribution", "A contradiction", "Favoritism"],
    "explanation": "Equity involves ensuring that everyone has access to the resources and opportunities they need to succeed, with a focus on fairness and justice."
  },
  "prejudice": {
    "definition": "A preconceived opinion or judgment, often based on stereotypes, without sufficient knowledge or understanding",
    "options": ["Preconceived judgment", "Fair judgment", "A factual opinion", "An inclusive view"],
    "explanation": "Prejudice is an unfair or biased judgment made about individuals or groups without proper knowledge or understanding, often leading to discrimination."
  },
  "inclusion": {
    "definition": "The practice of ensuring that all individuals, regardless of their background, are welcomed and valued",
    "options": ["Welcoming all individuals", "Exclusion of others", "Favoritism", "A contradiction"],
    "explanation": "Inclusion is the process of actively involving all people, particularly those from diverse or marginalized backgrounds, in society, organizations, or activities."
  },
  "discrimination": {
    "definition": "The unfair treatment of people based on their characteristics, such as race, gender, or age",
    "options": ["Unfair treatment", "Fair treatment", "Equality", "Inclusion"],
    "explanation": "Discrimination involves treating individuals or groups unfairly or unjustly based on biases related to their identity or characteristics."
  },
  "bias": {
    "definition": "A preference or prejudice toward or against something or someone, often without reason or fairness",
    "options": ["Unfair preference", "Objectivity", "Equality", "Neutral judgment"],
    "explanation": "Bias is a tendency to favor or lean toward a particular perspective or group, often without rational justification, leading to imbalanced or unfair decisions."
  },
  "solidarity": {
    "definition": "Unity or agreement of feeling or action among individuals with a common interest",
    "options": ["Unity for a common cause", "Division", "Isolation", "Disagreement"],
    "explanation": "Solidarity refers to the support and unity among individuals or groups who share common interests, often in social, political, or labor movements."
  },
  "collaboration": {
    "definition": "The action of working together with others to achieve a common goal",
    "options": ["Working together", "Working alone", "Conflict", "Exclusion"],
    "explanation": "Collaboration involves individuals or groups coming together to work cooperatively towards shared objectives or outcomes."
  },
  "consensus": {
    "definition": "General agreement or collective decision among a group of people",
    "options": ["General agreement", "Disagreement", "Conflict", "Exclusion"],
    "explanation": "Consensus is the process of reaching a general agreement or mutual understanding among members of a group or community."
  },
  "empathy": {
    "definition": "The ability to understand and share the feelings or experiences of others",
    "options": ["Understanding others' feelings", "Judging others", "Ignoring others' feelings", "A contradiction"],
    "explanation": "Empathy is the capacity to recognize and share the emotional experiences of others, which fosters compassion and understanding."
  },
  "socialization": {
    "definition": "The process of learning and adopting the behaviors, norms, and values of society",
    "options": ["Learning social norms", "Isolating from society", "Ignoring norms", "A contradiction"],
    "explanation": "Socialization is the lifelong process of learning how to interact with others and adapt to societal norms, values, and expectations."
  },
  "identity": {
    "definition": "The qualities, beliefs, and characteristics that define a person or group",
    "options": ["Defining qualities and beliefs", "External appearance", "Random characteristics", "A contradiction"],
    "explanation": "Identity encompasses the traits, beliefs, and values that distinguish an individual or group, contributing to a sense of self and belonging."
  },
  "community": {
    "definition": "A group of people living in the same area or sharing common interests and values",
    "options": ["Group with shared interests", "Isolated individuals", "A contradictory group", "A formal group"],
    "explanation": "A community is a group of people who live in a specific area or share common goals, activities, or interests, promoting connection and cooperation."
  },
  "globalization": {
    "definition": "The process of increased interconnectedness and integration of economies, cultures, and societies worldwide",
    "options": ["Global interconnectedness", "Local isolation", "Cultural separation", "A contradiction"],
    "explanation": "Globalization refers to the growing interconnectedness of the world's markets, cultures, and people through trade, technology, and communication."
  },
      "jurisdiction": {
    "definition": "The official power or authority to make legal decisions and judgments",
    "options": ["Legal authority", "A type of law", "An agreement", "A legal contract"],
    "explanation": "Jurisdiction refers to the legal power or authority of a court or body to make decisions and enforce laws within a specific area or subject."
  },
  "regulation": {
    "definition": "A rule or directive made and maintained by an authority",
    "options": ["Rule set by authority", "A legal argument", "An informal decision", "A court order"],
    "explanation": "Regulation is a legal requirement imposed by a government or authority that aims to control or govern behavior or actions in a specific area."
  },
  "legislation": {
    "definition": "The process of making or enacting laws",
    "options": ["Making of laws", "Breaking laws", "Ignoring laws", "A court decision"],
    "explanation": "Legislation refers to the process by which laws are created, debated, and passed by governing bodies to regulate behavior and maintain order."
  },
  "statute": {
    "definition": "A written law passed by a legislative body",
    "options": ["Written law", "Court ruling", "Private agreement", "A public opinion"],
    "explanation": "A statute is a law that has been formally enacted by a legislative body and is intended to govern specific conduct or practices."
  },
  "compliance": {
    "definition": "The action or process of complying with established rules or regulations",
    "options": ["Following rules", "Breaking rules", "Creating rules", "Challenging rules"],
    "explanation": "Compliance involves adhering to established laws, regulations, or guidelines set by governing bodies or organizations."
  },
  "accountability": {
    "definition": "The obligation of an individual or organization to accept responsibility for their actions",
    "options": ["Responsibility for actions", "Ignoring mistakes", "External pressure", "Being punished"],
    "explanation": "Accountability refers to the duty to be responsible for one’s actions, decisions, and outcomes, and to be answerable to others."
  },
  "authority": {
    "definition": "The power or right to give orders, make decisions, and enforce laws",
    "options": ["Power to enforce laws", "A passive role", "A group of followers", "A decision-making process"],
    "explanation": "Authority refers to the legitimate power that an individual or organization possesses to make decisions, impose rules, and enforce them."
  },
  "arbitration": {
    "definition": "A method of resolving disputes outside of court by having a neutral third party make a binding decision",
    "options": ["Dispute resolution by a neutral party", "A form of litigation", "Informal settlement", "Direct negotiation"],
    "explanation": "Arbitration is a form of alternative dispute resolution where an independent third party helps resolve disputes, and their decision is usually final and binding."
  },
  "litigation": {
    "definition": "The process of taking legal action or suing someone in court",
    "options": ["Legal action or lawsuit", "A friendly negotiation", "An out-of-court settlement", "A legal defense"],
    "explanation": "Litigation refers to the process of engaging in a legal dispute or taking someone to court to resolve a conflict."
  },
  "justice": {
    "definition": "The quality of being fair and reasonable according to the law",
    "options": ["Fairness and fairness under the law", "Punishment", "Partiality", "Unfair treatment"],
    "explanation": "Justice is the concept of fairness where individuals are treated equitably according to the law, ensuring that rights and wrongs are addressed appropriately."
  },
  "sanction": {
    "definition": "A penalty or punishment for disobeying a law or rule",
    "options": ["Penalty for rule violation", "Award for good behavior", "Reward", "Praise"],
    "explanation": "Sanction refers to a legal or official penalty imposed for violating a law, regulation, or code of conduct."
  },
  "verdict": {
    "definition": "A decision or judgment made by a court or jury in a legal case",
    "options": ["Court decision", "Initial opinion", "Mediation agreement", "Arbitration result"],
    "explanation": "A verdict is the final decision or judgment rendered by a jury or judge in a court case, determining the outcome of a dispute."
  },
  "prosecutor": {
    "definition": "A legal representative who brings charges against someone in a criminal case",
    "options": ["Criminal case lawyer", "Defendant’s lawyer", "Neutral party", "Judge"],
    "explanation": "A prosecutor is a legal professional responsible for presenting the case against an individual or organization accused of committing a crime."
  },
  "defendant": {
    "definition": "An individual or organization accused or sued in a court of law",
    "options": ["Person accused in court", "Judge", "Prosecutor", "Lawyer"],
    "explanation": "A defendant is someone who is being accused or sued in a court case, facing legal charges or claims."
  },
  "precedent": {
    "definition": "A previous legal case or decision that serves as an example or rule for future cases",
    "options": ["Past decision used as a guide", "A new case", "A legal rule", "A final verdict"],
    "explanation": "Precedent refers to an earlier court decision that influences the outcome of similar cases in the future, providing consistency in the legal system."
  },
  "tribunal": {
    "definition": "A type of court or judicial body with specific jurisdiction to handle particular cases or issues",
    "options": ["Specialized court", "Public opinion", "Legal enforcement body", "Arbitration body"],
    "explanation": "A tribunal is a legal body with authority to make decisions in certain cases, often specialized in specific areas such as labor or military law."
  },
  "rights": {
    "definition": "The legal, social, or ethical principles that grant individuals certain freedoms and protections",
    "options": ["Freedoms and protections", "Legal obligations", "Legal restrictions", "Punishments"],
    "explanation": "Rights are the freedoms and protections guaranteed by laws or societal norms that ensure fair treatment and prevent discrimination."
  },
  "liberty": {
    "definition": "The state of being free within society from oppressive restrictions",
    "options": ["Freedom from oppression", "Imprisonment", "Coercion", "Discrimination"],
    "explanation": "Liberty refers to the fundamental freedom individuals have to act, speak, and live without unwarranted interference or control."
  },
  "constitution": {
    "definition": "A written document outlining the fundamental laws and principles governing a country or organization",
    "options": ["Fundamental legal document", "A written contract", "Governmental regulation", "A court decision"],
    "explanation": "A constitution is a foundational legal document that sets out the governing laws, rights, and structure of a country or organization."
  },
    "eloquence": {
    "definition": "Fluent or persuasive speaking or writing",
    "options": ["Persuasive speaking or writing", "Unclear speech", "Incoherent speech", "Loud speaking"],
    "explanation": "Eloquence is the ability to speak or write in a powerful and effective way, often marked by clarity, fluency, and expressiveness."
  },
  "articulation": {
    "definition": "The clear and precise pronunciation of words or the expression of ideas",
    "options": ["Clear pronunciation", "Lack of clarity", "Loudness", "Gestures"],
    "explanation": "Articulation refers to the clarity with which someone expresses their thoughts, especially through speech, ensuring each word is well pronounced."
  },
  "persuasiveness": {
    "definition": "The ability to convince others to believe or do something",
    "options": ["Ability to convince others", "Lack of influence", "Neutral communication", "Indifference"],
    "explanation": "Persuasiveness is the skill of influencing others through argument, reasoning, or appeal, often aimed at changing opinions or behaviors."
  },
  "nuance": {
    "definition": "A subtle difference or variation in meaning, expression, or feeling",
    "options": ["Subtle difference", "Loud statement", "Clear distinction", "Generalization"],
    "explanation": "Nuance refers to the subtle and often delicate differences in meaning, feeling, or expression that may not be immediately obvious."
  },
  "subtlety": {
    "definition": "The quality of being delicate or precise in expression or understanding",
    "options": ["Delicate or precise expression", "Obviousness", "Clarity", "Loudness"],
    "explanation": "Subtlety is the art of dealing with delicate or complex matters in a refined and often understated way, requiring careful attention."
  },
  "coherence": {
    "definition": "The quality of being logical, consistent, and forming a unified whole",
    "options": ["Logical consistency", "Confusion", "Disorganization", "Inconsistency"],
    "explanation": "Coherence is the quality that makes ideas, arguments, or narratives logically connected and easy to understand as a unified whole."
  },
  "precision": {
    "definition": "The quality of being exact and accurate in detail",
    "options": ["Exactness and accuracy", "Vagueness", "Rough estimation", "Generalization"],
    "explanation": "Precision refers to the accuracy and exactness with which something is expressed or measured, leaving little room for error."
  },
  "deliberation": {
    "definition": "Careful consideration or discussion before making a decision",
    "options": ["Careful consideration", "Quick decision", "Rushed action", "Irrelevant discussion"],
    "explanation": "Deliberation involves thinking carefully about all aspects of a situation or decision before taking action, often involving discussion and analysis."
  },
  "implication": {
    "definition": "A conclusion or effect that is suggested but not explicitly stated",
    "options": ["Suggested conclusion", "Direct statement", "Explicit detail", "Obvious fact"],
    "explanation": "Implication refers to something that is implied or suggested, even if it is not directly stated or clearly expressed."
  },
  "rhetoric": {
    "definition": "The art of effective or persuasive speaking or writing, often with a focus on style and impact",
    "options": ["Persuasive communication", "Unorganized speech", "Clear-cut facts", "Simple dialogue"],
    "explanation": "Rhetoric is the study and practice of effective communication, aiming to persuade or influence others, often using style and emotional appeal."
  },
  "abstraction": {
    "definition": "The process of considering something independently from concrete realities, often focusing on ideas rather than objects",
    "options": ["Generalization of ideas", "Concrete action", "Physical object", "Simple concept"],
    "explanation": "Abstraction involves thinking about something in a general or conceptual way, focusing on ideas rather than specific instances or objects."
  },
  "cognition": {
    "definition": "The mental processes involved in acquiring knowledge and understanding, such as perception, memory, and reasoning",
    "options": ["Mental processes of knowledge", "Physical action", "Learning from experience", "Automatic reactions"],
    "explanation": "Cognition refers to the processes our brains use to acquire and understand knowledge, including attention, memory, and problem-solving."
  },
  "insight": {
    "definition": "A deep understanding of a person or thing",
    "options": ["Deep understanding", "Surface-level knowledge", "Intuition", "Superficial glance"],
    "explanation": "Insight is the ability to gain a clear, deep, and often intuitive understanding of complex issues or situations."
  },
  "interpretation": {
    "definition": "The action of explaining the meaning of something",
    "options": ["Explaining meaning", "Vague statement", "Literal explanation", "Guesswork"],
    "explanation": "Interpretation involves explaining or providing understanding of something, often based on personal or cultural perspectives."
  },
  "conceptualization": {
    "definition": "The process of forming an idea or concept of something",
    "options": ["Forming an idea", "Ignoring details", "Assuming information", "Observing details"],
    "explanation": "Conceptualization refers to the process of creating and developing abstract ideas or concepts, often as the first step in problem-solving or planning."
  },
  "analysis": {
    "definition": "The process of breaking down something into its parts to better understand it",
    "options": ["Breaking down information", "Intuitive guess", "Impression", "Memory recall"],
    "explanation": "Analysis is the detailed examination or breakdown of something to understand its components, structure, or meaning."
  },
  "synthesis": {
    "definition": "The combination of different ideas, elements, or components to form a coherent whole",
    "options": ["Combining elements into a whole", "Simplifying information", "Analyzing details", "Ignoring parts"],
    "explanation": "Synthesis refers to the process of combining various pieces of information or ideas to create a unified or new whole."
  },
  "deduction": {
    "definition": "The process of reaching a conclusion by reasoning from general principles to specific instances",
    "options": ["Reasoning from general to specific", "Guessing", "Random choice", "Observing details"],
    "explanation": "Deduction involves making conclusions based on general principles or facts, leading to specific outcomes or decisions."
  },
  "inference": {
    "definition": "A conclusion drawn from evidence or reasoning",
    "options": ["Conclusion from reasoning", "Immediate decision", "Intuitive guess", "Random observation"],
    "explanation": "Inference is the process of drawing conclusions based on available information, evidence, or reasoning."
  },
  "paradigm": {
    "definition": "A typical example or model of something",
    "options": ["Model or example", "Variation", "Abstract theory", "Pattern of behavior"],
    "explanation": "Paradigm refers to a standard or typical example of something, often used as a reference or model for others."
  },
  "consultancy": {
    "definition": "The practice of providing expert advice in a particular field",
    "options": ["Expert advisory service", "Unpaid advice", "Customer support", "Contracting services"],
    "explanation": "Consultancy involves providing professional advice or services in specific areas such as business, management, or technology."
  },
  "negotiation": {
    "definition": "The process of discussing and reaching an agreement or compromise",
    "options": ["Discussion to reach agreement", "Formal decision", "Unilateral decision", "Passive discussion"],
    "explanation": "Negotiation involves the process of two or more parties discussing their differences and coming to an agreement or compromise."
  },
      "assimilation": {
    "definition": "The process of adapting or adjusting to the culture or behavior of a group or nation",
    "options": ["Adapting to a culture", "Resistance to change", "Cultural isolation", "Complete rejection of others' ways"],
    "explanation": "Assimilation refers to the process by which individuals or groups adopt and integrate into a new culture or society, often involving changes in behavior, values, and language."
  },
  "multiculturalism": {
    "definition": "The presence or support of several distinct cultural or ethnic groups within a society",
    "options": ["Support for diverse cultures", "A focus on one culture", "Cultural suppression", "Cultural division"],
    "explanation": "Multiculturalism is the coexistence and acknowledgment of multiple cultures within a society, emphasizing the value and contribution of diverse cultural backgrounds."
  },
  "existential": {
    "definition": "Relating to human existence, especially in terms of individual freedom and choice",
    "options": ["Relating to existence", "The study of the universe", "Strict adherence to rules", "Simple living"],
    "explanation": "Existential refers to philosophical inquiries concerning human existence, focusing on freedom, choice, and the meaning of life."
  },
  "autonomy": {
    "definition": "The right or condition of self-government or independence",
    "options": ["Self-governance", "Dependence", "Obedience", "Imposed control"],
    "explanation": "Autonomy refers to the ability or right of an individual or group to make decisions and govern themselves without external control."
  },
  "ethics": {
    "definition": "Moral principles that govern a person's behavior or the conducting of an activity",
    "options": ["Moral principles", "Scientific facts", "Technological advancement", "Religious practices"],
    "explanation": "Ethics refers to the set of moral guidelines that influence decisions, behaviors, and actions, often considering what is right and wrong."
  },
  "morality": {
    "definition": "Principles concerning the distinction between right and wrong or good and bad behavior",
    "options": ["Distinction between right and wrong", "Scientific method", "Legal procedures", "Economic decisions"],
    "explanation": "Morality involves principles related to what is considered right or wrong, influencing how people act in both personal and societal contexts."
  },
  "epistemology": {
    "definition": "The branch of philosophy concerned with the theory of knowledge, including its nature and limits",
    "options": ["Theory of knowledge", "Study of logic", "Political philosophy", "Ethical principles"],
    "explanation": "Epistemology deals with understanding the nature, scope, and limits of knowledge, including how we know what we know."
  },
  "metaphysics": {
    "definition": "A branch of philosophy that investigates the fundamental nature of reality and being",
    "options": ["Study of existence", "Scientific research", "Mathematical models", "Cultural practices"],
    "explanation": "Metaphysics explores questions about the nature of reality, existence, time, and the universe, often tackling abstract and fundamental concepts."
  },
  "ontology": {
    "definition": "The branch of metaphysics dealing with the nature of being and existence",
    "options": ["Study of being", "Moral decision-making", "Social behavior", "Scientific observation"],
    "explanation": "Ontology is concerned with understanding the nature of existence, categorizing what entities exist and how they relate to each other."
  },
  "paradigm": {
    "definition": "A model or pattern of something that serves as an example or reference",
    "options": ["Model or example", "Rule of law", "Moral principle", "Random occurrence"],
    "explanation": "A paradigm is a standard or typical example that serves as a reference for how things are done or understood in a particular field."
  },
  "ideology": {
    "definition": "A system of ideas and ideals, especially one that forms the basis of economic or political theory and policy",
    "options": ["System of beliefs", "Scientific theory", "Artistic expression", "Historical document"],
    "explanation": "Ideology refers to a set of ideas or beliefs that shape and guide actions, particularly in politics, economics, and society."
  },
  "utopia": {
    "definition": "An imagined perfect society or state in which everything is ideal",
    "options": ["Ideal society", "Realistic world", "Political theory", "Cultural tradition"],
    "explanation": "Utopia describes an imagined place or state where everything is perfect, often used in discussions of ideal societal structures."
  },
  "nihilism": {
    "definition": "The rejection of all religious and moral principles, often in the belief that life is meaningless",
    "options": ["Rejection of meaning", "Belief in higher purpose", "Commitment to tradition", "Focus on reason"],
    "explanation": "Nihilism is a philosophical belief that life has no inherent meaning or value, rejecting traditional beliefs in morality and religion."
  },
  "determinism": {
    "definition": "The philosophical belief that all events, including human actions, are determined by causes external to the will",
    "options": ["External cause of events", "Free will", "Randomness in actions", "Moral choice"],
    "explanation": "Determinism suggests that everything that happens is a result of prior events and natural laws, leaving no room for free will."
  },
  "subjectivity": {
    "definition": "The quality of being based on or influenced by personal feelings, tastes, or opinions",
    "options": ["Personal perspective", "Universal truth", "Scientific fact", "Factual objectivity"],
    "explanation": "Subjectivity refers to the influence of personal feelings, tastes, and opinions on perceptions and judgments."
  },
  "objectivity": {
    "definition": "The quality of being impartial and unbiased, not influenced by personal feelings or opinions",
    "options": ["Impartiality", "Personal perspective", "Cultural bias", "Emotional influence"],
    "explanation": "Objectivity is the ability to make judgments or observations that are not influenced by personal feelings or opinions."
  },
  "relativism": {
    "definition": "The belief that truth and moral values are not absolute, but are relative to the individuals or cultures holding them",
    "options": ["Truth is relative", "Absolute truth", "Scientific objectivity", "Cultural ignorance"],
    "explanation": "Relativism holds that knowledge, truth, and moral values are relative to culture, society, or individual perspective, without universal application."
  },
  "authenticity": {
    "definition": "The quality of being genuine, real, and true to one's self or the original form",
    "options": ["Being genuine", "Imitation", "Falsehood", "Popularity"],
    "explanation": "Authenticity is the quality of being true to oneself or to the original, without pretending or altering to fit expectations."
  },
  "introspection": {
    "definition": "The examination of one's own thoughts and feelings",
    "options": ["Self-reflection", "External observation", "Social interaction", "Emotional expression"],
    "explanation": "Introspection is the process of looking inward to examine your own thoughts, feelings, and mental state."
  },
  "humanism": {
    "definition": "A philosophy that emphasizes human values, interests, and dignity, focusing on the importance of individuals",
    "options": ["Focus on human values", "Religious devotion", "Focus on nature", "Political control"],
    "explanation": "Humanism focuses on the value and agency of human beings, emphasizing reason, ethics, and the pursuit of knowledge."
  },
  "transcendence": {
    "definition": "The state of going beyond ordinary limits or experiences, often in a spiritual sense",
    "options": ["Beyond ordinary experience", "Ordinary perception", "Physical limitations", "Local experience"],
    "explanation": "Transcendence refers to surpassing the ordinary or physical realm, often related to spiritual or philosophical enlightenment."
  },
  "epistemic": {
    "definition": "Relating to knowledge or the study of knowledge",
    "options": ["Related to knowledge", "Scientific fact", "Personal feeling", "Artistic interpretation"],
    "explanation": "Epistemic pertains to anything related to knowledge, its nature, sources, and limits."
  },
      "executive": {
    "definition": "A person with the responsibility for managing or overseeing the operations of an organization",
    "options": ["Senior manager", "Employee", "Customer", "Intern"],
    "explanation": "An executive is typically a high-ranking officer in a company or organization, responsible for strategic decision-making and overall management."
  },
  "management": {
    "definition": "The process of planning, organizing, and coordinating resources to achieve specific goals",
    "options": ["Organizing resources", "Working independently", "Handling personal tasks", "Unstructured decision-making"],
    "explanation": "Management refers to the practices and processes involved in overseeing and directing the operations of a business or organization."
  },
  "stakeholder": {
    "definition": "An individual, group, or organization with an interest or concern in a particular project or business",
    "options": ["Interested party", "External competitor", "External auditor", "General public"],
    "explanation": "A stakeholder is anyone who has an interest in the outcome of a project or business, including employees, customers, investors, and suppliers."
  },
  "collaboration": {
    "definition": "The action of working together with others to achieve a common goal",
    "options": ["Teamwork", "Independent work", "Competitive effort", "Private study"],
    "explanation": "Collaboration involves individuals or groups working together to accomplish a shared objective, fostering creativity, innovation, and problem-solving."
  },
  "networking": {
    "definition": "The process of establishing and maintaining relationships with people, especially for professional purposes",
    "options": ["Building professional relationships", "Staying isolated", "Managing internal company issues", "Promoting a product"],
    "explanation": "Networking is the practice of interacting with others in business or social contexts to exchange information, resources, and opportunities."
  },
  "efficiency": {
    "definition": "The ability to do something with the least amount of wasted time, effort, or resources",
    "options": ["Optimal performance", "Slowness", "Wasting resources", "Excessive effort"],
    "explanation": "Efficiency refers to achieving maximum productivity with minimal wasted effort or resources, crucial in business operations and processes."
  },
  "productivity": {
    "definition": "The effectiveness of productive effort, measured in terms of output per unit of input",
    "options": ["Output per input", "Time wasted", "Idle time", "Inefficiency"],
    "explanation": "Productivity is the measure of how efficiently resources are used to produce goods and services, often linked to time management and performance."
  },
  "leadership": {
    "definition": "The action of leading a group or organization, typically involving decision-making and motivating others",
    "options": ["Guiding others", "Following others", "Ignoring feedback", "Controlling others"],
    "explanation": "Leadership is the ability to inspire and guide others, making decisions and taking responsibility for the success or failure of the group or organization."
  },
  "negotiation": {
    "definition": "A discussion aimed at reaching an agreement between two or more parties",
    "options": ["Discussion for agreement", "Unilateral decision-making", "Avoiding discussions", "Complete opposition"],
    "explanation": "Negotiation involves dialogue between parties to resolve differences, reach agreements, and find common ground on various issues."
  },
  "delegation": {
    "definition": "The act of assigning tasks or responsibilities to others, often to improve efficiency",
    "options": ["Assigning tasks", "Taking full responsibility", "Exclusively managing tasks", "Avoiding work"],
    "explanation": "Delegation involves entrusting tasks or responsibilities to others, allowing leaders or managers to focus on higher-priority tasks and fostering teamwork."
  },
  "innovation": {
    "definition": "The introduction of new ideas, methods, or products to improve processes or solve problems",
    "options": ["New ideas and methods", "Old techniques", "Unchanging procedures", "Routine practices"],
    "explanation": "Innovation refers to the creation and application of new ideas, products, or methods that improve efficiency, quality, or functionality in business or technology."
  },
  "strategy": {
    "definition": "A plan of action designed to achieve a long-term or overall goal",
    "options": ["Plan of action", "Random decisions", "Short-term focus", "Spontaneous actions"],
    "explanation": "Strategy is a carefully thought-out plan designed to achieve a specific goal, often involving long-term decision-making and resource management."
  },
  "operation": {
    "definition": "The day-to-day activities involved in running an organization or business",
    "options": ["Daily business activities", "Legal agreements", "Creative tasks", "Strategic planning"],
    "explanation": "Operations involve the routine activities that are necessary to maintain the function of a business, ensuring products or services are delivered efficiently."
  },
  "implementation": {
    "definition": "The process of putting a plan, idea, or decision into effect",
    "options": ["Executing plans", "Brainstorming ideas", "Planning for the future", "Ignoring plans"],
    "explanation": "Implementation involves taking action to turn plans, strategies, or decisions into reality, ensuring that objectives are achieved."
  },
  "consultation": {
    "definition": "The process of seeking advice or information from experts or stakeholders",
    "options": ["Seeking expert advice", "Unilateral decision-making", "Avoiding feedback", "Overlooking external opinions"],
    "explanation": "Consultation involves engaging with others, often experts or stakeholders, to gather insights or advice before making decisions or taking action."
  },
  "corporation": {
    "definition": "A large company or group of companies authorized to act as a single entity",
    "options": ["Large company", "Small business", "Non-profit organization", "Freelancer"],
    "explanation": "A corporation is a legal entity that is separate from its owners, allowing it to operate in a similar way to an individual, often with the ability to enter contracts, own property, and incur liabilities."
  },
  "advisory": {
    "definition": "Providing expert advice or guidance",
    "options": ["Offering advice", "Making decisions", "Executing actions", "Ignoring feedback"],
    "explanation": "Advisory refers to the role of providing expert advice and guidance to help organizations or individuals make informed decisions."
  },
  "compliance": {
    "definition": "The act of adhering to laws, regulations, or standards",
    "options": ["Adhering to rules", "Breaking rules", "Ignoring standards", "Non-conformance"],
    "explanation": "Compliance is the process of ensuring that actions, operations, and decisions align with established laws, regulations, and standards."
  },
  "regulation": {
    "definition": "A rule or directive made and maintained by an authority",
    "options": ["Rule or directive", "Free choice", "Absence of laws", "Non-standard practice"],
    "explanation": "Regulations are rules set by authorities to control or govern specific actions or industries, ensuring safety, fairness, and compliance with laws."
  },
  "accountability": {
    "definition": "The responsibility of being answerable for one's actions or decisions",
    "options": ["Being responsible", "Avoiding blame", "Disregarding consequences", "Ignoring responsibility"],
    "explanation": "Accountability involves taking responsibility for one's actions and decisions, ensuring that they are transparent and that one can be held responsible for outcomes."
  },
      "strategy": {
    "definition": "A plan of action designed to achieve a specific goal or set of objectives",
    "options": ["Plan of action", "Random decision", "Indecision", "Spontaneous reaction"],
    "explanation": "A strategy is a structured plan aimed at achieving long-term success or solving complex problems, often involving the allocation of resources."
  },
  "resolution": {
    "definition": "A firm decision to do or not do something, or the act of solving a problem or conflict",
    "options": ["Firm decision", "Indecision", "Casual decision", "Conflict"],
    "explanation": "Resolution refers to making a definite decision or solving a problem, often marking the end of a conflict or challenge."
  },
  "dilemma": {
    "definition": "A situation in which a difficult choice has to be made between two or more alternatives",
    "options": ["Difficult choice", "Easy decision", "Simple solution", "Clear answer"],
    "explanation": "A dilemma is a situation where a person faces a tough choice between two or more options, each with its own set of challenges or consequences."
  },
  "contingency": {
    "definition": "A future event or circumstance that is possible but cannot be predicted with certainty",
    "options": ["Possible event", "Sure event", "Planned decision", "Final decision"],
    "explanation": "A contingency refers to a potential situation that may arise, for which plans or actions must be prepared in advance, though it is not guaranteed to happen."
  },
  "outcome": {
    "definition": "The result or consequence of an action, event, or decision",
    "options": ["Result", "Cause", "Uncertainty", "Possibility"],
    "explanation": "Outcome refers to the end result of an action or process, often reflecting the success, failure, or impact of a particular decision or event."
  },
  "evaluation": {
    "definition": "The process of assessing or judging the value, quality, or importance of something",
    "options": ["Assessment", "Random choice", "Ignoring", "Assumption"],
    "explanation": "Evaluation involves systematically reviewing and analyzing information, performance, or outcomes to make judgments or improvements."
  },
  "rationale": {
    "definition": "A set of reasons or logical basis for a decision or action",
    "options": ["Reasoning behind a decision", "Random thought", "Unfounded belief", "Indifference"],
    "explanation": "Rationale refers to the logical foundation or justification for a decision or action, providing a clear explanation for why something is done."
  },
  "justification": {
    "definition": "The action of showing or proving something to be right or reasonable",
    "options": ["Reasoning", "Excuse", "Random reason", "Injustice"],
    "explanation": "Justification involves providing evidence or arguments to support the correctness or validity of a decision, action, or belief."
  },
  "assessment": {
    "definition": "The evaluation or estimation of the nature, quality, or ability of someone or something",
    "options": ["Evaluation", "Random judgment", "Indifference", "Arbitrary decision"],
    "explanation": "Assessment is the process of analyzing and judging the value, quality, or performance of an individual, system, or process."
  },
  "decision-making": {
    "definition": "The process of choosing between alternatives to make a decision",
    "options": ["Making a choice", "Random guess", "Indecision", "Imposition"],
    "explanation": "Decision-making involves the act of considering different options and selecting the best course of action based on available information and goals."
  },
  "obstacle": {
    "definition": "A thing that blocks one's way or prevents progress",
    "options": ["Barrier", "Assistance", "Opportunity", "Help"],
    "explanation": "An obstacle is any hindrance or barrier that prevents forward movement, progress, or achievement of a goal."
  },
  "alternative": {
    "definition": "One of two or more available possibilities or choices",
    "options": ["Option", "One possibility", "Uncertainty", "Indecision"],
    "explanation": "An alternative refers to a choice or option that can be considered instead of another, offering different possibilities in decision-making."
  },
  "solution": {
    "definition": "A means of solving a problem or dealing with a difficult situation",
    "options": ["Answer", "Problem", "Obstruction", "Conflict"],
    "explanation": "A solution is an answer or resolution to a problem or challenge, designed to resolve an issue or make progress."
  },
  "scenario": {
    "definition": "A situation or sequence of events that could potentially happen in the future",
    "options": ["Possible situation", "Real event", "Unchanged event", "Prediction"],
    "explanation": "A scenario is a hypothetical or imagined situation that helps predict or analyze potential future outcomes."
  },
  "risk": {
    "definition": "The possibility of harm, loss, or negative consequence from an action or event",
    "options": ["Potential danger", "Safety", "Assurance", "No threat"],
    "explanation": "Risk involves the potential for negative outcomes, such as loss or harm, associated with a particular decision or event."
  },
  "consequence": {
    "definition": "A result or effect of an action or decision, often negative",
    "options": ["Result", "Benefit", "Cause", "Opportunity"],
    "explanation": "Consequence refers to the outcome that follows an action or decision, often carrying implications for future decisions or behavior."
  },
  "trade-off": {
    "definition": "The balance between two desirable but incompatible features or outcomes",
    "options": ["Compromise", "Advantage", "Reward", "Favor"],
    "explanation": "A trade-off involves balancing different factors or choices, where gaining one feature may result in losing another."
  },
  "advantage": {
    "definition": "A condition or circumstance that puts one in a favorable or superior position",
    "options": ["Benefit", "Disadvantage", "Risk", "Obstacle"],
    "explanation": "An advantage refers to any condition or feature that improves the chances of success or provides a favorable position in a given situation."
  },
  "disadvantage": {
    "definition": "A condition or circumstance that puts one at a lower or less favorable position",
    "options": ["Drawback", "Benefit", "Advantage", "Opportunity"],
    "explanation": "A disadvantage is a factor that puts someone or something at a lower position compared to others, often hindering progress or success."
  },
  "option": {
    "definition": "A choice or alternative that is available to be selected",
    "options": ["Choice", "Constraint", "Obligation", "Limit"],
    "explanation": "An option refers to a possible choice among several alternatives, providing flexibility in decision-making."
  },
      "hypothesis": {
    "definition": "A proposed explanation for a phenomenon, based on limited evidence, used as a starting point for further investigation",
    "options": ["Proposed explanation", "Final conclusion", "Confirmed fact", "Irrelevant assumption"],
    "explanation": "A hypothesis is an initial idea or theory that is tested through experimentation and observation to determine its validity."
  },
  "assumption": {
    "definition": "A thing that is accepted as true or as certain to happen, without proof",
    "options": ["Accepted truth", "Verifiable fact", "Tested theory", "Known outcome"],
    "explanation": "An assumption is a belief or idea that is taken for granted without direct evidence, often forming the basis for further reasoning."
  },
  "premise": {
    "definition": "A statement or idea that forms the basis for an argument or conclusion",
    "options": ["Basis for argument", "Final conclusion", "Opposing statement", "Irrelevant point"],
    "explanation": "A premise is a starting point or assumption that underpins the logic of an argument, leading to a conclusion."
  },
  "paradox": {
    "definition": "A statement or situation that contradicts itself, often revealing an underlying truth",
    "options": ["Contradictory statement", "Clear truth", "Simple fact", "Obvious solution"],
    "explanation": "A paradox is an idea that seems contradictory but may contain a deeper truth upon closer examination."
  },
  "dilemma": {
    "definition": "A situation in which a difficult choice has to be made between two or more alternatives",
    "options": ["Difficult choice", "Easy decision", "Clear answer", "Obvious decision"],
    "explanation": "A dilemma presents two or more conflicting options, each with its own set of advantages and drawbacks."
  },
  "conclusion": {
    "definition": "The final decision or judgment formed after consideration or reasoning",
    "options": ["Final judgment", "Initial idea", "Premise", "Unsubstantiated claim"],
    "explanation": "A conclusion is the result or outcome of an argument or process, reached after considering all the facts or evidence."
  },
  "interpretation": {
    "definition": "The action of explaining the meaning of something, especially in a specific context",
    "options": ["Explanation", "Fact", "Conclusion", "Misunderstanding"],
    "explanation": "Interpretation involves analyzing and explaining the meaning of something, often influenced by personal understanding or perspective."
  },
  "inference": {
    "definition": "A conclusion drawn from evidence and reasoning rather than from explicit statements",
    "options": ["Reasoned conclusion", "Basic fact", "Premise", "Assumption"],
    "explanation": "An inference is a logical conclusion that is derived from available evidence, though not directly stated."
  },
  "concept": {
    "definition": "An abstract idea or a general notion that represents something",
    "options": ["Abstract idea", "Concrete example", "Detailed fact", "Specific instance"],
    "explanation": "A concept is a mental representation of something, often abstract, that helps in understanding and organizing knowledge."
  },
  "argumentation": {
    "definition": "The process of reasoning and presenting arguments in support of a position or conclusion",
    "options": ["Reasoning", "Unsubstantiated opinion", "Final answer", "Emotional appeal"],
    "explanation": "Argumentation involves presenting and supporting a position through logical reasoning and evidence."
  },
  "reflection": {
    "definition": "The process of thinking deeply about something, often to gain insight or understanding",
    "options": ["Deep thinking", "Immediate action", "Obvious response", "Simple observation"],
    "explanation": "Reflection involves careful consideration of experiences or ideas, helping to gain a deeper understanding or perspective."
  },
  "synthesis": {
    "definition": "The combination of different elements to form a coherent whole",
    "options": ["Combination", "Analysis", "Evaluation", "Isolation"],
    "explanation": "Synthesis is the process of integrating various components or ideas to create a unified understanding or solution."
  },
  "evaluation": {
    "definition": "The systematic assessment of the value, quality, or importance of something",
    "options": ["Assessment", "Assumption", "Opinion", "Guess"],
    "explanation": "Evaluation is the process of judging or appraising the quality, performance, or value of something based on specific criteria."
  },
  "contradiction": {
    "definition": "A situation in which two or more statements, ideas, or actions are inconsistent or opposed",
    "options": ["Inconsistency", "Agreement", "Clarity", "Support"],
    "explanation": "A contradiction occurs when two or more ideas or statements directly oppose or negate each other, leading to confusion or conflict."
  },
  "ambiguity": {
    "definition": "The quality of being open to more than one interpretation or having unclear meaning",
    "options": ["Uncertainty", "Clarity", "Certainty", "Simplicity"],
    "explanation": "Ambiguity refers to situations where meaning is unclear or open to multiple interpretations, often leading to confusion or debate."
  },
  "perspective": {
    "definition": "A particular attitude or viewpoint towards something",
    "options": ["Viewpoint", "Conclusion", "Fact", "Theory"],
    "explanation": "Perspective is the way one views or interprets a situation, often influenced by personal experiences or beliefs."
  },
  "nuance": {
    "definition": "A subtle difference or distinction that is not immediately obvious",
    "options": ["Subtle difference", "Major change", "Obvious fact", "Clear-cut answer"],
    "explanation": "Nuance refers to the subtle distinctions or variations in meaning, tone, or expression that can change the interpretation of a situation."
  },
  "thesis": {
    "definition": "A statement or theory put forward to be maintained or proved in an argument or academic paper",
    "options": ["Main argument", "Unsubstantiated claim", "Minor point", "Simple observation"],
    "explanation": "A thesis is a central claim or idea in an academic paper, which the author defends through evidence and reasoning."
  },
  "methodology": {
    "definition": "A system of methods used in a particular area of study or activity",
    "options": ["System of methods", "Personal opinion", "Random approach", "Casual observation"],
    "explanation": "Methodology is the set of processes, techniques, and strategies used to conduct research or solve problems in a structured way."
  },
  "framework": {
    "definition": "A basic structure underlying a system, concept, or method",
    "options": ["Structure", "Final solution", "Detailed plan", "Random approach"],
    "explanation": "A framework provides the basic structure and guidelines needed to organize or understand a complex system or process."
  },
    
    }
};

// Add new property for custom banks at the end
const customBanks = JSON.parse(localStorage.getItem('customBanks') || '{}');