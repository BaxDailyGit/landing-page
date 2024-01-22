document.addEventListener("DOMContentLoaded", function () {
    let apiUrl = "https://picsum.photos/v2/list";
    let currentPage = 2;
    let limit = 3;

    async function fetchImages() {
        try {
            const response = await fetch(`${apiUrl}?page=${currentPage}&limit=${limit}`);
            const data = await response.json();

            const apiImgSection = document.querySelector(".projects-api");

            data.forEach(item => {
                const img = document.createElement("img");
                img.src = item.download_url;
                img.alt = "Random Image";
                apiImgSection.appendChild(img);
            });
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }

    async function preloadImages() {
        const response = await fetch(`${apiUrl}?page=${currentPage}&limit=${limit}`);
        const data = await response.json();

        data.forEach(item => {
            const img = new Image();
            img.src = item.download_url;
        });
    }

    preloadImages();

    const showMoreBtn = document.querySelector(".show-more-btn");

    showMoreBtn.addEventListener("click", function () {
        showMoreBtn.textContent = "Loading...";

        currentPage++;

        fetchImages().then(() => {
            showMoreBtn.textContent = "Show more";
        });
    });
});
