import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { ListContactListsRequest, ListContactListsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListContactListsCommandInput extends ListContactListsRequest {
}
export interface ListContactListsCommandOutput extends ListContactListsResponse, __MetadataBearer {
}
/**
 * <p>Lists all of the contact lists available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListContactListsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListContactListsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListContactListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactListsCommandInput} for command's `input` shape.
 * @see {@link ListContactListsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListContactListsCommand extends $Command<ListContactListsCommandInput, ListContactListsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: ListContactListsCommandInput;
    constructor(input: ListContactListsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContactListsCommandInput, ListContactListsCommandOutput>;
    private serialize;
    private deserialize;
}
