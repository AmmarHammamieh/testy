var slider_pWfhEQrjIkDO = null;

function updateCategoryList() {
    let series = [{
        name: "Premium",
        categories: ["Hospitality", "fashion & Rentail", "Industrial"]
    }, {
        name: "E-Series",
        categories: ["Spotlight", "Tube Light", "Down Light"]
    }, {
        name: "Electric",
        categories: ["Power Extension Sockets", "Plug", "Wiring Device"]
    }]
    let categoryList = document.getElementsByClassName("slight-submenu-wrap")[0];

    let product = [{
        img: "https://iororwxhmnrilr5q-static.micyjz.com/cloud/liBpjKorliSRqknmokikjq/weibiaoti.jpg",
        title: "Flicker free and Three year warranty, GU5.3 lamp holder",
        desc: "..."
    }, ];
    categoryList.innerHTML = series.map( (serie, index) => `
      <li class="prodli li-with-ul">
        <a href="/LED-Indoor-Lighting-pl46987387.html" title="${serie.name}">${serie.name}</a> <i class="list-mid-dot"></i>
        <ul class="submenu-default-simple slight-submenu-ul slight-submenu-master-ul">
            ${serie.categories.map( (category, index) => `
              <li class="prodli on hasNoUlChild"><a class="" title="${category}" onclick='filterCategory(${JSON.stringify(product)})'>${category}</a></li>
            `).join("")}
        </ul>
      </li>
    `).join("")

    // to re-initilize category list
    $(".sitewidget-prodCategory-20230510105934 .submenu-default-simple").slightSubmenu({
        buttonActivateEvents: "click click",
        submenuOpeneTime: 10
    });
}
function replaceSlides(imageUrls) {
    // var $widget = $(".sitewidget-prodDetail-20141127140104");
    // if ($widget.hasClass("isLoaded") || $widget.find('#masterslider_pWfhEQrjIkDO').data('custom-initialized')) {
    //     console.log("Original slider initialization skipped.");
    //     return;
    // }
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
    $('.easyzoom').easyZoom();
    
}
function updateDescription() {
    let title = "test";
    document.getElementsByClassName("proddetail-description")[0].getElementsByTagName("h1")[0].innerHTML = `<span class="prodDetail-tts"></span> ${title} <span><i class="fa fa-qrcode" aria-hidden="true"></i></span> `
    document.getElementsByClassName("pro-this-prodBrief")[0].getElementsByTagName("ul")[0].innerHTML = `<li>aa</li><li>bb</li>`
    document.getElementsByClassName("pro-info-list")[0].getElementsByTagName("li")[0].innerHTML = ` <label style="width: 55px;">Model:</label> <p> 102R </p>`
}
function initilizeTabs() {
    document.getElementsByClassName("detial-cont-index")[0].innerHTML = `<div class="detial-cont-divsions detial-cont-prodescription">
            <ul class="detial-cont-tabslabel fix">
            ammar
                <li class="on"><a href="javascript:;"> Product Description</a></li>
                <li><a href="javascript:;"> Product Package </a></li>
                <li><a href="javascript:;"> Product Datasheet </a></li>
                <li><a href="javascript:;"> Product IES Report </a></li>
            </ul>
            <div class="detial-cont-tabscont">
                <input type="hidden" name="delay_static_mobile_above" value="true" /> <input type="hidden" name="settingId" value="pWfhEQrjIkDO" />
                <div class="fix prodDesc">
                    <div class="prodDetail-editor-container">
                        <p><br /></p>
                        <p>
                            <strong><span style="color: rgb(79, 129, 189); font-size: 24px;">Feature</span></strong>
                        </p>
                        <p><br /></p>
                        <ul class="list-paddingleft-2" style="list-style-type: disc;">
                            <li><p>Thickness &lt;35mm, to adapt to the low ceiling</p></li>
                            <li><p>A variety of power flexible options</p></li>
                            <li><p>Precision integrated aluminum design</p></li>
                        </ul>
                        <p><br /></p>
                        <p>
                            <strong><span style="color: rgb(79, 129, 189); font-size: 24px;">Application</span></strong>
                        </p>
                        <p><br /></p>
                        <ul class="list-paddingleft-2" style="list-style-type: disc;">
                            <li><p>Classroom</p></li>
                            <li><p>supermarket</p></li>
                            <li><p>restroom</p></li>
                            <li><p>Aisle</p></li>
                        </ul>
                        <p><br /></p>
                        <p>
                            <img
                                title="Panel Light"
                                alt="Panel Light"
                                width="882"
                                height="176"
                                border="0"
                                vspace="0"
                                hspace="0"
                                style="width: 882px; height: 176px;"
                                data-original="//iororwxhmnrilr5q-static.micyjz.com/cloud/llBpjKorliSRkkppokqjjq/102R.jpg"
                                src="//iororwxhmnrilr5q-static.micyjz.com/cloud/llBpjKorliSRkkppokqjjq/102R.jpg"
                                class="lazyloaded"
                            />
                            &nbsp;&nbsp;&nbsp;
                        </p>
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
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><p>HYD-102R-4W</p></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>4W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>109*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>90mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><p>HYD-102R-6W</p></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>6W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>120*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>105mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><p>HYD-102R-9W</p></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>9W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>146*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>130mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><p>HYD-102R-12W</p></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>12W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>173*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>160mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><p>HYD-102R-18W</p></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>18W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>225*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>205mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><p>HYD-102R-20W</p></td>
                                            <td width="74" align="center" valign="middle" style="text-align: center;"><p>20W</p></td>
                                            <td colspan="1" rowspan="1" valign="middle" width="180" align="center" style="text-align: center;">110-240V/220-240V</td>
                                            <td colspan="1" rowspan="1" valign="middle" width="164" align="center" style="text-align: center;">90-100 lm/w</td>
                                            <td width="100" align="center" valign="middle" style="text-align: center;"><p>237*35mm</p></td>
                                            <td width="68" align="center" valign="middle" style="text-align: center;"><p>220mm</p></td>
                                        </tr>
                                        <tr>
                                            <td width="155" align="center" valign="middle" style="text-align: center;"><p>HYD-102R-24W</p></td>
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
                        <p style="text-align: center;">
                            <img
                                title="icon"
                                alt="icon"
                                width="882"
                                height="225"
                                border="0"
                                vspace="0"
                                hspace="0"
                                style="width: 882px; height: 225px;"
                                data-original="//iororwxhmnrilr5q-static.micyjz.com/cloud/jrBpjKorliSRikrmopqljq/tubiao.jpg"
                                src="//iororwxhmnrilr5q-static.micyjz.com/cloud/jrBpjKorliSRikrmopqljq/tubiao.jpg"
                                class="lazyloaded"
                            />
                        </p>
                        <p><br /></p>
                        <p style="text-align: justify;">HYUNDAI Lighting products, there is an ultra-thin small panel light.</p>
                        <p style="text-align: justify;">
                            It has won the love of many consumers with its unique design, excellent performance and environmental protection characteristics. The design of the small panel light is mainly embedded, which is not only beautiful, but
                            also easy to install, making it widely used in various places.
                        </p>
                        <p style="text-align: justify;"><br /></p>
                        <p style="text-align: justify;">
                            <strong><span style="color: rgb(79, 129, 189);">1. Advanced LED technology to create excellent lighting effect</span></strong>
                        </p>
                        <p style="text-align: justify;">
                            The ultra-thin small panel light is made of advanced LED technology, and <strong>the LED lamp beads have the advantages of high brightness and low energy consumption</strong>, making the lighting effect more excellent.
                            At the same time, LED lamp beads have a long life and strong stability, and can maintain stable performance during long-term use. This makes small panel lights the most popular lighting equipment in offices, shopping
                            malls, schools and other places.
                        </p>
                        <p style="text-align: justify;">
                            <strong><span style="color: rgb(79, 129, 189);">2. Light body thin design, easy to install and application</span></strong>
                        </p>
                        <p style="text-align: justify;">
                            Another feature of the small panel light is its thin design. Because of this, <strong>it is very easy to install</strong>, can be easily embedded in various occasions of the wall or ceiling, suitable for low ceilings.
                            Its high-brightness lights can illuminate the entire space, providing a comfortable working and learning environment for people. In addition, the small panel light also has excellent energy-saving and environmental
                            protection characteristics, in line with the development trend of green environmental protection in today's society.
                        </p>
                        <p style="text-align: justify;">
                            <strong><span style="color: rgb(79, 129, 189);">3. Meet diverse needs and have a wide range of applications</span></strong>
                        </p>
                        <p style="text-align: justify;">
                            Ultra-thin small panel lights not only have good lighting effects, but also <strong>can meet the lighting needs of different occasions</strong>. Whether it is commercial or home, it can give full play to its advantages
                            and bring the ideal lighting experience to users. In the home environment, small panel lights can improve the comfort and beauty of the living room; In commercial places, it can provide businesses with efficient lighting
                            solutions to help save energy and reduce emissions.
                        </p>
                        <p style="text-align: justify;"><br /></p>
                        <p style="text-align: justify;">
                            In summary, the ultra-thin small panel light with its <strong>advanced technology</strong>, <strong>excellent performance</strong> and <strong>environmental protection</strong> characteristics, whether
                            <strong>in the home</strong> or <strong>commercial field</strong>, it can meet the lighting needs of consumers, for people to create a comfortable, bright, environmentally friendly living and working space. With people's
                            pursuit of green life, the market prospects of small panel lights will be broader.
                        </p>
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
                        <div class="sliderTable mt10 mb10 sliderTable-index1">
                            <div class="inner">
                                <table align="center" width="868" style="width: 868px;">
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
                                        <tr>
                                            <td valign="middle" align="center" rowspan="4" colspan="1" width="NaN"><span style="text-align: center; text-wrap: wrap;">HYD-102R-3W</span></td>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">
                                                <p style="text-autospace: ideograph-numeric; text-align: center;"><span style="font-family: Cambria; font-size: 16px;">Graphic carton</span></p>
                                            </td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">13.5*12*3.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.00057</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><p>50</p></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><span style="font-family: Cambria; font-size: 16px; text-align: center; text-wrap: wrap;">Master carton</span></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">62*19.5*29.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.03567</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">1</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="4" colspan="1" width="NaN"><span style="text-align: center; text-wrap: wrap;">HYD-102R-4W</span></td>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">
                                                <p style="text-autospace: ideograph-numeric; text-align: center;"><span style="font-family: Cambria; font-size: 16px;">Graphic carton</span></p>
                                            </td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">14.5*13.5*4 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.00078</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><p>50</p></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><span style="font-family: Cambria; font-size: 16px; text-align: center; text-wrap: wrap;">Master carton</span></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">69.5*22*31.5 cm</td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.04816<br /></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">1</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="4" colspan="1" width="NaN">HYD-102R-6W</td>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">
                                                <p style="text-autospace: ideograph-numeric; text-align: center;"><span style="font-family: Cambria; font-size: 16px;">Graphic carton</span></p>
                                            </td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">15.5*14.5*4 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.00090<br /></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;">
                                                <p>50<br /></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><span style="font-family: Cambria; font-size: 16px; text-align: center; text-wrap: wrap;">Master carton</span></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">74.5*22*33.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.05491</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">1</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="4" colspan="1" width="NaN">HYD-102R-9W</td>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">
                                                <p style="text-autospace: ideograph-numeric; text-align: center;"><span style="font-family: Cambria; font-size: 16px;">Graphic carton</span></p>
                                            </td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">18*17*4 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.00122<br /></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><p>30</p></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><span style="font-family: Cambria; font-size: 16px; text-align: center; text-wrap: wrap;">Master carton</span></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">53*20*42.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.04505<br /></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">1</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="4" colspan="1" width="NaN">HYD-102R-12W</td>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">
                                                <p style="text-autospace: ideograph-numeric; text-align: center;"><span style="font-family: Cambria; font-size: 16px;">Graphic carton</span></p>
                                            </td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">21*21.5*3.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.00158<br /></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;">
                                                <p>20<br /></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><span style="font-family: Cambria; font-size: 16px; text-align: center; text-wrap: wrap;">Master carton</span></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">45*23*37.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.03881<br /></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">1</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="4" colspan="1" width="NaN">HYD-102R-15W</td>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">
                                                <p style="text-autospace: ideograph-numeric; text-align: center;"><span style="font-family: Cambria; font-size: 16px;">Graphic carton</span></p>
                                            </td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">24*23*4 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.00221</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;">
                                                <p>20<br /></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><span style="font-family: Cambria; font-size: 16px; text-align: center; text-wrap: wrap;">Master carton</span></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">48*26*42.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.05304<br /></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">1</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="4" colspan="1" width="NaN">HYD-102R-18W</td>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">
                                                <p style="text-autospace: ideograph-numeric; text-align: center;"><span style="font-family: Cambria; font-size: 16px;">Graphic carton</span></p>
                                            </td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">27*25*3.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.00236</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;">
                                                <p>20<br /></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><span style="font-family: Cambria; font-size: 16px; text-align: center; text-wrap: wrap;">Master carton</span></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">52*29*37.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.05655<br /></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">1</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="4" colspan="1" width="NaN">HYD-102R-20W</td>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">
                                                <p style="text-autospace: ideograph-numeric; text-align: center;"><span style="font-family: Cambria; font-size: 16px;">Graphic carton</span></p>
                                            </td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">28*26*3.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.00255<br /></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><p>20</p></td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" style="text-align: center;"><span style="font-family: Cambria; font-size: 16px; text-align: center; text-wrap: wrap;">Master carton</span></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">54*30*37.5 cm<br /></td>
                                            <td valign="middle" align="center" rowspan="2" colspan="1" width="NaN">0.06075</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" align="center" rowspan="1" colspan="1" width="232" style="text-align: center;">1</td>
                                        </tr>
                                        <tr>
                                            <td width="137" valign="middle" align="center" style="text-align: center;" rowspan="4" colspan="1">HYD-102R-24W<br /></td>
                                            <td width="232" valign="middle" align="center" style="text-align: center;">
                                                <p style="text-autospace: ideograph-numeric; text-align: center;"><span style="font-family: Cambria; font-size: 16px;">Graphic carton</span></p>
                                            </td>
                                            <td width="269" valign="middle" align="center" style="text-align: center;" rowspan="2" colspan="1">32.5*31.5*4.5 cm<br /></td>
                                            <td width="165" valign="middle" align="center" style="text-align: center;" rowspan="2" colspan="1">0.00461</td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" colspan="1" rowspan="1" align="center" style="text-align: center;">
                                                <p>10<br /></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="middle" colspan="1" rowspan="1" align="center" style="text-align: center;"><span style="font-family: Cambria; font-size: 16px; text-align: center; text-wrap: wrap;">Master carton</span></td>
                                            <td valign="middle" colspan="1" rowspan="2" width="0" align="center" style="text-align: center;">47*33.5*35 cm</td>
                                            <td valign="middle" colspan="1" rowspan="2" width="165" align="center" style="text-align: center;">0.05511<br /></td>
                                        </tr>
                                        <tr>
                                            <td width="232" valign="middle" align="center" style="text-align: center;">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p><br /></p>
                        <p>
                            <span style="font-size: 24px;">
                                <strong><span style="color: rgb(79, 129, 189);">Graphic carton</span></strong>
                            </span>
                        </p>
                        <p>
                            <strong>
                                <span style="color: rgb(79, 129, 189);"><br /></span>
                            </strong>
                        </p>
                        <p>
                            <strong>
                                <span style="color: rgb(79, 129, 189);">
                                    <img
                                        title="Panel Light"
                                        alt="Panel Light"
                                        width="882"
                                        height="487"
                                        border="0"
                                        vspace="0"
                                        hspace="0"
                                        style="width: 882px; height: 487px;"
                                        data-original="//iororwxhmnrilr5q-static.micyjz.com/cloud/llBpjKorliSRkkpppjmmjp/HYUNDAI-M-726-102R-20Wyuanxingchangguichaobocaihe.jpg"
                                        src="//iororwxhmnrilr5q-static.micyjz.com/cloud/llBpjKorliSRkkpppjmmjp/HYUNDAI-M-726-102R-20Wyuanxingchangguichaobocaihe.jpg"
                                        class="lazyimg"
                                    />
                                </span>
                            </strong>
                        </p>
                        <p><br /></p>
                        <p><br /></p>
                        <p>
                            <span style="font-size: 24px;">
                                <strong><span style="color: rgb(79, 129, 189);">Master carton</span></strong>
                            </span>
                        </p>
                        <p><br /></p>
                        <p>
                            <img
                                title="Panel Light"
                                alt="Panel Light"
                                width="882"
                                height="419"
                                border="0"
                                vspace="0"
                                hspace="0"
                                style="width: 882px; height: 419px;"
                                data-original="//iororwxhmnrilr5q-static.micyjz.com/cloud/lkBpjKorliSRkkppokjojq/HYUNDAI-102R-20W-3K4kyuanxingchangguichaobowaixiang.jpg"
                                src="//iororwxhmnrilr5q-static.micyjz.com/cloud/lkBpjKorliSRkkppokjojq/HYUNDAI-102R-20W-3K4kyuanxingchangguichaobowaixiang.jpg"
                                class="lazyimg"
                            />
                        </p>
                        <p><br /></p>
                    </div>
                </div>
                <div class="fix prodDesc hide">
                    <div class="prodDetail-editor-container">
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="text-wrap: wrap; position: relative; top: 2px; margin-right: 5px;"
                                data-original="https://rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="https://rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="https://iororwxhmnrilr5q-static.micyjz.com/Datasheet+HYD-102R-4W+4K-aidlnBpjKorliSRkkkqoponjq.pdf" target="_blank" style="text-wrap: wrap;">Datasheet HYD-102R-4W 4K.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="position: relative; top: 2px; margin-right: 5px;"
                                data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="//iororwxhmnrilr5q-static.micyjz.com/Datasheet+HYD-102R-6W+4K-aidloBpjKorliSRkkkqopqnjq.pdf" target="_blank">Datasheet HYD-102R-6W 4K.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="position: relative; top: 2px; margin-right: 5px;"
                                data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="//iororwxhmnrilr5q-static.micyjz.com/Datasheet+HYD-102R-9W+4K-aidlqBpjKorliSRkkkqoppnjq.pdf" target="_blank">Datasheet HYD-102R-9W 4K.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="position: relative; top: 2px; margin-right: 5px;"
                                data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="//iororwxhmnrilr5q-static.micyjz.com/Datasheet+HYD-102R-12W+4K-aidlpBpjKorliSRkkkqopmnjq.pdf" target="_blank">Datasheet HYD-102R-12W 4K.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="position: relative; top: 2px; margin-right: 5px;"
                                data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="//iororwxhmnrilr5q-static.micyjz.com/Datasheet+HYD-102R-18W+4K-aidlrBpjKorliSRkkkqoprojq.pdf" target="_blank">Datasheet HYD-102R-18W 4K.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="text-wrap: wrap; position: relative; top: 2px; margin-right: 5px;"
                                data-original="https://rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="https://rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="https://iororwxhmnrilr5q-static.micyjz.com/Datasheet+HYD-102R-20W+4K-aidljBpjKorliSRkkkqopjojq.pdf" target="_blank" style="text-wrap: wrap;">Datasheet HYD-102R-20W 4K.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="position: relative; top: 2px; margin-right: 5px;"
                                data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="//iororwxhmnrilr5q-static.micyjz.com/Datasheet+HYD-102R-24W+4K-aidliBpjKorliSRkkkqopiojq.pdf" target="_blank">Datasheet HYD-102R-24W 4K.pdf</a>
                        </p>
                    </div>
                </div>
                <div class="fix prodDesc hide">
                    <div class="prodDetail-editor-container">
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="position: relative; top: 2px; margin-right: 5px;"
                                data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="//iororwxhmnrilr5q-static.micyjz.com/IES+102R-4W+4K+EN+24.01.24-aidlmBpjKorliSRkkkqppjijo.pdf" target="_blank">IES 102R-4W 4K EN 24.01.24.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="position: relative; top: 2px; margin-right: 5px;"
                                data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="//iororwxhmnrilr5q-static.micyjz.com/IES+102R-6W+4K+EN+24.01.24-aidlrBpjKorliSRkkkqppkijq.pdf" target="_blank">IES 102R-6W 4K EN 24.01.24.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="text-wrap: wrap; position: relative; top: 2px; margin-right: 5px;"
                                data-original="https://rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="https://rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="https://iororwxhmnrilr5q-static.micyjz.com/IES+102R-9W+4K+EN+24.01.24-aidliBpjKorliSRkkkqpplijq.pdf" target="_blank" style="text-wrap: wrap;">IES 102R-9W 4K EN 24.01.24.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="text-wrap: wrap; position: relative; top: 2px; margin-right: 5px;"
                                data-original="https://rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="https://rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="https://iororwxhmnrilr5q-static.micyjz.com/IES+102R-12W+4K+EN+24.01.24-aidljBpjKorliSRkkkqppnijq.pdf" target="_blank" style="text-wrap: wrap;">IES 102R-12W 4K EN 24.01.24.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="position: relative; top: 2px; margin-right: 5px;"
                                data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="//iororwxhmnrilr5q-static.micyjz.com/IES+102R-18W+4K+EN+24.01.24-aidlkBpjKorliSRkkkqppoijq.pdf" target="_blank">IES 102R-18W 4K EN 24.01.24.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="position: relative; top: 2px; margin-right: 5px;"
                                data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="//iororwxhmnrilr5q-static.micyjz.com/IES+102R-20W+4K+EN+24.01.24-aidllBpjKorliSRkkkqppqijq.pdf" target="_blank">IES 102R-20W 4K EN 24.01.24.pdf</a>
                        </p>
                        <p>
                            <img
                                width="20px"
                                height="20px"
                                style="position: relative; top: 2px; margin-right: 5px;"
                                data-original="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                src="//rnrorwxhmnrilr5q-static.micyjz.com/static/assets/images/file/ueEditDownload.png"
                                class="lazyimg"
                            />
                            <a href="//iororwxhmnrilr5q-static.micyjz.com/IES+102R-24W+4K+EN+24.01.25-aidlnBpjKorliSRkkkqpppijq.pdf" target="_blank">IES 102R-24W 4K EN 24.01.25.pdf</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>`

    // initilize
    const tabs = document.querySelectorAll('.detial-cont-tabslabel li');
    const contents = document.querySelectorAll('.detial-cont-tabscont .prodDesc');
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
function initializePageContent() {
    $(".sitewidget-prodDetail-20141127140104").addClass("isLoaded");
    $('.placeholder-container, .mobile_3-small').remove();
    updateDescription();
    updateCategoryList();
    initilizeTabs();
    replaceSlides(["https://iororwxhmnrilr5q-static.micyjz.com/cloud/lrBpjKorliSRrlkrorqojo/800.jpg", "https://iororwxhmnrilr5q-static.micyjz.com/cloud/jmBpjKorliSRikimqqipjo/102S-480-480.jpg", "https://iororwxhmnrilr5q-static.micyjz.com/cloud/jlBpjKorliSRikimnqppjq/102R-480-480.jpg"]);
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
    loader.classList.add('hidden');
}
document.addEventListener("DOMContentLoaded", function() {
    const loaderDiv = document.createElement('div');
    loaderDiv.id = 'page-loader';
    const spinnerDiv = document.createElement('div');
    spinnerDiv.classList.add('spinner');
    loaderDiv.appendChild(spinnerDiv);
    document.body.prepend(loaderDiv);
    
    waitForSliderAndInitialize()
});
