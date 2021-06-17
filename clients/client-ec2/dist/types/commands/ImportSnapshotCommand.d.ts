import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportSnapshotRequest, ImportSnapshotResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportSnapshotCommandInput extends ImportSnapshotRequest {
}
export interface ImportSnapshotCommandOutput extends ImportSnapshotResult, __MetadataBearer {
}
/**
 * <p>Imports a disk into an EBS snapshot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-import-snapshot.html">Importing a disk as a snapshot using VM Import/Export</a> in the
 *    <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportSnapshotCommandInput} for command's `input` shape.
 * @see {@link ImportSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportSnapshotCommand extends $Command<ImportSnapshotCommandInput, ImportSnapshotCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ImportSnapshotCommandInput;
    constructor(input: ImportSnapshotCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportSnapshotCommandInput, ImportSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
