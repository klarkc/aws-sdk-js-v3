import { __extends } from "tslib";
import { ListAnswersInput, ListAnswersOutput } from "../models/models_0";
import { deserializeAws_restJson1ListAnswersCommand, serializeAws_restJson1ListAnswersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List of answers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAnswersCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAnswersCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListAnswersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnswersCommandInput} for command's `input` shape.
 * @see {@link ListAnswersCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAnswersCommand = /** @class */ (function (_super) {
    __extends(ListAnswersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAnswersCommand(input) {
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
    ListAnswersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "ListAnswersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAnswersInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListAnswersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAnswersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAnswersCommand(input, context);
    };
    ListAnswersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAnswersCommand(output, context);
    };
    return ListAnswersCommand;
}($Command));
export { ListAnswersCommand };
//# sourceMappingURL=ListAnswersCommand.js.map