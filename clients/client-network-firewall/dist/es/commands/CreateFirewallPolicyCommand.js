import { __extends } from "tslib";
import { CreateFirewallPolicyRequest, CreateFirewallPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_0CreateFirewallPolicyCommand, serializeAws_json1_0CreateFirewallPolicyCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the firewall policy for the firewall according to the specifications. </p>
 *          <p>An AWS Network Firewall firewall policy defines the behavior of a firewall, in a collection of
 *          stateless and stateful rule groups and other settings. You can use one firewall policy for
 *          multiple firewalls. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new CreateFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFirewallPolicyCommand = /** @class */ (function (_super) {
    __extends(CreateFirewallPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFirewallPolicyCommand(input) {
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
    CreateFirewallPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "CreateFirewallPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFirewallPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFirewallPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFirewallPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateFirewallPolicyCommand(input, context);
    };
    CreateFirewallPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateFirewallPolicyCommand(output, context);
    };
    return CreateFirewallPolicyCommand;
}($Command));
export { CreateFirewallPolicyCommand };
//# sourceMappingURL=CreateFirewallPolicyCommand.js.map