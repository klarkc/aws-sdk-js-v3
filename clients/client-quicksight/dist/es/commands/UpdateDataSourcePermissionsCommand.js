import { __extends } from "tslib";
import { UpdateDataSourcePermissionsRequest, UpdateDataSourcePermissionsResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateDataSourcePermissionsCommand, serializeAws_restJson1UpdateDataSourcePermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the permissions to a data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSourcePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDataSourcePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateDataSourcePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataSourcePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourcePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDataSourcePermissionsCommand = /** @class */ (function (_super) {
    __extends(UpdateDataSourcePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDataSourcePermissionsCommand(input) {
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
    UpdateDataSourcePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateDataSourcePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDataSourcePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDataSourcePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDataSourcePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDataSourcePermissionsCommand(input, context);
    };
    UpdateDataSourcePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDataSourcePermissionsCommand(output, context);
    };
    return UpdateDataSourcePermissionsCommand;
}($Command));
export { UpdateDataSourcePermissionsCommand };
//# sourceMappingURL=UpdateDataSourcePermissionsCommand.js.map