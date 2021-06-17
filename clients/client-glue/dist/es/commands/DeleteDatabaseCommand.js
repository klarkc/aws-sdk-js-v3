import { __extends } from "tslib";
import { DeleteDatabaseRequest, DeleteDatabaseResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteDatabaseCommand, serializeAws_json1_1DeleteDatabaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a specified database from a Data Catalog.</p>
 *          <note>
 *             <p>After completing this operation, you no longer have access to the tables (and all table
 *         versions and partitions that might belong to the tables) and the user-defined functions in
 *         the deleted database. AWS Glue deletes these "orphaned" resources asynchronously in a timely
 *         manner, at the discretion of the service.</p>
 *             <p>To ensure the immediate deletion of all related resources, before calling
 *           <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or
 *           <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or
 *           <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and
 *           <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that
 *         belong to the database.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteDatabaseCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteDatabaseCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteDatabaseCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDatabaseCommand = /** @class */ (function (_super) {
    __extends(DeleteDatabaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDatabaseCommand(input) {
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
    DeleteDatabaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDatabaseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDatabaseCommand(input, context);
    };
    DeleteDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDatabaseCommand(output, context);
    };
    return DeleteDatabaseCommand;
}($Command));
export { DeleteDatabaseCommand };
//# sourceMappingURL=DeleteDatabaseCommand.js.map