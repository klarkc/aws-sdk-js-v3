import { __extends } from "tslib";
import { CreateGeoMatchSetRequest, CreateGeoMatchSetResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateGeoMatchSetCommand, serializeAws_json1_1CreateGeoMatchSetCommand, } from "../protocols/Aws_json1_1";
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
 *          <p>Creates an <a>GeoMatchSet</a>, which you use to specify which web requests you want to allow or block based on the country
 * 			that the requests originate from. For example, if you're receiving a lot of requests from one or more countries and you want to block the requests, you can create an <code>GeoMatchSet</code> that contains those countries and then configure AWS WAF to block the requests. </p>
 * 		       <p>To create and configure a <code>GeoMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>CreateGeoMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateGeoMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateGeoMatchSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateGeoMatchSetSet</code> request to specify the countries that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateGeoMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateGeoMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new CreateGeoMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGeoMatchSetCommandInput} for command's `input` shape.
 * @see {@link CreateGeoMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGeoMatchSetCommand = /** @class */ (function (_super) {
    __extends(CreateGeoMatchSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGeoMatchSetCommand(input) {
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
    CreateGeoMatchSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "CreateGeoMatchSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGeoMatchSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGeoMatchSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGeoMatchSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateGeoMatchSetCommand(input, context);
    };
    CreateGeoMatchSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateGeoMatchSetCommand(output, context);
    };
    return CreateGeoMatchSetCommand;
}($Command));
export { CreateGeoMatchSetCommand };
//# sourceMappingURL=CreateGeoMatchSetCommand.js.map