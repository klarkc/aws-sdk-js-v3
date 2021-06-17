import { __extends } from "tslib";
import { DescribeFirewallPolicyRequest, DescribeFirewallPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeFirewallPolicyCommand, serializeAws_json1_0DescribeFirewallPolicyCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the data objects for the specified firewall policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFirewallPolicyCommand = /** @class */ (function (_super) {
    __extends(DescribeFirewallPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFirewallPolicyCommand(input) {
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
    DescribeFirewallPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "DescribeFirewallPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFirewallPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFirewallPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFirewallPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeFirewallPolicyCommand(input, context);
    };
    DescribeFirewallPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeFirewallPolicyCommand(output, context);
    };
    return DescribeFirewallPolicyCommand;
}($Command));
export { DescribeFirewallPolicyCommand };
//# sourceMappingURL=DescribeFirewallPolicyCommand.js.map