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
export default function updateCategoryList() {
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