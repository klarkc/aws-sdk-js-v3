import { __extends } from "tslib";
import { GetCoreDefinitionRequest, GetCoreDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCoreDefinitionCommand, serializeAws_restJson1GetCoreDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a core definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetCoreDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetCoreDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetCoreDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCoreDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetCoreDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCoreDefinitionCommand = /** @class */ (function (_super) {
    __extends(GetCoreDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCoreDefinitionCommand(input) {
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
    GetCoreDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetCoreDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCoreDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCoreDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCoreDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCoreDefinitionCommand(input, context);
    };
    GetCoreDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCoreDefinitionCommand(output, context);
    };
    return GetCoreDefinitionCommand;
}($Command));
export { GetCoreDefinitionCommand };
//# sourceMappingURL=GetCoreDefinitionCommand.js.map