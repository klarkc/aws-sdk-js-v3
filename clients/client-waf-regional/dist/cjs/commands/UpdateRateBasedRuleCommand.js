"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRateBasedRuleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Inserts or deletes <a>Predicate</a> objects in a rule and updates the
 *             <code>RateLimit</code> in the rule. </p>
 *          <p>Each <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests
 *          that you want to block or count. The <code>RateLimit</code> specifies the number of
 *          requests every five minutes that triggers the rule.</p>
 *          <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request must
 *          match all the predicates and exceed the <code>RateLimit</code> to be counted or blocked.
 *          For example, suppose you add the following to a <code>RateBasedRule</code>:</p>
 *          <ul>
 *             <li>
 *                <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the
 *                   <code>User-Agent</code> header</p>
 *             </li>
 *          </ul>
 *          <p>Further, you specify a
 *             <code>RateLimit</code> of 1,000.</p>
 *          <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that
 *          you want to block requests that satisfy the rule. For a request to be blocked, it must come
 *          from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header
 *          in the request must contain the value <code>BadBot</code>. Further, requests that match
 *          these two conditions much be received at a rate of more than 1,000 every five minutes. If
 *          the rate drops below this limit, AWS WAF no longer blocks the requests.</p>
 *
 * 		       <p>As a second example, suppose you want to limit requests to a particular page on your site. To do this, you could add the following to a
 *             <code>RateBasedRule</code>:</p>
 *
 *
 *          <ul>
 *             <li>
 *                <p>A <code>ByteMatchSet</code> with <code>FieldToMatch</code> of <code>URI</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>PositionalConstraint</code> of <code>STARTS_WITH</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>TargetString</code> of <code>login</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Further, you specify a <code>RateLimit</code> of 1,000.</p>
 *          <p>By adding this <code>RateBasedRule</code> to a <code>WebACL</code>, you could limit requests to your login page without affecting the rest of your site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, UpdateRateBasedRuleCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, UpdateRateBasedRuleCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new UpdateRateBasedRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRateBasedRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateRateBasedRuleCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateRateBasedRuleCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "WAFRegionalClient";
        const commandName = "UpdateRateBasedRuleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateRateBasedRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateRateBasedRuleResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateRateBasedRuleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateRateBasedRuleCommand(output, context);
    }
}
exports.UpdateRateBasedRuleCommand = UpdateRateBasedRuleCommand;
//# sourceMappingURL=UpdateRateBasedRuleCommand.js.map