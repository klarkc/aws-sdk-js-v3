import { __extends } from "tslib";
import { deserializeAws_queryDeleteAccountPasswordPolicyCommand, serializeAws_queryDeleteAccountPasswordPolicyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the password policy for the AWS account. There are no parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccountPasswordPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteAccountPasswordPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccountPasswordPolicyCommand(input) {
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
    DeleteAccountPasswordPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteAccountPasswordPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccountPasswordPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteAccountPasswordPolicyCommand(input, context);
    };
    DeleteAccountPasswordPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteAccountPasswordPolicyCommand(output, context);
    };
    return DeleteAccountPasswordPolicyCommand;
}($Command));
export { DeleteAccountPasswordPolicyCommand };
//# sourceMappingURL=DeleteAccountPasswordPolicyCommand.js.map