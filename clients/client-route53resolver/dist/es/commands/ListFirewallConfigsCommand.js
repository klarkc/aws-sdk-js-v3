import { __extends } from "tslib";
import { ListFirewallConfigsRequest, ListFirewallConfigsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListFirewallConfigsCommand, serializeAws_json1_1ListFirewallConfigsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p>
 *          <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListFirewallConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFirewallConfigsCommand = /** @class */ (function (_super) {
    __extends(ListFirewallConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFirewallConfigsCommand(input) {
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
    ListFirewallConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListFirewallConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFirewallConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFirewallConfigsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFirewallConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFirewallConfigsCommand(input, context);
    };
    ListFirewallConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFirewallConfigsCommand(output, context);
    };
    return ListFirewallConfigsCommand;
}($Command));
export { ListFirewallConfigsCommand };
//# sourceMappingURL=ListFirewallConfigsCommand.js.map