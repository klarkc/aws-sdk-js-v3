import { __extends } from "tslib";
import { GetSizeConstraintSetRequest, GetSizeConstraintSetResponse } from "../models/models_0";
import { deserializeAws_json1_1GetSizeConstraintSetCommand, serializeAws_json1_1GetSizeConstraintSetCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Returns the <a>SizeConstraintSet</a> specified by <code>SizeConstraintSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetSizeConstraintSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetSizeConstraintSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new GetSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSizeConstraintSetCommandInput} for command's `input` shape.
 * @see {@link GetSizeConstraintSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSizeConstraintSetCommand = /** @class */ (function (_super) {
    __extends(GetSizeConstraintSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSizeConstraintSetCommand(input) {
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
    GetSizeConstraintSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "GetSizeConstraintSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSizeConstraintSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSizeConstraintSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSizeConstraintSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSizeConstraintSetCommand(input, context);
    };
    GetSizeConstraintSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSizeConstraintSetCommand(output, context);
    };
    return GetSizeConstraintSetCommand;
}($Command));
export { GetSizeConstraintSetCommand };
//# sourceMappingURL=GetSizeConstraintSetCommand.js.map