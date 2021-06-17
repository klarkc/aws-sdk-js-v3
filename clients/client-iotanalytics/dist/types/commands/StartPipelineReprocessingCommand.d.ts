import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { StartPipelineReprocessingRequest, StartPipelineReprocessingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartPipelineReprocessingCommandInput extends StartPipelineReprocessingRequest {
}
export interface StartPipelineReprocessingCommandOutput extends StartPipelineReprocessingResponse, __MetadataBearer {
}
/**
 * <p>Starts the reprocessing of raw message data through the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, StartPipelineReprocessingCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, StartPipelineReprocessingCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new StartPipelineReprocessingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPipelineReprocessingCommandInput} for command's `input` shape.
 * @see {@link StartPipelineReprocessingCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartPipelineReprocessingCommand extends $Command<StartPipelineReprocessingCommandInput, StartPipelineReprocessingCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: StartPipelineReprocessingCommandInput;
    constructor(input: StartPipelineReprocessingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartPipelineReprocessingCommandInput, StartPipelineReprocessingCommandOutput>;
    private serialize;
    private deserialize;
}
