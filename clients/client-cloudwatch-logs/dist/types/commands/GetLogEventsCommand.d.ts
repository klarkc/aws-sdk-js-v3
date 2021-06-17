import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { GetLogEventsRequest, GetLogEventsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLogEventsCommandInput extends GetLogEventsRequest {
}
export interface GetLogEventsCommandOutput extends GetLogEventsResponse, __MetadataBearer {
}
/**
 * <p>Lists log events from the specified log stream. You can list all of the log events or
 *       filter using a time range.</p>
 *
 *          <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events).
 *       You can get additional log events by specifying one of the tokens in a subsequent call.
 *       This operation can return empty results while there are more log events available through the token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogEventsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new GetLogEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLogEventsCommandInput} for command's `input` shape.
 * @see {@link GetLogEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLogEventsCommand extends $Command<GetLogEventsCommandInput, GetLogEventsCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: GetLogEventsCommandInput;
    constructor(input: GetLogEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLogEventsCommandInput, GetLogEventsCommandOutput>;
    private serialize;
    private deserialize;
}
