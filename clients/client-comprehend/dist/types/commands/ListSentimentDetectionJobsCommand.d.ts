import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListSentimentDetectionJobsRequest, ListSentimentDetectionJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSentimentDetectionJobsCommandInput extends ListSentimentDetectionJobsRequest {
}
export interface ListSentimentDetectionJobsCommandOutput extends ListSentimentDetectionJobsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of sentiment detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListSentimentDetectionJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListSentimentDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListSentimentDetectionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSentimentDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListSentimentDetectionJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSentimentDetectionJobsCommand extends $Command<ListSentimentDetectionJobsCommandInput, ListSentimentDetectionJobsCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListSentimentDetectionJobsCommandInput;
    constructor(input: ListSentimentDetectionJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSentimentDetectionJobsCommandInput, ListSentimentDetectionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
