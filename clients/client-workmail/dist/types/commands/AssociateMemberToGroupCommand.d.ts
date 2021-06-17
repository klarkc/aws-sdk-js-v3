import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { AssociateMemberToGroupRequest, AssociateMemberToGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateMemberToGroupCommandInput extends AssociateMemberToGroupRequest {
}
export interface AssociateMemberToGroupCommandOutput extends AssociateMemberToGroupResponse, __MetadataBearer {
}
/**
 * <p>Adds a member (user or group) to the group's set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssociateMemberToGroupCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, AssociateMemberToGroupCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new AssociateMemberToGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateMemberToGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberToGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateMemberToGroupCommand extends $Command<AssociateMemberToGroupCommandInput, AssociateMemberToGroupCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: AssociateMemberToGroupCommandInput;
    constructor(input: AssociateMemberToGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateMemberToGroupCommandInput, AssociateMemberToGroupCommandOutput>;
    private serialize;
    private deserialize;
}
