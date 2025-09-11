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
function replaceSlides(imageUrls) {
    if (window.slider_pWfhEQrjIkDO) {
      window.slider_pWfhEQrjIkDO.destroy(true);
    }
  
    var $slider = $('#masterslider_pWfhEQrjIkDO');
    $slider.empty();
  
    imageUrls.forEach(function(url){
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
  
    window.slider_pWfhEQrjIkDO = new MasterSlider();
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
    $('.easyzoom').easyZoom();
}
  
updateCategoryList()
replaceSlides([
    "https://iororwxhmnrilr5q-static.micyjz.com/cloud/lrBpjKorliSRrlkrorqojo/800.jpg",
    "https://iororwxhmnrilr5q-static.micyjz.com/cloud/jmBpjKorliSRikimqqipjo/102S-480-480.jpg",
    "https://iororwxhmnrilr5q-static.micyjz.com/cloud/jlBpjKorliSRikimnqppjq/102R-480-480.jpg"
]);
  
