import { ListWorkteamsCommandInput, ListWorkteamsCommandOutput } from "../commands/ListWorkteamsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorkteams(config: SageMakerPaginationConfiguration, input: ListWorkteamsCommandInput, ...additionalArguments: any): Paginator<ListWorkteamsCommandOutput>;
