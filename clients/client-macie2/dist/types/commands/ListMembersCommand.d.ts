import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListMembersRequest, ListMembersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMembersCommandInput extends ListMembersRequest {
}
export interface ListMembersCommandOutput extends ListMembersResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the accounts that are associated with an Amazon Macie administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListMembersCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListMembersCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMembersCommandInput} for command's `input` shape.
 * @see {@link ListMembersCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMembersCommand extends $Command<ListMembersCommandInput, ListMembersCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: ListMembersCommandInput;
    constructor(input: ListMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMembersCommandInput, ListMembersCommandOutput>;
    private serialize;
    private deserialize;
}
