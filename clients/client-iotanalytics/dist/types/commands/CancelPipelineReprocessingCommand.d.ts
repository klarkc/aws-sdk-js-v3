import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { CancelPipelineReprocessingRequest, CancelPipelineReprocessingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelPipelineReprocessingCommandInput extends CancelPipelineReprocessingRequest {
}
export interface CancelPipelineReprocessingCommandOutput extends CancelPipelineReprocessingResponse, __MetadataBearer {
}
/**
 * <p>Cancels the reprocessing of data through the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CancelPipelineReprocessingCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CancelPipelineReprocessingCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new CancelPipelineReprocessingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelPipelineReprocessingCommandInput} for command's `input` shape.
 * @see {@link CancelPipelineReprocessingCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelPipelineReprocessingCommand extends $Command<CancelPipelineReprocessingCommandInput, CancelPipelineReprocessingCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: CancelPipelineReprocessingCommandInput;
    constructor(input: CancelPipelineReprocessingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelPipelineReprocessingCommandInput, CancelPipelineReprocessingCommandOutput>;
    private serialize;
    private deserialize;
}
