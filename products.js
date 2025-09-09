let base_chatBot_url_back="https://support.atcsolution.co";
let base_chatBot_url_front="https://widget.atcsolution.co";

function addStylesheet(href, callback) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => {
      callback();
    };
    link.onerror = () => {
      callback();
    };
    document.head.appendChild(link);
}

function createSection() {
    const products = [
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/jpBpjKorliSRjklqonnljo/800-116D.jpg",
          title: "Energy Saving LED Bulb with 2 Year Warranty",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/ljBpjKorliSRmjkojmjnjq/134.jpg",
          title: "Smart WiFi Bulb - Works with Alexa & Google",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/jmBpjKorliSRikimjpoqjo/227S.jpg",
          title: "Vintage Edison Bulb - Warm Light",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/jnBpjKorliSRjklqmnrkjo/800-122CR.jpg",
          title: "High Power Spotlight with GU10 Holder",
          desc: "..."
        }
    ];
  
    const productGrid = document.createElement('div');
    productGrid.className = 'grid-container';

    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="thumb">
                <img src="${product.img}" alt="Product Image">
            </div>
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>${product.desc}</p>
                <a href="#" class="view-more">View More &gt;</a>
            </div>
        </div>
    `).join("");

    document.body.appendChild(productGrid);
}

addStylesheet(base_chatBot_url_front+'/components/products/css/style.css', () => {
    createSection();
});
  