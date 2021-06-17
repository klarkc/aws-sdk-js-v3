import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "../commands/ListConnectionsCommand";
import { CodeStarConnectionsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListConnections(config: CodeStarConnectionsPaginationConfiguration, input: ListConnectionsCommandInput, ...additionalArguments: any): Paginator<ListConnectionsCommandOutput>;
