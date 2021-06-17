import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DisableSnapshotCopyMessage, DisableSnapshotCopyResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableSnapshotCopyCommandInput extends DisableSnapshotCopyMessage {
}
export interface DisableSnapshotCopyCommandOutput extends DisableSnapshotCopyResult, __MetadataBearer {
}
/**
 * <p>Disables the automatic copying of snapshots from one region to another region for a
 *             specified cluster.</p>
 *         <p>If your cluster and its snapshots are encrypted using a customer master key (CMK)
 *             from AWS KMS, use <a>DeleteSnapshotCopyGrant</a> to delete the grant that
 *             grants Amazon Redshift permission to the CMK in the destination region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DisableSnapshotCopyCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DisableSnapshotCopyCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DisableSnapshotCopyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableSnapshotCopyCommandInput} for command's `input` shape.
 * @see {@link DisableSnapshotCopyCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableSnapshotCopyCommand extends $Command<DisableSnapshotCopyCommandInput, DisableSnapshotCopyCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DisableSnapshotCopyCommandInput;
    constructor(input: DisableSnapshotCopyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableSnapshotCopyCommandInput, DisableSnapshotCopyCommandOutput>;
    private serialize;
    private deserialize;
}
