import { __extends } from "tslib";
import { AuthorizeSecurityGroupIngressRequest } from "../models/models_0";
import { deserializeAws_ec2AuthorizeSecurityGroupIngressCommand, serializeAws_ec2AuthorizeSecurityGroupIngressCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified ingress rules to a security group.</p>
 *          <p>An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 CIDR
 *        address ranges, or from the instances associated with the specified destination security groups.</p>
 *          <p>You specify a protocol for each rule (for example, TCP).
 *        For TCP and UDP, you must also specify the destination port or port range.
 *        For ICMP/ICMPv6, you must also specify the ICMP/ICMPv6 type and code.
 *        You can use -1 to mean all types or all codes.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible.
 *          However, a small delay might occur.</p>
 *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeSecurityGroupIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeSecurityGroupIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AuthorizeSecurityGroupIngressCommand = /** @class */ (function (_super) {
    __extends(AuthorizeSecurityGroupIngressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AuthorizeSecurityGroupIngressCommand(input) {
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
    AuthorizeSecurityGroupIngressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AuthorizeSecurityGroupIngressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AuthorizeSecurityGroupIngressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AuthorizeSecurityGroupIngressCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AuthorizeSecurityGroupIngressCommand(input, context);
    };
    AuthorizeSecurityGroupIngressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AuthorizeSecurityGroupIngressCommand(output, context);
    };
    return AuthorizeSecurityGroupIngressCommand;
}($Command));
export { AuthorizeSecurityGroupIngressCommand };
//# sourceMappingURL=AuthorizeSecurityGroupIngressCommand.js.map