import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DeleteMailboxPermissionsRequest, DeleteMailboxPermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMailboxPermissionsCommandInput extends DeleteMailboxPermissionsRequest {
}
export interface DeleteMailboxPermissionsCommandOutput extends DeleteMailboxPermissionsResponse, __MetadataBearer {
}
/**
 * <p>Deletes permissions granted to a member (user or group).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteMailboxPermissionsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteMailboxPermissionsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeleteMailboxPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMailboxPermissionsCommandInput} for command's `input` shape.
 * @see {@link DeleteMailboxPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMailboxPermissionsCommand extends $Command<DeleteMailboxPermissionsCommandInput, DeleteMailboxPermissionsCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DeleteMailboxPermissionsCommandInput;
    constructor(input: DeleteMailboxPermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMailboxPermissionsCommandInput, DeleteMailboxPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
