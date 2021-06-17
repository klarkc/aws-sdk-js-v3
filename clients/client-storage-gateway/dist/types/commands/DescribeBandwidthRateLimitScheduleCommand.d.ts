import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeBandwidthRateLimitScheduleInput, DescribeBandwidthRateLimitScheduleOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBandwidthRateLimitScheduleCommandInput extends DescribeBandwidthRateLimitScheduleInput {
}
export interface DescribeBandwidthRateLimitScheduleCommandOutput extends DescribeBandwidthRateLimitScheduleOutput, __MetadataBearer {
}
/**
 * <p>
 *          Returns information about the bandwidth rate limit schedule of a gateway. By default, gateways do
 *          not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. This
 *          operation is supported only in the volume and tape gateway types.
 *       </p>
 *
 *          <p>This operation returns information about a gateway's bandwidth rate limit schedule. A bandwidth
 *          rate limit schedule consists of one or more bandwidth rate limit intervals. A bandwidth rate limit
 *          interval defines a period of time on one or more days of the week, during which bandwidth rate
 *          limits are specified for uploading, downloading, or both.
 *       </p>
 *
 *          <p>
 *          A bandwidth rate limit interval consists of one or more days of the week, a start hour and minute,
 *          an ending hour and minute, and bandwidth rate limits for uploading and downloading
 *       </p>
 *
 *          <p>
 *          If no bandwidth rate limit schedule intervals are set for the gateway, this operation returns an
 *          empty response. To specify which gateway to describe, use the Amazon Resource Name (ARN)
 *          of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBandwidthRateLimitScheduleCommand extends $Command<DescribeBandwidthRateLimitScheduleCommandInput, DescribeBandwidthRateLimitScheduleCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeBandwidthRateLimitScheduleCommandInput;
    constructor(input: DescribeBandwidthRateLimitScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBandwidthRateLimitScheduleCommandInput, DescribeBandwidthRateLimitScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
