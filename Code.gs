function doGet(e) {
  return ContentService.createTextOutput("API تعمل بنجاح ✅").setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.name || "",
      "'" + (data.phone || ""),
      data.city || "",
      data.address || "",
      data.size || "Standard",
      data.color || "",
      "300 درهم",
      new Date()
    ]);
    return ContentService.createTextOutput(JSON.stringify({success:true})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success:false,error:error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
