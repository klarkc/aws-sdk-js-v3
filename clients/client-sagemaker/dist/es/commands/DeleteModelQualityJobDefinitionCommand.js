import { __extends } from "tslib";
import { DeleteModelQualityJobDefinitionRequest } from "../models/models_1";
import { deserializeAws_json1_1DeleteModelQualityJobDefinitionCommand, serializeAws_json1_1DeleteModelQualityJobDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the secified model quality monitoring job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelQualityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelQualityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteModelQualityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelQualityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteModelQualityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteModelQualityJobDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteModelQualityJobDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteModelQualityJobDefinitionCommand(input) {
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
    DeleteModelQualityJobDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteModelQualityJobDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteModelQualityJobDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteModelQualityJobDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteModelQualityJobDefinitionCommand(input, context);
    };
    DeleteModelQualityJobDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteModelQualityJobDefinitionCommand(output, context);
    };
    return DeleteModelQualityJobDefinitionCommand;
}($Command));
export { DeleteModelQualityJobDefinitionCommand };
//# sourceMappingURL=DeleteModelQualityJobDefinitionCommand.js.map