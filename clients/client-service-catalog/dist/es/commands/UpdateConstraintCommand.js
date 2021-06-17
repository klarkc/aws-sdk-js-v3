import { __extends } from "tslib";
import { UpdateConstraintInput, UpdateConstraintOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateConstraintCommand, serializeAws_json1_1UpdateConstraintCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified constraint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateConstraintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConstraintCommandInput} for command's `input` shape.
 * @see {@link UpdateConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateConstraintCommand = /** @class */ (function (_super) {
    __extends(UpdateConstraintCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateConstraintCommand(input) {
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
    UpdateConstraintCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "UpdateConstraintCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateConstraintInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateConstraintOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateConstraintCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateConstraintCommand(input, context);
    };
    UpdateConstraintCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateConstraintCommand(output, context);
    };
    return UpdateConstraintCommand;
}($Command));
export { UpdateConstraintCommand };
//# sourceMappingURL=UpdateConstraintCommand.js.map