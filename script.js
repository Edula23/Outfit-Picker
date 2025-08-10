
        // Clothing database - manually curated matches
        const clothingDatabase = [
            // Blue Denim Jacket
            {
                id: 1,
                name: "Blue Denim Jacket",
                category: "jackets",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a1eae213-e216-4a28-a528-7edda898e34b.png",
                matches: [2, 3, 7, 10] // matches with white shirt, black pants, etc.
            },
            // White Oxford Shirt
            {
                id: 2,
                name: "White Oxford Shirt",
                category: "shirts",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a3ab85fb-265a-4ed8-bbf3-acf40a422332.png",
                matches: [1, 4, 6, 9] // matches with jackets, sweaters, etc.
            },
            // Black Slim Fit Pants
            {
                id: 3,
                name: "Black Slim Fit Pants",
                category: "pants",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/771f9347-246c-431f-af3c-cb4b58f6a553.png",
                matches: [1, 2, 5, 8] // matches with jackets, shirts, etc.
            },
            // Gray Cashmere Sweater
            {
                id: 4,
                name: "Gray Cashmere Sweater",
                category: "sweaters",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/025c2e4d-225a-4a75-849f-e4a1ee34a5e9.png",
                matches: [2, 3, 6, 10] // matches with shirts, pants, etc.
            },
            // Tan Chinos
            {
                id: 5,
                name: "Tan Chinos",
                category: "pants",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7a886f2-a467-4021-a753-6c78ca76f359.png",
                matches: [2, 4, 7, 9] // matches with shirts, sweaters, etc.
            },
            // Navy Blue Blazer
            {
                id: 6,
                name: "Navy Blue Blazer",
                category: "jackets",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d5a73816-c181-403e-8875-a61bb5300286.png",
                matches: [2, 3, 4, 8] // matches with shirts, pants, etc.
            },
            // Striped Button-Down Shirt
            {
                id: 7,
                name: "Striped Button-Down Shirt",
                category: "shirts",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a26ba465-4cd9-4f99-b273-8762ac27b8f2.png",
                matches: [1, 5, 9, 10] // matches with jackets, pants, etc.
            },
            // Dark Wash Jeans
            {
                id: 8,
                name: "Dark Wash Jeans",
                category: "pants",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c54bcf5e-2041-4d57-a9e3-24dbc9f91fad.png",
                matches: [1, 2, 6, 10] // matches with jackets, shirts, etc.
            },
            // Cream Cable Knit Sweater
            {
                id: 9,
                name: "Cream Cable Knit Sweater",
                category: "sweaters",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b7669e8-c615-4d5d-aa4d-ac6d3ac6ff9a.png",
                matches: [2, 5, 7, 8] // matches with shirts, pants, etc.
            },
            // White T-Shirt
            {
                id: 10,
                name: "White T-Shirt",
                category: "shirts",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4bcb2bf9-5b55-4793-9d30-1f70ced47ff7.png",
                matches: [1, 3, 4, 8] // matches with jackets, pants, etc.
            }
        ];

        // DOM Elements
        const clothingGrid = document.getElementById('clothingGrid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const matchingSection = document.getElementById('matchingSection');
        const matchingItems = document.getElementById('matchingItems');

        // Function to render clothing items
        function renderClothingItems(category = 'all') {
            clothingGrid.innerHTML = '';
            
            const filteredItems = category === 'all' 
                ? clothingDatabase 
                : clothingDatabase.filter(item => item.category === category);
            
            filteredItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'clothing-item';
                itemElement.dataset.id = item.id;
                
                itemElement.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" />
                    <div class="clothing-info">
                        <h3>${item.name}</h3>
                        <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                    </div>
                `;
                
                itemElement.addEventListener('click', () => showMatches(item));
                clothingGrid.appendChild(itemElement);
            });
        }

        // Function to show matching items
        function showMatches(selectedItem) {
            matchingSection.style.display = 'block';
            matchingItems.innerHTML = '';
            
            // Find matching items
            const matches = selectedItem.matches.map(matchId => 
                clothingDatabase.find(item => item.id === matchId)
            );
            
            matches.forEach(match => {
                const matchElement = document.createElement('div');
                matchElement.className = 'clothing-item';
                
                matchElement.innerHTML = `
                    <img src="${match.img}" alt="${match.name}" />
                    <div class="clothing-info">
                        <h3>${match.name}</h3>
                        <p>${match.category.charAt(0).toUpperCase() + match.category.slice(1)}</p>
                    </div>
                `;
                
                matchingItems.appendChild(matchElement);
            });
            
            // Scroll to matching section
            matchingSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Event listener for filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderClothingItems(button.dataset.category);
            });
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderClothingItems();
        });