import { __extends } from "tslib";
import { CreateFirewallRuleGroupRequest, CreateFirewallRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateFirewallRuleGroupCommand, serializeAws_json1_1CreateFirewallRuleGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group
 *            by calling <a>CreateFirewallRule</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFirewallRuleGroupCommand = /** @class */ (function (_super) {
    __extends(CreateFirewallRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFirewallRuleGroupCommand(input) {
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
    CreateFirewallRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "CreateFirewallRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFirewallRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFirewallRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFirewallRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateFirewallRuleGroupCommand(input, context);
    };
    CreateFirewallRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateFirewallRuleGroupCommand(output, context);
    };
    return CreateFirewallRuleGroupCommand;
}($Command));
export { CreateFirewallRuleGroupCommand };
//# sourceMappingURL=CreateFirewallRuleGroupCommand.js.map