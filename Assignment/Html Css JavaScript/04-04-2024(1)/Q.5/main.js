// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDEnrGu19aWDR5n1lTX2WB0qfKWW9_RBa4",
    authDomain: "novel-a4d49.firebaseapp.com",
    projectId: "novel-a4d49",
    storageBucket: "novel-a4d49.firebasestorage.app",
    messagingSenderId: "940966974419",
    appId: "1:940966974419:web:fbd477ef3c8fbb9af59526"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const novelRef = db.collection("novels");
  
  const tableBody = document.querySelector("#novelTable tbody");
  const searchInput = document.getElementById("searchInput");
  const yearFilter = document.getElementById("yearFilter");
  const sortPrice = document.getElementById("sortPrice");
  
  // Render novels
  async function renderNovels() {
    let query = novelRef;
  
    // Filtering
    const year = yearFilter.value;
    if (year) query = query.where("release_year", "==", Number(year));
  
    // Sorting
    const sort = sortPrice.value;
    if (sort) query = query.orderBy("price", sort);
  
    // Fetch Data
    const snapshot = await query.get();
    let novels = [];
    snapshot.forEach(doc => novels.push({ id: doc.id, ...doc.data() }));
  
    // Search
    const searchText = searchInput.value.toLowerCase();
    if (searchText) {
      novels = novels.filter(novel =>
        novel.title.toLowerCase().includes(searchText) ||
        novel.author.toLowerCase().includes(searchText)
      );
    }
  
    // Display
    tableBody.innerHTML = "";
    novels.forEach(novel => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${novel.title}</td>
        <td>${novel.author}</td>
        <td>$${novel.price.toFixed(2)}</td>
        <td>${novel.release_year}</td>
        <td>${novel.genre}</td>
      `;
      tableBody.appendChild(tr);
    });
  }
  
  // Event Listeners
  searchInput.addEventListener("input", renderNovels);
  yearFilter.addEventListener("change", renderNovels);
  sortPrice.addEventListener("change", renderNovels);
  
  // Initial Render
  renderNovels();
  