import { __extends } from "tslib";
import { GetSampledRequestsRequest, GetSampledRequestsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetSampledRequestsCommand, serializeAws_json1_1GetSampledRequestsCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p>
 * 		       <p>
 *             <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource
 * 			(such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code>
 * 			returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetSampledRequestsCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetSampledRequestsCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new GetSampledRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSampledRequestsCommandInput} for command's `input` shape.
 * @see {@link GetSampledRequestsCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSampledRequestsCommand = /** @class */ (function (_super) {
    __extends(GetSampledRequestsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSampledRequestsCommand(input) {
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
    GetSampledRequestsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "GetSampledRequestsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSampledRequestsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSampledRequestsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSampledRequestsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSampledRequestsCommand(input, context);
    };
    GetSampledRequestsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSampledRequestsCommand(output, context);
    };
    return GetSampledRequestsCommand;
}($Command));
export { GetSampledRequestsCommand };
//# sourceMappingURL=GetSampledRequestsCommand.js.map