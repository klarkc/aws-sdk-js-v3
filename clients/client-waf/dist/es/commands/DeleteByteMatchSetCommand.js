import { __extends } from "tslib";
import { DeleteByteMatchSetRequest, DeleteByteMatchSetResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteByteMatchSetCommand, serializeAws_json1_1DeleteByteMatchSetCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Permanently deletes a <a>ByteMatchSet</a>. You can't delete a <code>ByteMatchSet</code> if it's still used in any <code>Rules</code>
 * 			or if it still includes any <a>ByteMatchTuple</a> objects (any filters).</p>
 * 		       <p>If you just want to remove a <code>ByteMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
 * 		       <p>To permanently delete a <code>ByteMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Update the <code>ByteMatchSet</code> to remove filters, if any. For more information, see <a>UpdateByteMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>DeleteByteMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteByteMatchSet</code> request.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, DeleteByteMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, DeleteByteMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new DeleteByteMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteByteMatchSetCommandInput} for command's `input` shape.
 * @see {@link DeleteByteMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteByteMatchSetCommand = /** @class */ (function (_super) {
    __extends(DeleteByteMatchSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteByteMatchSetCommand(input) {
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
    DeleteByteMatchSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "DeleteByteMatchSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteByteMatchSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteByteMatchSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteByteMatchSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteByteMatchSetCommand(input, context);
    };
    DeleteByteMatchSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteByteMatchSetCommand(output, context);
    };
    return DeleteByteMatchSetCommand;
}($Command));
export { DeleteByteMatchSetCommand };
//# sourceMappingURL=DeleteByteMatchSetCommand.js.map