import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CreateSMSSandboxPhoneNumberInput, CreateSMSSandboxPhoneNumberResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSMSSandboxPhoneNumberCommandInput extends CreateSMSSandboxPhoneNumberInput {
}
export interface CreateSMSSandboxPhoneNumberCommandOutput extends CreateSMSSandboxPhoneNumberResult, __MetadataBearer {
}
/**
 * <p>Adds a destination phone number to an AWS account in the SMS sandbox and sends a
 *             one-time password (OTP) to that phone number.</p>
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
 * import { SNSClient, CreateSMSSandboxPhoneNumberCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreateSMSSandboxPhoneNumberCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CreateSMSSandboxPhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSMSSandboxPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link CreateSMSSandboxPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSMSSandboxPhoneNumberCommand extends $Command<CreateSMSSandboxPhoneNumberCommandInput, CreateSMSSandboxPhoneNumberCommandOutput, SNSClientResolvedConfig> {
    readonly input: CreateSMSSandboxPhoneNumberCommandInput;
    constructor(input: CreateSMSSandboxPhoneNumberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSMSSandboxPhoneNumberCommandInput, CreateSMSSandboxPhoneNumberCommandOutput>;
    private serialize;
    private deserialize;
}
