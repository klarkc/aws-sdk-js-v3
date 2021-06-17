import { ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput } from "../commands/ListGroupResourcesCommand";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGroupResources(config: ResourceGroupsPaginationConfiguration, input: ListGroupResourcesCommandInput, ...additionalArguments: any): Paginator<ListGroupResourcesCommandOutput>;
