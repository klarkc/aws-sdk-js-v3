import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { AcceptResourceShareInvitationRequest, AcceptResourceShareInvitationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptResourceShareInvitationCommandInput extends AcceptResourceShareInvitationRequest {
}
export interface AcceptResourceShareInvitationCommandOutput extends AcceptResourceShareInvitationResponse, __MetadataBearer {
}
/**
 * <p>Accepts an invitation to a resource share from another AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AcceptResourceShareInvitationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AcceptResourceShareInvitationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AcceptResourceShareInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptResourceShareInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptResourceShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptResourceShareInvitationCommand extends $Command<AcceptResourceShareInvitationCommandInput, AcceptResourceShareInvitationCommandOutput, RAMClientResolvedConfig> {
    readonly input: AcceptResourceShareInvitationCommandInput;
    constructor(input: AcceptResourceShareInvitationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptResourceShareInvitationCommandInput, AcceptResourceShareInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
