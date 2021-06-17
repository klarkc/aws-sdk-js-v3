import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { PutMailboxPermissionsRequest, PutMailboxPermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutMailboxPermissionsCommandInput extends PutMailboxPermissionsRequest {
}
export interface PutMailboxPermissionsCommandOutput extends PutMailboxPermissionsResponse, __MetadataBearer {
}
/**
 * <p>Sets permissions for a user, group, or resource. This replaces any pre-existing
 *          permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutMailboxPermissionsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutMailboxPermissionsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new PutMailboxPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMailboxPermissionsCommandInput} for command's `input` shape.
 * @see {@link PutMailboxPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutMailboxPermissionsCommand extends $Command<PutMailboxPermissionsCommandInput, PutMailboxPermissionsCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: PutMailboxPermissionsCommandInput;
    constructor(input: PutMailboxPermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutMailboxPermissionsCommandInput, PutMailboxPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
