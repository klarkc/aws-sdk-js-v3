import { __extends } from "tslib";
import { CreateCoreDefinitionRequest, CreateCoreDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCoreDefinitionCommand, serializeAws_restJson1CreateCoreDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateCoreDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateCoreDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateCoreDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCoreDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateCoreDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCoreDefinitionCommand = /** @class */ (function (_super) {
    __extends(CreateCoreDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCoreDefinitionCommand(input) {
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
    CreateCoreDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateCoreDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCoreDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCoreDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCoreDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCoreDefinitionCommand(input, context);
    };
    CreateCoreDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCoreDefinitionCommand(output, context);
    };
    return CreateCoreDefinitionCommand;
}($Command));
export { CreateCoreDefinitionCommand };
//# sourceMappingURL=CreateCoreDefinitionCommand.js.map