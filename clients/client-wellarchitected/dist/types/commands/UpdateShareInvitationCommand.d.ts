import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { UpdateShareInvitationInput, UpdateShareInvitationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateShareInvitationCommandInput extends UpdateShareInvitationInput {
}
export interface UpdateShareInvitationCommandOutput extends UpdateShareInvitationOutput, __MetadataBearer {
}
/**
 * <p>Update a workload invitation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateShareInvitationCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateShareInvitationCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateShareInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateShareInvitationCommandInput} for command's `input` shape.
 * @see {@link UpdateShareInvitationCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateShareInvitationCommand extends $Command<UpdateShareInvitationCommandInput, UpdateShareInvitationCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: UpdateShareInvitationCommandInput;
    constructor(input: UpdateShareInvitationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateShareInvitationCommandInput, UpdateShareInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
