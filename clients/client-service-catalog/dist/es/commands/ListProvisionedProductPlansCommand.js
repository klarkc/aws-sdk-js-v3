import { __extends } from "tslib";
import { ListProvisionedProductPlansInput, ListProvisionedProductPlansOutput } from "../models/models_0";
import { deserializeAws_json1_1ListProvisionedProductPlansCommand, serializeAws_json1_1ListProvisionedProductPlansCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the plans for the specified provisioned product or all plans to which the user has access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisionedProductPlansCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisionedProductPlansCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListProvisionedProductPlansCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisionedProductPlansCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedProductPlansCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProvisionedProductPlansCommand = /** @class */ (function (_super) {
    __extends(ListProvisionedProductPlansCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProvisionedProductPlansCommand(input) {
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
    ListProvisionedProductPlansCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListProvisionedProductPlansCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProvisionedProductPlansInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListProvisionedProductPlansOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProvisionedProductPlansCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListProvisionedProductPlansCommand(input, context);
    };
    ListProvisionedProductPlansCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListProvisionedProductPlansCommand(output, context);
    };
    return ListProvisionedProductPlansCommand;
}($Command));
export { ListProvisionedProductPlansCommand };
//# sourceMappingURL=ListProvisionedProductPlansCommand.js.map