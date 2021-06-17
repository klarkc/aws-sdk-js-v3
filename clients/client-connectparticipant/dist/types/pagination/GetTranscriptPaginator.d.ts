import { GetTranscriptCommandInput, GetTranscriptCommandOutput } from "../commands/GetTranscriptCommand";
import { ConnectParticipantPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetTranscript(config: ConnectParticipantPaginationConfiguration, input: GetTranscriptCommandInput, ...additionalArguments: any): Paginator<GetTranscriptCommandOutput>;
