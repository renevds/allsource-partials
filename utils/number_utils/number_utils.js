export const formatNum = (num) => {
  if(num < 10000){
    return Math.round(num).toLocaleString();
  }
  else if (num < 1000000){
    return (Math.round(num/10)/100).toLocaleString() + 'K'
  }
  else {
    return (Math.round(num/10000)/100).toLocaleString() + 'M'
  }
}