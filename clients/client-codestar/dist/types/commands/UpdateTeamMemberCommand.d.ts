import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { UpdateTeamMemberRequest, UpdateTeamMemberResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTeamMemberCommandInput extends UpdateTeamMemberRequest {
}
export interface UpdateTeamMemberCommandOutput extends UpdateTeamMemberResult, __MetadataBearer {
}
/**
 * <p>Updates a team member's attributes in an AWS CodeStar project. For example, you can change a
 *       team member's role in the project, or change whether they have remote access to project
 *       resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UpdateTeamMemberCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UpdateTeamMemberCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new UpdateTeamMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTeamMemberCommandInput} for command's `input` shape.
 * @see {@link UpdateTeamMemberCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTeamMemberCommand extends $Command<UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: UpdateTeamMemberCommandInput;
    constructor(input: UpdateTeamMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput>;
    private serialize;
    private deserialize;
}
