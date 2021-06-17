import { __extends } from "tslib";
import { UpdateDatastoreRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateDatastoreCommand, serializeAws_restJson1UpdateDatastoreCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the settings of a data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, UpdateDatastoreCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, UpdateDatastoreCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new UpdateDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatastoreCommandInput} for command's `input` shape.
 * @see {@link UpdateDatastoreCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDatastoreCommand = /** @class */ (function (_super) {
    __extends(UpdateDatastoreCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDatastoreCommand(input) {
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
    UpdateDatastoreCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "UpdateDatastoreCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDatastoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDatastoreCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDatastoreCommand(input, context);
    };
    UpdateDatastoreCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDatastoreCommand(output, context);
    };
    return UpdateDatastoreCommand;
}($Command));
export { UpdateDatastoreCommand };
//# sourceMappingURL=UpdateDatastoreCommand.js.map