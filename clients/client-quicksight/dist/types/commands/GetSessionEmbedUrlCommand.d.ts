import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { GetSessionEmbedUrlRequest, GetSessionEmbedUrlResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSessionEmbedUrlCommandInput extends GetSessionEmbedUrlRequest {
}
export interface GetSessionEmbedUrlCommandOutput extends GetSessionEmbedUrlResponse, __MetadataBearer {
}
/**
 * <p>Generates a session URL and authorization code that you can use to embed the Amazon
 *             QuickSight console in your web server code. Use <code>GetSessionEmbedUrl</code> where
 *             you want to provide an authoring portal that allows users to create data sources,
 *             datasets, analyses, and dashboards. The users who access an embedded QuickSight console
 *             need belong to the author or admin security cohort. If you want to restrict permissions
 *             to some of these features, add a custom permissions profile to the user with the
 *             <code>
 *                <a>UpdateUser</a>
 *             </code> API operation. Use <code>
 *                <a>RegisterUser</a>
 *             </code> API operation to add a new user with a custom permission profile attached. For more
 *             information, see the following sections in the <i>Amazon QuickSight User
 *             Guide</i>:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-the-quicksight-console.html">Embedding the Amazon QuickSight Console</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon QuickSight Console</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetSessionEmbedUrlCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetSessionEmbedUrlCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new GetSessionEmbedUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSessionEmbedUrlCommandInput} for command's `input` shape.
 * @see {@link GetSessionEmbedUrlCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSessionEmbedUrlCommand extends $Command<GetSessionEmbedUrlCommandInput, GetSessionEmbedUrlCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: GetSessionEmbedUrlCommandInput;
    constructor(input: GetSessionEmbedUrlCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSessionEmbedUrlCommandInput, GetSessionEmbedUrlCommandOutput>;
    private serialize;
    private deserialize;
}
