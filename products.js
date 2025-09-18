var slider_pWfhEQrjIkDO = null;
document.documentElement.style.visibility = "hidden";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJhZG1pbmlzdHJhdG9yIiwidXNlcl9pZCI6IjEiLCJBUElfVElNRSI6MTc1NTY5Nzg3M30.gp9y4hnv5yPfDESMdyWG7Stj_8Ces2iuBNb6Hh_WSLY";

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

function addScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = () => {
    callback(null);
  };
  script.onerror = () => {
    callback(new Error(`Failed to load script: ${src}`));
  };
  document.body.appendChild(script);
}

function updateCategoryList() {
    const url = "https://rafeed.atcsolution.co/api/Product_series/get_series";
    let series=[]
    fetch(url, {
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
          categories:[
            {
              id:"",
              name:"",
            }
          ]
        })
      })
      let categoryList = document.getElementsByClassName("slight-submenu-wrap")[0];
      categoryList.innerHTML=series.map((serie,index) => `
        <li class="prodli li-with-ul">
          <a href="/LED-Indoor-Lighting-pl46987387-p2.html?series_id=${serie.id}" title="${serie.name}">${serie.name}</a> <i class="list-mid-dot"></i>
          <ul class="submenu-default-simple slight-submenu-ul slight-submenu-master-ul">
              ${serie.categories.map((category,index) => `
                <li class="prodli on hasNoUlChild"><a href="/LED-Indoor-Lighting-pl46987387-p2.html?series_id=${serie.id}&cat_id=${category.id}" class="" title="${category.name}">${category.name}</a></li>
              `).join("")}
          </ul>
        </li>
      `).join("")

      // to re-initilize category list
      $(".sitewidget-prodCategory-20191227164552 .submenu-default-simple").slightSubmenu({
        buttonActivateEvents: "click click",
        submenuOpeneTime: 10,
      });
    })
    .catch(error => {
    });
}
function replaceSlides(imageUrls) {
    var $slider = $('#masterslider_pWfhEQrjIkDO');
    $slider.empty();

    imageUrls.forEach(function(url) {
        var slideHtml = `
        <div class="ms-slide easyzoom easyzoom--overlay easyzoom--overlay_absolute is-ready">
          <div class="ms-slide-bgcont" style="height: 100%; opacity: 1;">
            <a href="${url}">
              <img id="${url}" class="viewsImg img-default-bgc showViewer history-point-image" src="${url}" alt="Product Image" style="height: 100%; width: auto; position: absolute; top: 0px; left: 50%; transform: translateX(-50%);">
              <img class="ms-thumb img-default-bgc showViewer history-point-image" src="${url}"/>
            </a>
          </div>
        </div>
      `;
        $slider.append(slideHtml);
    });

    var slider_pWfhEQrjIkDO = new MasterSlider();
    slider_pWfhEQrjIkDO.control('arrows');
    slider_pWfhEQrjIkDO.control('thumblist', {
        autohide: false,
        dir: 'h',
        arrows: true,
        align: 'bottom',
        width: 100,
        height: 100,
        margin: 10,
        space: 7
    });
    slider_pWfhEQrjIkDO.setup('masterslider_pWfhEQrjIkDO', {
        width: 640,
        height: 640,
        space: 5,
        view: 'basic'
    });
    slider_pWfhEQrjIkDO.api.addEventListener('sliderLoad', function() {
        $('#masterslider_pWfhEQrjIkDO .ms-slide').each(function() {
            var $img = $(this).find('img');
            $img.wrap(`<a href="${$img.attr('src')}" class="easyzoom easyzoom--overlay"></a>`);
        });
    });
    $(".sitewidget-prodDetail-20141127140104").addClass("isLoaded");
    $('.placeholder-container, .mobile_3-small').remove();
    $('.easyzoom').easyZoom();
    
}
function updateDescription(title,description) {
    document.getElementsByClassName("pro-this-prodBrief")[0].getElementsByTagName("ul")[0].remove();
    document.getElementsByClassName("keyword_box")[0].remove()
    document.getElementsByClassName("pro-detials-listshow")[0].remove()
    document.getElementsByClassName("sitewidget-relatedProducts")[0].remove()
    document.getElementsByClassName("web-crumbs-title")[0].getElementsByTagName("strong")[0].innerHTML = title
    document.getElementsByClassName("proddetail-description")[0].getElementsByTagName("h1")[0].innerHTML = `<span class="prodDetail-tts"></span> ${title} <span><i class="fa fa-qrcode" aria-hidden="true"></i></span> `
    document.getElementsByClassName("pro-this-prodBrief")[0].innerHTML += description
    document.getElementsByClassName("pro-info-list")[0].getElementsByTagName("li")[0].innerHTML = ` <label style="width: 55px;">Model:</label> <p> 102R </p>`
}

