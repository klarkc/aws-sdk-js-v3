import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { RejectResourceShareInvitationRequest, RejectResourceShareInvitationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectResourceShareInvitationCommandInput extends RejectResourceShareInvitationRequest {
}
export interface RejectResourceShareInvitationCommandOutput extends RejectResourceShareInvitationResponse, __MetadataBearer {
}
/**
 * <p>Rejects an invitation to a resource share from another AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, RejectResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, RejectResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new RejectResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectResourceShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectResourceShareInvitationCommand extends $Command<RejectResourceShareInvitationCommandInput, RejectResourceShareInvitationCommandOutput, RAMClientResolvedConfig> {
    readonly input: RejectResourceShareInvitationCommandInput;
    constructor(input: RejectResourceShareInvitationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectResourceShareInvitationCommandInput, RejectResourceShareInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
