import { __extends } from "tslib";
import { GetAttributeGroupRequest, GetAttributeGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAttributeGroupCommand, serializeAws_restJson1GetAttributeGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an attribute group, either by its name or its ID. The attribute group can be specified either by its unique ID or by its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, GetAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, GetAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const command = new GetAttributeGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link GetAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAttributeGroupCommand = /** @class */ (function (_super) {
    __extends(GetAttributeGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAttributeGroupCommand(input) {
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
    GetAttributeGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogAppRegistryClient";
        var commandName = "GetAttributeGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAttributeGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAttributeGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAttributeGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAttributeGroupCommand(input, context);
    };
    GetAttributeGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAttributeGroupCommand(output, context);
    };
    return GetAttributeGroupCommand;
}($Command));
export { GetAttributeGroupCommand };
//# sourceMappingURL=GetAttributeGroupCommand.js.map