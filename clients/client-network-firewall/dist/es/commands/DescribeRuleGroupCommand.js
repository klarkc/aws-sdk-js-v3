import { __extends } from "tslib";
import { DescribeRuleGroupRequest, DescribeRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeRuleGroupCommand, serializeAws_json1_0DescribeRuleGroupCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the data objects for the specified rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRuleGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRuleGroupCommand(input) {
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
    DescribeRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "DescribeRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeRuleGroupCommand(input, context);
    };
    DescribeRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeRuleGroupCommand(output, context);
    };
    return DescribeRuleGroupCommand;
}($Command));
export { DescribeRuleGroupCommand };
//# sourceMappingURL=DescribeRuleGroupCommand.js.map