import { __extends } from "tslib";
import { ForgetDeviceRequest } from "../models/models_0";
import { deserializeAws_json1_1ForgetDeviceCommand, serializeAws_json1_1ForgetDeviceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Forgets the specified device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ForgetDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ForgetDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new ForgetDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ForgetDeviceCommandInput} for command's `input` shape.
 * @see {@link ForgetDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ForgetDeviceCommand = /** @class */ (function (_super) {
    __extends(ForgetDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ForgetDeviceCommand(input) {
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
    ForgetDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "ForgetDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ForgetDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ForgetDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ForgetDeviceCommand(input, context);
    };
    ForgetDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ForgetDeviceCommand(output, context);
    };
    return ForgetDeviceCommand;
}($Command));
export { ForgetDeviceCommand };
//# sourceMappingURL=ForgetDeviceCommand.js.map