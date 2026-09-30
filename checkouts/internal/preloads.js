
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Db3KX98s.js","/cdn/shopifycloud/checkout-web/assets/c1/app.C7NiYy0W.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.BIMwrpmC.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.DFgVI2T-.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-policy.8J14e8U8.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.efYYR4rM.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.BeaXjAqC.js","/cdn/shopifycloud/checkout-web/assets/c1/mobile-checkout-sdk-MobileCheckoutSdkClient.BJYidG1o.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal-delegated-payment-instrument.CEuZ8kwW.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared.DcLVARwE.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.Cr5NwAXN.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.8NGpm5RQ.js","/cdn/shopifycloud/checkout-web/assets/c1/error-logger-report-graphql-error.DztaL1Yz.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.BEoSNwYp.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shopCashMoney.BZRBShTa.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButton-helpers.DYHlWYvk.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.B50j1grR.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser.QavmVRdm.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-es.B2pCzS-8.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.CAOsuaI_.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.5rsIS1Ag.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.CwqLAsZX.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-findSelectedDeliveryMethod.Ct722UvN.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShouldRevealExtension.DUY2eLqw.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.CEqrzYaX.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.B0WLi1nq.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.CW27DZDi.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.3XLVUKqO.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-grouping.CEIiqJ6a.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.BU2i7LZ1.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-compact.C8NbAnX0.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.i7EViUn3.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.DVFZEfyM.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.BDwteP51.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.BK1ebO95.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.FJmEpCHI.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-previous.BmKAHD5E.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.DUUcGDi2.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.DfVxMa1_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.DHbru7U_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack.DOVY1yLZ.js","/cdn/shopifycloud/checkout-web/assets/c1/IncentiveBadge.Bq8zJTpO.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride.BmRrlJpP.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.zVRJKbNv.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.MbGKG2mS.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.Dyxy0kbW.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressMutationsWithNegotiation.YuqNZMHm.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.DLvAX6d0.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.DV1mhsHl.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-ThemeOverride.Z86HdySv.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.BFjv42Z_.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason.CzSr_uxI.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.CRm1Xgsv.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.BnZ1jKab.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.CkBC94bm.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.BT9NQK5f.js","/cdn/shopifycloud/checkout-web/assets/c1/StickyPayButton-StickyPayButton.module.Cv0z_ObF.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.Dvqzzfq1.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi.DouuRF7O.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscounts.y5UeU588.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.BU33Yr2Y.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.qnIFEv5D.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.BhLhm3UZ.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.DlOnKrdE.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.DYDfOrRE.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.DhnhgHsg.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.B7l-XHaG.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.BS4JpDUM.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.D5gpAwq_.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.CeBIBRaR.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.DHcN-k9f.js","/cdn/shopifycloud/checkout-web/assets/c1/page-BelowTheFoldContent.CSQOiQo3.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha.CKJBsp4R.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayCaptcha.BbIkG46B.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection.xF4pJPfa.js","/cdn/shopifycloud/checkout-web/assets/c1/components-PaymentMethodProgressionHost.CRU8XrEO.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.BLAoL30t.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.BLr7uJQ5.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.BS6Wakyd.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.CBnkdRVY.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.O9wNFwZ2.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler.vIubXRwi.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptionSelector.Cd8dHym8.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.CNtwD8TU.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.Bfw1OgQF.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.Sxsz5knT.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/checkout-policy.BUDzuiNK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.-blQlXi0.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DxMZvmU_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.BPR3LV8c.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useAddressMutationsWithNegotiation.BcTJoNaV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.D3bcP-mr.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.CPXhWoNv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShouldRevealExtension.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.aPApdPe_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/IncentiveBadge.Dlnp55te.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CpHF4L7Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.CxfTiM6_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Captcha.CJQgLR0i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.2B5x30PG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.CZuxzxFG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.C8No5WOn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.BwQxlzN-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/grouping.BnDF3H7t.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useSuppressShopPayModalOnLoad.SrYMuQu4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.DfWUBaTh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0676/1355/7052/files/Logo_web_x320.jpg?v=1684524637"];

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
  