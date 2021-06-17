import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "../commands/ListAssociationsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListAssociations(config: SageMakerPaginationConfiguration, input: ListAssociationsCommandInput, ...additionalArguments: any): Paginator<ListAssociationsCommandOutput>;
