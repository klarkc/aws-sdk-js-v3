import { __extends } from "tslib";
import { DescribeTrustedAdvisorChecksRequest, DescribeTrustedAdvisorChecksResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand, serializeAws_json1_1DescribeTrustedAdvisorChecksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all available AWS Trusted Advisor checks, including the name, ID,
 *             category, description, and metadata. You must specify a language code. The AWS Support API
 *             currently supports English ("en") and Japanese ("ja"). The response contains a <a>TrustedAdvisorCheckDescription</a> object for each check. You must set the
 *             AWS Region to us-east-1.</p>
 *
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
 *                         <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *                <li>
 *                     <p>The names and descriptions for Trusted Advisor checks are subject to change. We recommend
 *                         that you specify the check ID in your code to uniquely identify a check.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeTrustedAdvisorChecksCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorChecksCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeTrustedAdvisorChecksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrustedAdvisorChecksCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorChecksCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrustedAdvisorChecksCommand = /** @class */ (function (_super) {
    __extends(DescribeTrustedAdvisorChecksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrustedAdvisorChecksCommand(input) {
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
    DescribeTrustedAdvisorChecksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SupportClient";
        var commandName = "DescribeTrustedAdvisorChecksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrustedAdvisorChecksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrustedAdvisorChecksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrustedAdvisorChecksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeTrustedAdvisorChecksCommand(input, context);
    };
    DescribeTrustedAdvisorChecksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand(output, context);
    };
    return DescribeTrustedAdvisorChecksCommand;
}($Command));
export { DescribeTrustedAdvisorChecksCommand };
//# sourceMappingURL=DescribeTrustedAdvisorChecksCommand.js.map