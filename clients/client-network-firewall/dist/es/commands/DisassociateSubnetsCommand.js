import { __extends } from "tslib";
import { DisassociateSubnetsRequest, DisassociateSubnetsResponse } from "../models/models_0";
import { deserializeAws_json1_0DisassociateSubnetsCommand, serializeAws_json1_0DisassociateSubnetsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified subnet associations from the firewall. This removes the
 *           firewall endpoints from the subnets and removes any network filtering protections that the endpoints
 *           were providing.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DisassociateSubnetsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DisassociateSubnetsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DisassociateSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateSubnetsCommandInput} for command's `input` shape.
 * @see {@link DisassociateSubnetsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateSubnetsCommand = /** @class */ (function (_super) {
    __extends(DisassociateSubnetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateSubnetsCommand(input) {
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
    DisassociateSubnetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "DisassociateSubnetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateSubnetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateSubnetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateSubnetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DisassociateSubnetsCommand(input, context);
    };
    DisassociateSubnetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DisassociateSubnetsCommand(output, context);
    };
    return DisassociateSubnetsCommand;
}($Command));
export { DisassociateSubnetsCommand };
//# sourceMappingURL=DisassociateSubnetsCommand.js.map