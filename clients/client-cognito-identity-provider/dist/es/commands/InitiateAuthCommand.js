import { __extends } from "tslib";
import { InitiateAuthRequest, InitiateAuthResponse } from "../models/models_0";
import { deserializeAws_json1_1InitiateAuthCommand, serializeAws_json1_1InitiateAuthCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates the authentication flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, InitiateAuthCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new InitiateAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateAuthCommandInput} for command's `input` shape.
 * @see {@link InitiateAuthCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InitiateAuthCommand = /** @class */ (function (_super) {
    __extends(InitiateAuthCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InitiateAuthCommand(input) {
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
    InitiateAuthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "InitiateAuthCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InitiateAuthRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InitiateAuthResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InitiateAuthCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1InitiateAuthCommand(input, context);
    };
    InitiateAuthCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1InitiateAuthCommand(output, context);
    };
    return InitiateAuthCommand;
}($Command));
export { InitiateAuthCommand };
//# sourceMappingURL=InitiateAuthCommand.js.map