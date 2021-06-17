import { ListStepsCommandInput, ListStepsCommandOutput } from "../commands/ListStepsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListSteps(config: EMRPaginationConfiguration, input: ListStepsCommandInput, ...additionalArguments: any): Paginator<ListStepsCommandOutput>;
