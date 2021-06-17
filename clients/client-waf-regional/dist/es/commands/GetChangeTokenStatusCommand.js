import { __extends } from "tslib";
import { GetChangeTokenStatusRequest, GetChangeTokenStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1GetChangeTokenStatusCommand, serializeAws_json1_1GetChangeTokenStatusCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Returns the status of a <code>ChangeToken</code> that you got by calling <a>GetChangeToken</a>. <code>ChangeTokenStatus</code> is
 * 			one of the following values:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <code>PROVISIONED</code>: You requested the change token by calling <code>GetChangeToken</code>, but you haven't used it yet
 * 				in a call to create, update, or delete an AWS WAF object.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PENDING</code>: AWS WAF is propagating the create, update, or delete request to all AWS WAF servers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INSYNC</code>: Propagation is complete.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetChangeTokenStatusCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetChangeTokenStatusCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new GetChangeTokenStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChangeTokenStatusCommandInput} for command's `input` shape.
 * @see {@link GetChangeTokenStatusCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetChangeTokenStatusCommand = /** @class */ (function (_super) {
    __extends(GetChangeTokenStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetChangeTokenStatusCommand(input) {
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
    GetChangeTokenStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFRegionalClient";
        var commandName = "GetChangeTokenStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetChangeTokenStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetChangeTokenStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetChangeTokenStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetChangeTokenStatusCommand(input, context);
    };
    GetChangeTokenStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetChangeTokenStatusCommand(output, context);
    };
    return GetChangeTokenStatusCommand;
}($Command));
export { GetChangeTokenStatusCommand };
//# sourceMappingURL=GetChangeTokenStatusCommand.js.map