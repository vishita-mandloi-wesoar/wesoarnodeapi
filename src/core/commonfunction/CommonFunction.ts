const  i18n = require("i18n");
export class CommonFunction {
    public static  i18nconverter(value: String,code:String): String {  
       
        i18n.setLocale(code);
        var returntext = i18n.__(value);
        return returntext;  
       }
   
}