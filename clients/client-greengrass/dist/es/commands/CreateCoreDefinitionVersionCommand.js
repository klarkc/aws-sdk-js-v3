import { __extends } from "tslib";
import { CreateCoreDefinitionVersionRequest, CreateCoreDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateCoreDefinitionVersionCommand, serializeAws_restJson1CreateCoreDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateCoreDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateCoreDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateCoreDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCoreDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateCoreDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCoreDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(CreateCoreDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCoreDefinitionVersionCommand(input) {
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
    CreateCoreDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateCoreDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCoreDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCoreDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCoreDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCoreDefinitionVersionCommand(input, context);
    };
    CreateCoreDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCoreDefinitionVersionCommand(output, context);
    };
    return CreateCoreDefinitionVersionCommand;
}($Command));
export { CreateCoreDefinitionVersionCommand };
//# sourceMappingURL=CreateCoreDefinitionVersionCommand.js.map