import { DownloadDBLogFilePortionCommandInput, DownloadDBLogFilePortionCommandOutput } from "../commands/DownloadDBLogFilePortionCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDownloadDBLogFilePortion(config: RDSPaginationConfiguration, input: DownloadDBLogFilePortionCommandInput, ...additionalArguments: any): Paginator<DownloadDBLogFilePortionCommandOutput>;
