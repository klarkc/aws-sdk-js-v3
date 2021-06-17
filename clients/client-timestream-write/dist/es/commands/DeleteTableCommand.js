import { __extends } from "tslib";
import { DeleteTableRequest } from "../models/models_0";
import { deserializeAws_json1_0DeleteTableCommand, serializeAws_json1_0DeleteTableCommand, } from "../protocols/Aws_json1_0";
import { getEndpointDiscoveryRequiredPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a given Timestream table. This is an irreversible operation.
 *        After a Timestream database table is deleted, the time series data stored in
 *        the table cannot be recovered.
 *        </p>
 *          <p>Due to the nature of distributed retries,
 *          the operation can return either success or a ResourceNotFoundException. Clients should consider them equivalent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DeleteTableCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DeleteTableCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * const client = new TimestreamWriteClient(config);
 * const command = new DeleteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTableCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTableCommand = /** @class */ (function (_super) {
    __extends(DeleteTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTableCommand(input) {
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
    DeleteTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointDiscoveryRequiredPlugin(configuration, { clientStack: clientStack, options: options }));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TimestreamWriteClient";
        var commandName = "DeleteTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTableRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteTableCommand(input, context);
    };
    DeleteTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteTableCommand(output, context);
    };
    return DeleteTableCommand;
}($Command));
export { DeleteTableCommand };
//# sourceMappingURL=DeleteTableCommand.js.map