import { __extends } from "tslib";
import { ListDashboardVersionsRequest, ListDashboardVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDashboardVersionsCommand, serializeAws_restJson1ListDashboardVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the versions of the dashboards in the QuickSight subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListDashboardVersionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListDashboardVersionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListDashboardVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDashboardVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardVersionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDashboardVersionsCommand = /** @class */ (function (_super) {
    __extends(ListDashboardVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDashboardVersionsCommand(input) {
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
    ListDashboardVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "ListDashboardVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDashboardVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDashboardVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDashboardVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDashboardVersionsCommand(input, context);
    };
    ListDashboardVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDashboardVersionsCommand(output, context);
    };
    return ListDashboardVersionsCommand;
}($Command));
export { ListDashboardVersionsCommand };
//# sourceMappingURL=ListDashboardVersionsCommand.js.map