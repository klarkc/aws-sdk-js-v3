import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { GetDomainDetailRequest, GetDomainDetailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDomainDetailCommandInput extends GetDomainDetailRequest {
}
export interface GetDomainDetailCommandOutput extends GetDomainDetailResponse, __MetadataBearer {
}
/**
 * <p>This operation returns detailed information about a specified domain that is associated with the current AWS account.
 * 			Contact information for the domain is also returned as part of the output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetDomainDetailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetDomainDetailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * const client = new Route53DomainsClient(config);
 * const command = new GetDomainDetailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainDetailCommandInput} for command's `input` shape.
 * @see {@link GetDomainDetailCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDomainDetailCommand extends $Command<GetDomainDetailCommandInput, GetDomainDetailCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: GetDomainDetailCommandInput;
    constructor(input: GetDomainDetailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDomainDetailCommandInput, GetDomainDetailCommandOutput>;
    private serialize;
    private deserialize;
}
