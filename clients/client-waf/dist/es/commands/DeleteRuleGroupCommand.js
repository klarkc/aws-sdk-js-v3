import { __extends } from "tslib";
import { DeleteRuleGroupRequest, DeleteRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteRuleGroupCommand, serializeAws_json1_1DeleteRuleGroupCommand, } from "../protocols/Aws_json1_1";
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
 *          <p>Permanently deletes a <a>RuleGroup</a>. You can't delete a <code>RuleGroup</code> if it's still used in any <code>WebACL</code>
 *          objects or if it still includes any rules.</p>
 *          <p>If you just want to remove a <code>RuleGroup</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p>
 *          <p>To permanently delete a <code>RuleGroup</code> from AWS WAF, perform the following steps:</p>
 *          <ol>
 *             <li>
 *                <p>Update the <code>RuleGroup</code> to remove rules, if any. For more information, see <a>UpdateRuleGroup</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 *                <code>DeleteRuleGroup</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteRuleGroup</code> request.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, DeleteRuleGroupCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, DeleteRuleGroupCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new DeleteRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRuleGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRuleGroupCommand(input) {
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
    DeleteRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "DeleteRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRuleGroupCommand(input, context);
    };
    DeleteRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRuleGroupCommand(output, context);
    };
    return DeleteRuleGroupCommand;
}($Command));
export { DeleteRuleGroupCommand };
//# sourceMappingURL=DeleteRuleGroupCommand.js.map