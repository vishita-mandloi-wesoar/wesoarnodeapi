import {LanguageDao} from "./Language.dao";

export class LanguageService {
     dao : LanguageDao;

     constructor() {
         this.dao = new LanguageDao();
     }
}