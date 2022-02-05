const createrQr = (datas, mainEle) => {
  datas.map((data) => {
    const qrsEle = document.querySelector(mainEle);
    const createQr = document.createElement("div");
    const createSpan = document.createElement("span");
    const createH2 = document.createElement("h2");
    const textH2 = document.createTextNode(data.Name);

    createQr.className = `qr-code-${data.Id}`;
    createH2.append(textH2);
    createQr.append(createSpan);
    createQr.append(createH2);
    qrsEle.append(createQr);

    const qrEle = document.querySelector(`.qr-code-${data.Id}`);

    const styleQr = {
      colorDark: "#000",
      colorLight: "#ffff",
      correctLevel: QRCode.CorrectLevel.H,
    };

    const qrcode = new QRCode(qrEle, styleQr);
    qrcode.makeCode(data.Id.toString());
  });
}

const inputFile = document.querySelector("#input-file");
inputFile.addEventListener("change", function () {
  const datas = [];
  const converedDataExcel = () => readXlsxFile(inputFile.files[0]);
  converedDataExcel().then(rows => {
    for (let i = 1; i < rows.length; i++) {
      const data = {
        Id: rows[i][0],
        Name: rows[i][1],
      };
      datas.push(data);
    }
    createrQr(datas, '.qr-codes')
  })
});
