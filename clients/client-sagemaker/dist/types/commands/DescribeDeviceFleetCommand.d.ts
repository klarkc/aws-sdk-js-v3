import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeDeviceFleetRequest, DescribeDeviceFleetResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDeviceFleetCommandInput extends DescribeDeviceFleetRequest {
}
export interface DescribeDeviceFleetCommandOutput extends DescribeDeviceFleetResponse, __MetadataBearer {
}
/**
 * <p>A description of the fleet the device belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeDeviceFleetCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeDeviceFleetCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeDeviceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeviceFleetCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceFleetCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDeviceFleetCommand extends $Command<DescribeDeviceFleetCommandInput, DescribeDeviceFleetCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeDeviceFleetCommandInput;
    constructor(input: DescribeDeviceFleetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeviceFleetCommandInput, DescribeDeviceFleetCommandOutput>;
    private serialize;
    private deserialize;
}
