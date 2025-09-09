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
  
    // const productGrid = document.createElement('div');
    // productGrid.className = 'grid-container';

    // productGrid.innerHTML = products.map(product => `
    //     <div class="product-card">
    //         <div class="thumb">
    //             <img src="${product.img}" alt="Product Image">
    //         </div>
    //         <div class="product-info">
    //             <h3>${product.title}</h3>
    //             <p>${product.desc}</p>
    //             <a href="#" class="view-more">View More &gt;</a>
    //         </div>
    //     </div>
    // `).join("");

    // document.body.appendChild(productGrid);

    let list = document.getElementsByClassName("prodlist-fix-style")[0].getElementsByTagName("ul")[0];
    list.innerHTML=products.map(product => `
          <li pte="false" ipte="false" isp="false" sku="1" pi="1" pad="1" style="margin-left: 0px;">
            <div class="prodlist-box-hover 66 55 audio-container-box" style="background-color: ;">
                <div class="prodlist-display">
                    <div class="prodlist-inner prodlist-inner1">
                        <div class="prodlist-picbox labelfather">
                            <div class="prodlist-cell">
                                <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" title="Ultra thin panel light for indoor">
                                    <img
                                        class="lazy img-default-bgc"
                                        data-original="${product.img}"
                                        src="${product.img}"
                                        alt="Ultra thin panel light for indoor"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prodlist-special"></div>
                <div class="prodlist-parameter-wrap">
                    <div class="prodlist-parameter-inner">
                        <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" class="prodlist-pro-name" title="Ultra thin panel light for indoor" style="height: 40px;">
                            <div class="inlineLabel fll"></div>
                            Ultra thin panel light for indoor
                        </a>
                        <div class="style_line_9"></div>
                        <div class="prodlist-ops-container" data-pid="nkKgBMGWmlbh"></div>
                        <dl class="prodlist-defined-list"></dl>
                        <dl class="prodlist-defined-list"></dl>
                        <div style="height: 50px; width: 100%;"></div>
                        <div class="prodlist-parameter-btns prodlist-btn-default 1 prodlist-parameter-btns-container" style="margin-top: 10px; max-width: 100%;">
                            <button prodid="nkKgBMGWmlbh" style="text-align: center; text-indent: -40px;" class="default-button prodlist-pro-inquire mt10 button_color gbBgColor0 gbBdColor0">
                                <i class="togetherClass fa fa-envelope-o" aria-hidden="true"></i>Inquire
                            </button>
                            <a
                                style="text-align: center; line-height: 40px;"
                                href="javascript:void(0);"
                                rel="nofollow"
                                prodid="nkKgBMGWmlbh"
                                prodname="Ultra thin panel light for indoor"
                                prodphotourl="//iororwxhmnrilr5q-static.micyjz.com/cloud/jlBpjKorliSRikimnqppjq/102R-40-40.jpg"
                                class="InquireAndBasket pro-detail-basket proasynclist-add-basket-btn block prodlist-pro-addbasket-btn mt10 button_basket gbBgColor1 gbBdColor0"
                            >
                                <i class="fa fa-shopping-cart" style="color: ;" aria-hidden="true"></i><span style="color: ;" class="hide">Add to Basket</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class=""></div>
            <div class="" style="display: none;">
                <div class="prodlist-parameter-btns prodlist-btn-default 3" style="margin-top: 10px; position: relative; width: 200px;">
                    <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" title="Ultra thin panel light for indoor">More &gt;&gt;</a>
                </div>
            </div>
        </li>
      `).join("");
  

}

addStylesheet("https://ammarhammamieh.github.io/testy/style.css", () => {
    createSection();
});
  
