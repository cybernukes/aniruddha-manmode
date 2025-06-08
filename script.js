// Firebase Configuration - Add this at the top
const firebaseConfig = {
  apiKey: "AIzaSyBXUrbcss5xCGM0DkToW_WSDOgNr6Qv0gs",
  authDomain: "aniruddha-manmode.firebaseapp.com",
  projectId: "aniruddha-manmode",
  storageBucket: "aniruddha-manmode.firebasestorage.app",
  messagingSenderId: "589534316364",
  appId: "1:589534316364:web:ba2a0b63172067bb03f1e9",
  measurementId: "G-6JHL46SB97",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Select the theme toggle icon
var icon = document.getElementById("icon");

// Check if dark theme was previously enabled
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  // Save the user's preference in localStorage
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/sun-icon.png";
  } else {
    icon.src = "img/moon-icon.png";
  }
};

// document.querySelectorAll('a').forEach(link => {
//     link.setAttribute('target', '_blank');
// });

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  // Ensure elements are found
  if (navLinks && hamburger) {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  }
}

// Hide menu when a menu item is clicked
document.querySelectorAll(".nav-links li a").forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    if (navLinks && hamburger) {
      navLinks.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });
});

const fileNameInput = document.getElementById("fileName");
const fileNameImage = document.getElementById("fileImage");
function addcontent() {
  const fileName = fileNameInput.value;
  const image = fileNameImage.value;

  if (fileName == "C++") {
    let newDiv = document.createElement("div");
    newDiv.classList.add("new-div");

    // Adding entire new HTML code inside the div
    newDiv.innerHTML = `
                <div>
                   <a href="${fileName}" target="_blank">
                   <img src="${image}" alt="User Image">
                   </a>
                </div>
            `;

    document.getElementById("content-cpp").appendChild(newDiv);
  } else if (fileName == "Java") {
  } else if (fileName == "Python") {
  } else if (fileName == "Web") {
  }
}

// Add event listener only if the element exists
const someButton = document.getElementById("someButton");
if (someButton) {
  someButton.addEventListener("click", addcontent);
}

// Firebase Content Loader
document.addEventListener("DOMContentLoaded", function () {
  loadBlogContent();
  loadProjectsContent();
});

// Load blog content from Firebase - Improved with loading indicator
async function loadBlogContent() {
  const blogContainer = document.querySelector(".blog-container");

  // Exit if container doesn't exist
  if (!blogContainer) return;

  // Show loading indicator
  blogContainer.innerHTML =
    '<div class="loading"><div class="spinner"></div>Loading...</div>';

  try {
    // Fetch blog posts from Firebase
    const querySnapshot = await db.collection("blogPosts").get();

    // Clear the loading indicator
    blogContainer.innerHTML = "";

    if (querySnapshot.empty) {
      blogContainer.innerHTML = "<p>No learning resources available yet.</p>";
      return;
    }

    // Create and append blog cards
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const blogCard = createBlogCard(post);
      blogContainer.appendChild(blogCard);
    });
  } catch (error) {
    console.error("Error fetching blog posts: ", error);
    blogContainer.innerHTML =
      "<p>Failed to load learning resources. Please try again later.</p>";
  }
}

// Create a blog card element
function createBlogCard(post) {
  const card = document.createElement("div");
  card.className = "blog-card";

  card.innerHTML = `
    <a href="${post.link || "#"}">
      <div class="card-image">
        <img src="${post.imageUrl || "/img/default-blog.png"}" alt="${
    post.title
  }">
      </div>
      <div class="card-content">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
      </div>
    </a>
  `;

  return card;
}

// Load projects content from Firebase - Improved with loading indicator
async function loadProjectsContent() {
  const projectsContainer = document.querySelector(".projects-container");

  // Exit if container doesn't exist
  if (!projectsContainer) return;

  // Show loading indicator
  projectsContainer.innerHTML =
    '<div class="loading"><div class="spinner"></div>Loading...</div>';

  try {
    // Fetch projects from Firebase
    const querySnapshot = await db.collection("projects").get();

    // Clear the loading indicator
    projectsContainer.innerHTML = "";

    if (querySnapshot.empty) {
      projectsContainer.innerHTML = "<p>No projects available yet.</p>";
      return;
    }

    // Create and append project cards
    querySnapshot.forEach((doc) => {
      const project = doc.data();
      const projectCard = createProjectCard(project);
      projectsContainer.appendChild(projectCard);
    });
  } catch (error) {
    console.error("Error fetching projects: ", error);
    projectsContainer.innerHTML =
      "<p>Failed to load projects. Please try again later.</p>";
  }
}

// Create a project card element
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <a href="${project.link || "#"}">
      <div class="card-image">
        <img src="${project.imageUrl || "/img/project.png"}" alt="${
    project.title
  }">
      </div>
      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    </a>
  `;

  return card;
}

// Add blog post function - For admin use
function addBlogPost(title, description, imageUrl, link) {
  return db
    .collection("blogPosts")
    .add({
      title: title,
      description: description,
      imageUrl: imageUrl,
      link: link,
      createdAt: new Date(),
    })
    .then((docRef) => {
      console.log("Blog post added with ID: ", docRef.id);
      return docRef.id;
    })
    .catch((error) => {
      console.error("Error adding blog post: ", error);
      throw error;
    });
}

// Add project function - For admin use
function addProject(title, description, imageUrl, link) {
  return db
    .collection("projects")
    .add({
      title: title,
      description: description,
      imageUrl: imageUrl,
      link: link,
      createdAt: new Date(),
    })
    .then((docRef) => {
      console.log("Project added with ID: ", docRef.id);
      return docRef.id;
    })
    .catch((error) => {
      console.error("Error adding project: ", error);
      throw error;
    });
}
