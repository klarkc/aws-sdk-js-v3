import { ListExclusionsCommandInput, ListExclusionsCommandOutput } from "../commands/ListExclusionsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListExclusions(config: InspectorPaginationConfiguration, input: ListExclusionsCommandInput, ...additionalArguments: any): Paginator<ListExclusionsCommandOutput>;
