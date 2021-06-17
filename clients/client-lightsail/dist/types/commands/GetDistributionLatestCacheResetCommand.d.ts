import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDistributionLatestCacheResetRequest, GetDistributionLatestCacheResetResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDistributionLatestCacheResetCommandInput extends GetDistributionLatestCacheResetRequest {
}
export interface GetDistributionLatestCacheResetCommandOutput extends GetDistributionLatestCacheResetResult, __MetadataBearer {
}
/**
 * <p>Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail
 *       content delivery network (CDN) distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionLatestCacheResetCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionLatestCacheResetCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDistributionLatestCacheResetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionLatestCacheResetCommandInput} for command's `input` shape.
 * @see {@link GetDistributionLatestCacheResetCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDistributionLatestCacheResetCommand extends $Command<GetDistributionLatestCacheResetCommandInput, GetDistributionLatestCacheResetCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDistributionLatestCacheResetCommandInput;
    constructor(input: GetDistributionLatestCacheResetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDistributionLatestCacheResetCommandInput, GetDistributionLatestCacheResetCommandOutput>;
    private serialize;
    private deserialize;
}
