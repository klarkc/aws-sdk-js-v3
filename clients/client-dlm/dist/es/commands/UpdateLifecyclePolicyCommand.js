import { __extends } from "tslib";
import { UpdateLifecyclePolicyRequest, UpdateLifecyclePolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateLifecyclePolicyCommand, serializeAws_restJson1UpdateLifecyclePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified lifecycle policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, UpdateLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, UpdateLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new UpdateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLifecyclePolicyCommand = /** @class */ (function (_super) {
    __extends(UpdateLifecyclePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLifecyclePolicyCommand(input) {
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
    UpdateLifecyclePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DLMClient";
        var commandName = "UpdateLifecyclePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLifecyclePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLifecyclePolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLifecyclePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateLifecyclePolicyCommand(input, context);
    };
    UpdateLifecyclePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateLifecyclePolicyCommand(output, context);
    };
    return UpdateLifecyclePolicyCommand;
}($Command));
export { UpdateLifecyclePolicyCommand };
//# sourceMappingURL=UpdateLifecyclePolicyCommand.js.map