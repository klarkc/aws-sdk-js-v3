import { __extends } from "tslib";
import { CreateFirewallDomainListRequest, CreateFirewallDomainListResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateFirewallDomainListCommand, serializeAws_json1_1CreateFirewallDomainListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateFirewallDomainListCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateFirewallDomainListCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link CreateFirewallDomainListCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFirewallDomainListCommand = /** @class */ (function (_super) {
    __extends(CreateFirewallDomainListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFirewallDomainListCommand(input) {
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
    CreateFirewallDomainListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "CreateFirewallDomainListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFirewallDomainListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFirewallDomainListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFirewallDomainListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateFirewallDomainListCommand(input, context);
    };
    CreateFirewallDomainListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateFirewallDomainListCommand(output, context);
    };
    return CreateFirewallDomainListCommand;
}($Command));
export { CreateFirewallDomainListCommand };
//# sourceMappingURL=CreateFirewallDomainListCommand.js.map