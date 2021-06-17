import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StartMonitoringScheduleRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMonitoringScheduleCommandInput extends StartMonitoringScheduleRequest {
}
export interface StartMonitoringScheduleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Starts a previously stopped monitoring schedule.</p>
 *          <note>
 *             <p>By default, when you successfully create a new schedule, the status of a monitoring
 *             schedule is <code>scheduled</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StartMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartMonitoringScheduleCommand extends $Command<StartMonitoringScheduleCommandInput, StartMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StartMonitoringScheduleCommandInput;
    constructor(input: StartMonitoringScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMonitoringScheduleCommandInput, StartMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
