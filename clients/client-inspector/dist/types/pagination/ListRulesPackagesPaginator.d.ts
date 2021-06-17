import { ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput } from "../commands/ListRulesPackagesCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRulesPackages(config: InspectorPaginationConfiguration, input: ListRulesPackagesCommandInput, ...additionalArguments: any): Paginator<ListRulesPackagesCommandOutput>;
