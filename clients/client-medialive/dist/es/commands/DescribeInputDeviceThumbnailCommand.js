import { __extends } from "tslib";
import { DescribeInputDeviceThumbnailRequest, DescribeInputDeviceThumbnailResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeInputDeviceThumbnailCommand, serializeAws_restJson1DescribeInputDeviceThumbnailCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Get the latest thumbnail data for the input device.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputDeviceThumbnailCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputDeviceThumbnailCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeInputDeviceThumbnailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInputDeviceThumbnailCommandInput} for command's `input` shape.
 * @see {@link DescribeInputDeviceThumbnailCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeInputDeviceThumbnailCommand = /** @class */ (function (_super) {
    __extends(DescribeInputDeviceThumbnailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeInputDeviceThumbnailCommand(input) {
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
    DescribeInputDeviceThumbnailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DescribeInputDeviceThumbnailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeInputDeviceThumbnailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeInputDeviceThumbnailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeInputDeviceThumbnailCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeInputDeviceThumbnailCommand(input, context);
    };
    DescribeInputDeviceThumbnailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeInputDeviceThumbnailCommand(output, context);
    };
    return DescribeInputDeviceThumbnailCommand;
}($Command));
export { DescribeInputDeviceThumbnailCommand };
//# sourceMappingURL=DescribeInputDeviceThumbnailCommand.js.map