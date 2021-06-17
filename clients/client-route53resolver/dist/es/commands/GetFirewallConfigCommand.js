import { __extends } from "tslib";
import { GetFirewallConfigRequest, GetFirewallConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1GetFirewallConfigCommand, serializeAws_json1_1GetFirewallConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the configuration of the firewall behavior provided by DNS Firewall for a
 * 			single VPC from Amazon Virtual Private Cloud (Amazon VPC). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallConfigCommandInput} for command's `input` shape.
 * @see {@link GetFirewallConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFirewallConfigCommand = /** @class */ (function (_super) {
    __extends(GetFirewallConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFirewallConfigCommand(input) {
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
    GetFirewallConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "GetFirewallConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFirewallConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFirewallConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFirewallConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetFirewallConfigCommand(input, context);
    };
    GetFirewallConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetFirewallConfigCommand(output, context);
    };
    return GetFirewallConfigCommand;
}($Command));
export { GetFirewallConfigCommand };
//# sourceMappingURL=GetFirewallConfigCommand.js.map