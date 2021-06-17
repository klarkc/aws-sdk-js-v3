import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { DeleteWorkloadShareInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWorkloadShareCommandInput extends DeleteWorkloadShareInput {
}
export interface DeleteWorkloadShareCommandOutput extends __MetadataBearer {
}
/**
 * <p>Delete a workload share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteWorkloadShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteWorkloadShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new DeleteWorkloadShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkloadShareCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkloadShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWorkloadShareCommand extends $Command<DeleteWorkloadShareCommandInput, DeleteWorkloadShareCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: DeleteWorkloadShareCommandInput;
    constructor(input: DeleteWorkloadShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkloadShareCommandInput, DeleteWorkloadShareCommandOutput>;
    private serialize;
    private deserialize;
}
