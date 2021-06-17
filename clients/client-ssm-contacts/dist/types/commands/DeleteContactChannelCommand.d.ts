import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { DeleteContactChannelRequest, DeleteContactChannelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteContactChannelCommandInput extends DeleteContactChannelRequest {
}
export interface DeleteContactChannelCommandOutput extends DeleteContactChannelResult, __MetadataBearer {
}
/**
 * <p>To no longer receive engagements on a contact channel, you can delete the channel from a
 *          contact. Deleting the contact channel removes it from the contact's engagement plan. If you
 *          delete the only contact channel for a contact, you won't be able to engage that contact
 *          during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeleteContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeleteContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DeleteContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContactChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteContactChannelCommand extends $Command<DeleteContactChannelCommandInput, DeleteContactChannelCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: DeleteContactChannelCommandInput;
    constructor(input: DeleteContactChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteContactChannelCommandInput, DeleteContactChannelCommandOutput>;
    private serialize;
    private deserialize;
}
