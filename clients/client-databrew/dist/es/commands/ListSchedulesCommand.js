import { __extends } from "tslib";
import { ListSchedulesRequest, ListSchedulesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSchedulesCommand, serializeAws_restJson1ListSchedulesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the DataBrew schedules that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListSchedulesCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListSchedulesCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new ListSchedulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListSchedulesCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSchedulesCommand = /** @class */ (function (_super) {
    __extends(ListSchedulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSchedulesCommand(input) {
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
    ListSchedulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "ListSchedulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSchedulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSchedulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSchedulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSchedulesCommand(input, context);
    };
    ListSchedulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSchedulesCommand(output, context);
    };
    return ListSchedulesCommand;
}($Command));
export { ListSchedulesCommand };
//# sourceMappingURL=ListSchedulesCommand.js.map