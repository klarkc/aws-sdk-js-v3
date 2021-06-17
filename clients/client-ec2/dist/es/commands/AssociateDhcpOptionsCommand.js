import { __extends } from "tslib";
import { AssociateDhcpOptionsRequest } from "../models/models_0";
import { deserializeAws_ec2AssociateDhcpOptionsCommand, serializeAws_ec2AssociateDhcpOptionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a set of DHCP options (that you've previously created) with the specified VPC, or associates no DHCP options with the VPC.</p>
 *          <p>After you associate the options with the VPC, any existing instances and all new instances that you launch in that VPC use the options. You don't need to restart or relaunch the instances. They automatically pick up the changes within a few hours, depending on how frequently the instance renews its DHCP lease. You can explicitly renew the lease using the operating system on the instance.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a>
 *           in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateDhcpOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateDhcpOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDhcpOptionsCommandInput} for command's `input` shape.
 * @see {@link AssociateDhcpOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateDhcpOptionsCommand = /** @class */ (function (_super) {
    __extends(AssociateDhcpOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateDhcpOptionsCommand(input) {
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
    AssociateDhcpOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssociateDhcpOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateDhcpOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateDhcpOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssociateDhcpOptionsCommand(input, context);
    };
    AssociateDhcpOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssociateDhcpOptionsCommand(output, context);
    };
    return AssociateDhcpOptionsCommand;
}($Command));
export { AssociateDhcpOptionsCommand };
//# sourceMappingURL=AssociateDhcpOptionsCommand.js.map