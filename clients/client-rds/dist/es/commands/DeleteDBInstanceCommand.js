import { __extends } from "tslib";
import { DeleteDBInstanceMessage, DeleteDBInstanceResult } from "../models/models_0";
import { deserializeAws_queryDeleteDBInstanceCommand, serializeAws_queryDeleteDBInstanceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The DeleteDBInstance action deletes a previously provisioned DB instance.
 *           When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered.
 *           Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p>
 *          <p>
 *         If you request a final DB snapshot
 *         the status of the Amazon RDS DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code>
 *         is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.
 *         </p>
 *          <p>When a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>,
 *           or <code>incompatible-network</code>, you can only delete it when you skip creation of the final snapshot with the <code>SkipFinalSnapshot</code> parameter.</p>
 *
 *          <p>If the specified DB instance is part of an Amazon Aurora DB cluster, you can't delete the DB instance if both of the following
 *       conditions are true:</p>
 *          <ul>
 *             <li>
 *                <p>The DB cluster is a read replica of another Amazon Aurora DB cluster.</p>
 *             </li>
 *             <li>
 *                <p>The DB instance is the only instance in the DB cluster.</p>
 *             </li>
 *          </ul>
 *          <p>To delete a DB instance in this case, first call the
 *                 <code>PromoteReadReplicaDBCluster</code> API action to promote the DB cluster so
 *             it's no longer a read replica. After the promotion completes, then call the
 *                 <code>DeleteDBInstance</code> API action to delete the final instance in the DB
 *             cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBInstanceCommand = /** @class */ (function (_super) {
    __extends(DeleteDBInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBInstanceCommand(input) {
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
    DeleteDBInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteDBInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBInstanceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDBInstanceResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBInstanceCommand(input, context);
    };
    DeleteDBInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBInstanceCommand(output, context);
    };
    return DeleteDBInstanceCommand;
}($Command));
export { DeleteDBInstanceCommand };
//# sourceMappingURL=DeleteDBInstanceCommand.js.map