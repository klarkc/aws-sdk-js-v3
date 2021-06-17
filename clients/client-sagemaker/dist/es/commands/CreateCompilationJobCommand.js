import { __extends } from "tslib";
import { CreateCompilationJobRequest, CreateCompilationJobResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateCompilationJobCommand, serializeAws_json1_1CreateCompilationJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateCompilationJobCommand = /** @class */ (function (_super) {
    __extends(CreateCompilationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCompilationJobCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateCompilationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateCompilationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCompilationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCompilationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCompilationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateCompilationJobCommand(input, context);
    };
    CreateCompilationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCompilationJobCommand(output, context);
    };
    return CreateCompilationJobCommand;
}($Command));
export { CreateCompilationJobCommand };
//# sourceMappingURL=CreateCompilationJobCommand.js.map