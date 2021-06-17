import { __extends } from "tslib";
import { UpdateAccountAuditConfigurationRequest, UpdateAccountAuditConfigurationResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateAccountAuditConfigurationCommand, serializeAws_restJson1UpdateAccountAuditConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures or reconfigures the Device Defender audit settings for this account.
 *           Settings include how audit notifications are sent and which audit checks are
 *           enabled or disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAccountAuditConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateAccountAuditConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAccountAuditConfigurationCommand(input) {
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
    UpdateAccountAuditConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateAccountAuditConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAccountAuditConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAccountAuditConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAccountAuditConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAccountAuditConfigurationCommand(input, context);
    };
    UpdateAccountAuditConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAccountAuditConfigurationCommand(output, context);
    };
    return UpdateAccountAuditConfigurationCommand;
}($Command));
export { UpdateAccountAuditConfigurationCommand };
//# sourceMappingURL=UpdateAccountAuditConfigurationCommand.js.map