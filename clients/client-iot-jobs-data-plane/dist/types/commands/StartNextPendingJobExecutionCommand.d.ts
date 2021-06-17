import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { StartNextPendingJobExecutionRequest, StartNextPendingJobExecutionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartNextPendingJobExecutionCommandInput extends StartNextPendingJobExecutionRequest {
}
export interface StartNextPendingJobExecutionCommandOutput extends StartNextPendingJobExecutionResponse, __MetadataBearer {
}
/**
 * <p>Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, StartNextPendingJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, StartNextPendingJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const command = new StartNextPendingJobExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNextPendingJobExecutionCommandInput} for command's `input` shape.
 * @see {@link StartNextPendingJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartNextPendingJobExecutionCommand extends $Command<StartNextPendingJobExecutionCommandInput, StartNextPendingJobExecutionCommandOutput, IoTJobsDataPlaneClientResolvedConfig> {
    readonly input: StartNextPendingJobExecutionCommandInput;
    constructor(input: StartNextPendingJobExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTJobsDataPlaneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartNextPendingJobExecutionCommandInput, StartNextPendingJobExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
