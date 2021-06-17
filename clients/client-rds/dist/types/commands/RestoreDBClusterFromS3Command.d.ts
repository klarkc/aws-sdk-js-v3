import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBClusterFromS3Message, RestoreDBClusterFromS3Result } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreDBClusterFromS3CommandInput extends RestoreDBClusterFromS3Message {
}
export interface RestoreDBClusterFromS3CommandOutput extends RestoreDBClusterFromS3Result, __MetadataBearer {
}
/**
 * <p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket.
 *             Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be
 *             created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the
 *                 <i>Amazon Aurora User Guide</i>.</p>
 *         <note>
 *               <p>This action only restores the DB cluster, not the DB instances for that DB
 *                   cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
 *                   instances for the restored DB cluster, specifying the identifier of the restored DB
 *                   cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
 *                   the <code>RestoreDBClusterFromS3</code> action has completed and the DB
 *                   cluster is available.</p>
 *         </note>
 *         <p>For more information on Amazon Aurora, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *         </p>
 *         <note>
 *             <p>This action only applies to Aurora DB clusters. The source DB engine must be
 *                 MySQL.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBClusterFromS3Command } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBClusterFromS3Command } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBClusterFromS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterFromS3CommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromS3CommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreDBClusterFromS3Command extends $Command<RestoreDBClusterFromS3CommandInput, RestoreDBClusterFromS3CommandOutput, RDSClientResolvedConfig> {
    readonly input: RestoreDBClusterFromS3CommandInput;
    constructor(input: RestoreDBClusterFromS3CommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBClusterFromS3CommandInput, RestoreDBClusterFromS3CommandOutput>;
    private serialize;
    private deserialize;
}
