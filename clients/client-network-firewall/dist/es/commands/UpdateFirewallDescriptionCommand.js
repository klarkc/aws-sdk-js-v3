import { __extends } from "tslib";
import { UpdateFirewallDescriptionRequest, UpdateFirewallDescriptionResponse } from "../models/models_0";
import { deserializeAws_json1_0UpdateFirewallDescriptionCommand, serializeAws_json1_0UpdateFirewallDescriptionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the description for the specified firewall. Use the description to help you
 *          identify the firewall when you're working with it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallDescriptionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallDescriptionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDescriptionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFirewallDescriptionCommand = /** @class */ (function (_super) {
    __extends(UpdateFirewallDescriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFirewallDescriptionCommand(input) {
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
    UpdateFirewallDescriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "UpdateFirewallDescriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFirewallDescriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFirewallDescriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFirewallDescriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateFirewallDescriptionCommand(input, context);
    };
    UpdateFirewallDescriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateFirewallDescriptionCommand(output, context);
    };
    return UpdateFirewallDescriptionCommand;
}($Command));
export { UpdateFirewallDescriptionCommand };
//# sourceMappingURL=UpdateFirewallDescriptionCommand.js.map