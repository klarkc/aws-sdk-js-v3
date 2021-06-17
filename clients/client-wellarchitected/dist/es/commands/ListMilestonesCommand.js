import { __extends } from "tslib";
import { ListMilestonesInput, ListMilestonesOutput } from "../models/models_0";
import { deserializeAws_restJson1ListMilestonesCommand, serializeAws_restJson1ListMilestonesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all milestones for an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListMilestonesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListMilestonesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListMilestonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMilestonesCommandInput} for command's `input` shape.
 * @see {@link ListMilestonesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMilestonesCommand = /** @class */ (function (_super) {
    __extends(ListMilestonesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMilestonesCommand(input) {
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
    ListMilestonesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "ListMilestonesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMilestonesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListMilestonesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMilestonesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListMilestonesCommand(input, context);
    };
    ListMilestonesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListMilestonesCommand(output, context);
    };
    return ListMilestonesCommand;
}($Command));
export { ListMilestonesCommand };
//# sourceMappingURL=ListMilestonesCommand.js.map