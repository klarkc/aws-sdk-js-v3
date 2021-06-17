import { __extends } from "tslib";
import { DeleteConstraintInput, DeleteConstraintOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteConstraintCommand, serializeAws_json1_1DeleteConstraintCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified constraint.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteConstraintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConstraintCommandInput} for command's `input` shape.
 * @see {@link DeleteConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConstraintCommand = /** @class */ (function (_super) {
    __extends(DeleteConstraintCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConstraintCommand(input) {
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
    DeleteConstraintCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DeleteConstraintCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConstraintInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteConstraintOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConstraintCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteConstraintCommand(input, context);
    };
    DeleteConstraintCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteConstraintCommand(output, context);
    };
    return DeleteConstraintCommand;
}($Command));
export { DeleteConstraintCommand };
//# sourceMappingURL=DeleteConstraintCommand.js.map