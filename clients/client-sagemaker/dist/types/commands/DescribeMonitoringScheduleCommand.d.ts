import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeMonitoringScheduleRequest, DescribeMonitoringScheduleResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMonitoringScheduleCommandInput extends DescribeMonitoringScheduleRequest {
}
export interface DescribeMonitoringScheduleCommandOutput extends DescribeMonitoringScheduleResponse, __MetadataBearer {
}
/**
 * <p>Describes the schedule for a monitoring job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMonitoringScheduleCommand extends $Command<DescribeMonitoringScheduleCommandInput, DescribeMonitoringScheduleCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeMonitoringScheduleCommandInput;
    constructor(input: DescribeMonitoringScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMonitoringScheduleCommandInput, DescribeMonitoringScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
