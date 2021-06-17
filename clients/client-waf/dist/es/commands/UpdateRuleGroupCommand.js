import { __extends } from "tslib";
import { UpdateRuleGroupRequest, UpdateRuleGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateRuleGroupCommand, serializeAws_json1_1UpdateRuleGroupCommand, } from "../protocols/Aws_json1_1";
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
 *          <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>RuleGroup</code>.</p>
 * 	        <p>You can only insert <code>REGULAR</code> rules into a rule group.</p>
 *          <p>You can have a maximum of ten rules per rule group.</p>
 *
 *
 *          <p>To create and configure a <code>RuleGroup</code>, perform the following steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create and update the <code>Rules</code> that you want to include in the <code>RuleGroup</code>. See <a>CreateRule</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 *                <a>UpdateRuleGroup</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateRuleGroup</code> request to add <code>Rules</code> to the <code>RuleGroup</code>.</p>
 *             </li>
 *             <li>
 *                <p>Create and update a <code>WebACL</code> that contains the <code>RuleGroup</code>. See <a>CreateWebACL</a>.</p>
 *             </li>
 *          </ol>
 *          <p>If you want to replace one <code>Rule</code> with another, you delete the existing one and
 *          add the new one.</p>
 *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateRuleGroupCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateRuleGroupCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new UpdateRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRuleGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateRuleGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRuleGroupCommand(input) {
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
    UpdateRuleGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "UpdateRuleGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRuleGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRuleGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRuleGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRuleGroupCommand(input, context);
    };
    UpdateRuleGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRuleGroupCommand(output, context);
    };
    return UpdateRuleGroupCommand;
}($Command));
export { UpdateRuleGroupCommand };
//# sourceMappingURL=UpdateRuleGroupCommand.js.map