async function packingInfo(product_id) {
    let url = `https://rafeed.atcsolution.co/api/Economic_product/get_family_packaging_information/${product_id}`;
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
        let res = data.data
        console.log(res,"res")
        document.querySelector("#packing_data .inner").innerHTML=` <table align="center" width="868" style="width: 868px;">
            <tbody>
                <tr class="firstRow">
                    <td width="137" valign="middle" style="word-break: break-word; color: rgb(255, 255, 255); background-color: rgb(79, 129, 189); text-align: center;" align="center">
                        <p><span style="font-family: Cambria; font-size: 16px;">Product code</span></p>
                    </td>
                    <td width="232" valign="middle" style="word-break: break-word; color: rgb(255, 255, 255); background-color: rgb(79, 129, 189); text-align: center;" align="center">
                        <p><span style="font-family: Cambria; font-size: 16px;">Packaging unit (pieces/Unit)</span></p>
                    </td>
                    <td width="269" valign="middle" style="word-break: break-word; color: rgb(255, 255, 255); background-color: rgb(79, 129, 189); text-align: center;" align="center">
                        <p style="text-autospace: ideograph-numeric; text-align: center;">
                            <span style="font-family: Cambria; font-size: 16px;">Dimensions&nbsp;</span><span style="font-family: Cambria; font-size: 16px;">(length x width x height)&nbsp;</span>
                        </p>
                    </td>
                    <td width="165" valign="middle" style="word-break: break-word; color: rgb(255, 255, 255); background-color: rgb(79, 129, 189); text-align: center;" align="center">
                        <p><span style="font-family: Cambria; font-size: 16px;">Volume</span></p>
                    </td>
                </tr>
                ${res.map((item)=>(
                    `<tr>
                        <td valign="middle" align="center" rowspan="4" colspan="1" width="NaN"><span style="text-align: center; text-wrap: wrap;">${item.product_code}</span></td>
                        <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">
                            <p style="text-autospace: ideograph-numeric; text-align: center;"><span style="font-family: Cambria; font-size: 16px;">Graphic carton</span></p>
                        </td>
                        <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">${item.packaging_info.color_box_dimension} cm<br /></td>
                        <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN"> -- </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><p>${item.packaging_info.color_box_quantity_per_box}</p></td>
                    </tr>
                    <tr>
                        <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><span style="font-family: Cambria; font-size: 16px; text-align: center; text-wrap: wrap;">Master carton</span></td>
                        <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">${item.packaging_info.outer_box_dimension} cm<br /></td>
                        <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN"> -- </td>
                    </tr>
                    <tr>
                        <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">${item.packaging_info.inner_box_quantity_per_outer_box}</td>
                    </tr>`
                )).join("")}
            </tbody>
        </table>`
    })
    .catch(error => {
    });
}
async function itemDetails(id){
  let url = `https://rafeed.atcsolution.co/api/Economic_product/get_economic_product_collection_by_id/${id}`;
 
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
    let res=data.data
  
    document.getElementById("general_tab").innerHTML=`<div>
        <span class="label">Luminaire Number : </span>
        <span class="value">${res.product_number}</span>
    </div>
    <div>
        ${res.description}
    </div>`;

    

    document.getElementById("technical_tab").innerHTML=`
        <ul class="list-group">
            <li class="list-group-item"><span class="label">Shape : </span>${res.fitting_shape}</li>
            <li class="list-group-item">
                <span class="label">Width : </span>${res.Width}<span><i> mm</i></span>
            </li>
            <li class="list-group-item">
                <span class="label">Height : </span>${res.Height}<span><i> mm</i></span>
            </li>
            <li class="list-group-item"><span class="label">Adjustable : </span>${res.AdjustableType}</li>
            <li class="list-group-item"><span class="label">Weight : </span>${res.Weight}</li>
            <li class="list-group-item">
                <span class="label">Power : </span>${res.Power} W<span><i> </i></span>
            </li>
            <li class="list-group-item">
                <span class="label">CCT : </span>${res.CCT} <span><i>K</i></span>
            </li>
            <li class="list-group-item"><span class="label">CRI : </span>${res.CRI}</li>
            <li class="list-group-item">
                <span class="label">Luminous Flux : </span>${res.flux} lm<span><i> </i></span>
            </li>
            <li class="list-group-item">
                <span class="label">Current : </span>${res.Current}<span><i> mA</i></span>
            </li>
            <li class="list-group-item"><span class="label">IP : </span>${res.IP}</li>
            <li class="list-group-item"><span class="label">Beam Angle : </span>${res.BeamAngleValue}°</li>
            <li class="list-group-item">
                <span class="label">LifeSpan : </span>${res.lifespan}<span><i> Hours</i></span>
            </li>
            <li class="list-group-item" style="padding-bottom: 0px;">
                <dl>
                    <dt style="padding-bottom: 6px; font-size: 0.9rem;">Color</dt>
                    {res.fitting_color.map((distributor)=>(
                        '<dd>
                            <img hight="20" width="20" style="border-radius: 50%; border: 1px solid #b7b6b6; padding-bottom: 0px !important;" src="${distributor.Texture_photo}" />
                            <span> ${distributor.part} - ${distributor.color} - ${distributor.material}</span>
                        </dd>'

                    ))}
                </dl>
            </li>
            <li class="list-group-item" style="padding-bottom: 0px;">
                <dl>
                    <dt style="padding-bottom: 6px; font-size: 0.9rem;">Lighting Distributor</dt>
                    {res.lighting_distributor.map((distributor)=>(
                        '<dd>
                            <img hight="20" width="20" style="border-radius: 50%; border: 1px solid #b7b6b6; padding-bottom: 0px !important;" src="${distributor.Texture_photo}" />
                            <span> ${distributor.kind} - ${distributor.color} - ${distributor.material}</span>
                        </dd>'

                    ))}
                </dl>
            </li>
        </ul>
    `;
    document.getElementById("accessories_tab").innerHTML=``;
    document.getElementById("downloads_tab").innerHTML=`
        <ul>
            <li>
                <p>
                    <img width="20px" height="20px" style="position: relative; top: 2px; margin-right: 5px;" data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png" src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png" class=" lazyloaded">
                    <a href="${res.datasheet_url}" target="_blank">Product Datasheet</a><br>
                </p>
            </li>
        </ul>
    `;
  })
  .catch(error => {
  });
}
function initilizeTabs(product_id,family_name,application_photo,applications,items) {
    document.getElementsByClassName("detial-cont-index")[0].innerHTML = `<div class="detial-cont-divsions detial-cont-prodescription">
            <ul id="tab_titles" class="detial-cont-tabslabel fix">
                <li class="on"><a href="javascript:;"> Product Description</a></li>
                <li><a href="javascript:;" onclick="packingInfo(${product_id})"> Product Package </a></li>
            </ul>
            <div id="tab_content" class="detial-cont-tabscont">
                <input type="hidden" name="delay_static_mobile_above" value="true" /> <input type="hidden" name="settingId" value="pWfhEQrjIkDO" />
                <div class="fix prodDesc">
                    <div class="prodDetail-editor-container">
                        <p><br /></p>
                        <p>
                            <span style="font-size: 24px;">
                                <strong><span style="color: rgb(79, 129, 189);">Data</span></strong>
                            </span>
                        </p>
                        <div class="sliderTable mt10 mb10 sliderTable-index0">
                            <div class="inner">
                                <table align="center" width="874" style="width: 100%;">
                                    <tbody>
                                        <tr class="firstRow">
                                            <td width="155" style="background-color: rgb(79, 129, 189); color: rgb(255, 255, 255); text-align: center;" align="center" valign="middle"><p>Item No.</p></td>
                                            <td width="74" style="background-color: rgb(79, 129, 189); color: rgb(255, 255, 255); text-align: center;" align="center" valign="middle"><p>Power</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" style="background-color: rgb(79, 129, 189); color: rgb(255, 255, 255); text-align: center;" align="center">Voltage</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" style="background-color: rgb(79, 129, 189); color: rgb(255, 255, 255); text-align: center;" align="center">luminous efficieny</td>
                                            <td width="107" style="background-color: rgb(79, 129, 189); color: rgb(255, 255, 255); text-align: center;" align="center" valign="middle"><p>Size</p></td>
                                            <td width="68" style="background-color: rgb(79, 129, 189); color: rgb(255, 255, 255); text-align: center;" align="center" valign="middle"><p>Cut out</p></td>
                                        </tr>
                                        ${items.map((item)=>(
                                            `
                                             <tr>
                                                <td width="155" align="center" valign="middle" style="text-align: center;"><a data-micromodal-trigger="item-modal" onclick="itemDetails(${item.ID})"><p>HYD-102R-4W</p></a></td>
                                                <td width="74" align="center" valign="middle" style="text-align: center;"><p>4W</p></td>
                                                <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                                <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                                <td width="100" align="center" valign="middle" style="text-align: center;"><p>109*35mm</p></td>
                                                <td width="68" align="center" valign="middle" style="text-align: center;"><p>90mm</p></td>
                                            </tr>
                                            `
                                        )).join("")}
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><a data-micromodal-trigger="item-modal"><p>HYD-102R-6W</p></a></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>6W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>120*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>105mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><a data-micromodal-trigger="item-modal"><p>HYD-102R-9W</p></a></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>9W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>146*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>130mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><a data-micromodal-trigger="item-modal"><p>HYD-102R-12W</p></a></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>12W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>173*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>160mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><a data-micromodal-trigger="item-modal"><p>HYD-102R-18W</p></a></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>18W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>225*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>205mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><a data-micromodal-trigger="item-modal"><p>HYD-102R-20W</p></a></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>20W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>237*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>220mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><a data-micromodal-trigger="item-modal"><p>HYD-102R-24W</p></a></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>24W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>300*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>285mm</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <span class="inner-zoom hide"><i class="fa fa-search-plus"></i></span>
                        </div>
                        <p><br /></p>
                        <p>
                            <strong><span style="color: rgb(79, 129, 189); font-size: 24px;">Application</span></strong>
                        </p>
                        <p><br /></p>
                        <ul class="list-paddingleft-2" style="list-style-type: disc;">
                            ${applications.map((application)=>(
                                `<li><p>${application}</p></li>`
                            )).join("")}
                        </ul>
                        ${application_photo ? 
                            `
                                <p><br /></p>
                                <p>
                                    <img
                                        title="${family_name}"
                                        alt="${family_name}"
                                        width="882"
                                        height="176"
                                        border="0"
                                        vspace="0"
                                        hspace="0"
                                        style="width: 882px; height: 176px;"
                                        data-original="${application_photo}"
                                        src="${application_photo}"
                                        class="lazyloaded"
                                    />
                                    &nbsp;&nbsp;&nbsp;
                                </p>
                            `
                            :
                            ""
                        }
                        <p><br /></p>
                        <p>
                            <span style="font-size: 24px; color: rgb(79, 129, 189);"><strong>Installation-Recessed</strong></span>
                        </p>
                        <p>
                            <span style="font-size: 24px; color: rgb(79, 129, 189);">
                                <strong><br /></strong>
                            </span>
                        </p>
                        <p>
                            <img
                                width="884"
                                height="441"
                                alt="Installation"
                                style="width: 884px; height: 441px;"
                                border="0"
                                vspace="0"
                                hspace="0"
                                title="Installation"
                                data-original="//iororwxhmnrilr5q-static.micyjz.com/cloud/jjBpjKorliSRikqopknqjq/anzhuangtu.jpg"
                                src="//iororwxhmnrilr5q-static.micyjz.com/cloud/jjBpjKorliSRikqopknqjq/anzhuangtu.jpg"
                                class="lazyloaded"
                            />
                        </p>
                        <p><br /></p>
                    </div>
                </div>
                <div class="fix prodDesc hide">
                    <div class="prodDetail-editor-container">
                        <p><br /></p>
                        <p>
                            <span style="font-size: 24px;">
                                <strong><span style="color: rgb(79, 129, 189);">Package Data</span></strong>
                            </span>
                        </p>
                        <p><br /></p>
                        <div id="packing_data" class="sliderTable mt10 mb10 sliderTable-index1">
                            <div class="inner">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

    // initilize
    const tabs = document.querySelectorAll('#tab_titles li');
    const contents = document.querySelectorAll('#tab_content .prodDesc');
    tabs.forEach( (tab, index) => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            tabs.forEach(item => item.classList.remove('on'));
            tab.classList.add('on');
            contents.forEach(content => content.classList.add('hide'));
            if (contents[index]) {
                contents[index].classList.remove('hide');
            }
        }
        );
    }
    );
}
function initilizeModal() {
    if (!document.getElementById("item-modal")) {
        const modalHTML = `
            <div class="modal micromodal-slide" id="item-modal" aria-hidden="true">
                <div class="modal__overlay" tabindex="-1" >
                    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                        <header class="modal__header">
                            <h2 id="modal-title">Item Detail</h2>
                            <span class="modal__close" data-micromodal-close/>
                        </header>
                        <main>
                            <div class="sitewidget-proddetail">
                                <div class="sitewidget-bd prodDetail-tab-style prodDetail-tab-style-grey prodd-color-otl prodd-btn-otl-colorful">
                                    <div class="proddetails-detial-wrap">
                                        <div class="detial-wrap-cont">
                                            <div class="">
                                                <div class="detial-cont-divsions detial-cont-prodescription">
                                                    <ul id="tab_title_modal" class="detial-cont-tabslabel fix">
                                                        <li class="on"><a href="javascript:;">General</a></li>
                                                        <li><a href="javascript:;">Technical</a></li>
                                                        <li><a href="javascript:;">Accessories</a></li>
                                                        <li><a href="javascript:;">Downloads</a></li>
                                                    </ul>
                                                    <div id="tab_contents_modal" class="detial-cont-tabscont">
                                                        <div class="fix prodDesc">
                                                            <div id="general_tab" class="prodDetail-editor-container">

                                                            </div>
                                                        </div>
                                                        <div class="fix prodDesc hide">
                                                            <div id="technical_tab" class="prodDetail-editor-container">

                                                            </div>
                                                        </div>
                                                        <div class="fix prodDesc hide">
                                                            <div id="accessories_tab" class="prodDetail-editor-container">

                                                            </div>
                                                        </div>
                                                        <div class="fix prodDesc hide">
                                                            <div id="downloads_tab" class="prodDetail-editor-container">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const tabs = document.querySelectorAll('#tab_title_modal li');
        const contents = document.querySelectorAll('#tab_contents_modal .prodDesc');
        tabs.forEach( (tab, index) => {
            tab.addEventListener('click', (event) => {
                event.preventDefault();
                tabs.forEach(item => item.classList.remove('on'));
                tab.classList.add('on');
                contents.forEach(content => content.classList.add('hide'));
                if (contents[index]) {
                    contents[index].classList.remove('hide');
                }
            });
        });
    }
}
async function initializePageContent() {
    const params = new URLSearchParams(window.location.search);
    let family_id = params.get("family_id")
    const urls = [
        `https://rafeed.atcsolution.co/api/Economic_product/get_product_families/62`,
        `https://rafeed.atcsolution.co/api/Economic_product/get_economic_product_collections/62`
    ];
    // 
    const responses = await Promise.all(
      urls.map(url =>
        fetch(url, {
          method: "GET",
          headers: {
            "authorization": `${token}`,
            "Content-Type": "application/json",
          },
        }).then(res => res.json())
      )
    );
    let familyDetails=responses[0].data.families[0];
    let items=responses[1].data.collection;
    updateDescription(familyDetails.family_Name,familyDetails.family_description);
    updateCategoryList();
    initilizeTabs(familyDetails.ProductID,familyDetails.family_Name,familyDetails.application_photo,familyDetails.applications,items);
    replaceSlides([familyDetails.family_photo]);
    initilizeModal();
    MicroModal.init();
  
}
function waitForSliderAndInitialize() {
    const maxAttempts = 50;
    let attempts = 0;

    const interval = setInterval(function() {
        if (window.jQuery!=undefined && jQuery.fn.slightSubmenu!=undefined && jQuery.fn.easyZoom!=undefined) {
            clearInterval(interval);
            initializePageContent();
            hideLoader();
        }
        else {
            attempts++;
            if (attempts >= maxAttempts) {
                clearInterval(interval);
                hideLoader();
            }
        }
    }, 2000);
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
        addStylesheet("https://ammarhammamieh.github.io/testy/micromodal.min.css", () => {
            addScript("https://ammarhammamieh.github.io/testy/micromodal.min.js", () => {
                waitForSliderAndInitialize()
            });
        });
    });
});



