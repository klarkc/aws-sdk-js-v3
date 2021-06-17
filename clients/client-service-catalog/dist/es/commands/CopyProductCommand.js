import { __extends } from "tslib";
import { CopyProductInput, CopyProductOutput } from "../models/models_0";
import { deserializeAws_json1_1CopyProductCommand, serializeAws_json1_1CopyProductCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies the specified source product to the specified target product or a new product.</p>
 *          <p>You can copy a product to the same account or another account.
 *          You can copy a product to the same region or another region.</p>
 *          <p>This operation is performed asynchronously. To track the progress of the
 *          operation, use <a>DescribeCopyProductStatus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CopyProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CopyProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CopyProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyProductCommandInput} for command's `input` shape.
 * @see {@link CopyProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyProductCommand = /** @class */ (function (_super) {
    __extends(CopyProductCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CopyProductCommand(input) {
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
    CopyProductCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "CopyProductCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CopyProductInput.filterSensitiveLog,
            outputFilterSensitiveLog: CopyProductOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CopyProductCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CopyProductCommand(input, context);
    };
    CopyProductCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CopyProductCommand(output, context);
    };
    return CopyProductCommand;
}($Command));
export { CopyProductCommand };
//# sourceMappingURL=CopyProductCommand.js.map