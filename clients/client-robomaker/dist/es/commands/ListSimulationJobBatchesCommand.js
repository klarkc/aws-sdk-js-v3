import { __extends } from "tslib";
import { ListSimulationJobBatchesRequest, ListSimulationJobBatchesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSimulationJobBatchesCommand, serializeAws_restJson1ListSimulationJobBatchesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list simulation job batches. You can optionally provide filters to retrieve
 *          specific simulation batch jobs. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationJobBatchesCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationJobBatchesCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListSimulationJobBatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSimulationJobBatchesCommandInput} for command's `input` shape.
 * @see {@link ListSimulationJobBatchesCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSimulationJobBatchesCommand = /** @class */ (function (_super) {
    __extends(ListSimulationJobBatchesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSimulationJobBatchesCommand(input) {
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
    ListSimulationJobBatchesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "ListSimulationJobBatchesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSimulationJobBatchesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSimulationJobBatchesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSimulationJobBatchesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSimulationJobBatchesCommand(input, context);
    };
    ListSimulationJobBatchesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSimulationJobBatchesCommand(output, context);
    };
    return ListSimulationJobBatchesCommand;
}($Command));
export { ListSimulationJobBatchesCommand };
//# sourceMappingURL=ListSimulationJobBatchesCommand.js.map