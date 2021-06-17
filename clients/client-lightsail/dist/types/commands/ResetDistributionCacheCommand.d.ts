import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { ResetDistributionCacheRequest, ResetDistributionCacheResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetDistributionCacheCommandInput extends ResetDistributionCacheRequest {
}
export interface ResetDistributionCacheCommandOutput extends ResetDistributionCacheResult, __MetadataBearer {
}
/**
 * <p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After resetting the cache, the next time a content request is made, your distribution
 *       pulls, serves, and caches it from the origin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ResetDistributionCacheCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ResetDistributionCacheCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ResetDistributionCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDistributionCacheCommandInput} for command's `input` shape.
 * @see {@link ResetDistributionCacheCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetDistributionCacheCommand extends $Command<ResetDistributionCacheCommandInput, ResetDistributionCacheCommandOutput, LightsailClientResolvedConfig> {
    readonly input: ResetDistributionCacheCommandInput;
    constructor(input: ResetDistributionCacheCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetDistributionCacheCommandInput, ResetDistributionCacheCommandOutput>;
    private serialize;
    private deserialize;
}
