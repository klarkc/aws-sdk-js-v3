import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteMonitoringScheduleRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMonitoringScheduleCommandInput extends DeleteMonitoringScheduleRequest {
}
export interface DeleteMonitoringScheduleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a monitoring schedule. Also stops the schedule had not already been stopped.
 *          This does not delete the job execution history of the monitoring schedule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMonitoringScheduleCommand extends $Command<DeleteMonitoringScheduleCommandInput, DeleteMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteMonitoringScheduleCommandInput;
    constructor(input: DeleteMonitoringScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMonitoringScheduleCommandInput, DeleteMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
