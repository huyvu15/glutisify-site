const SHEET_ID = '14Xucg2a3Gq7m5Y1ZA41ke_72yaSFBbpE4kjeb55eaj4';
const SHEET_NAME = 'Contact';
const HEADERS = ['Timestamp','Name','Email','Phone','Company','Service','Message'];

/**
 * Lấy sheet, tạo nếu chưa tồn tại và thêm header nếu sheet rỗng
 */
function getSheet_() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * Parse dữ liệu POST request (JSON hoặc form-data)
 */
function parse_(e) {
  if (e && e.postData && e.postData.type &&
      e.postData.type.indexOf('application/json') !== -1 &&
      e.postData.contents) {
    try { return JSON.parse(e.postData.contents) || {}; } catch (_) {}
  }
  var p = (e && e.parameter) || {};
  return {
    name: String(p.name || ''),
    email: String(p.email || ''),
    phone: String(p.phone || ''),
    company: String(p.company || ''),
    service: String(p.service || ''),
    message: String(p.message || '')
  };
}

/**
 * Tạo output JSON
 */
function json_(o){ 
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON); 
}

/**
 * GET test - Dùng hàm này để authorize web app lần đầu
 */
function doGet(){ 
  try {
    // Test truy cập sheet để trigger authorization
    var s = getSheet_();
    return json_({ok: true, sheetName: s.getName(), lastRow: s.getLastRow()});
  } catch (err) {
    return json_({ok: false, error: String(err), message: 'Cần authorize quyền truy cập Spreadsheet'});
  }
}

/**
 * Xử lý POST
 */
function doPost(e){
  try{
    var s = getSheet_(), d = parse_(e);
    s.appendRow([new Date(), d.name, d.email, d.phone, d.company, d.service, d.message]);
    return json_({success:true});
  }catch(err){ 
    return json_({success:false, error:String(err)}); 
  }
}

/**
 * Hàm test trực tiếp trong editor, 1 dòng dữ liệu
 */
function testDoPost() {
  var fakeEvent = { 
    parameter: {
      name: "Nguyen Van A",
      email: "a@example.com",
      phone: "0123456789",
      company: "Cty ABC",
      service: "Service X",
      message: "Đây là tin nhắn thử nghiệm"
    } 
  };

  // Chuyển tất cả giá trị sang string
  Object.keys(fakeEvent.parameter).forEach(key => {
    fakeEvent.parameter[key] = String(fakeEvent.parameter[key] || '');
  });

  var result = doPost(fakeEvent);
  Logger.log(result.getContent());
}

/**
 * Hàm test nhiều dòng cùng lúc
 */
function testDoPostMultiple() {
  var testRows = [
    {name: "Nguyen Van A", email: "a@example.com", phone: "0123456789", company: "Cty ABC", service: "Service X", message: "Tin nhắn 1"},
    {name: "Le Thi B", email: "b@example.com", phone: "0987654321", company: "Cty XYZ", service: "Service Y", message: "Tin nhắn 2"},
    {name: "Tran Van C", email: "c@example.com", phone: "0912345678", company: "Cty DEF", service: "Service Z", message: "Tin nhắn 3"}
  ];

  testRows.forEach(function(data){
    // Chuyển tất cả giá trị sang string
    Object.keys(data).forEach(key => { data[key] = String(data[key] || ''); });
    var e = { parameter: data };
    var res = doPost(e);
    Logger.log(res.getContent());
  });
}

