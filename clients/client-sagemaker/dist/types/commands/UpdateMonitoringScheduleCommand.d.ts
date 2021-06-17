import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateMonitoringScheduleRequest, UpdateMonitoringScheduleResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMonitoringScheduleCommandInput extends UpdateMonitoringScheduleRequest {
}
export interface UpdateMonitoringScheduleCommandOutput extends UpdateMonitoringScheduleResponse, __MetadataBearer {
}
/**
 * <p>Updates a previously created schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMonitoringScheduleCommand extends $Command<UpdateMonitoringScheduleCommandInput, UpdateMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateMonitoringScheduleCommandInput;
    constructor(input: UpdateMonitoringScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMonitoringScheduleCommandInput, UpdateMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
