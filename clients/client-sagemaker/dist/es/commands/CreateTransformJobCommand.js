import { __extends } from "tslib";
import { CreateTransformJobRequest, CreateTransformJobResponse } from "../models/models_1";
import { deserializeAws_json1_1CreateTransformJobCommand, serializeAws_json1_1CreateTransformJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a transform job. A transform job uses a trained model to get inferences on a
 *             dataset and saves these results to an Amazon S3 location that you specify.</p>
 *         <p>To perform batch transformations, you create a transform job and use the data that you
 *             have readily available.</p>
 *         <p>In the request body, you provide the following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>TransformJobName</code> - Identifies the transform job. The name must be
 *                     unique within an AWS Region in an AWS account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ModelName</code> - Identifies the model to use. <code>ModelName</code>
 *                     must be the name of an existing Amazon SageMaker model in the same AWS Region and AWS
 *                     account. For information on creating a model, see <a>CreateModel</a>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>TransformInput</code> - Describes the dataset to be transformed and the
 *                     Amazon S3 location where it is stored.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>TransformOutput</code> - Identifies the Amazon S3 location where you want
 *                     Amazon SageMaker to save the results from the transform job.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>TransformResources</code> - Identifies the ML compute instances for the
 *                     transform job.</p>
 *             </li>
 *          </ul>
 *         <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch
 *                 Transform</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTransformJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTransformJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateTransformJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransformJobCommandInput} for command's `input` shape.
 * @see {@link CreateTransformJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTransformJobCommand = /** @class */ (function (_super) {
    __extends(CreateTransformJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTransformJobCommand(input) {
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
    CreateTransformJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateTransformJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTransformJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTransformJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTransformJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateTransformJobCommand(input, context);
    };
    CreateTransformJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateTransformJobCommand(output, context);
    };
    return CreateTransformJobCommand;
}($Command));
export { CreateTransformJobCommand };
//# sourceMappingURL=CreateTransformJobCommand.js.map