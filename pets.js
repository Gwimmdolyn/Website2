// pet data
const pets = [
    { 
        id: 1,
        name: "Buddy", 
        type: "dog", 
        breed: "Labrador", 
        age: "young", 
        size: "medium",
        temperament: "friendly",
        description: "Buddy is an energetic and affectionate Labrador who thrives on companionship and playtime. His favorite activities include chasing tennis balls in the yard, splashing in water, and curling up next to his humans for evening cuddles. He’s great with kids, other dogs, and even cats, making him the perfect addition to a family looking for a loyal and loving friend.",
        image: "labrador.webp"
    },
    { 
        id: 2,
        name: "Max", 
        type: "dog", 
        breed: "German Shepherd",
        age: "adult", 
        size: "large", 
        temperament: "energetic", 
        description: "Max is a loyal and highly intelligent German Shepherd who’s always ready for an adventure. He enjoys long walks, learning new tricks, and protecting his family with unwavering devotion. His sharp mind and boundless energy make him ideal for an active household or someone looking for a jogging partner or hiking companion. Max’s love for his family is as big as his heart.",
        image: "germanShepherd.webp"
    },
    { 
        id: 3,
        name: "Bella",
        type: "cat",
        breed: "Siamese", 
        age: "kitten", 
        size: "small", 
        temperament: "playful", 
        description: "Bella is a curious and playful Siamese kitten with a heart full of mischief. She loves to explore every corner of her home, chase after toy mice, and climb her favorite scratching post. Her striking blue eyes and soft fur make her irresistibly adorable. Bella is looking for a family who will cherish her adventurous spirit and playful antics.",
        image: "siamese-kitten.webp"
    },
    { 
        id: 4,
        name: "Lucy", 
        type: "dog", 
        breed: "Golden Retriever", 
        age: "senior", 
        size: "large", 
        temperament: "calm",
        description: "Lucy is a gentle and loving Golden Retriever with a heart of gold. She enjoys relaxing by her owner’s side, taking leisurely strolls, and receiving endless belly rubs. Despite her age, she still has a spark of playfulness when the mood strikes. Lucy is looking for a quiet home where she can spend her golden years surrounded by love and care.",
        image: "GoldenRetriever.webp"
    },
    { 
        id: 5,
        name: "Tweety", 
        type: "bird", 
        breed: "Canary", 
        age: "young", 
        size: "small", 
        temperament: "friendly",
        description: "Tweety is a cheerful Canary with a song that can brighten even the darkest day. Her melodious chirps fill the room with joy and warmth. She loves perching on her swing and watching the world go by. Tweety is the perfect companion for someone who appreciates the simple pleasures of life and the beauty of birdsong.",
        image: "Canary.webp"
    },
    { 
        id: 6,
        name: "Shadow", 
        type: "cat", 
        breed: "Persian", 
        age: "adult", 
        size: "medium", 
        temperament: "calm",
        description: "Shadow is a serene and graceful Persian cat who loves lounging in sunny spots and receiving gentle pets. Her luxurious coat and captivating eyes give her an air of elegance. Shadow is a low-maintenance companion who thrives in a peaceful environment and enjoys the company of calm, loving humans.",
        image: "Persian.webp"
    },
    { 
        id: 7,
        name: "Coco", 
        type: "bird", 
        breed: "Parrot", 
        age: "senior", 
        size: "small", 
        temperament: "playful",
        description: "Coco is a vibrant and talkative Parrot with a larger-than-life personality. She loves mimicking sounds, playing with her toys, and interacting with her human companions. Coco’s playful nature and bright plumage make her a joy to be around. She’s looking for a home where her charming chatter and lively antics will be appreciated.",
        image: "Parrot.webp"
    },
    { 
        id: 8,
        name: "Rex", 
        type: "dog", 
        breed: "Bulldog", 
        age: "puppy", 
        size: "medium", 
        temperament: "playful",
        description: "Rex is a lovable Bulldog puppy with an irresistible goofy charm. He’s full of energy and loves chewing on his favorite toys, chasing his tail, and rolling around in the grass. His adorable wrinkles and playful personality make him the star of any room he enters. Rex is searching for a family who will embrace his silliness and shower him with affection.",
        image: "BulldogPuppy.webp"
    },
    { 
        id: 9,
        name: "Whiskers", 
        type: "cat", 
        breed: "Maine Coon", 
        age: "young", 
        size: "large", 
        temperament: "energetic",
        description: "Whiskers is a lively and adventurous Maine Coon who loves climbing, exploring, and playing hide-and-seek. His majestic size and fluffy tail make him a showstopper, while his playful nature ensures there’s never a dull moment. Whiskers is looking for a home with plenty of space to roam and a family who can match his energy.",
        image: "Maine Coon.webp"
    },
    { 
        id: 10,
        name: "Daisy", 
        type: "dog", 
        breed: "Beagle", 
        age: "puppy", 
        size: "small", 
        temperament: "friendly",
        description: "Daisy is a sweet and curious Beagle puppy who’s always sniffing out her next adventure. Her wagging tail and floppy ears are as charming as her playful personality. Daisy thrives in a family environment and loves playing with kids, exploring the outdoors, and cuddling up for a nap after a busy day.",
        image: "BeaglePuppy.webp"
    },
    { 
        id: 11,
        name: "Chirpy", 
        type: "bird", 
        breed: "Sparrow", 
        age: "adult", 
        size: "small", 
        temperament: "energetic",
        description: "Chirpy is a sprightly Sparrow with a vibrant personality and endless energy. She loves hopping around, flitting through her cage, and chirping joyful melodies. Chirpy will fill your home with life and song, making her an ideal companion for bird lovers who enjoy her cheerful spirit.",
        image: "Sparrow.webp"
    },
    { 
        id: 12,
        name: "Snowball", 
        type: "cat", 
        breed: "Ragdoll", 
        age: "senior", 
        size: "medium", 
        temperament: "friendly",
        description: "Snowball is a cuddly and affectionate Ragdoll who adores being held and brushed. Her calm demeanor makes her perfect for a home that values serenity and love. Despite her age, she still enjoys playing with feather toys and curling up on a warm lap. Snowball is looking for a forever family who can offer her love and care in her twilight years.",
        image: "Ragdoll.webp"
    },
    { 
        id: 13,
        name: "Bolt", 
        type: "dog", 
        breed: "Husky", 
        age: "young", 
        size: "large", 
        temperament: "energetic",
        description: "Bolt is a spirited and energetic Husky with a love for adventure. He thrives in outdoor activities such as running, hiking, and sledding. With his striking blue eyes and boundless energy, Bolt is the perfect match for an active family or owner who enjoys spending time exploring nature.",
        image: "youngHusky.webp"
    },
    { 
        id: 14,
        name: "Peanut", 
        type: "bird", 
        breed: "Finch", 
        age: "young", 
        size: "small", 
        temperament: "calm",
        description: "Peanut is a gentle and quiet Finch who enjoys perching and chirping softly in her cage. She thrives in a serene and tranquil environment where she can bring a touch of nature indoors. Peanut is perfect for bird enthusiasts who prefer a calm and low-maintenance companion.",
        image: "Finch.webp"
    },
    { 
        id: 15,
        name: "Fido", 
        type: "dog", 
        breed: "Poodle", 
        age: "senior", 
        size: "medium", 
        temperament: "calm",
        description: "Fido is a wise and affectionate Poodle who enjoys short walks, gentle play, and long naps. He has a gentle soul and loves being near his family, offering companionship and unconditional love. Fido is the ideal companion for someone looking for a calm and loyal friend to share peaceful moments.",
        image: "Senior-poodle.webp"
    },
];
