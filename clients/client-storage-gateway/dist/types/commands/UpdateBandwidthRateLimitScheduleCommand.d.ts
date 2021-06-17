import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateBandwidthRateLimitScheduleInput, UpdateBandwidthRateLimitScheduleOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateBandwidthRateLimitScheduleCommandInput extends UpdateBandwidthRateLimitScheduleInput {
}
export interface UpdateBandwidthRateLimitScheduleCommandOutput extends UpdateBandwidthRateLimitScheduleOutput, __MetadataBearer {
}
/**
 * <p>
 *          Updates the bandwidth rate limit schedule for a specified gateway. By default, gateways do
 *          not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect.
 *          Use this to initiate or update a gateway's bandwidth rate limit schedule.
 *          This operation is supported in the volume and tape gateway types.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateBandwidthRateLimitScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateBandwidthRateLimitScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateBandwidthRateLimitScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBandwidthRateLimitScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateBandwidthRateLimitScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBandwidthRateLimitScheduleCommand extends $Command<UpdateBandwidthRateLimitScheduleCommandInput, UpdateBandwidthRateLimitScheduleCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateBandwidthRateLimitScheduleCommandInput;
    constructor(input: UpdateBandwidthRateLimitScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBandwidthRateLimitScheduleCommandInput, UpdateBandwidthRateLimitScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
