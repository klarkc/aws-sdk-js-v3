import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteMetricFilterRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMetricFilterCommandInput extends DeleteMetricFilterRequest {
}
export interface DeleteMetricFilterCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified metric filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteMetricFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteMetricFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DeleteMetricFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMetricFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMetricFilterCommand extends $Command<DeleteMetricFilterCommandInput, DeleteMetricFilterCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteMetricFilterCommandInput;
    constructor(input: DeleteMetricFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMetricFilterCommandInput, DeleteMetricFilterCommandOutput>;
    private serialize;
    private deserialize;
}
