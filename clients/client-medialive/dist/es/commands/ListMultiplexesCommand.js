import { __extends } from "tslib";
import { ListMultiplexesRequest, ListMultiplexesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListMultiplexesCommand, serializeAws_restJson1ListMultiplexesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieve a list of the existing multiplexes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListMultiplexesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListMultiplexesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListMultiplexesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMultiplexesCommandInput} for command's `input` shape.
 * @see {@link ListMultiplexesCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMultiplexesCommand = /** @class */ (function (_super) {
    __extends(ListMultiplexesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMultiplexesCommand(input) {
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
    ListMultiplexesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "ListMultiplexesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMultiplexesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMultiplexesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMultiplexesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListMultiplexesCommand(input, context);
    };
    ListMultiplexesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListMultiplexesCommand(output, context);
    };
    return ListMultiplexesCommand;
}($Command));
export { ListMultiplexesCommand };
//# sourceMappingURL=ListMultiplexesCommand.js.map