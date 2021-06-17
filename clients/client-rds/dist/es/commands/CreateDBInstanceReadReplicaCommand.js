import { __extends } from "tslib";
import { CreateDBInstanceReadReplicaMessage, CreateDBInstanceReadReplicaResult } from "../models/models_0";
import { deserializeAws_queryCreateDBInstanceReadReplicaCommand, serializeAws_queryCreateDBInstanceReadReplicaCommand, } from "../protocols/Aws_query";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new DB instance that acts as a read replica for an existing source DB
 *             instance. You can create a read replica for a DB instance running MySQL, MariaDB,
 *             Oracle, PostgreSQL, or SQL Server. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html">Working with Read
 *                 Replicas</a> in the <i>Amazon RDS User Guide</i>. </p>
 *
 *          <p>Amazon Aurora doesn't support this action. Call the <code>CreateDBInstance</code>
 *             action to create a DB instance for an Aurora DB cluster.</p>
 *
 *          <p>All read replica DB instances are created with backups disabled. All other DB
 *             instance attributes (including DB security groups and DB parameter groups) are inherited
 *             from the source DB instance, except as specified.</p>
 *
 *          <important>
 *             <p>Your source DB instance must have backup retention enabled.
 *          </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBInstanceReadReplicaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBInstanceReadReplicaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBInstanceReadReplicaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBInstanceReadReplicaCommandInput} for command's `input` shape.
 * @see {@link CreateDBInstanceReadReplicaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBInstanceReadReplicaCommand = /** @class */ (function (_super) {
    __extends(CreateDBInstanceReadReplicaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBInstanceReadReplicaCommand(input) {
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
    CreateDBInstanceReadReplicaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CreateDBInstanceReadReplicaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBInstanceReadReplicaMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBInstanceReadReplicaResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBInstanceReadReplicaCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBInstanceReadReplicaCommand(input, context);
    };
    CreateDBInstanceReadReplicaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBInstanceReadReplicaCommand(output, context);
    };
    return CreateDBInstanceReadReplicaCommand;
}($Command));
export { CreateDBInstanceReadReplicaCommand };
//# sourceMappingURL=CreateDBInstanceReadReplicaCommand.js.map