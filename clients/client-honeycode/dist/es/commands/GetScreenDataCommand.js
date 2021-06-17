import { __extends } from "tslib";
import { GetScreenDataRequest, GetScreenDataResult } from "../models/models_0";
import { deserializeAws_restJson1GetScreenDataCommand, serializeAws_restJson1GetScreenDataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The GetScreenData API allows retrieval of data from a screen in a Honeycode app.
 *             The API allows setting local variables in the screen to filter, sort or otherwise affect what will be
 *             displayed on the screen.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, GetScreenDataCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, GetScreenDataCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new GetScreenDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetScreenDataCommandInput} for command's `input` shape.
 * @see {@link GetScreenDataCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetScreenDataCommand = /** @class */ (function (_super) {
    __extends(GetScreenDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetScreenDataCommand(input) {
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
    GetScreenDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HoneycodeClient";
        var commandName = "GetScreenDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetScreenDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetScreenDataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetScreenDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetScreenDataCommand(input, context);
    };
    GetScreenDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetScreenDataCommand(output, context);
    };
    return GetScreenDataCommand;
}($Command));
export { GetScreenDataCommand };
//# sourceMappingURL=GetScreenDataCommand.js.map