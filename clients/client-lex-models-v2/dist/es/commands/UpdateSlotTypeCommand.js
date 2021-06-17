import { __extends } from "tslib";
import { UpdateSlotTypeRequest, UpdateSlotTypeResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateSlotTypeCommand, serializeAws_restJson1UpdateSlotTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the configuration of an existing slot type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSlotTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSlotTypeCommand = /** @class */ (function (_super) {
    __extends(UpdateSlotTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSlotTypeCommand(input) {
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
    UpdateSlotTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "UpdateSlotTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSlotTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSlotTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSlotTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSlotTypeCommand(input, context);
    };
    UpdateSlotTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSlotTypeCommand(output, context);
    };
    return UpdateSlotTypeCommand;
}($Command));
export { UpdateSlotTypeCommand };
//# sourceMappingURL=UpdateSlotTypeCommand.js.map