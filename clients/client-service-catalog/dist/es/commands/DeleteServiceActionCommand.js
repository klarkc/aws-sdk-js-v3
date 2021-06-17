import { __extends } from "tslib";
import { DeleteServiceActionInput, DeleteServiceActionOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteServiceActionCommand, serializeAws_json1_1DeleteServiceActionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceActionCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteServiceActionCommand = /** @class */ (function (_super) {
    __extends(DeleteServiceActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteServiceActionCommand(input) {
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
    DeleteServiceActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DeleteServiceActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteServiceActionInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteServiceActionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteServiceActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteServiceActionCommand(input, context);
    };
    DeleteServiceActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteServiceActionCommand(output, context);
    };
    return DeleteServiceActionCommand;
}($Command));
export { DeleteServiceActionCommand };
//# sourceMappingURL=DeleteServiceActionCommand.js.map