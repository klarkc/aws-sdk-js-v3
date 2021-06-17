import { __extends } from "tslib";
import { DeleteFirewallDomainListRequest, DeleteFirewallDomainListResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteFirewallDomainListCommand, serializeAws_json1_1DeleteFirewallDomainListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified domain list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DeleteFirewallDomainListCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DeleteFirewallDomainListCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DeleteFirewallDomainListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFirewallDomainListCommandInput} for command's `input` shape.
 * @see {@link DeleteFirewallDomainListCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFirewallDomainListCommand = /** @class */ (function (_super) {
    __extends(DeleteFirewallDomainListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFirewallDomainListCommand(input) {
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
    DeleteFirewallDomainListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53ResolverClient";
        var commandName = "DeleteFirewallDomainListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFirewallDomainListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFirewallDomainListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFirewallDomainListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFirewallDomainListCommand(input, context);
    };
    DeleteFirewallDomainListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFirewallDomainListCommand(output, context);
    };
    return DeleteFirewallDomainListCommand;
}($Command));
export { DeleteFirewallDomainListCommand };
//# sourceMappingURL=DeleteFirewallDomainListCommand.js.map