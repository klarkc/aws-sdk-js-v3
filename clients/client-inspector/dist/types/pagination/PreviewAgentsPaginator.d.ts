import { PreviewAgentsCommandInput, PreviewAgentsCommandOutput } from "../commands/PreviewAgentsCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginatePreviewAgents(config: InspectorPaginationConfiguration, input: PreviewAgentsCommandInput, ...additionalArguments: any): Paginator<PreviewAgentsCommandOutput>;
