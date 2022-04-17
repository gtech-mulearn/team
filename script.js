let ipaddress;
$.getJSON("https://api.ipify.org?format=json", function (data) {
  ipaddress = String(data.ip);
  var a = document.getElementById("url"); //or grab it by tagname etc
  var uniqueid = btoa(`${ipaddress}-${new Date().toString()}`);
  a.href = `https://airtable.com/shr1B63pF5WggZzLf?prefill_Unique+ID=${uniqueid}`;
});
