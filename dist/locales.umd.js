!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e=e||self).VueFormulateI18n={})}(this,(function(e){"use strict";function r(e){return"string"==typeof e?e[0].toUpperCase()+e.substr(1):e}var n={accepted:function(e){return"من فضلك اقبل ال "+e.name},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" يجب أن يأتي بعد "+a[0]+".":r(n)+" يجب أن يكون تاريخ أحدث"},alpha:function(e){return r(e.name)+" يجب أن يحتوى على حروف أبجدية فقط."},alphanumeric:function(e){return r(e.name)+" يمكن أن يحتوي على حروف أبجدية أو أرقام فقط."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" يجب أن يكون قبل "+a[0]+".":r(n)+" يجب أن يكون تاريخ أقدم"},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" يجب أن يقع بين "+t[0]+" و "+t[1]+".":r(n)+" يجب ان يكون طوله بين "+t[0]+" و "+t[1]+" حرف."},confirm:function(e){var n=e.name;e.args;return r(n)+" غير متطابق."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" ليس على الصيغة الصحيحة, من فضلك استخدم هذه الصيغة "+a[0]:r(n)+" ليس على الصيغة الصحيحة."},default:function(e){e.name;return"هذه القيمة غير مناسبة."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” ليس عنوان بريد الكتروني.":"من فضلك أدخل عنوان بريد الكتروني مناسب."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” لا تنتهي بنهاية صحيحة.":"نهاية هذه القيمة ليست صحيحة."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” ليس "+n+" صحيح.":"هذه القيمة ليست "+n+" صحيح."},matches:function(e){return r(e.name)+" ليست قيمة مسموح بها."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"يمكنك فقط ان تختار "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" لا يمكن أن يتجاوز "+t[0]+".":r(n)+" لا يجب ان يزيد طوله عن "+t[0]+" حرف."},mime:function(e){var n=e.name,a=e.args;return r(n)+" يجب ان يكون من نوع "+(a[0]||"لا يسمح بأي نوع.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"يجب أن تختار على الأقل "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" يجب أن يكون أكبر من "+t[0]+".":r(n)+" يجب أن يكون طوله أكبر من "+t[0]+" حرف."},not:function(e){var r=e.name;return"“"+e.value+"” ليست قيمة مسموح بها ك"+r+"."},number:function(e){return r(e.name)+" يجب أن يكون رقم."},required:function(e){return r(e.name)+" ضروري."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” لا تبدأ بقيمة صحيحة.":"هذه القيمة لا تبدأ بقيمة صحيحة."},url:function(e){e.name;return"من فضلك أدخل رابط صحيح."}};var a={accepted:function(e){return"Prosím potvrďte "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" musí bý po "+a[0]+".":r(n)+" musí být pozdější datum."},alpha:function(e){return r(e.name)+" může obsahovat pouze písmena."},alphanumeric:function(e){return r(e.name)+" může obsahovat pouze písmena a čísla."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" musí být před "+a[0]+".":r(n)+" musí být dřívější datum."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" musí být mezi "+t[0]+" a "+t[1]+".":r(n)+" délka musí být mezi "+t[0]+" a "+t[1]+" znaky."},confirm:function(e){var n=e.name;e.args;return r(n)+" se neshoduje."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" není platné datum, použijte formát "+a[0]:r(n)+" není platné datum."},default:function(e){e.name;return"Toto pole není vyplěno správně."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” není platná e-mailová adresa.":"Zadejte platnou e-mailovou adresu."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nekončí správnou hodnotou.":"Toto pole nekončí správnou hodnotou."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” není povolená hodnota "+n+".":"Toto není povolená hodnota "+n+"."},matches:function(e){return r(e.name)+" není povolená hodnota."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Můžete vybrat pouze "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" musí být menší nebo rovno "+t[0]+".":r(n)+" musí být menší nebo rovno "+t[0]+" znaků."},mime:function(e){var n=e.name,a=e.args;return r(n)+" musí být typ: "+(a[0]||"Žádné typy souborů nejsou povolené.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Je potřeba nejméně "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" musí být nejméně "+t[0]+".":r(n)+" musí být nejméně "+t[0]+" znaků."},not:function(e){var r=e.name;return"“"+e.value+"” není povolená hodnota "+r+"."},number:function(e){return r(e.name)+" musí být číslo."},required:function(e){return"Pole "+r(e.name)+" je povinné."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nezačíná platnou hodnotou.":"Toto pole nezačíná platnou hodnotou."},url:function(e){e.name;return"Zadejte platnou URL adresu."}};var t={accepted:function(e){return"Accepter venligst "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" skal være efter "+a[0]+".":r(n)+" skal være en senere dato."},alpha:function(e){return r(e.name)+" kan kun indeholde bogstaver."},alphanumeric:function(e){return r(e.name)+" kan kun indeholde bogstaver og tal."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" skal være før "+a[0]+".":r(n)+" skal være en tidligere dato."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" skal være mellem "+t[0]+" og "+t[1]+".":r(n)+" skal være mellem "+t[0]+" og "+t[1]+" tegn."},confirm:function(e){var n=e.name;e.args;return r(n)+" matcher ikke."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" er ikke gyldig, brug venligst formatet "+a[0]:r(n)+" er ikke en gyldig dato."},default:function(e){e.name;return"Dette felt er ikke gyldigt."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” er ikke en gyldig email-adresse.":"Indtast venligst en gyldig email-adresse."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” slutter ikke med en gyldig værdi.":"Dette felt slutter ikke med en gyldig værdi."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” er ikke en tilladt "+n+".":"Dette er ikke en tilladt "+n+"."},matches:function(e){return r(e.name)+" er ikke en gyldig værdi."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Du kan kun vælge "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" skal være mindre end eller lig "+t[0]+".":r(n)+" skal være mindre end eller lig "+t[0]+" tegn."},mime:function(e){var n=e.name,a=e.args;return r(n)+" skal være af typen: "+(a[0]||"Ingen tilladte filformater.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Du skal vælge mindst "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" skal være mere end "+t[0]+".":r(n)+" skal være mere end "+t[0]+" tegn."},not:function(e){var r=e.name;return"“"+e.value+"” er ikke en gyldig "+r+"."},number:function(e){return r(e.name)+" skal være et tal."},required:function(e){return r(e.name)+" er påkrævet."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” starter ikke med en gyldig værdi.":"Dette felt starter ikke med en gyldig værdi."},url:function(e){e.name;return"Indtast venligst en gyldig URL."}};var u={accepted:function(e){return e.name+" erfordert Zustimmung."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" muss auf "+a[0]+" folgen.":r(n)+" muss ein späteres Datum sein."},alpha:function(e){return r(e.name)+" darf nur Buchstaben enthalten."},alphanumeric:function(e){return r(e.name)+" darf nur Buchstaben und Zahlen enthalten."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" muss vor "+a[0]+" sein.":r(n)+" muss ein früheres Datum sein."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" muss zwischen "+t[0]+" und "+t[1]+".":r(n)+" muss zwischen "+t[0]+" und "+t[1]+" Zeichen lang sein."},confirm:function(e){var n=e.name;e.args;return r(n)+" stimmt nicht überein."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" ist nicht korrekt, bitte das Format "+a[0]+" benutzen.":r(n)+" ist kein gültiges Datum."},default:function(e){e.name;return"Das Feld hat einen Fehler."},email:function(e){e.name;var r=e.value;return r?"„"+r+"“ ist keine gültige E-Mail-Adresse.":"Bitte eine gültige E-Mail-Adresse eingeben."},endsWith:function(e){e.name;var r=e.value;return r?"„"+r+"” endet nicht mit einem gültigen Wert.":"Dieses Feld endet nicht mit einem gültigen Wert"},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"„"+r(a)+"“ ist kein gültiger Wert für "+n+".":"Dies ist kein gültiger Wert für "+n+"."},matches:function(e){return r(e.name)+" ist kein gültiger Wert."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Es dürfen nur "+t[0]+" "+n+" ausgewählt werden.";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" muss kleiner oder gleich "+t[0]+" sein.":r(n)+" muss "+t[0]+" oder weniger Zeichen lang sein."},mime:function(e){var n=e.name,a=e.args;return r(n)+" muss den Typ "+(a[0]||"Keine Dateien erlaubt")+" haben."},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Es müssen mindestens "+t[0]+" "+n+" ausgewählt werden.";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" muss größer als "+t[0]+" sein.":r(n)+" must "+t[0]+" oder mehr Zeichen lang sein."},not:function(e){var r=e.name;return"„"+e.value+"“ ist kein erlaubter Wert für "+r+"."},number:function(e){return r(e.name)+" muss eine Zahl sein."},required:function(e){return r(e.name)+" ist ein Pflichtfeld."},startsWith:function(e){e.name;var r=e.value;return r?"„"+r+"” beginnt nicht mit einem gültigen Wert":"Dieses Feld beginnt nicht mit einem gültigen Wert"},url:function(e){return r(e.name)+" muss eine gültige URL sein."}};var i={accepted:function(e){return"Please accept the "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" must be after "+a[0]+".":r(n)+" must be a later date."},alpha:function(e){return r(e.name)+" can only contain alphabetical characters."},alphanumeric:function(e){return r(e.name)+" can only contain letters and numbers."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" must be before "+a[0]+".":r(n)+" must be an earlier date."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" must be between "+t[0]+" and "+t[1]+".":r(n)+" must be between "+t[0]+" and "+t[1]+" characters long."},confirm:function(e){var n=e.name;e.args;return r(n)+" does not match."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" is not a valid date, please use the format "+a[0]:r(n)+" is not a valid date."},default:function(e){e.name;return"This field isn’t valid."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” is not a valid email address.":"Please enter a valid email address."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” doesn’t end with a valid value.":"This field doesn’t end with a valid value."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” is not an allowed "+n+".":"This is not an allowed "+n+"."},matches:function(e){return r(e.name)+" is not an allowed value."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"You may only select "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" must be less than or equal to "+t[0]+".":r(n)+" must be less than or equal to "+t[0]+" characters long."},mime:function(e){var n=e.name,a=e.args;return r(n)+" must be of the the type: "+(a[0]||"No file formats allowed.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"You need at least "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" must be at least "+t[0]+".":r(n)+" must be at least "+t[0]+" characters long."},not:function(e){var r=e.name;return"“"+e.value+"” is not an allowed "+r+"."},number:function(e){return r(e.name)+" must be a number."},required:function(e){return r(e.name)+" is required."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” doesn’t start with a valid value.":"This field doesn’t start with a valid value."},url:function(e){e.name;return"Please include a valid url."}};var o={accepted:function(e){return"Por favor acepta los "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" debe ser luego de "+a[0]+".":r(n)+" debe ser una fecha posterior."},alpha:function(e){return r(e.name)+" solo puede contener letras."},alphanumeric:function(e){return r(e.name)+" solo puede contener letras y números."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" debe ser antes de "+a[0]+".":r(n)+" debe ser una fecha anterior."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" debe estar entre "+t[0]+" y "+t[1]+".":r(n)+" debe tener entre "+t[0]+" y "+t[1]+" caracteres."},confirm:function(e){var n=e.name;e.args;return r(n)+" no coincide."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" no es una fecha válida, por favor use el formato "+a[0]:r(n)+" no es una fecha válida."},default:function(e){e.name;return"Este campo no es válido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” no es un correo electrónico válido.":"Por favor introduzca un correo electrónico válido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” no termina en un valor válido.":"Este campo no termina en un valor válido."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” no es un "+n+" permitido.":"Esto no es un "+n+" permitido."},matches:function(e){return r(e.name)+" no es un valor permitido."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Solo puedes seleccionar "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" debe ser menor o igual que "+t[0]+".":r(n)+" debe ser menor o igual que "+t[0]+" caracteres."},mime:function(e){var n=e.name,a=e.args;return r(n)+" debe ser de tipo: "+(a[0]||"No se permite el formato de archivos.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Necesitas al menos "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" debe contener al menos "+t[0]+".":r(n)+" debe contener al menos "+t[0]+" caracteres."},not:function(e){var r=e.name;return"“"+e.value+"” no es un "+r+" permitido."},number:function(e){return r(e.name)+" debe ser un número."},required:function(e){return r(e.name)+" es requerido."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” no comienza con un valor válido.":"Este campo no comienza con un valor válido."},url:function(e){e.name;return"Por favor introduzca una url válida."}};var s={accepted:function(e){return"Merci d'accepter les "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" doit être postérieur à "+a[0]+".":r(n)+" doit être une date ultérieure."},alpha:function(e){return r(e.name)+" peut uniquement contenir des lettres."},alphanumeric:function(e){return r(e.name)+" peut uniquement contenir des lettres ou des chiffres"},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" doit être antérieur à "+a[0]+".":r(n)+" doit être une date antérieure."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" doit être compris entre "+t[0]+" et "+t[1]+".":r(n)+" doit être compris entre "+t[0]+" et "+t[1]+" caractères."},confirm:function(e){var n=e.name;e.args;return r(n)+" ne correspond pas."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" n'est pas valide.  Merci d'utiliser le format "+a[0]:r(n)+" n'est pas une date valide."},default:function(e){e.name;return"Ce champ n'est pas valide."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” n'est pas une adresse email valide.":"Merci d'entrer une adresse email valide."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne termine pas par une valeur correcte.":"Ce champ ne termine pas par une valeur correcte."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” n'est pas un(e) "+n+" autorisé(e).":"Cette valeur n'est pas un(e) "+n+" autorisé(e)."},matches:function(e){return r(e.name)+" n'est pas une valeur autorisée."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Vous pouvez uniquement sélectionner "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" doit être inférieur ou égal à "+t[0]+".":r(n)+" doit être inférieur ou égal à "+t[0]+" caractères."},mime:function(e){var n=e.name,a=e.args;return r(n)+" doit être de type: "+(a[0]||"Aucun format autorisé.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Vous devez sélectionner au moins "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" doit être supérieur à "+t[0]+".":r(n)+" doit être plus long que "+t[0]+" caractères."},not:function(e){var r=e.name;return"“"+e.value+"” n'est pas un(e) "+r+" autorisé(e)."},number:function(e){return r(e.name)+" doit être un nombre."},required:function(e){return r(e.name)+" est obligatoire."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne commence pas par une valeur correcte.":"Ce champ ne commence pas par une valeur correcte."},url:function(e){e.name;return"Merci d'entrer une URL valide."}};var l={accepted:function(e){return"אנא קבל את ה"+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" חייב להיות אחרי "+a[0]+".":r(n)+" חייב להיות תאריך יותר מאוחר."},alpha:function(e){return r(e.name)+" יכול להכיל אותיות בלבד."},alphanumeric:function(e){return r(e.name)+" יכול להכיל אותיות ומספרים בלבד."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" חייב להיות לפני "+a[0]+".":r(n)+" חייב להיות תאריך יותר מוקדם."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" חייב להיות בין "+t[0]+" ו-"+t[1]+".":r(n)+" חייב להיות בין "+t[0]+" ו-"+t[1]+" אותיות."},confirm:function(e){var n=e.name;e.args;return r(n)+" אינו תואם."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" אינו תאריך תקין, אנא השתמש בפורמט "+a[0]:r(n)+" אינו תאריך תקין."},default:function(e){e.name;return"השדה אינו תקין."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו כתובת אימייל תקין.":"אנא הכנס כתובת אימייל תקין."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו מסתיים בערך תקין.":"שדה זו אינו מסתיים בערך תקין."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” אינו "+n+" מורשה.":"ערך זו איננו "+n+" מורשה."},matches:function(e){return r(e.name)+" אינו ערך מורשה."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"אתה יכול לבחור רק "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" חייב להיות פחות או שוה ל-"+t[0]+".":r(n)+" חייב להיות פחות או שוה ל-"+t[0]+" אותיות."},mime:function(e){var n=e.name,a=e.args;return r(n)+" חייב להיות מסוג של: "+(a[0]||"סוגי קבצים לא מורשים.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"אתה צריך לפחות "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" חייב להיות לפחות "+t[0]+".":r(n)+" חייב להיות לפחות "+t[0]+" אותיות."},not:function(e){var r=e.name;return"“"+e.value+"” אינו "+r+" מורשה."},number:function(e){return r(e.name)+" חייב להיות מספר."},required:function(e){return r(e.name)+" נדרש."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” אינו מתחיל בערך תקף.":"שדה זה אינו מתחיל בערך תקף."},url:function(e){e.name;return"אנא כלול כתובת אתר חוקית."}};var m={accepted:function(e){return"Per favore, accetta il campo "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" deve essere una data successiva al "+a[0]+".":r(n)+" deve essere una data successiva a quella attuale."},alpha:function(e){return r(e.name)+" può contenere solo lettere."},alphanumeric:function(e){return r(e.name)+" può contenere solo lettere e numeri."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" deve essere una data precedente al "+a[0]+".":r(n)+" deve essere una data precedente a quella attuale."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" deve essere tra "+t[0]+" e "+t[1]+".":r(n)+" deve avere una lunghezza compresa tra "+t[0]+" e "+t[1]+" caratteri."},confirm:function(e){var n=e.name;e.args;return r(n)+" non corrisponde."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" non è una data valida. Per favore usa il formato "+a[0]:r(n)+" non è una data valida."},default:function(e){e.name;return"Questo campo non è valido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” non è un indirizzo email valido.":"Per favore, inserisci un indirizzo email valido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” non termina con un valore valido.":"Questo campo non termina con un valore valido."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” non è un valore valido per il campo "+n+".":n+" invalido."},matches:function(e){return r(e.name)+" invalido."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Puoi selezionare al massimo "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" deve essere inferiore o uguale a "+t[0]+".":r(n)+" deve essere inferiore o uguale a "+t[0]+" caratteri."},mime:function(e){var n=e.name,a=e.args;return r(n)+" deve essere del tipo: "+(a[0]||"Nessun formato file autorizzato.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Devi selezionare almeno "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" deve essere maggiore di "+t[0]+".":r(n)+" deve essere più lungo di "+t[0]+" caratteri."},not:function(e){var r=e.name;return"“"+e.value+"” non è un valore valido per il campo "+r+"."},number:function(e){return r(e.name)+" deve essere un numero."},required:function(e){return r(e.name)+" è un campo obbligatorio."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” non inizia con un valore valido.":"Questo campo non inizia con un valore valido."},url:function(e){e.name;return"Per favore inserisci un URL valido."}};var c={accepted:function(e){return e.name+"を承認してください。"},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+"は "+a[0]+" 以降にしてください。":r(n)+"はより後にしてください。"},alpha:function(e){return r(e.name)+"にはアルファベットのみ使用できます。"},alphanumeric:function(e){return r(e.name)+"には英数字のみ使用できます。"},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+"は "+a[0]+" 以前にしてください。":r(n)+"はより前にしてください。"},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+"は"+t[0]+"から"+t[1]+"の間でなければなりません。":r(n)+"は"+t[0]+"文字から"+t[1]+"文字でなければなりません。"},confirm:function(e){var n=e.name;e.args;return r(n)+"が一致しません。"},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+"は有効な形式ではありません。次のフォーマットで入力してください: "+a[0]:r(n)+"は有効な形式ではありません。"},default:function(e){e.name;return"有効な値ではありません。"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効なメールアドレスではありません。":"有効なメールアドレスを入力してください。"},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効な値で終わっていません。":"有効な値で終わっていません。"},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” は許可された"+n+"ではありません。":"許可された"+n+"ではありません。"},matches:function(e){return r(e.name)+"は許可された値ではありません。"},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return n+"は"+t[0]+"項目しか選択できません。";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+"は"+t[0]+"以下でなければなりません。":r(n)+"は"+t[0]+"文字以下でなければなりません。"},mime:function(e){var n=e.name,a=e.args;return r(n)+"は次のファイル形式でなければなりません: "+(a[0]||"許可されたファイル形式がありません")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return n+"は"+t[0]+"項目以上選択してください。";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+"は"+t[0]+"以上でなければなりません。":r(n)+"は"+t[0]+"文字以上でなければなりません。"},not:function(e){var r=e.name;return"“"+e.value+"” は許可された"+r+"ではありません。"},number:function(e){return r(e.name)+"には数字のみ使用できます。"},required:function(e){return r(e.name)+"は必須項目です。"},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効な値で始まっていません。":"有効な値で始まっていません。"},url:function(e){e.name;return"有効なURLを入力してください。"}};var v={accepted:function(e){return e.name+" 승인해 주세요."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" "+a[0]+" 이후이어야 합니다.":r(n)+" 미래의 날짜이어야 합니다."},alpha:function(e){return r(e.name)+" 알파벳만 사용할 수 있습니다."},alphanumeric:function(e){return r(e.name)+" 문자와 숫자만 사용할 수 있습니다."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" "+a[0]+" 이전이어야 합니다.":r(n)+"이전이어야 합니다."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" "+t[0]+"와 "+t[1]+"사이이어야 합니다.":r(n)+" "+t[0]+"자애서 "+t[1]+"자 사이이어야 합니다."},confirm:function(e){var n=e.name;e.args;return r(n)+" 일치하지 않습니다."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" 유효한 날짜 형식이 아닙니다. 다음과 같은 형식으로 입력해 주세요: "+a[0]:r(n)+"올바른 날짜 형식이 아닙니다."},default:function(e){e.name;return"유효하지 않은 값입니다."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” 유효한 이메일 주소가 아닙니다.":"유효한 이메일 주소를 입력해 주세요."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"”으로 끝내야합니다.":"유효한 값으로 끝나지 않습니다."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” 허용된 "+n+" 아닙니다.":n+" 허용된 값이 아닙니다."},matches:function(e){return r(e.name)+" 허용 된 값이 아닙니다."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return n+" "+t[0]+"개의 항목만 선택 가능합니다.";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" "+t[0]+"이하이어야 합니다.":r(n)+" "+t[0]+"자 이하이어야 합니다."},mime:function(e){var n=e.name,a=e.args;return r(n)+" 다음과 같은 파일 형식이어야 합니다: "+(a[0]||"허용되는 파일 형식이 아닙니다.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return n+" "+t[0]+" 이상 선택해 주세요.";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" "+t[0]+"이상이어야 합니다.":r(n)+" "+t[0]+"자 이상이어야 합니다."},not:function(e){var r=e.name;return"“"+e.value+"” 허용된 "+r+" 아닙니다."},number:function(e){return r(e.name)+" 숫자만 사용 가능합니다."},required:function(e){return r(e.name)+" 필수 항목입니다."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” 유효한 값으로 시작하지 않습니다.":"유효한 값으로 시작하지 않습니다."},url:function(e){e.name;return"유효한 URL을 입력해 주세요."}};var f={accepted:function(e){return"Sta "+e.name+" toe."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" moet na "+a[0]+" zijn.":r(n)+" moet een latere datum zijn."},alpha:function(e){return r(e.name)+" mag enkel letters bevatten."},alphanumeric:function(e){return r(e.name)+" mag enkel letters en cijfers bevatten."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" moet voor "+a[0]+" zijn.":r(n)+" moet een eerdere datum zijn."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" moet tussen "+t[0]+" en "+t[1]+" zitten.":r(n)+" moet tussen "+t[0]+" en "+t[1]+" lang zijn."},confirm:function(e){var n=e.name;e.args;return r(n)+" komt niet overeen."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" is geen geldige datum, het juiste format is "+a[0]:r(n)+" is geen geldige datum."},default:function(e){e.name;return"De invoer voor dit veld is niet geldig"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” is geen geldig e-mailadres.":"Voer een geldig e-mailadres in."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” eindigt niet op een geldige waarde.":"Dit veld eindigt niet op een geldige waarde."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” is niet toegestaan als "+n+".":"Deze "+n+" is niet toegestaan."},matches:function(e){return r(e.name)+" is niet toegestaan."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Je kunt maximaal "+t[0]+" selecteren als "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" moet kleiner of gelijk zijn aan "+t[0]+".":r(n)+" mag maximaal "+t[0]+" karakters bevatten."},mime:function(e){var n=e.name,a=e.args;return r(n)+" moet van dit type zijn: "+(a[0]||"Bestanden zijn niet toegestaan")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Je moet tenminste "+t[0]+" selecteren als "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" moet groter zijn dan "+t[0]+".":r(n)+" moet tenminste "+t[0]+" karakters bevatten."},not:function(e){var r=e.name;return"“"+e.value+"” is geen geldige "+r+"."},number:function(e){return r(e.name)+" moet een getal zijn."},required:function(e){return r(e.name)+" is verplicht."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” begint niet met een geldige waarde.":"Dit veld begint niet met een geldige waarde."},url:function(e){e.name;return"Voer een geldige URL in."}};var d={accepted:function(e){return"Proszę zaakceptować "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" musi być po "+a[0]+".":r(n)+" musi być przyszłą datą."},alpha:function(e){return r(e.name)+" może zawierać wyłącznie znaki alfabetyczne."},alphanumeric:function(e){return r(e.name)+" może zawierać wyłącznie liczby i litery."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" musi być przed "+a[0]+".":r(n)+" musi być wczesniejszą datą."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" musi być pomiędzy "+t[0]+" oraz "+t[1]+".":r(n)+" musi być pomiędzy "+t[0]+" oraz "+t[1]+" znaków."},confirm:function(e){var n=e.name;e.args;return r(n)+" nie pasuje."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" nie jest poprawną datą, proszę użyć formatu "+a[0]:r(n)+" nie jest poprawną datą."},default:function(e){e.name;return"Pole nie jest poprawne."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” nie jest poprawnym adresem email.":"Proszę podać poprawny adres email."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nie kończy się z poprawną wartością.":"Pole nie kończy się z poprawną wartością."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” jest niedozwoloną wartością pola "+n+".":"Wartość jest niedozwolona w polu "+n+"."},matches:function(e){return r(e.name)+" nie jest dozwoloną wartością."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Możesz wybrać maksymalnie "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" musi być mniejszy lub równy "+t[0]+".":r(n)+" musi być mniejszy lub równy "+t[0]+" znaków."},mime:function(e){var n=e.name,a=e.args;return r(n)+" musi być typem: "+(a[0]||"Niedozwolone formaty plików.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Potrzeba przynajmniej "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" musi mieć przynajmniej "+t[0]+".":r(n)+" musi mieć przynajmniej "+t[0]+" znaków."},not:function(e){var r=e.name;return"“"+e.value+"” jest niedozwoloną wartością "+r+"."},number:function(e){return r(e.name)+" musi być liczbą."},required:function(e){return r(e.name)+" jest wymagane."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” nie zaczyna się z poprawną wartością.":"Pole nie zaczyna się z poprawną wartością."},url:function(e){e.name;return"Proszę wprowadzić poprawny adres URL."}};var g={accepted:function(e){return"Por favor aceite o "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" deve ser posterior a "+a[0]+".":r(n)+" deve ser uma data posterior."},alpha:function(e){return r(e.name)+" pode conter apenas letras."},alphanumeric:function(e){return r(e.name)+" pode conter apenas letras e números."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" deve ser antes de "+a[0]+".":r(n)+" deve ser uma data anterior."},between:function(e){var n=e.name,a=e.value,t=e.args,u=!(!Array.isArray(t)||!t[2])&&t[2];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" deve ser entre "+t[0]+" e "+t[1]+".":r(n)+" deve ter entre "+t[0]+" e "+t[1]+" caracteres."},confirm:function(e){var n=e.name;e.args;return r(n)+" não corresponde."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" não é válido, por favor use o formato "+a[0]:r(n)+" não é uma data válida."},default:function(e){e.name;return"Este campo não é válido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” não é um e-mail válido.":"Por favor informe um e-mail válido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” não termina com um valor válido.":"Este campo não termina com um valor válido."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” não é um "+n+" permitido.":"Isso não é um "+n+" permitido."},matches:function(e){return r(e.name)+" não é um valor válido."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Você deve selecionar apenas "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" deve ser menor ou igual a "+t[0]+".":r(n)+" deve ter no máximo "+t[0]+" caracteres."},mime:function(e){var n=e.name,a=e.args;return r(n)+" deve ser no formato: "+(a[0]||"Formato de arquivo não permitido.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Você deve selecionar pelo menos "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" deve ser maior que "+t[0]+".":r(n)+" deve ter mais de "+t[0]+" caracteres."},not:function(e){var r=e.name;return"“"+e.value+"” não é um "+r+" válido."},number:function(e){return r(e.name)+" deve ser um número."},required:function(e){return r(e.name)+" é obrigatório."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” não começa com um valor válido.":"Este campo não começa com um valor válido."},url:function(e){e.name;return"Por favor informe uma URL válida."}};var y={accepted:function(e){return"Пожалуйста, подтвердите "+e.name+"."},after:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" должна быть после "+a[0]+".":r(n)+" должна быть дата после."},alpha:function(e){return r(e.name)+" может содержать только буквы."},alphanumeric:function(e){return r(e.name)+" может содержать только буквы и цифры."},before:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" должно быть раньше "+a[0]+".":r(n)+" должно быть раньше."},between:function(e){var n=e.name,a=e.value,t=e.args;!(!Array.isArray(t)||!t[2])&&t[2];return isNaN(a),r(n)+" должно быть между "+t[0]+" и "+t[1]+"."},confirm:function(e){var n=e.name;e.args;return r(n)+" не совпадает."},date:function(e){var n=e.name,a=e.args;return Array.isArray(a)&&a.length?r(n)+" не является допустимой датой, пожалуйста, используйте формат "+a[0]:r(n)+" не является допустимой датой."},default:function(e){e.name;return"Это поле не является допустимым."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” недействительный адрес электронной почты.":"Пожалуйста, введите действительный адрес электронной почты."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” не заканчивается допустимым значением.":"Это поле не заканчивается допустимым значением."},in:function(e){var n=e.name,a=e.value;return"string"==typeof a&&a?"“"+r(a)+"” является ошибочным для "+n+".":"Выбранное значение для "+n+" ошибочно."},matches:function(e){return r(e.name)+" не совпадает."},max:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Вы можете выбрать только "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" должно быть меньше или равно "+t[0]+".":"Количество символов "+r(n)+" должно быть меньше или равно "+t[0]+"."},mime:function(e){var n=e.name,a=e.args;return r(n)+" должно быть файлом одного из следующих типов: "+(a[0]||"Не допустимые форматы файлов.")},min:function(e){var n=e.name,a=e.value,t=e.args;if(Array.isArray(a))return"Должно быть не менее "+t[0]+" "+n+".";var u=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==u||"value"===u?r(n)+" должно быть не менее "+t[0]+".":"Количество символов "+r(n)+" должно быть не менее "+t[0]+"."},not:function(e){var r=e.name;return"“"+e.value+"” не является допустимым "+r+"."},number:function(e){return r(e.name)+" должны быть числом."},required:function(e){return r(e.name)+" обязательное поле."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” должно начинаться действительным значением.":"Поле должно начинаться действительным значением."},url:function(e){e.name;return"Пожалуйста, укажите действительный URL."}};e.ar=function(e){var r;e.extend({locales:(r={},r.ar=n,r)})},e.cs=function(e){var r;e.extend({locales:(r={},r.cs=a,r)})},e.da=function(e){var r;e.extend({locales:(r={},r.da=t,r)})},e.de=function(e){var r;e.extend({locales:(r={},r.de=u,r)})},e.en=function(e){var r;e.extend({locales:(r={},r.en=i,r)})},e.es=function(e){var r;e.extend({locales:(r={},r.es=o,r)})},e.fr=function(e){var r;e.extend({locales:(r={},r.fr=s,r)})},e.he=function(e){var r;e.extend({locales:(r={},r.he=l,r)})},e.it=function(e){var r;e.extend({locales:(r={},r.it=m,r)})},e.ja=function(e){var r;e.extend({locales:(r={},r.ja=c,r)})},e.ko=function(e){var r;e.extend({locales:(r={},r.ko=v,r)})},e.nl=function(e){var r;e.extend({locales:(r={},r.nl=f,r)})},e.pl=function(e){var r;e.extend({locales:(r={},r.pl=d,r)})},e.pt=function(e){var r;e.extend({locales:(r={},r.pt=g,r)})},e.ru=function(e){var r;e.extend({locales:(r={},r.ru=y,r)})},Object.defineProperty(e,"__esModule",{value:!0})}));
