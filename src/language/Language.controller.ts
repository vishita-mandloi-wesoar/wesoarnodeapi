import {LanguageDao} from "./Language.dao";

export class LanguageController {
    dao : LanguageDao;

    constructor() {
        this.dao = new LanguageDao();
    }

    async list() {
        //return await this.dao.list();
    }
}