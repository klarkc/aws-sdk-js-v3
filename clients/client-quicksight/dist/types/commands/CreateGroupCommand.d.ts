import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateGroupRequest, CreateGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateGroupCommandInput extends CreateGroupRequest {
}
export interface CreateGroupCommandOutput extends CreateGroupResponse, __MetadataBearer {
}
/**
 * <p>Creates an Amazon QuickSight group.</p>
 * 		       <p>The permissions resource is
 * 					<code>arn:aws:quicksight:us-east-1:<i><relevant-aws-account-id></i>:group/default/<i><group-name></i>
 *             </code>.</p>
 * 		       <p>The response is a group object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateGroupCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateGroupCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGroupCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGroupCommand extends $Command<CreateGroupCommandInput, CreateGroupCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: CreateGroupCommandInput;
    constructor(input: CreateGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGroupCommandInput, CreateGroupCommandOutput>;
    private serialize;
    private deserialize;
}
