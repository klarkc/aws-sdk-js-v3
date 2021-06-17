import { __extends } from "tslib";
import { ListSqlInjectionMatchSetsRequest, ListSqlInjectionMatchSetsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListSqlInjectionMatchSetsCommand, serializeAws_json1_1ListSqlInjectionMatchSetsCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Returns an array of <a>SqlInjectionMatchSet</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListSqlInjectionMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListSqlInjectionMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new ListSqlInjectionMatchSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSqlInjectionMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListSqlInjectionMatchSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSqlInjectionMatchSetsCommand = /** @class */ (function (_super) {
    __extends(ListSqlInjectionMatchSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSqlInjectionMatchSetsCommand(input) {
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
    ListSqlInjectionMatchSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFRegionalClient";
        var commandName = "ListSqlInjectionMatchSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSqlInjectionMatchSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSqlInjectionMatchSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSqlInjectionMatchSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSqlInjectionMatchSetsCommand(input, context);
    };
    ListSqlInjectionMatchSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSqlInjectionMatchSetsCommand(output, context);
    };
    return ListSqlInjectionMatchSetsCommand;
}($Command));
export { ListSqlInjectionMatchSetsCommand };
//# sourceMappingURL=ListSqlInjectionMatchSetsCommand.js.map