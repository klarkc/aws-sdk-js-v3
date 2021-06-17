import { MarketplaceMeteringClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceMeteringClient";
import { BatchMeterUsageRequest, BatchMeterUsageResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchMeterUsageCommandInput extends BatchMeterUsageRequest {
}
export interface BatchMeterUsageCommandOutput extends BatchMeterUsageResult, __MetadataBearer {
}
/**
 * <p>BatchMeterUsage is called from a SaaS application listed on the AWS Marketplace to
 *             post metering records for a set of customers.</p>
 *         <p>For identical requests, the API is idempotent; requests can be retried with the
 *             same records or a subset of the input records.</p>
 *         <p>Every request to BatchMeterUsage is for one product. If you need to meter usage for
 *             multiple products, you must make multiple calls to BatchMeterUsage.</p>
 *         <p>BatchMeterUsage can process up to 25 UsageRecords at a time.</p>
 *         <p>A UsageRecord can optionally include multiple usage allocations, to provide customers
 *             with usagedata split into buckets by tags that you define (or allow the customer to
 *             define).</p>
 *         <p>BatchMeterUsage requests must be less than 1MB in size.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, BatchMeterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, BatchMeterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new BatchMeterUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchMeterUsageCommandInput} for command's `input` shape.
 * @see {@link BatchMeterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchMeterUsageCommand extends $Command<BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput, MarketplaceMeteringClientResolvedConfig> {
    readonly input: BatchMeterUsageCommandInput;
    constructor(input: BatchMeterUsageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceMeteringClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput>;
    private serialize;
    private deserialize;
}
