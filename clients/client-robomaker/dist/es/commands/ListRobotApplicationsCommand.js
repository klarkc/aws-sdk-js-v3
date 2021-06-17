import { __extends } from "tslib";
import { ListRobotApplicationsRequest, ListRobotApplicationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListRobotApplicationsCommand, serializeAws_restJson1ListRobotApplicationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of robot application. You can optionally provide filters to retrieve
 *          specific robot applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListRobotApplicationsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListRobotApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListRobotApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRobotApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListRobotApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRobotApplicationsCommand = /** @class */ (function (_super) {
    __extends(ListRobotApplicationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRobotApplicationsCommand(input) {
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
    ListRobotApplicationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "ListRobotApplicationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRobotApplicationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRobotApplicationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRobotApplicationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRobotApplicationsCommand(input, context);
    };
    ListRobotApplicationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRobotApplicationsCommand(output, context);
    };
    return ListRobotApplicationsCommand;
}($Command));
export { ListRobotApplicationsCommand };
//# sourceMappingURL=ListRobotApplicationsCommand.js.map