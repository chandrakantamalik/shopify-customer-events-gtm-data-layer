window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');

analytics.subscribe("checkout_completed", (event) => {
  dataLayer.push({ ecommerce: null });
  const items = event.data?.checkout?.lineItems?.map((item) => {
    return {
      item_id: item.variant.product.id,
      item_name: item.variant.product.title,
      price: item.variant.price.amount,
      quantity: item.quantity
    }
  });
  dataLayer.push({
    event: "purchase",
    url: event.context.document.location.href,
    ecommerce: {
      currency: event.data?.checkout?.currencyCode,
      value: event.data?.checkout?.subtotalPrice?.amount,
      transaction_id: event.data?.checkout?.order?.id,
      coupon: event.data?.checkout?.discountAllocations,
      shipping: event.data?.checkout?.shippingLine?.price?.amount,
      tax: event.data?.checkout?.totalTax?.amount,
      items: items
    }
  });
});

analytics.subscribe("payment_info_submitted", (event) => {
  dataLayer.push({ ecommerce: null });
  const items = event.data?.checkout?.lineItems?.map((item) => {
    return {
      item_id: item.variant.product.id,
      item_name: item.variant.product.title,
      price: item.variant.price.amount,
      quantity: item.quantity
    }
  });
  dataLayer.push({
    event: "add_payment_info",
    url: event.context.document.location.href,
    ecommerce: {
      currency: event.data?.checkout?.currencyCode,
      value: event.data?.checkout?.subtotalPrice?.amount,
      items: items
    }
  });
});

analytics.subscribe("checkout_shipping_info_submitted", (event) => {
  dataLayer.push({ ecommerce: null });
  const items = event.data?.checkout?.lineItems?.map((item) => {
    return {
      item_id: item.variant.product.id,
      item_name: item.variant.product.title,
      price: item.variant.price.amount,
      quantity: item.quantity
    }
  });
  dataLayer.push({
    event: "add_shipping_info",
    url: event.context.document.location.href,
    ecommerce: {
      currency: event.data?.checkout?.currencyCode,
      value: event.data?.checkout?.subtotalPrice?.amount,
      items: items
    }
  });
});

analytics.subscribe("checkout_started", (event) => {
  dataLayer.push({ ecommerce: null });
  const items = event.data?.checkout?.lineItems?.map((item) => {
    return {
      item_id: item.variant.product.id,
      item_name: item.variant.product.title,
      price: item.variant.price.amount,
      quantity: item.quantity
    }
  });
  dataLayer.push({
    event: "begin_checkout",
    url: event.context.document.location.href,
    ecommerce: {
      currency: event.data?.checkout?.currencyCode,
      value: event.data?.checkout?.subtotalPrice?.amount,
      items: items
    }
  });
});

analytics.subscribe("cart_viewed", (event) => {
  dataLayer.push({ ecommerce: null });
  const items = event.data?.cart?.lines?.map((item) => {
    return {
      item_id: item.merchandise.product.id,
      item_name: item.merchandise.product.title,
      price: item.merchandise.price.amount,
      quantity: item.quantity
    }
  });
  dataLayer.push({
    event: "view_cart",
    url: event.context.document.location.href,
    ecommerce: {
      currency: event.data?.cart?.cost?.totalAmount?.currencyCode,
      value: event.data?.cart?.cost?.totalAmount?.amount,
      items: items
    }
  });
});

analytics.subscribe("product_added_to_cart", (event) => {
  dataLayer.push({ ecommerce: null });
  dataLayer.push({
    event: "add_to_cart",
    url: event.context.document.location.href,
    ecommerce: {
      currency: event.data?.cartLine?.cost?.totalAmount?.currencyCode,
      value: event.data?.cartLine?.cost?.totalAmount?.amount,
      items: [
      {
        item_id: event.data?.cartLine?.merchandise?.product?.id,
        item_name: event.data?.cartLine?.merchandise?.product?.title,
        price: event.data?.cartLine?.merchandise?.price?.amount,
        quantity: event.data?.cartLine?.quantity
      }
      ]
    }
  });
});

