"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSecurityGroupRuleDescriptionsEgressCommand = void 0;
const models_5_1 = require("../models/models_5");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>[VPC only] Updates the description of an egress (outbound) security group rule. You
 * 			can replace an existing description, or add a description to a rule that did not have one
 * 			previously.</p>
 * 		       <p>You specify the description as part of the IP permissions structure. You can remove a
 * 			description for a security group rule by omitting the description parameter in the
 * 			request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateSecurityGroupRuleDescriptionsEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateSecurityGroupRuleDescriptionsEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UpdateSecurityGroupRuleDescriptionsEgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateSecurityGroupRuleDescriptionsEgressCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateSecurityGroupRuleDescriptionsEgressCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_5_1.UpdateSecurityGroupRuleDescriptionsEgressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_5_1.UpdateSecurityGroupRuleDescriptionsEgressResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand(output, context);
    }
}
exports.UpdateSecurityGroupRuleDescriptionsEgressCommand = UpdateSecurityGroupRuleDescriptionsEgressCommand;
//# sourceMappingURL=UpdateSecurityGroupRuleDescriptionsEgressCommand.js.map