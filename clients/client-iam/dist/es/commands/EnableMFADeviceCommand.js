import { __extends } from "tslib";
import { EnableMFADeviceRequest } from "../models/models_0";
import { deserializeAws_queryEnableMFADeviceCommand, serializeAws_queryEnableMFADeviceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the specified MFA device and associates it with the specified IAM user. When
 *             enabled, the MFA device is required for every subsequent login by the IAM user
 *             associated with the device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, EnableMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, EnableMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new EnableMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableMFADeviceCommandInput} for command's `input` shape.
 * @see {@link EnableMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableMFADeviceCommand = /** @class */ (function (_super) {
    __extends(EnableMFADeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableMFADeviceCommand(input) {
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
    EnableMFADeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "EnableMFADeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableMFADeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableMFADeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryEnableMFADeviceCommand(input, context);
    };
    EnableMFADeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryEnableMFADeviceCommand(output, context);
    };
    return EnableMFADeviceCommand;
}($Command));
export { EnableMFADeviceCommand };
//# sourceMappingURL=EnableMFADeviceCommand.js.map