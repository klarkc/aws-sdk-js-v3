import { __extends } from "tslib";
import { ListPhoneNumbersOptedOutInput, ListPhoneNumbersOptedOutResponse } from "../models/models_0";
import { deserializeAws_queryListPhoneNumbersOptedOutCommand, serializeAws_queryListPhoneNumbersOptedOutCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS
 *             messages to them.</p>
 *         <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page
 *             returns up to 100 phone numbers. If additional phone numbers are available after the
 *             first page of results, then a <code>NextToken</code> string will be returned. To receive
 *             the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the
 *                 <code>NextToken</code> string received from the previous call. When there are no
 *             more records to return, <code>NextToken</code> will be null.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListPhoneNumbersOptedOutCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListPhoneNumbersOptedOutCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListPhoneNumbersOptedOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPhoneNumbersOptedOutCommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumbersOptedOutCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPhoneNumbersOptedOutCommand = /** @class */ (function (_super) {
    __extends(ListPhoneNumbersOptedOutCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPhoneNumbersOptedOutCommand(input) {
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
    ListPhoneNumbersOptedOutCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "ListPhoneNumbersOptedOutCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPhoneNumbersOptedOutInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListPhoneNumbersOptedOutResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPhoneNumbersOptedOutCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListPhoneNumbersOptedOutCommand(input, context);
    };
    ListPhoneNumbersOptedOutCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListPhoneNumbersOptedOutCommand(output, context);
    };
    return ListPhoneNumbersOptedOutCommand;
}($Command));
export { ListPhoneNumbersOptedOutCommand };
//# sourceMappingURL=ListPhoneNumbersOptedOutCommand.js.map