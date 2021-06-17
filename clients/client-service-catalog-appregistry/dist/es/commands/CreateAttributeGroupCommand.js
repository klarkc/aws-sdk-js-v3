import { __extends } from "tslib";
import { CreateAttributeGroupRequest, CreateAttributeGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAttributeGroupCommand, serializeAws_restJson1CreateAttributeGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new attribute group as a container for user-defined attributes. This feature
 *       enables users to have full control over their cloud application's metadata in a rich
 *       machine-readable format to facilitate integration with automated workflows and third-party
 *       tools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, CreateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, CreateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new CreateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link CreateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAttributeGroupCommand = /** @class */ (function (_super) {
    __extends(CreateAttributeGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAttributeGroupCommand(input) {
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
    CreateAttributeGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "CreateAttributeGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAttributeGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAttributeGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAttributeGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAttributeGroupCommand(input, context);
    };
    CreateAttributeGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAttributeGroupCommand(output, context);
    };
    return CreateAttributeGroupCommand;
}($Command));
export { CreateAttributeGroupCommand };
//# sourceMappingURL=CreateAttributeGroupCommand.js.map