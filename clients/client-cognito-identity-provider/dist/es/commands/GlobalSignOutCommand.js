import { __extends } from "tslib";
import { GlobalSignOutRequest, GlobalSignOutResponse } from "../models/models_0";
import { deserializeAws_json1_1GlobalSignOutCommand, serializeAws_json1_1GlobalSignOutCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Signs out users from all devices. It also invalidates all refresh tokens issued to a
 *             user. The user's current access and Id tokens remain valid until their expiry. Access
 *             and Id tokens expire one hour after they are issued.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GlobalSignOutCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new GlobalSignOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GlobalSignOutCommandInput} for command's `input` shape.
 * @see {@link GlobalSignOutCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GlobalSignOutCommand = /** @class */ (function (_super) {
    __extends(GlobalSignOutCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GlobalSignOutCommand(input) {
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
    GlobalSignOutCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "GlobalSignOutCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GlobalSignOutRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GlobalSignOutResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GlobalSignOutCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GlobalSignOutCommand(input, context);
    };
    GlobalSignOutCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GlobalSignOutCommand(output, context);
    };
    return GlobalSignOutCommand;
}($Command));
export { GlobalSignOutCommand };
//# sourceMappingURL=GlobalSignOutCommand.js.map