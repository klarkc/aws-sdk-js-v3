import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { CreateRegexMatchSetRequest, CreateRegexMatchSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRegexMatchSetCommandInput extends CreateRegexMatchSetRequest {
}
export interface CreateRegexMatchSetCommandOutput extends CreateRegexMatchSetResponse, __MetadataBearer {
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
 *          <p>Creates a <a>RegexMatchSet</a>. You then use <a>UpdateRegexMatchSet</a> to identify the part of a
 *          web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string.
 *          For example, you can create a <code>RegexMatchSet</code> that contains a <code>RegexMatchTuple</code> that looks for any requests with <code>User-Agent</code> headers
 *          that match a <code>RegexPatternSet</code> with pattern <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>
 *          <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p>
 *          <ol>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 *                   <code>CreateRegexMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateRegexMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 *                   <code>UpdateRegexMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <a>UpdateRegexMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect
 *                   (for example, the header or the URI) and the value, using a <code>RegexPatternSet</code>, that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 *             <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateRegexMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateRegexMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new CreateRegexMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRegexMatchSetCommandInput} for command's `input` shape.
 * @see {@link CreateRegexMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRegexMatchSetCommand extends $Command<CreateRegexMatchSetCommandInput, CreateRegexMatchSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: CreateRegexMatchSetCommandInput;
    constructor(input: CreateRegexMatchSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRegexMatchSetCommandInput, CreateRegexMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
