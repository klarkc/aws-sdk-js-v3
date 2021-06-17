import { __extends } from "tslib";
import { RevokeSecurityGroupEgressRequest, RevokeSecurityGroupEgressResult } from "../models/models_5";
import { deserializeAws_ec2RevokeSecurityGroupEgressCommand, serializeAws_ec2RevokeSecurityGroupEgressCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>[VPC only] Removes the specified egress rules from a security group for EC2-VPC.
 *        This action does not apply to security groups for use in EC2-Classic. To remove a rule, the
 *        values that you specify (for example, ports) must match the existing rule's values
 *        exactly.</p>
 *          <note>
 *             <p>[Default VPC] If the values you specify do not match the existing rule's values, no error is
 *                 returned, and the output describes the security group rules that were not revoked. </p>
 *             <p>AWS recommends that you use <a>DescribeSecurityGroups</a> to verify
 *                 that the rule has been removed.</p>
 *          </note>
 *          <p>Each rule consists of the protocol and the IPv4 or IPv6 CIDR range or source security
 *       group. For the TCP and UDP protocols, you must also specify the destination port or range of
 *       ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule
 *       has a description, you do not have to specify the description to revoke the rule.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeSecurityGroupEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeSecurityGroupEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RevokeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSecurityGroupEgressCommandInput} for command's `input` shape.
 * @see {@link RevokeSecurityGroupEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RevokeSecurityGroupEgressCommand = /** @class */ (function (_super) {
    __extends(RevokeSecurityGroupEgressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RevokeSecurityGroupEgressCommand(input) {
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
    RevokeSecurityGroupEgressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "RevokeSecurityGroupEgressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RevokeSecurityGroupEgressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RevokeSecurityGroupEgressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RevokeSecurityGroupEgressCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2RevokeSecurityGroupEgressCommand(input, context);
    };
    RevokeSecurityGroupEgressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2RevokeSecurityGroupEgressCommand(output, context);
    };
    return RevokeSecurityGroupEgressCommand;
}($Command));
export { RevokeSecurityGroupEgressCommand };
//# sourceMappingURL=RevokeSecurityGroupEgressCommand.js.map