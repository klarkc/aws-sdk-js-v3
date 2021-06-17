import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { RunPipelineActivityRequest, RunPipelineActivityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RunPipelineActivityCommandInput extends RunPipelineActivityRequest {
}
export interface RunPipelineActivityCommandOutput extends RunPipelineActivityResponse, __MetadataBearer {
}
/**
 * <p>Simulates the results of running a pipeline activity on a message payload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, RunPipelineActivityCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, RunPipelineActivityCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new RunPipelineActivityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RunPipelineActivityCommandInput} for command's `input` shape.
 * @see {@link RunPipelineActivityCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RunPipelineActivityCommand extends $Command<RunPipelineActivityCommandInput, RunPipelineActivityCommandOutput, IoTAnalyticsClientResolvedConfig> {
    readonly input: RunPipelineActivityCommandInput;
    constructor(input: RunPipelineActivityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RunPipelineActivityCommandInput, RunPipelineActivityCommandOutput>;
    private serialize;
    private deserialize;
}
