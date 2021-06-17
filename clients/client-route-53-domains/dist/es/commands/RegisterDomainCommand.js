import { __extends } from "tslib";
import { RegisterDomainRequest, RegisterDomainResponse } from "../models/models_0";
import { deserializeAws_json1_1RegisterDomainCommand, serializeAws_json1_1RegisterDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by
 * 			our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p>
 * 		       <p>When you register a domain, Amazon Route 53 does the following:</p>
 * 			      <ul>
 *             <li>
 *                <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers
 * 					to your hosted zone and automatically updates your domain registration with the names of these name servers.</p>
 *             </li>
 *             <li>
 *                <p>Enables autorenew, so your domain registration will renew automatically each year. We'll notify you
 * 					in advance of the renewal date so you can choose whether to renew the registration.</p>
 *             </li>
 *             <li>
 *                <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar
 * 					(for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy
 * 					protection, WHOIS queries return the information that you entered for the registrant, admin, and tech contacts.</p>
 *             </li>
 *             <li>
 *                <p>If registration is successful, returns an operation ID that you can use to track the progress and
 * 					completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p>
 *             </li>
 *             <li>
 *                <p>Charges your AWS account an amount based on the top-level domain. For more information, see
 * 					<a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, RegisterDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, RegisterDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new RegisterDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDomainCommandInput} for command's `input` shape.
 * @see {@link RegisterDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterDomainCommand = /** @class */ (function (_super) {
    __extends(RegisterDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterDomainCommand(input) {
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
    RegisterDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "RegisterDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterDomainCommand(input, context);
    };
    RegisterDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterDomainCommand(output, context);
    };
    return RegisterDomainCommand;
}($Command));
export { RegisterDomainCommand };
//# sourceMappingURL=RegisterDomainCommand.js.map