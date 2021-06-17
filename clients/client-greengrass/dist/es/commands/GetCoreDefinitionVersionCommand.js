import { __extends } from "tslib";
import { GetCoreDefinitionVersionRequest, GetCoreDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCoreDefinitionVersionCommand, serializeAws_restJson1GetCoreDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves information about a core definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetCoreDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetCoreDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetCoreDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCoreDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetCoreDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCoreDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(GetCoreDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCoreDefinitionVersionCommand(input) {
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
    GetCoreDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetCoreDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCoreDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCoreDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCoreDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCoreDefinitionVersionCommand(input, context);
    };
    GetCoreDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCoreDefinitionVersionCommand(output, context);
    };
    return GetCoreDefinitionVersionCommand;
}($Command));
export { GetCoreDefinitionVersionCommand };
//# sourceMappingURL=GetCoreDefinitionVersionCommand.js.map