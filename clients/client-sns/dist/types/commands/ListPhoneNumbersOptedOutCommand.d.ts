import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListPhoneNumbersOptedOutInput, ListPhoneNumbersOptedOutResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPhoneNumbersOptedOutCommandInput extends ListPhoneNumbersOptedOutInput {
}
export interface ListPhoneNumbersOptedOutCommandOutput extends ListPhoneNumbersOptedOutResponse, __MetadataBearer {
}
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
export declare class ListPhoneNumbersOptedOutCommand extends $Command<ListPhoneNumbersOptedOutCommandInput, ListPhoneNumbersOptedOutCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListPhoneNumbersOptedOutCommandInput;
    constructor(input: ListPhoneNumbersOptedOutCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPhoneNumbersOptedOutCommandInput, ListPhoneNumbersOptedOutCommandOutput>;
    private serialize;
    private deserialize;
}
