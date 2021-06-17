import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { AcceptDomainTransferFromAnotherAwsAccountRequest, AcceptDomainTransferFromAnotherAwsAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptDomainTransferFromAnotherAwsAccountCommandInput extends AcceptDomainTransferFromAnotherAwsAccountRequest {
}
export interface AcceptDomainTransferFromAnotherAwsAccountCommandOutput extends AcceptDomainTransferFromAnotherAwsAccountResponse, __MetadataBearer {
}
/**
 * <p>Accepts the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.
 * 		</p>
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
 * import { Route53DomainsClient, AcceptDomainTransferFromAnotherAwsAccountCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, AcceptDomainTransferFromAnotherAwsAccountCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new AcceptDomainTransferFromAnotherAwsAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptDomainTransferFromAnotherAwsAccountCommandInput} for command's `input` shape.
 * @see {@link AcceptDomainTransferFromAnotherAwsAccountCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptDomainTransferFromAnotherAwsAccountCommand extends $Command<AcceptDomainTransferFromAnotherAwsAccountCommandInput, AcceptDomainTransferFromAnotherAwsAccountCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: AcceptDomainTransferFromAnotherAwsAccountCommandInput;
    constructor(input: AcceptDomainTransferFromAnotherAwsAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptDomainTransferFromAnotherAwsAccountCommandInput, AcceptDomainTransferFromAnotherAwsAccountCommandOutput>;
    private serialize;
    private deserialize;
}
