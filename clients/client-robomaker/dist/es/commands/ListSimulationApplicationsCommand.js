import { __extends } from "tslib";
import { ListSimulationApplicationsRequest, ListSimulationApplicationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSimulationApplicationsCommand, serializeAws_restJson1ListSimulationApplicationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of simulation applications. You can optionally provide filters to
 *          retrieve specific simulation applications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationApplicationsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListSimulationApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSimulationApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSimulationApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSimulationApplicationsCommand = /** @class */ (function (_super) {
    __extends(ListSimulationApplicationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSimulationApplicationsCommand(input) {
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
    ListSimulationApplicationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "ListSimulationApplicationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSimulationApplicationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSimulationApplicationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSimulationApplicationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSimulationApplicationsCommand(input, context);
    };
    ListSimulationApplicationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSimulationApplicationsCommand(output, context);
    };
    return ListSimulationApplicationsCommand;
}($Command));
export { ListSimulationApplicationsCommand };
//# sourceMappingURL=ListSimulationApplicationsCommand.js.map