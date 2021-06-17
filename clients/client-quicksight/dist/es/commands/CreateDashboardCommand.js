import { __extends } from "tslib";
import { CreateDashboardRequest, CreateDashboardResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateDashboardCommand, serializeAws_restJson1CreateDashboardCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a dashboard from a template. To first create a template, see the <code>
 *                <a>CreateTemplate</a>
 *             </code> API operation.</p>
 *         <p>A dashboard is an entity in QuickSight that identifies QuickSight reports, created
 *             from analyses. You can share QuickSight dashboards. With the right permissions, you can
 *             create scheduled email reports from them. If you have the correct permissions, you can
 *             create a dashboard from a template that exists in a different AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateDashboardCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateDashboardCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDashboardCommandInput} for command's `input` shape.
 * @see {@link CreateDashboardCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDashboardCommand = /** @class */ (function (_super) {
    __extends(CreateDashboardCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDashboardCommand(input) {
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
    CreateDashboardCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "CreateDashboardCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDashboardRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDashboardResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDashboardCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateDashboardCommand(input, context);
    };
    CreateDashboardCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateDashboardCommand(output, context);
    };
    return CreateDashboardCommand;
}($Command));
export { CreateDashboardCommand };
//# sourceMappingURL=CreateDashboardCommand.js.map