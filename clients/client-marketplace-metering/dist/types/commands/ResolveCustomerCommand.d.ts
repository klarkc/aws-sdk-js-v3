import { MarketplaceMeteringClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceMeteringClient";
import { ResolveCustomerRequest, ResolveCustomerResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResolveCustomerCommandInput extends ResolveCustomerRequest {
}
export interface ResolveCustomerCommandOutput extends ResolveCustomerResult, __MetadataBearer {
}
/**
 * <p>ResolveCustomer is called by a SaaS application during the registration process.
 *             When a buyer visits your website during the registration process, the buyer submits a
 *             registration token through their browser. The registration token is resolved through
 *             this API to obtain a CustomerIdentifier and product code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, ResolveCustomerCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, ResolveCustomerCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new ResolveCustomerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveCustomerCommandInput} for command's `input` shape.
 * @see {@link ResolveCustomerCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResolveCustomerCommand extends $Command<ResolveCustomerCommandInput, ResolveCustomerCommandOutput, MarketplaceMeteringClientResolvedConfig> {
    readonly input: ResolveCustomerCommandInput;
    constructor(input: ResolveCustomerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceMeteringClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResolveCustomerCommandInput, ResolveCustomerCommandOutput>;
    private serialize;
    private deserialize;
}
