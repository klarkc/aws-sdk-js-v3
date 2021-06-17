import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBInstanceFromS3Message, RestoreDBInstanceFromS3Result } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RestoreDBInstanceFromS3CommandInput extends RestoreDBInstanceFromS3Message {
}
export interface RestoreDBInstanceFromS3CommandOutput extends RestoreDBInstanceFromS3Result, __MetadataBearer {
}
/**
 * <p>Amazon Relational Database Service (Amazon RDS)
 *             supports importing MySQL databases by using backup files.
 *             You can create a backup of your on-premises database,
 *             store it on Amazon Simple Storage Service (Amazon S3),
 *             and then restore the backup file onto a new Amazon RDS DB instance running MySQL.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html">Importing Data into an Amazon RDS MySQL DB Instance</a>
 *             in the <i>Amazon RDS User Guide.</i>
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBInstanceFromS3Command } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBInstanceFromS3Command } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBInstanceFromS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBInstanceFromS3CommandInput} for command's `input` shape.
 * @see {@link RestoreDBInstanceFromS3CommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RestoreDBInstanceFromS3Command extends $Command<RestoreDBInstanceFromS3CommandInput, RestoreDBInstanceFromS3CommandOutput, RDSClientResolvedConfig> {
    readonly input: RestoreDBInstanceFromS3CommandInput;
    constructor(input: RestoreDBInstanceFromS3CommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBInstanceFromS3CommandInput, RestoreDBInstanceFromS3CommandOutput>;
    private serialize;
    private deserialize;
}
