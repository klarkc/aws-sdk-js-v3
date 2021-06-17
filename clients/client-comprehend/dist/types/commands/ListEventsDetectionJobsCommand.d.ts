import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListEventsDetectionJobsRequest, ListEventsDetectionJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEventsDetectionJobsCommandInput extends ListEventsDetectionJobsRequest {
}
export interface ListEventsDetectionJobsCommandOutput extends ListEventsDetectionJobsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of the events detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEventsDetectionJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEventsDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListEventsDetectionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventsDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListEventsDetectionJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEventsDetectionJobsCommand extends $Command<ListEventsDetectionJobsCommandInput, ListEventsDetectionJobsCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListEventsDetectionJobsCommandInput;
    constructor(input: ListEventsDetectionJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventsDetectionJobsCommandInput, ListEventsDetectionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
