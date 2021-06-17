import { __extends } from "tslib";
import { DescribeTrustedAdvisorCheckResultRequest, DescribeTrustedAdvisorCheckResultResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand, serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the results of the AWS Trusted Advisor check that has the specified check ID. You
 *             can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
 *             operation.</p>
 *         <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which
 *             contains these three objects:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>TrustedAdvisorCategorySpecificSummary</a>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>TrustedAdvisorResourceDetail</a>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>TrustedAdvisorResourcesSummary</a>
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>In addition, the response contains these fields:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>status</b> - The alert status of the check
 *                     can be <code>ok</code> (green), <code>warning</code> (yellow),
 *                         <code>error</code> (red), or <code>not_available</code>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>timestamp</b> - The time of the last refresh
 *                     of the check.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>checkId</b> - The unique identifier for the
 *                     check.</p>
 *             </li>
 *          </ul>
 *
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeTrustedAdvisorCheckResultCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorCheckResultCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeTrustedAdvisorCheckResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrustedAdvisorCheckResultCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorCheckResultCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrustedAdvisorCheckResultCommand = /** @class */ (function (_super) {
    __extends(DescribeTrustedAdvisorCheckResultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrustedAdvisorCheckResultCommand(input) {
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
    DescribeTrustedAdvisorCheckResultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SupportClient";
        var commandName = "DescribeTrustedAdvisorCheckResultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrustedAdvisorCheckResultRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrustedAdvisorCheckResultResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrustedAdvisorCheckResultCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand(input, context);
    };
    DescribeTrustedAdvisorCheckResultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand(output, context);
    };
    return DescribeTrustedAdvisorCheckResultCommand;
}($Command));
export { DescribeTrustedAdvisorCheckResultCommand };
//# sourceMappingURL=DescribeTrustedAdvisorCheckResultCommand.js.map