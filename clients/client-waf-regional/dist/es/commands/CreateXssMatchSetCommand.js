import { __extends } from "tslib";
import { CreateXssMatchSetRequest, CreateXssMatchSetResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateXssMatchSetCommand, serializeAws_json1_1CreateXssMatchSetCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Creates an <a>XssMatchSet</a>, which you use to allow, block, or count requests that contain cross-site scripting attacks
 * 			in the specified part of web requests. AWS WAF searches for character sequences that are likely to be malicious strings.</p>
 * 		       <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>CreateXssMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateXssMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateXssMatchSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <a>UpdateXssMatchSet</a> request to specify the parts of web requests in which you want to
 * 				allow, block, or count cross-site scripting attacks.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateXssMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateXssMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new CreateXssMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateXssMatchSetCommandInput} for command's `input` shape.
 * @see {@link CreateXssMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateXssMatchSetCommand = /** @class */ (function (_super) {
    __extends(CreateXssMatchSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateXssMatchSetCommand(input) {
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
    CreateXssMatchSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFRegionalClient";
        var commandName = "CreateXssMatchSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateXssMatchSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateXssMatchSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateXssMatchSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateXssMatchSetCommand(input, context);
    };
    CreateXssMatchSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateXssMatchSetCommand(output, context);
    };
    return CreateXssMatchSetCommand;
}($Command));
export { CreateXssMatchSetCommand };
//# sourceMappingURL=CreateXssMatchSetCommand.js.map