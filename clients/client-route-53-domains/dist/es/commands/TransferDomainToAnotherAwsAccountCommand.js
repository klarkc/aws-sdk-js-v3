import { __extends } from "tslib";
import { TransferDomainToAnotherAwsAccountRequest, TransferDomainToAnotherAwsAccountResponse, } from "../models/models_0";
import { deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand, serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Transfers a domain from the current AWS account to another AWS account. Note the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>The AWS account that you're transferring the domain to must accept the transfer. If the other account
 * 				doesn't accept the transfer within 3 days, we cancel the transfer. See
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.
 * 				</p>
 * 			         </li>
 *             <li>
 *                <p>You can cancel the transfer before the other account accepts it. See
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>.
 * 				</p>
 * 			         </li>
 *             <li>
 *                <p>The other account can reject the transfer. See
 * 					<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>.
 * 				</p>
 * 			         </li>
 *          </ul>
 *
 * 		       <important>
 * 			         <p>When you transfer a domain from one AWS account to another, Route 53 doesn't transfer the hosted zone that is associated
 * 				with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts,
 * 				so transferring the hosted zone is optional. For information about transferring the hosted zone to another AWS account, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a
 * 				Different AWS Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       </important>
 *
 * 		       <p>Use either
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			to determine whether the operation succeeded.
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, TransferDomainToAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, TransferDomainToAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new TransferDomainToAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferDomainToAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link TransferDomainToAnotherAwsAccountCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TransferDomainToAnotherAwsAccountCommand = /** @class */ (function (_super) {
    __extends(TransferDomainToAnotherAwsAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TransferDomainToAnotherAwsAccountCommand(input) {
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
    TransferDomainToAnotherAwsAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53DomainsClient";
        var commandName = "TransferDomainToAnotherAwsAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TransferDomainToAnotherAwsAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TransferDomainToAnotherAwsAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TransferDomainToAnotherAwsAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand(input, context);
    };
    TransferDomainToAnotherAwsAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand(output, context);
    };
    return TransferDomainToAnotherAwsAccountCommand;
}($Command));
export { TransferDomainToAnotherAwsAccountCommand };
//# sourceMappingURL=TransferDomainToAnotherAwsAccountCommand.js.map