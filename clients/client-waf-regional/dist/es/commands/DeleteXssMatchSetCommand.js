import { __extends } from "tslib";
import { DeleteXssMatchSetRequest, DeleteXssMatchSetResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteXssMatchSetCommand, serializeAws_json1_1DeleteXssMatchSetCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Permanently deletes an <a>XssMatchSet</a>. You can't delete an <code>XssMatchSet</code> if it's
 * 			still used in any <code>Rules</code> or if it still contains any <a>XssMatchTuple</a> objects.</p>
 * 		       <p>If you just want to remove an <code>XssMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
 * 		       <p>To permanently delete an <code>XssMatchSet</code> from AWS WAF, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Update the <code>XssMatchSet</code> to remove filters, if any. For more information, see
 * 				<a>UpdateXssMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>DeleteXssMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteXssMatchSet</code> request.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, DeleteXssMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, DeleteXssMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new DeleteXssMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteXssMatchSetCommandInput} for command's `input` shape.
 * @see {@link DeleteXssMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteXssMatchSetCommand = /** @class */ (function (_super) {
    __extends(DeleteXssMatchSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteXssMatchSetCommand(input) {
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
    DeleteXssMatchSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFRegionalClient";
        var commandName = "DeleteXssMatchSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteXssMatchSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteXssMatchSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteXssMatchSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteXssMatchSetCommand(input, context);
    };
    DeleteXssMatchSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteXssMatchSetCommand(output, context);
    };
    return DeleteXssMatchSetCommand;
}($Command));
export { DeleteXssMatchSetCommand };
//# sourceMappingURL=DeleteXssMatchSetCommand.js.map