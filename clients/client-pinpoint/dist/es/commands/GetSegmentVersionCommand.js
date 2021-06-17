import { __extends } from "tslib";
import { GetSegmentVersionRequest, GetSegmentVersionResponse } from "../models/models_1";
import { deserializeAws_restJson1GetSegmentVersionCommand, serializeAws_restJson1GetSegmentVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentVersionCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentVersionCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentVersionCommandInput} for command's `input` shape.
 * @see {@link GetSegmentVersionCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSegmentVersionCommand = /** @class */ (function (_super) {
    __extends(GetSegmentVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSegmentVersionCommand(input) {
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
    GetSegmentVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetSegmentVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSegmentVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSegmentVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSegmentVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSegmentVersionCommand(input, context);
    };
    GetSegmentVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSegmentVersionCommand(output, context);
    };
    return GetSegmentVersionCommand;
}($Command));
export { GetSegmentVersionCommand };
//# sourceMappingURL=GetSegmentVersionCommand.js.map