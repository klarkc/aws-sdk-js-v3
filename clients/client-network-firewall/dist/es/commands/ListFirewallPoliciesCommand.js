import { __extends } from "tslib";
import { ListFirewallPoliciesRequest, ListFirewallPoliciesResponse } from "../models/models_0";
import { deserializeAws_json1_0ListFirewallPoliciesCommand, serializeAws_json1_0ListFirewallPoliciesCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the metadata for the firewall policies that you have defined. Depending on
 *          your setting for max results and the number of firewall policies, a single call might not
 *          return the full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFirewallPoliciesCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListFirewallPoliciesCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new ListFirewallPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListFirewallPoliciesCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFirewallPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListFirewallPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFirewallPoliciesCommand(input) {
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
    ListFirewallPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "ListFirewallPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFirewallPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFirewallPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFirewallPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListFirewallPoliciesCommand(input, context);
    };
    ListFirewallPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListFirewallPoliciesCommand(output, context);
    };
    return ListFirewallPoliciesCommand;
}($Command));
export { ListFirewallPoliciesCommand };
//# sourceMappingURL=ListFirewallPoliciesCommand.js.map