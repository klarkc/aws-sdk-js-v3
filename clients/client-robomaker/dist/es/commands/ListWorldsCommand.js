import { __extends } from "tslib";
import { ListWorldsRequest, ListWorldsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListWorldsCommand, serializeAws_restJson1ListWorldsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists worlds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListWorldsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListWorldsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListWorldsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorldsCommandInput} for command's `input` shape.
 * @see {@link ListWorldsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorldsCommand = /** @class */ (function (_super) {
    __extends(ListWorldsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWorldsCommand(input) {
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
    ListWorldsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "ListWorldsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWorldsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListWorldsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWorldsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListWorldsCommand(input, context);
    };
    ListWorldsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListWorldsCommand(output, context);
    };
    return ListWorldsCommand;
}($Command));
export { ListWorldsCommand };
//# sourceMappingURL=ListWorldsCommand.js.map