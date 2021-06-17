import { ListCostCategoryDefinitionsCommandInput, ListCostCategoryDefinitionsCommandOutput } from "../commands/ListCostCategoryDefinitionsCommand";
import { CostExplorerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListCostCategoryDefinitions(config: CostExplorerPaginationConfiguration, input: ListCostCategoryDefinitionsCommandInput, ...additionalArguments: any): Paginator<ListCostCategoryDefinitionsCommandOutput>;
