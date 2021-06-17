import { __extends } from "tslib";
import { AdvertiseByoipCidrRequest, AdvertiseByoipCidrResult } from "../models/models_0";
import { deserializeAws_ec2AdvertiseByoipCidrCommand, serializeAws_ec2AdvertiseByoipCidrCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Advertises an IPv4 or IPv6 address range that is provisioned for use with your AWS resources through
 *          bring your own IP addresses (BYOIP).</p>
 *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
 *          address ranges each time.</p>
 *          <p>We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise
 *          it from AWS. To minimize down time, you can configure your AWS resources to use an address from a
 *          BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current
 *          location and start advertising it through AWS.</p>
 *          <p>It can take a few minutes before traffic to the specified addresses starts routing to AWS
 *          because of BGP propagation delays.</p>
 *          <p>To stop advertising the BYOIP CIDR, use <a>WithdrawByoipCidr</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AdvertiseByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AdvertiseByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AdvertiseByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdvertiseByoipCidrCommandInput} for command's `input` shape.
 * @see {@link AdvertiseByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AdvertiseByoipCidrCommand = /** @class */ (function (_super) {
    __extends(AdvertiseByoipCidrCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AdvertiseByoipCidrCommand(input) {
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
    AdvertiseByoipCidrCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AdvertiseByoipCidrCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AdvertiseByoipCidrRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AdvertiseByoipCidrResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AdvertiseByoipCidrCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AdvertiseByoipCidrCommand(input, context);
    };
    AdvertiseByoipCidrCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AdvertiseByoipCidrCommand(output, context);
    };
    return AdvertiseByoipCidrCommand;
}($Command));
export { AdvertiseByoipCidrCommand };
//# sourceMappingURL=AdvertiseByoipCidrCommand.js.map