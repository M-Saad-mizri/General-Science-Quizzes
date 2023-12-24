var logo = document.querySelector("#logoId");
var nightBtn = document.querySelector("#night");
function showgs4() {
  logo.innerHTML = `<div id="logoId" onclick="location.reload()" class="logo">G. Science Class 4 <span style = "color: white; margin-left: 20px;  padding: 2px 5px; border: 1px solid white; border-radius: 5px; font-size: 20px; cursor: pointer">X</span></div>`;
  var gs4 = document.getElementById("gs4");
  if (gs4.style.display === "none") {
    gs4.style.display = "block";
    mainWelcomeScreen.style.display = "none";
    gs5.style.display = "none";
    gs6.style.display = "none";
  } else {
    mainWelcomeScreen.style.display = "flex";
    gs4.style.display = "none";
  }

  closeMenu();
}
function showgs5() {
  logo.innerHTML = `<div id="logoId" onclick="location.reload()" class="logo">G. Science Class 5 <span style = "color: white; margin-left: 20px;  padding: 2px 5px; border: 1px solid white; border-radius: 5px; font-size: 20px; cursor: pointer">X</span></div>`;
  var gs5 = document.getElementById("gs5");
  closeMenu();
  if (gs5.style.display === "none") {
    gs5.style.display = "block";
    mainWelcomeScreen.style.display = "none";
    gs4.style.display = "none";
    gs6.style.display = "none";
  } else {
    mainWelcomeScreen.style.display = "flex";
    gs5.style.display = "none";
  }
}
function showgs6() {
  logo.innerHTML = `<div id="logoId" onclick="location.reload()" class="logo">G. Science Class 6 <span style = "color: white; margin-left: 20px;  padding: 2px 5px; border: 1px solid white; border-radius: 5px; font-size: 20px; cursor: pointer">X</span></div>`;
  var gs6 = document.getElementById("gs6");
  closeMenu();
  if (gs6.style.display === "none") {
    gs6.style.display = "block";
    mainWelcomeScreen.style.display = "none";
    gs5.style.display = "none";
    gs4.style.display = "none";
  } else {
    mainWelcomeScreen.style.display = "flex";
    gs6.style.display = "none";
  }
}
var welcomeNote = document.getElementById("mainnn");
welcomeNote.innerHTML = `<b class = "welcomeHeading">Welcome, Science Explorers!</b> 🌍✨<br><br>

Step into the fascinating world of General Science with our interactive quiz! Get ready to embark on a journey of curiosity, discovery, and knowledge. Whether you're a seasoned scientist or just starting your exploration, this quiz is designed for you.<br><br>

Let the quest for wisdom and scientific wonders begin! Best of luck, and may your curiosity lead you to new heights of understanding.<br><br>

Happy quizzing!<br>
<i>Engr. Muhammad Saad</i></>`;
// window.onload = function () {
//   // showgs4();
//   // showgs5();
//   // showgs6();
//   showlogoOriginal()
//   showAllContent()
// };

// function showlogoOriginal() {
//   logo.innerText = 'General Science'
// }
// Data for GS6

const quizDatags6ch1 = [
  {
    question: `Nerve cells transmit messages in the body. Skin cells cover the body and make a protective layer. What is the function of muscle cells?`,
    a: `Produce movement in the body`,
    b: `Transport oxygen in the whole body`,
    c: `Kill disease-causing germs`,
    d: `Provide support to the body`,
    correct: "a",
  },

  {
    question: `What is the function of red blood cells?`,
    a: `Transmit messages in the body`,
    b: `Cover the body and make a protective layer`,
    c: `Produce movement in the body`,
    d: `Transport oxygen in the whole body`,
    correct: "d",
  },

  {
    question: `What is the function of white blood cells?`,
    a: `Produce movement in the body`,
    b: `Transport oxygen in the whole body`,
    c: `Kill disease-causing germs`,
    d: `Provide support to the body`,
    correct: "c",
  },

  {
    question: `How many cells are there in the human body approximately?`,
    a: `5 trillion`,
    b: `10 trillion`,
    c: `25 trillion`,
    d: `50 trillion`,
    correct: "d",
  },

  {
    question: `What is a cell?`,
    a: `A microscopic organism`,
    b: `A unit of the body's structure and function`,
    c: `A type of tissue`,
    d: `A small organism with a nucleus`,
    correct: "b",
  },

  {
    question: `What is a microscope?`,
    a: `A device used to view cells`,
    b: `A type of cell`,
    c: `A part of the cell`,
    d: `A type of tissue`,
    correct: "a",
  },

  {
    question: `What is the function of a light microscope?`,
    a: `Magnify the image 500,000 times the size of the object`,
    b: `Produce images using electrons`,
    c: `Use light to magnify and view objects`,
    d: `Produce 3D images of cells`,
    correct: "c",
  },

  {
    question: `What is the function of a compound microscope?`,
    a: `Magnify the image 500,000 times the size of the object`,
    b: `Produce images using electrons`,
    c: `Use light to magnify and view objects`,
    d: `Produce 3D images of cells`,
    correct: "c",
  },

  {
    question: `What does an electron microscope do?`,
    a: `Magnify the image 500,000 times the size of the object`,
    b: `Produce images using electrons`,
    c: `Use light to magnify and view objects`,
    d: `Produce 3D images of cells`,
    correct: "b",
  },

  {
    question: `What is an animal cell?`,
    a: `A cell found in animals`,
    b: `A type of plant cell`,
    c: `A type of bacteria`,
    d: `A type of virus`,
    correct: "a",
  },

  {
    question: `What is a plant cell?`,
    a: `A cell found in plants`,
    b: `A type of animal cell`,
    c: `A type of bacteria`,
    d: `A type of virus`,
    correct: "a",
  },

  {
    question: `What is the cell wall?`,
    a: `A protective layer around the cell`,
    b: `The control center of the cell`,
    c: `

The outer covering of the nucleus`,
    d: `The site of protein synthesis`,
    correct: "a",
  },

  {
    question: `What is the cell membrane?`,
    a: `A protective layer around the cell`,
    b: `The control center of the cell`,
    c: `The outer covering of the nucleus`,
    d: `The site of protein synthesis`,
    correct: "a",
  },

  {
    question: `What is the nucleus?`,
    a: `A protective layer around the cell`,
    b: `The control center of the cell`,
    c: `The outer covering of the nucleus`,
    d: `The site of protein synthesis`,
    correct: "b",
  },

  {
    question: `What is cytoplasm?`,
    a: `A protective layer around the cell`,
    b: `The control center of the cell`,
    c: `The outer covering of the nucleus`,
    d: `The site of protein synthesis`,
    correct: "d",
  },

  {
    question: `What is a vacuole?`,
    a: `A protective layer around the cell`,
    b: `The control center of the cell`,
    c: `A fluid-filled sac in the cell`,
    d: `The site of protein synthesis`,
    correct: "c",
  },

  {
    question: `What is mitochondria?`,
    a: `A protective layer around the cell`,
    b: `The control center of the cell`,
    c: `A fluid-filled sac in the cell`,
    d: `The powerhouse of the cell`,
    correct: "d",
  },

  {
    question: `What is endoplasmic reticulum?`,
    a: `A protective layer around the cell`,
    b: `The control center of the cell`,
    c: `A network of membranes in the cell`,
    d: `The powerhouse of the cell`,
    correct: "c",
  },

  {
    question: `What are ribosomes?`,
    a: `A protective layer around the cell`,
    b: `The control center of the cell`,
    c: `A network of membranes in the cell`,
    d: `The site of protein synthesis`,
    correct: "d",
  },

  {
    question: `What are centrioles?`,
    a: `A protective layer around the cell`,
    b: `The control center of the cell`,
    c: `Cylindrical structures involved in cell division`,
    d: `The site of protein synthesis`,
    correct: "c",
  },

  {
    question: `What is chloroplast?`,
    a: `A protective layer around the cell`,
    b: `The control center of the cell`,
    c: `A network of membranes in the cell`,
    d: `An organelle involved in photosynthesis`,
    correct: "d",
  },

  {
    question: `What are unicellular organisms?`,
    a: `Organisms made up of multiple cells`,
    b: `Organisms made up of a single cell`,
    c: `Organisms made up of animal cells`,
    d: `Organisms made up of plant cells`,
    correct: "b",
  },

  {
    question: `What are multicellular organisms?`,
    a: `Organisms made up of multiple cells`,
    b: `Organisms made up of a single cell`,
    c: `Organisms made up of animal cells`,
    d: `Organisms made up of plant cells`,
    correct: "a",
  },

  {
    question: `What are tissues?`,
    a: `Protective layers around cells`,
    b: `The control centers of cells`,
    c: `Groups of cells performing similar

functions`,
    d: `Sites of protein synthesis`,
    correct: "c",
  },

  {
    question: `What are plant tissues?`,
    a: `Tissues found in plants`,
    b: `Tissues found in animals`,
    c: `Tissues found in bacteria`,
    d: `Tissues found in viruses`,
    correct: "a",
  },

  {
    question: `What is xylem tissue?`,
    a: `A type of plant tissue involved in water transport`,
    b: `A type of animal tissue involved in oxygen transport`,
    c: `A type of bacteria tissue involved in nutrient absorption`,
    d: `A type of virus tissue involved in cell replication`,
    correct: "a",
  },

  {
    question: `What is blood tissue?`,
    a: `A type of plant tissue involved in water transport`,
    b: `A type of animal tissue involved in oxygen transport`,
    c: `A type of bacteria tissue involved in nutrient absorption`,
    d: `A type of virus tissue involved in cell replication`,
    correct: "b",
  },

  {
    question: `What is nerve tissue?`,
    a: `A type of plant tissue involved in water transport`,
    b: `A type of animal tissue involved in oxygen transport`,
    c: `A type of bacteria tissue involved in nutrient absorption`,
    d: `A type of tissue involved in transmitting electrical signals`,
    correct: "d",
  },

  {
    question: `What is photosynthetic tissue?`,
    a: `A type of plant tissue involved in water transport`,
    b: `A type of animal tissue involved in oxygen transport`,
    c: `A type of tissue involved in photosynthesis`,
    d: `A type of tissue involved in nutrient absorption`,
    correct: "c",
  },

  {
    question: `What are organ systems?`,
    a: `Individual organs in the body`,
    b: `Groups of tissues working together`,
    c: `A type of bacteria`,
    d: `A type of virus`,
    correct: "b",
  },

  {
    question: `What is the root system?`,
    a: `The system responsible for oxygen transport`,
    b: `The system responsible for nutrient absorption`,
    c: `The system responsible for photosynthesis`,
    d: `The system responsible for water and mineral uptake`,
    correct: "d",
  },

  {
    question: `What is the shoot system?`,
    a: `The system responsible for oxygen transport`,
    b: `The system responsible for nutrient absorption`,
    c: `The system responsible for photosynthesis`,
    d: `The system responsible for water and mineral uptake`,
    correct: "c",
  },

  {
    question: `What is the human digestive system?`,
    a: `The system responsible for oxygen transport`,
    b: `The system responsible for nutrient absorption`,
    c: `The system responsible for photosynthesis`,
    d: `The system responsible for food digestion and absorption`,
    correct: "d",
  },

  {
    question: `What is the respiratory system?`,
    a: `The system responsible for oxygen transport`,
    b: `The system responsible for nutrient absorption`,
    c: `The system responsible for photosynthesis`,
    d: `The system responsible for water and mineral uptake`,
    correct: "a",
  },

  {
    question: `What is the blood circulatory system?`,
    a: `The system responsible for oxygen transport`,
    b: `The system responsible for nutrient absorption`,
    c: `The system responsible for photosynthesis`,
    d: `The system responsible for water and mineral uptake`,
    correct: "a",
  },

  {
    question: `What is the excretory system?`,
    a: `The system responsible for oxygen transport`,
    b: `The system responsible for waste elimination`,
    c: `The system responsible for photosynthesis`,
    d: `The system responsible for water and mineral uptake`,
    correct: "b",
  },

  {
    question: `What is the nervous system?`,
    a: `The system responsible for oxygen transport`,
    b: `The system responsible for nutrient absorption`,
    c: `The system responsible for nerve tissue production`,
    d: `The system responsible for transmitting electrical signals`,
    correct: "d",
  },
];

const quizDatags6ch2 = [
  {
    question:
      "Nerve cells transmit messages in the body. Skin cells cover the body and make a protective layer. What is the function of muscle cells?",
    a: "Produce movement in the body",
    b: "Transport oxygen in the whole body",
    c: "Kill disease-causing germs",
    d: "Provide support to the body",
    correct: "a",
  },
  {
    question: "What is the function of sense organs?",
    a: "Produce movement in the body",
    b: "Transport oxygen in the whole body",
    c: "Receive and interpret sensory information",
    d: "Provide support to the body",
    correct: "c",
  },
  {
    question: "What is the main function of olfactory cells?",
    a: "Produce movement in the body",
    b: "Transport oxygen in the whole body",
    c: "Detect and perceive smells",
    d: "Provide support to the body",
    correct: "c",
  },
  {
    question: "Which animals are known for having a sharp sense of smell?",
    a: "Dogs",
    b: "Cats",
    c: "Birds",
    d: "Fish",
    correct: "a",
  },
  {
    question:
      "How many receptors does the human nose have to distinguish smells?",
    a: "100",
    b: "500",
    c: "1000",
    d: "5000",
    correct: "c",
  },
  {
    question: "Where are taste buds located on the tongue?",
    a: "Front portion",
    b: "Middle portion",
    c: "Back portion",
    d: "All over the tongue",
    correct: "d",
  },
  {
    question: "What is the function of the auditory nerve?",
    a: "Produce movement in the body",
    b: "Transport oxygen in the whole body",
    c: "Carry sound signals to the brain",
    d: "Provide support to the body",
    correct: "c",
  },
  {
    question: "What is the function of the stirrup bone in the ear?",
    a: "Produce movement in the body",
    b: "Transport oxygen in the whole body",
    c: "Amplify sound vibrations",
    d: "Provide support to the body",
    correct: "c",
  },
  {
    question: "What is the function of the cochlea in the ear?",
    a: "Produce movement in the body",
    b: "Transport oxygen in the whole body",
    c: "Convert sound vibrations into electrical signals",
    d: "Provide support to the body",
    correct: "c",
  },
  {
    question: "Which animals can move their ears to receive sound waves?",
    a: "Horses",
    b: "Cows",
    c: "Sheep",
    d: "Lions",
    correct: "a",
  },
  {
    question: "What is the function of the iris in the eye?",
    a: "Produce movement in the body",
    b: "Transport oxygen in the whole body",
    c: "Regulate the size of the pupil",
    d: "Provide support to the body",
    correct: "c",
  },
  {
    question: "What is the function of the cornea in the eye?",
    a: "Produce movement in the body",
    b: "Transport oxygen in the whole body",
    c: "Help focus light onto the retina",
    d: "Provide support to the body",
    correct: "c",
  },
  {
    question: "What is the function of the optic nerve?",
    a: "Produce movement in the body",
    b: "Transport oxygen in the whole body",
    c: "Transmit visual information to the brain",
    d: "Provide support to the body",
    correct: "c",
  },
  {
    question: "What happens to the pupil in intense light?",
    a: "It contracts",
    b: "It expands",
    c: "It remains the same",
    d: "It vibrates",
    correct: "a",
  },
  {
    question: "What happens to the pupil in dim light?",
    a: "It contracts",
    b: "It expands",
    c: "It remains the same",
    d: "It vibrates",
    correct: "b",
  },
  {
    question:
      "What prevents the passage of dust into the body through the nose?",
    a: "Mucus",
    b: "Olfactory cells",
    c: "Taste buds",
    d: "Epidermis",
    correct: "a",
  },
  {
    question: "Which sense is not detected by the skin?",
    a: "Touch",
    b: "Temperature",
    c: "Pain",
    d: "Smell",
    correct: "d",
  },
  {
    question: "How are sense organs connected to the brain?",
    a: "Through muscles",
    b: "Through veins",
    c: "Through nerves",
    d: "Through bones",
    correct: "c",
  },
  {
    question: "What are the three layers of the skin?",
    a: "Epidermis, dermis, hypodermis",
    b: "Dermis, hypodermis, epidermis",
    c: "Hypodermis, epidermis, dermis",
    d: "Dermis, epidermis, hypodermis",
    correct: "a",
  },
];
const quizDatags6ch3 = [
  {
    question:
      "What is the function of the outer layer of the leaf called epidermis?",
    a: "Absorb sunlight for energy production",
    b: "Transport water from roots to leaves",
    c: "Protect the internal parts of the leaf",
    d: "Produce glucose during photosynthesis",
    correct: "c",
  },
  {
    question: "What is the function of stomata in plants?",
    a: "exchange of gases (oxygen and carbon dioxide)",
    b: "Produce food through photosynthesis",
    c: "Anchor the plant to the ground",
    d: "Absorb water and nutrients from the soil",
    correct: "a",
  },
  {
    question: "What is the main function of mesophyll in a leaf?",
    a: "Transport water and nutrients",
    b: "Produce oxygen during photosynthesis",
    c: "Store excess glucose",
    d: "Facilitate gas exchange for photosynthesis",
    correct: "d",
  },
  {
    question: "What is the role of chloroplasts in photosynthesis?",
    a: "Absorb carbon dioxide",
    b: "Produce glucose",
    c: "Release oxygen",
    d: "Capture sunlight",
    correct: "d",
  },
  {
    question: "What is the purpose of vascular bundles in a leaf?",
    a: "Absorb water from the soil",
    b: "Transport sugars produced during photosynthesis",
    c: "Store starch for later use",
    d: "Regulate gas exchange through stomata",
    correct: "b",
  },
  {
    question:
      "What is the process by which plants convert sunlight into usable energy?",
    a: "Respiration",
    b: "Germination",
    c: "Transpiration",
    d: "Photosynthesis",
    correct: "d",
  },
  {
    question: "What is the cause of the green color in plants?",
    a: "Chloroplasts",
    b: "Carotenoids",
    c: "Stomata",
    d: "Chlorophyll",
    correct: "d",
  },
  {
    question: "During photosynthesis, what gas is produced along with glucose?",
    a: "Carbon dioxide",
    b: "Nitrogen",
    c: "Oxygen",
    d: "Methane",
    correct: "c",
  },
  {
    question: "What are the factors that affect photosynthesis?",
    a: "Temperature and humidity",
    b: "Wind speed and pressure",
    c: "Soil fertility and pH",
    d: "Light intensity and availability",
    correct: "d",
  },
  {
    question: "In which gas do plants primarily carry out photosynthesis?",
    a: "Oxygen",
    b: "Carbon dioxide",
    c: "Nitrogen",
    d: "Hydrogen",
    correct: "b",
  },
  {
    question:
      "During respiration, which substance reacts with glucose to produce energy?",
    a: "Oxygen",
    b: "Carbon dioxide",
    c: "Water",
    d: "Nitrogen",
    correct: "a",
  },
  {
    question: "What is the cause of the green color in plants?",
    a: "Chloroplasts",
    b: "Carotenoids",
    c: "Stomata",
    d: "Chlorophyll",
    correct: "d",
  },
  {
    question: "Which tissue transports water from roots to leaves in plants?",
    a: "Xylem",
    b: "Phloem",
    c: "Meristem",
    d: "Cortex",
    correct: "a",
  },
  {
    question:
      "What is the process by which nerve cells transmit messages in the body?",
    a: "Respiration",
    b: "Photosynthesis",
    c: "Osmosis",
    d: "Electrical impulses",
    correct: "d",
  },
  {
    question: "What is the main function of skin cells in the bodyy?",
    a: "Produce hormones",
    b: "Generate heat",
    c: "Cover and protect the body",
    d: "Absorb nutrients from the environment",
    correct: "c",
  },
  {
    question: "What is the function of muscle cells in the body?",
    a: "Produce movement",
    b: "Transport oxygen",
    c: "Regulate body temperature",
    d: "Generate electricity",
    correct: "a",
  },
  {
    question:
      "Which part of the leaf is responsible for absorbing maximum light?",
    a: "Epidermis",
    b: "Mesophyll",
    c: "Vascular bundles",
    d: "Stomata",
    correct: "b",
  },
  {
    question: "What is the primary product of photosynthesis?",
    a: "Oxygen",
    b: "Glucose",
    c: "Water",
    d: "Carbon dioxide",
    correct: "b",
  },
  {
    question: "During photosynthesis, where is oxygen released?",
    a: "Mesophyll",
    b: "Vascular bundles",
    c: "Epidermis",
    d: "Stomata",
    correct: "d",
  },
  {
    question: "What is the meaning of the word 'photosynthesis'?",
    a: "Light absorption",
    b: "Sugar production",
    c: "Energy conversion",
    d: "Light synthesis",
    correct: "d",
  },
  {
    question:
      "What are the factors that can affect the rate of photosynthesis?",
    a: "Temperature and humidity",
    b: "Wind speed and direction",
    c: "Soil pH and nutrient levels",
    d: "Light intensity and availability",
    correct: "d",
  },
  {
    question: "What is the source of energy for photosynthesis?",
    a: "Water",
    b: "Carbon dioxide",
    c: "Oxygen",
    d: "Sunlight",
    correct: "d",
  },
  {
    question:
      "During cellular respiration, what is the final product of the reaction involving oxygen and glucose?",
    a: "Carbon dioxide",
    b: "Water",
    c: "Energy",
    d: "ATP",
    correct: "c",
  },
  {
    question: "What gas is released by plants during respiration?",
    a: "Carbon dioxide",
    b: "Oxygen",
    c: "Nitrogen",
    d: "Hydrogen",
    correct: "a",
  },
  {
    question: "What is the main source of energy for living things?",
    a: "Water",
    b: "Sunlight",
    c: "Air",
    d: "Food",
    correct: "d",
  },
  {
    question:
      "What is the process by which plants convert sunlight into chemical energy?",
    a: "Photosynthesis",
    b: "Respiration",
    c: "Fermentation",
    d: "Transpiration",
    correct: "a",
  },
  {
    question: "Where does most of the photosynthesis in plants occur?",
    a: "Roots",
    b: "Stems",
    c: "Leaves",
    d: "Flowers",
    correct: "c",
  },
  {
    question: "What are the essential internal parts of a leaf?",
    a: "Epidermis, stomata, and veins",
    b: "Roots, stems, and leaves",
    c: "Cuticle, chloroplasts, and mesophyll",
    d: "Epidermis, mesophyll, and vascular bundles",
    correct: "d",
  },
  {
    question: "What is the function of the epidermis in a leaf?",
    a: "Photosynthesis",
    b: "Gas exchange",
    c: "Water absorption",
    d: "Protection",
    correct: "d",
  },
  {
    question:
      "What are the small pores on the lower epidermis of a leaf called?",
    a: "Vascular bundles",
    b: "Stems",
    c: "Mesophyll",
    d: "Stomata",
    correct: "d",
  },
  {
    question: "What is the role of chloroplasts in photosynthesis?",
    a: "Capture and convert sunlight into chemical energy",
    b: "Store water for the plant",
    c: "Produce carbon dioxide",
    d: "Transport sugars throughout the plant",
    correct: "a",
  },
  {
    question: "Which gas is utilized in the process of photosynthesis?",
    a: "Oxygen",
    b: "Carbon dioxide",
    c: "Nitrogen",
    d: "Hydrogen",
    correct: "b",
  },
  {
    question:
      "During photosynthesis, what substance reacts with carbon dioxide to produce glucose?",
    a: "Water",
    b: "Oxygen",
    c: "Chlorophyll",
    d: "Sunlight",
    correct: "a",
  },
  {
    question:
      "During cellular respiration, what substance reacts with glucose to produce energy?",
    a: "Oxygen",
    b: "Carbon dioxide",
    c: "Water",
    d: "Glucose",
    correct: "a",
  },
  {
    question:
      "What is the primary pigment responsible for the green color of plants?",
    a: "Carotenoids",
    b: "Anthocyanins",
    c: "Chlorophyll",
    d: "Melanin",
    correct: "c",
  },
  {
    question:
      "Which tissue in plants is responsible for transporting water from roots to leaves?",
    a: "Xylem",
    b: "Phloem",
    c: "Epidermis",
    d: "Cortex",
    correct: "a",
  },
];

