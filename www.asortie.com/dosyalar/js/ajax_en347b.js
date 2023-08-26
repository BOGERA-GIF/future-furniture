$(document).ready(function() {
    function a() {
        $(this).find("ul:first").stop().slideDown()
    }

    function i() {
        $(this).find("ul:first").stop().slideUp()
    }
    $("img").on("mousedown", function(a) {
        a.preventDefault()
    }), $("#koleksiyon_asagi").click(function() {
        $("html,body").animate({
            scrollTop: 455
        }, 1e3)
    }), $(".genel_ana li").hover(a, i), $("#iletisim_formu").click(function() {
        $("#iletisim_formu").css("display", "none"), $(".iletisim_yukleniyor").css("display", "block")
    }), $(".gonder_katalog").click(function() {
        $(".gonder_katalog").css("display", "none"), $(".katalog_yukleniyor").css("display", "block")
    }), $("#sikayet_git").click(function() {
        $("#sikayet_git").css("display", "none"), $(".sikayet_yukleniyor").css("display", "block")
    }), $("#vip_gonder").click(function() {
        $("#vip_gonder").css("display", "none"), $(".vip_yukleniyor").css("display", "block")
    }), $(document).on("click", "#bayi_basvuru_formu", function() {
        var a = $("#bayi_ad").val(),
            i = $("#bayi_tel").val(),
            l = $("#bayi_email").val(),
            e = $("#bayi_il").val(),
            o = $("#bayi_meslek").val(),
            t = $("#bayi_firma").val(),
            n = $("#bayi_nerede").val(),
            s = ($("#daha_once_1").val(), $("#daha_once_2").val(), $("#bayi_aciklama").val()),
            d = $("#mobilya_kontrol").val(),
            r = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/,
            _ = r.test(l);
        "" == a || "" == l || "" == i ? ($("#degistirHATA").html("Please write all your information"), $("#uyariHata").modal("toggle")) : _ ? ($("#bayi_basvuru_formu").hide(), $(".iletisim_yukleniyor_bayi").css("display", "block"), $.post(SITE_URL + "site/bayi_basvuru_formu_gonder", {
            mobilya_kontrol: d,
            bayi_aciklama: s,
            bayi_nerede: n,
            bayi_firma: t,
            bayi_meslek: o,
            bayi_ad: a,
            bayi_tel: i,
            bayi_email: l,
            bayi_il: e
        }, function(a) {
            $("#degistirOK").html("Your message has been successfully delivered. <br> We return back to you as soon as possible"), $("#okModal").modal("toggle"), $(".reset_form")[0].reset(), $(".iletisim_yukleniyor_bayi").css("display", "none"), $("#bayi_basvuru_formu").show(), $("#BayiBasvuruFormu").modal("hide")
        })) : ($("#degistirHATA").html("Please enter a valid email address."), $("#uyariHata").modal("toggle"))
    }), $(document).on("click", "#detay_mesaji", function() {
        var a = $("#detay_name").val(),
            i = $("#detay_email").val(),
            l = $("#detay_tel").val(),
            e = $("#detay_message").val(),
            ko = $("#ulke_kodu").val(),
            o = $("#detay_link").val(),
            t = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/,
            n = t.test(i);
        "" == a || "" == i || 0 == ko ||  "" == l ? ($("#degistirHATA").html("Please write all your information"), $("#uyariHata").modal("toggle")) : n ? ($("#detay_mesaji").hide(), $(".detay_yukleniyor").css("display", "block"), $.post(SITE_URL + "site/detay_formu", {
            detay_link: o,
            detay_name: a,
            detay_email: i,
            detay_tel: l,
            detay_message: e,
            ulke_kodu : ko
        }, function(a) {
            $("#detay_mesaji").show(), $(".detay_yukleniyor").css("display", "none"), $(".sonuc").css("display", "block")
        }).complete(function() {
            $("#detay_name").val(""), $("#detay_email").val(""), $("#detay_tel").val(""), $("#detay_message").val(""), $("#detay_link").val(""), setInterval(function() {
                $(".sonuc").css("display", "none")
            }, 8e3)
        })) : ($("#degistirHATA").html("Please enter a valid email address."), $("#uyariHata").modal("toggle"))
    }), $(document).on("click", "#arkadasina_gonder_aktif", function() {
        var a = $("#ar_ad_soyad").val(),
            i = $("#ar_email").val(),
            l = $("#ar_alici_adi").val(),
            e = $("#ar_alici_email").val(),
            o = $("#ar_mesaj").val(),
            t = $("#detay_link").val(),
            n = $("#urun_adi_detay").val();
        console.log("urun_adi_detay" + n), console.log("ar_alici_adi" + l), console.log("ar_alici_email" + e), console.log("ar_email" + i), console.log("ar_ad_soyad" + a);
        var s = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/,
            d = s.test(e);
        "" == a || "" == e || "" == l ? ($("#degistirHATA").html("Please write all your information"), $("#uyariHata").modal("toggle")) : d ? ($("#arkadasina_gonder_aktif").hide(), $(".arkadas_yukleniyor").css("display", "block"), $.post(SITE_URL + "site/arkadasa_gonder", {
            urun_adi_detay: n,
            detay_link: t,
            ar_ad_soyad: a,
            ar_email: i,
            ar_alici_adi: l,
            ar_alici_email: e,
            ar_mesaj: o
        }, function(a) {
            $("#degistirOK").html("the product your advice was successfully sent"), $("#okModal").modal("toggle"), $(".reset_form")[0].reset(), $("#arkadasina_gonder_aktif").show(), $(".arkadas_yukleniyor").css("display", "none"), $("#ArkadasinaGonder").modal("hide"), $("#ar_ad_soyad").val(""), $("#ar_email").val(""), $("#ar_alici_adi").val(""), $("#ar_alici_email").val(""), $("#ar_mesaj").val(""), $("#detay_link").val(""), $("#urun_adi_detay").val("")
        })) : ($("#degistirHATA").html("Please enter a valid email address."), $("#uyariHata").modal("toggle"))
    })
});