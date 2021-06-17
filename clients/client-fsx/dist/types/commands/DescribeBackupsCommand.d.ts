import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeBackupsRequest, DescribeBackupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBackupsCommandInput extends DescribeBackupsRequest {
}
export interface DescribeBackupsCommandOutput extends DescribeBackupsResponse, __MetadataBearer {
}
/**
 * <p>Returns the description of specific Amazon FSx backups, if
 *             a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all
 *             backups owned by your AWS account in the AWS Region of the endpoint that you're
 *             calling.</p>
 *
 *         <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code>
 *             parameter to limit the number of backups in a response. If more backups remain, Amazon
 *             FSx returns a <code>NextToken</code> value in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *                 <code>NextToken</code> from the last response.</p>
 *
 *         <p>This action is used in an iterative process to retrieve a list of your backups.
 *                 <code>DescribeBackups</code> is called first without a <code>NextToken</code>value.
 *             Then the action continues to be called with the <code>NextToken</code> parameter set to
 *             the value of the last <code>NextToken</code> value until a response has no
 *                 <code>NextToken</code>.</p>
 *
 *         <p>When using this action, keep the following in mind:</p>
 *         <ul>
 *             <li>
 *                 <p>The implementation might return fewer than <code>MaxResults</code> file
 *                     system descriptions while still including a <code>NextToken</code>
 *                     value.</p>
 *
 *             </li>
 *             <li>
 *                 <p>The order of backups returned in the response of one
 *                         <code>DescribeBackups</code> call and the order of backups returned across
 *                     the responses of a multi-call iteration is unspecified.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeBackupsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeBackupsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBackupsCommand extends $Command<DescribeBackupsCommandInput, DescribeBackupsCommandOutput, FSxClientResolvedConfig> {
    readonly input: DescribeBackupsCommandInput;
    constructor(input: DescribeBackupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBackupsCommandInput, DescribeBackupsCommandOutput>;
    private serialize;
    private deserialize;
}
