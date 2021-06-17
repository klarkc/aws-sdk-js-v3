import { __extends } from "tslib";
import { GetStudioComponentRequest, GetStudioComponentResponse } from "../models/models_0";
import { deserializeAws_restJson1GetStudioComponentCommand, serializeAws_restJson1GetStudioComponentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStudioComponentCommandInput} for command's `input` shape.
 * @see {@link GetStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStudioComponentCommand = /** @class */ (function (_super) {
    __extends(GetStudioComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStudioComponentCommand(input) {
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
    GetStudioComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "GetStudioComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStudioComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStudioComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStudioComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetStudioComponentCommand(input, context);
    };
    GetStudioComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetStudioComponentCommand(output, context);
    };
    return GetStudioComponentCommand;
}($Command));
export { GetStudioComponentCommand };
//# sourceMappingURL=GetStudioComponentCommand.js.map