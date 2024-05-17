function orderScreener(order, firstName, ID) {
  const items = order.order_items.map(item => (
    `
    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
      <tr style="border-bottom: solid 1px #3d4852; padding-top: 15px; padding-bottom: 15px;">
        <td>
          <img style="width: 85%; height: 95px;" src="${item.product.images[0].url}" />
        </td>
        <td style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${item.product.name}
        </td>
        <td style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          ${item.quantity}
        </td>
        <td style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          #${item.total_price}
        </td>
      </tr>
    </table>`
  )).join('')

  const confirmationSMS = `Hello ${firstName}, \n\nYour order with ID: #${ID} is confirmed! Check your email for your package details. We will let you know when your order is being delivered. \n\nCheers!`

  const outForDeliverySMS = `Hello ${firstName}, \n\nYour order with ID: #${ID} is out for delivery! Our delivery agent will contact you to receive your package. \n\nCheers!`

  const canceledSMS = `Hello ${firstName}, \n\nYour order with ID:${ID} has been cancelled on your request. \n\nHave a nice day!`

  const reference = order.reference ? order.reference : 'null'
  const payment_provider = order.payment_provider === 'cod' ? 'C.O.D' : order.payment_provider
  const payment_method = order.payment_method === 'cod' ? 'C.O.D' : 'Card'
  const balance = order.paid ? 0 : order.amount
  const date_placed = order.date_placed
  const id = order._id
  const shipping_fee = order.shipping_fee
  const amount = order.amount
  const paid = order.paid
  const customer = order.customer.email
  const fName = order.customer.firstName
  const lName = order.customer.lastName
  const email = order.customer.email
  const phone_number = order.customer.phone_number
  const shipping_address = order.customer.shipping_address

  return {
    reference,
    payment_provider,
    payment_method,
    balance,
    items,
    date_placed,
    id,
    shipping_fee,
    amount,
    paid,
    confirmationSMS,
    customer,
    outForDeliverySMS,
    fName,
    lName,
    email,
    phone_number,
    shipping_address,
    canceledSMS
  }
}

module.exports = { orderScreener }