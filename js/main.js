function init() {
    console.log("main.js loaded");

    // Get Card Grid Element    
    let cardGrid = document.querySelector(".card-grid");
    let df = new DocumentFragment();
    
    function createCards() {

        // Create a card for each product within data.results array
        data.results.forEach(product => {
            // Create Card
            let card = document.createElement("li");
            card.classList.add("card");
            
            // Create Card Elements
            card.innerHTML = `
                <div class="card__image">
                    <img src="${product.thumbnail}" alt="${product.title}">
                </div>
            
                <div class="card__content">
                    <div class="card__content-header">
                        <h3 class="card__content-title">${product.title}</h3>
                        <h4 class="card__content-price">$${(product.price)}</h4>
                    </div>
                    <p class="card__content-text">${product.description}</p>
                    <a href="#" class="btn">Buy Now</a>
                </div>
            `
            df.append(card);
        });
    }
    
    createCards();
    console.log(df);
    
    // Append to HTML
    cardGrid.append(df);
}

window.addEventListener("DOMContentLoaded", init);