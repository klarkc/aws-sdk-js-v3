import { __extends } from "tslib";
import { DescribeTrustedAdvisorCheckSummariesRequest, DescribeTrustedAdvisorCheckSummariesResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand, serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the results for the AWS Trusted Advisor check summaries for the check IDs that you
 *             specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 *         <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a>
 *             objects.</p>
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
 * import { SupportClient, DescribeTrustedAdvisorCheckSummariesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorCheckSummariesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeTrustedAdvisorCheckSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrustedAdvisorCheckSummariesCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorCheckSummariesCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrustedAdvisorCheckSummariesCommand = /** @class */ (function (_super) {
    __extends(DescribeTrustedAdvisorCheckSummariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrustedAdvisorCheckSummariesCommand(input) {
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
    DescribeTrustedAdvisorCheckSummariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SupportClient";
        var commandName = "DescribeTrustedAdvisorCheckSummariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrustedAdvisorCheckSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrustedAdvisorCheckSummariesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrustedAdvisorCheckSummariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand(input, context);
    };
    DescribeTrustedAdvisorCheckSummariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand(output, context);
    };
    return DescribeTrustedAdvisorCheckSummariesCommand;
}($Command));
export { DescribeTrustedAdvisorCheckSummariesCommand };
//# sourceMappingURL=DescribeTrustedAdvisorCheckSummariesCommand.js.map