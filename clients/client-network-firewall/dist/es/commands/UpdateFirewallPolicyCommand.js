import { __extends } from "tslib";
import { UpdateFirewallPolicyRequest, UpdateFirewallPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_0UpdateFirewallPolicyCommand, serializeAws_json1_0UpdateFirewallPolicyCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the properties of the specified firewall policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFirewallPolicyCommand = /** @class */ (function (_super) {
    __extends(UpdateFirewallPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFirewallPolicyCommand(input) {
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
    UpdateFirewallPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "UpdateFirewallPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFirewallPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFirewallPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFirewallPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateFirewallPolicyCommand(input, context);
    };
    UpdateFirewallPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateFirewallPolicyCommand(output, context);
    };
    return UpdateFirewallPolicyCommand;
}($Command));
export { UpdateFirewallPolicyCommand };
//# sourceMappingURL=UpdateFirewallPolicyCommand.js.map