"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokeSecurityGroupIngressCommand = void 0;
const models_5_1 = require("../models/models_5");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes the specified ingress rules from a security group. To remove a rule, the values
 *        that you specify (for example, ports) must match the existing rule's values exactly.</p>
 *
 *    	     <note>
 *             <p>[EC2-Classic , default VPC] If the values you specify do not match the existing rule's values,
 *                 no error is returned, and the output describes the security group rules that were
 *                 not revoked. </p>
 *             <p>AWS recommends that you use <a>DescribeSecurityGroups</a> to verify
 *                 that the rule has been removed.</p>
 *          </note>
 *
 *          <p>Each rule consists of the protocol and the CIDR range or source security group. For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not have to specify the description to revoke the rule.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeSecurityGroupIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeSecurityGroupIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RevokeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RevokeSecurityGroupIngressCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "RevokeSecurityGroupIngressCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_5_1.RevokeSecurityGroupIngressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_5_1.RevokeSecurityGroupIngressResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2RevokeSecurityGroupIngressCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2RevokeSecurityGroupIngressCommand(output, context);
    }
}
exports.RevokeSecurityGroupIngressCommand = RevokeSecurityGroupIngressCommand;
//# sourceMappingURL=RevokeSecurityGroupIngressCommand.js.map