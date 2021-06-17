import { __extends } from "tslib";
import { ModifyClientPropertiesRequest, ModifyClientPropertiesResult } from "../models/models_0";
import { deserializeAws_json1_1ModifyClientPropertiesCommand, serializeAws_json1_1ModifyClientPropertiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the properties of the specified Amazon WorkSpaces clients.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyClientPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyClientPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyClientPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClientPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyClientPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClientPropertiesCommand = /** @class */ (function (_super) {
    __extends(ModifyClientPropertiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyClientPropertiesCommand(input) {
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
    ModifyClientPropertiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "ModifyClientPropertiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyClientPropertiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyClientPropertiesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyClientPropertiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyClientPropertiesCommand(input, context);
    };
    ModifyClientPropertiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyClientPropertiesCommand(output, context);
    };
    return ModifyClientPropertiesCommand;
}($Command));
export { ModifyClientPropertiesCommand };
//# sourceMappingURL=ModifyClientPropertiesCommand.js.map