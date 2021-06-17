import { __extends } from "tslib";
import { UpdateFirewallDeleteProtectionRequest, UpdateFirewallDeleteProtectionResponse } from "../models/models_0";
import { deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand, serializeAws_json1_0UpdateFirewallDeleteProtectionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible
 *          to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected
 *          against deletion. This setting helps protect against accidentally deleting a firewall
 *          that's in use. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallDeleteProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallDeleteProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallDeleteProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallDeleteProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDeleteProtectionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFirewallDeleteProtectionCommand = /** @class */ (function (_super) {
    __extends(UpdateFirewallDeleteProtectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFirewallDeleteProtectionCommand(input) {
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
    UpdateFirewallDeleteProtectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "UpdateFirewallDeleteProtectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFirewallDeleteProtectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFirewallDeleteProtectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFirewallDeleteProtectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateFirewallDeleteProtectionCommand(input, context);
    };
    UpdateFirewallDeleteProtectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand(output, context);
    };
    return UpdateFirewallDeleteProtectionCommand;
}($Command));
export { UpdateFirewallDeleteProtectionCommand };
//# sourceMappingURL=UpdateFirewallDeleteProtectionCommand.js.map