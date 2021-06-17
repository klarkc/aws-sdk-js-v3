import { __extends } from "tslib";
import { CreateProductInput, CreateProductOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateProductCommand, serializeAws_json1_1CreateProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a product.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 *
 *          <p>The user or role that performs this operation must have the
 *             <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is
 *          required when using the <code>ImportFromPhysicalId</code> template source in the
 *          information data section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProductCommandInput} for command's `input` shape.
 * @see {@link CreateProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProductCommand = /** @class */ (function (_super) {
    __extends(CreateProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProductCommand(input) {
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
    CreateProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "CreateProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateProductCommand(input, context);
    };
    CreateProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateProductCommand(output, context);
    };
    return CreateProductCommand;
}($Command));
export { CreateProductCommand };
//# sourceMappingURL=CreateProductCommand.js.map