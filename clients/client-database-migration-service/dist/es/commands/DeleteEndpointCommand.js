import { __extends } from "tslib";
import { DeleteEndpointMessage, DeleteEndpointResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteEndpointCommand, serializeAws_json1_1DeleteEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified endpoint.</p>
 *          <note>
 *             <p>All tasks associated with the endpoint must be deleted before you can delete the
 *             endpoint.</p>
 *          </note>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteEndpointCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteEndpointCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DeleteEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEndpointCommand(input) {
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
    DeleteEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DeleteEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEndpointMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteEndpointCommand(input, context);
    };
    DeleteEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteEndpointCommand(output, context);
    };
    return DeleteEndpointCommand;
}($Command));
export { DeleteEndpointCommand };
//# sourceMappingURL=DeleteEndpointCommand.js.map