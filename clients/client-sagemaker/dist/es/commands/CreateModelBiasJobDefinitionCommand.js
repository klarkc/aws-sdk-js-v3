import { __extends } from "tslib";
import { CreateModelBiasJobDefinitionRequest, CreateModelBiasJobDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateModelBiasJobDefinitionCommand, serializeAws_json1_1CreateModelBiasJobDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the definition for a model bias job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelBiasJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelBiasJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateModelBiasJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelBiasJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateModelBiasJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateModelBiasJobDefinitionCommand = /** @class */ (function (_super) {
    __extends(CreateModelBiasJobDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateModelBiasJobDefinitionCommand(input) {
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
    CreateModelBiasJobDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateModelBiasJobDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateModelBiasJobDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateModelBiasJobDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateModelBiasJobDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateModelBiasJobDefinitionCommand(input, context);
    };
    CreateModelBiasJobDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateModelBiasJobDefinitionCommand(output, context);
    };
    return CreateModelBiasJobDefinitionCommand;
}($Command));
export { CreateModelBiasJobDefinitionCommand };
//# sourceMappingURL=CreateModelBiasJobDefinitionCommand.js.map