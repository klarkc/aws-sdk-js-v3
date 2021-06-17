import { __extends } from "tslib";
import { UpdateSubnetChangeProtectionRequest, UpdateSubnetChangeProtectionResponse } from "../models/models_0";
import { deserializeAws_json1_0UpdateSubnetChangeProtectionCommand, serializeAws_json1_0UpdateSubnetChangeProtectionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateSubnetChangeProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateSubnetChangeProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateSubnetChangeProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSubnetChangeProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateSubnetChangeProtectionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSubnetChangeProtectionCommand = /** @class */ (function (_super) {
    __extends(UpdateSubnetChangeProtectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSubnetChangeProtectionCommand(input) {
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
    UpdateSubnetChangeProtectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "UpdateSubnetChangeProtectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSubnetChangeProtectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSubnetChangeProtectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSubnetChangeProtectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateSubnetChangeProtectionCommand(input, context);
    };
    UpdateSubnetChangeProtectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateSubnetChangeProtectionCommand(output, context);
    };
    return UpdateSubnetChangeProtectionCommand;
}($Command));
export { UpdateSubnetChangeProtectionCommand };
//# sourceMappingURL=UpdateSubnetChangeProtectionCommand.js.map