import { __extends } from "tslib";
import { DeleteSMSSandboxPhoneNumberInput, DeleteSMSSandboxPhoneNumberResult } from "../models/models_0";
import { deserializeAws_queryDeleteSMSSandboxPhoneNumberCommand, serializeAws_queryDeleteSMSSandboxPhoneNumberCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an AWS account's verified or pending phone number from the SMS sandbox.</p>
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
 * import { SNSClient, DeleteSMSSandboxPhoneNumberCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeleteSMSSandboxPhoneNumberCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new DeleteSMSSandboxPhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSMSSandboxPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link DeleteSMSSandboxPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSMSSandboxPhoneNumberCommand = /** @class */ (function (_super) {
    __extends(DeleteSMSSandboxPhoneNumberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSMSSandboxPhoneNumberCommand(input) {
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
    DeleteSMSSandboxPhoneNumberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "DeleteSMSSandboxPhoneNumberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSMSSandboxPhoneNumberInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSMSSandboxPhoneNumberResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSMSSandboxPhoneNumberCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteSMSSandboxPhoneNumberCommand(input, context);
    };
    DeleteSMSSandboxPhoneNumberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteSMSSandboxPhoneNumberCommand(output, context);
    };
    return DeleteSMSSandboxPhoneNumberCommand;
}($Command));
export { DeleteSMSSandboxPhoneNumberCommand };
//# sourceMappingURL=DeleteSMSSandboxPhoneNumberCommand.js.map