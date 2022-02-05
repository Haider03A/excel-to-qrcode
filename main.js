var input = document.getElementById('input')
  input.addEventListener('change', function() {
    readXlsxFile(input.files[0]).then(function(rows, e) {
      const datas = []
      for (let i = 1; i < rows.length ; i++) {
        const data = {
          Id: rows[i][0],
          Name: rows[i][1]
        }
        datas.push(data)
      }
      datas.map(data => {
        const qrsEle = document.querySelector(".qrs");
        const createQr = document.createElement('div');
        const createSpan = document.createElement('span');
        const createH2 = document.createElement('h2');
        const textH2 = document.createTextNode(data.Name);
        
        createQr.className = `qr${data.Id}`;
        createH2.append(textH2)
        createQr.append(createSpan);
        createQr.append(createH2);
        qrsEle.append(createQr);
        
        const qrEle = document.querySelector(`.qr${data.Id}`);
        
        const styleQr = {
    colorDark : "#000",
    colorLight : "#ffff",
    correctLevel : QRCode.CorrectLevel.H
}
        const qrcode = new QRCode(qrEle, styleQr);
        qrcode.makeCode(data.Id.toString());
        
        // qrEle.lastElementChild.remove(qrEle.lastElementChild);
        
      })
    })
  })
  
  
  onbeforeprint = function () {
    
  }