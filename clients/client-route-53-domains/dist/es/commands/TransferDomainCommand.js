import { __extends } from "tslib";
import { TransferDomainRequest, TransferDomainResponse } from "../models/models_0";
import { deserializeAws_json1_1TransferDomainCommand, serializeAws_json1_1TransferDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with
 * 			Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p>
 * 		       <p>For more information about transferring domains, see the following topics:</p>
 * 		       <ul>
 *             <li>
 *                <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring
 * 				to Route 53, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a
 * 				Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>For information about how to transfer a domain from one AWS account to another, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.
 * 				</p>
 * 			         </li>
 *             <li>
 *                <p>For information about how to transfer a domain to another domain registrar, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from
 * 				Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 * 		       <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you
 * 			transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars
 * 			provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar
 * 			will not renew your domain registration and could end your DNS service at any time.</p>
 *
 * 			      <important>
 * 				        <p>If the registrar for your domain is also the DNS service provider for the domain and you don't
 * 					transfer DNS service to another provider, your website, email, and the web applications associated with the domain
 * 					might become unavailable.</p>
 * 			      </important>
 *
 * 		       <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and
 * 			completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, TransferDomainCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, TransferDomainCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new TransferDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferDomainCommandInput} for command's `input` shape.
 * @see {@link TransferDomainCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TransferDomainCommand = /** @class */ (function (_super) {
    __extends(TransferDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TransferDomainCommand(input) {
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
    TransferDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "TransferDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TransferDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TransferDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TransferDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TransferDomainCommand(input, context);
    };
    TransferDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TransferDomainCommand(output, context);
    };
    return TransferDomainCommand;
}($Command));
export { TransferDomainCommand };
//# sourceMappingURL=TransferDomainCommand.js.map