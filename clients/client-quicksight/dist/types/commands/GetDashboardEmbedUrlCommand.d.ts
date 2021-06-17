import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { GetDashboardEmbedUrlRequest, GetDashboardEmbedUrlResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDashboardEmbedUrlCommandInput extends GetDashboardEmbedUrlRequest {
}
export interface GetDashboardEmbedUrlCommandOutput extends GetDashboardEmbedUrlResponse, __MetadataBearer {
}
/**
 * <p>Generates a session URL and authorization code that you can use to embed an Amazon
 *             QuickSight read-only dashboard in your web server code. Before you use this command,
 *             make sure that you have configured the dashboards and permissions. </p>
 *         <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not
 *             from the user's browser. The following rules apply to the combination of URL and
 *             authorization code:</p>
 *         <ul>
 *             <li>
 *                 <p>They must be used together.</p>
 *             </li>
 *             <li>
 *                 <p>They can be used one time only.</p>
 *             </li>
 *             <li>
 *                 <p>They are valid for 5 minutes after you run this command.</p>
 *             </li>
 *             <li>
 *                 <p>The resulting user session is valid for 10 hours.</p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedded Analytics</a> in the <i>Amazon QuickSight User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetDashboardEmbedUrlCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetDashboardEmbedUrlCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new GetDashboardEmbedUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDashboardEmbedUrlCommandInput} for command's `input` shape.
 * @see {@link GetDashboardEmbedUrlCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDashboardEmbedUrlCommand extends $Command<GetDashboardEmbedUrlCommandInput, GetDashboardEmbedUrlCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: GetDashboardEmbedUrlCommandInput;
    constructor(input: GetDashboardEmbedUrlCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDashboardEmbedUrlCommandInput, GetDashboardEmbedUrlCommandOutput>;
    private serialize;
    private deserialize;
}
