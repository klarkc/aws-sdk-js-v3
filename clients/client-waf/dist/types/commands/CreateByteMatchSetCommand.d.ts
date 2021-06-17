import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateByteMatchSetRequest, CreateByteMatchSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateByteMatchSetCommandInput extends CreateByteMatchSetRequest {
}
export interface CreateByteMatchSetCommandOutput extends CreateByteMatchSetResponse, __MetadataBearer {
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
 * 		       <p>Creates a <code>ByteMatchSet</code>. You then use <a>UpdateByteMatchSet</a> to identify the part of a
 * 			web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string.
 * 			For example, you can create a <code>ByteMatchSet</code> that matches any requests with <code>User-Agent</code> headers
 * 			that contain the string <code>BadBot</code>. You can then configure AWS WAF to reject those requests.</p>
 * 		       <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>CreateByteMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateByteMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<code>UpdateByteMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <a>UpdateByteMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect
 * 				(for example, the header or the URI) and the value that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateByteMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateByteMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new CreateByteMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateByteMatchSetCommandInput} for command's `input` shape.
 * @see {@link CreateByteMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateByteMatchSetCommand extends $Command<CreateByteMatchSetCommandInput, CreateByteMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: CreateByteMatchSetCommandInput;
    constructor(input: CreateByteMatchSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateByteMatchSetCommandInput, CreateByteMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
