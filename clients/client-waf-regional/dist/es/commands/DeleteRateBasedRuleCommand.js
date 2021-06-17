import { __extends } from "tslib";
import { DeleteRateBasedRuleRequest, DeleteRateBasedRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteRateBasedRuleCommand, serializeAws_json1_1DeleteRateBasedRuleCommand, } from "../protocols/Aws_json1_1";
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
 *          <p>Permanently deletes a <a>RateBasedRule</a>. You can't delete a rule if
 *          it's still used in any <code>WebACL</code> objects or if it still includes any predicates,
 *          such as <code>ByteMatchSet</code> objects.</p>
 *          <p>If you just want to remove a rule from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p>
 *          <p>To permanently delete a <code>RateBasedRule</code> from AWS WAF, perform the following
 *          steps:</p>
 *          <ol>
 *             <li>
 *                <p>Update the <code>RateBasedRule</code> to remove predicates, if any. For more
 *                information, see <a>UpdateRateBasedRule</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide
 *                in the <code>ChangeToken</code> parameter of a <code>DeleteRateBasedRule</code>
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteRateBasedRule</code> request.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, DeleteRateBasedRuleCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, DeleteRateBasedRuleCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new DeleteRateBasedRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRateBasedRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteRateBasedRuleCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRateBasedRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteRateBasedRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRateBasedRuleCommand(input) {
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
    DeleteRateBasedRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFRegionalClient";
        var commandName = "DeleteRateBasedRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRateBasedRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRateBasedRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRateBasedRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRateBasedRuleCommand(input, context);
    };
    DeleteRateBasedRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRateBasedRuleCommand(output, context);
    };
    return DeleteRateBasedRuleCommand;
}($Command));
export { DeleteRateBasedRuleCommand };
//# sourceMappingURL=DeleteRateBasedRuleCommand.js.map