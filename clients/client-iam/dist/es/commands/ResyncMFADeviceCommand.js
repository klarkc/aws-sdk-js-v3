import { __extends } from "tslib";
import { ResyncMFADeviceRequest } from "../models/models_0";
import { deserializeAws_queryResyncMFADeviceCommand, serializeAws_queryResyncMFADeviceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Synchronizes the specified MFA device with its IAM resource object on the AWS
 *             servers.</p>
 *         <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA
 *                 device</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ResyncMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ResyncMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ResyncMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResyncMFADeviceCommandInput} for command's `input` shape.
 * @see {@link ResyncMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResyncMFADeviceCommand = /** @class */ (function (_super) {
    __extends(ResyncMFADeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResyncMFADeviceCommand(input) {
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
    ResyncMFADeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ResyncMFADeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResyncMFADeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResyncMFADeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryResyncMFADeviceCommand(input, context);
    };
    ResyncMFADeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryResyncMFADeviceCommand(output, context);
    };
    return ResyncMFADeviceCommand;
}($Command));
export { ResyncMFADeviceCommand };
//# sourceMappingURL=ResyncMFADeviceCommand.js.map