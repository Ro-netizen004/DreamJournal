const dreamCard = document.querySelector('.dreams-container');

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString(undefined, options);
}

async function fetchAndRenderDreams() {
  try {
    const response = await fetch("/api");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    renderCards(data);
  } catch (err) {
    console.error("Failed to fetch dreams:", err);
  }
}

function renderCards(data) {
  dreamCard.innerHTML = ""; // Clear previous content

  for (let i = 0; i < data.length; i++) {
    dreamCard.innerHTML += `
      <div class="dream-card">
        <h3>${data[i].title}</h3>
        <div class="date">${formatDate(data[i].date)}</div>
        <div class="location">Location: ${data[i].location || "Unknown"}</div>
        <p>${data[i].description}</p>
        <p class="tags">Tags: ${data[i].tags.join(", ")}</p>
        <p class="submitted-by">Submitted by: ${data[i].submittedBy || "Anonymous"}</p>
      </div>
    `;
  }
}

// Call the async fetch/render function once page loads
fetchAndRenderDreams();