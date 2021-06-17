import { __extends } from "tslib";
import { ListSimulationJobsRequest, ListSimulationJobsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSimulationJobsCommand, serializeAws_restJson1ListSimulationJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of simulation jobs. You can optionally provide filters to retrieve
 *          specific simulation jobs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListSimulationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSimulationJobsCommandInput} for command's `input` shape.
 * @see {@link ListSimulationJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSimulationJobsCommand = /** @class */ (function (_super) {
    __extends(ListSimulationJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSimulationJobsCommand(input) {
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
    ListSimulationJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "ListSimulationJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSimulationJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSimulationJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSimulationJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSimulationJobsCommand(input, context);
    };
    ListSimulationJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSimulationJobsCommand(output, context);
    };
    return ListSimulationJobsCommand;
}($Command));
export { ListSimulationJobsCommand };
//# sourceMappingURL=ListSimulationJobsCommand.js.map