"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRateBasedRuleCommand = void 0;
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
 *          <p>Creates a <a>RateBasedRule</a>. The <code>RateBasedRule</code> contains a
 *             <code>RateLimit</code>, which specifies the maximum number of requests that AWS WAF allows
 *                 from a specified IP address in a five-minute period.
 *                 The <code>RateBasedRule</code> also
 *          contains the <code>IPSet</code> objects, <code>ByteMatchSet</code> objects, and other
 *          predicates that identify the requests that you want to count or block if these requests
 *          exceed the <code>RateLimit</code>.</p>
 *          <p>If you add more than one predicate to a <code>RateBasedRule</code>, a request not
 *          only must exceed the <code>RateLimit</code>, but it also must match all the
 *          conditions to be counted or blocked. For example, suppose you add the following to a
 *             <code>RateBasedRule</code>:</p>
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
 *          <p>Further, you specify a <code>RateLimit</code> of 1,000.</p>
 *          <p>You then add the <code>RateBasedRule</code> to a <code>WebACL</code> and specify that
 *          you want to block requests that meet the conditions in the rule. For a request to be
 *          blocked, it must come from the IP address 192.0.2.44 <i>and</i> the
 *             <code>User-Agent</code> header in the request must contain the value
 *          <code>BadBot</code>. Further, requests that match these two conditions must be received at
 *          a rate of more than 1,000 requests every five minutes. If both conditions are met and the
 *          rate is exceeded, AWS WAF blocks the requests. If the rate drops below 1,000 for a
 *          five-minute period, AWS WAF no longer blocks the requests.</p>
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
 *
 *
 *          <p>To create and configure a <code>RateBasedRule</code>, perform the following
 *          steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create and update the predicates that you want to include in the rule. For more
 *                information, see <a>CreateByteMatchSet</a>, <a>CreateIPSet</a>,
 *                and <a>CreateSqlInjectionMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide
 *                in the <code>ChangeToken</code> parameter of a <code>CreateRule</code>
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateRateBasedRule</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the
 *                   <code>ChangeToken</code> parameter of an <a>UpdateRule</a>
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateRateBasedRule</code> request to specify the predicates
 *                that you want to include in the rule.</p>
 *             </li>
 *             <li>
 *                <p>Create and update a <code>WebACL</code> that contains the
 *                   <code>RateBasedRule</code>. For more information, see <a>CreateWebACL</a>.</p>
 *             </li>
 *          </ol>
 *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests,
 *          see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer
 *             Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateRateBasedRuleCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateRateBasedRuleCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new CreateRateBasedRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRateBasedRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRateBasedRuleCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateRateBasedRuleCommand extends smithy_client_1.Command {
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
        const commandName = "CreateRateBasedRuleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateRateBasedRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateRateBasedRuleResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateRateBasedRuleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateRateBasedRuleCommand(output, context);
    }
}
exports.CreateRateBasedRuleCommand = CreateRateBasedRuleCommand;
//# sourceMappingURL=CreateRateBasedRuleCommand.js.map