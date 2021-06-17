import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListEventSourcesRequest, ListEventSourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEventSourcesCommandInput extends ListEventSourcesRequest {
}
export interface ListEventSourcesCommandOutput extends ListEventSourcesResponse, __MetadataBearer {
}
/**
 * <p>You can use this to see all the partner event sources that have been shared with your AWS
 *       account. For more information about partner event sources, see <a>CreateEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListEventSourcesCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListEventSourcesCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListEventSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventSourcesCommandInput} for command's `input` shape.
 * @see {@link ListEventSourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEventSourcesCommand extends $Command<ListEventSourcesCommandInput, ListEventSourcesCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: ListEventSourcesCommandInput;
    constructor(input: ListEventSourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventSourcesCommandInput, ListEventSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
