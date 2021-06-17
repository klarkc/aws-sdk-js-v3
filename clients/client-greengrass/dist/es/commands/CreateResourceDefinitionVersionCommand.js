import { __extends } from "tslib";
import { CreateResourceDefinitionVersionRequest, CreateResourceDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateResourceDefinitionVersionCommand, serializeAws_restJson1CreateResourceDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a version of a resource definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateResourceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateResourceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateResourceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResourceDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(CreateResourceDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResourceDefinitionVersionCommand(input) {
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
    CreateResourceDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateResourceDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResourceDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResourceDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResourceDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateResourceDefinitionVersionCommand(input, context);
    };
    CreateResourceDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateResourceDefinitionVersionCommand(output, context);
    };
    return CreateResourceDefinitionVersionCommand;
}($Command));
export { CreateResourceDefinitionVersionCommand };
//# sourceMappingURL=CreateResourceDefinitionVersionCommand.js.map