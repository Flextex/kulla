function generate() {
    var linkDL = document.getElementById("download"),
        btn = document.getElementById("btn"),
        direklink = document.getElementById("download").href,
        waktu = 10;
    var teks_waktu = document.createElement("span");
    linkDL.parentNode.replaceChild(teks_waktu, linkDL);
    var id;
    id = setInterval(function () {
        waktu--;
        if (waktu < 0) {
            teks_waktu.parentNode.replaceChild(linkDL, teks_waktu);
            clearInterval(id);
            window.location.replace(direklink);
            linkDL.style.display = "inline";
			
        } else {
            teks_waktu.innerHTML = "<i class='fa fa-clock-o' aria-hidden='true'/> " + "El archivo está listo para descargar en " + "" + waktu.toString() + " Segundo....";
            btn.style.display = "none";
        }
    }, 1000);
}

//<![CDATA[
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");loadCSS("https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700");
//]]>

function base64_decode (data) {
  // http://kevin.vanzonneveld.net
  // +   original by: Tyler Akins (http://rumkin.com)
  // +   improved by: Thunder.m
  // +      input by: Aman Gupta
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Pellentesque Malesuada
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
  // *     returns 1: 'Kevin van Zonneveld'
  // mozilla has this native
  // - but breaks in 2.0.0.12!
  //if (typeof this.window['atob'] == 'function') {
  //    return atob(data);
  //}
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    dec = "",
    tmp_arr = [];
 
  if (!data) {
    return data;
  }
 
  data += '';
 
  do { // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));
 
    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
 
    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;
 
    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);
 
  dec = tmp_arr.join('');
 
  return dec;
}
    function showlink(){
       var urldes = base64_decode(document.location.href.match(/der\/\?(.+)\/?/)[1]);
       buton.innerHTML = 'download';
       buton.onclick = function (){
         location.href = urldes;
       }
    }