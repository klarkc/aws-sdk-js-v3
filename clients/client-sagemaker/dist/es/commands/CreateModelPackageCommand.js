import { __extends } from "tslib";
import { CreateModelPackageInput, CreateModelPackageOutput } from "../models/models_1";
import { deserializeAws_json1_1CreateModelPackageCommand, serializeAws_json1_1CreateModelPackageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateModelPackageCommand = /** @class */ (function (_super) {
    __extends(CreateModelPackageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateModelPackageCommand(input) {
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
    CreateModelPackageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateModelPackageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateModelPackageInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateModelPackageOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateModelPackageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateModelPackageCommand(input, context);
    };
    CreateModelPackageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateModelPackageCommand(output, context);
    };
    return CreateModelPackageCommand;
}($Command));
export { CreateModelPackageCommand };
//# sourceMappingURL=CreateModelPackageCommand.js.map