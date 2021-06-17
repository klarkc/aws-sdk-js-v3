import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteSnapshotCopyGrantMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSnapshotCopyGrantCommandInput extends DeleteSnapshotCopyGrantMessage {
}
export interface DeleteSnapshotCopyGrantCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified snapshot copy grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteSnapshotCopyGrantCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteSnapshotCopyGrantCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteSnapshotCopyGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSnapshotCopyGrantCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCopyGrantCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSnapshotCopyGrantCommand extends $Command<DeleteSnapshotCopyGrantCommandInput, DeleteSnapshotCopyGrantCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteSnapshotCopyGrantCommandInput;
    constructor(input: DeleteSnapshotCopyGrantCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSnapshotCopyGrantCommandInput, DeleteSnapshotCopyGrantCommandOutput>;
    private serialize;
    private deserialize;
}
