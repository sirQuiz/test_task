(function() {
    const hexagonsWrapper = document.querySelector(".js-hexagons"),
          hexagons        = document.querySelectorAll(".js-hexagon");

        const hexaGrid = () => {
            hexagons.forEach((item, index) => {
                if(index%2 == 0) {
                    item.classList.add("hexagon--toped");
                }
                console.log(index);
                console.log(item);
            });
        };
        hexaGrid();
        
        
          window.addEventListener('resize', (event) => {
            
        });

}());