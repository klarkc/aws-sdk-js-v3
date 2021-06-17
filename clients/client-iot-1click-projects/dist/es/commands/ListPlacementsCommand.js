import { __extends } from "tslib";
import { ListPlacementsRequest, ListPlacementsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPlacementsCommand, serializeAws_restJson1ListPlacementsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the placement(s) of a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, ListPlacementsCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, ListPlacementsCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new ListPlacementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlacementsCommandInput} for command's `input` shape.
 * @see {@link ListPlacementsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPlacementsCommand = /** @class */ (function (_super) {
    __extends(ListPlacementsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPlacementsCommand(input) {
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
    ListPlacementsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoT1ClickProjectsClient";
        var commandName = "ListPlacementsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPlacementsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPlacementsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPlacementsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPlacementsCommand(input, context);
    };
    ListPlacementsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPlacementsCommand(output, context);
    };
    return ListPlacementsCommand;
}($Command));
export { ListPlacementsCommand };
//# sourceMappingURL=ListPlacementsCommand.js.map