export function denominate (number) {
  let denominatedValue = number + ''

  if (number / 1e9 > 1) {
    denominatedValue = `${Math.round((number / 1e9) * 100) / 100}B`
  } else if (number / 1e6 > 1) {
    denominatedValue = `${Math.round((number / 1e6) * 100) / 100}M`
  }

  return denominatedValue
}

export function numberWithCommas (x) {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '--'
}
