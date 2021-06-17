import { __extends } from "tslib";
import { AddCommunicationToCaseRequest, AddCommunicationToCaseResponse } from "../models/models_0";
import { deserializeAws_json1_1AddCommunicationToCaseCommand, serializeAws_json1_1AddCommunicationToCaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds additional customer communication to an AWS Support case. Use the <code>caseId</code>
 *             parameter to identify the case to which to add communication. You can list a set of
 *             email addresses to copy on the communication by using the <code>ccEmailAddresses</code>
 *             parameter. The <code>communicationBody</code> value contains the text of the
 *             communication.</p>
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
 * import { SupportClient, AddCommunicationToCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, AddCommunicationToCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new AddCommunicationToCaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddCommunicationToCaseCommandInput} for command's `input` shape.
 * @see {@link AddCommunicationToCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddCommunicationToCaseCommand = /** @class */ (function (_super) {
    __extends(AddCommunicationToCaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddCommunicationToCaseCommand(input) {
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
    AddCommunicationToCaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SupportClient";
        var commandName = "AddCommunicationToCaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddCommunicationToCaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddCommunicationToCaseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddCommunicationToCaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddCommunicationToCaseCommand(input, context);
    };
    AddCommunicationToCaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddCommunicationToCaseCommand(output, context);
    };
    return AddCommunicationToCaseCommand;
}($Command));
export { AddCommunicationToCaseCommand };
//# sourceMappingURL=AddCommunicationToCaseCommand.js.map