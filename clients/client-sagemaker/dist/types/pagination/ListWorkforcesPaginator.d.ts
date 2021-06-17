import { ListWorkforcesCommandInput, ListWorkforcesCommandOutput } from "../commands/ListWorkforcesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWorkforces(config: SageMakerPaginationConfiguration, input: ListWorkforcesCommandInput, ...additionalArguments: any): Paginator<ListWorkforcesCommandOutput>;
