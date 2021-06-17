import { ListSubscribedWorkteamsCommandInput, ListSubscribedWorkteamsCommandOutput } from "../commands/ListSubscribedWorkteamsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSubscribedWorkteams(config: SageMakerPaginationConfiguration, input: ListSubscribedWorkteamsCommandInput, ...additionalArguments: any): Paginator<ListSubscribedWorkteamsCommandOutput>;
