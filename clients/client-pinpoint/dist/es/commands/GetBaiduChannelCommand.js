import { __extends } from "tslib";
import { GetBaiduChannelRequest, GetBaiduChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBaiduChannelCommand, serializeAws_restJson1GetBaiduChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the Baidu channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetBaiduChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetBaiduChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetBaiduChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBaiduChannelCommandInput} for command's `input` shape.
 * @see {@link GetBaiduChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBaiduChannelCommand = /** @class */ (function (_super) {
    __extends(GetBaiduChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBaiduChannelCommand(input) {
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
    GetBaiduChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetBaiduChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBaiduChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBaiduChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBaiduChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBaiduChannelCommand(input, context);
    };
    GetBaiduChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBaiduChannelCommand(output, context);
    };
    return GetBaiduChannelCommand;
}($Command));
export { GetBaiduChannelCommand };
//# sourceMappingURL=GetBaiduChannelCommand.js.map