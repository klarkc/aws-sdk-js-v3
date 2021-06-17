import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { AssociateTeamMemberRequest, AssociateTeamMemberResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateTeamMemberCommandInput extends AssociateTeamMemberRequest {
}
export interface AssociateTeamMemberCommandOutput extends AssociateTeamMemberResult, __MetadataBearer {
}
/**
 * <p>Adds an IAM user to the team for an AWS CodeStar project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, AssociateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, AssociateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new AssociateTeamMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link AssociateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateTeamMemberCommand extends $Command<AssociateTeamMemberCommandInput, AssociateTeamMemberCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: AssociateTeamMemberCommandInput;
    constructor(input: AssociateTeamMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTeamMemberCommandInput, AssociateTeamMemberCommandOutput>;
    private serialize;
    private deserialize;
}
