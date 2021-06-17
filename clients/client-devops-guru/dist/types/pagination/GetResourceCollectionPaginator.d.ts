import { GetResourceCollectionCommandInput, GetResourceCollectionCommandOutput } from "../commands/GetResourceCollectionCommand";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetResourceCollection(config: DevOpsGuruPaginationConfiguration, input: GetResourceCollectionCommandInput, ...additionalArguments: any): Paginator<GetResourceCollectionCommandOutput>;
