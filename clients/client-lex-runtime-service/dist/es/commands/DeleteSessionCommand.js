import { __extends } from "tslib";
import { DeleteSessionRequest, DeleteSessionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSessionCommand, serializeAws_restJson1DeleteSessionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes session information for a specified bot, alias, and user ID.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, DeleteSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, DeleteSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * const client = new LexRuntimeServiceClient(config);
 * const command = new DeleteSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSessionCommand = /** @class */ (function (_super) {
    __extends(DeleteSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSessionCommand(input) {
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
    DeleteSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeServiceClient";
        var commandName = "DeleteSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSessionCommand(input, context);
    };
    DeleteSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSessionCommand(output, context);
    };
    return DeleteSessionCommand;
}($Command));
export { DeleteSessionCommand };
//# sourceMappingURL=DeleteSessionCommand.js.map