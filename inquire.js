document.documentElement.style.visibility = "hidden";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJhZG1pbmlzdHJhdG9yIiwidXNlcl9pZCI6IjEiLCJBUElfVElNRSI6MTc2MTA1MDU4OH0.jFy7810Ody5XgF8RyDv0ncWpNHd2wpWFV58AXwroAbs";
const base_url="https://api.atcsolution.co"
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
    document.head.prepend(link);
}

function hideLoader() {
    const loader = document.getElementById('page-loader');
    document.documentElement.style.visibility = "visible";
    loader.classList.add('hidden');
}

async function updateCategoryList() {
    const url = base_url+"/product_development/v1/series";
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
          <a href="/LED-Indoor-Lighting-pl46987387-p2.html?series_id=${serie.id}" title="${serie.name}">${serie.name}</a> <i class="list-mid-dot"></i>
          <ul class="submenu-default-simple slight-submenu-ul slight-submenu-master-ul">
              ${serie.categories.map((category,index) => `
                <li class="prodli hasNoUlChild"><a href="/LED-Indoor-Lighting-pl46987387-p2.html?series_id=${serie.id}&cat_id=${category.id}" class="" title="${category.name}">${category.name}</a></li>
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
function items() {
    let basket = localStorage.getItem("baksetProdArray")? JSON.parse(localStorage.getItem("baksetProdArray")) : []
    let inquireProd = localStorage.getItem("inquireProd") ?  JSON.parse(localStorage.getItem("inquireProd")) : undefined
    document.querySelector(".sitewidget-inquire .sitewidget-bd.fix").insertAdjacentHTML("afterbegin",`
        <div class="new-inquire-table-main" style="width: 100%; overflow-x: auto;">
            <table width="100%" class="sitewidget-inquire-table new-inquire-table">
                <thead>
                    <tr>
                        <th data-key="prodPhotoUrl">Product Picture</th>
                        <input type="hidden" name="prodPhotoUrlShowFlag" value="1" />
                        <th data-key="prodName">Product Name</th>
                        <input type="hidden" name="prodNameShowFlag" value="1" />
                        <th data-key="quantity">Quantity</th>
                        <input type="hidden" name="quantityShowFlag" value="1" />
                        <th class="optipn-title" style="display: none;">Options</th>
                    </tr>
                </thead>
                <tbody>
                ${inquireProd ?
                        `<tr id="62_DkACbIumSHBE" class="pmark">
                            <td height="135" align="center">
                                <a style="display: flex; align-items: center; justify-content: center;" href="/%EC%A0%9C%ED%92%88-2-pd06.html" target="_blank" title="">
                                    <img src="${inquireProd.prodPhotoUrl}" alt="product" width="120" style="max-height: 150px;" />
                                </a>
                            </td>
                            <td><a href="/%EC%A0%9C%ED%92%88-2-pd06.html" title="">${inquireProd.prodName}</a></td>
                            <td><input type="number" inquirynumber="" data-index="0" class="proNum" name="" max="" min="0" value="${inquireProd.quantity}" unique_id="62_DkACbIumSHBE" /></td>
                            <td class="optipn" style="display: none;"><a class="del-btn core" data-index="0" style="cursor: pointer;">Delete</a></td>
                        </tr>`
                    :
                        basket.map((item)=>(
                            `<tr id="62_DkACbIumSHBE" class="pmark">
                                <td height="135" align="center">
                                    <a style="display: flex; align-items: center; justify-content: center;" href="/%EC%A0%9C%ED%92%88-2-pd06.html" target="_blank" title="">
                                        <img src="${item.prodPhotoUrl}" alt="product" width="120" style="max-height: 150px;" />
                                    </a>
                                </td>
                                <td><a href="/%EC%A0%9C%ED%92%88-2-pd06.html" title="">${item.prodName}</a></td>
                                <td><input type="number" inquirynumber="" data-index="0" class="proNum" name="" max="" min="0" value="${item.quantity}" unique_id="62_DkACbIumSHBE" /></td>
                                <td class="optipn" style="display: none;"><a class="del-btn core" data-index="0" style="cursor: pointer;">Delete</a></td>
                            </tr>`
                        )).join("")
                }
                </tbody>
            </table>
        </div>
    `)
}
document.addEventListener("DOMContentLoaded", function() {
    const loaderDiv = document.createElement('div');
    loaderDiv.id = 'page-loader';
    const spinnerDiv = document.createElement('div');
    spinnerDiv.classList.add('spinner');
    loaderDiv.appendChild(spinnerDiv);
    document.body.prepend(loaderDiv);
    addStylesheet(base_chatBot_url_front+"/components/products/css/product.css", () => {
        updateCategoryList();
        items();
        hideLoader();
    });
});
document.addEventListener('click', (e) => {
     if (e.target.id=='basketInquire'){
      e.preventDefault();
      e.stopPropagation();
      localStorage.removeItem("inquireProd")
      window.location.replace(window.location.origin+"/phoenix/admin/prod/inquire")
    }
});
