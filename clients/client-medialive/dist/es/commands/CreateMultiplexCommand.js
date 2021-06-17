import { __extends } from "tslib";
import { CreateMultiplexRequest, CreateMultiplexResponse } from "../models/models_1";
import { deserializeAws_restJson1CreateMultiplexCommand, serializeAws_restJson1CreateMultiplexCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Create a new multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CreateMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMultiplexCommandInput} for command's `input` shape.
 * @see {@link CreateMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMultiplexCommand = /** @class */ (function (_super) {
    __extends(CreateMultiplexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMultiplexCommand(input) {
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
    CreateMultiplexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "CreateMultiplexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMultiplexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMultiplexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMultiplexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateMultiplexCommand(input, context);
    };
    CreateMultiplexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateMultiplexCommand(output, context);
    };
    return CreateMultiplexCommand;
}($Command));
export { CreateMultiplexCommand };
//# sourceMappingURL=CreateMultiplexCommand.js.map