import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { ListTeamMembersRequest, ListTeamMembersResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTeamMembersCommandInput extends ListTeamMembersRequest {
}
export interface ListTeamMembersCommandOutput extends ListTeamMembersResult, __MetadataBearer {
}
/**
 * <p>Lists all team members associated with a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListTeamMembersCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListTeamMembersCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new ListTeamMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTeamMembersCommandInput} for command's `input` shape.
 * @see {@link ListTeamMembersCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTeamMembersCommand extends $Command<ListTeamMembersCommandInput, ListTeamMembersCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: ListTeamMembersCommandInput;
    constructor(input: ListTeamMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTeamMembersCommandInput, ListTeamMembersCommandOutput>;
    private serialize;
    private deserialize;
}
