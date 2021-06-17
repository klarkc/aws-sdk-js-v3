import { __extends } from "tslib";
import { DescribeVpnGatewaysRequest, DescribeVpnGatewaysResult } from "../models/models_3";
import { deserializeAws_ec2DescribeVpnGatewaysCommand, serializeAws_ec2DescribeVpnGatewaysCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more of your virtual private gateways.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpnGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpnGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpnGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpnGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeVpnGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeVpnGatewaysCommand = /** @class */ (function (_super) {
    __extends(DescribeVpnGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeVpnGatewaysCommand(input) {
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
    DescribeVpnGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeVpnGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeVpnGatewaysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeVpnGatewaysResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeVpnGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeVpnGatewaysCommand(input, context);
    };
    DescribeVpnGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeVpnGatewaysCommand(output, context);
    };
    return DescribeVpnGatewaysCommand;
}($Command));
export { DescribeVpnGatewaysCommand };
//# sourceMappingURL=DescribeVpnGatewaysCommand.js.map