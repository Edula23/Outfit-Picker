document.addEventListener('DOMContentLoaded', function(){    
   const filterButtons = document.querySelectorAll('.filter-button');
   const clothes = document.querySelectorAll('.cloth');
   // Manual matches: map image src to array of matching image srcs
   const matches = {
       // Link the first pants image to two others as an example
       'images/Suri/1.jpg': ['images/Shirts/1.jpg','images/Shirts/5.jpg'  ],
       'images/Suri/2.jpg': ['images/Sweaters/4.jpg','images/Shirts/4.jpg','images/Sweaters/2.jpg'  ],
       'images/Suri/3.jpg': ['images/Shirts/1.jpg','images/Shirts/2.jpg','images/Shirts/3.jpg','images/Shirts/4.jpg','images/Shirts/5.jpg','images/Shirts/6.jpg','images/Shirts/7.jpg'  ],
       'images/Suri/4.jpg': ['images/Shirts/4.jpg','images/Shirts/6.jpg','images/Sweaters/2.jpg','images/Sweaters/4.jpg'  ],
       'images/Suri/5.jpg': ['images/Shirts/1.jpg','images/Shirts/2.jpg','images/Shirts/4.jpg','images/Shirts/5.jpg','images/Shirts/6.jpg','images/Shirts/7.jpg'  ],
       'images/Shirts/1.jpg': ['images/Suri/1.jpg','images/Suri/3.jpg','images/Suri/5.jpg'],
       'images/Shirts/2.jpg': ['images/Suri/3.jpg','images/Suri/5.jpg']


       // Add more manual matches as needed
   };
// Add click event to the filter buttons
    filterButtons.forEach(button =>{
        button.addEventListener('click', function(){
            filterButtons.forEach(btn=>btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            clothes.forEach(item=>{
                const category = item.getAttribute('data-category');
                if(filterValue === 'all' || filterValue === category){
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            })
        })
    });

    // Add click event to each cloth image for manual matching
    clothes.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                const src = img.getAttribute('src');
                if (matches[src]) {
                    clothes.forEach(cloth => {
                        const clothImg = cloth.querySelector('img');
                        if (clothImg) {
                            if (src === clothImg.getAttribute('src') || matches[src].includes(clothImg.getAttribute('src'))) {
                                cloth.classList.remove('hide');
                            } else {
                                cloth.classList.add('hide');
                            }
                        }
                    });
                }
            });
        }
    });
})
 