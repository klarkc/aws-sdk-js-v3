import { __extends } from "tslib";
import { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateApplicationCommand, serializeAws_restJson1CreateApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, CreateApplicationCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, CreateApplicationCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApplicationCommand = /** @class */ (function (_super) {
    __extends(CreateApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateApplicationCommand(input) {
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
    CreateApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "CreateApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateApplicationCommand(input, context);
    };
    CreateApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateApplicationCommand(output, context);
    };
    return CreateApplicationCommand;
}($Command));
export { CreateApplicationCommand };
//# sourceMappingURL=CreateApplicationCommand.js.map