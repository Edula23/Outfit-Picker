document.addEventListener('DOMContentLoaded', function(){    
   const filterButtons = document.querySelectorAll('.filter-button');
   const clothes = document.querySelectorAll('.cloth');
   // Manual matches: map image src to array of matching image srcs
   const matches = {
       // Link the first pants image to two others as an example
       'images/Suri/1.png': ['images/Shirts/1.png','images/Shirts/5.png'  ],
       'images/Suri/2.png': ['images/Sweaters/4.png','images/Shirts/4.png','images/Sweaters/2.png'  ],
       'images/Suri/3.png': ['images/Shirts/1.png','images/Shirts/2.png','images/Shirts/3.png','images/Shirts/4.png','images/Shirts/5.png','images/Shirts/6.png','images/Shirts/7.png'  ],
       'images/Suri/4.png': ['images/Shirts/4.png','images/Shirts/6.png','images/Sweaters/2.png','images/Sweaters/4.png'  ],
       'images/Suri/5.png': ['images/Shirts/1.png','images/Shirts/2.png','images/Shirts/4.png','images/Shirts/5.png','images/Shirts/6.png','images/Shirts/7.png'  ],
       'images/Shirts/1.png': ['images/Suri/1.png','images/Suri/3.png','images/Suri/5.png'],
       'images/Shirts/2.png': ['images/Suri/3.png','images/Suri/5.png']


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
 