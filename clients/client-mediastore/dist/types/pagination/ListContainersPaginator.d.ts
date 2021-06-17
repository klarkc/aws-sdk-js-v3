import { ListContainersCommandInput, ListContainersCommandOutput } from "../commands/ListContainersCommand";
import { MediaStorePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListContainers(config: MediaStorePaginationConfiguration, input: ListContainersCommandInput, ...additionalArguments: any): Paginator<ListContainersCommandOutput>;
