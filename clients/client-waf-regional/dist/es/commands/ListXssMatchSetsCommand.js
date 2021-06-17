import { __extends } from "tslib";
import { ListXssMatchSetsRequest, ListXssMatchSetsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListXssMatchSetsCommand, serializeAws_json1_1ListXssMatchSetsCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Returns an array of <a>XssMatchSet</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, ListXssMatchSetsCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, ListXssMatchSetsCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new ListXssMatchSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListXssMatchSetsCommandInput} for command's `input` shape.
 * @see {@link ListXssMatchSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListXssMatchSetsCommand = /** @class */ (function (_super) {
    __extends(ListXssMatchSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListXssMatchSetsCommand(input) {
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
    ListXssMatchSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFRegionalClient";
        var commandName = "ListXssMatchSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListXssMatchSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListXssMatchSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListXssMatchSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListXssMatchSetsCommand(input, context);
    };
    ListXssMatchSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListXssMatchSetsCommand(output, context);
    };
    return ListXssMatchSetsCommand;
}($Command));
export { ListXssMatchSetsCommand };
//# sourceMappingURL=ListXssMatchSetsCommand.js.map