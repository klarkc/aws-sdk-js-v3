import { __extends } from "tslib";
import { UpdateFirewallDomainsRequest, UpdateFirewallDomainsResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateFirewallDomainsCommand, serializeAws_json1_1UpdateFirewallDomainsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the firewall domain list from an array of domain specifications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDomainsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFirewallDomainsCommand = /** @class */ (function (_super) {
    __extends(UpdateFirewallDomainsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFirewallDomainsCommand(input) {
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
    UpdateFirewallDomainsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "UpdateFirewallDomainsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFirewallDomainsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFirewallDomainsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFirewallDomainsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateFirewallDomainsCommand(input, context);
    };
    UpdateFirewallDomainsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateFirewallDomainsCommand(output, context);
    };
    return UpdateFirewallDomainsCommand;
}($Command));
export { UpdateFirewallDomainsCommand };
//# sourceMappingURL=UpdateFirewallDomainsCommand.js.map