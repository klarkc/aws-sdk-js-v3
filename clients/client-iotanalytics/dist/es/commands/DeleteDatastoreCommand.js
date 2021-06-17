import { __extends } from "tslib";
import { DeleteDatastoreRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteDatastoreCommand, serializeAws_restJson1DeleteDatastoreCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DeleteDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DeleteDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new DeleteDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatastoreCommandInput} for command's `input` shape.
 * @see {@link DeleteDatastoreCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDatastoreCommand = /** @class */ (function (_super) {
    __extends(DeleteDatastoreCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDatastoreCommand(input) {
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
    DeleteDatastoreCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "DeleteDatastoreCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDatastoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDatastoreCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDatastoreCommand(input, context);
    };
    DeleteDatastoreCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDatastoreCommand(output, context);
    };
    return DeleteDatastoreCommand;
}($Command));
export { DeleteDatastoreCommand };
//# sourceMappingURL=DeleteDatastoreCommand.js.map