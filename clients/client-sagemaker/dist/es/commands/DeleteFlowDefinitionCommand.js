import { __extends } from "tslib";
import { DeleteFlowDefinitionRequest, DeleteFlowDefinitionResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteFlowDefinitionCommand, serializeAws_json1_1DeleteFlowDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified flow definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteFlowDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteFlowDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteFlowDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFlowDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFlowDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteFlowDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFlowDefinitionCommand(input) {
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
    DeleteFlowDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteFlowDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFlowDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFlowDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFlowDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFlowDefinitionCommand(input, context);
    };
    DeleteFlowDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFlowDefinitionCommand(output, context);
    };
    return DeleteFlowDefinitionCommand;
}($Command));
export { DeleteFlowDefinitionCommand };
//# sourceMappingURL=DeleteFlowDefinitionCommand.js.map