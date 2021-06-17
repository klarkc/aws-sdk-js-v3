import { __extends } from "tslib";
import { DeleteDashboardRequest, DeleteDashboardResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDashboardCommand, serializeAws_restJson1DeleteDashboardCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a dashboard from AWS IoT SiteWise Monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteDashboardCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteDashboardCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DeleteDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDashboardCommandInput} for command's `input` shape.
 * @see {@link DeleteDashboardCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDashboardCommand = /** @class */ (function (_super) {
    __extends(DeleteDashboardCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDashboardCommand(input) {
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
    DeleteDashboardCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTSiteWiseClient";
        var commandName = "DeleteDashboardCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDashboardRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDashboardResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDashboardCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDashboardCommand(input, context);
    };
    DeleteDashboardCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDashboardCommand(output, context);
    };
    return DeleteDashboardCommand;
}($Command));
export { DeleteDashboardCommand };
//# sourceMappingURL=DeleteDashboardCommand.js.map