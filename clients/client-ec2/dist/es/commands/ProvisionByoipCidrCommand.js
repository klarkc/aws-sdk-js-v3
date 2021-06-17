import { __extends } from "tslib";
import { ProvisionByoipCidrRequest, ProvisionByoipCidrResult } from "../models/models_4";
import { deserializeAws_ec2ProvisionByoipCidrCommand, serializeAws_ec2ProvisionByoipCidrCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provisions an IPv4 or IPv6 address range for use with your AWS resources through bring your own IP
 *          addresses (BYOIP) and creates a corresponding address pool. After the address range is
 *          provisioned, it is ready to be advertised using <a>AdvertiseByoipCidr</a>.</p>
 *          <p>AWS verifies that you own the address range and are authorized to advertise it.
 *          You must ensure that the address range is registered to you and that you created an
 *          RPKI ROA to authorize Amazon ASNs 16509 and 14618 to advertise the address range.
 *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>Provisioning an address range is an asynchronous operation, so the call returns immediately,
 *          but the address range is not ready to use until its status changes from <code>pending-provision</code>
 *          to <code>provisioned</code>. To monitor the status of an address range, use <a>DescribeByoipCidrs</a>.
 *          To allocate an Elastic IP address from your IPv4 address pool, use <a>AllocateAddress</a>
 *          with either the specific address from the address pool or the ID of the address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ProvisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ProvisionByoipCidrCommand = /** @class */ (function (_super) {
    __extends(ProvisionByoipCidrCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ProvisionByoipCidrCommand(input) {
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
    ProvisionByoipCidrCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ProvisionByoipCidrCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ProvisionByoipCidrRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ProvisionByoipCidrResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ProvisionByoipCidrCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ProvisionByoipCidrCommand(input, context);
    };
    ProvisionByoipCidrCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ProvisionByoipCidrCommand(output, context);
    };
    return ProvisionByoipCidrCommand;
}($Command));
export { ProvisionByoipCidrCommand };
//# sourceMappingURL=ProvisionByoipCidrCommand.js.map