import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { CheckDomainTransferabilityRequest, CheckDomainTransferabilityResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CheckDomainTransferabilityCommandInput extends CheckDomainTransferabilityRequest {
}
export interface CheckDomainTransferabilityCommandOutput extends CheckDomainTransferabilityResponse, __MetadataBearer {
}
/**
 * <p>Checks whether a domain name can be transferred to Amazon Route 53. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, CheckDomainTransferabilityCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, CheckDomainTransferabilityCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new CheckDomainTransferabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckDomainTransferabilityCommandInput} for command's `input` shape.
 * @see {@link CheckDomainTransferabilityCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CheckDomainTransferabilityCommand extends $Command<CheckDomainTransferabilityCommandInput, CheckDomainTransferabilityCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: CheckDomainTransferabilityCommandInput;
    constructor(input: CheckDomainTransferabilityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckDomainTransferabilityCommandInput, CheckDomainTransferabilityCommandOutput>;
    private serialize;
    private deserialize;
}
