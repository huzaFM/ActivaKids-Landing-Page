
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BGEdQoKJ.js","/cdn/shopifycloud/checkout-web/assets/c1/app.LG5OuSrp.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.B3JUlX7O.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.Drw0i_At.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.C2X9sUgf.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-utilities.BwaeV5ay.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useReplaceShopPayInHistory.CBZVwnBH.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode.mNxApJwg.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-shared.BM31GxpM.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.DjKiod7B.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors.BIMIsxN7.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.DQSTfx8i.js","/cdn/shopifycloud/checkout-web/assets/c1/events-shared.BkepwpJB.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.C_9SDN8i.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.BsqpfgIS.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.DjkXYkxL.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.D0zvfwby.js","/cdn/shopifycloud/checkout-web/assets/c1/CrossBorderConsolidation.DbXbS3QO.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.dVQ8zuuh.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour.BpFa6r2y.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.B4Sb6pg8.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.DfaaETPk.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.DC4xBhGI.js","/cdn/shopifycloud/checkout-web/assets/c1/AmazonPayButton.B2SPL3s6.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.DumsIhos.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.C4G8sz6z.js","/cdn/shopifycloud/checkout-web/assets/c1/Page.Bbb7nxnD.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.CLU6cj0H.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.U7jW2bBf.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.BCUXSNJj.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.Bf0ZRjM8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.uiysIvyw.js","/cdn/shopifycloud/checkout-web/assets/c1/paypal-express-usePayPalPaymentErrorHandler.M1KYPIhf.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.VuE966Zr.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.BCeqwodI.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.BfmZxqQB.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.DBM_Kr9s.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.DhHlzXpp.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.DnyEKEhx.js","/cdn/shopifycloud/checkout-web/assets/c1/FloatingPayButton.D2bK3pl0.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.R-vG9Ajf.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input.BIHLuBl6.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants.pw_TnOHM.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.-MPWTeL-.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.DTJ1eGdz.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.DrFgMA8d.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.D_3DZ64o.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.D1GRmbmr.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.UTs-ZWkN.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.z1gUSUkf.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.DNo3q9Pc.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.CHMDn7iI.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.BGhuI-Fn.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets.CyYslJ5m.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.D8OJAR-n.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CfAhKPz4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts._rd0li_4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/usePostPurchase.Clm3el6u.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/shared.CEMlQpma.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.BVsfwQv1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/CrossBorderConsolidation.CRDql5Io.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.KuEoN8Dx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.CGtPK1gU.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.CSQKPDv7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/usePayPalPaymentErrorHandler.1xZZnAMV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FloatingPayButton.QTSrLh5I.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AmazonPayButton.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NoAddressLocationFullDetour.D14orovx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.qDifMJI9.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0928/4006/7437/files/V1_x320.png?v=1776728464"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  