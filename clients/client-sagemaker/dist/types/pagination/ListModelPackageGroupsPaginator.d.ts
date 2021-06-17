import { ListModelPackageGroupsCommandInput, ListModelPackageGroupsCommandOutput } from "../commands/ListModelPackageGroupsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListModelPackageGroups(config: SageMakerPaginationConfiguration, input: ListModelPackageGroupsCommandInput, ...additionalArguments: any): Paginator<ListModelPackageGroupsCommandOutput>;
