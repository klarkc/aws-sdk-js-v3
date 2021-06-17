import { __extends } from "tslib";
import { ListFirewallDomainListsRequest, ListFirewallDomainListsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListFirewallDomainListsCommand, serializeAws_json1_1ListFirewallDomainListsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p>
 *          <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallDomainListsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallDomainListsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListFirewallDomainListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallDomainListsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallDomainListsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFirewallDomainListsCommand = /** @class */ (function (_super) {
    __extends(ListFirewallDomainListsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFirewallDomainListsCommand(input) {
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
    ListFirewallDomainListsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ListFirewallDomainListsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFirewallDomainListsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFirewallDomainListsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFirewallDomainListsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFirewallDomainListsCommand(input, context);
    };
    ListFirewallDomainListsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFirewallDomainListsCommand(output, context);
    };
    return ListFirewallDomainListsCommand;
}($Command));
export { ListFirewallDomainListsCommand };
//# sourceMappingURL=ListFirewallDomainListsCommand.js.map