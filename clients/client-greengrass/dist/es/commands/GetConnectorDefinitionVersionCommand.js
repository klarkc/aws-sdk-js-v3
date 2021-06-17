import { __extends } from "tslib";
import { GetConnectorDefinitionVersionRequest, GetConnectorDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetConnectorDefinitionVersionCommand, serializeAws_restJson1GetConnectorDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetConnectorDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetConnectorDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetConnectorDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectorDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetConnectorDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConnectorDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(GetConnectorDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConnectorDefinitionVersionCommand(input) {
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
    GetConnectorDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetConnectorDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConnectorDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConnectorDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConnectorDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetConnectorDefinitionVersionCommand(input, context);
    };
    GetConnectorDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetConnectorDefinitionVersionCommand(output, context);
    };
    return GetConnectorDefinitionVersionCommand;
}($Command));
export { GetConnectorDefinitionVersionCommand };
//# sourceMappingURL=GetConnectorDefinitionVersionCommand.js.map