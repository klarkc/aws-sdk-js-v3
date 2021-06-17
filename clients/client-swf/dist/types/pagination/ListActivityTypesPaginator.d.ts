import { ListActivityTypesCommandInput, ListActivityTypesCommandOutput } from "../commands/ListActivityTypesCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListActivityTypes(config: SWFPaginationConfiguration, input: ListActivityTypesCommandInput, ...additionalArguments: any): Paginator<ListActivityTypesCommandOutput>;
