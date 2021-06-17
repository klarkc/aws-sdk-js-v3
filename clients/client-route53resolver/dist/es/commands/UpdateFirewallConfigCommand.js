import { __extends } from "tslib";
import { UpdateFirewallConfigRequest, UpdateFirewallConfigResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateFirewallConfigCommand, serializeAws_json1_1UpdateFirewallConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration of the firewall behavior provided by DNS Firewall for a single
 * 			VPC from Amazon Virtual Private Cloud (Amazon VPC). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateFirewallConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFirewallConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateFirewallConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFirewallConfigCommand(input) {
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
    UpdateFirewallConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "UpdateFirewallConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFirewallConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFirewallConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFirewallConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateFirewallConfigCommand(input, context);
    };
    UpdateFirewallConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateFirewallConfigCommand(output, context);
    };
    return UpdateFirewallConfigCommand;
}($Command));
export { UpdateFirewallConfigCommand };
//# sourceMappingURL=UpdateFirewallConfigCommand.js.map