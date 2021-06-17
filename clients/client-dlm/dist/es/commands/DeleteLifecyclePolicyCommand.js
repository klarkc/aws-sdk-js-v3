import { __extends } from "tslib";
import { DeleteLifecyclePolicyRequest, DeleteLifecyclePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteLifecyclePolicyCommand, serializeAws_restJson1DeleteLifecyclePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified lifecycle policy and halts the automated operations that the
 * 			policy specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, DeleteLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, DeleteLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new DeleteLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLifecyclePolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteLifecyclePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLifecyclePolicyCommand(input) {
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
    DeleteLifecyclePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DLMClient";
        var commandName = "DeleteLifecyclePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLifecyclePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLifecyclePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLifecyclePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteLifecyclePolicyCommand(input, context);
    };
    DeleteLifecyclePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteLifecyclePolicyCommand(output, context);
    };
    return DeleteLifecyclePolicyCommand;
}($Command));
export { DeleteLifecyclePolicyCommand };
//# sourceMappingURL=DeleteLifecyclePolicyCommand.js.map