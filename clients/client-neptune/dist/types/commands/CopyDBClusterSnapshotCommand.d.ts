import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { CopyDBClusterSnapshotMessage, CopyDBClusterSnapshotResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopyDBClusterSnapshotCommandInput extends CopyDBClusterSnapshotMessage {
}
export interface CopyDBClusterSnapshotCommandOutput extends CopyDBClusterSnapshotResult, __MetadataBearer {
}
/**
 * <p>Copies a snapshot of a DB cluster.</p>
 *          <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot,
 *       <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the
 *       shared DB cluster snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CopyDBClusterSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CopyDBClusterSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new CopyDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopyDBClusterSnapshotCommand extends $Command<CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: CopyDBClusterSnapshotCommandInput;
    constructor(input: CopyDBClusterSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyDBClusterSnapshotCommandInput, CopyDBClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
