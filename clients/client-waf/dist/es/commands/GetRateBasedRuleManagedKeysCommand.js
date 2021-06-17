import { __extends } from "tslib";
import { GetRateBasedRuleManagedKeysRequest, GetRateBasedRuleManagedKeysResponse } from "../models/models_0";
import { deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand, serializeAws_json1_1GetRateBasedRuleManagedKeysCommand, } from "../protocols/Aws_json1_1";
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
 *          <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum
 *          number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed
 *          the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetRateBasedRuleManagedKeysCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetRateBasedRuleManagedKeysCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new GetRateBasedRuleManagedKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRateBasedRuleManagedKeysCommandInput} for command's `input` shape.
 * @see {@link GetRateBasedRuleManagedKeysCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRateBasedRuleManagedKeysCommand = /** @class */ (function (_super) {
    __extends(GetRateBasedRuleManagedKeysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRateBasedRuleManagedKeysCommand(input) {
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
    GetRateBasedRuleManagedKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "GetRateBasedRuleManagedKeysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRateBasedRuleManagedKeysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRateBasedRuleManagedKeysResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRateBasedRuleManagedKeysCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRateBasedRuleManagedKeysCommand(input, context);
    };
    GetRateBasedRuleManagedKeysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand(output, context);
    };
    return GetRateBasedRuleManagedKeysCommand;
}($Command));
export { GetRateBasedRuleManagedKeysCommand };
//# sourceMappingURL=GetRateBasedRuleManagedKeysCommand.js.map