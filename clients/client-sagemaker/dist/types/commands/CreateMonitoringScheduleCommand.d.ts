import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateMonitoringScheduleRequest, CreateMonitoringScheduleResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateMonitoringScheduleCommandInput extends CreateMonitoringScheduleRequest {
}
export interface CreateMonitoringScheduleCommandOutput extends CreateMonitoringScheduleResponse, __MetadataBearer {
}
/**
 * <p>Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data
 *          captured for an Amazon SageMaker Endoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateMonitoringScheduleCommand extends $Command<CreateMonitoringScheduleCommandInput, CreateMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateMonitoringScheduleCommandInput;
    constructor(input: CreateMonitoringScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMonitoringScheduleCommandInput, CreateMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
