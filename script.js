
        // Clothing database - manually curated matches
        const clothingDatabase = [
            // Blue Denim Jacket
            {
                id: 1,
                name: "Blue Denim Jacket",
                category: "jackets",
                img: "Images/Shirts/1.png",
                matches: [2, 3, 7, 10] // matches with white shirt, black pants, etc.
            },
            // White Oxford Shirt
            {
                id: 2,
                name: "White Oxford Shirt",
                category: "shirts",
                img: "Images/Shirts/2.png",
                matches: [1, 4, 6, 9] // matches with jackets, sweaters, etc.
            },
            // Black Slim Fit Pants
            {
                id: 3,
                name: "Black Slim Fit Pants",
                category: "pants",
                img: "Images/Shirts/3.png",
                matches: [1, 2, 5, 8] // matches with jackets, shirts, etc.
            },
            // Gray Cashmere Sweater
            {
                id: 4,
                name: "Gray Cashmere Sweater",
                category: "sweaters",
                img: "Images/Shirts/4.png",
                matches: [2, 3, 6, 10] // matches with shirts, pants, etc.
            },
            // Tan Chinos
            {
                id: 5,
                name: "Tan Chinos",
                category: "pants",
                img: "Images/Shirts/5.png",
                matches: [2, 4, 7, 9] // matches with shirts, sweaters, etc.
            },
            // Navy Blue Blazer
            {
                id: 6,
                name: "Navy Blue Blazer",
                category: "jackets",
                img: "Images/Shirts/6.png",
                matches: [2, 3, 4, 8] // matches with shirts, pants, etc.
            },
            // Striped Button-Down Shirt
            {
                id: 7,
                name: "Striped Button-Down Shirt",
                category: "shirts",
                img: "Images/Shirts/7.png",
                matches: [1, 5, 9, 10] // matches with jackets, pants, etc.
            },
            // Dark Wash Jeans
            {
                id: 8,
                name: "Dark Wash Jeans",
                category: "pants",
                img: "Images/Suri/1.png",
                matches: [1, 2, 6, 10] // matches with jackets, shirts, etc.
            },
            // Cream Cable Knit Sweater
            {
                id: 9,
                name: "Cream Cable Knit Sweater",
                category: "sweaters",
                img: "Images/Suri/2.png",
                matches: [2, 5, 7, 8] // matches with shirts, pants, etc.
            },
            // White T-Shirt
            {
                id: 10,
                name: "White T-Shirt",
                category: "shirts",
                img: "Images/Suri/3.png",
                matches: [1, 3, 4, 8] // matches with jackets, pants, etc.
            },
            {
                id: 11,
                name: "White T-Shirt",
                category: "shirts",
                img: "Images/Suri/4.png",
                matches: [1, 3, 4, 8] // matches with jackets, pants, etc.
            },
            {
                id: 12,
                name: "White T-Shirt",
                category: "shirts",
                img: "Images/Suri/5.png",
                matches: [1, 3, 4, 8] // matches with jackets, pants, etc.
            },
            {
                id: 13,
                name: "White T-Shirt",
                category: "shirts",
                img: "Images/Sweaters/1.png",
                matches: [1, 3, 4, 8] // matches with jackets, pants, etc.
            },
            {
                id: 14,
                name: "White T-Shirt",
                category: "shirts",
                img: "Images/Sweaters/2.png",
                matches: [1, 3, 4, 8] // matches with jackets, pants, etc.
            },
            {
                id: 15,
                name: "White T-Shirt",
                category: "shirts",
                img: "Images/Sweaters/3.png",
                matches: [1, 3, 4, 8] // matches with jackets, pants, etc.
            },
            {
                id: 16,
                name: "White T-Shirt",
                category: "shirts",
                img: "Images/Sweaters/4.png",
                matches: [1, 3, 4, 8] // matches with jackets, pants, etc.
            },
            {
                id: 17,
                name: "White T-Shirt",
                category: "shirts",
                img: "Images/Sweaters/5.png",
                matches: [1, 3, 4, 8] // matches with jackets, pants, etc.
            },
            {
                id: 18,
                name: "White T-Shirt",
                category: "shirts",
                img: "Images/Sweaters/6.png",
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