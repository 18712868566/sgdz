/*wlo:Cflower*/
var dialog;
if (!dialog) dialog = {};
var flagPC = true;
dialog = {
    //关闭  document.location.reload()
    closeDiv: function () {
        $("body").css("position", "relative");
        $("#alertInfo").stop(true, true).animate({
            "top": "-100%",
            "opacity": "0"
        }, "fast", function () {
            $("#maskLayer,#alertInfo").remove().hide();
        });
    },
    //
    maskLayer: function () {
        $("#maskLayer,#alertInfo").remove();
        var maskLayer = "<div id='maskLayer'></div>";
        var alertInfo = "<div id='alertInfo'><span class='close'>关闭</span></div>";
        $("body").append(maskLayer, alertInfo);
        $('.wrap').addClass('row');
        $("#maskLayer").height('100%').show();
    },
    //显示提示信息框
    showInfo: function (alertHtml) {
        dialog.maskLayer();
        // $("body").css({'position':'fixed','width':'100%'});
        var _winH = $(window).height(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┐
        var _scrollTop = $(document).scrollTop(); //　　　　　　　　　　　      ├→
        $("#alertInfo").append(alertHtml).show(); //﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣﹣┘
        var _thisDomWidth = $("#alertInfo").outerWidth();
        var _thisDomHeight = $("#alertInfo").outerHeight();
        var topD = parseInt(_scrollTop + (_winH - _thisDomHeight) / 2);
        var mL = parseInt(_thisDomWidth / 2);
        if (_thisDomHeight >= _winH) {
            topD = _scrollTop;
            if (_scrollTop + _thisDomHeight >= $(document).height()) {
                topD = $(document).height() - _thisDomHeight;
            };
            $("#alertInfo").css("position", "absolute");
        } else {
            topD = (_winH - _thisDomHeight) / 2;
            $("#alertInfo").css("position", "fixed");
        };
        $("#alertInfo").css({
            "margin-left": "-" + mL + "px"
        }).stop(true, true).animate({
            "top": topD + "px",
            "margin-left": "-" + mL + "px",
            "opacity": "1"
        }, "fast");
    },
    //改变窗口大小时改变弹出层的位置
    alertInfoPo: function () {
        var _winHResize = $(window).height();
        var _scrollTopResize = $(document).scrollTop();
        var _thisDomWidthResize = $("#alertInfo").outerWidth();
        var _thisDomHeightResize = $("#alertInfo").outerHeight();
        var topResize = parseInt(_scrollTopResize + (_winHResize - _thisDomHeightResize) / 2);
        if (topResize >= $("body").height() - _thisDomHeightResize) {
            _scrollTopResize = $("body").height() - _thisDomHeightResize;
            topResize = _scrollTopResize - (_winHResize - _thisDomHeightResize) / 2;
        };
        if (_thisDomHeightResize >= _winHResize) {
            topResize = _scrollTopResize;
            if (_scrollTopResize + _thisDomHeightResize >= $(document).height()) {
                topResize = $(document).height() - _thisDomHeightResize;
            };
            $("#alertInfo").css("position", "absolute");
        } else {
            topResize = (_winHResize - _thisDomHeightResize) / 2;
            $("#alertInfo").css("position", "fixed");
        };
        $("html,body").stop(true, true).animate({
            scrollTop: _scrollTopResize
        });
        $("#alertInfo").stop(true, true).animate({
            "top": topResize + "px",
            "margin-left": "-" + (_thisDomWidthResize / 2) + "px"
        })
        $("#maskLayer").height($("body").height());
    },
    //视频弹窗
    alertVideo: function (videoUrl) {
        let sendUrl = videoUrl;

        dialog.showInfo(
            "<div class='pop_warp  popytbVideo'>" +
            "<div class='before '>"
            // +"<embed src='"+videoUrl+"' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' wmode='opaque'>"
            // + "<iframe border='0' marginwidth='0' framespacing='0' marginheight='0' src='https://www.youtube.com/embed/" + sendUrl + "' frameborder='0' noresize='scrolling='no' width='100%' height='100%' vspale='0' id='iframe' name='iframe' allowfullscreen></iframe>" +
            + '<video src="' + sendUrl + '" muted loop autoplay="autoplay" playsinline="" webkit-playsinline="" x5-playsinline="" controls="controls"></video>' +
            "</div>" +
            "</div>")
    },
    //图片弹窗
    alertImages: function (imgUrl) {
        dialog.showInfo(
            "<div class='pop_warp pop_warp_img popVideo' id='custom_scrollbar'>" +
            "<div class='before '>" +
            `<img class="imgcove" src="${imgUrl}" alt="">` +
            "</div>" +
            "</div>")
    },
    // UID登录
    alertUidLogin: function () {
        const uidHtml = `
            <a href="https://grayraven.onelink.me/gj4i/eden" class="btn btn_down_link" target="_blank"> https://grayraven.onelink.me/gj4i/eden </a>
            <a href="https://pgrjpdeeplink.onelink.me/hQpR/6d9356f1" target="_blank" class="btn btn_gogame"></a> `;

        dialog.showInfo(`<div class="pop pop_uid_login">
            <div class="borbox">
                ${uidHtml}
            </div>
        </div>`)
    },
    // 登陆
    alertPopLogin: function () {
        var LoginHtml = `
            <a href="https://grayraven.kr/firn-night/auth.html?authclient=facebook" target="_blank" class="btn btn_fb_login"></a>
        `;

        dialog.showInfo(`<div class="pop pop-global-bg">
            <div class="borbox pop_login">
                <p>로그인 후 이벤트 참여 가능</p>
                ${LoginHtml}
            </div>
        </div>`)
    },
    // 答题
    alertPop_lott: function (msg, option1, option2, option3, id) {
        let _html = `<div class="plan-cen"> 
            <img class="imgcove" src="../images/pop/plan-lott-pic.png" alt="">
            <p>${msg}</p>

            <div class="options plana" data-id="${id}" data-option='a'>${option1}</div>
            <div class="options planb" data-id="${id}" data-option='b'>${option2}</div>
            <div class="options planc" data-id="${id}" data-option='c'>${option3}</div>
        </div>`;

        dialog.showInfo(`<div class="pop pop-global-bg">
            <div class="borbox pop-plan-lott">
                ${_html}
                <a href="javascript:;" class="btn lott-tips-msg">정답 시 전진 1회 GET!</a>
            </div>
        </div>`);
    },
    // 答题正确
    alertPop_lott_victory: function () {
        let _html = `<div class="plan-cen"> 
            <img class="imgcove" src="../images/pop/plan-victory.png" alt="">
        </div>`;

        dialog.showInfo(`<div class="pop pop-global-bg">
            <div class="borbox pop-victory">
                ${_html}
                <a href="javascript:;" class="btn btn_nothing"></a>
            </div>
        </div>`);
    },
    // 答题错误
    alertPop_lott_error: function () {
        let _html = `<div class="plan-cen gray"> 
            <img class="imgcove" src="../images/pop/plan-error.png" alt="">
        </div>`;

        dialog.showInfo(`<div class="pop pop-global-bg ">
            <div class="borbox pop-error">
                ${_html}
                <a href="javascript:;" class="btn btn_nothing"></a>
            </div>
        </div>`);
    },
    // 获得奖励
    alertPop_get_reward: function (img1, img2, txt1, txt2) {
        let _html = `<div class="plan-cen"> 
            <img class="imgcove title-reward" src="../images/pop/title-reward.png" alt="">
            
            <div class="reward-lott">
                <dl class="lottpic-icon">
                    <dt><img class="imgcove lott-pic" src="${img1}" alt=""></dt>
                    <dd>${txt1}</dd>
                </dl>
                <dl class="lottpic-icon">
                    <dt><img class="imgcove lott-pic" src="${img2}" alt=""></dt>
                    <dd>${txt2}</dd>
                </dl>
            </div>
        </div>`;

        dialog.showInfo(`<div class="pop pop-global-bg pop-global-bg2">
            <div class="borbox pop-get-reward">
                ${_html}

                <div class="reward-btns">
                    <a href="javascript:;" class="btn btn_jiaohuan">交换</a>
                    <a href="javascript:;" class="btn btn_bottom">下一个</a>
                </div>
            </div>
        </div>`);
    },
    // 获得奖励2 - 只有一个奖励时
    alertPop_get_reward_one: function (img, txt) {
        let _html = `<div class="plan-cen"> 
            <img class="imgcove title-reward" src="../images/pop/title-reward.png" alt="">
            
            <div class="reward-lott">
                <dl class="lottpic-icon">
                    <dt><img class="imgcove lott-pic" src="${img}" alt=""></dt>
                    <dd>${txt}</dd>
                </dl>
            </div>
        </div>`;

        dialog.showInfo(`<div class="pop pop-global-bg pop-global-bg2">
            <div class="borbox pop-get-reward">
                ${_html}

                <div class="reward-btns">
                    <a href="javascript:;" class="btn btn_jiaohuan">交换</a>
                    <a href="javascript:;" class="btn btn_bottom">下一个</a>
                </div>
            </div>
        </div>`);
    },
    // 活动规则
    alertPop_gz: function () {
        let _html = `<div class="plan-cen"> 
            <div>
                <p class='font-skt'>【活動規則】</p>
                <p>1. 活動期間，軍師可以在「謀略無雙」區域點擊題目答題。若軍師回答正確，該題目對應的獎勵將存入「獎勵背包」內，獎勵禮包碼將在遊戲上市後顯示，屆時軍師可以複製並前往遊戲使用；若軍師回答錯誤，則需要依照提示公開分享頁面，分享成功後方可再次回答該題目。軍師可以點擊「答案查詢」按鈕，前往官方粉絲團查詢關鍵詞來獲取答案。</p>
                 <br />
                <p>2. 活動期間，將按連續3週、每週解鎖4道題目的節奏更新題目，共有12道題目可供軍師作答。4月29日中午12:00解鎖第1、2、3、4題，5月6日中午12:00解鎖第5、6、7、8題，5月13日中午12:00解鎖第9、10、11、12題。</p>
                 <br />
                <p>3. 活動期間，軍師成功答對全部12道題目後，限定稱號獎勵將存入「獎勵背包」內，獎勵禮包碼將在遊戲上市後顯示，屆時軍師可以複製並前往遊戲使用。</p>
                 <br />
                <p>4. 活動結束後，《戰國大戰M》官方將從答對全部12道題目的軍師中，隨機抽選1人獲得「Nintendo Switch（OLED款式）」大獎。中獎結果將另行公佈於《戰國大戰M》官方粉絲團。</p>
                <br />
                <br />
                <p>【活動時間】</p>
                <p>即日起至《戰國大戰M》上市前一日23:59為止（詳細上市日期請留意《戰國大戰M》官方粉絲團）。</p>
                <br />
                <br />
                <p>【抽選獎勵】</p>
                 <br />
                <p>1. 「7-ELEVEN商品卡 1000元」：官方從答對第1、2、3、4題的軍師中隨機抽選3人獲得，5月6日開獎。</p>
                 <br />
                <p>2. 「德國ankale便攜式隨行杯果汁機」：官方從答對第5、6、7、8題的軍師中隨機抽選5人獲得，5月13日開獎。</p>
                 <br />
                <p>3. 「MyCard 1000點」：官方從答對第9、10、11、12題的軍師中隨機抽選3人獲得，5月20日開獎。</p>
                 <br />
                <p>4. 「Nintendo Switch（OLED款式）」：官方從答對全部12道題目的軍師中隨機抽選1人獲得，遊戲上市後擇日開獎。</p>
                 <br />
                <p>所有中獎軍師將在獎勵背包收到中獎憑證，請在官方開獎後及時查看背包。</p>
                 <br />
                <br />
                <br />
                <p>【注意事項】</p>
                <br />
                <p>1. 活動期間，軍師獲得的所有獎勵將存入「獎勵背包」內，獎勵對應的禮包碼序號將在遊戲上市後顯示。</p>
                 <br />
                <p>2. 每個遊戲帳號至多可兌換一次相同題目的禮包碼。</p>
                 <br />
                <p>3. 所有禮包碼有效期截至2022年12月31日23:59，請軍師及時使用。</p>
                 <br />
                <p>4. 禮包碼不得出售或轉換現金。若因軍師個人原因造成禮包碼遺失、過期、無法使用等問題，恕不補發。</p>
                 <br />
                <p>5. 活動結束後，軍師將無法在該頁面提交答案，但在頁面關閉前仍可透過「獎勵背包」查看並使用獎勵。頁面關閉時間將另行通知，還請軍師留意《戰國大戰M》官方粉絲團。</p>
                 <br />
                <p>6. 實體獎項中獎者需在官方公佈結果後7個工作日內（不包括公佈當日）主動私訊《戰國大戰M》官方粉絲團，逾期則視為自動放棄。</p>
                 <br />
                <p>7. 由於部分實體獎項涉及稅務需求，實體獎項中獎者需主動私訊《戰國大戰M》官方粉絲團並提供聯繫資料，中獎者須填冩得獎確認單，提供資料並填寫完畢得獎確認單方可領取獎項。需要自中獎者以私訊方式聯繫《戰國大戰M》官方粉絲團後31個工作日內(不包括聯繫當日)配合完成申請作業，若逾時未完成申請作業或者提供不實與不完整的資料，導致無法確認得獎者身份或獎品無法寄出，視同放棄得獎資格。</p>
                 <br />
                <p>8. 如使用不正當手段參與事前登錄獲取活動獎勵，官方將有權取消該用戶獲取獎勵資格並追究責任。</p>
                 <br />
                <p>9. 活動期間如有任何未盡事宜，主辦單位保留變更或終止本活動之決定權，相關變更內容將不定期公告與官方Facebook粉絲團。本公司保留本活動一切最終解釋權。</p>
                 <br />
            </div>
        </div>`;

        dialog.showInfo(`<div class="pop pop-global-logic">
            <div class="borbox pop-hdgz">
                ${_html}
            </div>
        </div>`);

        $(".pop-hdgz .plan-cen").mCustomScrollbar();
    },
    // 我的背包
    alertPop_mylott: function (data) {
        // let _html = `<div class="plan-cen"> 
        //     <dl class='dl_lists'>
        //         <dd> <b class="cms-lott-icon"></b> <span class="code" id='dum1'>XDF3FXCV</span> </dd>
        //         <i class='copyele'>COPY</i>
        //     </dl>
        // </div>`;

        let _htmlInner = '';
        for (let i = 0; i < data.length; i++) {
            const element = data[i];

            _htmlInner += ` 
            <dl class='dl_lists'>
                <dd> <b class="cms-lott-icon">${data[i].current_serial}</b> <span class="code" id='dum${i + 1}'>${data[i].gift_code}</span> </dd>
                <i class='copyele'>COPY</i>
            </dl>
        `;
        }

        let _html = `<div class="plan-cen">${_htmlInner}</div>`;


        dialog.showInfo(`<div class="pop pop-global-bg pop-global-bg-mylott">
            <div class="borbox pop-plan-mylott">
                ${_html}
                <dl class="tipmsg">
                    <dt>[교환방법]</dt>
                    <dd>① 복사 버튼을 터치해 상기 교환코드를 복사한 후, 게임을 실행하세요.</dd>
                    <dd>② 게임 메인화면 좌측 지휘관 ID를 터치하세요.</dd>
                    <dd>③ 지휘관 화면 우측 하단에 위치한 교환코드 란에 입력하세요.</dd>
                </dl>
                <a href="javascript:;" class="btn btn_plan"></a>
            </div>
        </div>`);

        $(".pop-plan-mylott .plan-cen").mCustomScrollbar();
    },
    // 武田信玄
    alertHeroXinXuan: function () {
        // cv-open
        let _html = `
                <dl class="hero-pic1">
                    <dt> <img class="imgcove" src="images/page4/pop-hero1.png" /> </dt>
                    <dd> <img class="imgcove" src="images/page4/hero-msg1.png" />  <span class="btn btn-cv-play " data-url=""></span> </dd>
                </dl>
            `;

        dialog.showInfo(`<div class="pop pop-global-bg">

            <div class="borbox pop-hero">
                <span class="pop_hero_close"></span>
                ${_html}
            </div>
        </div>`);

        $('.pop-global-bg').siblings('.close').hide();
    },
    // 武田信长
    alertHeroXinChang: function () {
        // cv-open
        let _html = `
                <dl class="hero-pic2">
                    <dt> <img class="imgcove" src="images/page4/pop-hero2.png" /> </dt>
                    <dd> <img class="imgcove" src="images/page4/hero-msg2.png" />  <span class="btn btn-cv-play " data-url=""></span> </dd>
                </dl>
            `;

        dialog.showInfo(`<div class="pop pop-global-bg">

            <div class="borbox pop-hero">
                <span class="pop_hero_close"></span>
                ${_html}
            </div>
        </div>`);

        $('.pop-global-bg').siblings('.close').hide();
    },
    // 武田长政
    alertHeroChangZheng: function () {
        // cv-open
        let _html = `
                <dl class="hero-pic3">
                    <dt> <img class="imgcove" src="images/page4/pop-hero3.png" /> </dt>
                    <dd> <img class="imgcove" src="images/page4/hero-msg3.png" />  <span class="btn btn-cv-play " data-url=""></span> </dd>
                </dl>
            `;

        dialog.showInfo(`<div class="pop pop-global-bg">

            <div class="borbox pop-hero">
                <span class="pop_hero_close"></span>
                ${_html}
            </div>
        </div>`);

        $('.pop-global-bg').siblings('.close').hide();
    },
};


function timestampToTime(timestamp) {
    let date = new Date(timestamp * 1000);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s
};


dialog.alertPop_gz();