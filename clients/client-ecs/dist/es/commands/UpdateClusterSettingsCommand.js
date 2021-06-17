import { __extends } from "tslib";
import { UpdateClusterSettingsRequest, UpdateClusterSettingsResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateClusterSettingsCommand, serializeAws_json1_1UpdateClusterSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the settings to use for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateClusterSettingsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateClusterSettingsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateClusterSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterSettingsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateClusterSettingsCommand = /** @class */ (function (_super) {
    __extends(UpdateClusterSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateClusterSettingsCommand(input) {
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
    UpdateClusterSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "UpdateClusterSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateClusterSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateClusterSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateClusterSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateClusterSettingsCommand(input, context);
    };
    UpdateClusterSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateClusterSettingsCommand(output, context);
    };
    return UpdateClusterSettingsCommand;
}($Command));
export { UpdateClusterSettingsCommand };
//# sourceMappingURL=UpdateClusterSettingsCommand.js.map