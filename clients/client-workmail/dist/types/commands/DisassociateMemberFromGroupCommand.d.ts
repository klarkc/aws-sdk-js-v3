import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DisassociateMemberFromGroupRequest, DisassociateMemberFromGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateMemberFromGroupCommandInput extends DisassociateMemberFromGroupRequest {
}
export interface DisassociateMemberFromGroupCommandOutput extends DisassociateMemberFromGroupResponse, __MetadataBearer {
}
/**
 * <p>Removes a member from a group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DisassociateMemberFromGroupCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DisassociateMemberFromGroupCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DisassociateMemberFromGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMemberFromGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberFromGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateMemberFromGroupCommand extends $Command<DisassociateMemberFromGroupCommandInput, DisassociateMemberFromGroupCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DisassociateMemberFromGroupCommandInput;
    constructor(input: DisassociateMemberFromGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateMemberFromGroupCommandInput, DisassociateMemberFromGroupCommandOutput>;
    private serialize;
    private deserialize;
}
