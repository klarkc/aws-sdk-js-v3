import { __extends } from "tslib";
import { UpdateProductInput, UpdateProductOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateProductCommand, serializeAws_json1_1UpdateProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProductCommandInput} for command's `input` shape.
 * @see {@link UpdateProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateProductCommand = /** @class */ (function (_super) {
    __extends(UpdateProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateProductCommand(input) {
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
    UpdateProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "UpdateProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateProductCommand(input, context);
    };
    UpdateProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateProductCommand(output, context);
    };
    return UpdateProductCommand;
}($Command));
export { UpdateProductCommand };
//# sourceMappingURL=UpdateProductCommand.js.map