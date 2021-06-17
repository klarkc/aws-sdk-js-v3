import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { EnableDomainTransferLockRequest, EnableDomainTransferLockResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableDomainTransferLockCommandInput extends EnableDomainTransferLockRequest {
}
export interface EnableDomainTransferLockCommandOutput extends EnableDomainTransferLockResponse, __MetadataBearer {
}
/**
 * <p>This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status)
 * 			to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and
 * 			completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, EnableDomainTransferLockCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, EnableDomainTransferLockCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new EnableDomainTransferLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableDomainTransferLockCommandInput} for command's `input` shape.
 * @see {@link EnableDomainTransferLockCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableDomainTransferLockCommand extends $Command<EnableDomainTransferLockCommandInput, EnableDomainTransferLockCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: EnableDomainTransferLockCommandInput;
    constructor(input: EnableDomainTransferLockCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableDomainTransferLockCommandInput, EnableDomainTransferLockCommandOutput>;
    private serialize;
    private deserialize;
}
