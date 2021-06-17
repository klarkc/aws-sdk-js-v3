import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListResourcesForWebACLRequest, ListResourcesForWebACLResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourcesForWebACLCommandInput extends ListResourcesForWebACLRequest {
}
export interface ListResourcesForWebACLCommandOutput extends ListResourcesForWebACLResponse, __MetadataBearer {
}
/**
 * <note>
 *             <p>This is <b>AWS WAF Classic Regional</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns an array of resources associated with the specified web ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListResourcesForWebACLCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListResourcesForWebACLCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new ListResourcesForWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcesForWebACLCommandInput} for command's `input` shape.
 * @see {@link ListResourcesForWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourcesForWebACLCommand extends $Command<ListResourcesForWebACLCommandInput, ListResourcesForWebACLCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListResourcesForWebACLCommandInput;
    constructor(input: ListResourcesForWebACLCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourcesForWebACLCommandInput, ListResourcesForWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
