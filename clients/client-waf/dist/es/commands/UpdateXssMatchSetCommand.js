import { __extends } from "tslib";
import { UpdateXssMatchSetRequest, UpdateXssMatchSetResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateXssMatchSetCommand, serializeAws_json1_1UpdateXssMatchSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>.
 * 			For each <code>XssMatchTuple</code> object, you specify the following values:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <code>Action</code>: Whether to insert the object into or delete the object from the
 *                array. To change an
 *                <code>XssMatchTuple</code>, you delete the existing object and add a new
 *                one.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter,
 * 				the name of the header or parameter.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before
 * 				inspecting the request for cross-site scripting attacks.</p>
 * 				           <p>You can only specify a single type of TextTransformation.</p>
 *             </li>
 *          </ul>
 * 		       <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests
 *          that
 *          you want to allow, block, or count. For example, if you're receiving
 *          requests that contain cross-site scripting attacks in the request body and you want to
 *          block the requests, you can create an <code>XssMatchSet</code> with the applicable
 *          settings, and then configure AWS WAF to block the requests. </p>
 * 		       <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Submit a <a>CreateXssMatchSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateIPSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to
 * 				inspect for cross-site scripting attacks.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateXssMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateXssMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new UpdateXssMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateXssMatchSetCommandInput} for command's `input` shape.
 * @see {@link UpdateXssMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateXssMatchSetCommand = /** @class */ (function (_super) {
    __extends(UpdateXssMatchSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateXssMatchSetCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    UpdateXssMatchSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "UpdateXssMatchSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateXssMatchSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateXssMatchSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateXssMatchSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateXssMatchSetCommand(input, context);
    };
    UpdateXssMatchSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateXssMatchSetCommand(output, context);
    };
    return UpdateXssMatchSetCommand;
}($Command));
export { UpdateXssMatchSetCommand };
//# sourceMappingURL=UpdateXssMatchSetCommand.js.map