import { __extends } from "tslib";
import { CreateRegexPatternSetRequest, CreateRegexPatternSetResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateRegexPatternSetCommand, serializeAws_json1_1CreateRegexPatternSetCommand, } from "../protocols/Aws_json1_1";
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
 *          <p>Creates a <code>RegexPatternSet</code>. You then use <a>UpdateRegexPatternSet</a> to specify the regular expression (regex) pattern that you want AWS WAF to search for, such as <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>
 * 		       <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p>
 *          <ol>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 *                   <code>CreateRegexPatternSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateRegexPatternSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 *                   <code>UpdateRegexPatternSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <a>UpdateRegexPatternSet</a> request to specify the string that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 *             <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateRegexPatternSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateRegexPatternSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new CreateRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link CreateRegexPatternSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRegexPatternSetCommand = /** @class */ (function (_super) {
    __extends(CreateRegexPatternSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRegexPatternSetCommand(input) {
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
    CreateRegexPatternSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "CreateRegexPatternSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRegexPatternSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRegexPatternSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRegexPatternSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateRegexPatternSetCommand(input, context);
    };
    CreateRegexPatternSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateRegexPatternSetCommand(output, context);
    };
    return CreateRegexPatternSetCommand;
}($Command));
export { CreateRegexPatternSetCommand };
//# sourceMappingURL=CreateRegexPatternSetCommand.js.map