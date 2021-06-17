import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListOriginationNumbersRequest, ListOriginationNumbersResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOriginationNumbersCommandInput extends ListOriginationNumbersRequest {
}
export interface ListOriginationNumbersCommandOutput extends ListOriginationNumbersResult, __MetadataBearer {
}
/**
 * <p>Lists the calling AWS account's dedicated origination numbers and their metadata. For
 *             more information about origination numbers, see <a href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html">Origination numbers</a> in the <i>Amazon SNS Developer
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListOriginationNumbersCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListOriginationNumbersCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListOriginationNumbersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOriginationNumbersCommandInput} for command's `input` shape.
 * @see {@link ListOriginationNumbersCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOriginationNumbersCommand extends $Command<ListOriginationNumbersCommandInput, ListOriginationNumbersCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListOriginationNumbersCommandInput;
    constructor(input: ListOriginationNumbersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOriginationNumbersCommandInput, ListOriginationNumbersCommandOutput>;
    private serialize;
    private deserialize;
}
