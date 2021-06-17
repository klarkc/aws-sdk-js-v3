import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { UpdatePipelineRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePipelineCommandInput extends UpdatePipelineRequest {
}
export interface UpdatePipelineCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates the settings of a pipeline. You must specify both a <code>channel</code> and a
 *         <code>datastore</code> activity and, optionally, as many as 23 additional activities in the
 *         <code>pipelineActivities</code> array.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, UpdatePipelineCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, UpdatePipelineCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePipelineCommand extends $Command<UpdatePipelineCommandInput, UpdatePipelineCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: UpdatePipelineCommandInput;
    constructor(input: UpdatePipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePipelineCommandInput, UpdatePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
