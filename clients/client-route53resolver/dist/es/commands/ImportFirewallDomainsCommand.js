import { __extends } from "tslib";
import { ImportFirewallDomainsRequest, ImportFirewallDomainsResponse } from "../models/models_0";
import { deserializeAws_json1_1ImportFirewallDomainsCommand, serializeAws_json1_1ImportFirewallDomainsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p>
 *          <p>Each domain specification in your domain list must satisfy the following
 * 	requirements: </p>
 *          <ul>
 *             <li>
 *       	        <p>It can optionally start with <code>*</code> (asterisk).</p>
 *       	     </li>
 *             <li>
 *       	        <p>With the exception of the optional starting asterisk, it must only contain
 *       	   the following characters: <code>A-Z</code>, <code>a-z</code>,
 *       	   <code>0-9</code>, <code>-</code> (hyphen).</p>
 *       	     </li>
 *             <li>
 *       	        <p>It must be from 1-255 characters in length. </p>
 *       	     </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ImportFirewallDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ImportFirewallDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ImportFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link ImportFirewallDomainsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportFirewallDomainsCommand = /** @class */ (function (_super) {
    __extends(ImportFirewallDomainsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportFirewallDomainsCommand(input) {
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
    ImportFirewallDomainsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "ImportFirewallDomainsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportFirewallDomainsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportFirewallDomainsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportFirewallDomainsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportFirewallDomainsCommand(input, context);
    };
    ImportFirewallDomainsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportFirewallDomainsCommand(output, context);
    };
    return ImportFirewallDomainsCommand;
}($Command));
export { ImportFirewallDomainsCommand };
//# sourceMappingURL=ImportFirewallDomainsCommand.js.map