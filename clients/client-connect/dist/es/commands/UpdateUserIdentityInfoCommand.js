import { __extends } from "tslib";
import { UpdateUserIdentityInfoRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateUserIdentityInfoCommand, serializeAws_restJson1UpdateUserIdentityInfoCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the identity information for the specified user.</p>
 *          <important>
 *             <p>We strongly recommend limiting who has the ability to invoke
 *      <code>UpdateUserIdentityInfo</code>. Someone with that ability can change the login credentials
 *     of other users by changing their email address. This poses a security risk to your organization.
 *     They can change the email address of a user to the attacker's email address, and then reset the
 *     password through email. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best Practices for
 *      Security Profiles</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserIdentityInfoCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserIdentityInfoCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserIdentityInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserIdentityInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateUserIdentityInfoCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserIdentityInfoCommand = /** @class */ (function (_super) {
    __extends(UpdateUserIdentityInfoCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserIdentityInfoCommand(input) {
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
    UpdateUserIdentityInfoCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateUserIdentityInfoCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserIdentityInfoRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserIdentityInfoCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateUserIdentityInfoCommand(input, context);
    };
    UpdateUserIdentityInfoCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateUserIdentityInfoCommand(output, context);
    };
    return UpdateUserIdentityInfoCommand;
}($Command));
export { UpdateUserIdentityInfoCommand };
//# sourceMappingURL=UpdateUserIdentityInfoCommand.js.map