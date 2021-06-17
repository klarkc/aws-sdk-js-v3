import { __extends } from "tslib";
import { DeleteDBClusterMessage, DeleteDBClusterResult } from "../models/models_0";
import { deserializeAws_queryDeleteDBClusterCommand, serializeAws_queryDeleteDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a previously provisioned cluster. When you delete a cluster, all
 *             automated backups for that cluster are deleted and can't be recovered. Manual DB
 *             cluster snapshots of the specified cluster are not deleted.</p>
 *         <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DeleteDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DeleteDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DeleteDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBClusterCommand = /** @class */ (function (_super) {
    __extends(DeleteDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBClusterCommand(input) {
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
    DeleteDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "DeleteDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDBClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBClusterCommand(input, context);
    };
    DeleteDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBClusterCommand(output, context);
    };
    return DeleteDBClusterCommand;
}($Command));
export { DeleteDBClusterCommand };
//# sourceMappingURL=DeleteDBClusterCommand.js.map