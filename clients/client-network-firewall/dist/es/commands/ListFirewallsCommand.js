import { __extends } from "tslib";
import { ListFirewallsRequest, ListFirewallsResponse } from "../models/models_0";
import { deserializeAws_json1_0ListFirewallsCommand, serializeAws_json1_0ListFirewallsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC
 *          identifiers in your request, this returns only the firewalls for those VPCs.</p>
 *          <p>Depending on your setting for max results and the number of firewalls, a single call
 *          might not return the full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFirewallsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListFirewallsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new ListFirewallsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFirewallsCommand = /** @class */ (function (_super) {
    __extends(ListFirewallsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFirewallsCommand(input) {
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
    ListFirewallsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkFirewallClient";
        var commandName = "ListFirewallsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFirewallsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFirewallsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFirewallsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListFirewallsCommand(input, context);
    };
    ListFirewallsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListFirewallsCommand(output, context);
    };
    return ListFirewallsCommand;
}($Command));
export { ListFirewallsCommand };
//# sourceMappingURL=ListFirewallsCommand.js.map