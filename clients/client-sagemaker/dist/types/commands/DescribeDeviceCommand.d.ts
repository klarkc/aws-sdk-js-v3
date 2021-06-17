import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeDeviceRequest, DescribeDeviceResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDeviceCommandInput extends DescribeDeviceRequest {
}
export interface DescribeDeviceCommandOutput extends DescribeDeviceResponse, __MetadataBearer {
}
/**
 * <p>Describes the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeDeviceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeDeviceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDeviceCommand extends $Command<DescribeDeviceCommandInput, DescribeDeviceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeDeviceCommandInput;
    constructor(input: DescribeDeviceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDeviceCommandInput, DescribeDeviceCommandOutput>;
    private serialize;
    private deserialize;
}
