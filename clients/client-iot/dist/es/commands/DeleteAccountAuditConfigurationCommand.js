import { __extends } from "tslib";
import { DeleteAccountAuditConfigurationRequest, DeleteAccountAuditConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAccountAuditConfigurationCommand, serializeAws_restJson1DeleteAccountAuditConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores the default settings for Device Defender audits for this account. Any
 *           configuration data you entered is deleted and all audit checks are reset to
 *           disabled.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccountAuditConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteAccountAuditConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccountAuditConfigurationCommand(input) {
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
    DeleteAccountAuditConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteAccountAuditConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccountAuditConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAccountAuditConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccountAuditConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAccountAuditConfigurationCommand(input, context);
    };
    DeleteAccountAuditConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAccountAuditConfigurationCommand(output, context);
    };
    return DeleteAccountAuditConfigurationCommand;
}($Command));
export { DeleteAccountAuditConfigurationCommand };
//# sourceMappingURL=DeleteAccountAuditConfigurationCommand.js.map