import { __extends } from "tslib";
import { UpdateTemplatePermissionsRequest, UpdateTemplatePermissionsResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateTemplatePermissionsCommand, serializeAws_restJson1UpdateTemplatePermissionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the resource permissions for a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTemplatePermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTemplatePermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateTemplatePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTemplatePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplatePermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTemplatePermissionsCommand = /** @class */ (function (_super) {
    __extends(UpdateTemplatePermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTemplatePermissionsCommand(input) {
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
    UpdateTemplatePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateTemplatePermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTemplatePermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTemplatePermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTemplatePermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateTemplatePermissionsCommand(input, context);
    };
    UpdateTemplatePermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateTemplatePermissionsCommand(output, context);
    };
    return UpdateTemplatePermissionsCommand;
}($Command));
export { UpdateTemplatePermissionsCommand };
//# sourceMappingURL=UpdateTemplatePermissionsCommand.js.map