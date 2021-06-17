import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { DeleteContactListRequest, DeleteContactListResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteContactListCommandInput extends DeleteContactListRequest {
}
export interface DeleteContactListCommandOutput extends DeleteContactListResponse, __MetadataBearer {
}
/**
 * <p>Deletes a contact list and all of the contacts on that list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteContactListCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteContactListCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new DeleteContactListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContactListCommandInput} for command's `input` shape.
 * @see {@link DeleteContactListCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteContactListCommand extends $Command<DeleteContactListCommandInput, DeleteContactListCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: DeleteContactListCommandInput;
    constructor(input: DeleteContactListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteContactListCommandInput, DeleteContactListCommandOutput>;
    private serialize;
    private deserialize;
}
