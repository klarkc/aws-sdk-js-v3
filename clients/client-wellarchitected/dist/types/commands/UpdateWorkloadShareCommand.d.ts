import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { UpdateWorkloadShareInput, UpdateWorkloadShareOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateWorkloadShareCommandInput extends UpdateWorkloadShareInput {
}
export interface UpdateWorkloadShareCommandOutput extends UpdateWorkloadShareOutput, __MetadataBearer {
}
/**
 * <p>Update a workload share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateWorkloadShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateWorkloadShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateWorkloadShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkloadShareCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateWorkloadShareCommand extends $Command<UpdateWorkloadShareCommandInput, UpdateWorkloadShareCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: UpdateWorkloadShareCommandInput;
    constructor(input: UpdateWorkloadShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWorkloadShareCommandInput, UpdateWorkloadShareCommandOutput>;
    private serialize;
    private deserialize;
}
