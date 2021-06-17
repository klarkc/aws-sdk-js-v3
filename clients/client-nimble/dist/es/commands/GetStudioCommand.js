import { __extends } from "tslib";
import { GetStudioRequest, GetStudioResponse } from "../models/models_0";
import { deserializeAws_restJson1GetStudioCommand, serializeAws_restJson1GetStudioCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get a Studio resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStudioCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStudioCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStudioCommandInput} for command's `input` shape.
 * @see {@link GetStudioCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStudioCommand = /** @class */ (function (_super) {
    __extends(GetStudioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStudioCommand(input) {
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
    GetStudioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "GetStudioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStudioRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStudioResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStudioCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetStudioCommand(input, context);
    };
    GetStudioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetStudioCommand(output, context);
    };
    return GetStudioCommand;
}($Command));
export { GetStudioCommand };
//# sourceMappingURL=GetStudioCommand.js.map