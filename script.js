document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("Joker");
  const buttonMario = document.getElementById("mario");
  const buttonCloud = document.getElementById("cloud");
  const buttonJoker = document.getElementById("joker");
  const buttonMoi = document.getElementById("moi");
  const header = document.querySelector("header");
  const navbar = document.querySelector(".navbar");
  const navButtons = document.querySelectorAll(".nav-buttons button");
  const main = document.querySelector("main");
  const bubblesContainer = document.getElementById("bubbles-container"); // Changed from bubble to bubblesContainer
  const hamburger = document.querySelector(".hamburger");

  // Function to apply the theme
  function setTheme(
    backgroundColor,
    textColor,
    headerColor,
    imageBackground,
    buttonColor
  ) {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    header.style.backgroundColor = headerColor;
    navbar.style.backgroundColor = headerColor;
    main.style.color = textColor;
    image.style.background = imageBackground;
    navButtons.forEach((btn) => {
      btn.style.background = buttonColor;
      btn.style.color = textColor;
    });
  }

  // Function to set the Joker theme
  function setJokerTheme() {
    setTheme("#191111", "#FFD1D9", "#201314", "#3b1219", "#3b1219");
  }

  // Function to set the Cloud theme
  function setCloudTheme() {
    setTheme("#11131F", "#D6E1FF", "#141726", "#182449", "#182449");
  }

  // Function to set the Mario theme
  function setMarioTheme() {
    setTheme("#0B161A", "#B6ECF7", "#101B20", "#082C36", "#082C36");
  }

  // Function to set the Moi theme
  function setMoiTheme() {
    setTheme("#111111", "#EEEEEE", "#191919", "#222222", "#222222");
  }

  // Function to create info bubble
  function createInfoBubble(title, content, borderColor) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble", "fly-in");
    bubble.style.borderLeftColor = borderColor;
    bubble.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
    return bubble;
  }

  // Function to create gallery bubble
  function createGalleryBubble(images, borderColor) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble", "fly-in", "gallery-bubble");
    bubble.style.borderLeftColor = borderColor;
    let imageIndex = 0;

    const galleryContent = `
      <h2>Galerie</h2>
      <img src="${images[imageIndex]}" alt="Image de la galerie" style="max-width:100%; height:auto;">
      <div class="gallery-controls">
        <button class="prev-image">Précédent</button>
        <button class="next-image">Suivant</button>
      </div>
    `;
    bubble.innerHTML = galleryContent;

    const prevButton = bubble.querySelector(".prev-image");
    const nextButton = bubble.querySelector(".next-image");
    const galleryImage = bubble.querySelector("img");

    prevButton.addEventListener("click", () => {
      imageIndex = imageIndex > 0 ? imageIndex - 1 : images.length - 1;
      galleryImage.src = images[imageIndex];
    });

    nextButton.addEventListener("click", () => {
      imageIndex = imageIndex < images.length - 1 ? imageIndex + 1 : 0;
      galleryImage.src = images[imageIndex];
    });

    return bubble;
  }

  // Function to create social links bubble
  function createSocialLinksBubble(links, borderColor) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble", "fly-in", "social-bubble");
    bubble.style.borderLeftColor = borderColor;

    let linksContent = `<h2>Réseaux Sociaux</h2><ul>`;
    for (const platform in links) {
      linksContent += `<li><a href="${links[platform]}" target="_blank">${platform}</a></li>`;
    }
    linksContent += `</ul>`;

    bubble.innerHTML = linksContent;
    return bubble;
  }

  // Function to set bubbles for Joker
  function setJokerBubbles() {
    bubblesContainer.innerHTML = ""; // Clear existing bubbles

    const infoBubble1 = createInfoBubble(
      "Joker (Persona 5)",
      `<strong>Nom :</strong> Ren Amamiya (alias Joker)<br>
      <strong>Jeu :</strong> Persona 5<br>
      <strong>Plateformes :</strong> PS3, PS4, PC<br>
      <strong>Année de sortie :</strong> 2016<br>
      <strong>Pouvoirs :</strong> Invocation de Personas, furtivité, agilité, charisme.<br>
      <strong>Description :</strong> Leader des Voleurs Fantômes, Joker est capable de manier plusieurs Personas, ce qui lui confère une grande polyvalence au combat. Il est reconnu pour son intelligence, sa discrétion et sa capacité à rallier ses alliés.`,
      "#FFD1D9"
    );

    const galleryImages = [
      "https://i.pinimg.com/736x/9f/1c/34/9f1c345f24bbb6e1c33bdb6ca2ede122.jpg",
      "https://pbs.twimg.com/media/EUeEBuTXkAExapN.jpg",
      "https://www.candb.com/site/candb/images/artwork/Joker_Persona-5_Atlus_1920.jpg",
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/05/Joker.2.jpg",
    ];
    const galleryBubble = createGalleryBubble(galleryImages, "#FFD1D9");

    bubblesContainer.appendChild(infoBubble1);
    bubblesContainer.appendChild(galleryBubble);
  }

  // Function to set bubbles for Cloud
  function setCloudBubbles() {
    bubblesContainer.innerHTML = "";

    const infoBubble1 = createInfoBubble(
      "Cloud Strife (Final Fantasy VII)",
      `<strong>Nom :</strong> Cloud Strife<br>
      <strong>Jeu :</strong> Final Fantasy VII<br>
      <strong>Plateformes :</strong> PS1, PC, PS4, Switch<br>
      <strong>Année de sortie :</strong> 1997<br>
      <strong>Pouvoirs :</strong> Maîtrise de l'épée Broyeuse, Limit Breaks, magie de materia.<br>
      <strong>Description :</strong> Ancien SOLDAT, Cloud est un mercenaire taciturne doté d'une force et d'une agilité exceptionnelles. Il se distingue par son courage, sa loyauté et sa capacité à protéger ses amis face à l'adversité.`,
      "#D6E1FF"
    );

    const galleryImages = [
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/final-fantasy-vii-remake/9/9b/Final-fantasy-vii-remake-image-02_22917472824_o.jpg",
      "https://images4.alphacoders.com/137/thumb-1920-1376435.jpg",
      "https://deadline.com/wp-content/uploads/2023/09/13_FF7REBIRTH_0915_PV_FIX.png?w=681&h=383&crop=1",
      "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/01/cloud-strife-final-fantasy-7-remake.jpg",
      "https://www.pngmart.com/files/13/Cloud-Strife-PNG-Image.png",
    ];
    const galleryBubble = createGalleryBubble(galleryImages, "#D6E1FF");

    bubblesContainer.appendChild(infoBubble1);
    bubblesContainer.appendChild(galleryBubble);
  }

  // Function to set bubbles for Mario
  function setMarioBubbles() {
    bubblesContainer.innerHTML = "";

    const infoBubble1 = createInfoBubble(
      "Mario (Super Mario)",
      `<strong>Nom :</strong> Mario<br>
      <strong>Jeu :</strong> Super Mario Series<br>
      <strong>Plateformes :</strong> NES, SNES, N64, GameCube, Wii, Wii U, Switch<br>
      <strong>Année de sortie :</strong> 1985<br>
      <strong>Pouvoirs :</strong> Sauts surhumains, transformation (Super Champignon, Fleur de Feu, etc.), conduite de karts.<br>
      <strong>Description :</strong> Plombier emblématique du Royaume Champignon, Mario est connu pour sa bravoure, sa gentillesse et sa détermination à sauver la princesse Peach et à vaincre Bowser.`,
      "#B6ECF7"
    );

    const galleryImages = [
      "https://amiibodoctor.com/wp-content/uploads/2020/10/2020071216534400-0e7df678130f4f0fa2c88ae72b47afdf.jpg",
      "https://www.pngmart.com/files/13/Mario-PNG-File.png",
      "https://live.staticflickr.com/2595/3910990859_1907478c90_b.jpg",
      "https://www.smashbros.com/assets_v2/img/fighter/mario/main2.png",
    ];
    const galleryBubble = createGalleryBubble(galleryImages, "#B6ECF7");

    bubblesContainer.appendChild(infoBubble1);
    bubblesContainer.appendChild(galleryBubble);
  }

  // Function to set bubbles for Moi
  function setMoiBubbles() {
    bubblesContainer.innerHTML = "";

    const infoBubble1 = createInfoBubble(
      "Camille Mokoli",
      `<strong>Nom :</strong> Camille Mokoli<br>
      <strong>Jeu :</strong> Réalité<br>
      <strong>Pouvoirs :</strong> Créativité, passion pour le développement web, expertise en design et en programmation.<br>
      <strong>Description :</strong> Développeur web et designer passionné, Camille Mokoli est reconnu pour sa capacité à créer des expériences utilisateur uniques et engageantes. Il allie créativité et technique pour donner vie à ses projets.`,
      "#EEEEEE"
    );

    const logos = [
      "./images/IMG-20250426-WA0030.jpeg",
      "./images/IMG-20250521-WA0002.jpg",
      // Add more logos as needed
    ];
    const galleryBubble = createGalleryBubble(logos, "#EEEEEE");

    const socialLinks = {
      YouTube: "YOUR_YOUTUBE_LINK",
      GitHub: "https://github.com/CoffeePuma55644",
    };
    const socialBubble = createSocialLinksBubble(socialLinks, "#EEEEEE");

    bubblesContainer.appendChild(infoBubble1);
    bubblesContainer.appendChild(galleryBubble);
    bubblesContainer.appendChild(socialBubble);
  }

  // General fade transition function
  function fadeTransition(callback) {
    document.body.classList.add("fading");
    setTimeout(() => {
      callback();
      document.body.classList.remove("fading");
      // Re-trigger fly-in animation after content change
      setTimeout(() => {
        document.querySelectorAll(".bubble").forEach((el, i) => {
          el.classList.add("fly-in");
          setTimeout(() => el.classList.remove("fly-in"), i * 120);
        });
      }, 10); // Small delay to ensure the elements are in the DOM
    }, 400);
  }

  // Event listeners for buttons
  buttonCloud.addEventListener("click", function () {
    fadeTransition(() => {
      image.src =
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/final-fantasy-vii-remake/9/9b/Final-fantasy-vii-remake-image-02_22917472824_o.jpg";
      image.alt = "Cloud";
      setCloudTheme();
      setCloudBubbles();
    });
  });

  buttonJoker.addEventListener("click", function () {
    fadeTransition(() => {
      image.src =
        "https://i.pinimg.com/736x/9f/1c/34/9f1c345f24bbb6e1c33bdb6ca2ede122.jpg";
      image.alt = "Joker";
      setJokerTheme();
      setJokerBubbles();
    });
  });

  buttonMario.addEventListener("click", function () {
    fadeTransition(() => {
      image.src =
        "https://amiibodoctor.com/wp-content/uploads/2020/10/2020071216534400-0e7df678130f4f0fa2c88ae72b47afdf.jpg";
      image.alt = "Mario";
      setMarioTheme();
      setMarioBubbles();
    });
  });

  buttonMoi.addEventListener("click", function () {
    fadeTransition(() => {
      image.src =
        "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-78f8-51f7-9bdd-21c3afd1c9b2/raw?se=2025-05-17T16%3A54%3A50Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=b928fb90-500a-412f-a661-1ece57a7c318&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-17T15%3A42%3A49Z&ske=2025-05-18T15%3A42%3A49Z&sks=b&skv=2024-08-04&sig=kSefcOxHxTI23P7hTjAQoZm9eEr4doVAAK12bKl7C80%3D";
      image.alt = "Moi";
      setMoiTheme();
      setMoiBubbles();
    });
  });

  // Hamburger menu functionality
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    document.querySelector(".nav-buttons").classList.toggle("active");
  });

  // Initial setup
  setJokerTheme();
  setJokerBubbles();
});
