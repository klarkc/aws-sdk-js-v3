import { __extends } from "tslib";
import { ListRobotsRequest, ListRobotsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListRobotsCommand, serializeAws_restJson1ListRobotsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of robots. You can optionally provide filters to retrieve specific
 *          robots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListRobotsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListRobotsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListRobotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRobotsCommandInput} for command's `input` shape.
 * @see {@link ListRobotsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRobotsCommand = /** @class */ (function (_super) {
    __extends(ListRobotsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRobotsCommand(input) {
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
    ListRobotsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "ListRobotsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRobotsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRobotsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRobotsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRobotsCommand(input, context);
    };
    ListRobotsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRobotsCommand(output, context);
    };
    return ListRobotsCommand;
}($Command));
export { ListRobotsCommand };
//# sourceMappingURL=ListRobotsCommand.js.map