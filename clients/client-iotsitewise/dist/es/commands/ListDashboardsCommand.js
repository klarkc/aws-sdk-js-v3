import { __extends } from "tslib";
import { ListDashboardsRequest, ListDashboardsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDashboardsCommand, serializeAws_restJson1ListDashboardsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of dashboards for an AWS IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListDashboardsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListDashboardsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListDashboardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDashboardsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDashboardsCommand = /** @class */ (function (_super) {
    __extends(ListDashboardsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDashboardsCommand(input) {
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
    ListDashboardsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "ListDashboardsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDashboardsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDashboardsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDashboardsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDashboardsCommand(input, context);
    };
    ListDashboardsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDashboardsCommand(output, context);
    };
    return ListDashboardsCommand;
}($Command));
export { ListDashboardsCommand };
//# sourceMappingURL=ListDashboardsCommand.js.map