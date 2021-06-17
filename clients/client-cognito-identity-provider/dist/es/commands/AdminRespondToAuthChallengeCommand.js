import { __extends } from "tslib";
import { AdminRespondToAuthChallengeRequest, AdminRespondToAuthChallengeResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminRespondToAuthChallengeCommand, serializeAws_json1_1AdminRespondToAuthChallengeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Responds to an authentication challenge, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminRespondToAuthChallengeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminRespondToAuthChallengeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminRespondToAuthChallengeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminRespondToAuthChallengeCommandInput} for command's `input` shape.
 * @see {@link AdminRespondToAuthChallengeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminRespondToAuthChallengeCommand = /** @class */ (function (_super) {
    __extends(AdminRespondToAuthChallengeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminRespondToAuthChallengeCommand(input) {
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
    AdminRespondToAuthChallengeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminRespondToAuthChallengeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminRespondToAuthChallengeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminRespondToAuthChallengeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminRespondToAuthChallengeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminRespondToAuthChallengeCommand(input, context);
    };
    AdminRespondToAuthChallengeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminRespondToAuthChallengeCommand(output, context);
    };
    return AdminRespondToAuthChallengeCommand;
}($Command));
export { AdminRespondToAuthChallengeCommand };
//# sourceMappingURL=AdminRespondToAuthChallengeCommand.js.map