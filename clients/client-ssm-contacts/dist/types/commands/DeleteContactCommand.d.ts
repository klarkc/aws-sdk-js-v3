import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { DeleteContactRequest, DeleteContactResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteContactCommandInput extends DeleteContactRequest {
}
export interface DeleteContactCommandOutput extends DeleteContactResult, __MetadataBearer {
}
/**
 * <p>To remove a contact from Incident Manager, you can delete the contact. Deleting a contact
 *          removes them from all escalation plans and related response plans. Deleting an escalation
 *          plan removes it from all related response plans. You will have to recreate the contact and
 *          its contact channels before you can use it again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeleteContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeleteContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DeleteContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContactCommandInput} for command's `input` shape.
 * @see {@link DeleteContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteContactCommand extends $Command<DeleteContactCommandInput, DeleteContactCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: DeleteContactCommandInput;
    constructor(input: DeleteContactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteContactCommandInput, DeleteContactCommandOutput>;
    private serialize;
    private deserialize;
}
