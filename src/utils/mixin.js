

export const priceLabelFilter = {
  filters: {
    showPriceLabel(price) {
      return price ? `$ ${price}` : '免費'
    }
  }
}