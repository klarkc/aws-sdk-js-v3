import { __extends } from "tslib";
import { AuthorizeSecurityGroupEgressRequest } from "../models/models_0";
import { deserializeAws_ec2AuthorizeSecurityGroupEgressCommand, serializeAws_ec2AuthorizeSecurityGroupEgressCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>[VPC only] Adds the specified egress rules to a security group for use with a VPC.</p>
 *          <p>An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 CIDR
 *       address ranges, or to the instances associated with the specified destination security groups.</p>
 *          <p>You specify a protocol for each rule (for example, TCP).
 *        For the TCP and UDP protocols, you must also specify the destination port or port range.
 *        For the ICMP protocol, you must also specify the ICMP type and code.
 *        You can use -1 for the type or code to mean all types or all codes.</p>
 *          <p>Rule changes are propagated to affected instances as quickly as possible. However, a small delay might occur.</p>
 *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeSecurityGroupEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeSecurityGroupEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AuthorizeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeSecurityGroupEgressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSecurityGroupEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AuthorizeSecurityGroupEgressCommand = /** @class */ (function (_super) {
    __extends(AuthorizeSecurityGroupEgressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AuthorizeSecurityGroupEgressCommand(input) {
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
    AuthorizeSecurityGroupEgressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AuthorizeSecurityGroupEgressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AuthorizeSecurityGroupEgressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AuthorizeSecurityGroupEgressCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AuthorizeSecurityGroupEgressCommand(input, context);
    };
    AuthorizeSecurityGroupEgressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AuthorizeSecurityGroupEgressCommand(output, context);
    };
    return AuthorizeSecurityGroupEgressCommand;
}($Command));
export { AuthorizeSecurityGroupEgressCommand };
//# sourceMappingURL=AuthorizeSecurityGroupEgressCommand.js.map