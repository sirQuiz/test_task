(function() {
    const hexagonsWrapper = document.querySelector(".js-hexagons"),
          hexagons        = document.querySelectorAll(".js-hexagon");

        const hexaGrid = () => {
            let hexagonsLineWidth  = hexagonsWrapper.offsetWidth / (hexagons[0].offsetWidth * 0.75),
                hexagonsLine       = 1,
                hexagonsLineNumber = 0;
            
            hexagons.forEach((item, index) => {
                if(index > hexagonsLine + hexagonsLineWidth){
                    hexagonsLine++;
                }

                hexagonsLineNumber = index+1 - (hexagonsLine - 1) * hexagonsLineWidth;
                
                if(hexagonsLineNumber%2 == 0) {
                    item.classList.add("hexagon--toped");
                }
            });
        };
        hexaGrid();        
        
        window.addEventListener('resize', (event) => {
            hexaGrid();
        });
}());