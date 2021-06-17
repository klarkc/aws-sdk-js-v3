import { __extends } from "tslib";
import { ListMissionProfilesRequest, ListMissionProfilesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListMissionProfilesCommand, serializeAws_restJson1ListMissionProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of mission profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListMissionProfilesCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListMissionProfilesCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListMissionProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMissionProfilesCommandInput} for command's `input` shape.
 * @see {@link ListMissionProfilesCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMissionProfilesCommand = /** @class */ (function (_super) {
    __extends(ListMissionProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMissionProfilesCommand(input) {
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
    ListMissionProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "ListMissionProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMissionProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMissionProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMissionProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListMissionProfilesCommand(input, context);
    };
    ListMissionProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListMissionProfilesCommand(output, context);
    };
    return ListMissionProfilesCommand;
}($Command));
export { ListMissionProfilesCommand };
//# sourceMappingURL=ListMissionProfilesCommand.js.map