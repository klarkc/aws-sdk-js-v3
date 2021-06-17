import { __extends } from "tslib";
import { ListSMSSandboxPhoneNumbersInput, ListSMSSandboxPhoneNumbersResult } from "../models/models_0";
import { deserializeAws_queryListSMSSandboxPhoneNumbersCommand, serializeAws_queryListSMSSandboxPhoneNumbersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the calling AWS account's current verified and pending destination phone numbers
 *             in the SMS sandbox.</p>
 *         <p>When you start using Amazon SNS to send SMS messages, your AWS account is in the
 *                 <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for
 *                 you to try Amazon SNS features without risking your reputation as an SMS sender. While your
 *                 account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
 *                 SMS messages only to verified destination phone numbers. For more information, including how to
 *                 move out of the sandbox to send messages without restrictions,
 *                 see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in
 *                 the <i>Amazon SNS Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListSMSSandboxPhoneNumbersCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListSMSSandboxPhoneNumbersCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListSMSSandboxPhoneNumbersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSMSSandboxPhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link ListSMSSandboxPhoneNumbersCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSMSSandboxPhoneNumbersCommand = /** @class */ (function (_super) {
    __extends(ListSMSSandboxPhoneNumbersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSMSSandboxPhoneNumbersCommand(input) {
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
    ListSMSSandboxPhoneNumbersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "ListSMSSandboxPhoneNumbersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSMSSandboxPhoneNumbersInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListSMSSandboxPhoneNumbersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSMSSandboxPhoneNumbersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListSMSSandboxPhoneNumbersCommand(input, context);
    };
    ListSMSSandboxPhoneNumbersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListSMSSandboxPhoneNumbersCommand(output, context);
    };
    return ListSMSSandboxPhoneNumbersCommand;
}($Command));
export { ListSMSSandboxPhoneNumbersCommand };
//# sourceMappingURL=ListSMSSandboxPhoneNumbersCommand.js.map