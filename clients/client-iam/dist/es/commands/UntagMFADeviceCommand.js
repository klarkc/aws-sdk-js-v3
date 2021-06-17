import { __extends } from "tslib";
import { UntagMFADeviceRequest } from "../models/models_0";
import { deserializeAws_queryUntagMFADeviceCommand, serializeAws_queryUntagMFADeviceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified tags from the IAM virtual multi-factor authentication (MFA)
 *       device. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagMFADeviceCommandInput} for command's `input` shape.
 * @see {@link UntagMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagMFADeviceCommand = /** @class */ (function (_super) {
    __extends(UntagMFADeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagMFADeviceCommand(input) {
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
    UntagMFADeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UntagMFADeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagMFADeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagMFADeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUntagMFADeviceCommand(input, context);
    };
    UntagMFADeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUntagMFADeviceCommand(output, context);
    };
    return UntagMFADeviceCommand;
}($Command));
export { UntagMFADeviceCommand };
//# sourceMappingURL=UntagMFADeviceCommand.js.map