import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { GetLogRecordRequest, GetLogRecordResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLogRecordCommandInput extends GetLogRecordRequest {
}
export interface GetLogRecordCommandOutput extends GetLogRecordResponse, __MetadataBearer {
}
/**
 * <p>Retrieves all of the fields and values of a single log event. All fields are retrieved,
 *       even if the original query that produced the <code>logRecordPointer</code> retrieved only a
 *       subset of fields. Fields are returned as field name/field value pairs.</p>
 *          <p>The full unparsed log event is returned within <code>@message</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogRecordCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogRecordCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new GetLogRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLogRecordCommandInput} for command's `input` shape.
 * @see {@link GetLogRecordCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLogRecordCommand extends $Command<GetLogRecordCommandInput, GetLogRecordCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: GetLogRecordCommandInput;
    constructor(input: GetLogRecordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLogRecordCommandInput, GetLogRecordCommandOutput>;
    private serialize;
    private deserialize;
}
