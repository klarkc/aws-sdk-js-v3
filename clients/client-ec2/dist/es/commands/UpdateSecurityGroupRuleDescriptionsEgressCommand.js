import { __extends } from "tslib";
import { UpdateSecurityGroupRuleDescriptionsEgressRequest, UpdateSecurityGroupRuleDescriptionsEgressResult, } from "../models/models_5";
import { deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand, serializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var UpdateSecurityGroupRuleDescriptionsEgressCommand = /** @class */ (function (_super) {
    __extends(UpdateSecurityGroupRuleDescriptionsEgressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSecurityGroupRuleDescriptionsEgressCommand(input) {
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
    UpdateSecurityGroupRuleDescriptionsEgressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "UpdateSecurityGroupRuleDescriptionsEgressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsEgressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsEgressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSecurityGroupRuleDescriptionsEgressCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand(input, context);
    };
    UpdateSecurityGroupRuleDescriptionsEgressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand(output, context);
    };
    return UpdateSecurityGroupRuleDescriptionsEgressCommand;
}($Command));
export { UpdateSecurityGroupRuleDescriptionsEgressCommand };
//# sourceMappingURL=UpdateSecurityGroupRuleDescriptionsEgressCommand.js.map