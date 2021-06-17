import { __extends } from "tslib";
import { AssignIpv6AddressesRequest, AssignIpv6AddressesResult } from "../models/models_0";
import { deserializeAws_ec2AssignIpv6AddressesCommand, serializeAws_ec2AssignIpv6AddressesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns one or more IPv6 addresses to the specified network interface. You can
 *             specify one or more specific IPv6 addresses, or you can specify the number of IPv6
 *             addresses to be automatically assigned from within the subnet's IPv6 CIDR block range.
 *             You can assign as many IPv6 addresses to a network interface as you can assign private
 *             IPv4 addresses, and the limit varies per instance type. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per Network Interface Per Instance Type</a>
 *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *         <p>You must specify either the IPv6 addresses or the IPv6 address count in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssignIpv6AddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignIpv6AddressesCommandInput} for command's `input` shape.
 * @see {@link AssignIpv6AddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssignIpv6AddressesCommand = /** @class */ (function (_super) {
    __extends(AssignIpv6AddressesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssignIpv6AddressesCommand(input) {
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
    AssignIpv6AddressesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssignIpv6AddressesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssignIpv6AddressesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssignIpv6AddressesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssignIpv6AddressesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssignIpv6AddressesCommand(input, context);
    };
    AssignIpv6AddressesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssignIpv6AddressesCommand(output, context);
    };
    return AssignIpv6AddressesCommand;
}($Command));
export { AssignIpv6AddressesCommand };
//# sourceMappingURL=AssignIpv6AddressesCommand.js.map