import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { RejectInvitationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectInvitationCommandInput extends RejectInvitationRequest {
}
export interface RejectInvitationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Rejects an invitation to contribute the account data to a behavior graph. This operation
 *          must be called by a member account that has the <code>INVITED</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, RejectInvitationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, RejectInvitationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new RejectInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectInvitationCommandInput} for command's `input` shape.
 * @see {@link RejectInvitationCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectInvitationCommand extends $Command<RejectInvitationCommandInput, RejectInvitationCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: RejectInvitationCommandInput;
    constructor(input: RejectInvitationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectInvitationCommandInput, RejectInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
