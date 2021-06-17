import { __extends } from "tslib";
import { UpdateDataSetRequest, UpdateDataSetResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateDataSetCommand, serializeAws_restJson1UpdateDataSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation updates a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, UpdateDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, UpdateDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new UpdateDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSetCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDataSetCommand = /** @class */ (function (_super) {
    __extends(UpdateDataSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDataSetCommand(input) {
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
    UpdateDataSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "UpdateDataSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDataSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDataSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDataSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDataSetCommand(input, context);
    };
    UpdateDataSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDataSetCommand(output, context);
    };
    return UpdateDataSetCommand;
}($Command));
export { UpdateDataSetCommand };
//# sourceMappingURL=UpdateDataSetCommand.js.map