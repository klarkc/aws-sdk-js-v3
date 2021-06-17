import { __extends } from "tslib";
import { UpdateSecurityGroupRuleDescriptionsIngressRequest, UpdateSecurityGroupRuleDescriptionsIngressResult, } from "../models/models_5";
import { deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand, serializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the description of an ingress (inbound) security group rule. You can replace an
 * 			existing description, or add a description to a rule that did not have one
 * 			previously.</p>
 * 		       <p>You specify the description as part of the IP permissions structure. You can remove a
 * 			description for a security group rule by omitting the description parameter in the
 * 			request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateSecurityGroupRuleDescriptionsIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateSecurityGroupRuleDescriptionsIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UpdateSecurityGroupRuleDescriptionsIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSecurityGroupRuleDescriptionsIngressCommand = /** @class */ (function (_super) {
    __extends(UpdateSecurityGroupRuleDescriptionsIngressCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSecurityGroupRuleDescriptionsIngressCommand(input) {
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
    UpdateSecurityGroupRuleDescriptionsIngressCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "UpdateSecurityGroupRuleDescriptionsIngressCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsIngressRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsIngressResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSecurityGroupRuleDescriptionsIngressCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand(input, context);
    };
    UpdateSecurityGroupRuleDescriptionsIngressCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsIngressCommand(output, context);
    };
    return UpdateSecurityGroupRuleDescriptionsIngressCommand;
}($Command));
export { UpdateSecurityGroupRuleDescriptionsIngressCommand };
//# sourceMappingURL=UpdateSecurityGroupRuleDescriptionsIngressCommand.js.map