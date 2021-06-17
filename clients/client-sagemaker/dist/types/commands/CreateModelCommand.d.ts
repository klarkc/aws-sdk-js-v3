import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateModelInput, CreateModelOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateModelCommandInput extends CreateModelInput {
}
export interface CreateModelCommandOutput extends CreateModelOutput, __MetadataBearer {
}
/**
 * <p>Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary
 *             container. For the primary container,
 *             you specify the Docker image that contains inference code, artifacts (from prior
 *             training), and a custom environment map that the inference code uses when you deploy the
 *             model for predictions.</p>
 *         <p>Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch
 *             transform job.</p>
 *         <p>To host your model, you create an endpoint configuration with the
 *                 <code>CreateEndpointConfig</code> API, and then create an endpoint with the
 *                 <code>CreateEndpoint</code> API. Amazon SageMaker then deploys all of the containers that you
 *             defined for the model in the hosting environment. </p>
 *         <p>For an example that calls this method when deploying a model to Amazon SageMaker hosting services,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html#ex1-deploy-model-boto">Deploy the
 *                 Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto
 *             3)).</a>
 *          </p>
 *         <p>To run a batch transform using your model, you start a job with the
 *                 <code>CreateTransformJob</code> API. Amazon SageMaker uses your model and your dataset to get
 *             inferences which are then saved to a specified S3 location.</p>
 *         <p>In the <code>CreateModel</code> request, you must define a container with the
 *                 <code>PrimaryContainer</code> parameter.</p>
 *         <p>In the request, you also provide an IAM role that Amazon SageMaker can assume to access model
 *             artifacts and docker image for deployment on ML compute hosting instances or for batch
 *             transform jobs. In addition, you also use the IAM role to manage permissions the
 *             inference code needs. For example, if the inference code access any other AWS resources,
 *             you grant necessary permissions via this role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateModelCommand extends $Command<CreateModelCommandInput, CreateModelCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateModelCommandInput;
    constructor(input: CreateModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateModelCommandInput, CreateModelCommandOutput>;
    private serialize;
    private deserialize;
}
