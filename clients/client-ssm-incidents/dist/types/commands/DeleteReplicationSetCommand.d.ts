import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { DeleteReplicationSetInput, DeleteReplicationSetOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReplicationSetCommandInput extends DeleteReplicationSetInput {
}
export interface DeleteReplicationSetCommandOutput extends DeleteReplicationSetOutput, __MetadataBearer {
}
/**
 * <p>Deletes all Regions in your replication set. Deleting the replication set deletes all
 *             Incident Manager data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteReplicationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReplicationSetCommand extends $Command<DeleteReplicationSetCommandInput, DeleteReplicationSetCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: DeleteReplicationSetCommandInput;
    constructor(input: DeleteReplicationSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReplicationSetCommandInput, DeleteReplicationSetCommandOutput>;
    private serialize;
    private deserialize;
}
