import { __extends } from "tslib";
import { DeletePolicyRequest } from "../models/models_0";
import { deserializeAws_restJson1DeletePolicyCommand, serializeAws_restJson1DeletePolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified policy.</p>
 *          <p>A policy cannot be deleted if it has non-default versions or it is attached to any
 *          certificate.</p>
 *          <p>To delete a policy, use the DeletePolicyVersion API to delete all non-default
 *          versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any
 *          certificate; and then use the DeletePolicy API to delete the policy.</p>
 *          <p>When a policy is deleted using DeletePolicy, its default version is deleted with
 *          it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeletePolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeletePolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePolicyCommand = /** @class */ (function (_super) {
    __extends(DeletePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePolicyCommand(input) {
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
    DeletePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeletePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePolicyCommand(input, context);
    };
    DeletePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePolicyCommand(output, context);
    };
    return DeletePolicyCommand;
}($Command));
export { DeletePolicyCommand };
//# sourceMappingURL=DeletePolicyCommand.js.map