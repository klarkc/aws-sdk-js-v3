import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeModelPackageInput, DescribeModelPackageOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeModelPackageCommandInput extends DescribeModelPackageInput {
}
export interface DescribeModelPackageCommandOutput extends DescribeModelPackageOutput, __MetadataBearer {
}
/**
 * <p>Returns a description of the specified model package, which is used to create Amazon SageMaker
 *             models or list them on AWS Marketplace.</p>
 *         <p>To create models in Amazon SageMaker, buyers can subscribe to model packages listed on AWS
 *             Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeModelPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelPackageCommandInput} for command's `input` shape.
 * @see {@link DescribeModelPackageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeModelPackageCommand extends $Command<DescribeModelPackageCommandInput, DescribeModelPackageCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeModelPackageCommandInput;
    constructor(input: DescribeModelPackageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeModelPackageCommandInput, DescribeModelPackageCommandOutput>;
    private serialize;
    private deserialize;
}
