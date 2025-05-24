## ⚙️ Features Implemented

| GA4 Event Name         | Shopify Event Triggered On                | Description |
|------------------------|-------------------------------------------|-------------|
| `page_view`            | Every page load                           | GA4 default page tracking |
| `view_item`            | `product_viewed`                          | When a product page is viewed |
| `view_item_list`       | `collection_viewed`                       | When a collection is viewed |
| `add_to_cart`          | `product_added_to_cart`                   | When a product is added to cart |
| `remove_from_cart`     | `product_removed_from_cart`               | When an item is removed from cart |
| `view_cart`            | `cart_viewed`                             | When cart page is opened |
| `begin_checkout`       | `checkout_started`                        | When checkout begins |
| `add_shipping_info`    | `checkout_shipping_info_submitted`        | When shipping details are submitted |
| `add_payment_info`     | `payment_info_submitted`                  | When payment information is added |
| `purchase`             | `checkout_completed`                      | When purchase is completed |
| `search`               | Custom trigger when a site search occurs  | Pushes keyword used |
| `newsletter_signup`    | Form with `#newsletter_form` is submitted | Tracks newsletter opt-ins |
| `contact_form_submit`  | Form with `#contact_form` is submitted    | Tracks contact form submissions |
| `phone_number_click`   | Click on a `tel:` link                    | Tracks call intent |
| `email_click`          | Click on a `mailto:` link                 | Tracks email intent |


1. Ecommerce GA4 Events:
Event Name	Triggered on
purchase	checkout_completed
add_payment_info	payment_info_submitted
add_shipping_info	checkout_shipping_info_submitted
begin_checkout	checkout_started
view_cart	cart_viewed
add_to_cart	product_added_to_cart
remove_from_cart	product_removed_from_cart
view_item	product_viewed
view_item_list	collection_viewed

2. Additional Events:
Event Name	Description
page_view	Triggered on every page view
search	When a search is performed
phone_number_click	When a tel: link is clicked
email_click	When a mailto: link is clicked
newsletter_signup	When a form with ID newsletter_form is submitted
contact_form_submit	When a form with ID contact_form is submitted

✅ What You Should Validate Next
To ensure proper tracking and GA4 reporting:

1. GTM Tags Setup
Make sure you have created matching GA4 event tags in GTM for all the dataLayer events above. For example:

Trigger: Event name = add_to_cart

Tag Type: GA4 Event Tag

Configuration Tag: Your GA4 Measurement ID

Parameters:

currency, value, items, etc.

2. Preview in GTM
Use GTM Preview Mode to:

Trigger events on your Shopify site (e.g., add a product to cart).

Inspect the dataLayer pushes.

Ensure GTM tags fire with correct values.

3. Test in GA4 DebugView
Open GA4 > Admin > DebugView.

Perform the actions on your site.

Confirm events like add_to_cart, purchase, etc., show up with the right parameters.
