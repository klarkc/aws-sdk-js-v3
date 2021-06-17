import { __extends } from "tslib";
import { ListConfigsRequest, ListConfigsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListConfigsCommand, serializeAws_restJson1ListConfigsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <code>Config</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListConfigsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListConfigsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigsCommandInput} for command's `input` shape.
 * @see {@link ListConfigsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConfigsCommand = /** @class */ (function (_super) {
    __extends(ListConfigsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListConfigsCommand(input) {
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
    ListConfigsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "ListConfigsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListConfigsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListConfigsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListConfigsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListConfigsCommand(input, context);
    };
    ListConfigsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListConfigsCommand(output, context);
    };
    return ListConfigsCommand;
}($Command));
export { ListConfigsCommand };
//# sourceMappingURL=ListConfigsCommand.js.map