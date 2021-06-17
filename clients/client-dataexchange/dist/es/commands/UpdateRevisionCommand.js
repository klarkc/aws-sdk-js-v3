import { __extends } from "tslib";
import { UpdateRevisionRequest, UpdateRevisionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateRevisionCommand, serializeAws_restJson1UpdateRevisionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation updates a revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, UpdateRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, UpdateRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new UpdateRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRevisionCommandInput} for command's `input` shape.
 * @see {@link UpdateRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRevisionCommand = /** @class */ (function (_super) {
    __extends(UpdateRevisionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRevisionCommand(input) {
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
    UpdateRevisionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "UpdateRevisionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRevisionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRevisionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRevisionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRevisionCommand(input, context);
    };
    UpdateRevisionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRevisionCommand(output, context);
    };
    return UpdateRevisionCommand;
}($Command));
export { UpdateRevisionCommand };
//# sourceMappingURL=UpdateRevisionCommand.js.map