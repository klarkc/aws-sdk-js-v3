import { __extends } from "tslib";
import { RestoreDBClusterFromS3Message, RestoreDBClusterFromS3Result } from "../models/models_1";
import { deserializeAws_queryRestoreDBClusterFromS3Command, serializeAws_queryRestoreDBClusterFromS3Command, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var RestoreDBClusterFromS3Command = /** @class */ (function (_super) {
    __extends(RestoreDBClusterFromS3Command, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreDBClusterFromS3Command(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    RestoreDBClusterFromS3Command.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RestoreDBClusterFromS3Command";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreDBClusterFromS3Message.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreDBClusterFromS3Result.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreDBClusterFromS3Command.prototype.serialize = function (input, context) {
        return serializeAws_queryRestoreDBClusterFromS3Command(input, context);
    };
    RestoreDBClusterFromS3Command.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRestoreDBClusterFromS3Command(output, context);
    };
    return RestoreDBClusterFromS3Command;
}($Command));
export { RestoreDBClusterFromS3Command };
//# sourceMappingURL=RestoreDBClusterFromS3Command.js.map