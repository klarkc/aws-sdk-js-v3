import { __extends } from "tslib";
import { UpdateMaintenanceWindowTargetRequest, UpdateMaintenanceWindowTargetResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand, serializeAws_json1_1UpdateMaintenanceWindowTargetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the target of an existing maintenance window. You
 *    can change the following:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Name</p>
 *             </li>
 *             <li>
 *                <p>Description</p>
 *             </li>
 *             <li>
 *                <p>Owner</p>
 *             </li>
 *             <li>
 *                <p>IDs for an ID target</p>
 *             </li>
 *             <li>
 *                <p>Tags for a Tag target</p>
 *             </li>
 *             <li>
 *                <p>From any supported tag type to another. The three supported tag types are ID target, Tag
 *      target, and resource group. For more information, see <a>Target</a>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If a parameter is null, then the corresponding field is not modified.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowTargetCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateMaintenanceWindowTargetCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateMaintenanceWindowTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMaintenanceWindowTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowTargetCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMaintenanceWindowTargetCommand = /** @class */ (function (_super) {
    __extends(UpdateMaintenanceWindowTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMaintenanceWindowTargetCommand(input) {
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
    UpdateMaintenanceWindowTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateMaintenanceWindowTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMaintenanceWindowTargetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMaintenanceWindowTargetResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMaintenanceWindowTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMaintenanceWindowTargetCommand(input, context);
    };
    UpdateMaintenanceWindowTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMaintenanceWindowTargetCommand(output, context);
    };
    return UpdateMaintenanceWindowTargetCommand;
}($Command));
export { UpdateMaintenanceWindowTargetCommand };
//# sourceMappingURL=UpdateMaintenanceWindowTargetCommand.js.map