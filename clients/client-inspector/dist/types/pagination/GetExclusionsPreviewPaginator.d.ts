import { GetExclusionsPreviewCommandInput, GetExclusionsPreviewCommandOutput } from "../commands/GetExclusionsPreviewCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetExclusionsPreview(config: InspectorPaginationConfiguration, input: GetExclusionsPreviewCommandInput, ...additionalArguments: any): Paginator<GetExclusionsPreviewCommandOutput>;
