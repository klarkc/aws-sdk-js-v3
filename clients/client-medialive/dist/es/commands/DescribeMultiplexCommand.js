import { __extends } from "tslib";
import { DescribeMultiplexRequest, DescribeMultiplexResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeMultiplexCommand, serializeAws_restJson1DescribeMultiplexCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Gets details about a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMultiplexCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMultiplexCommand = /** @class */ (function (_super) {
    __extends(DescribeMultiplexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMultiplexCommand(input) {
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
    DescribeMultiplexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DescribeMultiplexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMultiplexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMultiplexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMultiplexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeMultiplexCommand(input, context);
    };
    DescribeMultiplexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeMultiplexCommand(output, context);
    };
    return DescribeMultiplexCommand;
}($Command));
export { DescribeMultiplexCommand };
//# sourceMappingURL=DescribeMultiplexCommand.js.map