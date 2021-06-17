import { __extends } from "tslib";
import { DisableDomainAutoRenewRequest, DisableDomainAutoRenewResponse } from "../models/models_0";
import { deserializeAws_json1_1DisableDomainAutoRenewCommand, serializeAws_json1_1DisableDomainAutoRenewCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation disables automatic renewal of domain registration for the specified domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DisableDomainAutoRenewCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DisableDomainAutoRenewCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new DisableDomainAutoRenewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableDomainAutoRenewCommandInput} for command's `input` shape.
 * @see {@link DisableDomainAutoRenewCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableDomainAutoRenewCommand = /** @class */ (function (_super) {
    __extends(DisableDomainAutoRenewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableDomainAutoRenewCommand(input) {
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
    DisableDomainAutoRenewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "DisableDomainAutoRenewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableDomainAutoRenewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableDomainAutoRenewResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableDomainAutoRenewCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableDomainAutoRenewCommand(input, context);
    };
    DisableDomainAutoRenewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableDomainAutoRenewCommand(output, context);
    };
    return DisableDomainAutoRenewCommand;
}($Command));
export { DisableDomainAutoRenewCommand };
//# sourceMappingURL=DisableDomainAutoRenewCommand.js.map