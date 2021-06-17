import { ListModelPackagesCommandInput, ListModelPackagesCommandOutput } from "../commands/ListModelPackagesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListModelPackages(config: SageMakerPaginationConfiguration, input: ListModelPackagesCommandInput, ...additionalArguments: any): Paginator<ListModelPackagesCommandOutput>;
