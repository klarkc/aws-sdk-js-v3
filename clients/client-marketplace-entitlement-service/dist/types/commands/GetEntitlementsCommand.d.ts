import { MarketplaceEntitlementServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceEntitlementServiceClient";
import { GetEntitlementsRequest, GetEntitlementsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEntitlementsCommandInput extends GetEntitlementsRequest {
}
export interface GetEntitlementsCommandOutput extends GetEntitlementsResult, __MetadataBearer {
}
/**
 * <p>GetEntitlements retrieves entitlement values for a given product. The results can be
 *       filtered based on customer identifier or product dimensions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceEntitlementServiceClient, GetEntitlementsCommand } from "@aws-sdk/client-marketplace-entitlement-service"; // ES Modules import
 * // const { MarketplaceEntitlementServiceClient, GetEntitlementsCommand } = require("@aws-sdk/client-marketplace-entitlement-service"); // CommonJS import
 * const client = new MarketplaceEntitlementServiceClient(config);
 * const command = new GetEntitlementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEntitlementsCommandInput} for command's `input` shape.
 * @see {@link GetEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceEntitlementServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEntitlementsCommand extends $Command<GetEntitlementsCommandInput, GetEntitlementsCommandOutput, MarketplaceEntitlementServiceClientResolvedConfig> {
    readonly input: GetEntitlementsCommandInput;
    constructor(input: GetEntitlementsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceEntitlementServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEntitlementsCommandInput, GetEntitlementsCommandOutput>;
    private serialize;
    private deserialize;
}
