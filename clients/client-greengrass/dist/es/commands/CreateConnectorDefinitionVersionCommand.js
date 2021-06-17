import { __extends } from "tslib";
import { CreateConnectorDefinitionVersionRequest, CreateConnectorDefinitionVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateConnectorDefinitionVersionCommand, serializeAws_restJson1CreateConnectorDefinitionVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a version of a connector definition which has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateConnectorDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateConnectorDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateConnectorDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectorDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConnectorDefinitionVersionCommand = /** @class */ (function (_super) {
    __extends(CreateConnectorDefinitionVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConnectorDefinitionVersionCommand(input) {
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
    CreateConnectorDefinitionVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateConnectorDefinitionVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConnectorDefinitionVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateConnectorDefinitionVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConnectorDefinitionVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateConnectorDefinitionVersionCommand(input, context);
    };
    CreateConnectorDefinitionVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateConnectorDefinitionVersionCommand(output, context);
    };
    return CreateConnectorDefinitionVersionCommand;
}($Command));
export { CreateConnectorDefinitionVersionCommand };
//# sourceMappingURL=CreateConnectorDefinitionVersionCommand.js.map