import { __extends } from "tslib";
import { ListServiceActionsInput, ListServiceActionsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListServiceActionsCommand, serializeAws_json1_1ListServiceActionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all self-service actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListServiceActionsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListServiceActionsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListServiceActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceActionsCommandInput} for command's `input` shape.
 * @see {@link ListServiceActionsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServiceActionsCommand = /** @class */ (function (_super) {
    __extends(ListServiceActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListServiceActionsCommand(input) {
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
    ListServiceActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListServiceActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListServiceActionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListServiceActionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListServiceActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListServiceActionsCommand(input, context);
    };
    ListServiceActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListServiceActionsCommand(output, context);
    };
    return ListServiceActionsCommand;
}($Command));
export { ListServiceActionsCommand };
//# sourceMappingURL=ListServiceActionsCommand.js.map