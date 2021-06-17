import { __extends } from "tslib";
import { GetActionRequest, GetActionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetActionCommand, serializeAws_restJson1GetActionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified AWS FIS action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetActionCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetActionCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new GetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetActionCommandInput} for command's `input` shape.
 * @see {@link GetActionCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetActionCommand = /** @class */ (function (_super) {
    __extends(GetActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetActionCommand(input) {
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
    GetActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FisClient";
        var commandName = "GetActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetActionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetActionCommand(input, context);
    };
    GetActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetActionCommand(output, context);
    };
    return GetActionCommand;
}($Command));
export { GetActionCommand };
//# sourceMappingURL=GetActionCommand.js.map