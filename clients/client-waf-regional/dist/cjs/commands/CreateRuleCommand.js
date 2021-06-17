"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRuleCommand = void 0;
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
 * 		       <p>Creates a <code>Rule</code>, which contains the <code>IPSet</code> objects,
 *             <code>ByteMatchSet</code> objects, and other predicates that identify the requests that
 *          you want to block. If you add more than one predicate to a <code>Rule</code>, a request
 *          must match all of the specifications to be allowed or blocked. For example, suppose
 *          that
 *          you add the following to a <code>Rule</code>:</p>
 * 		       <ul>
 *             <li>
 *                <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44/32</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>A <code>ByteMatchSet</code> that matches <code>BadBot</code> in the <code>User-Agent</code> header</p>
 *             </li>
 *          </ul>
 * 		       <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to blocks requests that satisfy the <code>Rule</code>.
 * 			For a request to be blocked, it must come from the IP address 192.0.2.44 <i>and</i> the <code>User-Agent</code> header in the request
 * 			must contain the value <code>BadBot</code>.</p>
 * 		       <p>To create and configure a <code>Rule</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create and update the predicates that you want to include in the <code>Rule</code>. For more information, see
 * 				<a>CreateByteMatchSet</a>, <a>CreateIPSet</a>, and <a>CreateSqlInjectionMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>CreateRule</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateRule</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateRule</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateRule</code> request to specify the predicates that you want to include in the <code>Rule</code>.</p>
 *             </li>
 *             <li>
 *                <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. For more information, see <a>CreateWebACL</a>.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateRuleCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateRuleCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateRuleCommand extends smithy_client_1.Command {
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
        const commandName = "CreateRuleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateRuleResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateRuleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateRuleCommand(output, context);
    }
}
exports.CreateRuleCommand = CreateRuleCommand;
//# sourceMappingURL=CreateRuleCommand.js.map