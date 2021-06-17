import { ListTestGridSessionArtifactsCommandInput, ListTestGridSessionArtifactsCommandOutput } from "../commands/ListTestGridSessionArtifactsCommand";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTestGridSessionArtifacts(config: DeviceFarmPaginationConfiguration, input: ListTestGridSessionArtifactsCommandInput, ...additionalArguments: any): Paginator<ListTestGridSessionArtifactsCommandOutput>;
