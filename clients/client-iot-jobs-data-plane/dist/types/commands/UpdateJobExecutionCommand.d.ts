import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { UpdateJobExecutionRequest, UpdateJobExecutionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateJobExecutionCommandInput extends UpdateJobExecutionRequest {
}
export interface UpdateJobExecutionCommandOutput extends UpdateJobExecutionResponse, __MetadataBearer {
}
/**
 * <p>Updates the status of a job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, UpdateJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, UpdateJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const command = new UpdateJobExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdateJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateJobExecutionCommand extends $Command<UpdateJobExecutionCommandInput, UpdateJobExecutionCommandOutput, IoTJobsDataPlaneClientResolvedConfig> {
    readonly input: UpdateJobExecutionCommandInput;
    constructor(input: UpdateJobExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTJobsDataPlaneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateJobExecutionCommandInput, UpdateJobExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
