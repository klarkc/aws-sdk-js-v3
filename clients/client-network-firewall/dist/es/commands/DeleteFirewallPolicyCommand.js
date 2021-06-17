import { __extends } from "tslib";
import { DeleteFirewallPolicyRequest, DeleteFirewallPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_0DeleteFirewallPolicyCommand, serializeAws_json1_0DeleteFirewallPolicyCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified <a>FirewallPolicy</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DeleteFirewallPolicyCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DeleteFirewallPolicyCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DeleteFirewallPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFirewallPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteFirewallPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFirewallPolicyCommand(input) {
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
    DeleteFirewallPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "DeleteFirewallPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFirewallPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFirewallPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFirewallPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteFirewallPolicyCommand(input, context);
    };
    DeleteFirewallPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteFirewallPolicyCommand(output, context);
    };
    return DeleteFirewallPolicyCommand;
}($Command));
export { DeleteFirewallPolicyCommand };
//# sourceMappingURL=DeleteFirewallPolicyCommand.js.map