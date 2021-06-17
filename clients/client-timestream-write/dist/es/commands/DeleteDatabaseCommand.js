import { __extends } from "tslib";
import { DeleteDatabaseRequest } from "../models/models_0";
import { deserializeAws_json1_0DeleteDatabaseCommand, serializeAws_json1_0DeleteDatabaseCommand, } from "../protocols/Aws_json1_0";
import { getEndpointDiscoveryRequiredPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a given Timestream database. <i>This is an irreversible operation.
 *       After a database is deleted, the time series data from its tables cannot be recovered.</i>
 *          </p>
 *
 *          <p>All tables in the database must be deleted first, or a ValidationException error will be thrown.
 *       </p>
 *
 *          <p>Due to the nature of distributed retries,
 *          the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DeleteDatabaseCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DeleteDatabaseCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new DeleteDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteDatabaseCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
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
        this.middlewareStack.use(getEndpointDiscoveryRequiredPlugin(configuration, { clientStack: clientStack, options: options }));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TimestreamWriteClient";
        var commandName = "DeleteDatabaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDatabaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDatabaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteDatabaseCommand(input, context);
    };
    DeleteDatabaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteDatabaseCommand(output, context);
    };
    return DeleteDatabaseCommand;
}($Command));
export { DeleteDatabaseCommand };
//# sourceMappingURL=DeleteDatabaseCommand.js.map