const quizDatags6ch4 = [
  {
    question: `Biotic Components of Environment`,
    a: `Living organisms in the environment`,
    b: `Non-living factors in the environment`,
    c: `Both living and non-living components of the environment`,
    d: `None of the above`,
    correct: "a",
  },
  {
    question: `Producers`,
    a: `Organisms that produce their own food`,
    b: `Organisms that consume other organisms for food`,
    c: `Organisms that decompose organic matter`,
    d: `None of the above`,
    correct: "a",
  },
  {
    question: `Consumers`,
    a: `Organisms that produce their own food`,
    b: `Organisms that consume other organisms for food`,
    c: `Organisms that decompose organic matter`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `An elephant is the biggest herbivore`,
    a: `True`,
    b: `False`,
    c: `Cannot be determined`,
    d: `Not applicable`,
    correct: "a",
  },
  {
    question: `Giraffe is the tallest herbivore`,
    a: `True`,
    b: `False`,
    c: `Cannot be determined`,
    d: `Not applicable`,
    correct: "a",
  },
  {
    question: `Decomposers`,
    a: `Organisms that produce their own food`,
    b: `Organisms that consume other organisms for food`,
    c: `Organisms that decompose organic matter`,
    d: `None of the above`,
    correct: "c",
  },
  {
    question: `ABIOTIC COMPONENTS OF ENVIRONMENT`,
    a: `Living organisms in the environment`,
    b: `Non-living factors in the environment`,
    c: `Both living and non-living components of the environment`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `Soil`,
    a: `A type of living organism`,
    b: `A non-living factor in the environment`,
    c: `Both a living organism and a non-living factor`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `Water`,
    a: `A type of living organism`,
    b: `A non-living factor in the environment`,
    c: `Both a living organism and a non-living factor`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `Air`,
    a: `A type of living organism`,
    b: `A non-living factor in the environment`,
    c: `Both a living organism and a non-living factor`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `Light`,
    a: `A type of living organism`,
    b: `A non-living factor in the environment`,
    c: `Both a living organism and a non-living factor`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `Temperature`,
    a: `A type of living organism`,
    b: `A non-living factor in the environment`,
    c: `Both a living organism and a non-living factor`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `What will happen if there is a permanent increase in the amount of carbon dioxide in the environment?`,
    a: `Increased plant growth`,
    b: `Decreased plant growth`,
    c: `No effect

on plant growth`,
    d: `Not applicable`,
    correct: "a",
  },
  {
    question: `FACTORS MAKING DESERT ENVIRONMENT`,
    a: `Abundance of water and high rainfall`,
    b: `Extreme heat and low rainfall`,
    c: `Low temperature and high humidity`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `FACTORS MAKING RAIN FOREST ENVIRONMENT`,
    a: `Extreme heat and low rainfall`,
    b: `Abundance of water and high rainfall`,
    c: `Low temperature and high humidity`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `Insects make hustle and bustle around the illuminated bulbs in the summer evenings but not in the winter evenings. Why?`,
    a: `Insects are attracted to light in the summer`,
    b: `Insects hibernate in the winter`,
    c: `Insects are repelled by light in the winter`,
    d: `None of the above`,
    correct: "a",
  },
  {
    question: `Food chain`,
    a: `A linear sequence of organisms where each organism feeds on the previous one`,
    b: `A relationship between two organisms where one benefits and the other is harmed`,
    c: `A relationship between two organisms where both benefit`,
    d: `None of the above`,
    correct: "a",
  },
  {
    question: `Predation`,
    a: `A linear sequence of organisms where each organism feeds on the previous one`,
    b: `A relationship between two organisms where one benefits and the other is harmed`,
    c: `A relationship between two organisms where both benefit`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `Parasitism`,
    a: `A linear sequence of organisms where each organism feeds on the previous one`,
    b: `A relationship between two organisms where one benefits and the other is harmed`,
    c: `A relationship between two organisms where both benefit`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `Mutualism`,
    a: `A linear sequence of organisms where each organism feeds on the previous one`,
    b: `A relationship between two organisms where one benefits and the other is harmed`,
    c: `A relationship between two organisms where both benefit`,
    d: `None of the above`,
    correct: "c",
  },
  {
    question: `Abiotic factors such as water, carbon dioxide and suitable temperature affect the food producing ability of plants.`,
    a: `True`,
    b: `False`,
    c: `Cannot be determined`,
    d: `Not applicable`,
    correct: "a",
  },
  {
    question: `Bacteria and fungi are:`,
    a: `Producers`,
    b: `Consumers`,
    c: `Decomposers`,
    d: `None of the above`,
    correct: "c",
  },
  {
    question: `Which organisms are called producers?`,
    a: `Organisms that produce their own food`,
    b: `Organisms that consume other organisms for food`,
    c: `Organisms that decompose organic matter`,
    d: `None of the above`,
    correct: "a",
  },
  {
    question: `Which type of animal is a horse?`,
    a: `Herbivore`,
    b: `Carnivore`,
    c: `Omnivore`,
    d: `None of the above`,
    correct: "a",
  },
  {
    question: `What are lice?

`,
    a: `Parasitic insects that infest the hair or feathers of animals`,
    b: `Carnivorous animals found in forests`,
    c: `Herbivorous animals found in grasslands`,
    d: `None of the above`,
    correct: "a",
  },
  {
    question: `What is the relationship between a lion and a deer?`,
    a: `Predator and prey`,
    b: `Mutualistic symbiosis`,
    c: `Parasitism`,
    d: `None of the above`,
    correct: "a",
  },
  {
    question: `The suitable temperature for photosynthesis is from __________ to __________.`,
    a: `0°C to 10°C`,
    b: `20°C to 30°C`,
    c: `40°C to 50°C`,
    d: `None of the above`,
    correct: "b",
  },
  {
    question: `The relationship between the butterfly and the flowering plant is the best example of __________.`,
    a: `Predation`,
    b: `Parasitism`,
    c: `Mutualism`,
    d: `None of the above`,
    correct: "c",
  },
];
const quizDatags6ch5 = [
  {
    question: "What are atoms?",
    a: "Tiny particles",
    b: "Indivisible units",
    c: "Molecules",
    d: "Elements",
    correct: "b",
  },
  {
    question: 'What does the word "atom" mean?',
    a: "Tiny particles",
    b: "Indivisible units",
    c: "Molecules",
    d: "Elements",
    correct: "b",
  },
  {
    question: "Where are protons located in an atom?",
    a: "Nucleus",
    b: "Orbits",
    c: "Electrons",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is the charge of protons?",
    a: "Positive",
    b: "Negative",
    c: "Neutral",
    d: "Variable",
    correct: "a",
  },
  {
    question: "Where are neutrons found?",
    a: "Nucleus",
    b: "Orbits",
    c: "Electrons",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is the charge of neutrons?",
    a: "Positive",
    b: "Negative",
    c: "Neutral",
    d: "Variable",
    correct: "c",
  },
  {
    question: "Where do electrons move around in an atom?",
    a: "Nucleus",
    b: "Orbits",
    c: "Protons",
    d: "Neutrons",
    correct: "b",
  },
  {
    question: "What is the charge of electrons?",
    a: "Positive",
    b: "Negative",
    c: "Neutral",
    d: "Variable",
    correct: "b",
  },
  {
    question: "What is an element?",
    a: "A type of molecule",
    b: "A type of compound",
    c: "A pure substance made of only one kind of atom",
    d: "A mixture of different substances",
    correct: "c",
  },
  {
    question: "What is the symbol of Copper?",
    a: "Cp",
    b: "Cu",
    c: "Co",
    d: "Cr",
    correct: "b",
  },
  {
    question: "What is the symbol of Sodium?",
    a: "Na",
    b: "So",
    c: "Sa",
    d: "Sn",
    correct: "a",
  },
  {
    question: "What is the symbol of Mercury?",
    a: "Hg",
    b: "Me",
    c: "Mr",
    d: "Mc",
    correct: "a",
  },
  {
    question: "What is the symbol of Potassium?",
    a: "Pa",
    b: "Pt",
    c: "Po",
    d: "K",
    correct: "d",
  },
  {
    question: "What are metals?",
    a: "Elements with high melting points",
    b: "Elements that conduct electricity",
    c: "Elements that are malleable and ductile",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "What are non-metals?",
    a: "Elements with low melting points",
    b: "Elements that do not conduct electricity",
    c: "Elements that are brittle",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "What are alloys?",
    a: "Pure substances made of only one kind of atom",
    b: "Mixtures of metals",
    c: "Mixtures of non-metals",
    d: "Elements with low boiling points",
    correct: "b",
  },
  {
    question: "Can alloys be made from non-metals?",
    a: "Yes",
    b: "No",
    c: "Depends on the type of non-metal",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "What are high melting and boiling points characteristic of?",
    a: "Metals",
    b: "Non-metals",
    c: "Alloys",
    d: "Metalloids",
    correct: "a",
  },
  {
    question: "What do welders use to cut and weld metals?",
    a: "Hydrogen and oxygen",
    b: "Carbon and oxygen",
    c: "Hydrogen and carbon",
    d: "Oxygen and nitrogen",
    correct: "b",
  },
  {
    question: "What are metalloids?",
    a: "Elements with properties between metals and non-metals",
    b: "Elements with high reactivity",
    c: "Elements with low atomic numbers",
    d: "Elements found in group 3 of the periodic table",
    correct: "a",
  },
  {
    question: "What elements are examples of metalloids?",
    a: "Iron and copper",
    b: "Boron and silicon",
    c: "Oxygen and nitrogen",
    d: "Mercury and potassium",
    correct: "b",
  },
  {
    question: "What are compounds?",
    a: "Pure substances made of only one kind of atom",
    b: "Mixtures of different substances",
    c: "Elements with low atomic numbers",
    d: "Substances made of two or more different elements chemically combined",
    correct: "d",
  },
  {
    question: "What are mixtures?",
    a: "Pure substances made of only one kind of atom",
    b: "Substances made of two or more different elements chemically combined",
    c: "Substances made of different atoms",
    d: "Substances made of different substances physically combined",
    correct: "d",
  },
  {
    question: "What is a homogeneous mixture?",
    a: "A mixture with visibly different substances",
    b: "A mixture with evenly distributed substances",
    c: "A mixture with only one type of atom",
    d: "A mixture with no substances",
    correct: "b",
  },
  {
    question: "What is a heterogeneous mixture?",
    a: "A mixture with evenly distributed substances",
    b: "A mixture with visibly different substances",
    c: "A mixture with only one type of atom",
    d: "A mixture with no substances",
    correct: "b",
  },
  {
    question: "What is air?",
    a: "A compound",
    b: "A homogeneous mixture",
    c: "A heterogeneous mixture",
    d: "An element",
    correct: "b",
  },
  {
    question:
      "What is the method of separating components of a mixture using a filter?",
    a: "Filtration",
    b: "Sublimation",
    c: "Distillation",
    d: "Chromatography",
    correct: "a",
  },
  {
    question:
      "What is the method of separating components of a mixture by heating and converting a solid directly into a gas?",
    a: "Filtration",
    b: "Sublimation",
    c: "Distillation",
    d: "Chromatography",
    correct: "b",
  },
  {
    question:
      "What is the method of separating components of a mixture by heating and collecting the vapors produced?",
    a: "Filtration",
    b: "Sublimation",
    c: "Distillation",
    d: "Chromatography",
    correct: "c",
  },
  {
    question:
      "What is the method of separating components of a mixture based on their different rates of movement through a medium?",
    a: "Filtration",
    b: "Sublimation",
    c: "Distillation",
    d: "Chromatography",
    correct: "d",
  },
  {
    question: "What are the safety measures to conduct science experiments?",
    a: "Wear protective clothing",
    b: "Follow instructions carefully",
    c: "Handle chemicals with caution",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "How many naturally occurring elements are there?",
    a: "92",
    b: "118",
    c: "100",
    d: "64",
    correct: "a",
  },
  {
    question: "Is Mercury a metal?",
    a: "Yes",
    b: "No",
    c: "It is a metalloid",
    d: "It is an alloy",
    correct: "a",
  },
  {
    question: "What is matter consisting of one kind of atom called?",
    a: "Element",
    b: "Molecule",
    c: "Compound",
    d: "Alloy",
    correct: "a",
  },
  {
    question: "What is calcium carbonate used for?",
    a: "Making steel",
    b: "Fueling rockets",
    c: "Creating electricity",
    d: "Making chalk and antacid tablets",
    correct: "d",
  },
  {
    question:
      "What method is used to separate components of a mixture of Naphthalene and salt?",
    a: "Filtration",
    b: "Sublimation",
    c: "Distillation",
    d: "Chromatography",
    correct: "b",
  },
  {
    question: "What metal is found in a liquid form?",
    a: "Copper",
    b: "Iron",
    c: "Mercury",
    d: "Aluminium",
    correct: "c",
  },
  {
    question: "What is the hardest substance found on Earth?",
    a: "Gold",
    b: "Iron",
    c: "Diamond",
    d: "Aluminium",
    correct: "c",
  },
];
const quizDatags6ch6 = [
  {
    question: "What is Air?",
    a: "A mixture of different gases",
    b: "A solid substance",
    c: "A liquid substance",
    d: "A single gas",
    correct: "a",
  },

  {
    question:
      "Air is a mixture of different gases present around the planet earth. It also includes water vapors and dust particles.",
    a: "True",
    b: "False",
    c: "Cannot be determined",
    d: "Not mentioned",
    correct: "a",
  },

  {
    question:
      "The gases in the air which absorb sunlight to keep the Earth's environment warm are called?",
    a: "Greenhouse gases",
    b: "Ozone gases",
    c: "Reactive gases",
    d: "Noble gases",
    correct: "a",
  },

  {
    question:
      "The protective layer of ozone is present at about __ km above the Earth's surface.",
    a: "25-30",
    b: "10-15",
    c: "50-60",
    d: "40-45",
    correct: "a",
  },

  {
    question: `O<sub>3</sub> is?`,
    a: "A greenhouse gas",
    b: "A reactive gas",
    c: "A compound of oxygen",
    d: "A noble gas",
    correct: "c",
  },

  {
    question:
      "Carbon dioxide, water vapors, oxides of nitrogen, methane, and chlorofluorocarbons (CFCs) present in the air are called?",
    a: "Reactive gases",
    b: "Greenhouse gases",
    c: "Noble gases",
    d: "Trace gases",
    correct: "b",
  },

  {
    question: "% of Nitrogen in air?",
    a: "78",
    b: "21",
    c: "0.03",
    d: "0.9",
    correct: "a",
  },

  {
    question: "% of Oxygen in air?",
    a: "78",
    b: "20.9",
    c: "0.03",
    d: "0.9",
    correct: "b",
  },

  {
    question: "% of Carbon dioxide in air?",
    a: "78",
    b: "20.9",
    c: "0.03",
    d: "0.9",
    correct: "c",
  },

  {
    question: "% of Argon in air?",
    a: "78",
    b: "20.9",
    c: "0.03",
    d: "0.9",
    correct: "d",
  },

  {
    question: "Other gases 0.17% in air?",
    a: "True",
    b: "False",
    c: "Cannot be determined",
    d: "Not mentioned",
    correct: "a",
  },

  {
    question: "Which gases are colorless, odorless, and tasteless?",
    a: "Nitrogen and Oxygen",
    b: "Carbon Dioxide and Methane",
    c: "Argon and Helium",
    d: "Sulfur Dioxide and Nitrogen Dioxide",
    correct: "a",
  },

  {
    question: "Which gas is slightly soluble in water?",
    a: "Nitrogen",
    b: "Oxygen",
    c: "Carbon Dioxide",
    d: "Methane",
    correct: "c",
  },

  {
    question: "Rusting of iron is due to which gas?",
    a: "Nitrogen",
    b: "Oxygen",
    c: "Carbon Dioxide",
    d: "Methane",
    correct: "b",
  },

  {
    question: "Which gas is used as fire extinguishers?",
    a: "Nitrogen",
    b: "Oxygen",
    c: "Carbon Dioxide",
    d: "Methane",
    correct: "c",
  },

  {
    question: "Gases that make less than 1% of the air are called?",
    a: "Greenhouse gases",
    b: "Noble gases",
    c: "Trace gases",
    d: "Reactive gases",
    correct: "c",
  },

  {
    question: "Helium, neon, and argon are called ___ gases?",
    a: "Greenhouse",
    b: "Reactive",
    c: "Noble",
    d: "Combustible",
    correct: "c",
  },

  {
    question: "Which gas of the air is non-reactive?",
    a: "Nitrogen",
    b: "Oxygen",
    c: "Carbon Dioxide",
    d: "Methane",
    correct: "a",
  },

  {
    question:
      "Which is the use of nitrogen? (Used to keep fresh and preserve food)",
    a: "To inflate balloons",
    b: "To extinguish fires",
    c: "To provide oxygen to the body",
    d: "To preserve food",
    correct: "d",
  },

  {
    question:
      "Which gas is filled in electric bulbs, so that their filament cannot catch fire?",
    a: "Carbon Dioxide",
    b: "Nitrogen",
    c: "Oxygen",
    d: "Methane",
    correct: "b",
  },

  {
    question:
      "Which gas is used in the burning of wood, coal, and natural gas?",
    a: "Carbon Dioxide",
    b: "Nitrogen",
    c: "Oxygen",
    d: "Methane",
    correct: "c",
  },

  {
    question: "Which gas is also used to cut and weld metals?",
    a: "Carbon Dioxide",
    b: "Nitrogen",
    c: "Oxygen",
    d: "Methane",
    correct: "c",
  },

  {
    question:
      "Oxygen produced by 1 tree can fulfill the respiration needs of __ children?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "b",
  },

  {
    question: "Which gas is filled in soda water bottles under pressure?",
    a: "Carbon Dioxide",
    b: "Nitrogen",
    c: "Oxygen",
    d: "Methane",
    correct: "a",
  },

  {
    question:
      "Which gas is a very light gas and is filled in weather balloons?",
    a: "Carbon Dioxide",
    b: "Nitrogen",
    c: "Helium",
    d: "Methane",
    correct: "c",
  },

  {
    question: "Moving air is called?",
    a: "Wind",
    b: "Current",
    c: "Breeze",
    d: "Gust",
    correct: "a",
  },

  {
    question: "The gas used in the photosynthesis process is?",
    a: "Carbon Dioxide",
    b: "Nitrogen",
    c: "Oxygen",
    d: "Methane",
    correct: "a",
  },

  {
    question: "Which of the following processes does not use oxygen?",
    a: "Photosynthesis",
    b: "Respiration",
    c: "Burning",
    d: "Fermentation",
    correct: "d",
  },

  {
    question: "The gas used to make bread spongy is?",
    a: "Carbon Dioxide",
    b: "Nitrogen",
    c: "Oxygen",
    d: "Methane",
    correct: "a",
  },

  {
    question: "Ozone molecule consists of __ oxygen atoms?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "c",
  },

  {
    question: "The process of keeping the Earth environment warm is called?",
    a: "Photosynthesis",
    b: "Respiration",
    c: "Burning",
    d: "Greenhouse effect",
    correct: "d",
  },
];
const quizDatags6ch7 = [
  {
    question: "A solution consisting of two substances is called?",
    a: "Mixture",
    b: "Solvent",
    c: "second degree solution",
    d: "binary Solution",
    correct: "d",
  },
  {
    question: "The part of the solution which is less in quantity is called?",
    a: "Mixture",
    b: "Solvent",
    c: "Solute",
    d: "Solution",
    correct: "c",
  },
  {
    question:
      "The part of the solution which is greater in quantity is called?",
    a: "Mixture",
    b: "Solvent",
    c: "Solute",
    d: "Solution",
    correct: "b",
  },
  {
    question: "The solutions in which water is used as solvent are called?",
    a: "Aqueous solutions",
    b: "Solid solutions",
    c: "Gaseous solutions",
    d: "Chemical solutions",
    correct: "a",
  },
  {
    question:
      "Water is the best solvent because a lot of substances can be dissolved in it. That is why water is known as?",
    a: "Universal solvent",
    b: "Selective solvent",
    c: "Polar solvent",
    d: "Chemical solvent",
    correct: "a",
  },
  {
    question:
      "The solution which has less quantity of dissolved solute in it is called?",
    a: "Dilute solution",
    b: "Concentrated solution",
    c: "Saturated solution",
    d: "Supersaturated solution",
    correct: "a",
  },
  {
    question:
      "The solution which has comparatively greater quantity of dissolved solute in it is called?",
    a: "Dilute solution",
    b: "Concentrated solution",
    c: "Saturated solution",
    d: "Supersaturated solution",
    correct: "b",
  },
  {
    question:
      "A solution in which more quantity of the solute can be dissolved at a certain temperature is called?",
    a: "Dilute solution",
    b: "Concentrated solution",
    c: "unsaturated solution",
    d: "Supersaturated solution",
    correct: "c",
  },
  {
    question:
      "A solution in which no more quantity of the solute can be dissolved at a certain temperature is called?",
    a: "Dilute solution",
    b: "Concentrated solution",
    c: "Saturated solution",
    d: "Supersaturated solution",
    correct: "c",
  },
  {
    question:
      "The amount of solute in gram required to make its saturated solution in 100-gram solvent at a certain temperature is called its?",
    a: "Molarity",
    b: "Molality",
    c: "Solubility",
    d: "Concentration",
    correct: "c",
  },
  {
    question: "Which of the following affects the solubility of substances?",
    a: "Temperature",
    b: "Pressure",
    c: "Nature of solute and solvent",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "A mixture in which solute particles do not dissolve in the solvent but remain suspended and move freely in the solvent is called?",
    a: "Suspension",
    b: "Colloid",
    c: "Emulsion",
    d: "Solution",
    correct: "a",
  },
  {
    question: "Which of the following mixture is called solution?",
    a: "iron filings and sulphur",
    b: "water and oil",
    c: "water and fat",
    d: "water and carbon dioxide",
    correct: "d",
  },
  {
    question:
      "The solubility of which compound in water decreases by increasing the temperature?",
    a: "sodium chloride",
    b: "carbon dioxide",
    c: "potassium nitrate",
    d: "copper sulphate",
    correct: "d",
  },
  {
    question:
      "Air is a homogeneous solution. What is the solvent in this solution?",
    a: "Oxygen",
    b: "Nitrogen",
    c: "Carbon dioxide",
    d: "Water vapor",
    correct: "b",
  },
  {
    question: "The particles are settled down at the bottom of the container?",
    a: "in solute",
    b: "in solution",
    c: "in suspension",
    d: "in solvent",
    correct: "c",
  },
  {
    question: "Which substance is called universal solvent?",
    a: "Water",
    b: "Alcohol",
    c: "Acid",
    d: "Oil",
    correct: "a",
  },
  {
    question:
      "The part of the solution which is relatively more in quantity is called __________.",
    a: "Mixture",
    b: "Solvent",
    c: "Solute",
    d: "Solution",
    correct: "b",
  },
  {
    question:
      "The solubility of lime (calcium oxide) in water decreases by increasing the __________.",
    a: "Pressure",
    b: "Temperature",
    c: "Concentration",
    d: "Time",
    correct: "b",
  },
  {
    question: "An unsaturated solution can dissolve more amount of __________.",
    a: "Solute",
    b: "Solvent",
    c: "Precipitate",
    d: "Colloid",
    correct: "a",
  },
  {
    question:
      "The solutions in which water is used as solvent are called __________.",
    a: "Aqueous solutions",
    b: "Solid solutions",
    c: "Gaseous solutions",
    d: "Chemical solutions",
    correct: "a",
  },
];
const quizDatags6ch8 = [
  {
    question: `Ability to do work is called?`,
    a: `Energy`,
    b: `Power`,
    c: `Force`,
    d: `Motion`,
    correct: "a",
  },
  {
    question: `Two main forms of energy are?`,
    a: `Potential and Kinetic`,
    b: `Mechanical and Thermal`,
    c: `Chemical and Electrical`,
    d: `Radiant and Nuclear`,
    correct: "a",
  },
  {
    question: `The energy in an object due to its motion is called?`,
    a: `Potential energy`,
    b: `Mechanical energy`,
    c: `Kinetic energy`,
    d: `Thermal energy`,
    correct: "c",
  },
  {
    question: `The energy in an object due to its position is called?`,
    a: `Potential energy`,
    b: `Mechanical energy`,
    c: `Kinetic energy`,
    d: `Thermal energy`,
    correct: "a",
  },
  {
    question: `Which of them is a form of energy?`,
    a: `Gravity`,
    b: `Friction`,
    c: `Magnetism`,
    d: `Heat`,
    correct: "d",
  },
  {
    question: `Energy can neither be created nor be?`,
    a: `Stored`,
    b: `Transformed`,
    c: `Destroyed`,
    d: `Transferred`,
    correct: "c",
  },
  {
    question: `The machines that convert one form of energy into other forms are called?`,
    a: `Transformers`,
    b: `energy Converters`,
    c: `Transducers`,
    d: `Devices`,
    correct: "b",
  },
  {
    question: `What are renewable energy sources?`,
    a: `Energy sources that can be depleted`,
    b: `Energy sources that are abundant`,
    c: `Energy sources that can be naturally reused`,
    d: `Energy sources that are environmentally friendly`,
    correct: "c",
  },
  {
    question: `Which of them is an example of renewable energy sources?`,
    a: `Coal`,
    b: `Natural gas`,
    c: `Solar power`,
    d: `Nuclear power`,
    correct: "c",
  },
  {
    question: `What is an example of Biomass energy?`,
    a: `Sunlight`,
    b: `Water waves`,
    c: `Wind`,
    d: `Wood`,
    correct: "d",
  },
  {
    question: `What is an example of Geothermal Energy?`,
    a: `Tidal power`,
    b: `Fossil fuels`,
    c: `Hot springs`,
    d: `Natural gas`,
    correct: "c",
  },
  {
    question: `What is an example of Wind Energy?`,
    a: `Solar power`,
    b: `Hydropower`,
    c: `Geothermal energy`,
    d: `Wind turbines`,
    correct: "d",
  },
  {
    question: `What is an example of Hydropower?`,
    a: `Tidal power`,
    b: `Biomass energy`,
    c: `Natural gas`,
    d: `Coal`,
    correct: "a",
  },
  {
    question: `What is an example of Solar Energy?`,
    a: `Geothermal energy`,
    b: `Wind turbines`,
    c: `Sunlight`,
    d: `Nuclear power`,
    correct: "c",
  },
  {
    question: `What is an example of energy converters?`,
    a: `all of them`,
    b: `Photocell`,
    c: `Electric motor`,
    d: `Solar panel`,
    correct: "a",
  },
  {
    question: `A fan converts electric energy into which energy?`,
    a: `Mechanical energy`,
    b: `Thermal energy`,
    c: `Chemical energy`,
    d: `Electromagnetic energy`,
    correct: "a",
  },
  {
    question: `An electricity generator converts which energy into electric energy?`,
    a: `Mechanical energy`,
    b: `Thermal energy`,
    c: `Chemical energy`,
    d: `Nuclear energy`,
    correct: "a",
  },
  {
    question: `A solar panel converts which energy into electric energy?`,
    a: `Mechanical energy`,
    b: `Thermal energy`,
    c: `Chemical energy`,
    d: `energy of sun`,
    correct: "d",
  },
  {
    question: `A television converts electric energy into which form of energy?`,
    a: `Sound energy`,
    b: `Light energy`,
    c: `heat energy`,
    d: `all of them`,
    correct: "d",
  },
  {
    question: `Energy in the universe is constant?`,
    a: `True`,
    b: `False`,
    c: `Depends on the situation`,
    d: `Not enough information`,
    correct: "a",
  },
  {
    question: `In photosynthesis, plants convert which energy into chemical energy?`,
    a: `Light energy`,
    b: `Mechanical energy`,
    c: `Thermal energy`,
    d: `Electrical energy`,
    correct: "a",
  },
  {
    question: `Energy stored in food is called?`,
    a: `Chemical energy`,
    b: `Mechanical energy`,
    c: `Nuclear energy`,
    d: `Radiant energy`,
    correct: "a",
  },
  {
    question: `The energy of a moving object is called?`,
    a: `Potential energy`,
    b: `Mechanical energy`,
    c: `Kinetic energy`,
    d: `Thermal energy`,
    correct: "c",
  },
  {
    question: `Which of the following is an example of renewable energy sources?`,
    a: `Coal`,
    b: `Oil`,
    c: `Solar power`,
    d: `Natural gas`,
    correct: "c",
  },
  {
    question: `When work is done, the energy is?`,
    a: `wasted`,
    b: `decreased`,
    c: `Transferred`,
    d: `produced`,
    correct: "c",
  },
  {
    question: `Which of the following is not an energy converter?`,
    a: `Solar cell`,
    b: `Wind turbine`,
    c: `Battery`,
    d: `Thermometer`,
    correct: "d",
  },
  {
    question: `Energy present deep in the Earth is called?`,
    a: `Geothermal energy`,
    b: `Hydropower`,
    c: `Tidal energy`,
    d: `Nuclear energy`,
    correct: "a",
  },
  {
    question: `Electrical energy is due to the movement of?`,
    a: `Electrons`,
    b: `Protons`,
    c: `Neutrons`,
    d: `Photons`,
    correct: "a",
  },
  {
    question: `Which of the following is not an energy converter?`,
    a: `chair`,
    b: `radio`,
    c: `lamp`,
    d: `fan`,
    correct: "a",
  },
];
const quizDatags6ch9 = [
  {
    question: "A machine makes the work done?",
    a: "easier",
    b: "harder",
    c: "with more energy",
    d: "all of them",
    correct: "a",
  },
  {
    question: "Wheel is the most important?",
    a: "simple Machine",
    b: "compound machine",
    c: "electric machine",
    d: "free energy machine",
    correct: "a",
  },
  {
    question:
      "In a wheel and axle system, a small wheel fixed in the center of a large wheel is called?",
    a: "Axle",
    b: "Spindle",
    c: "Pulley",
    d: "Gear",
    correct: "a",
  },
  {
    question: "Both the wheel and the axle turn on the ___ of axis.",
    a: "same line",
    b: "opposite line",
    c: "different line",
    d: "cross-sectional line",
    correct: "a",
  },
  {
    question: "Wheel and axle system is used in which two types of works?",
    a: "(A) To lift heavy load and changing direction",
    b: "(B).To increase or decrease the speed",
    c: "both A and B",
    d: "Driving and steering",
    correct: "c",
  },
  {
    question: "Pulley is a simple machine which consists of?",
    a: "Two wheels with teeth",
    b: "A wheel and an axle",
    c: "A lever and a fulcrum",
    d: "A rope and a grooved wheel",
    correct: "d",
  },
  {
    question:
      "With the help of a pulley, we can change the ___ of applied force and make the work?",
    a: "Magnitude",
    b: "Direction",
    c: "Speed",
    d: "Color",
    correct: "b",
  },
  {
    question: "Which of the following are two types of pulleys?",
    a: "Fixed and movable",
    b: "Small and large",
    c: "Fast and slow",
    d: "Plastic and metal",
    correct: "a",
  },
  {
    question:
      "In a compound pulley system, both the fixed pulley and the movable pulley are used.",
    a: "True",
    b: "False",
    c: "",
    d: "",
    correct: "a",
  },
  {
    question: "A gear is an advanced shape of ___ system?",
    a: "Lever",
    b: "Wedge",
    c: "Compound machine",
    d: "Wheel and axle",
    correct: "d",
  },
  {
    question:
      "Gears are toothed wheels. Usually, the teeth of two gears are ___ with each other.",
    a: "Separated",
    b: "Interlocked",
    c: "Parallel",
    d: "Irregular",
    correct: "b",
  },
  {
    question:
      "A gear system is used to transfer the motion of one wheel to the other.",
    a: "True",
    b: "False",
    c: "",
    d: "",
    correct: "a",
  },
  {
    question: "Gears are also used to increase or decrease the?",
    a: "Weight",
    b: "Volume",
    c: "Speed",
    d: "Temperature",
    correct: "c",
  },
  {
    question: "Two or more gears which work together are called?",
    a: "Axles",
    b: "Levers",
    c: "Pulleys",
    d: "Meshing gears",
    correct: "d",
  },
  {
    question:
      "In a gear system consisting of two gears, the gear on which force is applied is called ___ gear?",
    a: "Driving",
    b: "Driven",
    c: "Rotating",
    d: "Stationary",
    correct: "a",
  },
  {
    question:
      "The gear which turns due to the motion of the driving gear is called?",
    a: "Driving gear",
    b: "Driven gear",
    c: "Primary gear",
    d: "Secondary gear",
    correct: "b",
  },
  {
    question:
      "To increase the speed, the driving gear is kept large and the driven gear is kept__?",
    a: "Small",
    b: "Medium-sized",
    c: "Large",
    d: "Variable",
    correct: "a",
  },
  {
    question:
      "in compound gear system, Keeping the driving gear small and the driven gear large will make work?",
    a: "Easier",
    b: "Harder",
    c: "Equal",
    d: "Unaffected",
    correct: "a",
  },
  {
    question:
      "Gears are used in bicycles, motorcycles, motor cars, and all other complex machines.",
    a: "True",
    b: "False",
    c: "",
    d: "",
    correct: "a",
  },
  {
    question: `Which of the following is an example of a wheel and axle system?`,
    a: "knife",
    b: "screwdriver",
    c: "bottle opener",
    d: "hammer",
    correct: "b",
  },
  {
    question: "What is the function of a fixed pulley?",
    a: "Lifts the load with difficulty",
    b: "Changes the magnitude of force",
    c: "Changes the direction of force",
    d: "Cancels the effect of force",
    correct: "c",
  },
  {
    question: "Which pulley system needs less force to lift a certain load?",
    a: "System consisting of one pulley",
    b: "System consisting of two pulleys",
    c: "System consisting of three pulleys",
    d: "System consisting of four pulleys",
    correct: "c",
  },
  {
    question: "A gear system is an advanced shape of?",
    a: "lever",
    b: "wedge",
    c: "compound machine",
    d: "wheel and axle",
    correct: "d",
  },
  {
    question: "Gears whose teeth are interlocked with each other?",
    a: "do not move",
    b: "move in opposite direction",
    c: "move in the same direction",
    d: "always remain movin",
    correct: "b",
  },
];
const quizDatags6ch10 = [
  {
    question: "Light is a form of?",
    a: "Energy",
    b: "Heat",
    c: "Sound",
    d: "Matter",
    correct: "a",
  },
  {
    question: "biggest source of light is?",
    a: "Moon",
    b: "Stars",
    c: "Sun",
    d: "Fire",
    correct: "c",
  },
  {
    question:
      "The passage of light ray, passing through some object is called ____ of light?",
    a: "Reflection",
    b: "Absorption",
    c: "Transmission",
    d: "Refraction",
    correct: "c",
  },
  {
    question: "The objects through which light passes are called?",
    a: "Opaque objects",
    b: "Transparent objects",
    c: "Translucent objects",
    d: "Reflective objects",
    correct: "b",
  },
  {
    question:
      "Dark and black colored objects absorb ___ light falling on them?",
    a: "most of",
    b: "No",
    c: "Some",
    d: "Infinite",
    correct: "a",
  },
  {
    question:
      "Turning back of light ray after striking on some object is called?",
    a: "Reflection",
    b: "Absorption",
    c: "Transmission",
    d: "Refraction",
    correct: "a",
  },
  {
    question:
      "Ray of light which strikes on the shining surface of some object is called?",
    a: "Incident ray",
    b: "Reflected ray",
    c: "Normal",
    d: "Refraction ray",
    correct: "a",
  },
  {
    question:
      "Ray of light which is reflected after striking an object is called__ ray?",
    a: "Incident ray",
    b: "Reflected ray",
    c: "Normal",
    d: "Refraction ray",
    correct: "b",
  },
  {
    question:
      "The point on the surface of an object at which the incident ray strikes is called?",
    a: "Focus",
    b: "Vertex",
    c: "Nodal point",
    d: "Point of incidence",
    correct: "d",
  },
  {
    question: "The angle made by the incident ray with the normal is called?",
    a: "Angle of incidence",
    b: "Angle of reflection",
    c: "Angle of refraction",
    d: "Angle of diffraction",
    correct: "a",
  },
  {
    question: "The angle made by the reflected ray with the normal is called?",
    a: "Angle of incidence",
    b: "Angle of reflection",
    c: "Angle of refraction",
    d: "Angle of diffraction",
    correct: "b",
  },
  {
    question: "Angle of incidence is always ___ to the angle of reflection?",
    a: "Greater than",
    b: "Less than",
    c: "Equal to",
    d: "Not related",
    correct: "c",
  },
  {
    question:
      "Incident ray, reflected ray, and normal all lie on the ___ plane?",
    a: "Horizontal",
    b: "Vertical",
    c: "same",
    d: "Parallel",
    correct: "c",
  },
  {
    question:
      "If the angle of reflection is not equal to the angle of incidence, such type of reflection is called?",
    a: "(A) Irregular reflection",
    b: "(B) Diffused reflection",
    c: "(C) Both A and B",
    d: "(D) Regular reflection",
    correct: "c",
  },
  {
    question: "What are the two types of Mirrors?",
    a: "plane and spherical",
    b: "Concave and Convex",
    c: "Transparent and Opaque",
    d: "Metallic and Non-metallic",
    correct: "a",
  },
  {
    question: "What are the two types of Spherical Mirrors?",
    a: "Flat and Cylindrical",
    b: "Concave and Convex",
    c: "Transparent and Opaque",
    d: "Metallic and Non-metallic",
    correct: "b",
  },
  {
    question:
      "A spherical mirror whose inner surface is reflecting is called ___ mirror?",
    a: "Plane",
    b: "Concave",
    c: "Convex",
    d: "Concavo-convex",
    correct: "b",
  },
  {
    question:
      "A spherical mirror whose outer surface is reflecting is called ___ mirror?",
    a: "Plane",
    b: "Concave",
    c: "Convex",
    d: "Convexo-concave",
    correct: "c",
  },
  {
    question: "Passage of light ray through a certain object is called:",
    a: "Transmission",
    b: "Absorption",
    c: "Reflection",
    d: "Diffused reflection",
    correct: "a",
  },
  {
    question: "The size of the image formed in a plane mirror is:",
    a: "Smaller than the object",
    b: "Larger than the object",
    c: "Equal to the object",
    d: "3/4 of the object",
    correct: "c",
  },
  {
    question: "Maximum light is reflected by:",
    a: "White paper",
    b: "Mirror",
    c: "Wooden plate",
    d: "Black colored sheet",
    correct: "b",
  },
  {
    question:
      "An instrument which helps us to see on the other side of the wall or barrier is called:",
    a: "Periscope",
    b: "Telescope",
    c: "Microscope",
    d: "Kaleidoscope",
    correct: "a",
  },
  {
    question:
      "The ray of light moving parallel to the principal axis, after reflection from a concave mirror:",
    a: "Meet at a point and spread",
    b: "Meet at a point but do not spread",
    c: "Does not meet at a point but spread",
    d: "Neither meet at a point nor spread",
    correct: "b",
  },
];
const quizDatags6ch11 = [
  {
    question: "What is sound?",
    a: "A form of energy",
    b: "A type of light",
    c: "A physical object",
    d: "A chemical reaction",
    correct: "a",
  },
  {
    question: "How is sound produced?",
    a: "Through vibrations",
    b: "Through reflection",
    c: "Through refraction",
    d: "Through absorption",
    correct: "a",
  },
  {
    question: "How does sound travel?",
    a: "Through air",
    b: "Through vacuum",
    c: "Through solid objects",
    d: "Through gravity",
    correct: "a",
  },
  {
    question: "What is the speed of sound in air?",
    a: "343 meters per second",
    b: "1000 meters per second",
    c: "1500 meters per second",
    d: "2000 meters per second",
    correct: "a",
  },
  {
    question: "What is the speed of sound in water?",
    a: "1482 meters per second",
    b: "1340 meters per second",
    c: "1428 meters per second",
    d: "3000 meters per second",
    correct: "a",
  },
  {
    question: "What is the speed of sound in iron?",
    a: "5140 meters per second",
    b: "6000 meters per second",
    c: "5130 meters per second",
    d: "5103 meters per second",
    correct: "c",
  },
  {
    question: "What is the speed of sound in glass?",
    a: "5640 meters per second",
    b: "5630 meters per second",
    c: "5604 meters per second",
    d: "5120 meters per second",
    correct: "b",
  },
  {
    question:
      "In fact, sound energy is the __ of vibrating bodies which travels in the air or other mediums in the form of waves.",
    a: "kinetic energy",
    b: "Heat",
    c: "potential energy",
    d: "Frequency",
    correct: "a",
  },
  {
    question: "The back-and-forth movements of objects is called:",
    a: "Speed",
    b: "Vibrations",
    c: "Moving around",
    d: "Circular motion",
    correct: "b",
  },
  {
    question:
      "The energy transferred from a vibrating object to the surrounding medium is?",
    a: "Potential energy",
    b: "Kinetic energy",
    c: "Heat energy",
    d: "Mechanical energy",
    correct: "d",
  },
  {
    question: "Sound cannot travel in:",
    a: "Solid",
    b: "Liquid",
    c: "Gas",
    d: "Vacuum",
    correct: "d",
  },
  {
    question: "The speed of sound is 343 meters per second in:",
    a: "Air",
    b: "Water",
    c: "Iron",
    d: "Wood",
    correct: "a",
  },
  {
    question:
      "Which part of the human ear transfers sound waves to the cochlea?",
    a: "Pinna",
    b: "Ear canal",
    c: "Eardrum",
    d: "Bones of the middle ear",
    correct: "c",
  },
  {
    question:
      "The ____ part of the human ear receives sound waves from environment?",
    a: "Pinna",
    b: "Ear canal",
    c: "Eardrum",
    d: "Cochlea",
    correct: "a",
  },
];
const quizDatags6ch12 = [
  {
    question: "What is the use of GPS?",
    a: "Navigation and positioning",
    b: "Weather forecasting",
    c: "Communication",
    d: "Astronomical observations",
    correct: "a",
  },
  {
    question:
      "The heavenly bodies which are moving around a star or a planet are called?",
    a: "Satellites",
    b: "Asteroids",
    c: "Comets",
    d: "Planets",
    correct: "a",
  },
  {
    question:
      "Planets, their moons, asteroids, and comets, etc. are examples of?",
    a: "Celestial bodies",
    b: "natural satellites",
    c: "Solar bodies",
    d: "artificial satellites",
    correct: "b",
  },
  {
    question:
      "The pieces of rocks or metals or both which revolve around the Sun between Mars and Jupiter are called?",
    a: "Planets",
    b: "Moons",
    c: "Comets",
    d: "Asteroids",
    correct: "d",
  },
  {
    question:
      "A region between Mars and Jupiter with many asteroids is called?",
    a: "asteroid belt",
    b: "Meteors belt",
    c: "meteoroids belt",
    d: "Comets belt",
    correct: "a",
  },
  {
    question:
      "large balls of dust made of frozen gases and rock particles are called?",
    a: "Comets",
    b: "Meteors",
    c: "Pure water",
    d: "Burning gases",
    correct: "a",
  },
  {
    question:
      "there are numerous small objects which revolve around the Sun. These are called?",
    a: "Meteors",
    b: "Giant planets",
    c: "Comets",
    d: "meteoroids",
    correct: "d",
  },
  {
    question:
      "Meteoroids which start burning after entering the Earth's atmosphere are called?",
    a: "Meteors",
    b: "Asteroids",
    c: "Comets",
    d: "Meteorites",
    correct: "a",
  },
  {
    question:
      "Some meteoroids hit the Earth's surface and make craters on the ground. Such meteoroids are called?",
    a: "Meteorites",
    b: "Meteors",
    c: "Comets",
    d: "Asteroids",
    correct: "a",
  },
  {
    question:
      "A large number of man-made satellites orbiting the Earth are called?",
    a: "Artificial satellites",
    b: "Asteroids",
    c: "Comets",
    d: "Planets",
    correct: "a",
  },
  {
    question: "What are Geostationary satellites?",
    a: "Satellites that stay fixed above a specific location on Earth",
    b: "Satellites that orbit the Earth at low altitudes",
    c: "Satellites that study the polar regions",
    d: "Satellites used for interplanetary missions",
    correct: "a",
  },
  {
    question: "What are polar satellites?",
    a: "Satellites that stay fixed above a specific location on Earth",
    b: "Satellites that orbit the Earth at low altitudes",
    c: "Satellites that study the polar regions",
    d: "Satellites used for interplanetary missions",
    correct: "c",
  },
  {
    question: "What are low Earth-orbit satellites?",
    a: "Satellites that stay fixed above a specific location on Earth",
    b: "Satellites that orbit the Earth at low altitudes",
    c: "Satellites that study the polar regions",
    d: "Satellites used for interplanetary missions",
    correct: "b",
  },
  {
    question:
      "The station on Earth that receives messages from the satellites is called?",
    a: "satellite receiving centre",
    b: "Launch station",
    c: "Space station",
    d: "Control station",
    correct: "a",
  },
  {
    question: "Russia sent Sputnik-I into space in:",
    a: "1947",
    b: "1957",
    c: "1967",
    d: "1977",
    correct: "b",
  },
  {
    question:
      "A geostationary satellite completes one revolution around the Earth in:",
    a: "One day",
    b: "One week",
    c: "One month",
    d: "One year",
    correct: "a",
  },
  {
    question:
      "The first man who completed one revolution around the Earth was:",
    a: "Edwin Eledrin",
    b: "Neil Armstrong",
    c: "Elan Shepard",
    d: "Yuri Gagarin",
    correct: "d",
  },
  {
    question: "The satellite Badr-I was sent into space by Pakistan in:",
    a: "1969",
    b: "1973",
    c: "1975",
    d: "1990",
    correct: "d",
  },
  {
    question: "When was the last time comet Halley was seen?",
    a: "1986",
    b: "1995",
    c: "2001",
    d: "2010",
    correct: "a",
  },
];
//Data for GS5
const quizDatags5ch1 = [
  {
    question: `tamam jandaron k kitne bare groups bnae gae han?`,
    a: `3`,
    b: `4`,
    c: `6`,
    d: `5`,
    correct: "d",
  },
  {
    question: `jandaron ka jism kn se mil kr bana hota hy?`,
    a: `skin pores se`,
    b: `molecules se`,
    c: `element se`,
    d: `cells se`,
    correct: "d",
  },
  {
    question: `jandaron ko mokhtalif groups me q alag alag kia gya hy?`,
    a: `mahole kharab na ho`,
    b: `dosre jandar ka shikar na kr saken`,
    c: `ak dusre se dur rakha ja sake`,
    d: `onko behtar parha or samjha ja sake`,
    correct: "d",
  },
  {
    question: `kingdom monera wale jandar kitne cells se mil kr bne hote han?`,
    a: `100`,
    b: `latadad`,
    c: `1000`,
    d: `1`,
    correct: "d",
  },
  {
    question: `kingdom protista wale jandar ziada tar kahan pae jate han?`,
    a: `janglaat me`,
    b: `sehra me`,
    c: `gharon me`,
    d: `panni me`,
    correct: "d",
  },
  {
    question: `amoeba or algae kis kingdom me ate han?`,
    a: `protista`,
    b: `fungi`,
    c: `plantae`,
    d: `monera`,
    correct: "a",
  },
  {
    question: `'Rhizopus' jo ak fungi hy. ye kin chizon ko kharab krta hy?`,
    a: `darakhton ko`,
    b: `gosht ko`,
    c: `dodh ko`,
    d: `phalon ko`,
    correct: "d",
  },
  {
    question: `kia tamam fungi Unicellular han?`,
    a: `han`,
    b: `___`,
    c: `___`,
    d: `nai`,
    correct: "d",
  },
  {
    question: `chlorophyll kis kam me madad deta hy?`,
    a: `growth me`,
    b: `pani pohnchane me`,
    c: `khorak pohnchane me`,
    d: `khorak bnane me`,
    correct: "d",
  },
  {
    question: `kin ko apni growth k lie moisture (nami) ki zaroorat hoti hy?`,
    a: `protista`,
    b: `fungi`,
    c: `plantae`,
    d: `monera`,
    correct: "b",
  },
  {
    question: `koch mushrooms khae jate han jab k koch bhoot ___ hote han?`,
    a: `karwe`,
    b: `sakht`,
    c: `nokile`,
    d: `zehrile`,
    correct: "d",
  },
  {
    question: `raat me kon chamak sakte han?`,
    a: `kingdom monera`,
    b: `Rhizopus`,
    c: `fungi`,
    d: `mushrooms`,
    correct: "d",
  },
  {
    question: `chlorophyll ka khorak bnane k elawa paudon me kia kam hy?`,
    a: `growth krna`,
    b: `fruits bnana`,
    c: `reproduction`,
    d: `paudon ka green hona`,
    correct: "d",
  },
  {
    question: `flowering plants ki kitni kismen btai gai han?`,
    a: `3`,
    b: `4`,
    c: `5`,
    d: `2`,
    correct: "d",
  },
  {
    question: `aese phuldaar paude jin me 1 cotyledon ho jaese k 'gandum, chawal' ko kia kehte han?`,
    a: `one cot plant`,
    b: `single dicot plant`,
    c: `dicot plant`,
    d: `monocot plant`,
    correct: "d",
  },
  {
    question: `aese jandar jin me reth ki hadi (backbone) nai hoti on ko kia kehte han?`,
    a: `vertebrates`,
    b: `biotic animals`,
    c: `amphibia`,
    d: `invertebrates`,
    correct: "d",
  },
  {
    question: `vertebrates kitni kisam k hote han?`,
    a: `3`,
    b: `4`,
    c: `6`,
    d: `5`,
    correct: "d",
  },
  {
    question: `kia machli me rirh ki hadi (backbone) hoti hy?`,
    a: `nahin`,
    b: `sirf star fish me hoti hy`,
    c: `star fish k elawa sab me hoti hy`,
    d: `han sab me hoti hy`,
    correct: "c",
  },
  {
    question: `machli me phephre nahin hote to wo sance kaese leti hy?`,
    a: `bills se`,
    b: `skin se`,
    c: `sance nai leti`,
    d: `gills se`,
    correct: "d",
  },
  {
    question: `vertebrates jo pani or khushki donon me reh sakte han?`,
    a: `Reptiles`,
    b: `mammals`,
    c: `fish`,
    d: `Amphibians`,
    correct: "d",
  },
  {
    question: `Amphibians pani or khushki done me rehsakte han lekn pher b wo pani se q dur nai ja sakte?`,
    a: `khurak pani se lete han`,
    b: `nend pani me krte han`,
    c: `growth pani me krte han`,
    d: `reproducrtion pani me krte han`,
    correct: "d",
  },
  {
    question: `reptiles lafz 'creeping' se nekla hy jis ka mtlb hy?`,
    a: `sunghne wale`,
    b: `zehrile`,
    c: `ande dene wale`,
    d: `ringhne wale`,
    correct: "d",
  },
  {
    question: `reptiles reproduction kaese krte han?`,
    a: `bache dete han`,
    b: `__`,
    c: `__`,
    d: `ande dete han`,
    correct: "d",
  },
  {
    question: `tarikh me sab se bara reptiles kon rha hy?`,
    a: `the russian crocodile`,
    b: `the megan tortoise`,
    c: `lizard`,
    d: `Dinosaurs`,
    correct: "d",
  },
  {
    question: `kon sa parina hy jo pani me taer bhi sakta hy?`,
    a: `Sparrow`,
    b: `pigeon`,
    c: `kiwi`,
    d: `duck`,
    correct: "d",
  },
  {
    question: `kia sare parinde ur sakte han?`,
    a: `han`,
    b: `__`,
    c: `__`,
    d: `nahin`,
    correct: "d",
  },
  {
    question: `jo parinde ur nai sakte onko kia kaha jata hy?`,
    a: `creeping birds`,
    b: `tempo birds`,
    c: `non flying birds`,
    d: `running birds`,
    correct: "d",
  },
  {
    question: `sab se bara urne wala parinda kon sa hy?`,
    a: `hen`,
    b: `woodpecker`,
    c: `hummingbird`,
    d: `eagle`,
    correct: "d",
  },
  {
    question: `birds b insano ki tarha apna temterature khud mentain krte han?`,
    a: `nahin`,
    b: `__`,
    c: ``,
    d: `han`,
    correct: "d",
  },
  {
    question: `bird park kia kehlata hy?`,
    a: `aviedry`,
    b: `evidry`,
    c: `adrivey`,
    d: `aviary`,
    correct: "d",
  },
  {
    question: `bat is ___?`,
    a: `mammal`,
    b: `reptiles`,
    c: `Amphibians`,
    d: `invertebrates`,
    correct: "a",
  },
  {
    question: `birds and mammals q vertebrates ka sab se bara group han?`,
    a: `reproduction ziada krte han`,
    b: `enki umar ziada hoti hy`,
    c: `har mahole me reh pate han`,
    d: `apne bachon ki hifazat krte han`,
    correct: "d",
  },
  {
    question: `Invertebrates ko kitne sub groups me divide kia gya hy?`,
    a: `2`,
    b: `3`,
    c: `4`,
    d: `5`,
    correct: "d",
  },
  {
    question: `'Sponges' kis ka sub group hy?`,
    a: `kingdom platea`,
    b: `mammals`,
    c: `vertebrates`,
    d: `Invertebrates`,
    correct: "d",
  },
  {
    question: `'Sponges' kia han or kahan pae jate han?`,
    a: `janwar, jangle me`,
    b: `janwar, sehra me`,
    c: `phul, zamin pe`,
    d: `jandar, samandar me`,
    correct: "d",
  },
  {
    question: `Worms(kire) kia han?`,
    a: `Invertebrates`,
    b: `vertebrates`,
    c: `fungi`,
    d: `algae`,
    correct: "a",
  },
  {
    question: `Invertebrates me kon kon se 5 sub groups han?`,
    a: `<h6>Worms,Sponges,Reptiles,Molluscs,Echinoderms</6>`,
    b: `<h6>Worms,Sponges,Insects,Molluscs</6>`,
    c: `<h6>fungi,Sponges,Insects,Molluscs,Echinoderms</6>`,
    d: `<h6>Worms,Sponges,Insects,Molluscs,Echinoderms</6>`,
    correct: "d",
  },
  {
    question: `gram k bijh me kitne cotyledons hote han?`,
    a: `1`,
    b: `3`,
    c: `4`,
    d: `2`,
    correct: "d",
  },
  {
    question: `billi(cat) kis group se belong krti hy? `,
    a: `Echinoderms`,
    b: `Amphibians`,
    c: `Invertebrates`,
    d: `mammals`,
    correct: "d",
  },
];

