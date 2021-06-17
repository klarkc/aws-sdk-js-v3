import { ListLensesCommandInput, ListLensesCommandOutput } from "../commands/ListLensesCommand";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListLenses(config: WellArchitectedPaginationConfiguration, input: ListLensesCommandInput, ...additionalArguments: any): Paginator<ListLensesCommandOutput>;
