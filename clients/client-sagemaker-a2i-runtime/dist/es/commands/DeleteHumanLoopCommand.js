import { __extends } from "tslib";
import { DeleteHumanLoopRequest, DeleteHumanLoopResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteHumanLoopCommand, serializeAws_restJson1DeleteHumanLoopCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified human loop for a flow definition.</p>
 *          <p>If the human loop was deleted, this operation will return a
 *         <code>ResourceNotFoundException</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, DeleteHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, DeleteHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new DeleteHumanLoopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHumanLoopCommandInput} for command's `input` shape.
 * @see {@link DeleteHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteHumanLoopCommand = /** @class */ (function (_super) {
    __extends(DeleteHumanLoopCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteHumanLoopCommand(input) {
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
    DeleteHumanLoopCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerA2IRuntimeClient";
        var commandName = "DeleteHumanLoopCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteHumanLoopRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteHumanLoopResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteHumanLoopCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteHumanLoopCommand(input, context);
    };
    DeleteHumanLoopCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteHumanLoopCommand(output, context);
    };
    return DeleteHumanLoopCommand;
}($Command));
export { DeleteHumanLoopCommand };
//# sourceMappingURL=DeleteHumanLoopCommand.js.map