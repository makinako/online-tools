!function(){function e(e,n,i){return"pem_text"===e?i?KEYUTIL.getKey(n).pubKeyHex:KEYUTIL.getKey(n).prvKeyHex:"base64"===e?!!loadEncodingLevel(e)&&bytesToHex(base64.decode.bytes(n)):n}window.sign=function(n,i,t,r,u){if(r=e(t,r)){var a=new KJUR.crypto.Signature({alg:u});return a.init({d:r,curve:i}),a.updateString(n),a.sign()}},window.verify=function(n,i,t,r,u,a,o){if((r=e(t,r,!0))&&(o=e(a,o))){var d=new KJUR.crypto.Signature({alg:u});return d.init({xy:r,curve:i}),d.updateString(n),d.verify(o)?"Valid":"Invalid"}}}();