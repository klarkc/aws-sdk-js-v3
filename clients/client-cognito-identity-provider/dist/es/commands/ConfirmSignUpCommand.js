import { __extends } from "tslib";
import { ConfirmSignUpRequest, ConfirmSignUpResponse } from "../models/models_0";
import { deserializeAws_json1_1ConfirmSignUpCommand, serializeAws_json1_1ConfirmSignUpCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Confirms registration of a user and handles the existing alias from a previous
 *             user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ConfirmSignUpCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ConfirmSignUpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmSignUpCommandInput} for command's `input` shape.
 * @see {@link ConfirmSignUpCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfirmSignUpCommand = /** @class */ (function (_super) {
    __extends(ConfirmSignUpCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfirmSignUpCommand(input) {
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
    ConfirmSignUpCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "ConfirmSignUpCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfirmSignUpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfirmSignUpResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfirmSignUpCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ConfirmSignUpCommand(input, context);
    };
    ConfirmSignUpCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ConfirmSignUpCommand(output, context);
    };
    return ConfirmSignUpCommand;
}($Command));
export { ConfirmSignUpCommand };
//# sourceMappingURL=ConfirmSignUpCommand.js.map