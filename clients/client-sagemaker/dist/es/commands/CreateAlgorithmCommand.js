import { __extends } from "tslib";
import { CreateAlgorithmInput, CreateAlgorithmOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateAlgorithmCommand, serializeAws_json1_1CreateAlgorithmCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS
 *             Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAlgorithmCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAlgorithmCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateAlgorithmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAlgorithmCommandInput} for command's `input` shape.
 * @see {@link CreateAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAlgorithmCommand = /** @class */ (function (_super) {
    __extends(CreateAlgorithmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAlgorithmCommand(input) {
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
    CreateAlgorithmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateAlgorithmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAlgorithmInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAlgorithmOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAlgorithmCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAlgorithmCommand(input, context);
    };
    CreateAlgorithmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAlgorithmCommand(output, context);
    };
    return CreateAlgorithmCommand;
}($Command));
export { CreateAlgorithmCommand };
//# sourceMappingURL=CreateAlgorithmCommand.js.map