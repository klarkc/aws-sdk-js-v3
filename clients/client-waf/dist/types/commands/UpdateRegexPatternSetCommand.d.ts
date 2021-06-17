import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { UpdateRegexPatternSetRequest, UpdateRegexPatternSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRegexPatternSetCommandInput extends UpdateRegexPatternSetRequest {
}
export interface UpdateRegexPatternSetCommandOutput extends UpdateRegexPatternSetResponse, __MetadataBearer {
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
 *          <p>Inserts or deletes <code>RegexPatternString</code> objects in a <a>RegexPatternSet</a>. For each <code>RegexPatternString</code> object,
 * 			you specify the following values: </p>
 * 		       <ul>
 *             <li>
 * 			            <p>Whether to insert or delete the <code>RegexPatternString</code>.</p>
 *             </li>
 *             <li>
 *                <p>The regular expression pattern that you want to insert or delete. For more information, see <a>RegexPatternSet</a>. </p>
 *             </li>
 *          </ul>
 * 		       <p> For example, you can create a <code>RegexPatternString</code> such as <code>B[a@]dB[o0]t</code>. AWS WAF will match this <code>RegexPatternString</code> to:</p>
 *                 <ul>
 *             <li>
 * 				           <p>BadBot</p>
 * 				        </li>
 *             <li>
 * 				           <p>BadB0t</p>
 * 				        </li>
 *             <li>
 * 				           <p>B@dBot</p>
 * 				        </li>
 *             <li>
 * 				           <p>B@dB0t</p>
 * 				        </li>
 *          </ul>
 * 		       <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create a <code>RegexPatternSet.</code> For more information, see <a>CreateRegexPatternSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<code>UpdateRegexPatternSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateRegexPatternSet</code> request to specify the regular expression pattern that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateRegexPatternSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateRegexPatternSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new UpdateRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link UpdateRegexPatternSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRegexPatternSetCommand extends $Command<UpdateRegexPatternSetCommandInput, UpdateRegexPatternSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: UpdateRegexPatternSetCommandInput;
    constructor(input: UpdateRegexPatternSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRegexPatternSetCommandInput, UpdateRegexPatternSetCommandOutput>;
    private serialize;
    private deserialize;
}
