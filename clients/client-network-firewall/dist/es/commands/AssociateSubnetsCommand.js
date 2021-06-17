import { __extends } from "tslib";
import { AssociateSubnetsRequest, AssociateSubnetsResponse } from "../models/models_0";
import { deserializeAws_json1_0AssociateSubnetsCommand, serializeAws_json1_0AssociateSubnetsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one
 *          subnet for each of the Availability Zones that the VPC spans. </p>
 *          <p>This request creates an AWS Network Firewall firewall endpoint in each of the subnets. To
 *          enable the firewall's protections, you must also modify the VPC's route tables for each
 *          subnet's Availability Zone, to redirect the traffic that's coming into and going out of the
 *          zone through the firewall endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AssociateSubnetsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AssociateSubnetsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new AssociateSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSubnetsCommandInput} for command's `input` shape.
 * @see {@link AssociateSubnetsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateSubnetsCommand = /** @class */ (function (_super) {
    __extends(AssociateSubnetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateSubnetsCommand(input) {
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
    AssociateSubnetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "AssociateSubnetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateSubnetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateSubnetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateSubnetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0AssociateSubnetsCommand(input, context);
    };
    AssociateSubnetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0AssociateSubnetsCommand(output, context);
    };
    return AssociateSubnetsCommand;
}($Command));
export { AssociateSubnetsCommand };
//# sourceMappingURL=AssociateSubnetsCommand.js.map