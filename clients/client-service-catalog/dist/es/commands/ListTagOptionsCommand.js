import { __extends } from "tslib";
import { ListTagOptionsInput, ListTagOptionsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListTagOptionsCommand, serializeAws_json1_1ListTagOptionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the specified TagOptions or all TagOptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListTagOptionsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListTagOptionsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListTagOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagOptionsCommandInput} for command's `input` shape.
 * @see {@link ListTagOptionsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagOptionsCommand = /** @class */ (function (_super) {
    __extends(ListTagOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagOptionsCommand(input) {
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
    ListTagOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListTagOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagOptionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagOptionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTagOptionsCommand(input, context);
    };
    ListTagOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTagOptionsCommand(output, context);
    };
    return ListTagOptionsCommand;
}($Command));
export { ListTagOptionsCommand };
//# sourceMappingURL=ListTagOptionsCommand.js.map