import { __extends } from "tslib";
import { CreateSlotRequest, CreateSlotResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSlotCommand, serializeAws_restJson1CreateSlotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a slot in an intent. A slot is a variable needed to fulfill
 *          an intent. For example, an <code>OrderPizza</code> intent might need
 *          slots for size, crust, and number of pizzas. For each slot, you define
 *          one or more utterances that Amazon Lex uses to elicit a response from the
 *          user. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateSlotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateSlotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateSlotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSlotCommandInput} for command's `input` shape.
 * @see {@link CreateSlotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSlotCommand = /** @class */ (function (_super) {
    __extends(CreateSlotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSlotCommand(input) {
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
    CreateSlotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "CreateSlotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSlotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSlotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSlotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSlotCommand(input, context);
    };
    CreateSlotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSlotCommand(output, context);
    };
    return CreateSlotCommand;
}($Command));
export { CreateSlotCommand };
//# sourceMappingURL=CreateSlotCommand.js.map