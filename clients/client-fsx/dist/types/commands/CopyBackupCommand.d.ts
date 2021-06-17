import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CopyBackupRequest, CopyBackupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopyBackupCommandInput extends CopyBackupRequest {
}
export interface CopyBackupCommandOutput extends CopyBackupResponse, __MetadataBearer {
}
/**
 * <p>Copies an existing backup within the same AWS account to another Region
 *          (cross-Region copy) or within the same Region (in-Region copy). You can have up to five
 *          backup copy requests in progress to a single destination Region per account.</p>
 *          <p>You can use cross-Region backup copies for cross-region disaster recovery.
 *          You periodically take backups and copy them to another Region so that in the
 *          event of a disaster in the primary Region, you can restore from backup and recover
 *          availability quickly in the other Region. You can make cross-Region copies
 *          only within your AWS partition.</p>
 *          <p> You can also use backup copies to clone your file data set to another Region
 *          or within the same Region.</p>
 *          <p>You can use the <code>SourceRegion</code> parameter to specify the AWS Region
 *          from which the backup will be copied. For example, if you make the call from the
 *          <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code>
 *          Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter
 *          to make a cross-Region copy. If you don't specify a Region, the backup copy is
 *          created in the same Region where the request is sent from (in-Region copy).</p>
 *          <p>For more information on creating backup copies, see
 *          <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups">
 *             Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i> and
 *          <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a>
 *          in the <i>Amazon FSx for Lustre User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CopyBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CopyBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CopyBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyBackupCommandInput} for command's `input` shape.
 * @see {@link CopyBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopyBackupCommand extends $Command<CopyBackupCommandInput, CopyBackupCommandOutput, FSxClientResolvedConfig> {
    readonly input: CopyBackupCommandInput;
    constructor(input: CopyBackupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyBackupCommandInput, CopyBackupCommandOutput>;
    private serialize;
    private deserialize;
}
