import { __extends } from "tslib";
import { CreateModelInput, CreateModelOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateModelCommand, serializeAws_json1_1CreateModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateModelCommand = /** @class */ (function (_super) {
    __extends(CreateModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateModelCommand(input) {
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
    CreateModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateModelInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateModelOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateModelCommand(input, context);
    };
    CreateModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateModelCommand(output, context);
    };
    return CreateModelCommand;
}($Command));
export { CreateModelCommand };
//# sourceMappingURL=CreateModelCommand.js.map