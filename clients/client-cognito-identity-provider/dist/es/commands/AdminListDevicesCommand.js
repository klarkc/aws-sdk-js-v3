import { __extends } from "tslib";
import { AdminListDevicesRequest, AdminListDevicesResponse } from "../models/models_0";
import { deserializeAws_json1_1AdminListDevicesCommand, serializeAws_json1_1AdminListDevicesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists devices, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminListDevicesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListDevicesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminListDevicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminListDevicesCommandInput} for command's `input` shape.
 * @see {@link AdminListDevicesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdminListDevicesCommand = /** @class */ (function (_super) {
    __extends(AdminListDevicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdminListDevicesCommand(input) {
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
    AdminListDevicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CognitoIdentityProviderClient";
        var commandName = "AdminListDevicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdminListDevicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdminListDevicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdminListDevicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AdminListDevicesCommand(input, context);
    };
    AdminListDevicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AdminListDevicesCommand(output, context);
    };
    return AdminListDevicesCommand;
}($Command));
export { AdminListDevicesCommand };
//# sourceMappingURL=AdminListDevicesCommand.js.map