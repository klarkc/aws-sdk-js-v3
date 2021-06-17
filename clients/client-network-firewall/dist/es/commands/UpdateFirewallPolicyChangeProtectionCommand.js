import { __extends } from "tslib";
import { UpdateFirewallPolicyChangeProtectionRequest, UpdateFirewallPolicyChangeProtectionResponse, } from "../models/models_0";
import { deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand, serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallPolicyChangeProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallPolicyChangeProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallPolicyChangeProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallPolicyChangeProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallPolicyChangeProtectionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFirewallPolicyChangeProtectionCommand = /** @class */ (function (_super) {
    __extends(UpdateFirewallPolicyChangeProtectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFirewallPolicyChangeProtectionCommand(input) {
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
    UpdateFirewallPolicyChangeProtectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "UpdateFirewallPolicyChangeProtectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFirewallPolicyChangeProtectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFirewallPolicyChangeProtectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFirewallPolicyChangeProtectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand(input, context);
    };
    UpdateFirewallPolicyChangeProtectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand(output, context);
    };
    return UpdateFirewallPolicyChangeProtectionCommand;
}($Command));
export { UpdateFirewallPolicyChangeProtectionCommand };
//# sourceMappingURL=UpdateFirewallPolicyChangeProtectionCommand.js.map