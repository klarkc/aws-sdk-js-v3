import { __extends } from "tslib";
import { ListResourcesForTagOptionInput, ListResourcesForTagOptionOutput } from "../models/models_0";
import { deserializeAws_json1_1ListResourcesForTagOptionCommand, serializeAws_json1_1ListResourcesForTagOptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the resources associated with the specified TagOption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListResourcesForTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListResourcesForTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListResourcesForTagOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourcesForTagOptionCommandInput} for command's `input` shape.
 * @see {@link ListResourcesForTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourcesForTagOptionCommand = /** @class */ (function (_super) {
    __extends(ListResourcesForTagOptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourcesForTagOptionCommand(input) {
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
    ListResourcesForTagOptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListResourcesForTagOptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourcesForTagOptionInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourcesForTagOptionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourcesForTagOptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourcesForTagOptionCommand(input, context);
    };
    ListResourcesForTagOptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourcesForTagOptionCommand(output, context);
    };
    return ListResourcesForTagOptionCommand;
}($Command));
export { ListResourcesForTagOptionCommand };
//# sourceMappingURL=ListResourcesForTagOptionCommand.js.map