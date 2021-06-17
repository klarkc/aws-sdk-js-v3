import { __extends } from "tslib";
import { DeleteTagOptionInput, DeleteTagOptionOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteTagOptionCommand, serializeAws_json1_1DeleteTagOptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified TagOption.</p>
 *          <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteTagOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTagOptionCommandInput} for command's `input` shape.
 * @see {@link DeleteTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTagOptionCommand = /** @class */ (function (_super) {
    __extends(DeleteTagOptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTagOptionCommand(input) {
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
    DeleteTagOptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DeleteTagOptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTagOptionInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTagOptionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTagOptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTagOptionCommand(input, context);
    };
    DeleteTagOptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTagOptionCommand(output, context);
    };
    return DeleteTagOptionCommand;
}($Command));
export { DeleteTagOptionCommand };
//# sourceMappingURL=DeleteTagOptionCommand.js.map