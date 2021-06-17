import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { UpdateWorkloadInput, UpdateWorkloadOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateWorkloadCommandInput extends UpdateWorkloadInput {
}
export interface UpdateWorkloadCommandOutput extends UpdateWorkloadOutput, __MetadataBearer {
}
/**
 * <p>Update an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateWorkloadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkloadCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateWorkloadCommand extends $Command<UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: UpdateWorkloadCommandInput;
    constructor(input: UpdateWorkloadCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput>;
    private serialize;
    private deserialize;
}
