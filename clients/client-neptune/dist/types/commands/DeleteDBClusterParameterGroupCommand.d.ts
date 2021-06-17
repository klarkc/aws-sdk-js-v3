import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBClusterParameterGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDBClusterParameterGroupCommandInput extends DeleteDBClusterParameterGroupMessage {
}
export interface DeleteDBClusterParameterGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be
 *       deleted can't be associated with any DB clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBClusterParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBClusterParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DeleteDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDBClusterParameterGroupCommand extends $Command<DeleteDBClusterParameterGroupCommandInput, DeleteDBClusterParameterGroupCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DeleteDBClusterParameterGroupCommandInput;
    constructor(input: DeleteDBClusterParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBClusterParameterGroupCommandInput, DeleteDBClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
