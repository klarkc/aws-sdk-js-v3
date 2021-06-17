import { __extends } from "tslib";
import { AdminCreateUserRequest, AdminCreateUserResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminCreateUserCommand, serializeAws_json1_1AdminCreateUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new user in the specified user pool.</p>
 *         <p>If <code>MessageAction</code> is not set, the default is to send a welcome message via
 *             email or phone (SMS).</p>
 *         <p>This message is based on a template that you configured in your call to create or
 *             update a user pool. This template includes your custom sign-up instructions and
 *             placeholders for user name and temporary password.</p>
 *         <p>Alternatively, you can call <code>AdminCreateUser</code> with “SUPPRESS” for the
 *                 <code>MessageAction</code> parameter, and Amazon Cognito will not send any email. </p>
 *         <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until
 *             they sign in and change their password.</p>
 *         <p>
 *             <code>AdminCreateUser</code> requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminCreateUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminCreateUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminCreateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminCreateUserCommandInput} for command's `input` shape.
 * @see {@link AdminCreateUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminCreateUserCommand = /** @class */ (function (_super) {
    __extends(AdminCreateUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminCreateUserCommand(input) {
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
    AdminCreateUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminCreateUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminCreateUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminCreateUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminCreateUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminCreateUserCommand(input, context);
    };
    AdminCreateUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminCreateUserCommand(output, context);
    };
    return AdminCreateUserCommand;
}($Command));
export { AdminCreateUserCommand };
//# sourceMappingURL=AdminCreateUserCommand.js.map