import { FindAllQueryDTO } from "./find-all-query.dto";

export class FindAllOrdersQueryDTO extends FindAllQueryDTO{
    constructor(
        readonly page: number, 
        readonly count: number, 
        readonly status?: string,
        ) {
        super(page, count);
    }   
}