const quizDatags5ch2 = [
  {
    question: `enme se kon si bimari virus se hoti hy?`,
    a: `AIDs`,
    b: `hyza`,
    c: `ishal (Diarrhea)`,
    d: `ringWorm`,
    correct: "a",
  },
  {
    question: `enme se kon si bimari fungi se hoti hy?`,
    a: `AIDs`,
    b: `hyza`,
    c: `ishal (Diarrhea)`,
    d: `ringWorm`,
    correct: "d",
  },
  {
    question: `kis ki madad se virus ko dekha ja sakta hy?`,
    a: `Compound microscope`,
    b: `Electron Microscope`,
    c: `  eye`,
    d: `chashma`,
    correct: "b",
  },
  {
    question: `TB ka sabab kia hy?`,
    a: `molds`,
    b: `bacteria`,
    c: `virus`,
    d: `fungi`,
    correct: "b",
  },
  {
    question: `sab se pehle antibiotic tayar ki gai`,
    a: `penicillin se`,
    b: `penicillium se`,
    c: `mashrooom se`,
    d: `yeast se`,
    correct: "b",
  },
  {
    question: `pehle bnai gai antibiotic ka name kia tha?`,
    a: `penicillium`,
    b: `penicillin`,
    c: `Macrolides`,
    d: `Vancomycin`,
    correct: "b",
  },
  {
    question: `mashroom kis group se taluk rakhta hy?`,
    a: `viruses`,
    b: `fungi`,
    c: `bacteria`,
    d: `protozoa`,
    correct: "b",
  },
  {
    question: `polio ki waja kia hy?`,
    a: `viruses`,
    b: `fungi`,
    c: `bacteria`,
    d: `protozoa`,
    correct: "a",
  },
  {
    question: `pencillium kis group ki misaal hy?`,
    a: `viruses`,
    b: `fungi`,
    c: `bacteria`,
    d: `protozoa`,
    correct: "b",
  },
  {
    question: `hawa me __ ki mojudi se food kharab hota hy?`,
    a: `moisture`,
    b: `microorganisms`,
    c: `heat`,
    d: `oxygin`,
    correct: "b",
  },
  {
    question: `en mese kon sa microorganism nahi hy?`,
    a: `bacteria`,
    b: `ant`,
    c: `algae`,
    d: `virus`,
    correct: "b",
  },
  {
    question: `Dengue kis ki example hy?`,
    a: `viruses`,
    b: `fungi`,
    c: `bacteria`,
    d: `protozoa`,
    correct: "a",
  },
  {
    question: `hamare ird-gird, abu-hawa me kia pae jate han?`,
    a: `macro orginisms`,
    b: `micro orginisms`,
    c: `multi cellular organisms`,
    d: `all of these`,
    correct: "b",
  },
  {
    question: `bacteria jin se ham kam lete han wo kia kehlate han?`,
    a: `good bacteria`,
    b: `useful bacteria`,
    c: `non-piosoned bacteria`,
    d: `Eatable bacteria`,
    correct: "b",
  },
  {
    question: `sirf jandaar k jism me zinda reh sakta hy osk bahar nai`,
    a: `viruses`,
    b: `fungi`,
    c: `bacteria`,
    d: `protozoa`,
    correct: "a",
  },
  {
    question: `murda chizon k zehrile matter ko kon simple components me decompose krta hy?`,
    a: `viruses`,
    b: `fungi`,
    c: `bacteria`,
    d: `consumers`,
    correct: "b",
  },
  {
    question: `mare hoe jandaron ko wapis ecosystem me recycle krta hy?`,
    a: `viruses`,
    b: `fungi`,
    c: `bacteria`,
    d: `sare decomposers`,
    correct: "d",
  },
  {
    question: `decomposition k latadad faede han lekn enk koch noksan bhi han, jaese k?`,
    a: `mahole ka aluda hona`,
    b: `dudh ka phatna`,
    c: `global warming`,
    d: `dehydration`,
    correct: "b",
  },
  {
    question: ` hepatitis kaesi bimari hy?`,
    a: `water-borne Diseases`,
    b: `Food-borne Diseases`,
    c: `air-borne Diseases`,
    d: `animal-borne Diseases`,
    correct: "b",
  },
  {
    question: `hamare jism me __ ki miqdaar hamare jism k cells se bhi ziada btai jati hy?`,
    a: `viruses`,
    b: `fungi`,
    c: `bacteria`,
    d: `protozoa`,
    correct: "c",
  },
  {
    question: `shape ki basis pe bacteria ___ kison me divided hy?`,
    a: `1`,
    b: `3`,
    c: `2`,
    d: `4s`,
    correct: "b",
  },
];
const quizDatags5ch3 = [
  {
    question: `male reproductive part of flower is?`,
    a: `sepal`,
    b: `petal`,
    c: `carpel`,
    d: `stamen`,
    correct: "d",
  },
  {
    question: `which attracts birds toward flower`,
    a: `sepal`,
    b: `petal`,
    c: `carpel`,
    d: `stamen`,
    correct: "b",
  },
  {
    question: `pollen grains are formed in?`,
    a: `sepal`,
    b: `petal`,
    c: `anther`,
    d: `stamen`,
    correct: "c",
  },
  {
    question: `female reproductive part of flower is?`,
    a: `sepal`,
    b: `petal`,
    c: `carpel`,
    d: `stamen`,
    correct: "c",
  },
  {
    question: `What is the function of the stigma in a flower?`,
    a: `Producing pollen`,
    b: `Attracting pollinators`,
    c: `Receiving pollen`,
    d: `Protecting the flower`,
    correct: "c",
  },
  {
    question: `Which part of the flower connects the stigma to the ovary?`,
    a: `Filament`,
    b: `Anther`,
    c: `Style`,
    d: `Sepal`,
    correct: "c",
  },
  {
    question: `Which part of the flower contains ovules that develop into seeds after fertilization?`,
    a: `Sepal`,
    b: `Petal`,
    c: `Ovary`,
    d: `Pistil`,
    correct: "c",
  },
  {
    question: `the process is called ___ if pollan grains of same plant transfers from anther to stigma?`,
    a: `self-pollination`,
    b: `cross-polination`,
    c: `by-pollination`,
    d: `Pollen transfer`,
    correct: "a",
  },
  {
    question: `the process is called ___ if pollan grains of a plant transfers to the stigma of another plant?`,
    a: `self-pollination`,
    b: `cross-polination`,
    c: `by-pollination`,
    d: `Pollen transfer`,
    correct: "b",
  },
  {
    question: `Why is cross pollination must for papaya plants?`,
    a: `To increase the yield of male flowers`,
    b: `To prevent the growth of female flowers`,
    c: `To promote the growth of self-pollinated seeds`,
    d: `due to separate male and female plants`,
    correct: "d",
  },
  {
    question: `Asexual reproduction in plants does NOT involve`,
    a: `new plant formation`,
    b: `male and female required`,
    c: `generation forward`,
    d: `<p style = "font-size: 10px;">baby plant partially inherits characteristics from parents</p>`,
    correct: "b",
  },
  {
    question: `The outer covering of seed is called?`,
    a: `seed coat`,
    b: `seed case`,
    c: `seed cover`,
    d: `outer seed`,
    correct: "a",
  },
  {
    question: `shoot rises from`,
    a: `plumule`,
    b: `embryo`,
    c: `cityledons`,
    d: `microplye`,
    correct: "a",
  },
  {
    question: `in seed germination, which of the following starts growing towards ground OR <br>which of the following is responsible for growing root?`,
    a: `plumule`,
    b: `radicle`,
    c: `embryo`,
    d: `microplye`,
    correct: "b",
  },
  {
    question: `in seed germination, which of the following starts growing upward OR <br>which of the following is responsible for growing shoot?`,
    a: `plumule`,
    b: `radicle`,
    c: `embryo`,
    d: `microplye`,
    correct: "a",
  },
  {
    question: `Maize is a monocot plant. its seed is sub divided into __ cotyledon, a radicle and a plumule.`,
    a: `1`,
    b: `2`,
    c: `3`,
    d: `4`,
    correct: "a",
  },
  {
    question: `which is male reproductive part. it is sub divided into __ parts`,
    a: `overy, 1`,
    b: `stamen, 2`,
    c: `stamen, 3`,
    d: `carpel,2`,
    correct: "b",
  },
  {
    question: `carpel is female reproductive part. it is sub divided into __ parts`,
    a: `1`,
    b: `2`,
    c: `3`,
    d: `4`,
    correct: "c",
  },
  {
    question: `__ stores food in monocot seed`,
    a: `endosperm`,
    b: `cotyledon`,
    c: `embryo`,
    d: `radicle`,
    correct: "a",
  },
  {
    question: `does endosperm is present in dicot seed`,
    a: `no`,
    b: `yes`,
    c: `some of them have`,
    d: `___`,
    correct: "a",
  },
];
const quizDatags5ch4 = [
  {
    question: `Which of the following is a major source of air pollution?`,
    a: `Industrial emissions`,
    b: `Soil erosion`,
    c: `Noise pollution`,
    d: `Plastic waste`,
    correct: "a",
  },
  {
    question: `Acid rain is primarily caused by the release of which pollutant into the atmosphere?`,
    a: `Carbon dioxide (CO2)`,
    b: `Nitrogen oxides (NOx)`,
    c: `Sulfur dioxide (SO2)`,
    d: `Methane (CH4)`,
    correct: "c",
  },
  {
    question: `What is the main cause of water pollution in many developing countries?`,
    a: `Agricultural runoff`,
    b: `Radioactive waste`,
    c: `Oil spills`,
    d: `Air pollution`,
    correct: "a",
  },
  {
    question: `Which type of pollution is associated with the excessive use of pesticides and fertilizers in agriculture?`,
    a: `Noise pollution`,
    b: `Light pollution`,
    c: `Land pollution`,
    d: `Chemical pollution`,
    correct: "c",
  },
  {
    question: `mainly which gas act as a green house glass in the atmosphere?`,
    a: `Carbon dioxide (CO2)`,
    b: `Nitrogen oxides (NOx)`,
    c: `Sulfur dioxide (SO2)`,
    d: `Methane (CH4)`,
    correct: "a",
  },
  {
    question: `The substances which cause pollution are called`,
    a: `green house gases`,
    b: `harmful substances`,
    c: `pollutants`,
    d: `polluted substances`,
    correct: "c",
  },
  {
    question: `fish die due to lack of oxygen. which type of pollution is this?`,
    a: `Chemical pollution`,
    b: `Land pollution`,
    c: `water pollution`,
    d: `Noise pollution`,
    correct: "c",
  },
  {
    question: `the pollutants such as chemicals and carbon dioxide, causes?`,
    a: `throat`,
    b: `skin diseases`,
    c: `all of them`,
    d: `eye diseases`,
    correct: "c",
  },
  {
    question: `temprature increases in greenhouse effect due to?`,
    a: `global warming`,
    b: `Ozone layer absorbs heat`,
    c: `Trapped heat by greenhouse gases`,
    d: `Increased solar radiation`,
    correct: "c",
  },
  {
    question: `Which of the following is a preventive measure to reduce air pollution?`,
    a: `Dumping waste in rivers`,
    b: `using plastic bottles`,
    c: `Planting trees`,
    d: ` Using chemical fertilizers`,
    correct: "c",
  },
  {
    question: `What is a recommended preventive measure to reduce water pollution?`,
    a: `Using pesticides extensively`,
    b: `Burning fossil fuels`,
    c: `Proper disposal of hazardous waste`,
    d: `Increasing deforestation`,
    correct: "c",
  },
  {
    question: `which is good to use for healthy Environment?`,
    a: `Recycleable materials`,
    b: `non-biodegradable materials`,
    c: `biodegradable materials`,
    d: `non-recycleable materials`,
    correct: "c",
  },
];
const quizDatags5ch5 = [
  {
    question: `the change of milk into yogurt is`,
    a: `physical change`,
    b: `Climate change`,
    c: `Chemical change`,
    d: `Temporary change`,
    correct: "c",
  },
  {
    question: `Why did a person paint his iron gate?<br><br>
1. To save from rusting   2. To save from sunlight<br>
3. To make it beautiful   4. To save from water`,
    a: `1 and 2`,
    b: `1 and 4`,
    c: `1 and 3`,
    d: `2 and 4`,
    correct: "c",
  },
  {
    question: `Which one is not a chemical change?`,
    a: `Seed germination`,
    b: `Burning of wood`,
    c: `Making paper boat`,
    d: `Cookin food`,
    correct: "c",
  },
  {
    question: `Which factor will not affect the dissolving of sugar in water?`,
    a: `Making sugar powder by grinding.`,
    b: `Stirring water and sugar`,
    c: `Adding salt in water`,
    d: `Heating water and sugar`,
    correct: "c",
  },
  {
    question: `What type of change is it when metal expands on heating?`,
    a: `Permanent`,
    b: `Physical`,
    c: `Temporary`,
    d: `Chemical`,
    correct: "c",
  },
  {
    question: `Changing a gas into a liquid is called`,
    a: `rusting`,
    b: `melting`,
    c: `condensation`,
    d: `freezing`,
    correct: "c",
  },
  {
    question: `wet clothes are dried due to`,
    a: `rusting`,
    b: `evaporation`,
    c: `condensation`,
    d: `freezing`,
    correct: "b",
  },
  {
    question: `why particals do not remain at fixed position while melting?`,
    a: `density change`,
    b: `<p style = "font-size: 13px;">force of attraction between particals increases</p>`,
    c: `<p style = "font-size: 13px;">force of attraction between particals decreases</p>`,
    d: `due to high flame`,
    correct: "c",
  },
  {
    question: `removel of heat from particals of water, cause?`,
    a: `evaporation`,
    b: `melting`,
    c: `freezing`,
    d: `cooling`,
    correct: "c",
  },
  {
    question: `which of them can occur at any temperature?`,
    a: `freezing`,
    b: `melting`,
    c: `evaporation`,
    d: `boiling`,
    correct: "c",
  },
  {
    question: `change in state of matter occur due to change in`,
    a: `mass`,
    b: `density`,
    c: `temperature`,
    d: `volume`,
    correct: "c",
  },
  {
    question: `opposite of boiling is?`,
    a: `evaporation`,
    b: `melting`,
    c: `Condensation`,
    d: `freezing`,
    correct: "c",
  },
  {
    question: `is moisture a gas?`,
    a: `yes`,
    b: `___`,
    c: `no`,
    d: ``,
    correct: "c",
  },
];
const quizDatags5ch6 = [
  {
    question: `light is a form of`,
    a: `natural object`,
    b: `particle`,
    c: `energy`,
    d: `matter`,
    correct: "c",
  },

  {
    question: `Faint image is seen across a ___ object.`,
    a: `luminous`,
    b: `transparent`,
    c: `translucent`,
    d: `Non-Luminous`,
    correct: "c",
  },

  {
    question: `light travels with`,
    a: `30,00Mm/s`,
    b: `300,000mm/s`,
    c: `300,000km/s`,
    d: `30,000km/s`,
    correct: "c",
  },

  {
    question: `light travel in air`,
    a: `cannot travel`,
    b: `along curved path`,
    c: `along straight path`,
    d: `in circle`,
    correct: "c",
  },

  {
    question: `which object reflect maximum light?`,
    a: `coloured object`,
    b: `white paper`,
    c: `mirror`,
    d: `brick wall`,
    correct: "c",
  },

  {
    question: `speed of sound is maximum in`,
    a: `air`,
    b: `water`,
    c: `a metal wire`,
    d: `vacuum`,
    correct: "c",
  },

  {
    question: `when sound enter in water comming from air. its speed`,
    a: `remain unchanged`,
    b: `sound will stope`,
    c: `increase`,
    d: `decrease`,
    correct: "c",
  },

  {
    question: `if the distance between the listener and the source of sound increase. the intensity of sound will?`,
    a: `double`,
    b: `remain constant`,
    c: `decrease`,
    d: `increase`,
    correct: "c",
  },

  {
    question: `Sounds travel faster through solid objects than the air.`,
    a: ``,
    b: `false`,
    c: `true`,
    d: ``,
    correct: "c",
  },

  {
    question: `Sound can travel through water.`,
    a: ``,
    b: `false`,
    c: `true`,
    d: ``,
    correct: "c",
  },

  {
    question: `speed of sound in water and air`,
    a: `340mm/s and 1500mm/s`,
    b: `340km/s and 1500km/s`,
    c: `340m/s and 1500m/s`,
    d: `240m/s and 150m/s`,
    correct: "c",
  },

  {
    question: `speed of sound in iron`,
    a: `5000km/s`,
    b: `5000mm/s`,
    c: `5000m/s`,
    d: `500m/s`,
    correct: "c",
  },

  {
    question: `Sound passes through solid object`,
    a: ``,
    b: ``,
    c: `true`,
    d: `false`,
    correct: "c",
  },

  {
    question: `sun seems to be silent to us beacuse`,
    a: `of high frequency sound of sun`,
    b: `of long distance`,
    c: `of vacuum`,
    d: `of air`,
    correct: "c",
  },

  {
    question: `shadow of the object will always be in`,
    a: `parallel to the object`,
    b: `perpendicular to the object`,
    c: `opposite to the object`,
    d: `same direction`,
    correct: "c",
  },

  {
    question: `The bouncing back of light from a non transparent
surface is called`,
    a: `bending of light`,
    b: `nested light`,
    c: `reflection`,
    d: `refraction`,
    correct: "c",
  },

  {
    question: `why do we see the image of the nearby tree in a lake`,
    a: `due to refraction of light`,
    b: `due to height of tree`,
    c: `due to reflection of light`,
    d: `due to transparency of water`,
    correct: "c",
  },

  {
    question: `When an object is at greater distance from the source of light, its shadow becomes smaller.`,
    a: ``,
    b: ``,
    c: `true`,
    d: `false`,
    correct: "c",
  },

  {
    question: `the object allow light to pass partially through are called?`,
    a: `rigid object`,
    b: `opaque`,
    c: `translucent`,
    d: `transparent`,
    correct: "c",
  },

  {
    question: `the object do not allow light to pass through are called?`,
    a: ``,
    b: `opaque`,
    c: `translucent`,
    d: `transparent`,
    correct: "b",
  },

  {
    question: `time taken by light to travel from sun to earth`,
    a: `1.5sec`,
    b: `8.3min`,
    c: `8sec`,
    d: `1.2sec`,
    correct: "a",
  },

  {
    question: `time taken by light to travel from moon to earth`,
    a: `1.5sec`,
    b: `8.3min`,
    c: `8min`,
    d: `8.2min`,
    correct: "b",
  },

  {
    question: `Sound is produced by a vibrating body.`,
    a: ``,
    b: ``,
    c: `true`,
    d: `false`,
    correct: "c",
  },
];
const quizDatags5ch7 = [
  {
    question: "What is Static Electricity?",
    a: "The flow of electric current in a circuit",
    b: "The accumulation of electric charge on an object",
    c: "The resistance to the flow of electric current",
    d: "The conversion of electrical energy into other forms",
    correct: "b",
  },

  {
    question: "What is Charge?",
    a: "The flow of electric current in a circuit",
    b: "The accumulation of electric charge on an object",
    c: "The resistance to the flow of electric current",
    d: "The conversion of electrical energy into other forms",
    correct: "b",
  },

  {
    question: "What are the Types of Charge?",
    a: "Positive and negative",
    b: "Protons and neutrons",
    c: "Electrons and positrons",
    d: "Up and down",
    correct: "a",
  },

  {
    question: "What happens when same charges are brought close to each other?",
    a: "They attract each other",
    b: "They repel each other",
    c: "They cancel each other out",
    d: "They become neutral",
    correct: "b",
  },

  {
    question:
      "What happens when opposite charges are brought close to each other?",
    a: "They attract each other",
    b: "They repel each other",
    c: "They cancel each other out",
    d: "They become neutral",
    correct: "a",
  },

  {
    question: "How do clouds become charged?",
    a: "By rubbing with air",
    b: "By rubbing with the ground",
    c: "By absorbing sunlight",
    d: "By absorbing water vapor",
    correct: "a",
  },

  {
    question: "What happens to a material when it loses electrons?",
    a: "It becomes positively charged",
    b: "It becomes negatively charged",
    c: "It becomes neutral",
    d: "It becomes a conductor",
    correct: "a",
  },

  {
    question: "What is the flow of charges called?",
    a: "Electric current",
    b: "Electric potential",
    c: "Electric resistance",
    d: "Electric voltage",
    correct: "a",
  },

  {
    question: "What is a switch used for in an electric circuit?",
    a: "To generate electricity",
    b: "To store electricity",
    c: "To control the flow of charge",
    d: "To measure electric current",
    correct: "c",
  },

  {
    question: "What is an electric circuit?",
    a: "A closed loop of wires",
    b: "A device that generates electricity",
    c: "A path of flow of current",
    d: "A component used in electrical systems",
    correct: "c",
  },

  {
    question: "What are the components of an electric circuit?",
    a: "Bulb, battery, switch",
    b: "Wire, resistor, capacitor",
    c: "Transformer, inductor, diode",
    correct: "a",
  },

  {
    question: "How many cells does a battery typically consist of?",
    a: "One",
    b: "Two",
    c: "Three",
    correct: "b",
  },

  {
    question: "What is an open circuit?",
    a: "A circuit with a broken path, interrupting the flow of current",
    b: "A circuit with a continuous path for the flow of current",
    c: "A circuit with no components",
    correct: "a",
  },

  {
    question: "What is a closed circuit?",
    a: "A circuit with a broken path, interrupting the flow of current",
    b: "A circuit with a continuous path for the flow of current",
    c: "A circuit with no components",
    correct: "b",
  },

  {
    question: "What are materials through which current can pass called?",
    a: "Insulators",
    b: "Conductors",
    c: "Semiconductors",
    correct: "b",
  },

  {
    question: "What are materials through which current cannot pass called?",
    a: "Conductors",
    b: "Insulators",
    c: "Semiconductors",
    correct: "b",
  },

  {
    question:
      "Which material is an insulator for electricity but a conductor of heat?",
    a: "Diamond",
    b: "Copper",
    c: "Aluminum",
    correct: "a",
  },

  {
    question: "What is the purpose of a fuse?",
    a: "To control the flow of charge",
    b: "To measure electric current",
    c: "To protect the circuit from overloading or short-circuiting",
    correct: "c",
  },

  {
    question: "What is used instead of a fuse in some electrical systems?",
    a: "Circuit breakers",
    b: "Capacitors",
    c: "Resistors",
    correct: "a",
  },

  {
    question: "How would you define a magnet?",
    a: "A device that generates electricity",
    b: "An object that attracts iron",
    c: "A material that repels charges",
    correct: "b",
  },

  {
    question: "What are magnetic materials called?",
    a: "Attractive materials",
    b: "Ferromagnetic materials",
    c: "Non-magnetic materials",
    correct: "b",
  },

  {
    question: "Can any material be magnetized to make magnets?",
    a: "Yes, any material can be magnetized",
    b: "No, only magnetic materials can be magnetized",
    c: "Only metals can be magnetized",
    correct: "b",
  },

  {
    question: "What is a natural magnet called?",
    a: "Electromagnet",
    b: "Artificial magnet",
    c: "Lodestone",
    correct: "c",
  },

  {
    question: "In which direction does a freely suspended magnet point?",
    a: "East-West direction",
    b: "South-North direction",
    c: "Random direction",
    correct: "b",
  },

  {
    question: "What are the ends of a magnet called?",
    a: "North and south poles",
    b: "Positive and negative poles",
    c: "East and west poles",
    correct: "a",
  },

  {
    question: "Where is the magnetic force of a magnet the strongest?",
    a: "At the middle of the magnet",
    b: "At the ends of the magnet",
    c: "Equally strong everywhere on the magnet",
    correct: "b",
  },

  {
    question: "How do like magnetic poles interact?",
    a: "They attract each other",
    b: "They repel each other",
    c: "They have no effect on each other",
    correct: "b",
  },

  {
    question: "What is the Earth considered to be?",
    a: "A huge insulator",
    b: "A huge conductor",
    c: "A huge magnet",
    correct: "c",
  },

  {
    question: "How many types of magnets are there?",
    a: "One",
    b: "Two",
    c: "Three",
    correct: "c",
  },

  {
    question: "What type of magnets are made of iron?",
    a: "Temporary magnets",
    b: "Permanent magnets",
    c: "Electromagnets",
    correct: "a",
  },

  {
    question:
      "What is it called when a nail or a rod becomes a magnet when placed in a current-carrying coil?",
    a: "Ferromagnetism",
    b: "Magnetization",
    c: "Electromagnet",
    correct: "c",
  },

  {
    question: "Is charge a basic property of matter?",
    a: "Yes",
    b: "No",
    correct: "a",
  },
];
const quizDatags5ch8 = [
  {
    question: `What is the structure of the Earth?`,
    a: "Crust, mantle, and core",
    b: "Atmosphere, hydrosphere, and lithosphere",
    c: "Troposphere, stratosphere, and mesosphere",
    d: "Outer core, inner core, and asthenosphere",
    correct: "a",
  },
  {
    question: `Where do we live on the Earth?`,
    a: "Mantle",
    b: "Crust",
    c: "Core",
    d: "Lithosphere",
    correct: "b",
  },
  {
    question: `What is the average thickness of the Earth's crust?`,
    a: "1 km to 10 km",
    b: "20 km to 50 km",
    c: "5 km to 70 km",
    d: "100 km to 500 km",
    correct: "c",
  },
  {
    question: `Which layer of the Earth has a thickness of about 3,900 km?`,
    a: "Mantle",
    b: "Crust",
    c: "Core",
    d: "Lithosphere",
    correct: "c",
  },
  {
    question: `What is the hottest part of the Earth?`,
    a: "Mantle",
    b: "Crust",
    c: "Core",
    d: "Lithosphere",
    correct: "c",
  },
  {
    question: `What percentage of water is frozen in the form of glaciers?`,
    a: "10%",
    b: "25%",
    c: "50%",
    d: "2%",
    correct: "d",
  },
  {
    question: `What percentage of water in the oceans is not drinkable due to its salt content?`,
    a: "3%",
    b: "20%",
    c: "50%",
    d: "97%",
    correct: "d",
  },
  {
    question: `What are the sources of water?`,
    a: "Air, soil, and rocks",
    b: "Oceans, glaciers, and rivers",
    c: "Lakes, springs, and underground water",
    d: "All of the above",
    correct: "d",
  },
  {
    question: `What is the process by which water circulates between the Earth's surface and the atmosphere?`,
    a: "Water filtration",
    b: "Water purification",
    c: "Water cycle",
    d: "Water evaporation",
    correct: "c",
  },
  {
    question: `What is the natural material on the Earth's surface that supports plant growth?`,
    a: "Water",
    b: "Air",
    c: "Soil",
    d: "Rocks",
    correct: "c",
  },
  {
    question: `What are the components of soil?`,
    a: "Sand, clay, and silt",
    b: "Water, minerals, and organic matter",
    c: "Bacteria, fungi, and insects",
    d: "Roots, leaves, and stems",
    correct: "b",
  },
  {
    question: `What are the characteristics of soil?`,
    a: "Color, texture, and fertility",
    b: "Density, conductivity, and acidity",
    c: "Temperature, pressure, and humidity",
    d: "Thickness, hardness, and permeability",
    correct: "a",
  },
  {
    question: `How many types of soil are there?`,
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "c",
  },
  {
    question: `Which type of soil is known for its fine particles and high water-holding capacity?`,
    a: "Clay",
    b: "Sand",
    c: "Silt",
    d: "Loam",
    correct: "a",
  },
  {
    question: `Which type of soil is characterized by its coarse particles and low water-holding capacity?`,
    a: "Clay",
    b: "Sand",
    c: "Silt",
    d: "Loam",
    correct: "b",
  },
  {
    question: `Which type of soil has medium-sized particles and moderate water-holding capacity?`,
    a: "Clay",
    b: "Sand",
    c: "Silt",
    d: "Loam",
    correct: "c",
  },
  {
    question: `Which type of soil is considered best for fertilization?`,
    a: "Clay",
    b: "Sand",
    c: "Silt",
    d: "Loam",
    correct: "d",
  },
  {
    question: `How does soil absorb water?`,
    a: "Through evaporation",
    b: "Through condensation",
    c: "Through precipitation",
    d: "Through capillary action",
    correct: "d",
  },
  {
    question: `What are the uses of clay, sand, and silt, respectively?`,
    a: "Pottery, glass, cultivation",
    b: "Glass, pottery, cultivation",
    c: "Cultivation, pottery, glass",
    d: "Cultivation, glass, pottery",
    correct: "a",
  },
  {
    question: `How many parts does the Earth have based on its structure?`,
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "c",
  },
  {
    question: `Which layer of the Earth consists of the sea and solid rocks?`,
    a: "Crust",
    b: "Mantle",
    c: "Core",
    d: "Lithosphere",
    correct: "a",
  },
  {
    question: `What is the middle layer of the Earth composed of?`,
    a: "Water and air",
    b: "Magma and lava",
    c: "Extremely hot thick fluid",
    d: "Solid rocks and minerals",
    correct: "c",
  },
  {
    question: `What is the hottest and heaviest part of the Earth?`,
    a: "Crust",
    b: "Mantle",
    c: "Core",
    d: "Lithosphere",
    correct: "c",
  },
  {
    question: `Which of the following are sources of water?`,
    a: "Deserts, forests, and mountains",
    b: "Oceans, glaciers, and rivers",
    c: "Atmosphere, clouds, and rain",
    d: "Wells, pipes, and taps",
    correct: "b",
  },
  {
    question: `How many types of soil are there?`,
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "c",
  },
  {
    question: `What is the term for the decayed matter that makes

the soil fertile?`,
    a: "Humus",
    b: "Compost",
    c: "Mulch",
    d: "Fertilizer",
    correct: "a",
  },
];
const quizDatags5ch9 = [
  {
    question: `The first artificial satellite was sent into space in?`,
    a: "1957",
    b: "1969",
    c: "1972",
    d: "1985",
    correct: "a",
  },
  {
    question: `How long does it take for a geo-stationary satellite to complete one orbit?`,
    a: "24 hours",
    b: "12 hours",
    c: "1 week",
    d: "1 month",
    correct: "a",
  },
  {
    question: `First man to step on the moon`,
    a: "Neil Armstrong",
    b: "Buzz Aldrin",
    c: "Yuri Gagarin",
    d: "John Glenn",
    correct: "a",
  },
  {
    question: `The system that locates the position of an object on the surface of the earth is`,
    a: "GPS",
    b: "GLONASS",
    c: "Galileo",
    d: "Beidou",
    correct: "a",
  },
  {
    question: `International Space Station is a human-made huge laboratory orbiting in space around the Earth`,
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: `Satellites are used for very useful purposes such as communication, navigation, TV display worldwide, survey, weather monitoring, and spying, etc.`,
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: `Geo-stationary satellites keep pace with the Earth and complete one orbit in one day.`,
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: `Artificial satellites are objects put into orbits around the Earth by human beings.`,
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: `A satellite is an object that revolves around another big object due to its gravity.`,
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: `NASA is an American agency responsible for space exploration and aviation.`,
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: `Space is the unlimited expanse in which all heavenly bodies such as Moon, Earth, Sun, stars, and galaxies are located.`,
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: `Soviet Union launches the 1st-ever Sputnik-1.`,
    a: "October 4, 1957",
    b: "July 20, 1969",
    c: "April 12, 1961",
    d: "November 3, 1957",
    correct: "a",
  },
  {
    question: `Neil Armstrong became the first man to walk on the Moon in the Apollo-11 mission.`,
    a: "July 20, 1969",
    b: "October 4, 1957",
    c: "April 12, 1961",
    d: "November 3, 1957",
    correct: "a",
  },
  {
    question: `Completion of "Global Positioning System" (GPS).`,
    a: "1978",
    b: "1995",
    c: "2000",
    d: "1983",
    correct: "b",
  },
  {
    question: `First piece of the International Space Station is launched.`,
    a: "November 20, 1998",
    b: "July 20, 1969",
    c: "October 4, 1957",
    d: "April 12, 1961",
    correct: "a",
  },
  {
    question: `How many satellites are there in GPS?`,
    a: "24",
    b: "31",
    c: "40",
    d: "50",
    correct: "b",
  },
  {
    question: `Natural satellite of Earth`,
    a: "Sun",
    b: "Moon",
    c: "Mars",
    d: "Venus",
    correct: "b",
  },
  {
    question: `How many geo-satellites can cover the whole earth?`,
    a: "1",
    b: "3",
    c: "6",
    d: "8",
    correct: "a",
  },
  {
    question: `The speed of rotation of the earth over the equator`,
    a: "1670 kilometers per hour",
    b: "2000 kilometers per hour",
    c: "2500 kilometers per hour",
    d: "3000 kilometers per hour",
    correct: "a",
  },
  {
    question: `Importance of artificial satellite`,
    a: "Communication",
    b: "Navigation",
    c: "Weather Monitoring",
    d: "All of the above",
    correct: "d",
  },
  {
    question: `The bright object that we see on the horizon just before sunrise or after sunset is the planet, Venus. It is also called the morning star.`,
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: `The Earth rotates about its axis from west to east.`,
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: `Satellite`,
    a: "An object revolving around another object",
    b: "A natural object orbiting the Earth",
    c: "A spacecraft sent into space",
    d: "All of the above",
    correct: "d",
  },
  {
    question: `The space age began on October 4, 1957`,
    a: "True",
    b: "False",
    correct: "a",
  },
];
const quizDatags5ch10 = [
  {
    question: "Making a technical model is a useful skill.",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: "Spirit level is used to check the level of horizontal surfaces.",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: "A mason uses a plumb line to keep a wall vertically straight.",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question:
      "It is essential to know the correct operating method and various precautions for assembling and operating machines and technical tools.",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question:
      "The knowledge of first aid and natural disaster management practices can save substantial financial and life losses.",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question:
      "If there is a fire extinguisher in your school, then read the printed instructions on it. Use it carefully in case of emergency.",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: "What is a plumb line used for?",
    a: "Checking horizontal surfaces",
    b: "Checking vertical alignment",
    c: "Measuring temperature",
    d: "Cleaning wounds",
    correct: "b",
  },
  {
    question: "What is the emergency phone call number?",
    a: "2211",
    b: "1133",
    c: "1122",
    d: "0911",
    correct: "c",
  },
  {
    question: "What is sterilized gauze used for?",
    a: "Checking blood pressure",
    b: "Finding body temperature",
    c: "As a bandage on wounds",
    d: "Cleaning the workplace",
    correct: "c",
  },
  {
    question: "What is saline water used for?",
    a: "Checking blood pressure",
    b: "Finding body temperature",
    c: "Cleaning wounds",
    d: "As a bandage on wounds",
    correct: "c",
  },
  {
    question: "What does a mason use to keep a wall vertical?",
    a: "Plumb line",
    b: "Spirit level",
    c: "Fire extinguisher",
    d: "Sterilized gauze",
    correct: "a",
  },
  {
    question: "What does the term 'first aid' refer to?",
    a: "Emergency phone call",
    b: "Fire extinguisher",
    c: "Treatment for injuries or illnesses",
    d: "Checking level of surfaces",
    correct: "c",
  },
  {
    question: "What is the purpose of a fire extinguisher?",
    a: "Checking blood pressure",
    b: "Finding body temperature",
    c: "Keeping walls vertical",
    d: "Putting out fires",
    correct: "d",
  },
  {
    question: "What is a spirit level used for?",
    a: "Checking blood pressure",
    b: "Finding body temperature",
    c: "Keeping walls vertical",
    d: "Checking level of surfaces",
    correct: "d",
  },
];
//quizdata for GS-5 ended and started for GS-4
const quizDatags4ch1 = [
  // {
  //     question: ``,
  //     a: ``,
  //     b: ``,
  //     c: ``,
  //     d: ``,
  //     correct: ``
  //   }
  {
    question: `How many milk teeth are in babies?<br>
    Bachon me kitne dant hote han`,
    a: `23`,
    b: `24`,
    c: `25`,
    d: `20`,
    correct: "d",
  },
  {
    question: `How many teeth are in adults?<br>
    Nojawano me kitne dant hote han?`,
    a: `30`,
    b: `24`,
    c: `32`,
    d: `31`,
    correct: "c",
  },
  {
    question: `Number of bones in babies.<br>
     Bachon me hadiyon ki tadaad`,
    a: `300`,
    b: `201`,
    c: `310`,
    d: `200`,
    correct: "a",
  },
  {
    question: `Number of bones in adults.<br>
    Nojawano me hadiyon ki tadaad`,
    a: `205`,
    b: `206`,
    c: `210`,
    d: `200`,
    correct: "b",
  },
  {
    question: `Largest bone in human body is __ which also called as FEMUR<br>
  Insani jisam ki sab se bari hadi ___ jo femur bhi kehlati hy`,
    a: `Thigh bone (Raan ki hadi)`,
    b: `Humerus (hath ki hadi)`,
    c: `Tibia (Ghutne se niche ki hadi)`,
    d: `none of them (en mese koi nai)`,
    correct: "a",
  },
  {
    question: `Smallest bone in human body<br>
    insani jisam ki sab se choti hadi`,
    a: `Stapes with 2.8mm`,
    b: `Stapes with 4mm`,
    c: `Malleus`,
    d: `Anvil bone`,
    correct: `a`,
  },
  {
    question: `Longest muscle in human body<br>
    insani jisam ka sab se bara ptha`,
    a: `Moulds`,
    b: `adsin`,
    c: `sartorius`,
    d: `stapedius`,
    correct: `c`,
  },
  {
    question: `Smallest muscle in human body<br>
    insani jisam ka sab se chota ptha `,
    a: `Moulds`,
    b: `adsin`,
    c: `sartorius`,
    d: `stapedius`,
    correct: `d`,
  },
  {
    question: `Powerful muscle in human body<br>
    insani jisam ka sab se takatwar ptha `,
    a: `masseter`,
    b: `adsin`,
    c: `sartorius`,
    d: `stapedius`,
    correct: `a`,
  },
  {
    question: `How much force a powerful muscle can provide<br>
    Takatwar ptha kitni takat lga sakta hy?`,
    a: `25kg to 90.7kg`,
    b: `25kg to 60.7kg`,
    c: `15kg to 20.7kg`,
    d: `5kg to 10.7kg`,
    correct: `a`,
  },
  {
    question: `Skin protect our internal organs<br>
    Hamari jild hamare andruni aza ko kin chizon se bachati hy
    `,
    a: `dust (matti se)`,
    b: `diseases (bimariuon se)`,
    c: `dust (matti se) and diseases (bimariuon se)`,
    d: `Non of these (en mese koi nai)`,
    correct: "c",
  },
  {
    question: `Ribcage protects our ___.  <br>
    pasliyan kis ko tahafuz farham krti han`,
    a: `heart (dill ko)`,
    b: `lungs(phephron ko)`,
    c: `kidney (gurdon ko)`,
    d: `heart (dill ko) and lungs(phephron ko)`,
    correct: "d",
  },
  {
    question: `The pipe that connects mouth and nose, with lungs is called___?<br>
    Wo pipe jo mu or nak ko phephron se milati hy, wo ___ kehlati hy?`,
    a: `Aesophegus`,
    b: `Trachea`,
    c: `libms`,
    d: `turnal pipe`,
    correct: "b",
  },
  {
    question: `Heart beats __ times in a minut<br>
    insani dil 1 minut me kitni bar dharak'ta hy?`,
    a: `70times`,
    b: `71times`,
    c: `72times`,
    d: `75times`,
    correct: "c",
  },
  {
    question: `transparent layer on eye in called ___?<br>
    insani ankh k oper shafaf jhali numa chadar ko kehte han`,
    a: `cornea`,
    b: `Iras`,
    c: `pupil`,
    d: `non of these`,
    correct: "a",
  },
  {
    question: `pupil is located in ____?<br>
    pupil kahan paya jata hy?`,
    a: `eye (ankh me)`,
    b: `eir (kan me)`,
    c: `brain (dimagh me)`,
    d: `heart (dill me)`,
    correct: "a",
  },
  {
    question: `outer Eir called ___<br>
    kan ka bahir wala hisa kehlata hy`,
    a: `papa`,
    b: `pinna`,
    c: `paniz`,
    d: `pnaiyz`,
    correct: "b",
  },
  {
    question: `The bones (Anvil, Hammer, and stapes) belongs to<br>
    ye hadiyan (Anvil, Hammer, and stapes) kaha pai jatin han?`,
    a: `eye (ankh me)`,
    b: `eir (kan me)`,
    c: `brain (dimagh me)`,
    d: `heart (dill me)`,
    correct: "b",
  },
  {
    question: `In a minut how many time we take breath<br>
    Ham 1 minut me kitni bar sance lete han?`,
    a: `10 se 15`,
    b: `15 se 20`,
    c: `15 se 25`,
    d: `20 se 22`,
    correct: "c",
  },
  {
    question: `Heart pumps how many liters of blood in a day?<br>
    Hamara dill 1 din me takriban kitne liter khoon jism me bhejta hy?`,
    a: `7500l se 6500l`,
    b: `6500l se 4500l`,
    c: `1500l se 3500l`,
    d: `en mese koi nai`,
    correct: "a",
  },
  {
    question: `Which organ provides oxygen to every cell of the body?<br>
    Kon jism k 1 1 khulye tak oxygen pohn'chata hy?`,
    a: `heart (dill)`,
    b: `Kidney (gurde)`,
    c: `Lungs (phephre)`,
    d: `en mese koi nai`,
    correct: "a",
  },
  {
    question: `__% of our body is made of ___?<br>
"hamare jism ka __% hisa __ par mushtamil hy?"`,
    a: "60%, water (60%, Pani)",
    b: "70%, water (70%, Pani)",
    c: "80%, Air (80%, Hawa)",
    d: "30%, Meat (30%, Goasht)",
    correct: "a",
  },
];
const quizDatags4ch1part2 = [
  {
    question: `Ecosystem ko barkarar rakhne k lie duniya me kia kam kia ja rha hy?`,
    a: `Road bnae ja rhe han`,
    b: `Darakhton se ghar bnae ja rhe han`,
    c: `Nae darakht lgae ja rhe han`,
    d: `facories lgai ja rai han`,
    correct: `c`,
  },
  {
    question: "Which planet does not have its moon?",
    a: "Saturn",
    b: "Mercury",
    c: "Neptune",
    d: "None of these",
    correct: "b",
  },
  {
    question: `Agar kire-Maar dawai hashraat ki abadi ko rokne k lie istamal ki jae to to parindon ki abadi___`,
    a: `Barh jae gi`,
    b: `Kam ho jae gi`,
    c: `Pehle kam, pher bhare gi`,
    d: `Fark nai pare ga`,
    correct: `b`,
  },
  {
    question: `titli,chirya or chamkadar me kia chiz mushtarik hy?`,
    a: `dant`,
    b: `bal`,
    c: `Hadiyan`,
    d: `par`,
    correct: `d`,
  },
  {
    question: `Phal(Fruits) paode k lie kia kam krte han?`,
    a: `Paude k bijh ki hifazat krna`,
    b: `Paude k bijh ko pani fraham krna`,
    c: `Paude k bijh ko jama krna`,
    d: `Paude k bijh k lie ghiza peda krna`,
    correct: `a`,
  },
  {
    question: `Jis paode me phul nai hota osme ____ nai hota?`,
    a: `Bijh`,
    b: `Phal`,
    c: `Pate`,
    d: `Jar`,
    correct: `b`,
  },
  {
    question: `Vertebrates me kia hota lazmi hy?`,
    a: `Hawa me or sakna`,
    b: `Rerh ki hadi ka hona`,
    c: `Paron ka hona`,
    d: `Hawa me or sakna + Paron ka hona`,
    correct: `b`,
  },
  {
    question: `Which of these keeps plant cooler?<br>
"Enme se kon podon ko thanda rakhta hy?"`,
    a: "water (pani)",
    b: "sun (suraj)",
    c: "fertilizer (khad)",
    d: "oxygin (oksign)",
    correct: "a",
  },
  {
    question: `What do trees inhale and exhale at night?<br>
"Darakht raat k wakt kon si gas hawa se lete or dete han?"<br>
CO2 = Carbon dioxide | O<sub>2</sub> = oxygen | CO = carbon monoxide`,
    a: "CO2 in and O<sub>2</sub> out | CO2 lete and O<sub>2</sub> dete",
    b: "CO2 out and O<sub>2</sub> in | CO2 dete and O<sub>2</sub> lete",
    c: "CO in | CO lete",
    d: "CO out | CO dete",
    correct: "b",
  },
  {
    question: `
does water helps plants to make food?<br>
"kia pani podon ko khoraak bnane me madad krta hy?"`,
    a: "NO | Nahin",
    b: "Yes | Han",
    c: "-----",
    d: "-----",
    correct: "b",
  },
  {
    question: `Why do plants need sunlight?<br>
"Suraj ki roshni podon ko milna qun zaroori hy?"`,
    a: "For making food | Khorak bnane k lie",
    b: "TO be green | Sabz rehne k lie",
    c: "For growth | Nasho numa k lie",
    d: "All of them | en sab k lie",
    correct: "a",
  },
  {
    question: `Movement is the CHARACTERISTICS of ?<br>
"Harkat krna kis ki khasiyat hy?"`,
    a: "Non-living things | Bejano ki",
    b: "living things | Jandaron ki",
    c: "both | Dono ki",
    d: "none of them | Ksi k lie b nai",
    correct: "b",
  },
  {
    question: `Does plants do Movement?<br>
"Kia podon me harkat pai jati hy?"`,
    a: "Yes | Han",
    b: "No | Nahin",
    c: "-----",
    d: "-----",
    correct: "a",
  },
  {
    question: `Which plant eats insects?<br>
"Kon sa poda kire makore khata hy?"`,
    a: "Touch-me-not | Choi-moi ",
    b: "Pitcher | Picher",
    c: "Lotus | Kawanl",
    d: "None of them | Koi b nai",
    correct: "b",
  },
  {
    question: `the term (INHERITED CHARACTERISTICS) refers to ___<br>
"Wrasti khasusiyan se kia morad hy?"`,
    a: "Characteristics from childer<br> Bachon se ain hoin khususiyaat",
    b: "Characteristics from parents<br> waliden se ain hoin khususiyaat",
    c: "Characteristics from Environment<br> Mahole se ain hoin khususiyaat",
    d: "-----",
    correct: "b",
  },
  {
    question: `What is Tadpole?<br>
"Tadpole kia hota hy?"`,
    a: "Baaby fish | Machli ka baacha",
    b: "Baby frog | Mendak ka baacha",
    c: "Baby Butterfly | Titli ka baacha",
    d: "-----",
    correct: "b",
  },
  {
    question: `What is Caterpillar?<br>
"Catrpilar kia hota hy?"`,
    a: "Baaby fish | Machli ka baacha",
    b: "Baby frog | Mendak ka baacha",
    c: "Baby Butterfly | Titli ka baacha",
    d: "-----",
    correct: "c",
  },
  {
    question: `Who makes Pupa during reproduction?<br>
"Toled k donar kon piyupa bnata hy?"`,
    a: "Butterfly, honeybee | Titli, shahid ki makhi",
    b: "frog | Mendak",
    c: "Butterfly | Titli",
    d: "Honeybee | Shahid ki makhi",
    correct: "a",
  },
  {
    question: `Female worker honeybees can not ___?<br>
"Mada karkun shahid ki makhiyan kia nahin kr saktin?"`,
    a: "Reproduction | Toleed",
    b: "Fly | Orna",
    c: "Honey eat | Shahid khana",
    d: "All of these | ye sab",
    correct: "a",
  },
  {
    question: `Queen bee lives for about _ years?<br>
"Malka makhi kitne saal tak zinda rehti hy?"`,
    a: "3 years | 3 saal",
    b: "4 years | 4 saal",
    c: "5 years | 5 saal",
    d: "6 years | 6 saal",
    correct: "c",
  },
  {
    question: `How many types of honeybees are there in honebee house?<br>
"Chate me kitne kisam ki shahid ki makhiyan hoti han?"`,
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    correct: "b",
  },
  {
    question: `What are Drons?<br>
"Drons kia hy?"`,
    a: "Honybee| shahid ki makhi ",
    b: "Male Honybee | Nar shahid ki makhi",
    c: "female Honybee | Mada shahid ki makhi",
    d: "-----",
    correct: "b",
  },
  {
    question: `Dron lives for about _ months?<br>
"Malka makhi kitne saal tak zinda rehti hy?"`,
    a: "1 to 3 Months | 1 ta 3 Mah",
    b: "1 to 4 Months | 1 ta 4 Mah",
    c: "1 to 5 Months | 1 ta 5 Mah",
    d: "1 to 6 Months | 1 ta 6 Mah",
    correct: "b",
  },
  {
    question: `Seeds are produced in?<br>
"Bijh kahan bante han?"`,
    a: "In Leaves | Paton me",
    b: "In flower | Phool me",
    c: "In shoot | Tane me",
    d: "In root | Jar me",
    correct: "b",
  },
  {
    question: `Pakistan ki Hukumat ne bohat se darakhton ko lagana shuru kia hai takay kya roka ja sake? `,
    a: `Oxygen ki ziada mikdaar`,
    b: `Bimari`,
    c: `Ghareebi`,
    d: `Maholiyati tabdili`,
    correct: "d",
  },
  {
    question: `Lahore ke nazdeek waqya Changa-Manga duniya ki sab se bara insani bnaya hoa jungle hai. `,
    a: `YES`,
    b: `NO`,
    c: `May be`,
    d: `Aesa koi jungle nahin hy`,
    correct: "a",
  },
  {
    question: `Kia sab danton ki shakal ek jesi hoti hai?`,
    a: `yes`,
    b: `No`,
    c: `-`,
    d: `-`,
    correct: "b",
  },
  {
    question: `Khoon aur hawa ke darmiyan oxygen ka tabadla kahan hota hai? `,
    a: `Dil mein `,
    b: `liver me`,
    c: `Mede me`,
    d: `Phaipron me`,
    correct: "d",
  },
  {
    question: `Sehatmand phaipron ki rangat aam tor par kya hoti hai? `,
    a: `Gulabi or Halka surkh`,
    b: `Surkh`,
    c: `Halka surkh`,
    d: `Gulabi`,
    correct: "a",
  },
  {
    question: `Phepre spungy (Foam) ki tarha qun hote han?`,
    a: `Phaipron ke andar pani ki kami `,
    b: `Phaipron mein jarasim ka hona `,
    c: `Phaipron ke andar alveoli ke naam se hawa k thele(air bags) hote hain woh hawa ki tabdeeli krte han`,
    d: `Phaipron ka size chota hona `,
    correct: "c",
  },
  {
    question: `Patte (leaves) ka ek sab se ahem kirdar kia hai? `,
    a: `Oxygen paida krna`,
    b: `Plant k liye khurak paida krna`,
    c: `Zamin se pani khenchna`,
    d: `Khubsurti dena`,
    correct: "b",
  },
  {
    question: `Phalon or beejon ko phol (flower) paida krta hai. Pholon ka or kia kirdar ho skty han? `,
    a: `Dawaiyan banane ka zariya`,
    b: `poudon ko Sidha khara krna`,
    c: `Apni khushbu se chote parindon ko apni traf mtawaja krna tak onk zariye se Reproduction(toleed) ho sake`,
    d: `ye sab`,
    correct: "c",
  },
  {
    question: `Kisi khas jagah par paye jane wali mukhtalif zinda chezain kia kahlati hain? `,
    a: `Ecosystem `,
    b: `Biodiversity `,
    c: `Biosphere`,
    d: `-`,
    correct: "b",
  },
  {
    question: `Podun ko kitni kismon me takseem kia gya hy?`,
    a: `1`,
    b: `2`,
    c: `3`,
    d: `4`,
    correct: "b",
  },
];
const quizDatags4ch2 = [
  {
    question: `Changa-Manga ---- jungle hy`,
    a: `Pakistan ka sab se bara`,
    b: `Duniya ka sab se bara qudrati (Natural)`,
    c: `Duniya ka sab se bara insani (Man-made)`,
    d: `Duniya ka sab se chota`,
    correct: `c`,
  },
  {
    question: `Wo janwar jo sirf paude, ghaas khate han, wo kia kehlate han?`,
    a: `Herbivores`,
    b: `Carnivores`,
    c: `predator`,
    d: `omnivores`,
    correct: `a`,
  },
  {
    question: `Ecosystem kon kon mil k bnate han?`,
    a: `Mokhtalif jandaar`,
    b: `Herbivores + omnivores`,
    c: `Jandar + Bejaan`,
    d: `Sirf bejaan`,
    correct: `c`,
  },
  {
    question: `Pond, Marine. Ye kis ki misalen han?`,
    a: `Bio-diversity`,
    b: `Environment`,
    c: `Ecosystem`,
    d: `GlobleSystem`,
    correct: `c`,
  },
  {
    question: `Ecosystem k 2 kon kon se components han?`,
    a: `Biotic + omnivores`,
    b: `Abiotic + Herbivores`,
    c: `Biotic + Abiotic`,
    d: `Herbivores + Carnivores`,
    correct: `c`,
  },
  {
    question: `Ecosystem kahan se start hota hy?`,
    a: `Producer se`,
    b: `Consumer se`,
    c: `Biotic se`,
    d: `omnivores se`,
    correct: `a`,
  },
  {
    question: `Producer kse kehte han or q kehte han?`,
    a: `Paudon ko qk ecosystem oxygin produce krte han`,
    b: `Paudon ko qk wo khoraak khud bnate han`,
    c: `Janwaron ko qk onki khaal se bhot si chizen bnai jati han`,
    d: `Parindon ko`,
    correct: `b`,
  },
  {
    question: `Bacteria kis ki misal han?`,
    a: `Producer`,
    b: `omnivores`,
    c: `Herbivores`,
    d: `Decomposers`,
    correct: `d`,
  },
  {
    question: `Insan kis ki misaal hy?`,
    a: `Producer`,
    b: `omnivores`,
    c: `Consumer`,
    d: `Consumer + omnivores`,
    correct: `d`,
  },
  {
    question: `Ecosystem me bejaan chizen kis ki misaal han?`,
    a: `Abiotic`,
    b: `Biotic`,
    c: `Producer`,
    d: `Consumer`,
    correct: `a`,
  },
  {
    question: `Ecosystem me jandaar chizen kis ki misaal han?`,
    a: `Abiotic`,
    b: `Biotic`,
    c: `Producer`,
    d: `Consumer`,
    correct: `b`,
  },
  {
    question: `Producer, consumer, decomposer ye tino kis ki kismen han?`,
    a: `Abiotic`,
    b: `Producer`,
    c: `Biotic`,
    d: `omnivores`,
    correct: `c`,
  },
  {
    question: `Lotus or algae apne ecosystem me kia khaas kirdar ada krte han?`,
    a: `Khoraak khud bnate han`,
    b: `Oxygen bnate han`,
    c: `system ko saaf krte han`,
    d: `Enme se koi bhi nahin`,
    correct: `a`,
  },
  {
    question: `Lotus or algae kis ecosystem ka hisa han?`,
    a: `Zamini ecosystem`,
    b: `Abi ecosystem`,
    c: `Jangli ecosystem`,
    d: `Hawai ecosystem`,
    correct: `b`,
  },
  {
    question: `Coral reef se kia morad hy?`,
    a: `Marjan ki colony`,
    b: `Marjaan ka mathar`,
    c: `Marjaan ka rang`,
    d: `Marjaan ki ankhen`,
    correct: `a`,
  },
  {
    question: `Coral (Marjaan) kahan paya jata hy?`,
    a: `Sehra me`,
    b: `Samandar me`,
    c: `Phulon me`,
    d: `Paharon me`,
    correct: `b`,
  },
  {
    question: `Ksi bhi ecosystem ki food chain kahan se start hoti hy?`,
    a: `omnivores se`,
    b: `Consumers se`,
    c: `Producers`,
    d: `Abiotic`,
    correct: `c`,
  },
  {
    question: `'Predator' se kia muraad hy?`,
    a: `Shekar krne wale janwar`,
    b: `Shekar hone wale janwar`,
    c: `Consumers`,
    d: `Producers`,
    correct: `a`,
  },
  {
    question: `'Prey' se kia muraad hy?`,
    a: `Shekar krne wale janwar`,
    b: `Shekar hone wale janwar`,
    c: `Consumer`,
    d: `Producer`,
    correct: `b`,
  },
  {
    question: `'Zebra' kis ki misaal hy?`,
    a: `Shekar krne wale janwar ki`,
    b: `Omnivores`,
    c: `Predators ki`,
    d: `Prey ki`,
    correct: `d`,
  },
  {
    question: `Predator jab Prey ka shekaar krta hy to ose kia kaha jata hy?`,
    a: `Bio-Diversity`,
    b: `predation`,
    c: `predating`,
    d: `prey killing`,
    correct: `b`,
  },
  {
    question: `Ecosystem me jandaar zinda rehne k lie kis pe enhesaar krta hy?`,
    a: `Garmi pe`,
    b: `Hawa pe`,
    c: `Dosre jandaar pe`,
    d: `Barish pe`,
    correct: `c`,
  },
  {
    question: `Kon sa jandaar Pathar-numa dikhta hy?`,
    a: `Kachwa`,
    b: `Coral`,
    c: `Machli`,
    d: `Makhi`,
    correct: `b`,
  },
  {
    question: `'Sahara' k bare me ap kia jante han?`,
    a: `Registan`,
    b: `Pakistan ka sab se bara registan`,
    c: `Duniya ka sab se bara registan`,
    d: `Sab se chota registan`,
    correct: `c`,
  },
  {
    question: `En me se kon sa sehra Balochistan me hy?`,
    a: `Kharan`,
    b: `Cholistan`,
    c: `Thar`,
    d: `Thal`,
    correct: `a`,
  },
  {
    question: `Wo jandaar jo gosht or sabza dono khate han onhen kia kehte han?`,
    a: `predator`,
    b: `Omnivores`,
    c: `Herbivores`,
    d: `Carnivores`,
    correct: `b`,
  },
  {
    question: `Wo jandaar jo sirf Gosht khate han onhen kia kehte han?`,
    a: `predator`,
    b: `Omnivores`,
    c: `Herbivores`,
    d: `Carnivores`,
    correct: `d`,
  },
];
const quizDatagn4ch3 = [
  {
    question: `Insan kis waja se bimar ho sakta hy?`,
    a: `Fiza ki aludgi se`,
    b: `Pani ki aludgi se`,
    c: `Khane ki kami se`,
    d: `En sab se`,
    correct: `d`,
  },
  {
    question: `Pani ka almi din kab mnaya jata hy?`,
    a: `15 Oct`,
    b: `30 Jan`,
    c: `25 March`,
    d: `22 March`,
    correct: `d`,
  },
  {
    question: `Bokhar me Temperature ---- hota hy?`,
    a: `98.60&deg;C se kam`,
    b: `98.60&deg;C se ziada`,
    c: `98.60&deg;C k braber`,
    d: `128.0&deg;C`,
    correct: `b`,
  },
  {
    question: `Khansi q hoti hy?`,
    a: `Gale me kharash se`,
    b: `Gale me jrasim se`,
    c: `Bokhar se`,
    d: `Gale me zakhim se`,
    correct: `a`,
  },
  {
    question: `Bokhar khud bimari nai hy balk ---- hy?`,
    a: `Bimari ki waja`,
    b: `Bimari ka side effect`,
    c: `Bimari ki alamat`,
    d: `ye sab`,
    correct: `c`,
  },
  {
    question: `'Thermometer' kis kam k lie bnaya gya hy?`,
    a: `Hararat napne k lie`,
    b: `Blood pressure napne k lie`,
    c: `wazan napne k lie`,
    d: `Nami napne k lie`,
    correct: `a`,
  },
  {
    question: `Khansi windpipe ko ---- krti hy?`,
    a: `Gila`,
    b: `Saaf`,
    c: `Bara`,
    d: `Khushk`,
    correct: `b`,
  },
  {
    question: `Chink --- bahar nekalne k lie ati hy?`,
    a: `Hawa`,
    b: `Jrasim`,
    c: `pani`,
    d: `khushki`,
    correct: `b`,
  },
  {
    question: `'Flu' kia hy?`,
    a: `Bimari`,
    b: `Bimari ki alamat`,
    c: `viruse`,
    d: `Bimari ki alamat + Bimari`,
    correct: `d`,
  },
  {
    question: `'Contagious Disease' es term k bare me ap kia jante han?`,
    a: `Insan se Insan ko na lagle wali bimari`,
    b: `Hawa k zarye phelne wali bimari`,
    c: `Mosami bokhar`,
    d: `Halka bokhar`,
    correct: `b`,
  },
  {
    question: `'Polio' kon si bimari hy?`,
    a: `Contagious Disease`,
    b: `Non-Contagious Disease`,
    c: `bacteria`,
    d: `---`,
    correct: `a`,
  },
  {
    question: `kia vaccine Polio ka ilaj hy?`,
    a: `Yes`,
    b: `NO`,
    c: `---`,
    d: `---`,
    correct: `b`,
  },
  {
    question: `Jo bimari hawa k zarye nahin phelti ose kia kehte han?`,
    a: `Contagious Disease`,
    b: `Non-Contagious Disease`,
    c: `bacterial Disease`,
    d: `Azpolizer Disease`,
    correct: `b`,
  },
  {
    question: `Cancer kis kisam ki bimari hay?`,
    a: `Contagious Disease`,
    b: `Non-Contagious Disease`,
    c: `bacterial Disease`,
    d: `Azpolizer Disease`,
    correct: `b`,
  },
  {
    question: `Contagious Disease se kaese bacha ja sakta hy?`,
    a: `Hath dhone se`,
    b: `Mask pahen'ne se`,
    c: `vaccine lagwane se`,
    d: `En sab se`,
    correct: `d`,
  },
  {
    question: `Mask ka istamal kon si bimari se bachao kr sakta hy?`,
    a: `Contagious Disease`,
    b: `Non-Contagious Disease`,
    c: `bacterial Disease`,
    d: `Azpolizer Disease`,
    correct: `a`,
  },
  {
    question: `Hath dhone ka almi din kab mnaya jata hy?`,
    a: `15 Oct`,
    b: `15 Aug`,
    c: `30 Jan`,
    d: `16 Oct`,
    correct: `a`,
  },
  {
    question: `Pani obalne se kia hota hy?`,
    a: `Saaf`,
    b: `ziada`,
    c: `kam`,
    d: `Thanda`,
    correct: `a`,
  },
  {
    question: `Filtration kis ka tarika hy?`,
    a: `Sanse lene       `,
    b: `Pani saaf krne`,
    c: `Pani thanda krne`,
    d: `Pani se madiniyat nekalne `,
    correct: `b`,
  },
  {
    question: `Filtration me istamal hone wala filter paper kia kam hota hy?`,
    a: `pani ko thanda krna`,
    b: `Pani ko chan'na`,
    c: `Pani ko ganda krna`,
    d: `Pani se namkiyat alag krna`,
    correct: `b`,
  },
  {
    question: `Kia Filtration k zarye jraseem pani se nekalte han hy?`,
    a: `Nahin`,
    b: `Koch koch nekale ja sakte han sare nai`,
    c: `Han`,
    d: `---`,
    correct: `b`,
  },
  {
    question: `Factory k dhuen se kia hota hy?`,
    a: `Fiza ki aludgi`,
    b: `Pani ki aludgi`,
    c: `Bimariyon me izafa`,
    d: `ye sab hota hy`,
    correct: `d`,
  },
  {
    question: `'Vaccination' ko kia kaha ja sakta hy?`,
    a: `Bimari ka ilaj`,
    b: `Bimari se bachao ka tarika`,
    c: `Dard se rehai ka tarika`,
    d: `ye sab`,
    correct: `b`,
  },
  {
    question: `Safai ka din kab mnaya jata hy?`,
    a: `15 Oct`,
    b: `15 Aug`,
    c: `30 Jan`,
    d: `16 Oct`,
    correct: `c`,
  },
  {
    question: `Balochistan me kitne hospitals han?`,
    a: `197`,
    b: `198`,
    c: `0`,
    d: `1`,
    correct: `a`,
  },
  {
    question: `Calcium ki mikdaar kis me ziada pai jati hy?`,
    a: "Gosht",
    b: "Dodh",
    c: "Daal",
    d: "Chawal",
    correct: "b",
  },
  {
    question: `Agar apko flu hoto ap dosron ko flu se bachane k lie kia kren ge?`,
    a: "Warzish kren ge",
    b: "Dhup me bethe ge?",
    c: "Mask pehne ge",
    d: "Ziada soen ge",
    correct: "c",
  },
  {
    question: `Polio kis ki waja se hota hy?`,
    a: "Bacteria",
    b: "Virus",
    c: "Makhi",
    d: "Machar",
    correct: "b",
  },
];
const quizDatagn4ch4 = [
  {
    question: `Jo chiz pani pe terti hy oska ki ___ pani se kam hota hy?`,
    a: `Volume (hujam)`,
    b: `Area`,
    c: `Density (Kshafat)`,
    d: `___`,
    correct: `c`,
  },
  {
    question: `En mese kis ka volume (hujam) sab se ziada hy?`,
    a: `Ktaab`,
    b: `cricket ka Bla`,
    c: `pencil`,
    d: `Scale`,
    correct: `b`,
  },
  {
    question: `En mese kon sa group Matter(mada) ki tino halton me sai hy?`,
    a: `Baraf, Barish, Badal`,
    b: `shabnam, Bokharaat, Barish`,
    c: `Baraf, Badal, Bhap`,
    d: `Barish, Bokharat, Badal`,
    correct: `a`,
  },
  {
    question: `Agar Lakri se bana or Lohe se bana hoe chamchon ko garam pani me dala jae to lohe wala chamach garam hoa hoga lekn lakri wala nai. qiun?`,
    a: `Loha hararat ka good conductor hy`,
    b: `Lakri hararat ki good conductor hy`,
    c: `Lakri pani me perti hy es lie `,
    d: `Pani ziada garam tha es lie`,
    correct: `a`,
  },
  {
    question: `Pani, Baraf or Bokharaat k temperatures Mokhtalif han. Sard se Garam ki tarteb kon si hogi?`,
    a: `Bokharat, Baraf, Pani`,
    b: `Baraf. Bokharaat, Pani, `,
    c: `Bokharaat, Pani, Baraf`,
    d: `Baraf, Pani, Bokharaat`,
    correct: `d`,
  },
  {
    question: `Lakri (wood) pani me q nahin dubti?`,
    a: `Kam volume ki waja se`,
    b: `Ziada voulme ki waja se`,
    c: `Ziada density ki waja se`,
    d: `Kam density ki waja se`,
    correct: `d`,
  },
  {
    question: `En mese kis ko Heavy Metal kaha jata hy, Density ki base pe?`,
    a: `Magnesium`,
    b: `Chromium`,
    c: `Aluminum`,
    d: `Titanium`,
    correct: `b`,
  },
  {
    question: `Neechay diye gaye dhaaton (Metals) me se kaun sa dhaat achha Conductor of Electricity hai?`,
    a: `Lead`,
    b: `Silver`,
    c: `Mercury`,
    d: `Gold`,
    correct: `b`,
  },
  {
    question: `Kon sa dhaat aam taur par bijli ke taar banane me istemal hota hai?`,
    a: `Zinc`,
    b: `Aluminum`,
    c: `Iron`,
    d: `Nickel`,
    correct: `b`,
  },
  {
    question: `Loha, tambe aur aluminum bartan banane me kyon istemal kiye jaate hain?`,
    a: `Halkay hote hain`,
    b: `Safaai karna aasan hota hai`,
    c: `Heat achi tarha Pas kr sakte han`,
    d: `Jaldi zang nai lagta`,
    correct: `c`,
  },

  {
    question: `Ksi b object me matter (mada) ki mikdaar ko kia kaha jata hy?`,
    a: "Mass",
    b: "weight",
    c: "Gravitional-Mas",
    d: "BMI",
    correct: "a",
  },
  {
    question: `Ksi b halat me matter ka kia tabdeel nai hota`,
    a: "Volume",
    b: "Mass",
    c: "Weight",
    d: "Area",
    correct: "b",
  },
  {
    question: `Makhsus hujam(Volume) or shakal(Shape) wale made(matter) se kia morad hy?`,
    a: "Thos (solid)",
    b: "Maya(Liquid)",
    c: "Gas",
    d: "Plasma",
    correct: "a",
  },
  {
    question: `Matter ki wo halat jis me makhsus hujam(Volume) or mokhtalif shakal(Shape) hoti hy ose kia kehte han?`,
    a: "Thos (solid)",
    b: "Maya(Liquid)",
    c: "Gas",
    d: "Plasma",
    correct: "b",
  },
  {
    question: `Jga jo Matter gherta hy ose kia kehte han?`,
    a: "Volume",
    b: "Mass",
    c: "Area",
    d: "---",
    correct: "a",
  },
  {
    question: `Pani agar 2 mukhtalif shakal k glason me ak jitna dala jae to oska kia same hoga?`,
    a: "volume(hojam)",
    b: "Shape(shakal)",
    c: "Height",
    d: "weight",
    correct: "a",
  },
  {
    question: `Ak mada(Matter) jitni jaga gherta hy wo oska --- kehlata hy?`,
    a: "Hujam(Volume)",
    b: "Shape(shakal)",
    c: "Mass",
    d: "---",
    correct: "a",
  },
  {
    question: `Solid ko asani se q press nahin kia ja sakta?`,
    a: "Osme partical ziada hote han",
    b: "oski skin strong hoti hy",
    c: "Gravity ziada hoti hy",
    d: "----",
    correct: "a",
  },
  {
    question: `Solid me force of attraction (khechao) kaesi hoti hy?`,
    a: "Strong",
    b: "Weak",
    c: "Mokhtalif",
    d: "Nahin hoti",
    correct: "a",
  },
  {
    question: `Liquid k particals me force of attraction solid ki nisbat ---- hoti hy?`,
    a: "ziada",
    b: "kam",
    c: "Braber",
    d: "Double",
    correct: "b",
  },
  {
    question: `Beh jana (to flow) kis ki khosusiyat hy?`,
    a: "solid ki",
    b: "Liquid ki",
    c: "Gas ki",
    d: "Plasma ki",
    correct: "b",
  },
  {
    question: `Gas me particals kis se kam hote han?`,
    a: "solid se",
    b: "solid or liquid dono se",
    c: "liquid se",
    d: "ksi se b nai",
    correct: "b",
  },
  {
    question: `Kis k particals freely move kr sakte han ksi b direction me?`,
    a: "solid k",
    b: "solid or liquid dono k",
    c: "liquid k",
    d: "Gas k",
    correct: "d",
  },
  {
    question: `Sare Metals ---- hote han?`,
    a: "shiny (Chamakdaar)",
    b: "do not shine (nahin chamakte)",
    c: "soft",
    d: "Hard",
    correct: "a",
  },
  {
    question: `Gold is a _____?`,
    a: "Soft metal",
    b: "Hard metal",
    c: "Pure metal",
    d: "Metal nai hy",
    correct: "a",
  },
];
const quizDatagn4ch5 = [
  {
    question: `thermal power station me kia jala k Bijli bnai jati hy?`,
    a: "Sirf coal",
    b: "Sirf oil",
    c: "Sirf gas",
    d: "Sirf en me se koi bhi",
    correct: "d",
  },
  {
    question: `Duniya 1 second me jitni energy use krti hy. os se 1 car kitne arse tak chalai ja sakti hy?`,
    a: "156 din",
    b: "156 saal",
    c: "156 mahine",
    d: "158 saal",
    correct: "b",
  },
  {
    question: `Duniya 322,000 litres petrol k kitne time me use kr deti hy?`,
    a: "1 sec",
    b: "Ankh jhapakne me",
    c: "0.5 sec",
    d: "1 minute",
    correct: "b",
  },
  {
    question: `Jab roshni ksi object se nai gozar sakti to kia hota hy?`,
    a: "Object tut jata hy",
    b: "Roshni khatam ho jati hy",
    c: "Object ka saya banta hy",
    d: "Object nahin dikhta",
    correct: "c",
  },
  {
    question: `Roshni kis ki kisam hy?`,
    a: "Tawanai (Energy) ki",
    b: "Awaaz ki",
    c: "Hawa ki",
    d: "Suraj ki",
    correct: "a",
  },
  {
    question: `Roshni k kitne kisam k sources hote han`,
    a: "1",
    b: "3",
    c: "2",
    d: "4",
    correct: "c",
  },
  {
    question: `Torchlight ak ___ light hy?`,
    a: "Natural (Qudrati)",
    b: "Artifical (Insan ki bnai hoi)",
    c: "Open source",
    d: "Tez",
    correct: "b",
  },
  {
    question: `ksi chamakti chiz pe roshni gre to wo kia krti hy?`,
    a: "2 tokre",
    b: "Par hoti hy",
    c: "Reflect",
    d: "Khatam hoti hy",
    correct: "c",
  },
  {
    question: `Suraj ki roshni me kitne rang hote han?`,
    a: "4",
    b: "5",
    c: "7",
    d: "8",
    correct: "c",
  },
  {
    question: `Suraj me hone wale Dhamake ham nai sun sakte. eski waja kia hy?`,
    a: " Suraj ki awaz bohot kam hoti hai",
    b: "Suraj bhot dur hy",
    c: "Dhamakay k awaz khla me nahi chal sakti",
    d: "Suraj me koi aisi awaz nahi hoti",
    correct: "c",
  },
  {
    question: `Eco kia hy?`,
    a: `2 awazon ko 1 sath sun'na`,
    b: `1 awaz ko sun'na`,
    c: `1 awaz ka dobara sonai dena`,
    d: `2 awazon ka mix hona`,
    correct: "c",
  },
  {
    question: `Hararat (heat) kahan se kaha safar krti hy?`,
    a: "sard se garam",
    b: "kam garam se ziada garam",
    c: "ziada garam se kam garam",
    d: "Ziada thande se kam thande ki traf",
    correct: "c",
  },
  {
    question: `Chae se garmi q hawa me nekal kr chae ko thandi krti hy?`,
    a: "Qk chae mazeed garam nai so skti",
    b: "Chae ziada garam hoti hy es lie",
    c: "Garmi garam se thandi chiz me jati hy",
    d: "hawa ki waja se",
    correct: "c",
  },
  {
    question: `En mese kon sa Energy (tawanai) ki kisam nai hy?`,
    a: "Hararat (Heat)",
    b: "Awaaz",
    c: "Shisha",
    d: "Light",
    correct: "c",
  },
  {
    question: `Pehle ap apna hath blub k pas rakhen. pher hath dur krne par saya ___ hoga?`,
    a: "Bara",
    b: "otna hi rhe ga",
    c: "Chota",
    d: "Khatam ho jae ga",
    correct: "c",
  },
  {
    question: `Electric energy en mese kis me badli ja sakti hy?`,
    a: "Awaaz",
    b: "Heat",
    c: "En sab me",
    d: "Light",
    correct: "c",
  },
  {
    question: `Kia light khla me safat kr sakti hy?`,
    a: "agar tez hoto",
    b: "Nahin",
    c: "Han",
    d: "Agar surkh rang ki hoto",
    correct: "c",
  },
  {
    question: `Kia awaaz khla me safar kr sakti hy?`,
    a: "Agar Tez hoto",
    b: "Han",
    c: "Nahin",
    d: "____",
    correct: "c",
  },
  {
    question: `Kia Heat (Hararat) khla me safar kr sakti hy?`,
    a: "Agar bhot ziada hoto",
    b: "Han",
    c: "Nahin",
    d: "____",
    correct: "c",
  },
  {
    question: `TV chalte wakt Electricity, Energy ki kon kon si kisam me tabdeel ho rai hoti hy?`,
    a: "Light",
    b: "Heat",
    c: "en sab me",
    d: "Sound",
    correct: "c",
  },
];
const quizDatagn4ch6 = [
  {
    question: `Ashiya k bare me kon si bat sai hy?`,
    a: "Sab roki hoi han",
    b: "Sab motion me han",
    c: "Koi roki hoi hy or koi motion me hy",
    d: "En mese koi b nai",
    correct: "c",
  },
  {
    question: `Ruki hoi ashiya me motion lane k lie kis ki zaroorat hogi?`,
    a: "Velocity",
    b: "Gravity",
    c: "Force",
    d: "Friction",
    correct: "c",
  },
  {
    question: `Force kia hy?`,
    a: "Object ko rest me rakhna",
    b: "Object ko motion me rakhna",
    c: `Object ko khench'ne or dhakel'ne ka amal`,
    d: "Object ko slow krna",
    correct: "c",
  },
  {
    question: `Force object ki ___ badal sakti hy?`,
    a: "shakal",
    b: "Simt (Direction)",
    c: `Ye sab`,
    d: "Speed",
    correct: "c",
  },
  {
    question: `Jab koi object apni jaga tabdeel krta hy to ose kia kehte han?`,
    a: "Object ne kam kia",
    b: "Object rest mr hy",
    c: "Object motion me hy",
    d: "Enme se koi nai",
    correct: "c",
  },
  {
    question: `Ksi b object ko oper phenkne pe wo niche ata hy, eski waja ___ hy?`,
    a: "Object ka wazan",
    b: "Object ka mass",
    c: "Zamin ki kashish",
    d: "Fraction",
    correct: "c",
  },
  {
    question: `Koi b chalti hoi chiz koch time k bad q rok jati hy?`,
    a: "Hawa ki waja se",
    b: "Wazan ki waja se",
    c: "Friction ki waja se",
    d: "en sab ki waja se",
    correct: "c",
  },
  {
    question: `Ap kis waja se chal pate han?`,
    a: "Gravity",
    b: "Force",
    c: "Friction",
    d: "Velocity",
    correct: "c",
  },
  {
    question: `Car k tyron ka ghis jana ___ hy?`,
    a: "Friction ka faeda",
    b: "Fraction ka kanoon",
    c: "Friction ka noksan",
    d: "____",
    correct: "c",
  },
  {
    question: `Friction k noksan kia han?`,
    a: "Noice",
    b: "Heat",
    c: "ye sab",
    d: "chizon ka tootna",
    correct: "c",
  },
  {
    question: `Lever, pulley, gear. ye sab q ejaad ki gain?`,
    a: "Bechne k lie",
    b: "Experiment krne k lie",
    c: "Kam asan krne k lie",
    d: "Machine bnane k lie",
    correct: "c",
  },
  {
    question: `Liver kia hy?`,
    a: "Heavy machine (bari machine)",
    b: "Loha",
    c: "Simple machine (Sada machine)",
    d: "Mini-Tool (Chota-ala)",
    correct: "c",
  },
  {
    question: `Bari machine (heavy machines) kaese bnai gain han?`,
    a: `Experiment kr k`,
    b: `Force ka insamal kr k`,
    c: `Simple machino ko mila k`,
    d: `Bari machino ko mla k`,
    correct: "c",
  },
  {
    question: `Cycle me kon si simle machine ka istamal kia gya hy?`,
    a: "Pully",
    b: "Liver",
    c: "Gear",
    d: "Inclined Plane",
    correct: "c",
  },
  {
    question: `Zamin kis waja se sari chizon ko apni traf khenchti hy?`,
    a: "Gravity",
    b: "Force",
    c: "Friction",
    d: "Velocity",
    correct: "a",
  },
  {
    question: `Agar ak hi jitni force ham khelona car ko lgaen to enme se kis pe wo ziada chal pae gi? `,
    a: "Pathrili zamain pe",
    b: "Marbal pe",
    c: "Inteon pe",
    d: "Pani pe",
    correct: "b",
  },
  {
    question: `Gravity kis tarha k Objects pe asar krti hy?`,
    a: "Chote",
    b: "Bare",
    c: "sab pe",
    d: "Halke",
    correct: "c",
  },
  {
    question: `Friction kis simt me force lgati hy?`,
    a: "Object k motion ki simt me",
    b: "Niche ki simt me",
    c: "Object ki simt k mokhalif",
    d: "Friction ki koi simt nai hoti",
    correct: "c",
  },
  {
    question: `Machine hamare lie kia krti hy?`,
    a: "Kaam",
    b: "Kaam ko mushkil",
    c: "Kaam ko asan",
    d: "Tez kam",
    correct: "c",
  },
];
const quizDatagn4ch7 = [
  {
    question: `Glass (shisha) kis se bana hota hy?`,
    a: `soil`,
    b: `Salt`,
    c: `Sand`,
    d: `Rubber`,
    correct: "c",
  },
  {
    question: `zamin me thos Bejaan chemicals kia kehlate han?<br>
The solid non-living chemicals present in Earth are:`,
    a: `soil`,
    b: `Rock`,
    c: `Minerals`,
    d: `fossils`,
    correct: "c",
  },
  {
    question: `Chizon ko dobara Qabil-e-Istemaal bnane ka amal kia kehlata hy?`,
    a: `cycling`,
    b: `care`,
    c: `recycling`,
    d: `conservation of resources.`,
    correct: "c",
  },
  {
    question: `Enme se kon sa 1 bar istamal k bad dobara istamal nahin kia ja sakta?`,
    a: `air`,
    b: `Plastic`,
    c: `oil`,
    d: `solar energy`,
    correct: "c",
  },
  {
    question: `Fossils hamen kis k bare me information dete han?`,
    a: `Sare jandaron k bare me`,
    b: `Ane wale jandaron k bare me`,
    c: `Mazi k jandaron k bare me`,
    d: `Mojuda Jandaron k bare me`,
    correct: "c",
  },
  {
    question: `Janglaat ko dubara istamal hone wala resource (re-newable resource) q kaha jata hy?`,
    a: `En se bad me ghar bnae ja sakte han`,
    b: `En ko bad me Endhan k Tor pe istamal krte han`,
    c: `Janglaat mustakbil me dobara ogae ja sakte han`,
    d: `En mese koi nai`,
    correct: "c",
  },
  {
    question: `Pertol kis ki misal hy?`,
    a: `Re-newable resource`,
    b: `Liquid`,
    c: `Non-renewable resource`,
    d: `Artifical Fuel`,
    correct: "c",
  },
  {
    question: `Zamin ka __% hisa kasht kia jata hy?`,
    a: `12%`,
    b: `13%`,
    c: `11%`,
    d: `10%`,
    correct: "c",
  },
  {
    question: `Zamin ka total __% hisa pani hy?`,
    a: `21%`,
    b: `72%`,
    c: `71%`,
    d: `61%`,
    correct: "c",
  },
  {
    question: `Zamin ka __% hisa Khush zamin (land) hy`,
    a: `71%`,
    b: `72%`,
    c: `29%`,
    d: `61%`,
    correct: "c",
  },
  {
    question: `Tamam samandar zamin ka __% hisa han?`,
    a: `71%`,
    b: `92%`,
    c: `97%`,
    d: `61%`,
    correct: "c",
  },
  {
    question: `water, air soil, forests, coal, oil, natural gas and minerals: Ye sab kia kehlate han?`,
    a: `Abi Zakhair (Water resources)`,
    b: `Khudsahta Zakhair (Artifical resources)`,
    c: `Zamini Zakhair (Earth's resources)`,
    d: `Wakti Zakhair (Temporary resources)`,
    correct: "c",
  },
  {
    question: `Wind Mill kia hy?`,
    a: `Hawa se pani bnane wali machine`,
    b: `Hawa se nami bnane wali machine`,
    c: `Hawa se Bijli bnane wali machine`,
    d: `Hawa ko saaf krne wali machine`,
    correct: "c",
  },
  {
    question: `soil (Matti) Zamin ki ___ hy?`,
    a: `Sab se ziada garam layer`,
    b: `Andar wali layer`,
    c: `Bahar wali layer`,
    d: `Sab se ziada patli layer`,
    correct: "c",
  },
  {
    question: `Soil (Matti) ka almi din kab mnaya jata hy?`,
    a: `15 Oct`,
    b: `30 Jan`,
    c: `5 Dec`,
    d: `22 March`,
    correct: "c",
  },
  {
    question: `Pakistan ka __% Area Janglaat par mushtamil hy?`,
    a: `71%`,
    b: `9.2%`,
    c: `5.2%`,
    d: `6.1%`,
    correct: "c",
  },
  {
    question: `Hawa me oxygen shamil krne ka sab se bara zarya kon hy?`,
    a: `Soil`,
    b: `Janwer`,
    c: `Janglaat`,
    d: `Darya`,
    correct: "c",
  },
  {
    question: `kerosene, petrol, diesel, engine oil, grease, petroleum jelly and tarcoal ye sab 1 resource se alag kie jate han?`,
    a: `Synthetic oil`,
    b: `Carban clay`,
    c: `crude oil`,
    d: `petrolium-crul Family`,
    correct: "c",
  },
  {
    question: `Gold kis ki misal hy?`,
    a: `Rock`,
    b: `Fossil fuel`,
    c: `Mineral`,
    d: `Organic matter`,
    correct: "c",
  },
  {
    question: `kehwra duniya ki ____ sab se bari ___ ki kan hy?`,
    a: `2nd, koile ki`,
    b: `1st, koile ki`,
    c: `2nd, namak ki`,
    d: `1st, namak ki`,
    correct: "c",
  },
  {
    question: `Non-reNewable resources kse kehte han?`,
    a: `Saste resources ko`,
    b: `Zamini resources ko`,
    c: `Sirf 1 bar use hone wale resources ko`,
    d: `Abi resources ko`,
    correct: "c",
  },
];
const quizDatagn4ch8 = [
  {
    question: `Agar achanak barish hone lage to kia change hoga?`,
    a: `Koi bhi nai`,
    b: `Climate condition`,
    c: `Weather condition`,
    d: `Dono`,
    correct: "c",
  },
  {
    question: `Kis zone pe suraj ki rays bilkol sidhi parhti han js ki waja se garmi ziada hoti hy.`,
    a: `Temperate Zone`,
    b: `Polar Zone`,
    c: `Tropical Zone`,
    d: `All of these`,
    correct: "c",
  },
  {
    question: `Polar Zone ka climate kaesa hy?`,
    a: `humid`,
    b: `mild`,
    c: `extremely cold`,
    d: `warm`,
    correct: "c",
  },
  {
    question: `Factories or gardyon se dhuan or gasses nekalne ki waja se Zamin ka terperature?`,
    a: `Bari Bari bhar or kam ho rha hy`,
    b: `kam ho rha hy`,
    c: `Bhar rha hy`,
    d: `Na bhar rha hy or na kam ho rha hy`,
    correct: "c",
  },
  {
    question: `climate ki base pe zamin kitne hison me divided hy?`,
    a: `1`,
    b: `2`,
    c: `3`,
    d: `4`,
    correct: "c",
  },
  {
    question: `Climate or weather me kia farq hy?`,
    a: `Duration (Mudat) ka`,
    b: `En dono ka apas me koi taluk nai`,
    c: `Weather lamba or climate chota`,
    d: `Pehle 6mah climate rehta hy, baki 6 mah weather rehta hy`,
    correct: "a",
  },
  {
    question: `Mosam k badalne ki waja kia hy?`,
    a: `Wakt ka badalna`,
    b: `Zamin ka ghumna`,
    c: `Zamin ka rokna`,
    d: `Zamin ka gol hona`,
    correct: "b",
  },
  {
    question: `weather ki parhai krne ko kia kehte han?`,
    a: `Meteorology (Mosamyaat)`,
    b: `Antamology`,
    c: `Physiology`,
    d: `geology`,
    correct: "a",
  },
  {
    question: `Ksi region ka climate logon me kia badalta hy?`,
    a: `Name`,
    b: `Omar (age)`,
    c: `Habit (adat)`,
    d: `Bnawat`,
    correct: "c",
  },
  {
    question: `Hawa ka pressure Mapne wala aala kia kehlata hy?`,
    a: `Anemometer`,
    b: `Rain Gauge`,
    c: `Barometer`,
    d: `Thermometer`,
    correct: "c",
  },
  {
    question: `Hawa ki raftaar or simt Mapne wala aala kia kehlata hy?`,
    a: `Anemometer`,
    b: `Rain Gauge`,
    c: `Barometer`,
    d: `Thermometer`,
    correct: "a",
  },
  {
    question: `Barish ki mikdaar Mapne wala aala kia kehlata hy?`,
    a: `Anemometer`,
    b: `Rain Gauge`,
    c: `Barometer`,
    d: `Thermometer`,
    correct: "b",
  },
  {
    question: `Hawa ka Temperature Mapne wala aala kia kehlata hy?`,
    a: `Anemometer`,
    b: `Rain Gauge`,
    c: `Barometer`,
    d: `Thermometer`,
    correct: "d",
  },
  {
    question: `1922 Libya, Africa me Zamin ka aj tak ka sab se ziada temperature mapa gya tha.`,
    a: `57&deg;C`,
    b: `55&deg;C`,
    c: `58&deg;C`,
    d: `56&deg;C`,
    correct: "c",
  },
  {
    question: `July 23, 2001 ko ISLAMABAD me kitni barish hoi thi?`,
    a: `620 micro meter`,
    b: `620 centi meter`,
    c: `620 mili meter`,
    d: `620 kilo meter`,
    correct: "c",
  },
  {
    question: `Aj tak Pakistan ka garam taren Tenterature tha?`,
    a: `52.5&deg;C`,
    b: `54.5&deg;C`,
    c: `53.5&deg;C`,
    d: `51.5&deg;C`,
    correct: "c",
  },
  {
    question: `Equator ak ___ line hy jo ___ ko ___ hison me divide krti hy?`,
    a: `Farzi, Zamin, 3`,
    b: `Hakiki, Zamin, 2`,
    c: `Farzi, Zamin, 2`,
    d: `Farzi, chand, 3`,
    correct: "c",
  },
  {
    question: `Jo shahir sata-e-samandar se jitna oper hoga, otna ___ hoga?`,
    a: `Garam`,
    b: `Bara`,
    c: `Thanda`,
    d: `Chota`,
    correct: "c",
  },
  {
    question: `Quetta ka aj tak ka sab se thanda temterature kitna Mapa gya hy?`,
    a: `18&deg;C`,
    b: `81&deg;C`,
    c: `-18&deg;C`,
    d: `-81&deg;C`,
    correct: "c",
  },
  {
    question: `Polution se dunya ka Temperature ___ ho rha hy?`,
    a: `Kam`,
    b: `Dogna`,
    c: `Barh rha hy ahista`,
    d: `Ruka hoa hy`,
    correct: "c",
  },
];
const quizDatagn4ch9 = [
  {
    question: `1 saal me zamin suraj k kitne chakar lgati hy?`,
    a: `2`,
    b: `3`,
    c: `1`,
    d: `1.5`,
    correct: "c",
  },
  {
    question: `zamin chand k suraj q ghumti hy?`,
    a: `apni gravity se`,
    b: `chand ki gravity se`,
    c: `suraj ki gravity se`,
    d: `solar system ki waja se`,
    correct: "c",
  },
  {
    question: `solar system ka center kia hy?`,
    a: `chand`,
    b: `zamin`,
    c: `suraj`,
    d: `jupiter`,
    correct: "c",
  },
  {
    question: `zamin ka sab se karibi sitara kon sa hy?`,
    a: `chand`,
    b: `jupitor`,
    c: `suraj`,
    d: `mercury`,
    correct: "c",
  },
  {
    question: `suraj k sab se ziada kareeb ko sa sayara hy`,
    a: `chand`,
    b: `zamin`,
    c: `mercury`,
    d: `mars`,
    correct: "c",
  },
  {
    question: `hamare solar system me kitne sayare han?`,
    a: `6`,
    b: `7`,
    c: `8`,
    d: `9`,
    correct: "c",
  },
  {
    question: `suraj ka sab se karibi sayara 'mercury' suraj se kitna dur hy?`,
    a: `50 million meter`,
    b: `55 million meter`,
    c: `50 million kM`,
    d: `60 million kM`,
    correct: "c",
  },
  {
    question: `suraj zamin se kitna dur hy?`,
    a: `150 million meter`,
    b: `155 million meter`,
    c: `150 million kM`,
    d: `160 million kM`,
    correct: "c",
  },
  {
    question: `suraj se sab se ziada dur sayara kon sa hy?`,
    a: `mars`,
    b: `earth`,
    c: `neptune`,
    d: `venus`,
    correct: "c",
  },
  {
    question: `suraj k bad solar system ka sab se bara sayara kon sa hy?`,
    a: `earth`,
    b: `neptune`,
    c: `jupiter`,
    d: `venus`,
    correct: "c",
  },
  {
    question: `suraj ka diameter kitna hy?`,
    a: `~ 2.4 million kM`,
    b: `~ 1.3 million kM`,
    c: `~ 1.4 million kM`,
    d: `~ 1.2 million kM`,
    correct: "c",
  },
  {
    question: `zamin ki qudrati satellite kse kehte han?`,
    a: `suraj ko`,
    b: `mars ko`,
    c: `chand ko`,
    d: `ksi ko nai`,
    correct: "c",
  },
  {
    question: `29.5 dinon, me kis ka 1 chakar apne madar me mokamal hota hy?`,
    a: `zamin ka`,
    b: `jupiter ka`,
    c: `chand ka`,
    d: `mars ka`,
    correct: "c",
  },
  {
    question: `chand zamin se ___ hy?`,
    a: `bara`,
    b: `sab se dur`,
    c: `chota`,
    d: `dogna hy`,
    correct: "c",
  },
  {
    question: `zamin se chand kitna dur hy`,
    a: `484,000 kilometers`,
    b: `374,000 kilometers`,
    c: `384,000 kilometers`,
    d: `384,00 kilometers`,
    correct: "c",
  },
  {
    question: `chand kitni tarha se ghumta hy?`,
    a: `1`,
    b: `3`,
    c: `2`,
    d: `4`,
    correct: "c",
  },
  {
    question: `full moon ko pakistan me kia kaha jata hy?`,
    a: `akbar`,
    b: `mahir`,
    c: `badar`,
    d: `kamar`,
    correct: "c",
  },
  {
    question: `chand pe kon basta hy?`,
    a: `insan`,
    b: `janwar`,
    c: `paude`,
    d: `koi nai`,
    correct: "d",
  },
  {
    question: `en mese kis ka apna chand nai hy?`,
    a: `jupiter`,
    b: `mars`,
    c: `vinus`,
    d: `neptune`,
    correct: "c",
  },
  {
    question: `em mese kis k sab se ziada chand han?`,
    a: `jupiter`,
    b: `mars`,
    c: `vinus`,
    d: `neptune`,
    correct: "a",
  },
  {
    question: `zamin apne madar (axis) k gird 1 chakar pura krne me kitna time leti hy?`,
    a: `12hrs`,
    b: `48hrs`,
    c: `24hrs`,
    d: `6hrs`,
    correct: "c",
  },
  {
    question: `chand garhan hone pe chand pe kis ka saya parta hy?`,
    a: `suraj ka`,
    b: `mars ka`,
    c: `zamin ka`,
    d: `venus ka`,
    correct: "c",
  },
  {
    question: `suraj gerhan hone pe zamin pe kis ka saya parta hy?`,
    a: `suraj ka`,
    b: `mars ka`,
    c: `zamin ka`,
    d: `chand ka`,
    correct: "d",
  },
];
const quizDatagn4ch10 = [
  {
    question: "The organism in the body of which parasite lives is called?",
    a: "Host",
    b: "Predator",
    c: "Prey",
    d: "Symbiont",
    correct: "a",
  },
  {
    question: "Which of the following is a metal?",
    a: "Sodium",
    b: "Helium",
    c: "Sulfur",
    d: "Phosphorus",
    correct: "a",
  },
  {
    question: `am tor par choti classes me chote project or patterns bnane k lie istamal hota hy`,
    a: `Steel or aluminum`,
    b: ` Plastic or rubber`,
    c: `Paper or cardboard`,
    d: `Glass or ceramic`,
    correct: "c",
  },
  {
    question: `en mese kon si chiz kaghaz se bnai ja sakti hy?`,
    a: `Pencils and erasers`,
    b: ` Chairs and tables`,
    c: `Envelopes, bags, cards and face masks`,
    d: `Cars and airplanes`,
    correct: "c",
  },
  {
    question: `mobile ka sab se pehla kam kia hy?`,
    a: `game kkhelna`,
    b: `videos dekhna`,
    c: `call or message krna`,
    d: `book parhna`,
    correct: "c",
  },
  {
    question: `wakt ki pabandi k lie mobile kon se kam kr sakta hy?`,
    a: `Play games and watch movies`,
    b: `clicking photos`,
    c: `Act as a calculator, alarm clock, and calendar`,
    d: `Using internet`,
    correct: "c",
  },
  {
    question: `first aid box ka maqsad kia hy?`,
    a: `docter ki jaga lena`,
    b: `mokhtalif chizon ko ak jaga rakhna`,
    c: `pehli forsat me mareez ka ilaj krna`,
    d: `khaas dastawezaat ko mehfuz krna`,
    correct: "c",
  },
  {
    question: `digital thermometer ka kia kam hy?`,
    a: `khun kaghara pan mapna`,
    b: `dill ki dharkan dekhna`,
    c: `khun ka dabao mapna`,
    d: `ye sab kam`,
    correct: "c",
  },
  {
    question: `normal blood pressure kitna hota hy?`,
    a: `70/80`,
    b: `90/120`,
    c: `120/80`,
    d: `110/80  `,
    correct: "c",
  },
  {
    question: `prism k ___ kone hote han?`,
    a: `2`,
    b: `4`,
    c: `3`,
    d: `5`,
    correct: "c",
  },
  {
    question: `cube k kitne side hote han`,
    a: `2`,
    b: `4`,
    c: `6`,
    d: `8`,
    correct: "c",
  },
];
const quizDatagn4chall = [
  {
    question: `How many milk teeth are in babies?<br>
    Bachon me kitne dant hote han`,
    a: `23`,
    b: `24`,
    c: `25`,
    d: `20`,
    correct: "d",
  },
  {
    question: `How many teeth are in adults?<br>
    Nojawano me kitne dant hote han?`,
    a: `30`,
    b: `24`,
    c: `32`,
    d: `31`,
    correct: "c",
  },
  {
    question: `Number of bones in babies.<br>
     Bachon me hadiyon ki tadaad`,
    a: `300`,
    b: `201`,
    c: `310`,
    d: `200`,
    correct: "a",
  },
  {
    question: `Number of bones in adults.<br>
    Nojawano me hadiyon ki tadaad`,
    a: `205`,
    b: `206`,
    c: `210`,
    d: `200`,
    correct: "b",
  },
  {
    question: `Largest bone in human body is __ which also called as FEMUR<br>
  Insani jisam ki sab se bari hadi ___ jo femur bhi kehlati hy`,
    a: `Thigh bone (Raan ki hadi)`,
    b: `Humerus (hath ki hadi)`,
    c: `Tibia (Ghutne se niche ki hadi)`,
    d: `none of them (en mese koi nai)`,
    correct: "a",
  },
  {
    question: `Smallest bone in human body<br>
    insani jisam ki sab se choti hadi`,
    a: `Stapes with 2.8mm`,
    b: `Stapes with 4mm`,
    c: `Malleus`,
    d: `Anvil bone`,
    correct: `a`,
  },
  {
    question: `Longest muscle in human body<br>
    insani jisam ka sab se bara ptha`,
    a: `Moulds`,
    b: `adsin`,
    c: `sartorius`,
    d: `stapedius`,
    correct: `c`,
  },
  {
    question: `Smallest muscle in human body<br>
    insani jisam ka sab se chota ptha `,
    a: `Moulds`,
    b: `adsin`,
    c: `sartorius`,
    d: `stapedius`,
    correct: `d`,
  },
  {
    question: `Powerful muscle in human body<br>
    insani jisam ka sab se takatwar ptha `,
    a: `masseter`,
    b: `adsin`,
    c: `sartorius`,
    d: `stapedius`,
    correct: `a`,
  },
  {
    question: `How much force a powerful muscle can provide<br>
    Takatwar ptha kitni takat lga sakta hy?`,
    a: `25kg to 90.7kg`,
    b: `25kg to 60.7kg`,
    c: `15kg to 20.7kg`,
    d: `5kg to 10.7kg`,
    correct: `a`,
  },
  {
    question: `Skin protect our internal organs<br>
    Hamari jild hamare andruni aza ko kin chizon se bachati hy
    `,
    a: `dust (matti se)`,
    b: `diseases (bimariuon se)`,
    c: `dust (matti se) and diseases (bimariuon se)`,
    d: `Non of these (en mese koi nai)`,
    correct: "c",
  },
  {
    question: `Ribcage protects our ___.  <br>
    pasliyan kis ko tahafuz farham krti han`,
    a: `heart (dill ko)`,
    b: `lungs(phephron ko)`,
    c: `kidney (gurdon ko)`,
    d: `heart (dill ko) and lungs(phephron ko)`,
    correct: "d",
  },
  {
    question: `The pipe that connects mouth and nose, with lungs is called___?<br>
    Wo pipe jo mu or nak ko phephron se milati hy, wo ___ kehlati hy?`,
    a: `Aesophegus`,
    b: `Trachea`,
    c: `libms`,
    d: `turnal pipe`,
    correct: "b",
  },
  {
    question: `Heart beats __ times in a minut<br>
    insani dil 1 minut me kitni bar dharak'ta hy?`,
    a: `70times`,
    b: `71times`,
    c: `72times`,
    d: `75times`,
    correct: "c",
  },
  {
    question: `transparent layer on eye in called ___?<br>
    insani ankh k oper shafaf jhali numa chadar ko kehte han`,
    a: `cornea`,
    b: `Iras`,
    c: `pupil`,
    d: `non of these`,
    correct: "a",
  },
  {
    question: `pupil is located in ____?<br>
    pupil kahan paya jata hy?`,
    a: `eye (ankh me)`,
    b: `eir (kan me)`,
    c: `brain (dimagh me)`,
    d: `heart (dill me)`,
    correct: "a",
  },
  {
    question: `outer Eir called ___<br>
    kan ka bahir wala hisa kehlata hy`,
    a: `papa`,
    b: `pinna`,
    c: `paniz`,
    d: `pnaiyz`,
    correct: "b",
  },
  {
    question: `The bones (Anvil, Hammer, and stapes) belongs to<br>
    ye hadiyan (Anvil, Hammer, and stapes) kaha pai jatin han?`,
    a: `eye (ankh me)`,
    b: `eir (kan me)`,
    c: `brain (dimagh me)`,
    d: `heart (dill me)`,
    correct: "b",
  },
  {
    question: `In a minut how many time we take breath<br>
    Ham 1 minut me kitni bar sance lete han?`,
    a: `10 se 15`,
    b: `15 se 20`,
    c: `15 se 25`,
    d: `20 se 22`,
    correct: "c",
  },
  {
    question: `Heart pumps how many liters of blood in a day?<br>
    Hamara dill 1 din me takriban kitne liter khoon jism me bhejta hy?`,
    a: `7500l se 6500l`,
    b: `6500l se 4500l`,
    c: `1500l se 3500l`,
    d: `en mese koi nai`,
    correct: "a",
  },
  {
    question: `Which organ provides oxygen to every cell of the body?<br>
    Kon jism k 1 1 khulye tak oxygen pohn'chata hy?`,
    a: `heart (dill)`,
    b: `Kidney (gurde)`,
    c: `Lungs (phephre)`,
    d: `en mese koi nai`,
    correct: "a",
  },
  {
    question: `__% of our body is made of ___?<br>
"hamare jism ka __% hisa __ par mushtamil hy?"`,
    a: "60%, water (60%, Pani)",
    b: "70%, water (70%, Pani)",
    c: "80%, Air (80%, Hawa)",
    d: "30%, Meat (30%, Goasht)",
    correct: "a",
  },
  {
    question: `Ecosystem ko barkarar rakhne k lie duniya me kia kam kia ja rha hy?`,
    a: `Road bnae ja rhe han`,
    b: `Darakhton se ghar bnae ja rhe han`,
    c: `Nae darakht lgae ja rhe han`,
    d: `facories lgai ja rai han`,
    correct: `c`,
  },
  {
    question: `Agar kire-Maar dawai hashraat ki abadi ko rokne k lie istamal ki jae to to parindon ki abadi___`,
    a: `Barh jae gi`,
    b: `Kam ho jae gi`,
    c: `Pehle kam, pher bhare gi`,
    d: `Fark nai pare ga`,
    correct: `b`,
  },
  {
    question: `titli,chirya or chamkadar me kia chiz mushtarik hy?`,
    a: `dant`,
    b: `bal`,
    c: `Hadiyan`,
    d: `par`,
    correct: `d`,
  },
  {
    question: `Phal(Fruits) paode k lie kia kam krte han?`,
    a: `Paude k bijh ki hifazat krna`,
    b: `Paude k bijh ko pani fraham krna`,
    c: `Paude k bijh ko jama krna`,
    d: `Paude k bijh k lie ghiza peda krna`,
    correct: `a`,
  },
  {
    question: `Jis paode me phul nai hota osme ____ nai hota?`,
    a: `Bijh`,
    b: `Phal`,
    c: `Pate`,
    d: `Jar`,
    correct: `b`,
  },
  {
    question: `Vertebrates me kia hota lazmi hy?`,
    a: `Hawa me or sakna`,
    b: `Rerh ki hadi ka hona`,
    c: `Paron ka hona`,
    d: `Hawa me or sakna + Paron ka hona`,
    correct: `b`,
  },
  {
    question: `Which of these keeps plant cooler?<br>
"Enme se kon podon ko thanda rakhta hy?"`,
    a: "water (pani)",
    b: "sun (suraj)",
    c: "fertilizer (khad)",
    d: "oxygin (oksign)",
    correct: "a",
  },
  {
    question: `What do trees inhale and exhale at night?<br>
"Darakht raat k wakt kon si gas hawa se lete or dete han?"<br>
CO2 = Carbon dioxide | O<sub>2</sub> = oxygen | CO = carbon monoxide`,
    a: "CO2 in and O<sub>2</sub> out | CO2 lete and O<sub>2</sub> dete",
    b: "CO2 out and O<sub>2</sub> in | CO2 dete and O<sub>2</sub> lete",
    c: "CO in | CO lete",
    d: "CO out | CO dete",
    correct: "b",
  },
  {
    question: `
does water helps plants to make food?<br>
"kia pani podon ko khoraak bnane me madad krta hy?"`,
    a: "NO | Nahin",
    b: "Yes | Han",
    c: "-----",
    d: "-----",
    correct: "b",
  },
  {
    question: `Why do plants need sunlight?<br>
"Suraj ki roshni podon ko milna qun zaroori hy?"`,
    a: "For making food | Khorak bnane k lie",
    b: "TO be green | Sabz rehne k lie",
    c: "For growth | Nasho numa k lie",
    d: "All of them | en sab k lie",
    correct: "a",
  },
  {
    question: `Movement is the CHARACTERISTICS of ?<br>
"Harkat krna kis ki khasiyat hy?"`,
    a: "Non-living things | Bejano ki",
    b: "living things | Jandaron ki",
    c: "both | Dono ki",
    d: "none of them | Ksi k lie b nai",
    correct: "b",
  },
  {
    question: `Does plants do Movement?<br>
"Kia podon me harkat pai jati hy?"`,
    a: "Yes | Han",
    b: "No | Nahin",
    c: "-----",
    d: "-----",
    correct: "a",
  },
  {
    question: `Which plant eats insects?<br>
"Kon sa poda kire makore khata hy?"`,
    a: "Touch-me-not | Choi-moi ",
    b: "Pitcher | Picher",
    c: "Lotus | Kawanl",
    d: "None of them | Koi b nai",
    correct: "b",
  },
  {
    question: `the term (INHERITED CHARACTERISTICS) refers to ___<br>
"Wrasti khasusiyan se kia morad hy?"`,
    a: "Characteristics from childer<br> Bachon se ain hoin khususiyaat",
    b: "Characteristics from parents<br> waliden se ain hoin khususiyaat",
    c: "Characteristics from Environment<br> Mahole se ain hoin khususiyaat",
    d: "-----",
    correct: "b",
  },
  {
    question: `What is Tadpole?<br>
"Tadpole kia hota hy?"`,
    a: "Baaby fish | Machli ka baacha",
    b: "Baby frog | Mendak ka baacha",
    c: "Baby Butterfly | Titli ka baacha",
    d: "-----",
    correct: "b",
  },
  {
    question: `What is Caterpillar?<br>
"Catrpilar kia hota hy?"`,
    a: "Baaby fish | Machli ka baacha",
    b: "Baby frog | Mendak ka baacha",
    c: "Baby Butterfly | Titli ka baacha",
    d: "-----",
    correct: "c",
  },
  {
    question: `Who makes Pupa during reproduction?<br>
"Toled k donar kon piyupa bnata hy?"`,
    a: "Butterfly, honeybee | Titli, shahid ki makhi",
    b: "frog | Mendak",
    c: "Butterfly | Titli",
    d: "Honeybee | Shahid ki makhi",
    correct: "a",
  },
  {
    question: `Female worker honeybees can not ___?<br>
"Mada karkun shahid ki makhiyan kia nahin kr saktin?"`,
    a: "Reproduction | Toleed",
    b: "Fly | Orna",
    c: "Honey eat | Shahid khana",
    d: "All of these | ye sab",
    correct: "a",
  },
  {
    question: `Queen bee lives for about _ years?<br>
"Malka makhi kitne saal tak zinda rehti hy?"`,
    a: "3 years | 3 saal",
    b: "4 years | 4 saal",
    c: "5 years | 5 saal",
    d: "6 years | 6 saal",
    correct: "c",
  },
  {
    question: `How many types of honeybees are there in honebee house?<br>
"Chate me kitne kisam ki shahid ki makhiyan hoti han?"`,
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    correct: "b",
  },
  {
    question: `What are Drons?<br>
"Drons kia hy?"`,
    a: "Honybee| shahid ki makhi ",
    b: "Male Honybee | Nar shahid ki makhi",
    c: "female Honybee | Mada shahid ki makhi",
    d: "-----",
    correct: "b",
  },
  {
    question: `Dron lives for about _ months?<br>
"Malka makhi kitne saal tak zinda rehti hy?"`,
    a: "1 to 3 Months | 1 ta 3 Mah",
    b: "1 to 4 Months | 1 ta 4 Mah",
    c: "1 to 5 Months | 1 ta 5 Mah",
    d: "1 to 6 Months | 1 ta 6 Mah",
    correct: "b",
  },
  {
    question: `Seeds are produced in?<br>
"Bijh kahan bante han?"`,
    a: "In Leaves | Paton me",
    b: "In flower | Phool me",
    c: "In shoot | Tane me",
    d: "In root | Jar me",
    correct: "b",
  },
  {
    question: `Pakistan ki Hukumat ne bohat se darakhton ko lagana shuru kia hai takay kya roka ja sake? `,
    a: `Oxygen ki ziada mikdaar`,
    b: `Bimari`,
    c: `Ghareebi`,
    d: `Maholiyati tabdili`,
    correct: "d",
  },
  {
    question: `Lahore ke nazdeek waqya Changa-Manga duniya ki sab se bara insani bnaya hoa jungle hai. `,
    a: `YES`,
    b: `NO`,
    c: `May be`,
    d: `Aesa koi jungle nahin hy`,
    correct: "a",
  },
  {
    question: `Kia sab danton ki shakal ek jesi hoti hai?`,
    a: `yes`,
    b: `No`,
    c: `-`,
    d: `-`,
    correct: "b",
  },
  {
    question: `Khoon aur hawa ke darmiyan oxygen ka tabadla kahan hota hai? `,
    a: `Dil mein `,
    b: `liver me`,
    c: `Mede me`,
    d: `Phaipron me`,
    correct: "d",
  },
  {
    question: `Sehatmand phaipron ki rangat aam tor par kya hoti hai? `,
    a: `Gulabi or Halka surkh`,
    b: `Surkh`,
    c: `Halka surkh`,
    d: `Gulabi`,
    correct: "a",
  },
  {
    question: `Phepre spungy (Foam) ki tarha qun hote han?`,
    a: `Phaipron ke andar pani ki kami `,
    b: `Phaipron mein jarasim ka hona `,
    c: `Phaipron ke andar alveoli ke naam se hawa k thele(air bags) hote hain woh hawa ki tabdeeli krte han`,
    d: `Phaipron ka size chota hona `,
    correct: "c",
  },
  {
    question: `Patte (leaves) ka ek sab se ahem kirdar kia hai? `,
    a: `Oxygen paida krna`,
    b: `Plant k liye khurak paida krna`,
    c: `Zamin se pani khenchna`,
    d: `Khubsurti dena`,
    correct: "b",
  },
  {
    question: `Phalon or beejon ko phol (flower) paida krta hai. Pholon ka or kia kirdar ho skty han? `,
    a: `Dawaiyan banane ka zariya`,
    b: `poudon ko Sidha khara krna`,
    c: `Apni khushbu se chote parindon ko apni traf mtawaja krna tak onk zariye se Reproduction(toleed) ho sake`,
    d: `ye sab`,
    correct: "c",
  },
  {
    question: `Kisi khas jagah par paye jane wali mukhtalif zinda chezain kia kahlati hain? `,
    a: `Ecosystem `,
    b: `Biodiversity `,
    c: `Biosphere`,
    d: `-`,
    correct: "b",
  },
  {
    question: `Podun ko kitni kismon me takseem kia gya hy?`,
    a: `1`,
    b: `2`,
    c: `3`,
    d: `4`,
    correct: "b",
  },
  {
    question: `Changa-Manga ---- jungle hy`,
    a: `Pakistan ka sab se bara`,
    b: `Duniya ka sab se bara qudrati (Natural)`,
    c: `Duniya ka sab se bara insani (Man-made)`,
    d: `Duniya ka sab se chota`,
    correct: `c`,
  },
  {
    question: `Wo janwar jo sirf paude, ghaas khate han, wo kia kehlate han?`,
    a: `Herbivores`,
    b: `Carnivores`,
    c: `predator`,
    d: `omnivores`,
    correct: `a`,
  },
  {
    question: `Ecosystem kon kon mil k bnate han?`,
    a: `Mokhtalif jandaar`,
    b: `Herbivores + omnivores`,
    c: `Jandar + Bejaan`,
    d: `Sirf bejaan`,
    correct: `c`,
  },
  {
    question: `Pond, Marine. Ye kis ki misalen han?`,
    a: `Bio-diversity`,
    b: `Environment`,
    c: `Ecosystem`,
    d: `GlobleSystem`,
    correct: `c`,
  },
  {
    question: `Ecosystem k 2 kon kon se components han?`,
    a: `Biotic + omnivores`,
    b: `Abiotic + Herbivores`,
    c: `Biotic + Abiotic`,
    d: `Herbivores + Carnivores`,
    correct: `c`,
  },
  {
    question: `Ecosystem kahan se start hota hy?`,
    a: `Producer se`,
    b: `Consumer se`,
    c: `Biotic se`,
    d: `omnivores se`,
    correct: `a`,
  },
  {
    question: `Producer kse kehte han or q kehte han?`,
    a: `Paudon ko qk ecosystem oxygin produce krte han`,
    b: `Paudon ko qk wo khoraak khud bnate han`,
    c: `Janwaron ko qk onki khaal se bhot si chizen bnai jati han`,
    d: `Parindon ko`,
    correct: `b`,
  },
  {
    question: `Bacteria kis ki misal han?`,
    a: `Producer`,
    b: `omnivores`,
    c: `Herbivores`,
    d: `Decomposers`,
    correct: `d`,
  },
  {
    question: `Insan kis ki misaal hy?`,
    a: `Producer`,
    b: `omnivores`,
    c: `Consumer`,
    d: `Consumer + omnivores`,
    correct: `d`,
  },
  {
    question: `Ecosystem me bejaan chizen kis ki misaal han?`,
    a: `Abiotic`,
    b: `Biotic`,
    c: `Producer`,
    d: `Consumer`,
    correct: `a`,
  },
  {
    question: `Ecosystem me jandaar chizen kis ki misaal han?`,
    a: `Abiotic`,
    b: `Biotic`,
    c: `Producer`,
    d: `Consumer`,
    correct: `b`,
  },
  {
    question: `Producer, consumer, decomposer ye tino kis ki kismen han?`,
    a: `Abiotic`,
    b: `Producer`,
    c: `Biotic`,
    d: `omnivores`,
    correct: `c`,
  },
  {
    question: `Lotus or algae apne ecosystem me kia khaas kirdar ada krte han?`,
    a: `Khoraak khud bnate han`,
    b: `Oxygen bnate han`,
    c: `system ko saaf krte han`,
    d: `Enme se koi bhi nahin`,
    correct: `a`,
  },
  {
    question: `Lotus or algae kis ecosystem ka hisa han?`,
    a: `Zamini ecosystem`,
    b: `Abi ecosystem`,
    c: `Jangli ecosystem`,
    d: `Hawai ecosystem`,
    correct: `b`,
  },
  {
    question: `Coral reef se kia morad hy?`,
    a: `Marjan ki colony`,
    b: `Marjaan ka mathar`,
    c: `Marjaan ka rang`,
    d: `Marjaan ki ankhen`,
    correct: `a`,
  },
  {
    question: `Coral (Marjaan) kahan paya jata hy?`,
    a: `Sehra me`,
    b: `Samandar me`,
    c: `Phulon me`,
    d: `Paharon me`,
    correct: `b`,
  },
  {
    question: `Ksi bhi ecosystem ki food chain kahan se start hoti hy?`,
    a: `omnivores se`,
    b: `Consumers se`,
    c: `Producers`,
    d: `Abiotic`,
    correct: `c`,
  },
  {
    question: `'Predator' se kia muraad hy?`,
    a: `Shekar krne wale janwar`,
    b: `Shekar hone wale janwar`,
    c: `Consumers`,
    d: `Producers`,
    correct: `a`,
  },
  {
    question: `'Prey' se kia muraad hy?`,
    a: `Shekar krne wale janwar`,
    b: `Shekar hone wale janwar`,
    c: `Consumer`,
    d: `Producer`,
    correct: `b`,
  },
  {
    question: `'Zebra' kis ki misaal hy?`,
    a: `Shekar krne wale janwar ki`,
    b: `Omnivores`,
    c: `Predators ki`,
    d: `Prey ki`,
    correct: `d`,
  },
  {
    question: `Predator jab Prey ka shekaar krta hy to ose kia kaha jata hy?`,
    a: `Bio-Diversity`,
    b: `predation`,
    c: `predating`,
    d: `prey killing`,
    correct: `b`,
  },
  {
    question: `Ecosystem me jandaar zinda rehne k lie kis pe enhesaar krta hy?`,
    a: `Garmi pe`,
    b: `Hawa pe`,
    c: `Dosre jandaar pe`,
    d: `Barish pe`,
    correct: `c`,
  },
  {
    question: `Kon sa jandaar Pathar-numa dikhta hy?`,
    a: `Kachwa`,
    b: `Coral`,
    c: `Machli`,
    d: `Makhi`,
    correct: `b`,
  },
  {
    question: `'Sahara' k bare me ap kia jante han?`,
    a: `Registan`,
    b: `Pakistan ka sab se bara registan`,
    c: `Duniya ka sab se bara registan`,
    d: `Sab se chota registan`,
    correct: `c`,
  },
  {
    question: `En me se kon sa sehra Balochistan me hy?`,
    a: `Kharan`,
    b: `Cholistan`,
    c: `Thar`,
    d: `Thal`,
    correct: `a`,
  },
  {
    question: `Wo jandaar jo gosht or sabza dono khate han onhen kia kehte han?`,
    a: `predator`,
    b: `Omnivores`,
    c: `Herbivores`,
    d: `Carnivores`,
    correct: `b`,
  },
  {
    question: `Wo jandaar jo sirf Gosht khate han onhen kia kehte han?`,
    a: `predator`,
    b: `Omnivores`,
    c: `Herbivores`,
    d: `Carnivores`,
    correct: `d`,
  },
  {
    question: `Insan kis waja se bimar ho sakta hy?`,
    a: `Fiza ki aludgi se`,
    b: `Pani ki aludgi se`,
    c: `Khane ki kami se`,
    d: `En sab se`,
    correct: `d`,
  },
  {
    question: `Pani ka almi din kab mnaya jata hy?`,
    a: `15 Oct`,
    b: `30 Jan`,
    c: `25 March`,
    d: `22 March`,
    correct: `d`,
  },
  {
    question: `Bokhar me Temperature ---- hota hy?`,
    a: `98.60&deg;C se kam`,
    b: `98.60&deg;C se ziada`,
    c: `98.60&deg;C k braber`,
    d: `128.0&deg;C`,
    correct: `b`,
  },
  {
    question: `Khansi q hoti hy?`,
    a: `Gale me kharash se`,
    b: `Gale me jrasim se`,
    c: `Bokhar se`,
    d: `Gale me zakhim se`,
    correct: `a`,
  },
  {
    question: `Bokhar khud bimari nai hy balk ---- hy?`,
    a: `Bimari ki waja`,
    b: `Bimari ka side effect`,
    c: `Bimari ki alamat`,
    d: `ye sab`,
    correct: `c`,
  },
  {
    question: `'Thermometer' kis kam k lie bnaya gya hy?`,
    a: `Hararat napne k lie`,
    b: `Blood pressure napne k lie`,
    c: `wazan napne k lie`,
    d: `Nami napne k lie`,
    correct: `a`,
  },
  {
    question: `Khansi windpipe ko ---- krti hy?`,
    a: `Gila`,
    b: `Saaf`,
    c: `Bara`,
    d: `Khushk`,
    correct: `b`,
  },
  {
    question: `Chink --- bahar nekalne k lie ati hy?`,
    a: `Hawa`,
    b: `Jrasim`,
    c: `pani`,
    d: `khushki`,
    correct: `b`,
  },
  {
    question: `'Flu' kia hy?`,
    a: `Bimari`,
    b: `Bimari ki alamat`,
    c: `viruse`,
    d: `Bimari ki alamat + Bimari`,
    correct: `d`,
  },
  {
    question: `'Contagious Disease' es term k bare me ap kia jante han?`,
    a: `Insan se Insan ko na lagle wali bimari`,
    b: `Hawa k zarye phelne wali bimari`,
    c: `Mosami bokhar`,
    d: `Halka bokhar`,
    correct: `b`,
  },
  {
    question: `'Polio' kon si bimari hy?`,
    a: `Contagious Disease`,
    b: `Non-Contagious Disease`,
    c: `bacteria`,
    d: `---`,
    correct: `a`,
  },
  {
    question: `kia vaccine Polio ka ilaj hy?`,
    a: `Yes`,
    b: `NO`,
    c: `---`,
    d: `---`,
    correct: `b`,
  },
  {
    question: `Jo bimari hawa k zarye nahin phelti ose kia kehte han?`,
    a: `Contagious Disease`,
    b: `Non-Contagious Disease`,
    c: `bacterial Disease`,
    d: `Azpolizer Disease`,
    correct: `b`,
  },
  {
    question: `Cancer kis kisam ki bimari hay?`,
    a: `Contagious Disease`,
    b: `Non-Contagious Disease`,
    c: `bacterial Disease`,
    d: `Azpolizer Disease`,
    correct: `b`,
  },
  {
    question: `Contagious Disease se kaese bacha ja sakta hy?`,
    a: `Hath dhone se`,
    b: `Mask pahen'ne se`,
    c: `vaccine lagwane se`,
    d: `En sab se`,
    correct: `d`,
  },
  {
    question: `Mask ka istamal kon si bimari se bachao kr sakta hy?`,
    a: `Contagious Disease`,
    b: `Non-Contagious Disease`,
    c: `bacterial Disease`,
    d: `Azpolizer Disease`,
    correct: `a`,
  },
  {
    question: `Hath dhone ka almi din kab mnaya jata hy?`,
    a: `15 Oct`,
    b: `15 Aug`,
    c: `30 Jan`,
    d: `16 Oct`,
    correct: `a`,
  },
  {
    question: `Pani obalne se kia hota hy?`,
    a: `Saaf`,
    b: `ziada`,
    c: `kam`,
    d: `Thanda`,
    correct: `a`,
  },
  {
    question: `Filtration kis ka tarika hy?`,
    a: `Sanse lene       `,
    b: `Pani saaf krne`,
    c: `Pani thanda krne`,
    d: `Pani se madiniyat nekalne `,
    correct: `b`,
  },
  {
    question: `Filtration me istamal hone wala filter paper kia kam hota hy?`,
    a: `pani ko thanda krna`,
    b: `Pani ko chan'na`,
    c: `Pani ko ganda krna`,
    d: `Pani se namkiyat alag krna`,
    correct: `b`,
  },
  {
    question: `Kia Filtration k zarye jraseem pani se nekalte han hy?`,
    a: `Nahin`,
    b: `Koch koch nekale ja sakte han sare nai`,
    c: `Han`,
    d: `---`,
    correct: `b`,
  },
  {
    question: `Factory k dhuen se kia hota hy?`,
    a: `Fiza ki aludgi`,
    b: `Pani ki aludgi`,
    c: `Bimariyon me izafa`,
    d: `ye sab hota hy`,
    correct: `d`,
  },
  {
    question: `'Vaccination' ko kia kaha ja sakta hy?`,
    a: `Bimari ka ilaj`,
    b: `Bimari se bachao ka tarika`,
    c: `Dard se rehai ka tarika`,
    d: `ye sab`,
    correct: `b`,
  },
  {
    question: `Safai ka din kab mnaya jata hy?`,
    a: `15 Oct`,
    b: `15 Aug`,
    c: `30 Jan`,
    d: `16 Oct`,
    correct: `c`,
  },
  {
    question: `Balochistan me kitne hospitals han?`,
    a: `197`,
    b: `198`,
    c: `0`,
    d: `1`,
    correct: `a`,
  },
  {
    question: `Calcium ki mikdaar kis me ziada pai jati hy?`,
    a: "Gosht",
    b: "Dodh",
    c: "Daal",
    d: "Chawal",
    correct: "b",
  },
  {
    question: `Agar apko flu hoto ap dosron ko flu se bachane k lie kia kren ge?`,
    a: "Warzish kren ge",
    b: "Dhup me bethe ge?",
    c: "Mask pehne ge",
    d: "Ziada soen ge",
    correct: "c",
  },
  {
    question: `Polio kis ki waja se hota hy?`,
    a: "Bacteria",
    b: "Virus",
    c: "Makhi",
    d: "Machar",
    correct: "b",
  },
  {
    question: `Jo chiz pani pe terti hy oska ki ___ pani se kam hota hy?`,
    a: `Volume (hujam)`,
    b: `Area`,
    c: `Density (Kshafat)`,
    d: `___`,
    correct: `c`,
  },
  {
    question: `En mese kis ka volume (hujam) sab se ziada hy?`,
    a: `Ktaab`,
    b: `cricket ka Bla`,
    c: `pencil`,
    d: `Scale`,
    correct: `b`,
  },
  {
    question: `En mese kon sa group Matter(mada) ki tino halton me sai hy?`,
    a: `Baraf, Barish, Badal`,
    b: `shabnam, Bokharaat, Barish`,
    c: `Baraf, Badal, Bhap`,
    d: `Barish, Bokharat, Badal`,
    correct: `a`,
  },
  {
    question: `Agar Lakri se bana or Lohe se bana hoe chamchon ko garam pani me dala jae to lohe wala chamach garam hoa hoga lekn lakri wala nai. qiun?`,
    a: `Loha hararat ka good conductor hy`,
    b: `Lakri hararat ki good conductor hy`,
    c: `Lakri pani me perti hy es lie `,
    d: `Pani ziada garam tha es lie`,
    correct: `a`,
  },
  {
    question: `Pani, Baraf or Bokharaat k temperatures Mokhtalif han. Sard se Garam ki tarteb kon si hogi?`,
    a: `Bokharat, Baraf, Pani`,
    b: `Baraf. Bokharaat, Pani, `,
    c: `Bokharaat, Pani, Baraf`,
    d: `Baraf, Pani, Bokharaat`,
    correct: `d`,
  },
  {
    question: `Lakri (wood) pani me q nahin dubti?`,
    a: `Kam volume ki waja se`,
    b: `Ziada voulme ki waja se`,
    c: `Ziada density ki waja se`,
    d: `Kam density ki waja se`,
    correct: `d`,
  },
  {
    question: `En mese kis ko Heavy Metal kaha jata hy, Density ki base pe?`,
    a: `Magnesium`,
    b: `Chromium`,
    c: `Aluminum`,
    d: `Titanium`,
    correct: `b`,
  },
  {
    question: `Neechay diye gaye dhaaton (Metals) me se kaun sa dhaat achha Conductor of Electricity hai?`,
    a: `Lead`,
    b: `Silver`,
    c: `Mercury`,
    d: `Gold`,
    correct: `b`,
  },
  {
    question: `Kon sa dhaat aam taur par bijli ke taar banane me istemal hota hai?`,
    a: `Zinc`,
    b: `Aluminum`,
    c: `Iron`,
    d: `Nickel`,
    correct: `b`,
  },
  {
    question: `Loha, tambe aur aluminum bartan banane me kyon istemal kiye jaate hain?`,
    a: `Halkay hote hain`,
    b: `Safaai karna aasan hota hai`,
    c: `Heat achi tarha Pas kr sakte han`,
    d: `Jaldi zang nai lagta`,
    correct: `c`,
  },

  {
    question: `Ksi b object me matter (mada) ki mikdaar ko kia kaha jata hy?`,
    a: "Mass",
    b: "weight",
    c: "Gravitional-Mas",
    d: "BMI",
    correct: "a",
  },
  {
    question: `Ksi b halat me matter ka kia tabdeel nai hota`,
    a: "Volume",
    b: "Mass",
    c: "Weight",
    d: "Area",
    correct: "b",
  },
  {
    question: `Makhsus hujam(Volume) or shakal(Shape) wale made(matter) se kia morad hy?`,
    a: "Thos (solid)",
    b: "Maya(Liquid)",
    c: "Gas",
    d: "Plasma",
    correct: "a",
  },
  {
    question: `Matter ki wo halat jis me makhsus hujam(Volume) or mokhtalif shakal(Shape) hoti hy ose kia kehte han?`,
    a: "Thos (solid)",
    b: "Maya(Liquid)",
    c: "Gas",
    d: "Plasma",
    correct: "b",
  },
  {
    question: `Jga jo Matter gherta hy ose kia kehte han?`,
    a: "Volume",
    b: "Mass",
    c: "Area",
    d: "---",
    correct: "a",
  },
  {
    question: `Pani agar 2 mukhtalif shakal k glason me ak jitna dala jae to oska kia same hoga?`,
    a: "volume(hojam)",
    b: "Shape(shakal)",
    c: "Height",
    d: "weight",
    correct: "a",
  },
  {
    question: `Ak mada(Matter) jitni jaga gherta hy wo oska --- kehlata hy?`,
    a: "Hujam(Volume)",
    b: "Shape(shakal)",
    c: "Mass",
    d: "---",
    correct: "a",
  },
  {
    question: `Solid ko asani se q press nahin kia ja sakta?`,
    a: "Osme partical ziada hote han",
    b: "oski skin strong hoti hy",
    c: "Gravity ziada hoti hy",
    d: "----",
    correct: "a",
  },
  {
    question: `Solid me force of attraction (khechao) kaesi hoti hy?`,
    a: "Strong",
    b: "Weak",
    c: "Mokhtalif",
    d: "Nahin hoti",
    correct: "a",
  },
  {
    question: `Liquid k particals me force of attraction solid ki nisbat ---- hoti hy?`,
    a: "ziada",
    b: "kam",
    c: "Braber",
    d: "Double",
    correct: "b",
  },
  {
    question: `Beh jana (to flow) kis ki khosusiyat hy?`,
    a: "solid ki",
    b: "Liquid ki",
    c: "Gas ki",
    d: "Plasma ki",
    correct: "b",
  },
  {
    question: `Gas me particals kis se kam hote han?`,
    a: "solid se",
    b: "solid or liquid dono se",
    c: "liquid se",
    d: "ksi se b nai",
    correct: "b",
  },
  {
    question: `Kis k particals freely move kr sakte han ksi b direction me?`,
    a: "solid k",
    b: "solid or liquid dono k",
    c: "liquid k",
    d: "Gas k",
    correct: "d",
  },
  {
    question: `Sare Metals ---- hote han?`,
    a: "shiny (Chamakdaar)",
    b: "do not shine (nahin chamakte)",
    c: "soft",
    d: "Hard",
    correct: "a",
  },
  {
    question: `Gold is a _____?`,
    a: "Soft metal",
    b: "Hard metal",
    c: "Pure metal",
    d: "Metal nai hy",
    correct: "a",
  },
  {
    question: `thermal power station me kia jala k Bijli bnai jati hy?`,
    a: "Sirf coal",
    b: "Sirf oil",
    c: "Sirf gas",
    d: "Sirf en me se koi bhi",
    correct: "d",
  },
  {
    question: `Duniya 1 second me jitni energy use krti hy. os se 1 car kitne arse tak chalai ja sakti hy?`,
    a: "156 din",
    b: "156 saal",
    c: "156 mahine",
    d: "158 saal",
    correct: "b",
  },
  {
    question: `Duniya 322,000 litres petrol k kitne time me use kr deti hy?`,
    a: "1 sec",
    b: "Ankh jhapakne me",
    c: "0.5 sec",
    d: "1 minute",
    correct: "b",
  },
  {
    question: `Jab roshni ksi object se nai gozar sakti to kia hota hy?`,
    a: "Object tut jata hy",
    b: "Roshni khatam ho jati hy",
    c: "Object ka saya banta hy",
    d: "Object nahin dikhta",
    correct: "c",
  },
  {
    question: `Roshni kis ki kisam hy?`,
    a: "Tawanai (Energy) ki",
    b: "Awaaz ki",
    c: "Hawa ki",
    d: "Suraj ki",
    correct: "a",
  },
  {
    question: `Roshni k kitne kisam k sources hote han`,
    a: "1",
    b: "3",
    c: "2",
    d: "4",
    correct: "c",
  },
  {
    question: `Torchlight ak ___ light hy?`,
    a: "Natural (Qudrati)",
    b: "Artifical (Insan ki bnai hoi)",
    c: "Open source",
    d: "Tez",
    correct: "b",
  },
  {
    question: `ksi chamakti chiz pe roshni gre to wo kia krti hy?`,
    a: "2 tokre",
    b: "Par hoti hy",
    c: "Reflect",
    d: "Khatam hoti hy",
    correct: "c",
  },
  {
    question: `Suraj ki roshni me kitne rang hote han?`,
    a: "4",
    b: "5",
    c: "7",
    d: "8",
    correct: "c",
  },
  {
    question: `Suraj me hone wale Dhamake ham nai sun sakte. eski waja kia hy?`,
    a: " Suraj ki awaz bohot kam hoti hai",
    b: "Suraj bhot dur hy",
    c: "Dhamakay k awaz khla me nahi chal sakti",
    d: "Suraj me koi aisi awaz nahi hoti",
    correct: "c",
  },
  {
    question: `Eco kia hy?`,
    a: `2 awazon ko 1 sath sun'na`,
    b: `1 awaz ko sun'na`,
    c: `1 awaz ka dobara sonai dena`,
    d: `2 awazon ka mix hona`,
    correct: "c",
  },
  {
    question: `Hararat (heat) kahan se kaha safar krti hy?`,
    a: "sard se garam",
    b: "kam garam se ziada garam",
    c: "ziada garam se kam garam",
    d: "Ziada thande se kam thande ki traf",
    correct: "c",
  },
  {
    question: `Chae se garmi q hawa me nekal kr chae ko thandi krti hy?`,
    a: "Qk chae mazeed garam nai so skti",
    b: "Chae ziada garam hoti hy es lie",
    c: "Garmi garam se thandi chiz me jati hy",
    d: "hawa ki waja se",
    correct: "c",
  },
  {
    question: `En mese kon sa Energy (tawanai) ki kisam nai hy?`,
    a: "Hararat (Heat)",
    b: "Awaaz",
    c: "Shisha",
    d: "Light",
    correct: "c",
  },
  {
    question: `Pehle ap apna hath blub k pas rakhen. pher hath dur krne par saya ___ hoga?`,
    a: "Bara",
    b: "otna hi rhe ga",
    c: "Chota",
    d: "Khatam ho jae ga",
    correct: "c",
  },
  {
    question: `Electric energy en mese kis me badli ja sakti hy?`,
    a: "Awaaz",
    b: "Heat",
    c: "En sab me",
    d: "Light",
    correct: "c",
  },
  {
    question: `Kia light khla me safat kr sakti hy?`,
    a: "agar tez hoto",
    b: "Nahin",
    c: "Han",
    d: "Agar surkh rang ki hoto",
    correct: "c",
  },
  {
    question: `Kia awaaz khla me safar kr sakti hy?`,
    a: "Agar Tez hoto",
    b: "Han",
    c: "Nahin",
    d: "____",
    correct: "c",
  },
  {
    question: `Kia Heat (Hararat) khla me safar kr sakti hy?`,
    a: "Agar bhot ziada hoto",
    b: "Han",
    c: "Nahin",
    d: "____",
    correct: "c",
  },
  {
    question: `TV chalte wakt Electricity, Energy ki kon kon si kisam me tabdeel ho rai hoti hy?`,
    a: "Light",
    b: "Heat",
    c: "en sab me",
    d: "Sound",
    correct: "c",
  },
  {
    question: `Ashiya k bare me kon si bat sai hy?`,
    a: "Sab roki hoi han",
    b: "Sab motion me han",
    c: "Koi roki hoi hy or koi motion me hy",
    d: "En mese koi b nai",
    correct: "c",
  },
  {
    question: `Ruki hoi ashiya me motion lane k lie kis ki zaroorat hogi?`,
    a: "Velocity",
    b: "Gravity",
    c: "Force",
    d: "Friction",
    correct: "c",
  },
  {
    question: `Force kia hy?`,
    a: "Object ko rest me rakhna",
    b: "Object ko motion me rakhna",
    c: `Object ko khench'ne or dhakel'ne ka amal`,
    d: "Object ko slow krna",
    correct: "c",
  },
  {
    question: `Force object ki ___ badal sakti hy?`,
    a: "shakal",
    b: "Simt (Direction)",
    c: `Ye sab`,
    d: "Speed",
    correct: "c",
  },
  {
    question: `Jab koi object apni jaga tabdeel krta hy to ose kia kehte han?`,
    a: "Object ne kam kia",
    b: "Object rest mr hy",
    c: "Object motion me hy",
    d: "Enme se koi nai",
    correct: "c",
  },
  {
    question: `Ksi b object ko oper phenkne pe wo niche ata hy, eski waja ___ hy?`,
    a: "Object ka wazan",
    b: "Object ka mass",
    c: "Zamin ki kashish",
    d: "Fraction",
    correct: "c",
  },
  {
    question: `Koi b chalti hoi chiz koch time k bad q rok jati hy?`,
    a: "Hawa ki waja se",
    b: "Wazan ki waja se",
    c: "Friction ki waja se",
    d: "en sab ki waja se",
    correct: "c",
  },
  {
    question: `Ap kis waja se chal pate han?`,
    a: "Gravity",
    b: "Force",
    c: "Friction",
    d: "Velocity",
    correct: "c",
  },
  {
    question: `Car k tyron ka ghis jana ___ hy?`,
    a: "Friction ka faeda",
    b: "Fraction ka kanoon",
    c: "Friction ka noksan",
    d: "____",
    correct: "c",
  },
  {
    question: `Friction k noksan kia han?`,
    a: "Noice",
    b: "Heat",
    c: "ye sab",
    d: "chizon ka tootna",
    correct: "c",
  },
  {
    question: `Lever, pulley, gear. ye sab q ejaad ki gain?`,
    a: "Bechne k lie",
    b: "Experiment krne k lie",
    c: "Kam asan krne k lie",
    d: "Machine bnane k lie",
    correct: "c",
  },
  {
    question: `Liver kia hy?`,
    a: "Heavy machine (bari machine)",
    b: "Loha",
    c: "Simple machine (Sada machine)",
    d: "Mini-Tool (Chota-ala)",
    correct: "c",
  },
  {
    question: `Bari machine (heavy machines) kaese bnai gain han?`,
    a: `Experiment kr k`,
    b: `Force ka insamal kr k`,
    c: `Simple machino ko mila k`,
    d: `Bari machino ko mla k`,
    correct: "c",
  },
  {
    question: `Cycle me kon si simle machine ka istamal kia gya hy?`,
    a: "Pully",
    b: "Liver",
    c: "Gear",
    d: "Inclined Plane",
    correct: "c",
  },
  {
    question: `Zamin kis waja se sari chizon ko apni traf khenchti hy?`,
    a: "Gravity",
    b: "Force",
    c: "Friction",
    d: "Velocity",
    correct: "a",
  },
  {
    question: `Agar ak hi jitni force ham khelona car ko lgaen to enme se kis pe wo ziada chal pae gi? `,
    a: "Pathrili zamain pe",
    b: "Marbal pe",
    c: "Inteon pe",
    d: "Pani pe",
    correct: "b",
  },
  {
    question: `Gravity kis tarha k Objects pe asar krti hy?`,
    a: "Chote",
    b: "Bare",
    c: "sab pe",
    d: "Halke",
    correct: "c",
  },
  {
    question: `Friction kis simt me force lgati hy?`,
    a: "Object k motion ki simt me",
    b: "Niche ki simt me",
    c: "Object ki simt k mokhalif",
    d: "Friction ki koi simt nai hoti",
    correct: "c",
  },
  {
    question: `Machine hamare lie kia krti hy?`,
    a: "Kaam",
    b: "Kaam ko mushkil",
    c: "Kaam ko asan",
    d: "Tez kam",
    correct: "c",
  },
  {
    question: `Glass (shisha) kis se bana hota hy?`,
    a: `soil`,
    b: `Salt`,
    c: `Sand`,
    d: `Rubber`,
    correct: "c",
  },
  {
    question: `zamin me thos Bejaan chemicals kia kehlate han?<br>
The solid non-living chemicals present in Earth are:`,
    a: `soil`,
    b: `Rock`,
    c: `Minerals`,
    d: `fossils`,
    correct: "d",
  },
  {
    question: `Chizon ko dobara Qabil-e-Istemaal bnane ka amal kia kehlata hy?`,
    a: `cycling`,
    b: `care`,
    c: `recycling`,
    d: `conservation of resources.`,
    correct: "c",
  },
  {
    question: `Enme se kon sa 1 bar istamal k bad dobara istamal nahin kia ja sakta?`,
    a: `air`,
    b: `Plastic`,
    c: `oil`,
    d: `solar energy`,
    correct: "c",
  },
  {
    question: `Fossils hamen kis k bare me information dete han?`,
    a: `Sare jandaron k bare me`,
    b: `Ane wale jandaron k bare me`,
    c: `Mazi k jandaron k bare me`,
    d: `Mojuda Jandaron k bare me`,
    correct: "c",
  },
  {
    question: `Janglaat ko dubara istamal hone wala resource (re-newable resource) q kaha jata hy?`,
    a: `En se bad me ghar bnae ja sakte han`,
    b: `En ko bad me Endhan k Tor pe istamal krte han`,
    c: `Janglaat mustakbil me dobara ogae ja sakte han`,
    d: `En mese koi nai`,
    correct: "c",
  },
  {
    question: `Pertol kis ki misal hy?`,
    a: `Re-newable resource`,
    b: `Liquid`,
    c: `Non-renewable resource`,
    d: `Artifical Fuel`,
    correct: "c",
  },
  {
    question: `Zamin ka __% hisa kasht kia jata hy?`,
    a: `12%`,
    b: `13%`,
    c: `11%`,
    d: `10%`,
    correct: "c",
  },
  {
    question: `Zamin ka total __% hisa pani hy?`,
    a: `21%`,
    b: `72%`,
    c: `71%`,
    d: `61%`,
    correct: "c",
  },
  {
    question: `Zamin ka __% hisa Khush zamin (land) hy`,
    a: `71%`,
    b: `72%`,
    c: `29%`,
    d: `61%`,
    correct: "c",
  },
  {
    question: `Tamam samandar zamin ka __% hisa han?`,
    a: `71%`,
    b: `92%`,
    c: `97%`,
    d: `61%`,
    correct: "c",
  },
  {
    question: `water, air soil, forests, coal, oil, natural gas and minerals: Ye sab kia kehlate han?`,
    a: `Abi Zakhair (Water resources)`,
    b: `Khudsahta Zakhair (Artifical resources)`,
    c: `Zamini Zakhair (Earth's resources)`,
    d: `Wakti Zakhair (Temporary resources)`,
    correct: "c",
  },
  {
    question: `Wind Mill kia hy?`,
    a: `Hawa se pani bnane wali machine`,
    b: `Hawa se nami bnane wali machine`,
    c: `Hawa se Bijli bnane wali machine`,
    d: `Hawa ko saaf krne wali machine`,
    correct: "c",
  },
  {
    question: `soil (Matti) Zamin ki ___ hy?`,
    a: `Sab se ziada garam layer`,
    b: `Andar wali layer`,
    c: `Bahar wali layer`,
    d: `Sab se ziada patli layer`,
    correct: "c",
  },
  {
    question: `Soil (Matti) ka almi din kab mnaya jata hy?`,
    a: `15 Oct`,
    b: `30 Jan`,
    c: `5 Dec`,
    d: `22 March`,
    correct: "c",
  },
  {
    question: `Pakistan ka __% Area Janglaat par mushtamil hy?`,
    a: `71%`,
    b: `9.2%`,
    c: `5.2%`,
    d: `6.1%`,
    correct: "c",
  },
  {
    question: `Hawa me oxygen shamil krne ka sab se bara zarya kon hy?`,
    a: `Soil`,
    b: `Janwer`,
    c: `Janglaat`,
    d: `Darya`,
    correct: "c",
  },
  {
    question: `kerosene, petrol, diesel, engine oil, grease, petroleum jelly and tarcoal ye sab 1 resource se alag kie jate han?`,
    a: `Synthetic oil`,
    b: `Carban clay`,
    c: `crude oil`,
    d: `petrolium-crul Family`,
    correct: "c",
  },
  {
    question: `Gold kis ki misal hy?`,
    a: `Rock`,
    b: `Fossil fuel`,
    c: `Mineral`,
    d: `Organic matter`,
    correct: "c",
  },
  {
    question: `kehwra duniya ki ____ sab se bari ___ ki kan hy?`,
    a: `2nd, koile ki`,
    b: `1st, koile ki`,
    c: `2nd, namak ki`,
    d: `1st, namak ki`,
    correct: "c",
  },
  {
    question: `Non-reNewable resources kse kehte han?`,
    a: `Saste resources ko`,
    b: `Zamini resources ko`,
    c: `Sirf 1 bar use hone wale resources ko`,
    d: `Abi resources ko`,
    correct: "c",
  },

  {
    question: `Agar achanak barish hone lage to kia change hoga?`,
    a: `Koi bhi nai`,
    b: `Climate condition`,
    c: `Weather condition`,
    d: `Dono`,
    correct: "c",
  },
  {
    question: `Kis zone pe suraj ki rays bilkol sidhi parhti han js ki waja se garmi ziada hoti hy.`,
    a: `Temperate Zone`,
    b: `Polar Zone`,
    c: `Tropical Zone`,
    d: `All of these`,
    correct: "c",
  },
  {
    question: `Polar Zone ka climate kaesa hy?`,
    a: `humid`,
    b: `mild`,
    c: `extremely cold`,
    d: `warm`,
    correct: "c",
  },
  {
    question: `Factories or gardyon se dhuan or gasses nekalne ki waja se Zamin ka terperature?`,
    a: `Bari Bari bhar or kam ho rha hy`,
    b: `kam ho rha hy`,
    c: `Bhar rha hy`,
    d: `Na bhar rha hy or na kam ho rha hy`,
    correct: "c",
  },
  {
    question: `climate ki base pe zamin kitne hison me divided hy?`,
    a: `1`,
    b: `2`,
    c: `3`,
    d: `4`,
    correct: "c",
  },
  {
    question: `Climate or weather me kia farq hy?`,
    a: `Duration (Mudat) ka`,
    b: `En dono ka apas me koi taluk nai`,
    c: `Weather lamba or climate chota`,
    d: `Pehle 6mah climate rehta hy, baki 6 mah weather rehta hy`,
    correct: "a",
  },
  {
    question: `Mosam k badalne ki waja kia hy?`,
    a: `Wakt ka badalna`,
    b: `Zamin ka ghumna`,
    c: `Zamin ka rokna`,
    d: `Zamin ka gol hona`,
    correct: "b",
  },
  {
    question: `weather ki parhai krne ko kia kehte han?`,
    a: `Meteorology (Mosamyaat)`,
    b: `Antamology`,
    c: `Physiology`,
    d: `geology`,
    correct: "a",
  },
  {
    question: `Ksi region ka climate logon me kia badalta hy?`,
    a: `Name`,
    b: `Omar (age)`,
    c: `Habit (adat)`,
    d: `Bnawat`,
    correct: "c",
  },
  {
    question: `Hawa ka pressure Mapne wala aala kia kehlata hy?`,
    a: `Anemometer`,
    b: `Rain Gauge`,
    c: `Barometer`,
    d: `Thermometer`,
    correct: "c",
  },
  {
    question: `Hawa ki raftaar or simt Mapne wala aala kia kehlata hy?`,
    a: `Anemometer`,
    b: `Rain Gauge`,
    c: `Barometer`,
    d: `Thermometer`,
    correct: "a",
  },
  {
    question: `Barish ki mikdaar Mapne wala aala kia kehlata hy?`,
    a: `Anemometer`,
    b: `Rain Gauge`,
    c: `Barometer`,
    d: `Thermometer`,
    correct: "b",
  },
  {
    question: `Hawa ka Temperature Mapne wala aala kia kehlata hy?`,
    a: `Anemometer`,
    b: `Rain Gauge`,
    c: `Barometer`,
    d: `Thermometer`,
    correct: "d",
  },
  {
    question: `1922 Libya, Africa me Zamin ka aj tak ka sab se ziada temperature mapa gya tha.`,
    a: `57&deg;C`,
    b: `55&deg;C`,
    c: `58&deg;C`,
    d: `56&deg;C`,
    correct: "c",
  },
  {
    question: `July 23, 2001 ko ISLAMABAD me kitni barish hoi thi?`,
    a: `620 micro meter`,
    b: `620 centi meter`,
    c: `620 mili meter`,
    d: `620 kilo meter`,
    correct: "c",
  },
  {
    question: `Aj tak Pakistan ka garam taren Tenterature tha?`,
    a: `52.5&deg;C`,
    b: `54.5&deg;C`,
    c: `53.5&deg;C`,
    d: `51.5&deg;C`,
    correct: "c",
  },
  {
    question: `Equator ak ___ line hy jo ___ ko ___ hison me divide krti hy?`,
    a: `Farzi, Zamin, 3`,
    b: `Hakiki, Zamin, 2`,
    c: `Farzi, Zamin, 2`,
    d: `Farzi, chand, 3`,
    correct: "c",
  },
  {
    question: `Jo shahir sata-e-samandar se jitna oper hoga, otna ___ hoga?`,
    a: `Garam`,
    b: `Bara`,
    c: `Thanda`,
    d: `Chota`,
    correct: "c",
  },
  {
    question: `Quetta ka aj tak ka sab se thanda temterature kitna Mapa gya hy?`,
    a: `18&deg;C`,
    b: `81&deg;C`,
    c: `-18&deg;C`,
    d: `-81&deg;C`,
    correct: "c",
  },
  {
    question: `Polution se dunya ka Temperature ___ ho rha hy?`,
    a: `Kam`,
    b: `Dogna`,
    c: `Barh rha hy ahista`,
    d: `Ruka hoa hy`,
    correct: "c",
  },
  {
    question: `am tor par choti classes me chote project or patterns bnane k lie istamal hota hy`,
    a: `Steel or aluminum`,
    b: ` Plastic or rubber`,
    c: `Paper or cardboard`,
    d: `Glass or ceramic`,
    correct: "c",
  },
  {
    question: `en mese kon si chiz kaghaz se bnai ja sakti hy?`,
    a: `Pencils and erasers`,
    b: ` Chairs and tables`,
    c: `Envelopes, bags, cards and face masks`,
    d: `Cars and airplanes`,
    correct: "c",
  },
  {
    question: `mobile ka sab se pehla kam kia hy?`,
    a: `game kkhelna`,
    b: `videos dekhna`,
    c: `call or message krna`,
    d: `book parhna`,
    correct: "c",
  },
  {
    question: `wakt ki pabandi k lie mobile kon se kam kr sakta hy?`,
    a: `Play games and watch movies`,
    b: `clicking photos`,
    c: `Act as a calculator, alarm clock, and calendar`,
    d: `Using internet`,
    correct: "c",
  },
  {
    question: `first aid box ka maqsad kia hy?`,
    a: `docter ki jaga lena`,
    b: `mokhtalif chizon ko ak jaga rakhna`,
    c: `pehli forsat me mareez ka ilaj krna`,
    d: `khaas dastawezaat ko mehfuz krna`,
    correct: "c",
  },
  {
    question: `digital thermometer ka kia kam hy?`,
    a: `khun kaghara pan mapna`,
    b: `dill ki dharkan dekhna`,
    c: `khun ka dabao mapna`,
    d: `ye sab kam`,
    correct: "c",
  },
  {
    question: `normal blood pressure kitna hota hy?`,
    a: `70/80`,
    b: `90/120`,
    c: `120/80`,
    d: `110/80  `,
    correct: "c",
  },
  {
    question: `prism k ___ kone hote han?`,
    a: `2`,
    b: `4`,
    c: `3`,
    d: `5`,
    correct: "c",
  },
  {
    question: `cube k kitne side hote han`,
    a: `2`,
    b: `4`,
    c: `6`,
    d: `8`,
    correct: "c",
  },
  {
    question: `1 saal me zamin suraj k kitne chakar lgati hy?`,
    a: `2`,
    b: `3`,
    c: `1`,
    d: `1.5`,
    correct: "c",
  },
  {
    question: `zamin chand k suraj q ghumti hy?`,
    a: `apni gravity se`,
    b: `chand ki gravity se`,
    c: `suraj ki gravity se`,
    d: `solar system ki waja se`,
    correct: "c",
  },
  {
    question: `solar system ka center kia hy?`,
    a: `chand`,
    b: `zamin`,
    c: `suraj`,
    d: `jupiter`,
    correct: "c",
  },
  {
    question: `zamin ka sab se karibi sitara kon sa hy?`,
    a: `chand`,
    b: `jupitor`,
    c: `suraj`,
    d: `mercury`,
    correct: "c",
  },
  {
    question: `suraj k sab se ziada kareeb ko sa sayara hy`,
    a: `chand`,
    b: `zamin`,
    c: `mercury`,
    d: `mars`,
    correct: "c",
  },
  {
    question: `hamare solar system me kitne sayare han?`,
    a: `6`,
    b: `7`,
    c: `8`,
    d: `9`,
    correct: "c",
  },
  {
    question: `suraj ka sab se karibi sayara 'mercury' suraj se kitna dur hy?`,
    a: `50 million meter`,
    b: `55 million meter`,
    c: `50 million kM`,
    d: `60 million kM`,
    correct: "c",
  },
  {
    question: `suraj zamin se kitna dur hy?`,
    a: `150 million meter`,
    b: `155 million meter`,
    c: `150 million kM`,
    d: `160 million kM`,
    correct: "c",
  },
  {
    question: `suraj se sab se ziada dur sayara kon sa hy?`,
    a: `mars`,
    b: `earth`,
    c: `neptune`,
    d: `venus`,
    correct: "c",
  },
  {
    question: `suraj k bad solar system ka sab se bara sayara kon sa hy?`,
    a: `earth`,
    b: `neptune`,
    c: `jupiter`,
    d: `venus`,
    correct: "c",
  },
  {
    question: `suraj ka diameter kitna hy?`,
    a: `~ 2.4 million kM`,
    b: `~ 1.3 million kM`,
    c: `~ 1.4 million kM`,
    d: `~ 1.2 million kM`,
    correct: "c",
  },
  {
    question: `zamin ki qudrati satellite kse kehte han?`,
    a: `suraj ko`,
    b: `mars ko`,
    c: `chand ko`,
    d: `ksi ko nai`,
    correct: "c",
  },
  {
    question: `29.5 dinon, me kis ka 1 chakar apne madar me mokamal hota hy?`,
    a: `zamin ka`,
    b: `jupiter ka`,
    c: `chand ka`,
    d: `mars ka`,
    correct: "c",
  },
  {
    question: `chand zamin se ___ hy?`,
    a: `bara`,
    b: `sab se dur`,
    c: `chota`,
    d: `dogna hy`,
    correct: "c",
  },
  {
    question: `zamin se chand kitna dur hy`,
    a: `484,000 kilometers`,
    b: `374,000 kilometers`,
    c: `384,000 kilometers`,
    d: `384,00 kilometers`,
    correct: "c",
  },
  {
    question: `chand kitni tarha se ghumta hy?`,
    a: `1`,
    b: `3`,
    c: `2`,
    d: `4`,
    correct: "c",
  },
  {
    question: `full moon ko pakistan me kia kaha jata hy?`,
    a: `akbar`,
    b: `mahir`,
    c: `badar`,
    d: `kamar`,
    correct: "c",
  },
  {
    question: `chand pe kon basta hy?`,
    a: `insan`,
    b: `janwar`,
    c: `paude`,
    d: `koi nai`,
    correct: "d",
  },
  {
    question: `en mese kis ka apna chand nai hy?`,
    a: `jupiter`,
    b: `mars`,
    c: `vinus`,
    d: `neptune`,
    correct: "c",
  },
  {
    question: `em mese kis k sab se ziada chand han?`,
    a: `jupiter`,
    b: `mars`,
    c: `vinus`,
    d: `neptune`,
    correct: "a",
  },
  {
    question: `zamin apne madar (axis) k gird 1 chakar pura krne me kitna time leti hy?`,
    a: `12hrs`,
    b: `48hrs`,
    c: `24hrs`,
    d: `6hrs`,
    correct: "c",
  },
  {
    question: `chand garhan hone pe chand pe kis ka saya parta hy?`,
    a: `suraj ka`,
    b: `mars ka`,
    c: `zamin ka`,
    d: `venus ka`,
    correct: "c",
  },
  {
    question: `suraj gerhan hone pe zamin pe kis ka saya parta hy?`,
    a: `suraj ka`,
    b: `mars ka`,
    c: `zamin ka`,
    d: `chand ka`,
    correct: "d",
  },
];
const gs6chapter1Data = quizDatags6ch1;
//class 4
const chapter1Data = quizDatags4ch1;
const chapter1part2Data = quizDatags4ch1part2;
const chapter2Data = quizDatags4ch2;
const chapter3Data = quizDatagn4ch3;
const chapter4Data = quizDatagn4ch4;
const chapter5Data = quizDatagn4ch5;
const chapter6Data = quizDatagn4ch6;
const chapter7Data = quizDatagn4ch7;
const chapter8Data = quizDatagn4ch8;
const chapter9Data = quizDatagn4ch9;
const chapter10Data = quizDatagn4ch10; //add chapter: here to add for every chaapter
const chapterallData = quizDatagn4chall; //add chapter: here to add for every chaapter

