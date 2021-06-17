import { __extends } from "tslib";
import { CreateModelExplainabilityJobDefinitionRequest, CreateModelExplainabilityJobDefinitionResponse, } from "../models/models_0";
import { deserializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand, serializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the definition for a model explainability job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelExplainabilityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelExplainabilityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelExplainabilityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelExplainabilityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateModelExplainabilityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateModelExplainabilityJobDefinitionCommand = /** @class */ (function (_super) {
    __extends(CreateModelExplainabilityJobDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateModelExplainabilityJobDefinitionCommand(input) {
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
    CreateModelExplainabilityJobDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateModelExplainabilityJobDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateModelExplainabilityJobDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateModelExplainabilityJobDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateModelExplainabilityJobDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand(input, context);
    };
    CreateModelExplainabilityJobDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand(output, context);
    };
    return CreateModelExplainabilityJobDefinitionCommand;
}($Command));
export { CreateModelExplainabilityJobDefinitionCommand };
//# sourceMappingURL=CreateModelExplainabilityJobDefinitionCommand.js.map