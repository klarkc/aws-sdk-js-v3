import { __extends } from "tslib";
import { GetSegmentRequest, GetSegmentResponse } from "../models/models_1";
import { deserializeAws_restJson1GetSegmentCommand, serializeAws_restJson1GetSegmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentCommandInput} for command's `input` shape.
 * @see {@link GetSegmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSegmentCommand = /** @class */ (function (_super) {
    __extends(GetSegmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSegmentCommand(input) {
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
    GetSegmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetSegmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSegmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSegmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSegmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSegmentCommand(input, context);
    };
    GetSegmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSegmentCommand(output, context);
    };
    return GetSegmentCommand;
}($Command));
export { GetSegmentCommand };
//# sourceMappingURL=GetSegmentCommand.js.map