import { __extends } from "tslib";
import { UpdateSecurityHubConfigurationRequest, UpdateSecurityHubConfigurationResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateSecurityHubConfigurationCommand, serializeAws_restJson1UpdateSecurityHubConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates configuration options for Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateSecurityHubConfigurationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateSecurityHubConfigurationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateSecurityHubConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityHubConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityHubConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSecurityHubConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateSecurityHubConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSecurityHubConfigurationCommand(input) {
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
    UpdateSecurityHubConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "UpdateSecurityHubConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSecurityHubConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSecurityHubConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSecurityHubConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSecurityHubConfigurationCommand(input, context);
    };
    UpdateSecurityHubConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSecurityHubConfigurationCommand(output, context);
    };
    return UpdateSecurityHubConfigurationCommand;
}($Command));
export { UpdateSecurityHubConfigurationCommand };
//# sourceMappingURL=UpdateSecurityHubConfigurationCommand.js.map