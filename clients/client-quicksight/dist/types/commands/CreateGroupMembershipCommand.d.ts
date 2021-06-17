import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateGroupMembershipRequest, CreateGroupMembershipResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateGroupMembershipCommandInput extends CreateGroupMembershipRequest {
}
export interface CreateGroupMembershipCommandOutput extends CreateGroupMembershipResponse, __MetadataBearer {
}
/**
 * <p>Adds an Amazon QuickSight user to an Amazon QuickSight group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateGroupMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateGroupMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateGroupMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGroupMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateGroupMembershipCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGroupMembershipCommand extends $Command<CreateGroupMembershipCommandInput, CreateGroupMembershipCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: CreateGroupMembershipCommandInput;
    constructor(input: CreateGroupMembershipCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGroupMembershipCommandInput, CreateGroupMembershipCommandOutput>;
    private serialize;
    private deserialize;
}
