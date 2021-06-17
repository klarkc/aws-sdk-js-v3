import { __extends } from "tslib";
import { UpdateTagOptionInput, UpdateTagOptionOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateTagOptionCommand, serializeAws_json1_1UpdateTagOptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified TagOption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateTagOptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTagOptionCommandInput} for command's `input` shape.
 * @see {@link UpdateTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTagOptionCommand = /** @class */ (function (_super) {
    __extends(UpdateTagOptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTagOptionCommand(input) {
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
    UpdateTagOptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "UpdateTagOptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTagOptionInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTagOptionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTagOptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateTagOptionCommand(input, context);
    };
    UpdateTagOptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateTagOptionCommand(output, context);
    };
    return UpdateTagOptionCommand;
}($Command));
export { UpdateTagOptionCommand };
//# sourceMappingURL=UpdateTagOptionCommand.js.map