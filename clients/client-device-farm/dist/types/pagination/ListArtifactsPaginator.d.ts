import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "../commands/ListArtifactsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListArtifacts(config: DeviceFarmPaginationConfiguration, input: ListArtifactsCommandInput, ...additionalArguments: any): Paginator<ListArtifactsCommandOutput>;
