import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetBundlesRequest, GetBundlesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBundlesCommandInput extends GetBundlesRequest {
}
export interface GetBundlesCommandOutput extends GetBundlesResult, __MetadataBearer {
}
/**
 * <p>Returns the list of bundles that are available for purchase. A bundle describes the specs
 *       for your virtual private server (or <i>instance</i>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBundlesCommandInput} for command's `input` shape.
 * @see {@link GetBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBundlesCommand extends $Command<GetBundlesCommandInput, GetBundlesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetBundlesCommandInput;
    constructor(input: GetBundlesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBundlesCommandInput, GetBundlesCommandOutput>;
    private serialize;
    private deserialize;
}
