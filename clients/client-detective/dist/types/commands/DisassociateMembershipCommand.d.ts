import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { DisassociateMembershipRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateMembershipCommandInput extends DisassociateMembershipRequest {
}
export interface DisassociateMembershipCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the member account from the specified behavior graph. This operation can only be
 *          called by a member account that has the <code>ENABLED</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DisassociateMembershipCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DisassociateMembershipCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new DisassociateMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMembershipCommandInput} for command's `input` shape.
 * @see {@link DisassociateMembershipCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateMembershipCommand extends $Command<DisassociateMembershipCommandInput, DisassociateMembershipCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: DisassociateMembershipCommandInput;
    constructor(input: DisassociateMembershipCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateMembershipCommandInput, DisassociateMembershipCommandOutput>;
    private serialize;
    private deserialize;
}
