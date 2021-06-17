import { __extends } from "tslib";
import { DeactivateMFADeviceRequest } from "../models/models_0";
import { deserializeAws_queryDeactivateMFADeviceCommand, serializeAws_queryDeactivateMFADeviceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deactivates the specified MFA device and removes it from association with the user
 *             name for which it was originally enabled.</p>
 *         <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual
 *                 multi-factor authentication (MFA) device</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeactivateMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeactivateMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeactivateMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateMFADeviceCommandInput} for command's `input` shape.
 * @see {@link DeactivateMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeactivateMFADeviceCommand = /** @class */ (function (_super) {
    __extends(DeactivateMFADeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeactivateMFADeviceCommand(input) {
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
    DeactivateMFADeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeactivateMFADeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeactivateMFADeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeactivateMFADeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeactivateMFADeviceCommand(input, context);
    };
    DeactivateMFADeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeactivateMFADeviceCommand(output, context);
    };
    return DeactivateMFADeviceCommand;
}($Command));
export { DeactivateMFADeviceCommand };
//# sourceMappingURL=DeactivateMFADeviceCommand.js.map