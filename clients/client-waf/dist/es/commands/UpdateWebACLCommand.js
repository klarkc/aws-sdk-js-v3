import { __extends } from "tslib";
import { UpdateWebACLRequest, UpdateWebACLResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateWebACLCommand, serializeAws_json1_1UpdateWebACLCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>WebACL</code>. Each <code>Rule</code> identifies
 * 			web requests that you want to allow, block, or count. When you update a <code>WebACL</code>, you specify the following values:</p>
 * 		       <ul>
 *             <li>
 *                <p>A default action for the <code>WebACL</code>, either <code>ALLOW</code> or <code>BLOCK</code>.
 * 				AWS WAF performs the default action if a request doesn't match the criteria in any of the <code>Rules</code> in a <code>WebACL</code>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Rules</code> that you want to add
 *                or
 *                delete. If you want to replace one <code>Rule</code> with another, you delete the
 *                existing <code>Rule</code> and add the new one.</p>
 *             </li>
 *             <li>
 *                <p>For each <code>Rule</code>, whether you want AWS WAF to allow requests, block requests, or count requests that match
 * 				the conditions in the <code>Rule</code>.</p>
 *             </li>
 *             <li>
 *                <p>The order in which you want AWS WAF to evaluate the <code>Rules</code> in a
 *                   <code>WebACL</code>. If you add more than one <code>Rule</code> to a
 *                   <code>WebACL</code>, AWS WAF evaluates each request against the <code>Rules</code>
 *                in order based on the value of <code>Priority</code>. (The <code>Rule</code> that has
 *                the lowest value for <code>Priority</code> is evaluated first.) When a web request
 *                matches all
 *                the
 *                predicates (such as <code>ByteMatchSets</code> and <code>IPSets</code>) in a
 *                   <code>Rule</code>, AWS WAF immediately takes the corresponding action, allow or
 *                block, and doesn't evaluate the request against the remaining <code>Rules</code> in
 *                the <code>WebACL</code>, if any. </p>
 *             </li>
 *          </ul>
 *
 * 		       <p>To create and configure a <code>WebACL</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create and update the predicates that you want to include in <code>Rules</code>.
 * 				For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>,
 * 				<a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see
 * 				<a>CreateRule</a> and <a>UpdateRule</a>.</p>
 *             </li>
 *             <li>
 *                <p>Create a <code>WebACL</code>. See <a>CreateWebACL</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateWebACL</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateWebACL</code> request to specify the <code>Rules</code>
 *                that you want to include in the <code>WebACL</code>, to specify the default action,
 *                and to associate the <code>WebACL</code> with a CloudFront distribution. </p>
 *                <p>The <code>ActivatedRule</code> can be a rule group. If you specify a rule group
 *                as your
 *                <code>ActivatedRule</code>
 *                ,
 *                you can exclude specific rules from that rule group.</p>
 *                <p>If you already have a rule group associated with a web ACL and want to submit
 *                an <code>UpdateWebACL</code> request to exclude certain rules from that rule group,
 *                you must first remove the rule group from the web ACL, the re-insert it again,
 *                specifying the excluded rules.
 *                For details,
 *                see
 *                   <a>ActivatedRule$ExcludedRules</a>
 *                .
 *                </p>
 *             </li>
 *          </ol>
 *          <p>Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the  <a>UpdateWebACL</a> request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. 		</p>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateWebACLCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateWebACLCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new UpdateWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWebACLCommandInput} for command's `input` shape.
 * @see {@link UpdateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWebACLCommand = /** @class */ (function (_super) {
    __extends(UpdateWebACLCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWebACLCommand(input) {
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
    UpdateWebACLCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "UpdateWebACLCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWebACLRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWebACLResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWebACLCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateWebACLCommand(input, context);
    };
    UpdateWebACLCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateWebACLCommand(output, context);
    };
    return UpdateWebACLCommand;
}($Command));
export { UpdateWebACLCommand };
//# sourceMappingURL=UpdateWebACLCommand.js.map