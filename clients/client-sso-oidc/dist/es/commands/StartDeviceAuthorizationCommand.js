import { __extends } from "tslib";
import { StartDeviceAuthorizationRequest, StartDeviceAuthorizationResponse } from "../models/models_0";
import { deserializeAws_restJson1StartDeviceAuthorizationCommand, serializeAws_restJson1StartDeviceAuthorizationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates device authorization by requesting a pair of verification codes from the authorization service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, StartDeviceAuthorizationCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, StartDeviceAuthorizationCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const command = new StartDeviceAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDeviceAuthorizationCommandInput} for command's `input` shape.
 * @see {@link StartDeviceAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDeviceAuthorizationCommand = /** @class */ (function (_super) {
    __extends(StartDeviceAuthorizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartDeviceAuthorizationCommand(input) {
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
    StartDeviceAuthorizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOOIDCClient";
        var commandName = "StartDeviceAuthorizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartDeviceAuthorizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartDeviceAuthorizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartDeviceAuthorizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartDeviceAuthorizationCommand(input, context);
    };
    StartDeviceAuthorizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartDeviceAuthorizationCommand(output, context);
    };
    return StartDeviceAuthorizationCommand;
}($Command));
export { StartDeviceAuthorizationCommand };
//# sourceMappingURL=StartDeviceAuthorizationCommand.js.map