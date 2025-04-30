// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("eventSearch");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const eventCards = document.querySelectorAll(".service-card");
  
    // Search by keyword
    if (searchInput) {
      searchInput.addEventListener("keyup", () => {
        const keyword = searchInput.value.toLowerCase();
        eventCards.forEach(card => {
          const text = card.textContent.toLowerCase();
          card.style.display = text.includes(keyword) ? "block" : "none";
        });
      });
    }
  
    // Filter by campus category
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
  
        // Active class styling
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Show/hide cards based on data
        eventCards.forEach(card => {
          const campus = card.querySelector("h3").textContent.trim().toLowerCase();
          if (filter === "all" || campus === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  
    // OPTIONAL: You can attach a modal popup for more event details later
    // const modals = document.querySelectorAll(".event-modal");
    // document.querySelectorAll(".read-more").forEach((btn, index) => {
    //   btn.addEventListener("click", () => {
    //     modals[index].classList.add("show");
    //   });
    // });
  });
  