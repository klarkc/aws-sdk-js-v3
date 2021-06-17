import { __extends } from "tslib";
import { CreateServiceActionInput, CreateServiceActionOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateServiceActionCommand, serializeAws_json1_1CreateServiceActionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceActionCommandInput} for command's `input` shape.
 * @see {@link CreateServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateServiceActionCommand = /** @class */ (function (_super) {
    __extends(CreateServiceActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateServiceActionCommand(input) {
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
    CreateServiceActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "CreateServiceActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateServiceActionInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateServiceActionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateServiceActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateServiceActionCommand(input, context);
    };
    CreateServiceActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateServiceActionCommand(output, context);
    };
    return CreateServiceActionCommand;
}($Command));
export { CreateServiceActionCommand };
//# sourceMappingURL=CreateServiceActionCommand.js.map