import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { AcceptInvitationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptInvitationCommandInput extends AcceptInvitationRequest {
}
export interface AcceptInvitationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Accepts an invitation for the member account to contribute data to a behavior graph.
 *          This operation can only be called by an invited member account. </p>
 *          <p>The request provides the ARN of behavior graph.</p>
 *          <p>The member account status in the graph must be <code>INVITED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, AcceptInvitationCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, AcceptInvitationCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new AcceptInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptInvitationCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptInvitationCommand extends $Command<AcceptInvitationCommandInput, AcceptInvitationCommandOutput, DetectiveClientResolvedConfig> {
    readonly input: AcceptInvitationCommandInput;
    constructor(input: AcceptInvitationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DetectiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptInvitationCommandInput, AcceptInvitationCommandOutput>;
    private serialize;
    private deserialize;
}
