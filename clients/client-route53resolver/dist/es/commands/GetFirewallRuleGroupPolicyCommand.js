import { __extends } from "tslib";
import { GetFirewallRuleGroupPolicyRequest, GetFirewallRuleGroupPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetFirewallRuleGroupPolicyCommand, serializeAws_json1_1GetFirewallRuleGroupPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the AWS Identity and Access Management (AWS IAM) policy for sharing the
 * 			specified rule group. You can use the policy to share the rule group using AWS Resource
 * 			Access Manager (AWS RAM). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallRuleGroupPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallRuleGroupPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallRuleGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallRuleGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link GetFirewallRuleGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFirewallRuleGroupPolicyCommand = /** @class */ (function (_super) {
    __extends(GetFirewallRuleGroupPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFirewallRuleGroupPolicyCommand(input) {
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
    GetFirewallRuleGroupPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetFirewallRuleGroupPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFirewallRuleGroupPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFirewallRuleGroupPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFirewallRuleGroupPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetFirewallRuleGroupPolicyCommand(input, context);
    };
    GetFirewallRuleGroupPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetFirewallRuleGroupPolicyCommand(output, context);
    };
    return GetFirewallRuleGroupPolicyCommand;
}($Command));
export { GetFirewallRuleGroupPolicyCommand };
//# sourceMappingURL=GetFirewallRuleGroupPolicyCommand.js.map