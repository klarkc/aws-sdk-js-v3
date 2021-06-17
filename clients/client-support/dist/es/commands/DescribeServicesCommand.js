import { __extends } from "tslib";
import { DescribeServicesRequest, DescribeServicesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeServicesCommand, serializeAws_json1_1DescribeServicesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the current list of AWS services and a list of service categories for each
 *             service. You then use service names and categories in your <a>CreateCase</a>
 *             requests. Each AWS service has its own set of categories.</p>
 *         <p>The service codes and category codes correspond to the values that appear in the
 *                 <b>Service</b> and <b>Category</b> lists on the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. The values in those fields
 *             don't necessarily match the service codes and categories returned by the
 *                 <code>DescribeServices</code> operation. Always use the service codes and categories
 *             that the <code>DescribeServices</code> operation returns, so that you have the most
 *             recent set of service and category codes.</p>
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
 * import { SupportClient, DescribeServicesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeServicesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeServicesCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeServicesCommand = /** @class */ (function (_super) {
    __extends(DescribeServicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeServicesCommand(input) {
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
    DescribeServicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SupportClient";
        var commandName = "DescribeServicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeServicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeServicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeServicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeServicesCommand(input, context);
    };
    DescribeServicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeServicesCommand(output, context);
    };
    return DescribeServicesCommand;
}($Command));
export { DescribeServicesCommand };
//# sourceMappingURL=DescribeServicesCommand.js.map