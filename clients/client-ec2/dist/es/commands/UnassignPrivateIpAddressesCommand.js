import { __extends } from "tslib";
import { UnassignPrivateIpAddressesRequest } from "../models/models_5";
import { deserializeAws_ec2UnassignPrivateIpAddressesCommand, serializeAws_ec2UnassignPrivateIpAddressesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Unassigns one or more secondary private IP addresses from a network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignPrivateIpAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignPrivateIpAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnassignPrivateIpAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnassignPrivateIpAddressesCommandInput} for command's `input` shape.
 * @see {@link UnassignPrivateIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnassignPrivateIpAddressesCommand = /** @class */ (function (_super) {
    __extends(UnassignPrivateIpAddressesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnassignPrivateIpAddressesCommand(input) {
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
    UnassignPrivateIpAddressesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "UnassignPrivateIpAddressesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnassignPrivateIpAddressesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnassignPrivateIpAddressesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2UnassignPrivateIpAddressesCommand(input, context);
    };
    UnassignPrivateIpAddressesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2UnassignPrivateIpAddressesCommand(output, context);
    };
    return UnassignPrivateIpAddressesCommand;
}($Command));
export { UnassignPrivateIpAddressesCommand };
//# sourceMappingURL=UnassignPrivateIpAddressesCommand.js.map