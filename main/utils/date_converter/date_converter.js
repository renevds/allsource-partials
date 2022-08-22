export function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    //DD-MM-YYYY
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }