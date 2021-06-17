import { __extends } from "tslib";
import { AttachVpnGatewayRequest, AttachVpnGatewayResult } from "../models/models_0";
import { deserializeAws_ec2AttachVpnGatewayCommand, serializeAws_ec2AttachVpnGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches a virtual private gateway to a VPC. You can attach one virtual private
 *             gateway to one VPC at a time.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AttachVpnGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link AttachVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachVpnGatewayCommand = /** @class */ (function (_super) {
    __extends(AttachVpnGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachVpnGatewayCommand(input) {
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
    AttachVpnGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AttachVpnGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachVpnGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachVpnGatewayResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachVpnGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AttachVpnGatewayCommand(input, context);
    };
    AttachVpnGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AttachVpnGatewayCommand(output, context);
    };
    return AttachVpnGatewayCommand;
}($Command));
export { AttachVpnGatewayCommand };
//# sourceMappingURL=AttachVpnGatewayCommand.js.map