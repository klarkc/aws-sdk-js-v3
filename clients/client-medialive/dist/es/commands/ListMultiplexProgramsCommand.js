import { __extends } from "tslib";
import { ListMultiplexProgramsRequest, ListMultiplexProgramsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListMultiplexProgramsCommand, serializeAws_restJson1ListMultiplexProgramsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * List the programs that currently exist for a specific multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListMultiplexProgramsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListMultiplexProgramsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListMultiplexProgramsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMultiplexProgramsCommandInput} for command's `input` shape.
 * @see {@link ListMultiplexProgramsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMultiplexProgramsCommand = /** @class */ (function (_super) {
    __extends(ListMultiplexProgramsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMultiplexProgramsCommand(input) {
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
    ListMultiplexProgramsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "ListMultiplexProgramsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMultiplexProgramsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMultiplexProgramsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMultiplexProgramsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListMultiplexProgramsCommand(input, context);
    };
    ListMultiplexProgramsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListMultiplexProgramsCommand(output, context);
    };
    return ListMultiplexProgramsCommand;
}($Command));
export { ListMultiplexProgramsCommand };
//# sourceMappingURL=ListMultiplexProgramsCommand.js.map