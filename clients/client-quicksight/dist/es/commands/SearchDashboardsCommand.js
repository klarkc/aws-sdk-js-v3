import { __extends } from "tslib";
import { SearchDashboardsRequest, SearchDashboardsResponse } from "../models/models_1";
import { deserializeAws_restJson1SearchDashboardsCommand, serializeAws_restJson1SearchDashboardsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for dashboards that belong to a user. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, SearchDashboardsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, SearchDashboardsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new SearchDashboardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchDashboardsCommandInput} for command's `input` shape.
 * @see {@link SearchDashboardsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchDashboardsCommand = /** @class */ (function (_super) {
    __extends(SearchDashboardsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchDashboardsCommand(input) {
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
    SearchDashboardsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "SearchDashboardsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchDashboardsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchDashboardsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchDashboardsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchDashboardsCommand(input, context);
    };
    SearchDashboardsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchDashboardsCommand(output, context);
    };
    return SearchDashboardsCommand;
}($Command));
export { SearchDashboardsCommand };
//# sourceMappingURL=SearchDashboardsCommand.js.map