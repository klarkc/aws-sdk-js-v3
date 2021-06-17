import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateModelPackageInput, CreateModelPackageOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateModelPackageCommandInput extends CreateModelPackageInput {
}
export interface CreateModelPackageCommandOutput extends CreateModelPackageOutput, __MetadataBearer {
}
/**
 * <p>Creates a model package that you can use to create Amazon SageMaker models or list on AWS
 *             Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to
 *             model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p>
 *         <p>To create a model package by specifying a Docker container that contains your
 *             inference code and the Amazon S3 location of your model artifacts, provide values for
 *                 <code>InferenceSpecification</code>. To create a model from an algorithm resource
 *             that you created or subscribed to in AWS Marketplace, provide a value for
 *                 <code>SourceAlgorithmSpecification</code>.</p>
 *         <note>
 *             <p>There are two types of model packages:</p>
 *             <ul>
 *                <li>
 *                     <p>Versioned - a model that is part of a model group in the model
 *                         registry.</p>
 *                 </li>
 *                <li>
 *                     <p>Unversioned - a model package that is not part of a model group.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelPackageCommandInput} for command's `input` shape.
 * @see {@link CreateModelPackageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateModelPackageCommand extends $Command<CreateModelPackageCommandInput, CreateModelPackageCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateModelPackageCommandInput;
    constructor(input: CreateModelPackageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateModelPackageCommandInput, CreateModelPackageCommandOutput>;
    private serialize;
    private deserialize;
}
