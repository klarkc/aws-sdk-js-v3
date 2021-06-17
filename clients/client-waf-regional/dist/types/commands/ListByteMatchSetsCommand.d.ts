import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListByteMatchSetsRequest, ListByteMatchSetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListByteMatchSetsCommandInput extends ListByteMatchSetsRequest {
}
export interface ListByteMatchSetsCommandOutput extends ListByteMatchSetsResponse, __MetadataBearer {
}
/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns an array of <a>ByteMatchSetSummary</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListByteMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListByteMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new ListByteMatchSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListByteMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListByteMatchSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListByteMatchSetsCommand extends $Command<ListByteMatchSetsCommandInput, ListByteMatchSetsCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: ListByteMatchSetsCommandInput;
    constructor(input: ListByteMatchSetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListByteMatchSetsCommandInput, ListByteMatchSetsCommandOutput>;
    private serialize;
    private deserialize;
}
