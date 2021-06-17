import { __extends } from "tslib";
import { DeleteModelBiasJobDefinitionRequest } from "../models/models_1";
import { deserializeAws_json1_1DeleteModelBiasJobDefinitionCommand, serializeAws_json1_1DeleteModelBiasJobDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an Amazon SageMaker model bias job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelBiasJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelBiasJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteModelBiasJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelBiasJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteModelBiasJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteModelBiasJobDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteModelBiasJobDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteModelBiasJobDefinitionCommand(input) {
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
    DeleteModelBiasJobDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteModelBiasJobDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteModelBiasJobDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteModelBiasJobDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteModelBiasJobDefinitionCommand(input, context);
    };
    DeleteModelBiasJobDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteModelBiasJobDefinitionCommand(output, context);
    };
    return DeleteModelBiasJobDefinitionCommand;
}($Command));
export { DeleteModelBiasJobDefinitionCommand };
//# sourceMappingURL=DeleteModelBiasJobDefinitionCommand.js.map