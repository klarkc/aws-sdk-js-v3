import { __extends } from "tslib";
import { SignUpRequest, SignUpResponse } from "../models/models_0";
import { deserializeAws_json1_1SignUpCommand, serializeAws_json1_1SignUpCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers the user in the specified user pool and creates a user name, password, and
 *             user attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SignUpCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SignUpCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new SignUpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignUpCommandInput} for command's `input` shape.
 * @see {@link SignUpCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SignUpCommand = /** @class */ (function (_super) {
    __extends(SignUpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SignUpCommand(input) {
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
    SignUpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "SignUpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SignUpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SignUpResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SignUpCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SignUpCommand(input, context);
    };
    SignUpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SignUpCommand(output, context);
    };
    return SignUpCommand;
}($Command));
export { SignUpCommand };
//# sourceMappingURL=SignUpCommand.js.map