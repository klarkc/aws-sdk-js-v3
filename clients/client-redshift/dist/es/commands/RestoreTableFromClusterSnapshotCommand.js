import { __extends } from "tslib";
import { RestoreTableFromClusterSnapshotMessage, RestoreTableFromClusterSnapshotResult } from "../models/models_1";
import { deserializeAws_queryRestoreTableFromClusterSnapshotCommand, serializeAws_queryRestoreTableFromClusterSnapshotCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must
 *             create the new table within the Amazon Redshift cluster that the snapshot was taken
 *             from.</p>
 *         <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with
 *             the same name as an existing table in an Amazon Redshift cluster. That is, you cannot
 *             overwrite an existing table in a cluster with a restored table. If you want to replace
 *             your original table with a new, restored table, then rename or drop your original table
 *             before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your
 *             original table, then you can pass the original name of the table as the
 *                 <code>NewTableName</code> parameter value in the call to
 *                 <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original
 *             table with the table created from the snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RestoreTableFromClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RestoreTableFromClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RestoreTableFromClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreTableFromClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreTableFromClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreTableFromClusterSnapshotCommand = /** @class */ (function (_super) {
    __extends(RestoreTableFromClusterSnapshotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreTableFromClusterSnapshotCommand(input) {
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
    RestoreTableFromClusterSnapshotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "RestoreTableFromClusterSnapshotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreTableFromClusterSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreTableFromClusterSnapshotResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreTableFromClusterSnapshotCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRestoreTableFromClusterSnapshotCommand(input, context);
    };
    RestoreTableFromClusterSnapshotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRestoreTableFromClusterSnapshotCommand(output, context);
    };
    return RestoreTableFromClusterSnapshotCommand;
}($Command));
export { RestoreTableFromClusterSnapshotCommand };
//# sourceMappingURL=RestoreTableFromClusterSnapshotCommand.js.map