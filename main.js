


const cropData = {

    Rainy: {
        
        Rice: {
            image: "./rice.jpg",
            name: 'Rice',
            scientificName:'Oryza sativa',
            description: 'Rice (Oryza sativa is the most important cereal crop in the developing world and is the staple food of over half the worlds population.',
            color:'white or Brown',
            shapeSize:'Rice grains are small, elongated or oval-shaped, and have a length ranging from short to long, depending on the variety.',
            use:' It is used in a wide variety of culinary dishes, including main courses, side dishes, desserts, and snacks.',
            benefits:'Rice is a rich source of carbohydrates, providing a quick and easily digestible energy source.',
            growsin:'Rice is grown in various regions worldwide, with a primary focus on tropical and subtropical climates.',
            climate: 'It is often cultivated in areas with abundant water, and some varieties are grown in flooded fields, known as paddy fields.',
            soil: 'Well-drained, fertile soils are ideal for rice cultivation.',
        },

        Cotton: {
            image: "./cotton.jpg",
            name: 'Cotton',
            scientificName:'Gossypium spp',
            description: 'Cotton is a major cash crop with significant economic importance in the global textile industry.',
            color:'White',
            shapeSize:'Cotton plants are shrubs with broad, lobed leaves.',
            use:' Cotton is the primary source of natural fibers used in the textile industry to produce fabrics, clothing, and other textile products.',
            benefits:'Cotton is a versatile crop with various uses in industries beyond textiles.',
            growsin:'Cotton is grown in various regions around the world, particularly in warm and tropical climates.',
            climate: 'Cotton thrives in warm temperatures.',
            soil: 'Well-drained, loamy soils are ideal for cotton cultivation.',
        },

        Groundnut: {
            image: "./groundnut.jfif",
            name: 'Groundnut',
            scientificName:' Arachis hypogaea',
            description: 'Groundnut cultivation is significant for food, oil production, and as a cash crop for many farmers around the world.',
            color:'Groundnut plants have yellow flowers, and the mature pods (peanuts) can have various colors, including shades of tan, brown, or red.',
            shapeSize:'Groundnut plants are low-growing with compound leaves and produce underground pods (peanuts).',
            use:'Groundnuts are commonly consumed as a snack, used in cooking, or processed into peanut butter and oil.',
            benefits:'Groundnuts are a good source of plant-based protein.',
            growsin:'Groundnuts are grown in various regions around the world, especially in tropical and subtropical climates.',
            climate: 'Groundnuts thrive in warm temperatures',
            soil: 'Well-drained, sandy loam or loamy soils are ideal for groundnut cultivation.',
        },

        Soybean: {
            image: "./soyabin.jfif",
            name: 'Soybean',
            scientificName:'Glycine max',
            description: 'Soybean cultivation is highly significant for food security, livestock feed, and various industrial applications.',
            color:'Soybean plants have green leaves, and the mature soybean pods can range in color from yellow to brown.',
            shapeSize:'Soybean plants are typically upright with trifoliate leaves.',
            use:'Soybeans are processed into various food products, including tofu, soy milk, soy sauce, and edamame.',
            benefits:'Soybeans are an excellent plant-based source of protein, containing all essential amino acids.',
            growsin:'Soybeans are grown in various regions around the world, and they are a major crop in many countries.',
            climate: 'Soybeans thrive in warm temperatures',
            soil: 'Well-drained, fertile soils are ideal for soybean cultivation.',
        },

        Bajra: {
            image: "./bajra.jfif",
            name: 'Bajra',
            scientificName:'Pennisetum glaucum',
            description: 'Bajra is an important crop for food security in regions with challenging growing conditions.',
            color:'Bajra plants have green leaves, and the mature grains (seeds) can vary in color, including shades of white, brown, or gray.',
            shapeSize:'Bajra plants are tall grasses with slender stems and long, narrow leaves.',
            use:' Bajra is a staple food in many regions, especially in arid and semi-arid areas.',
            benefits:' Bajra is well-suited to arid and semi-arid regions, as it is more drought-tolerant compared to some other cereal crops.',
            growsin:'Bajra is grown in various regions around the world, particularly in arid and semi-arid climates.',
            climate: ' Bajra thrives in warm temperatures',
            soil: 'Bajra grows well in well-drained, sandy or sandy loam soils.',
        },

        Sugarcane: {
            image: "./sugarcane.jfif",
            name: 'Sugarcane',
            scientificName:'Saccharum officinarum',
            description: 'Sugarcane is a tall tropical plant that is similar to bamboo. Cane is tall, reaching two to six metres in height',
            color:'Sugarcane plants are predominantly green. The color refers to the vibrant green color of the stalks.',
            shapeSize:'Sugarcane stalks are cylindrical, fibrous, and can vary in size.',
            use:' The primary use of sugarcane is for the extraction of sugar. The juice obtained from crushing the stalks contains sucrose, which is processed into various forms of sugar.',
            benefits:'Sugarcane is a major cash crop with significant economic importance worldwide, contributing to the sugar and biofuel industries.',
            growsin:'Sugarcane is primarily grown in tropical and subtropical regions around the world.',
            climate: 'Sugarcane thrives in warm to hot climates.',
            soil: 'Sugarcane prefers well-drained, fertile soils.',
        },


        //------------------------------summer---------------------------------
    },

    Summer: {
        Watermelon: {
            image: "./watermelon.jfif",
            name: 'Watermelon',
            scientificName:'Citrullus lanatus',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'Dark Green',
            shapeSize:'Watermelons are generally round or oblong in shape. Sizes can vary from small, personal-sized melons to large, picnic-sized melons.',
            use:'Watermelons are primarily consumed as a refreshing fruit, especially during hot weather.',
            benefits:'Watermelons have a high water content, aiding in hydration.',
            growsin:'Watermelons are grown in many countries worldwide.',
            climate: 'Watermelons thrive in warm to hot temperatures.',
            soil: 'Well-drained sandy loam or loamy soil is ideal.',
        },

        Tomato: {
            image: "./tomato.jfif",
            name: 'Tomato',
            scientificName:'Solanum lycopersicum',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'Red',
            shapeSize:'Tomatoes can have different shapes, including round, oval, plum-shaped, and cherry-sized. Sizes range from small cherry tomatoes to large beefsteak varieties.',
            use:'Tomatoes are a versatile ingredient used in salads, sauces, soups, and a wide variety of cooked dishes.',
            benefits:'Tomatoes contain lycopene, a powerful antioxidant associated with various health benefits.',
            growsin:'Tomatoes are grown in many countries globally and are a popular home garden vegetable.',
            climate: 'Tomatoes thrive in warm temperatures.',
            soil: 'Well-draining soil rich in organic matter is ideal.',
        },

        Potato: {
            image: "./potato.jfif",
            name: 'Potato',
            scientificName:'Solanum tuberosum',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'skin and flesh colors',
            shapeSize:'Potatoes can have different shapes, including round, oval, and elongated. Sizes range from small, fingerling potatoes to larger, standard-sized varieties.',
            use:'Potatoes are a versatile food staple and are used in a variety of dishes.',
            benefits:'Potatoes are rich in carbohydrates, dietary fiber, and vitamin C.',
            growsin:'Potatoes are grown in many countries worldwide and are a major food crop.',
            climate: 'Potatoes thrive in cool to temperate climates.',
            soil: 'Well-drained, loose, and fertile soil is ideal for potatoes.',
        },

        Cucumber: {
            image: "./cucumber.jfif",
            name: 'Cucumber',
            scientificName:'Cucumis sativus',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'Green',
            shapeSize:'Cucumbers are generally cylindrical in shape with a length ranging from a few inches to over a foot, depending on the variety.',
            use:'Cucumbers are commonly used in salads, sandwiches, and pickles.',
            benefits:'Cucumbers have a high water content, aiding in hydration.',
            growsin:'Cucumbers are grown in many countries worldwide and are a common vegetable in home gardens.',
            climate: 'Cucumbers thrive in warm temperatures.',
            soil: 'Well-drained, fertile soil with organic matter is ideal for cucumbers.',
        },

        Peanut: {
            image: "./peanut.jfif",
            name: 'Peanut',
            scientificName:'Arachis hypogaea',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'Peanuts have a tan or brownish outer shell',
            shapeSize:'Peanuts are legumes that develop underground. They have an outer shell that protects the two or three seeds (kernels) inside.',
            use:'Peanuts are consumed in various forms, including roasted, boiled, or as peanut butter.',
            benefits:'Peanuts are a good source of plant-based protein.',
            growsin:'Peanuts are grown in many countries, especially in warm climates.',
            climate: 'Peanuts thrive in warm temperatures.',
            soil: 'Well-drained, sandy-loam or loamy soil is ideal for peanuts.',
        },

        Corn: {
            image: "./corn.jfif",
            name: 'Corn',
            scientificName:'Zea mays',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'Corn plants have green leaves',
            shapeSize:'Corn plants are tall grasses with a central stalk (stem) and long, narrow leaves.',
            use:'Corn is a staple food and is consumed in various forms, including fresh, cooked, or processed into cornmeal, flour, and corn syrup.',
            benefits:'Corn is a good source of carbohydrates, fiber, vitamins (such as B vitamins), and minerals (including magnesium and phosphorus)',
            growsin:'Corn is grown in many countries globally and is a major cereal crop.',
            climate: 'Corn thrives in warm to hot temperatures.',
            soil: 'Corn prefers well-drained, fertile soil with a slightly acidic to neutral pH (around 6.0-7.0).',
        },

        Pumpkin: {
            image: "./pumpkin.jfif",
            name: 'Pumpkin',
            scientificName:'Cucurbita pepo',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'Pumpkins come in various colors, including orange, yellow, green, and even white or red, depending on the variety.',
            shapeSize:'Pumpkins are generally round to oblong in shape.',
            use:'Pumpkins are commonly used in cooking, baking, and as ingredients in dishes such as pumpkin pie, soups, and stews.',
            benefits:'Pumpkins are a good source of vitamins, particularly vitamin A, as well as fiber and minerals.',
            growsin:'Pumpkins are grown in many countries worldwide and are often associated with autumn and harvest festivals.',
            climate: 'Pumpkins thrive in warm temperatures.',
            soil: 'Well-drained, fertile soil is ideal for pumpkins.',
        },

        Okra: {
            image: "./okra.jfif",
            name: 'Okra ( Bhindi )',
            scientificName:'Abelmoschus esculentus',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'Green',
            shapeSize:'Okra pods are typically long and slender, resembling fingers or pods.',
            use:'Okra is used in various cuisines, including soups, stews, curries, and stir-fries. It can be cooked whole or sliced.',
            benefits:' Okra is low in calories and rich in vitamins and minerals, including vitamin C, vitamin K, folate, and magnesium.',
            growsin:'Okra is grown in many countries with warm climates, including tropical and subtropical regions.',
            climate: 'Okra thrives in warm temperatures and requires plenty of sunlight for optimal growth.',
            soil: 'Well-drained, fertile soil with a pH level around 6.5 to 7.0 is ideal for okra.',
        },

        Eggplant: {
            image: "./eggplant.jfif",
            name: 'Eggplant',
            scientificName:'Solanum melongena',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'Purple',
            shapeSize:'Eggplants can have different shapes, including oval, elongated, or round.',
            use:'Eggplants are used in various culinary dishes worldwide. They can be grilled, roasted, fried, baked, or used in stews, curries, and casseroles.',
            benefits:'Eggplants are low in calories, making them a healthy addition to meals.',
            growsin:'Eggplants are grown in many countries and are a warm-season vegetable.',
            climate: 'Eggplants thrive in warm to hot temperatures.',
            soil: 'Well-drained, fertile soil with organic matter is ideal for eggplants.',
        },

        BellPepper: {
            image: "./bell.jfif",
            name: 'Bell Pepper',
            scientificName:'Capsicum annuum',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'Green',
            shapeSize:'Bell peppers are typically blocky or bell-shaped with three or four lobes. Sizes vary, with smaller varieties',
            use:'Bell peppers are a versatile vegetable used in various culinary dishes. They can be eaten raw, sliced in salads, stuffed, grilled, roasted, or used in stir-fries and casseroles.',
            benefits:'Bell peppers are rich in vitamins and minerals, especially vitamin C, vitamin A, and potassium.',
            growsin:'Bell peppers are grown in many countries and are a popular home garden crop.',
            climate: 'Bell peppers thrive in warm to hot temperatures.',
            soil: 'Well-drained, fertile soil with organic matter is ideal for bell peppers.',
        },


        //---------------winter-------------------
    },

    Winter: {
        Carrot: {
            image: "./carrot.jpg",
            name: 'Carrot',
            scientificName:'Daucus carota',
            description: 'Carrots grown in winters are extremely sweet, so much that they’re often called ‘candy carrots.’',
            color:'Orange',
            shapeSize:'Carrots vary in size and shape, from shorter and round to long and tapered.',
            use:'Commonly used in salads, soups, stews, and as a side dish.',
            benefits:'Carrots are known for promoting eye health, boosting the immune system, and supporting skin health.',
            growsin:'Major producers include China, Russia, the United States',
            climate: 'Carrots thrive in cool to temperate climates',
            soil: 'Well-drained, loose, and sandy soil.',

        },

        Onion: {
            image: "./onion.jpg",
            name: 'Onions',
            scientificName:'Allium cepa',
            description: 'Onions are easy to grow in winters. All you have to do is plant them, and they’ll look after themselves during the winter season.',
            color:'Red, White',
            shapeSize:'The overall size of the bulb can vary depending on the variety.',
            use:'Medicinal Uses: Garlic has been traditionally used for its potential health benefits, including anti-inflammatory and antimicrobial properties.',
            benefits:'Garlic is believed to have various health benefits, including cardiovascular support, immune system enhancement, and potential anti-cancer properties.',
            growsin:'Major producers include China, India, South Korea, and Russia.',
            climate: 'They thrive in temperate climates.',
            soil: 'Well-drained, fertile soil is preferred.',

        },

        Garlic: {
            image: "./garlic.jpg",
            name: 'Garlic',
            scientificName:'Allium sativum',
            description: 'Garlic is a super-easy crop to grow. It is generally sowed during late fall and is harvested by the mid of the summer season.',
            color:'White, but there purple varieties',
            shapeSize:'Carrots vary in size and shape, from shorter and round to long and tapered.',
            use:'Commonly used in salads, soups, stews, and as a side dish.',
            benefits:'Carrots are known for promoting eye health, boosting the immune system, and supporting skin health.',
            growsin:'Major producers include China, Russia, the United States',
            climate: 'Garlic (Allium sativum) is also a cool-season crop',
            soil: 'Well-drained, loose, and sandy soil.',

        },

        Peas: {
            image: "./peas.jpg",
            name: 'Peas',
            scientificName:'Pisum sativum',
            description: 'Peas should be planted in your garden by mid of August. The peas will sustain the winter temperature well with the right kind of protection.',
            color:'Green',
            shapeSize:'Peas are typically small, spherical to slightly oval in shape.',
            use:'Peas are a versatile vegetable used in a wide range of culinary dishes, including soups, salads, stir-fries, and side dishes.',
            benefits:'Peas are a good source of vitamins (such as vitamin C and folate), minerals (including iron and potassium), and dietary fiber.',
            growsin:'Peas can be grown in various regions globally.',
            climate: 'Peas prefer cooler temperatures and are often grown in the spring or fall.',
            soil: 'Well-drained, loamy soil is ideal for pea cultivation.',

        },

        Beet: {
            image: "./beet.jpg",
            name: 'Beet',
            scientificName:'Beta vulgaris',
            description: 'Beets should be planted at least 6 to 8 weeks before the first frost is expected. They’re harvested when the baby greens mature into vitamin-rich, delicious roots.',
            color:'Red',
            shapeSize:'Beets are typically round or globular in shape. Size varies, but they are generally around 2 to 3 inches in diameter.',
            use:'Beets are commonly used in salads, pickles, and as a cooked vegetable. ',
            benefits:'Beets are a good source of vitamins (C and folate), minerals (such as potassium and manganese), and dietary fiber.',
            growsin:'Beets are grown in various regions globally. They are suitable for both home gardens and commercial cultivation.',
            climate: 'Beets are cool-season crops.',
            soil: 'Well-Drained Soil: Beets prefer well-drained, loose soil.',

        },

        Spinach: {
            image: "./spinach.jpg",
            name: 'Spinach',
            scientificName:'Spinacia oleracea',
            description: 'Spinach thrives in winters. These seeds are sowed in late September, and the beds should be covered by polyethylene mini hoop tunnels when the weather starts turning cold.',
            color:'Dark Green',
            shapeSize:'Spinach leaves are generally broad, flat, and have a rounded or spade-like shape. Leaf size can vary but is typically small to medium-sized.',
            use:'Commonly used in smoothies and juices for its nutritional content.',
            benefits:'Rich in essential nutrients, including vitamins A, C, and K, as well as minerals like iron and calcium.',
            growsin:'Spinach can be grown in gardens, containers, or raised beds.',
            climate: 'Spinach is a cool-season crop and thrives in cooler temperatures.',
            soil: 'Well-drained, fertile soil is ideal for spinach.',

        },

        Cabbage: {
            image: "./cabbage.jpg",
            name: 'Cabbage',
            scientificName:'Brassica oleracea var. capitata',
            description: 'Another winter garden crop that you can consider adding to your garden is cabbage. It comes in multiple varieties for you to choose from.',
            color:'Green',
            shapeSize:'Cabbage typically has a compact, round or oval shape. Size can vary, but cabbages are generally medium to large in size.',
            use:'Cabbage is commonly used in culinary applications, both raw and cooked.',
            benefits:'Cabbage is low in calories and high in nutrients. It is a good source of vitamins, especially vitamin C and vitamin K.',
            growsin:'Cabbage is grown in various regions globally, depending on the climate',
            climate: 'Cabbage prefers cool weather and can tolerate frost.',
            soil: 'Well-drained soil with good fertility is ideal.',

        },

        Kale: {
            image: "./kale.jpg",
            name: 'Kale',
            scientificName:'Brassica oleracea var. acephala',
            description: 'A winter garden is incomplete without kale. Kale is a hardy winter crop that will survive through the winter with ease well.',
            color:'Dark Green',
            shapeSize:'Mature leaves can vary in size but are generally around 6 to 12 inches in length.',
            use:'Culinary Uses: Kale is a versatile leafy green used in salads, smoothies, stir-fries, soups, and as a side dish.',
            benefits:'Kale is a good source of dietary fiber, promoting digestive health.',
            growsin:'Major producers include China, Russia, the United States',
            climate: 'Kale can be grown in various regions and climates.',
            soil: 'Well-drained soil is essential for kale.',

        },

        Cauliflower: {
            image: "./cauliflawer.jpg",
            name: 'Cauliflower',
            scientificName:'Brassica oleracea var. botrytis',
            description: 'Growing cauliflower can be challenging, and you should only try planting it in your garden if you’ve prior winter gardening experience.',
            color:'Cauliflower heads can be white, green',
            shapeSize:'Shapes can vary but are generally a rounded mass of undeveloped flower buds.',
            use:'Cauliflower is a versatile vegetable used in various culinary dishes, such as stir-fries, curries, soups, and as a low-carb substitute for rice or mashed potatoes.',
            benefits:'Cauliflower is rich in vitamins (C, K, B6), fiber, and antioxidants. It is also low in calories.',
            growsin:'Cauliflower can be grown in many regions with cool temperatures.',
            climate: 'Cauliflower prefers a cool climate for optimal growth.',
            soil: 'Well-drained, fertile soil with a pH between 6.0 and 7.0 is suitable.',

        },

        Arugula: {
            image: "./arugula.jpg",
            name: 'Arugula',
            scientificName:'Eruca sativa',
            description: 'Arugula is one of the best winter crops that you can grow in your garden. You can harvest two arugula varieties – garden and wild.',
            color:'Dark Green',
            shapeSize:'The leaves of arugula are lobed and can vary in size, but they are generally smaller and more deeply cut than traditional lettuce leaves.',
            use:'Arugula is commonly used in salads, adding a peppery and slightly bitter flavor.',
            benefits:'Arugula is rich in vitamins and minerals, including vitamin K, vitamin C, and folate.',
            growsin:'Arugula can be grown in various regions with suitable growing conditions.',
            climate: 'Arugula prefers cool temperatures.',
            soil: 'Arugula prefers well-drained, fertile soil.',

        },

    },
};

