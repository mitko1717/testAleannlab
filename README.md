## Assignment

### Catalog

- Filter products

  - Create an input field at the top of the page that filters by product name
    - Should have a placeholder of `Search for products`
  - Only products matching the query params should be rendered
  - Show the total products found underneath the input field, eg. `2 products found`

- Available inventory

  - If quantity > 0, enable `Add to Cart` button
  - If item is removed from cart, enable `Add to Cart` button

- Unavailable inventory
  - Change product badge to `Out of Stock` when the inventory count is 0
  - Desaturate the product photo to grayscale
  - Disable the `Add to Cart` button

### Cart

- Product in cart
  - Clicking `Add to Cart` should add a unique product or increase the quantity of an existing product in cart
    - Only show unique products
  - Create a modifiable number-input field to display the quantity of each item
    - Allows for manual edit of quantity
    - Allows for increment & decrement of quantity
    - Cannot be below 1
    - Cannot exceed inventory
  - Unique product cost should update as item is incremented and decremented
    - Price of unique item should calculate as `product cost * quantity`
  - Remove button exists to the right of modifiable number-input field
    - Clicking button will remove unique item from cart display
- Item count
  - Show the total of unique items contained in the cart
    - Display to the right of cart heading, eg. `Cart (3)`
    - Update count when new unique items are added
    - Update count when removing items
- Checkout total
  - Display the total cost of all items below cart items, `eg. Total $240`
  - Update the cart total when adding items
  - Update the cart total when removing items

Finished?

Double check that the application runs smoothly, and you are comfortable deploying this to production. Will your client and other engineers be happy with your work? Have you thought about possible edge cases or improvements? Make final adjustments as needed and proceed to the next section

<h2 id="follow-up-questions">Follow Up Questions</h2>

Answer the follow questions inline, and commit it to your submission

**1.** Explain the flow of data from the store to the UI and back as simply as you can.

i guess, we need data store in one place to have opportunity to rule, change and manipulate it in every component and reflect changes everywhere in project, computing some values.

**2.** How else can we improve the experience of the site? What suggestions can you make to the product team and the development team?

maybe make mobile version

**3.** What recommendations can you make to the development team for scalability?

who am i to recommend anything?

**4.** What knowledge up front could have helped this go smoother or faster?

for my the most difficult part was make two stores (catalog and carts) work together dynamicly and change the states there both, depends on input value of every cart.

**5.** How was it working around these libraries? Anything trip you up?

work with these libraries completely fine to me

job@aleannlab.com
