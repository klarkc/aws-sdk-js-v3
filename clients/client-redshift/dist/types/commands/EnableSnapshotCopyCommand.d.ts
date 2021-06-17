import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { EnableSnapshotCopyMessage, EnableSnapshotCopyResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableSnapshotCopyCommandInput extends EnableSnapshotCopyMessage {
}
export interface EnableSnapshotCopyCommandOutput extends EnableSnapshotCopyResult, __MetadataBearer {
}
/**
 * <p>Enables the automatic copy of snapshots from one region to another region for a
 *             specified cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, EnableSnapshotCopyCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, EnableSnapshotCopyCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new EnableSnapshotCopyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSnapshotCopyCommandInput} for command's `input` shape.
 * @see {@link EnableSnapshotCopyCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableSnapshotCopyCommand extends $Command<EnableSnapshotCopyCommandInput, EnableSnapshotCopyCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: EnableSnapshotCopyCommandInput;
    constructor(input: EnableSnapshotCopyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableSnapshotCopyCommandInput, EnableSnapshotCopyCommandOutput>;
    private serialize;
    private deserialize;
}