// chapters for GS-4 ended and started for GS-5
const gs5chapter1Data = quizDatags5ch1;
const gs5chapter2Data = quizDatags5ch2;
const gs5chapter3Data = quizDatags5ch3;
const gs5chapter4Data = quizDatags5ch4;
const gs5chapter5Data = quizDatags5ch5;
// const gs5chapter6Data = quizDatags5ch6;
const gs5chapter7Data = quizDatags5ch7;
const gs5chapter8Data = quizDatags5ch8;
const gs5chapter9Data = quizDatags5ch9;
const gs5chapter10Data = quizDatags5ch10; //add chapter for GS-4 : here to add for every chaapter
const quizContainer = document.getElementById("quiz");
const mainWelcomeScreen = document.getElementById("mainn");
const submitButton = document.getElementById("submit");
const back_to_home = document.getElementById("retry");
const scoreContainer = document.getElementById("score");

var questionNumber = 0;
var currentData;

function buildQuiz(chapterData) {
  document.getElementById("goto-submit").style.display = "block";
  document.getElementById("goto-top").style.display = "block";
  scrollToTop();
  const output = [];

  currentData = chapterData;
  questionNumber = 0;
  // shuffle the chapterData array randomly
  chapterData = chapterData.sort(() => Math.random() - 0.5);
  chapterData.forEach((questionData, questionIndex) => {
    questionNumber++;
    const answers = [];

    // create an array of options with key value pairs
    const options = [
      { key: "a", value: questionData.a },
      { key: "b", value: questionData.b },
      { key: "c", value: questionData.c },
      { key: "d", value: questionData.d },
    ];

    // shuffle the options array randomly
    options.sort(() => Math.random() - 0.5);

    options.forEach((option, index) => {
      answers.push(`
    <div class="section" style ="margin-left: 10px;">
      <label style = "display: flex;">${String.fromCharCode(index + 65)}. 
        <input type="radio" name="question${questionIndex}" value="${
        option.key
      }">
        <div><span style = " padding-top:-30px; text-transform: capitalize;">${
          option.value
        }</span></div>
      </label>
    </div>
  `);
    });
    var chapterTotalQuesstion = document.getElementById(
      "chapterTotalQuesstion"
    );
    chapterTotalQuesstion.innerHTML = `Total Question : ${chapterData.length}`;
    // ****Question portion****
    output.push(` 
<div class = "section">
<div class="questionSection"><p style = "width:35px">Q. ${questionNumber}</p><p style="text-transform: capitalize; width: 100%;">${
      questionData.question
    }</p></div>
    
<div class="answers">
${answers.join("")}
</div>
</div>
          
`);
    document.getElementById("menue").style.display = "none";
    submitButton.style.display = "block";
  });

  quizContainer.innerHTML = output.join("");
}

