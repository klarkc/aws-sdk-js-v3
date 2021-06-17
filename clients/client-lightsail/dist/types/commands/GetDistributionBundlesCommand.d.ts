import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDistributionBundlesRequest, GetDistributionBundlesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDistributionBundlesCommandInput extends GetDistributionBundlesRequest {
}
export interface GetDistributionBundlesCommandOutput extends GetDistributionBundlesResult, __MetadataBearer {
}
/**
 * <p>Returns the list bundles that can be applied to you Amazon Lightsail content delivery
 *       network (CDN) distributions.</p>
 *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
 *       your dsitribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDistributionBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDistributionBundlesCommandInput} for command's `input` shape.
 * @see {@link GetDistributionBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDistributionBundlesCommand extends $Command<GetDistributionBundlesCommandInput, GetDistributionBundlesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDistributionBundlesCommandInput;
    constructor(input: GetDistributionBundlesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDistributionBundlesCommandInput, GetDistributionBundlesCommandOutput>;
    private serialize;
    private deserialize;
}
