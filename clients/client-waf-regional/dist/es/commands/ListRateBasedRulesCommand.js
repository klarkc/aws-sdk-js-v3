import { __extends } from "tslib";
import { ListRateBasedRulesRequest, ListRateBasedRulesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListRateBasedRulesCommand, serializeAws_json1_1ListRateBasedRulesCommand, } from "../protocols/Aws_json1_1";
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
 *          <p>Returns an array of <a>RuleSummary</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListRateBasedRulesCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListRateBasedRulesCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new ListRateBasedRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRateBasedRulesCommandInput} for command's `input` shape.
 * @see {@link ListRateBasedRulesCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRateBasedRulesCommand = /** @class */ (function (_super) {
    __extends(ListRateBasedRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRateBasedRulesCommand(input) {
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
    ListRateBasedRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFRegionalClient";
        var commandName = "ListRateBasedRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRateBasedRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRateBasedRulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRateBasedRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRateBasedRulesCommand(input, context);
    };
    ListRateBasedRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRateBasedRulesCommand(output, context);
    };
    return ListRateBasedRulesCommand;
}($Command));
export { ListRateBasedRulesCommand };
//# sourceMappingURL=ListRateBasedRulesCommand.js.map