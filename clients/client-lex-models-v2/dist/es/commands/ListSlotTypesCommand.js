import { __extends } from "tslib";
import { ListSlotTypesRequest, ListSlotTypesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSlotTypesCommand, serializeAws_restJson1ListSlotTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of slot types that match the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListSlotTypesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListSlotTypesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListSlotTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSlotTypesCommandInput} for command's `input` shape.
 * @see {@link ListSlotTypesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSlotTypesCommand = /** @class */ (function (_super) {
    __extends(ListSlotTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSlotTypesCommand(input) {
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
    ListSlotTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListSlotTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSlotTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSlotTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSlotTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSlotTypesCommand(input, context);
    };
    ListSlotTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSlotTypesCommand(output, context);
    };
    return ListSlotTypesCommand;
}($Command));
export { ListSlotTypesCommand };
//# sourceMappingURL=ListSlotTypesCommand.js.map