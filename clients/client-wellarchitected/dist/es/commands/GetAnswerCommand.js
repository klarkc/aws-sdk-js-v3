import { __extends } from "tslib";
import { GetAnswerInput, GetAnswerOutput } from "../models/models_0";
import { deserializeAws_restJson1GetAnswerCommand, serializeAws_restJson1GetAnswerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get lens review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAnswerCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAnswerCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetAnswerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnswerCommandInput} for command's `input` shape.
 * @see {@link GetAnswerCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAnswerCommand = /** @class */ (function (_super) {
    __extends(GetAnswerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAnswerCommand(input) {
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
    GetAnswerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "GetAnswerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAnswerInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetAnswerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAnswerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAnswerCommand(input, context);
    };
    GetAnswerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAnswerCommand(output, context);
    };
    return GetAnswerCommand;
}($Command));
export { GetAnswerCommand };
//# sourceMappingURL=GetAnswerCommand.js.map