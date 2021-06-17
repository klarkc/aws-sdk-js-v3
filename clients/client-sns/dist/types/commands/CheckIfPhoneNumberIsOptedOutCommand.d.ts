import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CheckIfPhoneNumberIsOptedOutInput, CheckIfPhoneNumberIsOptedOutResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CheckIfPhoneNumberIsOptedOutCommandInput extends CheckIfPhoneNumberIsOptedOutInput {
}
export interface CheckIfPhoneNumberIsOptedOutCommandOutput extends CheckIfPhoneNumberIsOptedOutResponse, __MetadataBearer {
}
/**
 * <p>Accepts a phone number and indicates whether the phone holder has opted out of
 *             receiving SMS messages from your account. You cannot send SMS messages to a number that
 *             is opted out.</p>
 *         <p>To resume sending messages, you can opt in the number by using the
 *                 <code>OptInPhoneNumber</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CheckIfPhoneNumberIsOptedOutCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CheckIfPhoneNumberIsOptedOutCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CheckIfPhoneNumberIsOptedOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckIfPhoneNumberIsOptedOutCommandInput} for command's `input` shape.
 * @see {@link CheckIfPhoneNumberIsOptedOutCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CheckIfPhoneNumberIsOptedOutCommand extends $Command<CheckIfPhoneNumberIsOptedOutCommandInput, CheckIfPhoneNumberIsOptedOutCommandOutput, SNSClientResolvedConfig> {
    readonly input: CheckIfPhoneNumberIsOptedOutCommandInput;
    constructor(input: CheckIfPhoneNumberIsOptedOutCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckIfPhoneNumberIsOptedOutCommandInput, CheckIfPhoneNumberIsOptedOutCommandOutput>;
    private serialize;
    private deserialize;
}
