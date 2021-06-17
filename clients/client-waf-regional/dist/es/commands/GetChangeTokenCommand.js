import { __extends } from "tslib";
import { GetChangeTokenRequest, GetChangeTokenResponse } from "../models/models_0";
import { deserializeAws_json1_1GetChangeTokenCommand, serializeAws_json1_1GetChangeTokenCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>When you want to create, update, or delete AWS WAF objects, get a change token and include the change token in the create, update, or delete request. Change tokens ensure that your application doesn't submit conflicting requests to AWS WAF.</p>
 * 		       <p>Each create, update, or delete request must use a unique change token. If your application submits a <code>GetChangeToken</code> request
 * 			and then submits a second <code>GetChangeToken</code> request before submitting a create, update, or delete request, the second
 * 			<code>GetChangeToken</code> request returns the same value as the first <code>GetChangeToken</code> request.</p>
 * 		       <p>When you use a change token in a create, update, or delete request, the status of the change token changes to <code>PENDING</code>,
 * 			which indicates that AWS WAF is propagating the change to all AWS WAF servers. Use <code>GetChangeTokenStatus</code> to determine the
 * 			status of your change token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetChangeTokenCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetChangeTokenCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new GetChangeTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChangeTokenCommandInput} for command's `input` shape.
 * @see {@link GetChangeTokenCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetChangeTokenCommand = /** @class */ (function (_super) {
    __extends(GetChangeTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetChangeTokenCommand(input) {
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
    GetChangeTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFRegionalClient";
        var commandName = "GetChangeTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetChangeTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetChangeTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetChangeTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetChangeTokenCommand(input, context);
    };
    GetChangeTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetChangeTokenCommand(output, context);
    };
    return GetChangeTokenCommand;
}($Command));
export { GetChangeTokenCommand };
//# sourceMappingURL=GetChangeTokenCommand.js.map