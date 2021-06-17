import { __extends } from "tslib";
import { AssignPrivateIpAddressesRequest, AssignPrivateIpAddressesResult } from "../models/models_0";
import { deserializeAws_ec2AssignPrivateIpAddressesCommand, serializeAws_ec2AssignPrivateIpAddressesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns one or more secondary private IP addresses to the specified network interface.</p>
 *         <p>You can specify one or more specific secondary IP addresses, or you can specify the number
 *             of secondary IP addresses to be automatically assigned within the subnet's CIDR block range.
 *             The number of secondary IP addresses that you can assign to an instance varies by instance type.
 *             For information about instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about
 *             Elastic IP addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *         <p>When you move a secondary private IP address to another network interface, any Elastic IP address
 *             that is associated with the IP address is also moved.</p>
 *         <p>Remapping an IP address is an asynchronous operation. When you move an IP address from one network
 *             interface to another, check <code>network/interfaces/macs/mac/local-ipv4s</code> in the instance
 *             metadata to confirm that the remapping is complete.</p>
 *         <p>You must specify either the IP addresses or the IP address count in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssignPrivateIpAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssignPrivateIpAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssignPrivateIpAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignPrivateIpAddressesCommandInput} for command's `input` shape.
 * @see {@link AssignPrivateIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssignPrivateIpAddressesCommand = /** @class */ (function (_super) {
    __extends(AssignPrivateIpAddressesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssignPrivateIpAddressesCommand(input) {
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
    AssignPrivateIpAddressesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssignPrivateIpAddressesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssignPrivateIpAddressesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssignPrivateIpAddressesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssignPrivateIpAddressesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssignPrivateIpAddressesCommand(input, context);
    };
    AssignPrivateIpAddressesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssignPrivateIpAddressesCommand(output, context);
    };
    return AssignPrivateIpAddressesCommand;
}($Command));
export { AssignPrivateIpAddressesCommand };
//# sourceMappingURL=AssignPrivateIpAddressesCommand.js.map