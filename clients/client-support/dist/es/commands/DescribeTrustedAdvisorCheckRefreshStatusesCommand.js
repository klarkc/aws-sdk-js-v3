import { __extends } from "tslib";
import { DescribeTrustedAdvisorCheckRefreshStatusesRequest, DescribeTrustedAdvisorCheckRefreshStatusesResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand, serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the refresh status of the AWS Trusted Advisor checks that have the specified check
 *             IDs. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 *         <p>Some checks are refreshed automatically, and you can't return their refresh statuses
 *             by using the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation. If you
 *             call this operation for these checks, you might see an
 *                 <code>InvalidParameterValue</code> error.</p>
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
 * import { SupportClient, DescribeTrustedAdvisorCheckRefreshStatusesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorCheckRefreshStatusesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeTrustedAdvisorCheckRefreshStatusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrustedAdvisorCheckRefreshStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrustedAdvisorCheckRefreshStatusesCommand = /** @class */ (function (_super) {
    __extends(DescribeTrustedAdvisorCheckRefreshStatusesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrustedAdvisorCheckRefreshStatusesCommand(input) {
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
    DescribeTrustedAdvisorCheckRefreshStatusesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SupportClient";
        var commandName = "DescribeTrustedAdvisorCheckRefreshStatusesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrustedAdvisorCheckRefreshStatusesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrustedAdvisorCheckRefreshStatusesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrustedAdvisorCheckRefreshStatusesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand(input, context);
    };
    DescribeTrustedAdvisorCheckRefreshStatusesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand(output, context);
    };
    return DescribeTrustedAdvisorCheckRefreshStatusesCommand;
}($Command));
export { DescribeTrustedAdvisorCheckRefreshStatusesCommand };
//# sourceMappingURL=DescribeTrustedAdvisorCheckRefreshStatusesCommand.js.map