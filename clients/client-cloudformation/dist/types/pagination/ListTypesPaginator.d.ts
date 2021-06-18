import { ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTypes(
  config: CloudFormationPaginationConfiguration,
  input: ListTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListTypesCommandOutput>;
