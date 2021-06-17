import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { DeleteWorkloadInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWorkloadCommandInput extends DeleteWorkloadInput {
}
export interface DeleteWorkloadCommandOutput extends __MetadataBearer {
}
/**
 * <p>Delete an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new DeleteWorkloadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkloadCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkloadCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWorkloadCommand extends $Command<DeleteWorkloadCommandInput, DeleteWorkloadCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: DeleteWorkloadCommandInput;
    constructor(input: DeleteWorkloadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkloadCommandInput, DeleteWorkloadCommandOutput>;
    private serialize;
    private deserialize;
}
