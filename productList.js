let pagination="";
const itemsPerPage = 20;
let activePage=0;
let paginationbody="";  
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJhZG1pbmlzdHJhdG9yIiwidXNlcl9pZCI6IjEiLCJBUElfVElNRSI6MTc1ODM0NjM5OX0.XC4jUa2kAdXfWRokGwHO2G6nXh9GaEo1FEI1v1LyLys";

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
      paginationHTML += `<li style="margin-left: 12px;" aria-current='page'><a href="javascript:void(0)" id="previousPage" rel="nofollow" onclick='prevPage()'> « </a></li>`;
      paginationHTML += `<li style="margin-left: 12px;" aria-current="page"><a href="javascript:void(0)" rel="nofollow" class='page_number'>${activePage}</a></li>`;
      paginationHTML += `<li style="margin-left: 12px;" class="active" aria-current="page"><span>${activePage + 1}</span></li>`;
  } else if (section === "first") {
      paginationHTML += `<li style="margin-left: 12px;" class="active" aria-current="page"><span>1</span></li>`;
      if (pagination.paginatedItems.length > 1) {
          paginationHTML += `<li style="margin-left: 12px;" aria-current="page"><a href="javascript:void(0)" rel="nofollow" class='page_number'>2</a></li>`;
          paginationHTML += `<li style="margin-left: 12px;" aria-current='page'><a href="javascript:void(0)" id="nextPage" rel="nofollow" onclick='nextPage()'> » </a></li>`;
      }
  } else if (section === "between") {
      paginationHTML += `<li style="margin-left: 12px;" aria-current='page'><a href="javascript:void(0)" id="previousPage" rel="nofollow" onclick='prevPage()'> « </a></li>`;
      paginationHTML += `<li style="margin-left: 12px;" aria-current="page"><a href="javascript:void(0)" rel="nofollow" class='page_number'>${activePage}</a></li>`;
      paginationHTML += `<li style="margin-left: 12px;" class="active" aria-current="page"><span>${activePage + 1}</span></li>`;
      paginationHTML += `<li style="margin-left: 12px;" aria-current="page"><a href="javascript:void(0)" rel="nofollow" class='page_number'>${activePage + 2}</a></li>`;
      paginationHTML += `<li style="margin-left: 12px;" aria-current='page'><a href="javascript:void(0)" id="nextPage" rel="nofollow" onclick='nextPage()'> » </a></li>`;
  }
  paginationHTML += '</ul>';
  container.innerHTML = paginationHTML;
}
function renderPage(index) {
  paginationbody="";
  let itemsPerPage = pagination.paginatedItems[index]
  if(itemsPerPage) {
      for(let i=0;i<itemsPerPage.length;i++){
        paginationbody+=` <li pte="false" ipte="false" isp="false" sku="1" pi="1" pad="1" style="margin-left: 0px;">
          <div class="prodlist-box-hover 66 55 audio-container-box" style="background-color: ;">
              <div class="prodlist-display">
                  <div class="prodlist-inner prodlist-inner1">
                      <div class="prodlist-picbox labelfather">
                          <div class="prodlist-cell">
                              <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" title="${itemsPerPage[i].Name}">
                                  <img
                                      class="lazy img-default-bgc"
                                      data-original="${itemsPerPage[i].family_photo}"
                                      src="${itemsPerPage[i].family_photo}"
                                      alt="${itemsPerPage[i].Name}"
                                  />
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="prodlist-special"></div>
              <div class="prodlist-parameter-wrap">
                  <div class="prodlist-parameter-inner">
                      <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" class="prodlist-pro-name" title="${itemsPerPage[i].Name}" style="height: 40px;">
                          <div class="inlineLabel fll"></div>
                          ${itemsPerPage[i].Name}
                      </a>
                      <div class="style_line_9"></div>
                      <div class="prodlist-ops-container" data-pid="${itemsPerPage[i].ID}"></div>
                      <dl class="prodlist-defined-list"></dl>
                      <dl class="prodlist-defined-list"></dl>
                      <div style="height: 50px; width: 100%;"></div>
                      <div class="prodlist-parameter-btns prodlist-btn-default 1 prodlist-parameter-btns-container" style="margin-top: 10px; max-width: 100%;">
                          <button prodId="${itemsPerPage[i].ID}" style="text-align: center; text-indent: -40px;" class="default-button prodlist-pro-inquire mt10 button_color gbBgColor0 gbBdColor0">
                              <i class="togetherClass fa fa-envelope-o" aria-hidden="true"></i>Inquire
                          </button>
                          <a
                              style="text-align: center; line-height: 40px;"
                              href="javascript:void(0);"
                              rel="nofollow"
                              prodId="${itemsPerPage[i].ID}" 
                              prodname="${itemsPerPage[i].Name}"
                              prodphotourl="${itemsPerPage[i].family_photo}"
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
                  <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" title="${itemsPerPage[i].Name}">More &gt;&gt;</a>
              </div>
          </div>
      </li>`
      }
      let familtyList = document.getElementsByClassName("prodlist-fix-style")[0].getElementsByTagName("ul")[0]
      if(paginationbody.length==0){
        const PaginationContainer = document.querySelector(`.sitewidget-ft div`);
        PaginationContainer.innerHTML=""
        familtyList.innerHTML=`<p class="ml10"> No products found </p>`
      }else{
        familtyList.innerHTML=paginationbody
      }
  }
  window.dispatchEvent(new Event('resize'));
}
function nextPage() {
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
async function filter(el,series_id,cat_id){
  document.querySelector(".sitewidget-prodlist .sitewidget-hd h2").innerHTML=el.title ?  el.title : "";
  if(document.querySelector(".sitewidget-prodlist .sitewidget-prodlist-description p")){
    document.querySelector(".sitewidget-prodlist .sitewidget-prodlist-description p").remove()
  }
  document.querySelector(".prodlist-wrap").innerHTML+=`<div class="container-spinner-product-list"><div class="spinner-product-list"></div></div>`;
  let url = `https://rafeed.atcsolution.co/api/Economic_product/get_product_families?series_id=${series_id}`;
  if (cat_id) {
    url += `&category_id=${cat_id}`;
  }  
  await fetch(url, {
    method: "GET",
    headers: {
      "authorization": `${token}`,
      "Content-Type": "application/json",
    },
  }).then(response => {
    return response.json();
  })
  .then(data => {
    let families=data.data.families
    let familtyList = document.getElementsByClassName("prodlist-fix-style")[0].getElementsByTagName("ul")[0];
    document.querySelector(".prodlist-fix-style .container-spinner-product-list").remove()
    if(families.length==0){
      const PaginationContainer = document.querySelector(`.sitewidget-ft div`);
      PaginationContainer.innerHTML=""
      familtyList.innerHTML=`<p class="ml10"> No products found </p>`
    }else{
      pagination = generatePagination(families, itemsPerPage);
      renderPage(activePage);
      renderButtons("first")
      pageNumberPaginationListener()
    }
  })
  .catch(error => {
  });
}
async function updateCategoryList() {
  const params = new URLSearchParams(window.location.search);
  let series_id = params.get("series_id")
  let cat_id = params.get("cat_id")
  const url = "https://rafeed.atcsolution.co/api/Product_series/get_series";
  let series=[]
  await fetch(url, {
    method: "GET",
    headers: {
      "authorization": `${token}`,
      "Content-Type": "application/json",
    }
  }).then(response => {
    return response.json();
  })
  .then(data => {
    let res=data.data;
    res.map((info)=>{
      series.push({
        id:info.ID,
        name:info.Name,
        categories:info.categories
      })
    })
    let categoryList = document.getElementsByClassName("slight-submenu-wrap")[0];
    categoryList.innerHTML=series.map((serie,index) => `
      <li class="prodli li-with-ul">
        <a href="javascript:void(0);" title="${serie.name}" onclick='filter(this,${serie.id})'>${serie.name}</a> <i class="list-mid-dot"></i>
        <ul class="submenu-default-simple slight-submenu-ul slight-submenu-master-ul">
            ${serie.categories.map((category,index) => `
              <li class="prodli ${ series_id && cat_id && series_id==serie.id && cat_id==category.id ? "on" : ""} hasNoUlChild"><a href="javascript:void(0);" class="" title="${category.name}" onclick='filter(this,${serie.id},${category.id})'>${category.name}</a></li>
            `).join("")}
        </ul>
      </li>
    `).join("")

    // to re-initilize category list
    $(".sitewidget-prodCategory-20191227164552 .submenu-default-simple").slightSubmenu({
      buttonActivateEvents: "click click",
      submenuOpeneTime: 10,
    });
    $(".sitewidget-prodCategory-20191227164552 .submenu-default-simple ul").hide();
  })
  .catch(error => {
  });
}
async function updatefamiltyListPage() {
  const params = new URLSearchParams(window.location.search);
  let series_id = params.get("series_id")
  let cat_id = params.get("cat_id")
  if(document.querySelector(".sitewidget-prodlist .sitewidget-prodlist-description p")){
    document.querySelector(".sitewidget-prodlist .sitewidget-prodlist-description p").remove()
  }
  let familtyList = document.getElementsByClassName("prodlist-fix-style")[0].getElementsByTagName("ul")[0];
  let url = "https://rafeed.atcsolution.co/api/Economic_product/get_product_families";
  if(series_id || cat_id){
    url =  `https://rafeed.atcsolution.co/api/Economic_product/get_product_families?series_id=${series_id}`;
    if (cat_id) {
      url += `&category_id=${cat_id}`;
    }  
  }
  await fetch(url, {
      method: "GET",
      headers: {
        "authorization": `${token}`,
        "Content-Type": "application/json",
      }
  }).then(response => {
    return response.json();
  })
  .then(data => {
    let res=data.data.families
    if(res.length!=0){
      familtyList.innerHTML=res.map((family,index) => `
        <li pte="false" ipte="false" isp="false" sku="1" pi="1" pad="1" style="margin-left: 0px;">
            <div class="prodlist-box-hover 66 55 audio-container-box" style="background-color: ;">
                <div class="prodlist-display">
                    <div class="prodlist-inner prodlist-inner1">
                        <div class="prodlist-picbox labelfather">
                            <div class="prodlist-cell">
                                <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" title="${family.Name}">
                                    <img
                                        class="lazy img-default-bgc"
                                        data-original="${family.family_photo}"
                                        src="${family.family_photo}"
                                        alt="${family.Name}"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prodlist-special"></div>
                <div class="prodlist-parameter-wrap">
                    <div class="prodlist-parameter-inner">
                        <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" class="prodlist-pro-name" title="${family.Name}" style="height: 40px;">
                            <div class="inlineLabel fll"></div>
                            ${family.Name}
                        </a>
                        <div class="style_line_9"></div>
                        <div class="prodlist-ops-container" data-pid="${family.ID}"></div>
                        <dl class="prodlist-defined-list"></dl>
                        <dl class="prodlist-defined-list"></dl>
                        <div style="height: 50px; width: 100%;"></div>
                        <div class="prodlist-parameter-btns prodlist-btn-default 1 prodlist-parameter-btns-container" style="margin-top: 10px; max-width: 100%;">
                            <button prodId="${family.ID}" style="text-align: center; text-indent: -40px;" class="default-button prodlist-pro-inquire mt10 button_color gbBgColor0 gbBdColor0">
                                <i class="togetherClass fa fa-envelope-o" aria-hidden="true"></i>Inquire
                            </button>
                            <a
                                style="text-align: center; line-height: 40px;"
                                href="javascript:void(0);"
                                rel="nofollow"
                                prodId="${family.ID}" 
                                prodname="${family.Name}"
                                prodphotourl="${family.family_photo}"
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
                    <a href="/Ultra-thin-panel-light-for-indoor-pd733273788.html" target="" title="${family.Name}">More &gt;&gt;</a>
                </div>
            </div>
        </li>
      `).join("");  
      // pagination 
      pagination = generatePagination(res, itemsPerPage);
      renderPage(activePage);
      renderButtons("first")
      // end pagination 
      // to re-initilize product list grid
      window.dispatchEvent(new Event('resize'));
      pageNumberPaginationListener()
    }else{
      const PaginationContainer = document.querySelector(`.sitewidget-ft div`);
      PaginationContainer.innerHTML=""
      familtyList.innerHTML=`<p class="ml10"> No products found </p>`
    }
  })
  .catch(error => {
  });
  await updateCategoryList()
  hideLoader()
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

function hideLoader() {
  const loader = document.getElementById('page-loader');
  document.documentElement.style.visibility = "visible";
  loader.classList.add('hidden');
}
document.addEventListener("DOMContentLoaded", function() {
  const loaderDiv = document.createElement('div');
  loaderDiv.id = 'page-loader';
  const spinnerDiv = document.createElement('div');
  spinnerDiv.classList.add('spinner');
  loaderDiv.appendChild(spinnerDiv);
  document.body.prepend(loaderDiv);
  addStylesheet("https://ammarhammamieh.github.io/testy/product.css", () => {
      updatefamiltyListPage();
  });
});
  
