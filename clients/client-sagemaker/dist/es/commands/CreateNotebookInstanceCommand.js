import { __extends } from "tslib";
import { CreateNotebookInstanceInput, CreateNotebookInstanceOutput } from "../models/models_1";
import { deserializeAws_json1_1CreateNotebookInstanceCommand, serializeAws_json1_1CreateNotebookInstanceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML)
 *             compute instance running on a Jupyter notebook. </p>
 *         <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute
 *             instance that you want to run. Amazon SageMaker launches the instance, installs common libraries
 *             that you can use to explore datasets for model training, and attaches an ML storage
 *             volume to the notebook instance. </p>
 *         <p>Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to
 *             use Amazon SageMaker with a specific algorithm or with a machine learning framework. </p>
 *         <p>After receiving the request, Amazon SageMaker does the following:</p>
 *         <ol>
 *             <li>
 *                 <p>Creates a network interface in the Amazon SageMaker VPC.</p>
 *             </li>
 *             <li>
 *                 <p>(Option) If you specified <code>SubnetId</code>, Amazon SageMaker creates a network
 *                     interface in your own VPC, which is inferred from the subnet ID that you provide
 *                     in the input. When creating this network interface, Amazon SageMaker attaches the security
 *                     group that you specified in the request to the network interface that it creates
 *                     in your VPC.</p>
 *
 *             </li>
 *             <li>
 *                 <p>Launches an EC2 instance of the type specified in the request in the Amazon SageMaker
 *                     VPC. If you specified <code>SubnetId</code> of your VPC, Amazon SageMaker specifies both
 *                     network interfaces when launching this instance. This enables inbound traffic
 *                     from your own VPC to the notebook instance, assuming that the security groups
 *                     allow it.</p>
 *             </li>
 *          </ol>
 *
 *         <p>After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN).
 *             You can't change the name of a notebook instance after you create it.</p>
 *         <p>After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and
 *             work in Jupyter notebooks. For example, you can write code to explore a dataset that you
 *             can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and
 *             validate hosted models. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNotebookInstanceCommand = /** @class */ (function (_super) {
    __extends(CreateNotebookInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateNotebookInstanceCommand(input) {
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
    CreateNotebookInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateNotebookInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateNotebookInstanceInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateNotebookInstanceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateNotebookInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateNotebookInstanceCommand(input, context);
    };
    CreateNotebookInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateNotebookInstanceCommand(output, context);
    };
    return CreateNotebookInstanceCommand;
}($Command));
export { CreateNotebookInstanceCommand };
//# sourceMappingURL=CreateNotebookInstanceCommand.js.map