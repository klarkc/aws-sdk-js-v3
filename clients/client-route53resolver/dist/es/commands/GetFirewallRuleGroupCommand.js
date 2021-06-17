import { __extends } from "tslib";
import { GetFirewallRuleGroupRequest, GetFirewallRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1GetFirewallRuleGroupCommand, serializeAws_json1_1GetFirewallRuleGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified firewall rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link GetFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFirewallRuleGroupCommand = /** @class */ (function (_super) {
    __extends(GetFirewallRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFirewallRuleGroupCommand(input) {
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
    GetFirewallRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetFirewallRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFirewallRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFirewallRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFirewallRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetFirewallRuleGroupCommand(input, context);
    };
    GetFirewallRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetFirewallRuleGroupCommand(output, context);
    };
    return GetFirewallRuleGroupCommand;
}($Command));
export { GetFirewallRuleGroupCommand };
//# sourceMappingURL=GetFirewallRuleGroupCommand.js.map