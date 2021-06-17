import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListDominantLanguageDetectionJobsRequest, ListDominantLanguageDetectionJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDominantLanguageDetectionJobsCommandInput extends ListDominantLanguageDetectionJobsRequest {
}
export interface ListDominantLanguageDetectionJobsCommandOutput extends ListDominantLanguageDetectionJobsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of the dominant language detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListDominantLanguageDetectionJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListDominantLanguageDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListDominantLanguageDetectionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDominantLanguageDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListDominantLanguageDetectionJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDominantLanguageDetectionJobsCommand extends $Command<ListDominantLanguageDetectionJobsCommandInput, ListDominantLanguageDetectionJobsCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListDominantLanguageDetectionJobsCommandInput;
    constructor(input: ListDominantLanguageDetectionJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDominantLanguageDetectionJobsCommandInput, ListDominantLanguageDetectionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
