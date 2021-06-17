import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { DisassociateTeamMemberRequest, DisassociateTeamMemberResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateTeamMemberCommandInput extends DisassociateTeamMemberRequest {
}
export interface DisassociateTeamMemberCommandOutput extends DisassociateTeamMemberResult, __MetadataBearer {
}
/**
 * <p>Removes a user from a project. Removing a user from a project also removes the IAM
 *       policies from that user that allowed access to the project and its resources. Disassociating a
 *       team member does not remove that user's profile from AWS CodeStar. It does not remove the user from
 *       IAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DisassociateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DisassociateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DisassociateTeamMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link DisassociateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateTeamMemberCommand extends $Command<DisassociateTeamMemberCommandInput, DisassociateTeamMemberCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: DisassociateTeamMemberCommandInput;
    constructor(input: DisassociateTeamMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTeamMemberCommandInput, DisassociateTeamMemberCommandOutput>;
    private serialize;
    private deserialize;
}
