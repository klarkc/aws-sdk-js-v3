import { __extends } from "tslib";
import { CreateMaintenanceWindowRequest, CreateMaintenanceWindowResult } from "../models/models_0";
import { deserializeAws_json1_1CreateMaintenanceWindowCommand, serializeAws_json1_1CreateMaintenanceWindowCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new maintenance window.</p>
 *          <note>
 *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
 *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
 *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
 *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
 *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
 *     after 5 PM.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link CreateMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMaintenanceWindowCommand = /** @class */ (function (_super) {
    __extends(CreateMaintenanceWindowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMaintenanceWindowCommand(input) {
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
    CreateMaintenanceWindowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateMaintenanceWindowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMaintenanceWindowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMaintenanceWindowResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMaintenanceWindowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateMaintenanceWindowCommand(input, context);
    };
    CreateMaintenanceWindowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateMaintenanceWindowCommand(output, context);
    };
    return CreateMaintenanceWindowCommand;
}($Command));
export { CreateMaintenanceWindowCommand };
//# sourceMappingURL=CreateMaintenanceWindowCommand.js.map