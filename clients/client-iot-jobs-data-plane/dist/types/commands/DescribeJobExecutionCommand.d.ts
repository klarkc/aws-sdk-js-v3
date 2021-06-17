import { IoTJobsDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTJobsDataPlaneClient";
import { DescribeJobExecutionRequest, DescribeJobExecutionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeJobExecutionCommandInput extends DescribeJobExecutionRequest {
}
export interface DescribeJobExecutionCommandOutput extends DescribeJobExecutionResponse, __MetadataBearer {
}
/**
 * <p>Gets details of a job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTJobsDataPlaneClient, DescribeJobExecutionCommand } from "@aws-sdk/client-iot-jobs-data-plane"; // ES Modules import
 * // const { IoTJobsDataPlaneClient, DescribeJobExecutionCommand } = require("@aws-sdk/client-iot-jobs-data-plane"); // CommonJS import
 * const client = new IoTJobsDataPlaneClient(config);
 * const command = new DescribeJobExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTJobsDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeJobExecutionCommand extends $Command<DescribeJobExecutionCommandInput, DescribeJobExecutionCommandOutput, IoTJobsDataPlaneClientResolvedConfig> {
    readonly input: DescribeJobExecutionCommandInput;
    constructor(input: DescribeJobExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTJobsDataPlaneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeJobExecutionCommandInput, DescribeJobExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