function updateCropOptions() {
    const seasonSelect = document.getElementById('seasonSelect');
    const cropSelect = document.getElementById('cropSelect');
    const selectedSeason = seasonSelect.value;

    // Clear previous crop options
    cropSelect.innerHTML = '<option value="" disabled selected>Select a crop</option>';

    if (selectedSeason && cropData[selectedSeason]) {
        const crops = cropData[selectedSeason];


        for (const crop in crops) {
            const option = document.createElement('option');
            option.value = crop;
            option.text = crops[crop].name;
            cropSelect.add(option);
        }
    }

   
    showCropDetails();
}

function showCropDetails() {

    const selectedSeason = document.getElementById("seasonSelect").value;
    const selectedCrop = document.getElementById("cropSelect").value;


    const cropDetails = cropData[selectedSeason][selectedCrop];

    document.getElementById("cropDescription").textContent = `𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻:: ${cropDetails.description}`;
    document.getElementById("cropName").textContent = cropDetails.name;
    document.getElementById("cropClimate").textContent = `𝗖𝗹𝗶𝗺𝗮𝘁𝗲:: ${cropDetails.climate}`;
    document.getElementById("cropSoil"). textContent = `𝗦𝗼𝗶𝗹:: ${cropDetails.soil}`;
    document.getElementById("cropScientificName"). textContent = `𝗦𝗰𝗶𝗲𝗻𝘁𝗶𝗳𝗶𝗰 𝗻𝗮𝗺𝗲:: ${cropDetails.scientificName}`;
    document.getElementById("cropColor"). textContent = `𝗖𝗼𝗹𝗼𝗿:: ${cropDetails.color}`;
    document.getElementById("cropShapesize"). textContent = `𝗦𝗵𝗮𝗽𝗲 - 𝘀𝗶𝘇𝗲:: ${cropDetails.shapeSize}`;
    document.getElementById("cropUse"). textContent = `𝗨𝘀𝗲:: ${cropDetails.use}`;
    document.getElementById("cropBenefits"). textContent = `𝗕𝗲𝗻𝗲𝗳𝗶𝘁𝘀:: ${cropDetails.benefits}`;
    document.getElementById("cropGrowsin"). textContent = `𝗚𝗿𝗼𝘄𝘀 - 𝗶𝗻:: ${cropDetails.growsin}`;
    document.getElementById("cropImage").src = cropDetails.image;
}
updateCropOptions();
