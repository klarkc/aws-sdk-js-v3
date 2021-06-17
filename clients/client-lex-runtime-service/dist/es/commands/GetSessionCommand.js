import { __extends } from "tslib";
import { GetSessionRequest, GetSessionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSessionCommand, serializeAws_restJson1GetSessionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns session information for a specified bot, alias, and user
 *       ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, GetSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, GetSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * const client = new LexRuntimeServiceClient(config);
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSessionCommand = /** @class */ (function (_super) {
    __extends(GetSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSessionCommand(input) {
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
    GetSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexRuntimeServiceClient";
        var commandName = "GetSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSessionCommand(input, context);
    };
    GetSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSessionCommand(output, context);
    };
    return GetSessionCommand;
}($Command));
export { GetSessionCommand };
//# sourceMappingURL=GetSessionCommand.js.map