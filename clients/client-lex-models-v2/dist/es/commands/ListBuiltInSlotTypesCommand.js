import { __extends } from "tslib";
import { ListBuiltInSlotTypesRequest, ListBuiltInSlotTypesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListBuiltInSlotTypesCommand, serializeAws_restJson1ListBuiltInSlotTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of built-in slot types that meet the specified
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBuiltInSlotTypesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBuiltInSlotTypesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new ListBuiltInSlotTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuiltInSlotTypesCommandInput} for command's `input` shape.
 * @see {@link ListBuiltInSlotTypesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBuiltInSlotTypesCommand = /** @class */ (function (_super) {
    __extends(ListBuiltInSlotTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBuiltInSlotTypesCommand(input) {
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
    ListBuiltInSlotTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "ListBuiltInSlotTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBuiltInSlotTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBuiltInSlotTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBuiltInSlotTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBuiltInSlotTypesCommand(input, context);
    };
    ListBuiltInSlotTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBuiltInSlotTypesCommand(output, context);
    };
    return ListBuiltInSlotTypesCommand;
}($Command));
export { ListBuiltInSlotTypesCommand };
//# sourceMappingURL=ListBuiltInSlotTypesCommand.js.map