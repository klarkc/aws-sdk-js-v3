import { __extends } from "tslib";
import { GetGeoMatchSetRequest, GetGeoMatchSetResponse } from "../models/models_0";
import { deserializeAws_json1_1GetGeoMatchSetCommand, serializeAws_json1_1GetGeoMatchSetCommand, } from "../protocols/Aws_json1_1";
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
 *          <p>Returns the <a>GeoMatchSet</a> that is specified by <code>GeoMatchSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetGeoMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetGeoMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new GetGeoMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGeoMatchSetCommandInput} for command's `input` shape.
 * @see {@link GetGeoMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGeoMatchSetCommand = /** @class */ (function (_super) {
    __extends(GetGeoMatchSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGeoMatchSetCommand(input) {
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
    GetGeoMatchSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "GetGeoMatchSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGeoMatchSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGeoMatchSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGeoMatchSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetGeoMatchSetCommand(input, context);
    };
    GetGeoMatchSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetGeoMatchSetCommand(output, context);
    };
    return GetGeoMatchSetCommand;
}($Command));
export { GetGeoMatchSetCommand };
//# sourceMappingURL=GetGeoMatchSetCommand.js.map