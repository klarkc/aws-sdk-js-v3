import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateDistributionBundleRequest, UpdateDistributionBundleResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDistributionBundleCommandInput extends UpdateDistributionBundleRequest {
}
export interface UpdateDistributionBundleCommandOutput extends UpdateDistributionBundleResult, __MetadataBearer {
}
/**
 * <p>Updates the bundle of your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
 *       your dsitribution.</p>
 *          <p>Update your distribution's bundle if your distribution is going over its monthly network
 *       transfer quota and is incurring an overage fee.</p>
 *          <p>You can update your distribution's bundle only one time within your monthly AWS billing
 *       cycle. To determine if you can update your distribution's bundle, use the
 *         <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the
 *       result will indicate whether you can currently update your distribution's bundle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateDistributionBundleCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateDistributionBundleCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateDistributionBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionBundleCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionBundleCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDistributionBundleCommand extends $Command<UpdateDistributionBundleCommandInput, UpdateDistributionBundleCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateDistributionBundleCommandInput;
    constructor(input: UpdateDistributionBundleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDistributionBundleCommandInput, UpdateDistributionBundleCommandOutput>;
    private serialize;
    private deserialize;
}
