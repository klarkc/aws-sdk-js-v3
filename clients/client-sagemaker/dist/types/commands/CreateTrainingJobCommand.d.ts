import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateTrainingJobRequest, CreateTrainingJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTrainingJobCommandInput extends CreateTrainingJobRequest {
}
export interface CreateTrainingJobCommandOutput extends CreateTrainingJobResponse, __MetadataBearer {
}
/**
 * <p>Starts a model training job. After training completes, Amazon SageMaker saves the resulting
 *             model artifacts to an Amazon S3 location that you specify. </p>
 *         <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the
 *             resulting model artifacts as part of the model. You can also use the artifacts in a
 *             machine learning service other than Amazon SageMaker, provided that you know how to use them for
 *             inference.
 *
 *         </p>
 *         <p>In the request body, you provide the following: </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>AlgorithmSpecification</code> - Identifies the training algorithm to
 *                     use.
 *                     </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>HyperParameters</code> - Specify these algorithm-specific parameters to
 *                     enable the estimation of model parameters during training. Hyperparameters can
 *                     be tuned to optimize this learning process. For a list of hyperparameters for
 *                     each training algorithm provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>InputDataConfig</code> - Describes the training dataset and the Amazon S3,
 *                     EFS, or FSx location where it is stored.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want
 *                     Amazon SageMaker to save the results of model training. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ResourceConfig</code> - Identifies the resources, ML compute
 *                     instances, and ML storage volumes to deploy for model training. In distributed
 *                     training, you specify more than one instance. </p>
 *
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine
 *                     learning models by up to 80% by using Amazon EC2 Spot instances. For more
 *                     information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot
 *                         Training</a>. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RoleArn</code> - The Amazon Resource Name (ARN) that Amazon SageMaker assumes to perform tasks on
 *                     your behalf during model training.
 *
 *                     You must grant this role the necessary permissions so that Amazon SageMaker can successfully
 *                     complete model training. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>StoppingCondition</code> - To help cap training costs, use
 *                         <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use
 *                         <code>MaxWaitTimeInSeconds</code> to specify how long
 *                         a managed spot training job has to complete. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>Environment</code> - The environment variables to set in the Docker container.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RetryStrategy</code> - The number of times to retry the job when the
 *                     job fails due to an <code>InternalServerError</code>.</p>
 *             </li>
 *          </ul>
 *         <p> For more information about Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateTrainingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrainingJobCommandInput} for command's `input` shape.
 * @see {@link CreateTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTrainingJobCommand extends $Command<CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateTrainingJobCommandInput;
    constructor(input: CreateTrainingJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput>;
    private serialize;
    private deserialize;
}
