import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeImageVersionRequest, DescribeImageVersionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeImageVersionCommandInput extends DescribeImageVersionRequest {
}
export interface DescribeImageVersionCommandOutput extends DescribeImageVersionResponse, __MetadataBearer {
}
/**
 * <p>Describes a version of a SageMaker image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeImageVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeImageVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeImageVersionCommand extends $Command<DescribeImageVersionCommandInput, DescribeImageVersionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeImageVersionCommandInput;
    constructor(input: DescribeImageVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImageVersionCommandInput, DescribeImageVersionCommandOutput>;
    private serialize;
    private deserialize;
}
