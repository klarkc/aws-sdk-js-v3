import { __extends } from "tslib";
import { ResetNetworkInterfaceAttributeRequest } from "../models/models_5";
import { deserializeAws_ec2ResetNetworkInterfaceAttributeCommand, serializeAws_ec2ResetNetworkInterfaceAttributeCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets a network interface attribute. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetNetworkInterfaceAttributeCommand = /** @class */ (function (_super) {
    __extends(ResetNetworkInterfaceAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetNetworkInterfaceAttributeCommand(input) {
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
    ResetNetworkInterfaceAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ResetNetworkInterfaceAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetNetworkInterfaceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetNetworkInterfaceAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ResetNetworkInterfaceAttributeCommand(input, context);
    };
    ResetNetworkInterfaceAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ResetNetworkInterfaceAttributeCommand(output, context);
    };
    return ResetNetworkInterfaceAttributeCommand;
}($Command));
export { ResetNetworkInterfaceAttributeCommand };
//# sourceMappingURL=ResetNetworkInterfaceAttributeCommand.js.map