const chapter1Button = document.getElementById("gs4chp-1");
const chapter1part2Button = document.getElementById("gs4chp1part-2"); //add chapter: here to add for ever chapter
const chapter2Button = document.getElementById("gs4chp-2"); //add chapter: here to add for ever chapter
const chapter3Button = document.getElementById("gs4chp-3"); //add chapter: here to add for ever chapter
const chapter4Button = document.getElementById("gs4chp-4"); //add chapter: here to add for ever chapter
const chapter5Button = document.getElementById("gs4chp-5"); //add chapter: here to add for ever chapter
const chapter6Button = document.getElementById("gs4chp-6"); //add chapter: here to add for ever chapter
const chapter7Button = document.getElementById("gs4chp-7"); //add chapter: here to add for ever chapter
const chapter8Button = document.getElementById("gs4chp-8"); //add chapter: here to add for ever chapter
const chapter9Button = document.getElementById("gs4chp-9"); //add chapter: here to add for ever chapter
const chapter10Button = document.getElementById("gs4chp-10"); //add chapter: here to add for ever chapter
const chapterallButton = document.getElementById("gs4chp-all"); //add chapter: here to add for ever chapter

// for GS-5

const gs5chapter1Button = document.getElementById("gs5chp-1");
const gs5chapter2Button = document.getElementById("gs5chp-2");
const gs5chapter3Button = document.getElementById("gs5chp-3");
const gs5chapter4Button = document.getElementById("gs5chp-4");
const gs5chapter5Button = document.getElementById("gs5chp-5");
const gs5chapter6Button = document.getElementById("gs5chp-6");
const gs5chapter7Button = document.getElementById("gs5chp-7");
const gs5chapter8Button = document.getElementById("gs5chp-8");
const gs5chapter9Button = document.getElementById("gs5chp-9");
const gs5chapter10Button = document.getElementById("gs5chp-10"); //add chapter: here to add for ever chapter GS-5 end

