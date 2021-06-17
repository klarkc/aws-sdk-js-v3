import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeBandwidthRateLimitInput, DescribeBandwidthRateLimitOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBandwidthRateLimitCommandInput extends DescribeBandwidthRateLimitInput {
}
export interface DescribeBandwidthRateLimitCommandOutput extends DescribeBandwidthRateLimitOutput, __MetadataBearer {
}
/**
 * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set,
 *          which means no bandwidth rate limiting is in effect. This operation is supported for the
 *          stored volume, cached volume, and tape gateway types.</p>
 *
 *          <p>This operation only returns a value for a bandwidth rate limit only if the limit is set.
 *          If no limits are set for the gateway, then this operation returns only the gateway ARN in
 *          the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN)
 *          of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBandwidthRateLimitCommand extends $Command<DescribeBandwidthRateLimitCommandInput, DescribeBandwidthRateLimitCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeBandwidthRateLimitCommandInput;
    constructor(input: DescribeBandwidthRateLimitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBandwidthRateLimitCommandInput, DescribeBandwidthRateLimitCommandOutput>;
    private serialize;
    private deserialize;
}
