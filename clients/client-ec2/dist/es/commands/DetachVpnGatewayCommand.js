import { __extends } from "tslib";
import { DetachVpnGatewayRequest } from "../models/models_3";
import { deserializeAws_ec2DetachVpnGatewayCommand, serializeAws_ec2DetachVpnGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches a virtual private gateway from a VPC. You do this if you're planning to turn off the VPC and not use it anymore. You can confirm a virtual private gateway has been completely detached from a VPC by describing the virtual private gateway (any attachments to the virtual private gateway are also described).</p>
 *         <p>You must wait for the attachment's state to switch to <code>detached</code> before
 *             you can delete the VPC or attach a different VPC to the virtual private gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DetachVpnGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link DetachVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachVpnGatewayCommand = /** @class */ (function (_super) {
    __extends(DetachVpnGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachVpnGatewayCommand(input) {
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
    DetachVpnGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DetachVpnGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachVpnGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachVpnGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DetachVpnGatewayCommand(input, context);
    };
    DetachVpnGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DetachVpnGatewayCommand(output, context);
    };
    return DetachVpnGatewayCommand;
}($Command));
export { DetachVpnGatewayCommand };
//# sourceMappingURL=DetachVpnGatewayCommand.js.map