import { __extends } from "tslib";
import { GetFirewallDomainListRequest, GetFirewallDomainListResponse } from "../models/models_0";
import { deserializeAws_json1_1GetFirewallDomainListCommand, serializeAws_json1_1GetFirewallDomainListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified firewall domain list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallDomainListCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallDomainListCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link GetFirewallDomainListCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFirewallDomainListCommand = /** @class */ (function (_super) {
    __extends(GetFirewallDomainListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFirewallDomainListCommand(input) {
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
    GetFirewallDomainListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetFirewallDomainListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFirewallDomainListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFirewallDomainListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFirewallDomainListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetFirewallDomainListCommand(input, context);
    };
    GetFirewallDomainListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetFirewallDomainListCommand(output, context);
    };
    return GetFirewallDomainListCommand;
}($Command));
export { GetFirewallDomainListCommand };
//# sourceMappingURL=GetFirewallDomainListCommand.js.map