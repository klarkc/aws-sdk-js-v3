import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDistributionRequest, CreateDistributionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDistributionCommandInput extends CreateDistributionRequest {
}
export interface CreateDistributionCommandOutput extends CreateDistributionResult, __MetadataBearer {
}
/**
 * <p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p>
 *          <p>A distribution is a globally distributed network of caching servers that improve the
 *       performance of your website or web application hosted on a Lightsail instance. For more
 *       information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDistributionCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDistributionCommand extends $Command<CreateDistributionCommandInput, CreateDistributionCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateDistributionCommandInput;
    constructor(input: CreateDistributionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDistributionCommandInput, CreateDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
