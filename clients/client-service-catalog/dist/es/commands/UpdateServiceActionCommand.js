import { __extends } from "tslib";
import { UpdateServiceActionInput, UpdateServiceActionOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateServiceActionCommand, serializeAws_json1_1UpdateServiceActionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceActionCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateServiceActionCommand = /** @class */ (function (_super) {
    __extends(UpdateServiceActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateServiceActionCommand(input) {
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
    UpdateServiceActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "UpdateServiceActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateServiceActionInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateServiceActionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateServiceActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateServiceActionCommand(input, context);
    };
    UpdateServiceActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateServiceActionCommand(output, context);
    };
    return UpdateServiceActionCommand;
}($Command));
export { UpdateServiceActionCommand };
//# sourceMappingURL=UpdateServiceActionCommand.js.map