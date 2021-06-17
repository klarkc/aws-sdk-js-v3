import { __extends } from "tslib";
import { AssociateFirewallPolicyRequest, AssociateFirewallPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_0AssociateFirewallPolicyCommand, serializeAws_json1_0AssociateFirewallPolicyCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p>
 *          <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a
 *          collection of inspection rule groups and other settings. Each firewall requires one
 *          firewall policy association, and you can use the same firewall policy for multiple
 *          firewalls. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AssociateFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AssociateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new AssociateFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link AssociateFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateFirewallPolicyCommand = /** @class */ (function (_super) {
    __extends(AssociateFirewallPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateFirewallPolicyCommand(input) {
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
    AssociateFirewallPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "AssociateFirewallPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateFirewallPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateFirewallPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateFirewallPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0AssociateFirewallPolicyCommand(input, context);
    };
    AssociateFirewallPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0AssociateFirewallPolicyCommand(output, context);
    };
    return AssociateFirewallPolicyCommand;
}($Command));
export { AssociateFirewallPolicyCommand };
//# sourceMappingURL=AssociateFirewallPolicyCommand.js.map