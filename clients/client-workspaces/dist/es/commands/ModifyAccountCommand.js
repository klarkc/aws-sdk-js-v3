import { __extends } from "tslib";
import { ModifyAccountRequest, ModifyAccountResult } from "../models/models_0";
import { deserializeAws_json1_1ModifyAccountCommand, serializeAws_json1_1ModifyAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the configuration of Bring Your Own License (BYOL) for the specified
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyAccountCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyAccountCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyAccountCommandInput} for command's `input` shape.
 * @see {@link ModifyAccountCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyAccountCommand = /** @class */ (function (_super) {
    __extends(ModifyAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyAccountCommand(input) {
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
    ModifyAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "ModifyAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyAccountResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyAccountCommand(input, context);
    };
    ModifyAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyAccountCommand(output, context);
    };
    return ModifyAccountCommand;
}($Command));
export { ModifyAccountCommand };
//# sourceMappingURL=ModifyAccountCommand.js.map