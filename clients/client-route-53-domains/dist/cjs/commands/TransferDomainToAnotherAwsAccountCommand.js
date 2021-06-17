"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferDomainToAnotherAwsAccountCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class TransferDomainToAnotherAwsAccountCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "Route53DomainsClient";
        const commandName = "TransferDomainToAnotherAwsAccountCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.TransferDomainToAnotherAwsAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.TransferDomainToAnotherAwsAccountResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand(output, context);
    }
}
exports.TransferDomainToAnotherAwsAccountCommand = TransferDomainToAnotherAwsAccountCommand;
//# sourceMappingURL=TransferDomainToAnotherAwsAccountCommand.js.map