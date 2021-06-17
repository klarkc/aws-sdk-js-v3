import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeTransformJobRequest, DescribeTransformJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTransformJobCommandInput extends DescribeTransformJobRequest {
}
export interface DescribeTransformJobCommandOutput extends DescribeTransformJobResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a transform job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTransformJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTransformJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeTransformJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTransformJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTransformJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTransformJobCommand extends $Command<DescribeTransformJobCommandInput, DescribeTransformJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeTransformJobCommandInput;
    constructor(input: DescribeTransformJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTransformJobCommandInput, DescribeTransformJobCommandOutput>;
    private serialize;
    private deserialize;
}
