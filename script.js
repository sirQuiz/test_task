(function() {
    const hexagonsWrapper = document.querySelector(".js-hexagons"),
          hexagons        = document.querySelectorAll(".js-hexagon");

        const hexaGrid = () => {
            let hexagonsLineWidth  = Math.floor(hexagonsWrapper.offsetWidth / (hexagons[0].offsetWidth * 0.75)),
                hexagonsLine       = 1;
            
            hexagons.forEach((item, index) => {
                item.classList.remove("hexagon--toped");

                if(index + 1 > hexagonsLine * hexagonsLineWidth){
                    hexagonsLine++;
                }

                console.log(hexagonsLine);
                console.log(hexagonsLineWidth);
                console.log(1 % 2);
                console.log(0 % 2);
                console.log(-1 % 2);



                let hexagonsLineNumber = index + 1 - (hexagonsLine - 1) * hexagonsLineWidth;

                if(hexagonsLineNumber % 2 == 0) {
                    item.classList.add("hexagon--toped");
                } 
         
            });
        };
        hexaGrid();        
        
        window.addEventListener('resize', (event) => {
            hexaGrid();
        });
}());