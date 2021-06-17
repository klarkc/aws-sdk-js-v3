import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeImageRequest, DescribeImageResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeImageCommandInput extends DescribeImageRequest {
}
export interface DescribeImageCommandOutput extends DescribeImageResponse, __MetadataBearer {
}
/**
 * <p>Describes a SageMaker image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeImageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeImageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageCommandInput} for command's `input` shape.
 * @see {@link DescribeImageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeImageCommand extends $Command<DescribeImageCommandInput, DescribeImageCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeImageCommandInput;
    constructor(input: DescribeImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImageCommandInput, DescribeImageCommandOutput>;
    private serialize;
    private deserialize;
}
