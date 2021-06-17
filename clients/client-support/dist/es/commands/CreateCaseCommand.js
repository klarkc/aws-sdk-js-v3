import { __extends } from "tslib";
import { CreateCaseRequest, CreateCaseResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateCaseCommand, serializeAws_json1_1CreateCaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a case in the AWS Support Center. This operation is similar to how you create a case
 *             in the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create
 *                 Case</a> page.</p>
 *         <p>The AWS Support API doesn't support requesting service limit increases. You can submit a
 *             service limit increase in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>Submit a request from the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
 *             </li>
 *             <li>
 *                 <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p>
 *             </li>
 *          </ul>
 *         <p>A successful <code>CreateCase</code> request returns an AWS Support case number. You can use
 *             the <a>DescribeCases</a> operation and specify the case number to get
 *             existing AWS Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or
 *             attachments to an existing case.</p>
 *         <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in
 *             the <a href="https://console.aws.amazon.com/support">AWS Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p>
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
 * import { SupportClient, CreateCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, CreateCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new CreateCaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCaseCommandInput} for command's `input` shape.
 * @see {@link CreateCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCaseCommand = /** @class */ (function (_super) {
    __extends(CreateCaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCaseCommand(input) {
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
    CreateCaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SupportClient";
        var commandName = "CreateCaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCaseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateCaseCommand(input, context);
    };
    CreateCaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCaseCommand(output, context);
    };
    return CreateCaseCommand;
}($Command));
export { CreateCaseCommand };
//# sourceMappingURL=CreateCaseCommand.js.map