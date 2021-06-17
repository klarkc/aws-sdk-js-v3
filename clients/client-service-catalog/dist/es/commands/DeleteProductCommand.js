import { __extends } from "tslib";
import { DeleteProductInput, DeleteProductOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteProductCommand, serializeAws_json1_1DeleteProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified product.</p>
 *          <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProductCommandInput} for command's `input` shape.
 * @see {@link DeleteProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProductCommand = /** @class */ (function (_super) {
    __extends(DeleteProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProductCommand(input) {
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
    DeleteProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DeleteProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteProductCommand(input, context);
    };
    DeleteProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteProductCommand(output, context);
    };
    return DeleteProductCommand;
}($Command));
export { DeleteProductCommand };
//# sourceMappingURL=DeleteProductCommand.js.map