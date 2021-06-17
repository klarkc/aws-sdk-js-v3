import { __extends } from "tslib";
import { EnableDomainAutoRenewRequest, EnableDomainAutoRenewResponse } from "../models/models_0";
import { deserializeAws_json1_1EnableDomainAutoRenewCommand, serializeAws_json1_1EnableDomainAutoRenewCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires.
 * 			The cost of renewing your domain registration is billed to your AWS account.</p>
 * 		       <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period
 * 			so we can complete processing before the deadline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, EnableDomainAutoRenewCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, EnableDomainAutoRenewCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new EnableDomainAutoRenewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableDomainAutoRenewCommandInput} for command's `input` shape.
 * @see {@link EnableDomainAutoRenewCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableDomainAutoRenewCommand = /** @class */ (function (_super) {
    __extends(EnableDomainAutoRenewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableDomainAutoRenewCommand(input) {
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
    EnableDomainAutoRenewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "EnableDomainAutoRenewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableDomainAutoRenewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableDomainAutoRenewResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableDomainAutoRenewCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableDomainAutoRenewCommand(input, context);
    };
    EnableDomainAutoRenewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableDomainAutoRenewCommand(output, context);
    };
    return EnableDomainAutoRenewCommand;
}($Command));
export { EnableDomainAutoRenewCommand };
//# sourceMappingURL=EnableDomainAutoRenewCommand.js.map