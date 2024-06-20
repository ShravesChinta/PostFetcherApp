const PostModule = function () {
    // Private variables and functions
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    async function fetchDataFromAPI() {
        try {
            const response = await axios(apiUrl);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }

    function displayData(posts) {
        const container = document.getElementById("data-container");
        container.innerHTML = "";
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            container.appendChild(postElement);
        });
    }

    function displayError(error) {
        const errorContainer = document.getElementById("error-container");
        errorContainer.textContent = `Error: ${error.message}`;
    }

    // Public API
    return {
        init: async function () {
            try {
                const posts = await fetchDataFromAPI();
                displayData(posts);
            } catch (error) {
                displayError(error);
            }
        }
    };
}();

// Initialize the module
PostModule.init();
