let base_chatBot_url_back="https://support.atcsolution.co";
let base_chatBot_url_front="https://widget.atcsolution.co";
let pagination="";
const itemsPerPage = 20;
let activePage=0;
let paginationbody="";  

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
//  pagination functions
function generatePagination(items, itemsPerPage) {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = [];
  while (items.length) {
      paginatedItems.push(items.splice(0, itemsPerPage));
  }
  return { paginatedItems };
}
function renderButtons(section,className="sitewidget-ft div") {
  const container = document.querySelector(`.${className}`);
  let paginationHTML = '<ul class="pagination pagination-sm flr gbColorpage0" data-mark="wyUMEQCZJhvj">';
  if (section === "last") {
      paginationHTML += `<li style="margin-left: 12px;" aria-current='page'><a href="javascript:void(0)" id="prevPage" rel="nofollow" onclick='prevPage()'> « </a></li>`;
      paginationHTML += `<li style="margin-left: 12px;" aria-current="page"><a href="javascript:void(0)" rel="nofollow" class='page_number'>${activePage}</a></li>`;
      paginationHTML += `<li style="margin-left: 12px;" class="active" aria-current="page"><span>${activePage + 1}</span></li>`;
  } else if (section === "first") {
      paginationHTML += `<li style="margin-left: 12px;" class="active" aria-current="page"><span>1</span></li>`;
      if (pagination.paginatedItems.length > 1) {
          paginationHTML += `<li style="margin-left: 12px;" aria-current="page"><a href="javascript:void(0)" rel="nofollow" class='page_number'>2</a></li>`;
          paginationHTML += `<li style="margin-left: 12px;" aria-current='page'><a href="javascript:void(0)" id="nextPage" rel="nofollow" onclick='nextPage(${JSON.stringify(pagination)})'> » </a></li>`;
      }
  } else if (section === "between") {
      paginationHTML += `<li style="margin-left: 12px;" aria-current='page'><a href="javascript:void(0)" id="prevPage" rel="nofollow" onclick='prevPage()'> « </a></li>`;
      paginationHTML += `<li style="margin-left: 12px;" aria-current="page"><a href="javascript:void(0)" rel="nofollow" class='page_number'>${activePage}</a></li>`;
      paginationHTML += `<li style="margin-left: 12px;" class="active" aria-current="page"><span>${activePage + 1}</span></li>`;
      paginationHTML += `<li style="margin-left: 12px;" aria-current="page"><a href="javascript:void(0)" rel="nofollow" class='page_number'>${activePage + 2}</a></li>`;
      paginationHTML += `<li style="margin-left: 12px;" aria-current='page'><a href="javascript:void(0)" id="nextPage" rel="nofollow" onclick='nextPage(${JSON.stringify(pagination)})'> » </a></li>`;
  }
  paginationHTML += '</ul>';
  container.innerHTML = paginationHTML;
}
function renderPage(index) {
  paginationbody="";
  if(pagination.paginatedItems[index]) {
      for(let i=0;i<pagination.paginatedItems[index].length;i++){
        paginationbody+=` <li pte="false" ipte="false" isp="false" sku="1" pi="1" pad="1" style="margin-left: 0px;">
          <div class="prodlist-box-hover 66 55 audio-container-box" style="background-color: ;">
              <div class="prodlist-display">
                  <div class="prodlist-inner prodlist-inner1">
                      <div class="prodlist-picbox labelfather">
                          <div class="prodlist-cell">
                              <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" title="Ultra thin panel light for indoor">
                                  <img
                                      class="lazy img-default-bgc"
                                      data-original="${pagination.paginatedItems[index].img}"
                                      src="${pagination.paginatedItems[index].img}"
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
                      <div class="prodlist-ops-container" data-pid="${index}"></div>
                      <dl class="prodlist-defined-list"></dl>
                      <dl class="prodlist-defined-list"></dl>
                      <div style="height: 50px; width: 100%;"></div>
                      <div class="prodlist-parameter-btns prodlist-btn-default 1 prodlist-parameter-btns-container" style="margin-top: 10px; max-width: 100%;">
                          <button prodId="${index}" style="text-align: center; text-indent: -40px;" class="default-button prodlist-pro-inquire mt10 button_color gbBgColor0 gbBdColor0">
                              <i class="togetherClass fa fa-envelope-o" aria-hidden="true"></i>Inquire
                          </button>
                          <a
                              style="text-align: center; line-height: 40px;"
                              href="javascript:void(0);"
                              rel="nofollow"
                              prodId="${index}" 
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
      </li>`
      }
      let productList = document.getElementsByClassName("prodlist-fix-style")[0].getElementsByTagName("ul")[0]
      productList.innerHTML=paginationbody
  }
  window.dispatchEvent(new Event('resize'));
}
function nextPage(pagination) {
  activePage+=1;
  renderPage(activePage);
  if(activePage==pagination.paginatedItems.length-1){
      renderButtons("last")
  }else{
      renderButtons("between")
  }
}
function prevPage() {
  activePage-=1;
  renderPage(activePage);
  if(activePage==0){
      renderButtons("first")
  }else{
      renderButtons("between")
  }
}
//  end pagination functions
function filterCategory(product){
  let productList = document.getElementsByClassName("prodlist-fix-style")[0].getElementsByTagName("ul")[0];
  productList.innerHTML=product.map((prod,index) => `
    <li pte="false" ipte="false" isp="false" sku="1" pi="1" pad="1" style="margin-left: 0px;">
      <div class="prodlist-box-hover 66 55 audio-container-box" style="background-color: ;">
          <div class="prodlist-display">
              <div class="prodlist-inner prodlist-inner1">
                  <div class="prodlist-picbox labelfather">
                      <div class="prodlist-cell">
                          <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" title="Ultra thin panel light for indoor">
                              <img
                                  class="lazy img-default-bgc"
                                  data-original="${prod.img}"
                                  src="${prod.img}"
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
                  <div class="prodlist-ops-container" data-pid="${index}"></div>
                  <dl class="prodlist-defined-list"></dl>
                  <dl class="prodlist-defined-list"></dl>
                  <div style="height: 50px; width: 100%;"></div>
                  <div class="prodlist-parameter-btns prodlist-btn-default 1 prodlist-parameter-btns-container" style="margin-top: 10px; max-width: 100%;">
                      <button prodId="${index}" style="text-align: center; text-indent: -40px;" class="default-button prodlist-pro-inquire mt10 button_color gbBgColor0 gbBdColor0">
                          <i class="togetherClass fa fa-envelope-o" aria-hidden="true"></i>Inquire
                      </button>
                      <a
                          style="text-align: center; line-height: 40px;"
                          href="javascript:void(0);"
                          rel="nofollow"
                          prodId="${index}" 
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
function updateCategoryList() {
  let series = [
    {
      name:"Premium",
      categories:["Hospitality","fashion & Rentail","Industrial"]
    },
    {
      name:"E-Series",
      categories:["Spotlight","Tube Light","Down Light"]
    },
    {
      name:"Electric",
      categories:["Power Extension Sockets","Plug","Wiring Device"]
    }
  ]
  let categoryList = document.getElementsByClassName("slight-submenu-wrap")[0];

  let product=[
    {
      img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
      title: "Flicker free and Three year warranty, GU5.3 lamp holder",
      desc: "..."
    },
  ];
  categoryList.innerHTML=series.map((serie,index) => `
    <li class="prodli li-with-ul">
      <a href="/LED-Indoor-Lighting-pl46987387.html" title="${serie.name}">${serie.name}</a> <i class="list-mid-dot"></i>
      <ul class="submenu-default-simple slight-submenu-ul slight-submenu-master-ul">
          ${serie.categories.map((category,index) => `
            <li class="prodli on hasNoUlChild"><a class="" title="${category}" onclick='filterCategory(${JSON.stringify(product)})'>${category}</a></li>
          `).join("")}
      </ul>
    </li>
  `).join("")

  // to re-initilize category list
  $(".sitewidget-prodCategory-20191227164552 .submenu-default-simple").slightSubmenu({
    buttonActivateEvents: "click click",
    submenuOpeneTime: 10
  });
}
async function updateProductListPage() {
    const products = [
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
        {
          img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
          title: "Flicker free and Three year warranty, GU5.3 lamp holder",
          desc: "..."
        },
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
    let productList = document.getElementsByClassName("prodlist-fix-style")[0].getElementsByTagName("ul")[0];
    productList.innerHTML=products.map((product,index) => `
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
                      <div class="prodlist-ops-container" data-pid="${index}"></div>
                      <dl class="prodlist-defined-list"></dl>
                      <dl class="prodlist-defined-list"></dl>
                      <div style="height: 50px; width: 100%;"></div>
                      <div class="prodlist-parameter-btns prodlist-btn-default 1 prodlist-parameter-btns-container" style="margin-top: 10px; max-width: 100%;">
                          <button prodId="${index}" style="text-align: center; text-indent: -40px;" class="default-button prodlist-pro-inquire mt10 button_color gbBgColor0 gbBdColor0">
                              <i class="togetherClass fa fa-envelope-o" aria-hidden="true"></i>Inquire
                          </button>
                          <a
                              style="text-align: center; line-height: 40px;"
                              href="javascript:void(0);"
                              rel="nofollow"
                              prodId="${index}" 
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
    // pagination 
    pagination = generatePagination(products, itemsPerPage);
    renderPage(activePage);
    renderButtons("first")
    // end pagination 
    updateCategoryList()
    // to re-initilize product list grid
     window.dispatchEvent(new Event('resize'));
     pageNumberPaginationListener()
}

function pageNumberPaginationListener() {
  document.addEventListener("click", function(event) {
    const pageNumberElement = event.target.closest('.page_number');
    if (pageNumberElement) {
        let selectedPage = parseInt(pageNumberElement.textContent);
        activePage = selectedPage - 1;
        renderPage(activePage);
        if (activePage === 0) {
            renderButtons("first");
        } else if (activePage === pagination.paginatedItems.length - 1) {
            renderButtons("last");
        } else {
            renderButtons("between");
        }
    }
  });
}
// addStylesheet("https://ammarhammamieh.github.io/testy/style.css", () => {
    updateProductListPage();
// });
  
