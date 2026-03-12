<template>
  <div class="main_head __zero">
    <input id="toggle-menu__header-page" type="checkbox" style="display: none;">

    <div class="navbar">
      <div class="limit__game">
        <div class="left-header hidden__PC">
          <div class="icon-name-game dFlex">
            <a href="/" class="icon-game">
              <img src="/assets/images/logo.png" alt="">
            </a>
          </div>
        </div>

        <div class="navbar-content">
          <ul id="menu" class="fsvn_gotham_bold tUpper">
            <li class="hidden__mobile logo_PC">
              <a href="/" class="logo-top">
                <img src="/assets/images/logo.png" alt="" class="">
              </a>
            </li>
            <li class="hidden__PC">
              <a href="/" class="">
                <span class="">Trang chủ</span>
              </a>
            </li>
            <li class="">
              <a target="_blank" href="#" class="">
                <span class="">Group</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="#" class="">
                <span class="">Fanpage</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="#" class="">
                <span class="">Youtube</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="#" class="">
                <span class="">Tiktok</span>
              </a>
            </li>
            <li class="hidden__PC">
              <a target="_blank" href="/game/7" class="">
                <span class="">Nạp game</span>
              </a>
            </li>
            <li class="hidden__PC">
              <a href="javascript:;" onclick="downloadGame()" class="">
                <span class="">Tải game</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="icon-hamburger hidden__PC">
          <label for="toggle-menu__header-page" id="menu__header-page">
            <span class="toggle_icon"></span>

          </label>
        </div>
      </div>
    </div>
  </div>
  <section class="__section front__game __1 pr" style="z-index:3">
    <div class="limit__game">
      <div class="dlCode__ flex jct act m__inline">
        <div class="dlCode__banner">
          <img src="/assets/images/icon.png">
        </div>
        <div class="grBtn__dlGame fNotoSansBold  tUpper flex jct act fCl">
          <a href="https://apps.apple.com/vn/app/id1626785478" target="_blank"
            class="btnDlGame__ btnAPP__ flex  jct  btn-tranY">
            <div class="tSm__ tup fsvn_helves">Tải game trên</div>
            <div class="tBig__ ">App Store</div>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.pocketmega.joy" target="_blank"
            class="btnDlGame__ btnGG__ flex  jct  btn-tranY">
            <div class="tSm__ tup fsvn_helves">Tải game trên</div>
            <div class="tBig__ ">Google Play</div>
          </a>
          <a href="/apk" class="btnDlGame__ btn_apk flex jct tUpper c-pointer fCl btn-tranY" target="_blank" id="pc">
            <div class="tSm__ fsvn_helves"> TẢI APK CHO</div>
            <div class="tBig__ ">Giả Lập PC</div>
          </a>
        </div>
        <div class="dlCode__gc flex jct act fCl fNotoSansBold">
          <a href="/game/7"
            class="card__PC flex jct act tCenter tUpper c-pointer btn-tranY tsdPurple" target="_blank">
            Nạp Thẻ
          </a>
          <a href="/teaser" class="card__PC1 flex jct act tCenter tUpper c-pointer btn-tranY"
            target="_blank">
            <span class="linearRed">Nhận Giftcode</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="news__home">
    <div class="limit__game">


      <div class="main-section__news--home section__news--home-home">

        <div class="sl-boxnew pr flex jct m__inline">
          <div class="listSLNH">
            <a target="self" href="/tin-tuc/cac-goi-uu-dai-tan-thu_151">
              <img src="/assets/images/events/uu-dai-tan-thu.png" alt="Slide tin tức">
            </a>
            <a target="self" href="/su-kien/chuoi-su-kien-server-moi_155">
              <img src="/assets/images/events/chuoi-su-kien.png" alt="Slide tin tức">
            </a>
            <a target="self" href="/su-kien/chuoi-su-kien-dua-top_156">
              <img src="/assets/images/events/dua-top.png" alt="Slide tin tức">
            </a>
            <a target="self" href="/su-kien/tong-hop-cac-su-kien-han-gio_162">
              <img src="/assets/images/events/choi-met-nghi.png" alt="Slide tin tức">
            </a>
          </div>
          <div class="boxListNewHome p-r">
            <div class="tab-new  tUpper clearfix fgmv_DIN_Pro_B">
              <div class="tab-link custom-border current" data-tab="tab-all" data-more="view-all"><span>Tất cả</span>
              </div>
              <div class="tab-link custom-border " data-tab="tab-tin-tuc" data-more="view-tin-tuc"><span>Tin tức</span>
              </div>
              <div class="tab-link custom-border " data-tab="tab-su-kien" data-more="view-su-kien"><span>Sự kiện</span>
              </div>
              <div class="tab-link custom-border " data-tab="tab-huong-dan" data-more="view-huong-dan"><span>Hướng
                  dẫn</span></div>
              <div class="tab-link custom-border " data-tab="tab-tinh-nang" data-more="view-tinh-nang"><span>Tính
                  năng</span></div>
            </div>

            <div class="tabCtTTG fgmv_DIN_Pro clearfix">
              <div class="tab-detail current" id="tab-all">
                <a href="/su-kien/quy-doi-thang-3_293" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">06/03/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Quy Đổi Vé Nạp - Ưu Đãi Tháng 3</div>
                  </div>
                </a>
                <a href="/su-kien/tieu-phi-han-gio-thang-3_291" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">05/03/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Chuỗi Sự Kiện] Tiêu Phí Hạn Giờ Tháng 3</div>
                  </div>
                </a>
                <a href="/su-kien/sk-cuoi-tuan_292" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">05/03/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Sự Kiện] Tiêu Phí Cuối Tuần</div>
                  </div>
                </a>
                <a href="/su-kien/su-kien-web-uu-dai-nap-ky-6_290" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">04/03/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Sự Kiện Web] Ưu Đãi Nạp Pocket Mega - Kỳ 6</div>
                  </div>
                </a>
                <a href="/su-kien/sieu-tieu-phi-cuoi-tuan-3_289" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">27/02/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Sự Kiện] Siêu Tiêu Phí Cuối Tuần</div>
                  </div>
                </a>
                <a href="/su-kien/tieu-phi-qua-sieu-cap_288" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">25/02/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Chuỗi Sự Kiện] Tiêu Phí Hạn Giờ - Quà Siêu Cấp</div>
                  </div>
                </a>
                <a href="/su-kien/goi-qua-tro-luc_286" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">24/02/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Gói Quà Trợ Lực - Siêu Ưu Đãi</div>
                  </div>
                </a>
                <a href="/su-kien/quy-doi-loc-xuan_287" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">24/02/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Quy Đổi Vé Nạp - Ưu Đãi Lộc Xuân</div>
                  </div>
                </a>
              </div>
              <div class="tab-detail " id="tab-tin-tuc">
                <a href="/tin-tuc/danh-sach-lien-thong-may-chu-dot-2_272"
                  class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tin tức]</span>
                      <div class="date-open">23/01/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Danh Sách Liên Thông Máy Chủ - Đợt 2</div>
                  </div>
                </a>
                <a href="/tin-tuc/danh-sach-lien-thong-may-chu_225" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tin tức]</span>
                      <div class="date-open">30/10/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Danh Sách Liên Thông Máy Chủ</div>
                  </div>
                </a>
                <a href="/tin-tuc/dac-quyen-vip_152" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tin tức]</span>
                      <div class="date-open">23/10/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Đặc Quyền VIP</div>
                  </div>
                </a>
                <a href="/tin-tuc/phong-van-svip-16-dai-than-s10_196"
                  class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tin tức]</span>
                      <div class="date-open">18/09/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> VINH DANH SVIP 16 - PHỎNG VẤN ĐẠI THẦN S10</div>
                  </div>
                </a>
                <a href="/tin-tuc/phong-van-svip-16-dai-than-s106_194"
                  class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tin tức]</span>
                      <div class="date-open">18/09/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> VINH DANH SVIP 16 - PHỎNG VẤN ĐẠI THẦN S106</div>
                  </div>
                </a>
                <a href="/tin-tuc/phong-van-svip-16-dai-than-s70_191"
                  class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tin tức]</span>
                      <div class="date-open">18/09/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> VINH DANH SVIP 16 ĐẦU TIÊN - PHỎNG VẤN ĐẠI THẦN S70</div>
                  </div>
                </a>
                <a href="/tin-tuc/goc-giai-dap-thong-tin-ve-mua-giai_176"
                  class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tin tức]</span>
                      <div class="date-open">19/08/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Góc Giải Đáp] Thông Tin Về Mùa Giải</div>
                  </div>
                </a>
                <a href="/tin-tuc/giao-dich-lam-giau-khong-kho_166" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tin tức]</span>
                      <div class="date-open">09/08/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [HOT] Tính Năng Giao Dịch - Làm Giàu Không Khó</div>
                  </div>
                </a>
              </div>
              <div class="tab-detail " id="tab-su-kien">
                <a href="/su-kien/quy-doi-thang-3_293" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">06/03/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Quy Đổi Vé Nạp - Ưu Đãi Tháng 3</div>
                  </div>
                </a>
                <a href="/su-kien/tieu-phi-han-gio-thang-3_291" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">05/03/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Chuỗi Sự Kiện] Tiêu Phí Hạn Giờ Tháng 3</div>
                  </div>
                </a>
                <a href="/su-kien/sk-cuoi-tuan_292" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">05/03/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Sự Kiện] Tiêu Phí Cuối Tuần</div>
                  </div>
                </a>
                <a href="/su-kien/su-kien-web-uu-dai-nap-ky-6_290" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">04/03/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Sự Kiện Web] Ưu Đãi Nạp Pocket Mega - Kỳ 6</div>
                  </div>
                </a>
                <a href="/su-kien/sieu-tieu-phi-cuoi-tuan-3_289" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">27/02/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Sự Kiện] Siêu Tiêu Phí Cuối Tuần</div>
                  </div>
                </a>
                <a href="/su-kien/tieu-phi-qua-sieu-cap_288" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">25/02/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> [Chuỗi Sự Kiện] Tiêu Phí Hạn Giờ - Quà Siêu Cấp</div>
                  </div>
                </a>
                <a href="/su-kien/goi-qua-tro-luc_286" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">24/02/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Gói Quà Trợ Lực - Siêu Ưu Đãi</div>
                  </div>
                </a>
                <a href="/su-kien/quy-doi-loc-xuan_287" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Sự kiện]</span>
                      <div class="date-open">24/02/2026</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Quy Đổi Vé Nạp - Ưu Đãi Lộc Xuân</div>
                  </div>
                </a>
              </div>
              <div class="tab-detail " id="tab-huong-dan">
                <a href="/huong-dan/huong-dan-thanh-toan-goi-nap-bang-ve-nap_145"
                  class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Hướng dẫn]</span>
                      <div class="date-open">07/11/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Hướng Dẫn Thanh Toán Gói Nạp Bằng Vé Nạp</div>
                  </div>
                </a>
                <a href="/huong-dan/huong-dan-nap-xu-vao-vi-joy_140" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Hướng dẫn]</span>
                      <div class="date-open">07/11/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Hướng Dẫn Nạp Xu Vào Ví JOY</div>
                  </div>
                </a>
                <a href="/huong-dan/huong-dan-choi-game-tren-pc_142" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Hướng dẫn]</span>
                      <div class="date-open">22/07/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Hướng Dẫn Chơi Game Trên PC</div>
                  </div>
                </a>
                <a href="/huong-dan/huong-dan-nhap-giftcode_161" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Hướng dẫn]</span>
                      <div class="date-open">18/07/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Hướng Dẫn Nhập Giftcode</div>
                  </div>
                </a>
                <a href="/huong-dan/huong-dan-cai-dat-apk-cho-thiet-bi-di-dong_144"
                  class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Hướng dẫn]</span>
                      <div class="date-open">20/06/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Hướng Dẫn Cài Đặt APK Cho Thiết Bị Di Động</div>
                  </div>
                </a>
              </div>
              <div class="tab-detail " id="tab-tinh-nang">
                <a href="/tinh-nang/chien-tranh-loan-dau_160" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tính Năng]</span>
                      <div class="date-open">07/09/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Chiến Tranh Loạn Đấu</div>
                  </div>
                </a>
                <a href="/tinh-nang/ap-than-thu_157" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tính Năng]</span>
                      <div class="date-open">19/08/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Ấp Thần Thú</div>
                  </div>
                </a>
                <a href="/tinh-nang/gym-indigo-plateau_158" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tính Năng]</span>
                      <div class="date-open">11/07/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Gym & Indigo Plateau</div>
                  </div>
                </a>
                <a href="/tinh-nang/boss-the-gioi_159" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tính Năng]</span>
                      <div class="date-open">20/06/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> BOSS Thế Giới</div>
                  </div>
                </a>
                <a href="/tinh-nang/dai-luc-pokemon_148" class="item-new-box">
                  <div class="cat-des">
                    <div class="cat-date dFlex">
                      <span class="cOrange tUpper fgmv_DIN_Pro_B">[Tính Năng]</span>
                      <div class="date-open">20/06/2025</div>
                    </div>
                    <div class="des fgmv_DIN_Pro_Medium"> Đại Lục Pokémon</div>
                  </div>
                </a>
              </div>
            </div>

            <div class="view-more fatf_volcanoGothic">
              <a href="/all" id="view-all"
                class="news flex jct act tUpper m__inline tsdBlack link-more current">Xem thêm</a>
              <a href="/tin-tuc" id="view-tin-tuc"
                class="news flex jct act tUpper m__inline tsdBlack link-more ">Xem thêm</a>
              <a href="/su-kien" id="view-su-kien"
                class="news flex jct act tUpper m__inline tsdBlack link-more ">Xem thêm</a>
              <a href="/huong-dan" id="view-huong-dan"
                class="news flex jct act tUpper m__inline tsdBlack link-more ">Xem thêm</a>
              <a href="/tinh-nang" id="view-tinh-nang"
                class="news flex jct act tUpper m__inline tsdBlack link-more ">Xem thêm</a>
            </div>
          </div>

        </div>

        <div class="list-guide-bn fatf_volcanoGothic m__inline flex act jct">
          <a href="/huong-dan/huong-dan-thanh-toan-goi-nap-bang-ve-nap_145"
            target="_blank" class="it-gbn btnGuide btn-tranY flex act jct">
            hướng dẫn<br>nạp thẻ
          </a>
          <a href="/tin-tuc/dac-quyen-vip_152" target="_blank"
            class="it-gbn btnGuide btn-tranY flex act jct">
            đặc quyền v.i.p
          </a>
          <a href="/huong-dan/huong-dan-nhap-giftcode_161" target="_blank"
            class="it-gbn btnGuide btn-tranY flex act jct">
            hướng dẫn<br>Nhập giftcode
          </a>
          <a href="/huong-dan/huong-dan-choi-game-tren-pc_142" target="_blank"
            class="it-gbn btnGuide btn-tranY flex act jct">
            hướng dẫn<br>chơi trên PC
          </a>
        </div>

      </div>

    </div>
  </section>

  <section class="___feature">
    <div class="tit__FTL tCenter">
      <img src="/assets/images/feature.png" class="m__inline">
    </div>

    <div class="menFt__ m__inline">

      <div class="bgsl__ft lstFT__slide slick-custom-dots m__inline">
        <img src="/assets/images/1.png" class="imgFT__sl">
        <img src="/assets/images/2.png" class="imgFT__sl">
        <img src="/assets/images/3.png" class="imgFT__sl">
        <img src="/assets/images/4.png" class="imgFT__sl">
        <img src="/assets/images/5.png" class="imgFT__sl">
        <img src="/assets/images/6.png" class="imgFT__sl">
      </div>

    </div>

  </section>

  <div class="about__">

    <div class="tct">
      <img src="/assets/images/about.png" class="imgTT__">
    </div>


    <div class="menAbout__ flex act jct m__inline">
      <div class="lgoLink__ flex act jct">
        <img src="/assets/images/icon.png" alt="" class="logFt__ab">
        <div class="grBtn__dlGame flex act jct fsvn_helves tUpper">

          <a href="https://apps.apple.com/vn/app/id1626785478" target="_blank"
            class="btnDlGame__ btnAPP__ flex  jct  btn-tranY">
            <div class="tSm__ tup">Tải game trên</div>
            <div class="tBig__ fsvn_helves_bold">App Store</div>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.pocketmega.joy" target="_blank"
            class="btnDlGame__ btnGG__ flex  jct  btn-tranY">
            <div class="tSm__ tup">Tải game trên</div>
            <div class="tBig__ fsvn_helves_bold">Google Play</div>
          </a>
        </div>

      </div>

      <div class="link__cdS_ tct">
        <div class="name__cls fatf_volcanoGothic">Kênh Cộng Đồng: <span>POcket Mega</span></div>
        <div class="lstIMG__sc flex act jct">
          <a href="#" target="_blank">
            <img src="/assets/images/img-facebook.png" alt="">
          </a>
          <a href="#" target="_blank">
            <img src="/assets/images/img-facebook-group.png" alt="">
          </a>
          <a href="#" target="_blank">
            <img src="/assets/images/img-youtube.png" alt="">
          </a>
          <a href="#" target="_blank">
            <img src="/assets/images/img-tiktok.png" alt="">
          </a>
        </div>
      </div>
    </div>

  </div>
  <div class="modal" id="modal__ads" style="display: none;">
    <div class="content-modal">
      <div class="wrapper-modal">
        <div class="main-modal" id="ads__">
          <a href="/su-kien/tieu-phi-sieu-qua-hoan-tra_270" target="_blank"
            class="ads_img" data-start="Jan 02, 2026 05:00:00" data-time="Jan 22, 2026 23:59:59">
            <img src="/assets/images/events/chuoi-su-kien.png" alt="">
          </a>
          <a href="/su-kien/quy-doi-sieu-qua-tu-chon_269" target="_blank" class="ads_img"
            data-start="Jan 02, 2026 05:00:00" data-time="Jan 26, 2026 23:59:59">
            <img src="/assets/images/events/quy-doi-ve-nap.jpg" alt="">
          </a>
          <a href="/su-kien/su-kien-web-uu-dai-nap-ky-5_268" target="_blank"
            class="ads_img" data-start="Jan 02, 2026 05:00:00" data-time="Jan 27, 2026 23:59:59">
            <img src="/assets/images/events/su-kien-web.jpg" alt="">
          </a>
          <a href="/su-kien/goi-qua-thang-1_267" target="_blank" class="ads_img"
            data-start="Jan 01, 2026 05:00:00" data-time="Jan 22, 2026 23:59:59">
            <img src="/assets/images/events/goi-qua-thang.jpg" alt="">
          </a>
          <a href="/su-kien/nhiem-vu-mua-dong-nam-moi_264" target="_blank" class="ads_img"
            data-start="Dec 29, 2025 00:00:05" data-time="Jan 13, 2026 23:59:59">
            <img src="/assets/images/events/su-kien-web.jpg" alt="">
          </a>
          <a href="/su-kien/goi-qua-nam-moi-san-ngay-gia-hoi_262" target="_blank"
            class="ads_img" data-start="Dec 29, 2025 00:00:05" data-time="Jan 08, 2026 23:59:59">
            <img src="/assets/images/events/goi-qua-nam-moi.jpg" alt="">
          </a>
          <a href="/su-kien/vong-lap-nang-cap_260" target="_blank" class="ads_img"
            data-start="Dec 29, 2025 00:00:05" data-time="Jan 08, 2026 23:59:59">
            <img src="/assets/images/events/vong-lap-nang-cap.jpg" alt="">
          </a>
          <a href="/su-kien/quy-doi-nam-moi_259" target="_blank" class="ads_img"
            data-start="Dec 12, 2025 00:00:05" data-time="Jan 04, 2026 23:59:59">
            <img src="/assets/images/events/quy-doi-ve-nap.jpg" alt="">
          </a>
          <a href="/su-kien/tieu-phi-don-nam-moi_258" target="_blank" class="ads_img"
            data-start="Dec 12, 2025 00:00:05" data-time="Jan 01, 2026 23:59:59">
            <img src="/assets/images/events/chuoi-su-kien.png" alt="">
          </a>
          <a href="/su-kien/giang-sinh-an-lanh_257" target="_blank" class="ads_img"
            data-start="Dec 12, 2025 00:00:05" data-time="Dec 31, 2025 23:59:59">
            <img src="/assets/images/events/giang-sinh.jpg" alt="">
          </a>
        </div>
      </div>
      <div class="close_modal"></div>
    </div>
  </div>

  <div class="footer__game futm_avo">

    <div class="footer__game-inner" itemscope="" itemtype="http://schema.org/Organization" style="padding: 0 6%;">
      <p class="rs"> </p>
      <a href="" class="ftace__" style="" target="_blank"><span itemprop="legalName">JOYGAME</span></a>
      <p class="rs">CÔNG TY TNHH JOYGAMES</p>
      <p class="rs">Địa chỉ trụ sở: 397 Quang Trung, phường Buôn Ma Thuột, tỉnh Đắk Lắk, Việt Nam</p>
      <p class="rs">Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng Số 66/CP-PTTH&TTĐT do Bộ Văn Hóa, Thể Thao
        và Du Lịch cấp ngày 25/04/2025</p>
      <p class="rs">Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 245/QĐ-PTTH&TTĐT do Bộ Văn
        Hóa, Thể Thao và Du Lịch cấp ngày 12/06/2025</p>


      <img src="/assets/images/18-warning.png" class="footer__game-18">
    </div>

  </div>




  <div class="fixed__right hidden__mobile open">

    <div class="tCenter">
      <img src="/assets/images/icon.png" class="icNR">
    </div>

    <div class="gr__btRight tCenter">
      <div class="grBtn__dlGame fNotoSansBold  tUpper flex jct act fCl">
        <a href="https://apps.apple.com/vn/app/id1626785478" target="_blank"
          class="btnDlGame__ btnAPP__ flex  jct  btn-tranY">
          <div class="tSm__ tup fsvn_helves">Tải game trên</div>
          <div class="tBig__ ">App Store</div>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.pocketmega.joy" target="_blank"
          class="btnDlGame__ btnGG__ flex  jct  btn-tranY">
          <div class="tSm__ tup fsvn_helves">Tải game trên</div>
          <div class="tBig__ ">Google Play</div>
        </a>
        <a href="/apk" class="btnDlGame__ btn_apk flex jct tUpper c-pointer fCl btn-tranY" target="_blank" id="pc">
          <div class="tSm__ fsvn_helves"> TẢI APK CHO</div>
          <div class="tBig__ ">Giả Lập PC</div>
        </a>
      </div>
      <div class="dlCode__gc flex jct act fCl fNotoSansBold">
        <a href="/game/7"
          class="card__PC flex jct act tCenter tUpper c-pointer btn-tranY tsdPurple" target="_blank">
          Nạp Thẻ
        </a>
      </div>
      <div class="go-top tct m__inline">
        <img src="/assets/images/top.png" alt="">
      </div>

    </div>
    <div class="i-control"></div>

  </div>
  <div class="modal" id="modal__alert" style="display: none;">
    <div class="content-modal">
      <div class="wrapper-modal">
        <div class="title-modal tCenter tUpper dFlex aCenter jBetween">
          <span>Thông báo</span>
        </div>

        <div class="main-modal">

          <div class="detail-alert">
            <p class="tCenter text-alert fATF_HYYanKaiF">Text</p>
          </div>

        </div>
      </div>
      <div class="close_modal"></div>
    </div>
  </div>
  <div id="soundWr" style="display:none">
    <div class="fixed__left">
      <div class="bg__fl">
        <span class="link__fl tCenter toggleSoundButton unsound" id="toggleSoundButton">
          <img src="/assets/images/audio.png" alt="">
        </span>
      </div>
    </div>
    <div id="hidden_audio" style="opacity:0;position:absolute;z-index:-1;"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { initLegacy } from './legacy.js';

onMounted(() => {
  initLegacy();
});
</script>


