"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreDBClusterFromS3Command = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class RestoreDBClusterFromS3Command extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "RDSClient";
        const commandName = "RestoreDBClusterFromS3Command";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.RestoreDBClusterFromS3Message.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.RestoreDBClusterFromS3Result.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryRestoreDBClusterFromS3Command(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryRestoreDBClusterFromS3Command(output, context);
    }
}
exports.RestoreDBClusterFromS3Command = RestoreDBClusterFromS3Command;
//# sourceMappingURL=RestoreDBClusterFromS3Command.js.map