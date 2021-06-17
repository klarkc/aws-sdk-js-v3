import { __extends } from "tslib";
import { ListSizeConstraintSetsRequest, ListSizeConstraintSetsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListSizeConstraintSetsCommand, serializeAws_json1_1ListSizeConstraintSetsCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Returns an array of <a>SizeConstraintSetSummary</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, ListSizeConstraintSetsCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, ListSizeConstraintSetsCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new ListSizeConstraintSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSizeConstraintSetsCommandInput} for command's `input` shape.
 * @see {@link ListSizeConstraintSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSizeConstraintSetsCommand = /** @class */ (function (_super) {
    __extends(ListSizeConstraintSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSizeConstraintSetsCommand(input) {
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
    ListSizeConstraintSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "ListSizeConstraintSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSizeConstraintSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSizeConstraintSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSizeConstraintSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListSizeConstraintSetsCommand(input, context);
    };
    ListSizeConstraintSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListSizeConstraintSetsCommand(output, context);
    };
    return ListSizeConstraintSetsCommand;
}($Command));
export { ListSizeConstraintSetsCommand };
//# sourceMappingURL=ListSizeConstraintSetsCommand.js.map