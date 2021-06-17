import { __extends } from "tslib";
import { DescribeMultiplexProgramRequest, DescribeMultiplexProgramResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeMultiplexProgramCommand, serializeAws_restJson1DescribeMultiplexProgramCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Get the details for a program in a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMultiplexProgramCommand = /** @class */ (function (_super) {
    __extends(DescribeMultiplexProgramCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMultiplexProgramCommand(input) {
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
    DescribeMultiplexProgramCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "DescribeMultiplexProgramCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMultiplexProgramRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMultiplexProgramResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMultiplexProgramCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeMultiplexProgramCommand(input, context);
    };
    DescribeMultiplexProgramCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeMultiplexProgramCommand(output, context);
    };
    return DescribeMultiplexProgramCommand;
}($Command));
export { DescribeMultiplexProgramCommand };
//# sourceMappingURL=DescribeMultiplexProgramCommand.js.map