import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteClusterParameterGroupMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteClusterParameterGroupCommandInput extends DeleteClusterParameterGroupMessage {
}
export interface DeleteClusterParameterGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a specified Amazon Redshift parameter group.</p>
 *         <note>
 *             <p>You cannot delete a parameter group if it is associated with a
 *                 cluster.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteClusterParameterGroupCommand extends $Command<DeleteClusterParameterGroupCommandInput, DeleteClusterParameterGroupCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteClusterParameterGroupCommandInput;
    constructor(input: DeleteClusterParameterGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteClusterParameterGroupCommandInput, DeleteClusterParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
