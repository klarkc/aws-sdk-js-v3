import { __extends } from "tslib";
import { ListFirewallDomainsRequest, ListFirewallDomainsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListFirewallDomainsCommand, serializeAws_json1_1ListFirewallDomainsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the domains that you have defined for the specified firewall domain list.  </p>
 *          <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallDomainsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFirewallDomainsCommand = /** @class */ (function (_super) {
    __extends(ListFirewallDomainsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFirewallDomainsCommand(input) {
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
    ListFirewallDomainsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListFirewallDomainsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFirewallDomainsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFirewallDomainsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFirewallDomainsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFirewallDomainsCommand(input, context);
    };
    ListFirewallDomainsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFirewallDomainsCommand(output, context);
    };
    return ListFirewallDomainsCommand;
}($Command));
export { ListFirewallDomainsCommand };
//# sourceMappingURL=ListFirewallDomainsCommand.js.map