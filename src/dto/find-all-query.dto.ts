export class FindAllQueryDTO{
    constructor(page: number, count: number) {        
        this.count = count;
        this.page = page;
    }
    count: number;
    page: number;
    get skip(): number { return this.count * this.page; };
}