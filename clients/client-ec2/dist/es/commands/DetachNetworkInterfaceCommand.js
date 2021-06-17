import { __extends } from "tslib";
import { DetachNetworkInterfaceRequest } from "../models/models_3";
import { deserializeAws_ec2DetachNetworkInterfaceCommand, serializeAws_ec2DetachNetworkInterfaceCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches a network interface from an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DetachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DetachNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachNetworkInterfaceCommand = /** @class */ (function (_super) {
    __extends(DetachNetworkInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachNetworkInterfaceCommand(input) {
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
    DetachNetworkInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DetachNetworkInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachNetworkInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachNetworkInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DetachNetworkInterfaceCommand(input, context);
    };
    DetachNetworkInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DetachNetworkInterfaceCommand(output, context);
    };
    return DetachNetworkInterfaceCommand;
}($Command));
export { DetachNetworkInterfaceCommand };
//# sourceMappingURL=DetachNetworkInterfaceCommand.js.map