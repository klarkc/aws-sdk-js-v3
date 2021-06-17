import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateCompilationJobRequest, CreateCompilationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCompilationJobCommandInput extends CreateCompilationJobRequest {
}
export interface CreateCompilationJobCommandOutput extends CreateCompilationJobResponse, __MetadataBearer {
}
/**
 * <p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the
 *             resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p>
 *         <p>If
 *             you choose to host your model using Amazon SageMaker hosting services, you can use the resulting
 *             model artifacts as part of the model. You can also use the artifacts with
 *             AWS
 *             IoT Greengrass. In that case, deploy them as an ML
 *             resource.</p>
 *         <p>In the request body, you provide the following:</p>
 *         <ul>
 *             <li>
 *                 <p>A name for the compilation job</p>
 *             </li>
 *             <li>
 *                 <p> Information about the input model artifacts </p>
 *             </li>
 *             <li>
 *                 <p>The output location for the compiled model and the device (target) that the
 *                     model runs on </p>
 *             </li>
 *             <li>
 *                 <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform
 *                     the model compilation job. </p>
 *             </li>
 *          </ul>
 *         <p>You can also provide a <code>Tag</code> to track the model compilation job's resource
 *             use and costs. The response body contains the
 *                 <code>CompilationJobArn</code>
 *             for the compiled job.</p>
 *         <p>To stop a model compilation job, use <a>StopCompilationJob</a>. To get
 *             information about a particular model compilation job, use <a>DescribeCompilationJob</a>. To get information about multiple model
 *             compilation jobs, use <a>ListCompilationJobs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateCompilationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateCompilationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateCompilationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCompilationJobCommandInput} for command's `input` shape.
 * @see {@link CreateCompilationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCompilationJobCommand extends $Command<CreateCompilationJobCommandInput, CreateCompilationJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateCompilationJobCommandInput;
    constructor(input: CreateCompilationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCompilationJobCommandInput, CreateCompilationJobCommandOutput>;
    private serialize;
    private deserialize;
}
