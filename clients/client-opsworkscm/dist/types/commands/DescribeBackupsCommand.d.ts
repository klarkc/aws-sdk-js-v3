import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DescribeBackupsRequest, DescribeBackupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBackupsCommandInput extends DescribeBackupsRequest {
}
export interface DescribeBackupsCommandOutput extends DescribeBackupsResponse, __MetadataBearer {
}
/**
 * <p>
 *       Describes backups. The results are ordered by time, with newest backups first.
 *       If you do not specify a BackupId or ServerName, the command returns all backups.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when the backup does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DescribeBackupsCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DescribeBackupsCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new DescribeBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBackupsCommand extends $Command<DescribeBackupsCommandInput, DescribeBackupsCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: DescribeBackupsCommandInput;
    constructor(input: DescribeBackupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBackupsCommandInput, DescribeBackupsCommandOutput>;
    private serialize;
    private deserialize;
}