analytics.subscribe("product_removed_from_cart", (event) => {
  dataLayer.push({ ecommerce: null });
const cartLine = event.data.cartLine;
  const cartLineCost = cartLine.cost.totalAmount.amount;
  const cartLineCostCurrency = cartLine.cost.totalAmount.currencyCode;
  const merchandiseVariantTitle = cartLine.merchandise.title;
  
  dataLayer.push({
    event: "remove_from_cart",
    url: event.context.document.location.href,
    ecommerce: {
      currency: cartLine?.cost?.totalAmount?.currencyCode,
      value: cartLine?.cost?.totalAmount?.amount,
      items: [
        {
          item_id: cartLine?.merchandise?.product?.id,
          item_name: cartLine?.merchandise?.product?.title,
          price: cartLine?.merchandise?.price?.amount,
          quantity: cartLine?.quantity
        }
      ]
    }
  });
});

analytics.subscribe("product_viewed", (event) => {
  dataLayer.push({ ecommerce: null });
  dataLayer.push({
    event: "view_item",
    url: event.context.document.location.href,
    ecommerce: {
      currency: event.data?.productVariant?.price?.currencyCode,
      value: event.data?.productVariant?.price?.amount,
      items: [
      {
        item_id: event.data?.productVariant?.product?.id,
        item_name: event.data?.productVariant?.product?.title,
        price: event.data?.productVariant?.price?.amount,
        quantity: 1
      }
      ]
    }
  });
});

analytics.subscribe("collection_viewed", async (event) => {
  gtag("event", "view_item_list", {
    items: event.data.collection.productVariants.map(variant => ({
      item_id: variant.id,
      item_name: variant.product.title,
    })),
  });
});


analytics.subscribe("page_viewed", (event) => {
  window.dataLayer.push({
    event: "page_view",
    url: event.context.document.location.href
  });
});
analytics.subscribe("search_submitted", (event) => {
  dataLayer.push({ search: null });

  const searchQuery = event.data?.searchResult?.query;
  const firstProductReturnedFromSearch = event.data?.searchResult?.productVariants[0]?.product.title;

  dataLayer.push({
    event: "search",
    url: event.context.document.location.href,
    search: {
      query: searchQuery,
      first_product_title: firstProductReturnedFromSearch,
    }
  });
});

analytics.subscribe('clicked', (event) => {
  const element = event.data.element;

  const elementId = element?.id;
  const elementHref = element?.href || "";
  const elementValue = element?.value;

  if (elementHref.startsWith("tel:")) {
    dataLayer.push({
      event: "phone_number_click",
      phone_number: elementHref.replace("tel:", ""),
      element_id: elementId,
      element_value: elementValue,
      url: elementHref,
    });
  } else if (elementHref.startsWith("mailto:")) {
    dataLayer.push({
      event: "email_click",
      email_address: elementHref.replace("mailto:", ""),
      element_id: elementId,
      element_value: elementValue,
      url: elementHref,
    });
  }
});

analytics.subscribe("form_submitted", (event) => {
  const element = event.data?.element;

  const elementId = element?.id;
  const formAction = element?.action;
  const emailRegex = /email/i;

  // Find email fields in the form
  const emailFields = Array.from(element?.elements || []).filter(
    (item) => emailRegex.test(item.id) || emailRegex.test(item.name)
  );

  // Collect all form field details
  const formDetails = Array.from(element?.elements || []).map((item) => {
    return {
      id: item.id,
      name: item.name,
      value: item.value,
    };
  });

  // Determine form type based on form ID or other attributes
  if (elementId === "newsletter_form" && emailFields.length === 1) {
    // Newsletter signup form logic
    const email = emailFields[0]?.value;
    dataLayer.push({
      event: "newsletter_signup",
      form_id: elementId,
      form_action: formAction,
      email: email,
      form_details: formDetails,
    });
  } else if (elementId === "contact_form") {
    // Contact form logic
    const email = emailFields.length > 0 ? emailFields[0]?.value : null;
    dataLayer.push({
      event: "contact_form_submit",
      form_id: elementId,
      form_action: formAction,
      email: email,
      form_details: formDetails,
    });
  } else {
    // Default or unrecognized form type
    console.warn(
      "Unrecognized form submitted. Form ID:",
      elementId,
      "Form Details:",
      formDetails
    );
  }
});