//for GS-6
const gs6chapter1Button = document.getElementById("gs6chp-1");
const gs6chapter2Button = document.getElementById("gs6chp-2");
const gs6chapter3Button = document.getElementById("gs6chp-3");
const gs6chapter4Button = document.getElementById("gs6chp-4");
const gs6chapter5Button = document.getElementById("gs6chp-5");
const gs6chapter6Button = document.getElementById("gs6chp-6");
const gs6chapter7Button = document.getElementById("gs6chp-7");
const gs6chapter8Button = document.getElementById("gs6chp-8");
const gs6chapter9Button = document.getElementById("gs6chp-9");
const gs6chapter10Button = document.getElementById("gs6chp-10"); //add chapter: here to add for ever chapter GS-5 end
const gs6chapter11Button = document.getElementById("gs6chp-11"); //add chapter: here to add for ever chapter GS-5 end
const gs6chapter12Button = document.getElementById("gs6chp-12"); //add chapter: here to add for ever chapter GS-5 end

chapter1Button.addEventListener("click", () => {
  buildQuiz(chapter1Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 1: Understanding Ourselves. Part 01";
  document.getElementById("chapterName").style.display = "block";
});
chapter1part2Button.addEventListener("click", () => {
  buildQuiz(chapter1part2Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 1: Understanding Ourselves. Part 02";
  document.getElementById("chapterName").style.display = "block";
});
chapter2Button.addEventListener("click", () => {
  buildQuiz(chapter2Data);
  document.getElementById("chapterName").innerHTML = "Chapter 2: Ecosystem";
  document.getElementById("chapterName").style.display = "block";
});
//add chapter: here to add for ever chapter
chapter3Button.addEventListener("click", () => {
  buildQuiz(chapter3Data);
  document.getElementById("chapterName").innerHTML = "Chapter 3: Human Health";
  document.getElementById("chapterName").style.display = "block";
});
chapter4Button.addEventListener("click", () => {
  buildQuiz(chapter4Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 4: Matter and Its Characteristics";
  document.getElementById("chapterName").style.display = "block";
});
chapter5Button.addEventListener("click", () => {
  buildQuiz(chapter5Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 5: Forms of Energy and Energy Transfer";
  document.getElementById("chapterName").style.display = "block";
});
chapter6Button.addEventListener("click", () => {
  buildQuiz(chapter6Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 6: Force and Motion";
  document.getElementById("chapterName").style.display = "block";
});
chapter7Button.addEventListener("click", () => {
  buildQuiz(chapter7Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 7: Earth and its Resources";
  document.getElementById("chapterName").style.display = "block";
});
chapter8Button.addEventListener("click", () => {
  buildQuiz(chapter8Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 8: Earth's Weather and Climate";
  document.getElementById("chapterName").style.display = "block";
});
chapter9Button.addEventListener("click", () => {
  buildQuiz(chapter9Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 9: Solar System and Our Earth";
  document.getElementById("chapterName").style.display = "block";
});
chapter10Button.addEventListener("click", () => {
  buildQuiz(chapter10Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 10: Technology in Everyday Life";
  document.getElementById("chapterName").style.display = "block";
});
chapterallButton.addEventListener("click", () => {
  buildQuiz(chapterallData);
  document.getElementById("chapterName").innerHTML =
    "General Science # 04. Complete Quiz";
  document.getElementById("chapterName").style.display = "block";
});
// Event listoner for GS-5
gs5chapter1Button.addEventListener("click", () => {
  buildQuiz(gs5chapter1Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 1: Classification of Living Organisms";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter2Button.addEventListener("click", () => {
  buildQuiz(gs5chapter2Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 2: Micro Organisms";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter3Button.addEventListener("click", () => {
  buildQuiz(gs5chapter3Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 3: Flowers and Seeds";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter4Button.addEventListener("click", () => {
  buildQuiz(gs5chapter4Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 4: Environmental Pollution";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter5Button.addEventListener("click", () => {
  buildQuiz(gs5chapter5Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 5: Physical and Chemical Changes of Matter";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter6Button.addEventListener("click", () => {
  buildQuiz(quizDatags5ch6);
  document.getElementById("chapterName").innerHTML =
    "Chapter 6: Light and Sound";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter7Button.addEventListener("click", () => {
  buildQuiz(quizDatags5ch7);
  document.getElementById("chapterName").innerHTML =
    "Chapter 7: Electricity and Magnetism";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter8Button.addEventListener("click", () => {
  buildQuiz(quizDatags5ch8);
  document.getElementById("chapterName").innerHTML =
    "Chapter 8: Structure of Earth";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter9Button.addEventListener("click", () => {
  buildQuiz(quizDatags5ch9);
  document.getElementById("chapterName").innerHTML =
    "Chapter 9: Space and Satellites";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter10Button.addEventListener("click", () => {
  buildQuiz(quizDatags5ch10);
  document.getElementById("chapterName").innerHTML =
    "Chapter 10: Technology in Everyday Life";
  document.getElementById("chapterName").style.display = "block";
});

// for GS-6
gs6chapter1Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch1);
  document.getElementById("chapterName").innerHTML =
    "Chapter 1: Cellular Organization of Plants and Animals";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter2Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch2);
  document.getElementById("chapterName").innerHTML = "Chapter 2: Sense Organs";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter3Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch3);
  document.getElementById("chapterName").innerHTML =
    "Chapter 3: PHOTOSYNTHESIS AND RESPIRATION IN PLANTS";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter4Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch4);
  document.getElementById("chapterName").innerHTML =
    "Chapter 4: ENVIRONMENT AND INTERACTIONS";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter5Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch5);
  document.getElementById("chapterName").innerHTML =
    "Chapter 5: Atom, Molecules, Mixture and Compounds";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter6Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch6);
  document.getElementById("chapterName").innerHTML = "Chapter 6: Air";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter7Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch7);
  document.getElementById("chapterName").innerHTML =
    "Chapter 7: SOLUTIONS AND SUSPENSIONS";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter8Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch8);
  document.getElementById("chapterName").innerHTML =
    "Chapter 8: Energy and its Forms";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter9Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch9);
  document.getElementById("chapterName").innerHTML =
    "Chapter 9: Forces and Machines";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter10Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch10);
  document.getElementById("chapterName").innerHTML =
    "Chapter 10: Properties of Light";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter11Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch11);
  document.getElementById("chapterName").innerHTML =
    "Chapter 11: Investigating Sound";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter12Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch12);
  document.getElementById("chapterName").innerHTML =
    "Chapter 12: SPACE AND SATELLITES";
  document.getElementById("chapterName").style.display = "block";
});
// function nightmode() {
//   var sectionText = document.querySelectorAll('.section');

//   sectionText.forEach(function(section) {
//     section.style.backgroundColor = 'black';
//   });
//   closeMenu();
//   var body = document.getElementById("Bodyy");
//   var nightbutton = document.getElementById("nbtn");
//   var chapterName = document.getElementById("chapterName");
//   chapterName.classList.toggle("night-mode");
//   body.classList.toggle("night-mode");

//   var questions = document.querySelectorAll(".question");
//   for (var i = 0; i < questions.length; i++) {
//     questions[i].classList.toggle("night-mode");
//   }
//   var sectionText = document.querySelectorAll('.section');

// sectionText.forEach(function(section) {
//   section.style.backgroundColor = 'black';
// });

//   var buttons = document.querySelectorAll(".btn");
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].classList.toggle("night-mode");
//   }
//   if (body.classList.contains("night-mode")) {
//     nightbutton.textContent = "Light Mode ";
//   } else {
//     nightbutton.textContent = "Night Mode";
//   }
// }

function closeMenu() {
  // mainWelcomeScreen.style.display = 'none'
  const checkbox = document.getElementById("checkbox_toggle");
  if (checkbox) {
    checkbox.checked = false;
  }
}
function showAllContent() {
  document.getElementById("mainn").style.display = "flex";
}
// function showcurrentanswer(questionNumber) { // work for answer button function
//       const answerElement = document.querySelector(`.oneans-${questionNumber}`);
//       answerElement.style.display = 'block';
//       setTimeout(() => {
//         answerElement.style.display = 'none';
//       }, 1000);
//     }

function showResults(currentData) {
  const answerContainers = quizContainer.querySelectorAll(".answers");

  let score = 0;
  let Nscore = 0;

  currentData.forEach((questionData, questionIndex) => {
    const answerContainer = answerContainers[questionIndex];
    const options = answerContainer.querySelectorAll("input[type=radio]");
    let answeredCorrectly = false;

    options.forEach((option) => {
      const optionValue = option.value;
      const isCorrect = optionValue === questionData.correct;

      if (option.checked) {
        if (isCorrect) {
          score++;
          answeredCorrectly = true;
          option.parentNode.style.backgroundColor = "rgb(144, 238, 144)"; //true
          option.parentNode.style.padding = "4px 0";
          option.parentNode.style.color = "black";
        } else if (answeredCorrectly === false) {
          option.parentNode.style.backgroundColor = "rgb(248, 131, 121)"; //false
          option.parentNode.style.padding = "4px 0";
          Nscore++;
        }
      } else if (isCorrect) {
        option.parentNode.style.backgroundColor = "rgb(144, 238, 144)"; //true
        option.parentNode.style.padding = "4px 0";
        option.parentNode.style.color = "black";
      }
    });
  });

  var percentage = (score / currentData.length) * 100;
  var Nscorepercentage = (Nscore / currentData.length) * 100;
  var skippedquestions = currentData.length - (score + Nscore);
  scoreContainer.innerHTML = `<div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;You scored ${score} out of ${
    currentData.length
  }.<br> <p style = "background-color: #e7b4cd; margin-left: 65px; border-radius: 10px; padding: 4px; width: fit-content;">Skipped Questions:&nbsp;${skippedquestions}</p></div>
<p style = "margin-left: 95px; margin-bottom: -33px;">&#x2713;</p>
<div class="progress-container">
<div class="progress-bar"><p id="scoreshow" style = "display: none; width: fit-content;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${Math.floor(
    percentage
  )}%</p></div></div>
<div class="Nprogress-container">
  <div class="Nprogress-bar"><p id="Nscoreshow" style = "display: none; width: fit-content;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${Math.floor(
    Nscorepercentage
  )}%</p></div>
  </div> 
  <p style = "margin-left: 95px; margin-top: -31px;">&#x2717;</p>
  </div>`;

  submitButton.style.display = "none";
  back_to_home.style.display = "block";
  document.getElementById("score").style.display = "block";
  // update progress bar
  const progressBar = document.querySelector(".progress-bar");
  const NprogressBar = document.querySelector(".Nprogress-bar");
  for (let i = 1; i <= percentage; i++) {
    setTimeout(() => (progressBar.style.width = i + "%"), 1500);
    setTimeout(
      () => (document.getElementById("scoreshow").style.display = "block"),
      1500
    );
  }
  for (let i = 1; i <= Nscorepercentage; i++) {
    setTimeout(() => (NprogressBar.style.width = i + "%"), 1500);
    setTimeout(
      () => (document.getElementById("Nscoreshow").style.display = "block"),
      1500
    );
  }
  if (score === 0) {
    document.getElementById("scoreshow").style.display = "block";
    scoreContainer.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unattempted OR Not-Prepared OR <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you want to see Answer only...!`;
  }
}

submitButton.addEventListener("click", () => {
  showResults(currentData);
  window.scrollTo(0, document.body.scrollHeight);
});
back_to_home.addEventListener("click", () => {
  location.reload();
});
function toBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
