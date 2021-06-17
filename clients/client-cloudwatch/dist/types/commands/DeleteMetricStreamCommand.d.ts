import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteMetricStreamInput, DeleteMetricStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMetricStreamCommandInput extends DeleteMetricStreamInput {
}
export interface DeleteMetricStreamCommandOutput extends DeleteMetricStreamOutput, __MetadataBearer {
}
/**
 * <p>Permanently deletes the metric stream that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteMetricStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMetricStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMetricStreamCommand extends $Command<DeleteMetricStreamCommandInput, DeleteMetricStreamCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DeleteMetricStreamCommandInput;
    constructor(input: DeleteMetricStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMetricStreamCommandInput, DeleteMetricStreamCommandOutput>;
    private serialize;
    private deserialize;
}
