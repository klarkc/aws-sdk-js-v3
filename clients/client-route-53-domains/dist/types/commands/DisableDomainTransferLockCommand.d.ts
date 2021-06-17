import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { DisableDomainTransferLockRequest, DisableDomainTransferLockResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableDomainTransferLockCommandInput extends DisableDomainTransferLockRequest {
}
export interface DisableDomainTransferLockCommandOutput extends DisableDomainTransferLockResponse, __MetadataBearer {
}
/**
 * <p>This operation removes the transfer lock on the domain (specifically the
 * 			<code>clientTransferProhibited</code> status) to allow domain transfers. We recommend
 * 			you refrain from performing this action unless you intend to transfer the domain to a
 * 			different registrar. Successful submission returns an operation ID that you can use to track
 * 			the progress and completion of the action. If the request is not completed successfully, the
 * 			domain registrant will be notified by email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, DisableDomainTransferLockCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, DisableDomainTransferLockCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new DisableDomainTransferLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableDomainTransferLockCommandInput} for command's `input` shape.
 * @see {@link DisableDomainTransferLockCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableDomainTransferLockCommand extends $Command<DisableDomainTransferLockCommandInput, DisableDomainTransferLockCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: DisableDomainTransferLockCommandInput;
    constructor(input: DisableDomainTransferLockCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableDomainTransferLockCommandInput, DisableDomainTransferLockCommandOutput>;
    private serialize;
    private deserialize;
}
