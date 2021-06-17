import { __extends } from "tslib";
import { CreateSlotTypeRequest, CreateSlotTypeResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSlotTypeCommand, serializeAws_restJson1CreateSlotTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a custom slot type</p>
 *          <p> To create a custom slot type, specify a name for the slot type and
 *          a set of enumeration values, the values that a slot of this type can
 *          assume. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateSlotTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSlotTypeCommandInput} for command's `input` shape.
 * @see {@link CreateSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSlotTypeCommand = /** @class */ (function (_super) {
    __extends(CreateSlotTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSlotTypeCommand(input) {
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
    CreateSlotTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "CreateSlotTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSlotTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSlotTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSlotTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSlotTypeCommand(input, context);
    };
    CreateSlotTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSlotTypeCommand(output, context);
    };
    return CreateSlotTypeCommand;
}($Command));
export { CreateSlotTypeCommand };
//# sourceMappingURL=CreateSlotTypeCommand.js.map