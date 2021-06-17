import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { StopQueryRequest, StopQueryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopQueryCommandInput extends StopQueryRequest {
}
export interface StopQueryCommandOutput extends StopQueryResponse, __MetadataBearer {
}
/**
 * <p>Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation
 *     returns an error indicating that the specified query is not running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, StopQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, StopQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new StopQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopQueryCommandInput} for command's `input` shape.
 * @see {@link StopQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopQueryCommand extends $Command<StopQueryCommandInput, StopQueryCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: StopQueryCommandInput;
    constructor(input: StopQueryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopQueryCommandInput, StopQueryCommandOutput>;
    private serialize;
    private deserialize;
}
