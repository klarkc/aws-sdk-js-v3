import { __extends } from "tslib";
import { GetChannelRequest, GetChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1GetChannelCommand, serializeAws_restJson1GetChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the channel configuration for the specified channel ARN. See also <a>BatchGetChannel</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetChannelCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetChannelCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new GetChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChannelCommandInput} for command's `input` shape.
 * @see {@link GetChannelCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetChannelCommand = /** @class */ (function (_super) {
    __extends(GetChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetChannelCommand(input) {
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
    GetChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IvsClient";
        var commandName = "GetChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetChannelCommand(input, context);
    };
    GetChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetChannelCommand(output, context);
    };
    return GetChannelCommand;
}($Command));
export { GetChannelCommand };
//# sourceMappingURL=GetChannelCommand.js.map