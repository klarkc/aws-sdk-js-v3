import { __extends } from "tslib";
import { DescribeSeverityLevelsRequest, DescribeSeverityLevelsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeSeverityLevelsCommand, serializeAws_json1_1DescribeSeverityLevelsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of severity levels that you can assign to a support case. The severity
 *             level for a case is also a field in the <a>CaseDetails</a> data type that you
 *             include for a <a>CreateCase</a> request.</p>
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
 * import { SupportClient, DescribeSeverityLevelsCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeSeverityLevelsCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeSeverityLevelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSeverityLevelsCommandInput} for command's `input` shape.
 * @see {@link DescribeSeverityLevelsCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSeverityLevelsCommand = /** @class */ (function (_super) {
    __extends(DescribeSeverityLevelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSeverityLevelsCommand(input) {
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
    DescribeSeverityLevelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SupportClient";
        var commandName = "DescribeSeverityLevelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSeverityLevelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSeverityLevelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSeverityLevelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSeverityLevelsCommand(input, context);
    };
    DescribeSeverityLevelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSeverityLevelsCommand(output, context);
    };
    return DescribeSeverityLevelsCommand;
}($Command));
export { DescribeSeverityLevelsCommand };
//# sourceMappingURL=DescribeSeverityLevelsCommand.js.map