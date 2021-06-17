import { __extends } from "tslib";
import { PutFirewallRuleGroupPolicyRequest, PutFirewallRuleGroupPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand, serializeAws_json1_1PutFirewallRuleGroupPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches an AWS Identity and Access Management (AWS IAM) policy for sharing the rule
 * 			group. You can use the policy to share the rule group using AWS Resource Access Manager
 * 			(AWS RAM). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutFirewallRuleGroupPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutFirewallRuleGroupPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new PutFirewallRuleGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFirewallRuleGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFirewallRuleGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutFirewallRuleGroupPolicyCommand = /** @class */ (function (_super) {
    __extends(PutFirewallRuleGroupPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutFirewallRuleGroupPolicyCommand(input) {
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
    PutFirewallRuleGroupPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "PutFirewallRuleGroupPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutFirewallRuleGroupPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutFirewallRuleGroupPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutFirewallRuleGroupPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutFirewallRuleGroupPolicyCommand(input, context);
    };
    PutFirewallRuleGroupPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutFirewallRuleGroupPolicyCommand(output, context);
    };
    return PutFirewallRuleGroupPolicyCommand;
}($Command));
export { PutFirewallRuleGroupPolicyCommand };
//# sourceMappingURL=PutFirewallRuleGroupPolicyCommand.js.map