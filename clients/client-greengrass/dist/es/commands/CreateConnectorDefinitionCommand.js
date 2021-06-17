import { __extends } from "tslib";
import { CreateConnectorDefinitionRequest, CreateConnectorDefinitionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateConnectorDefinitionCommand, serializeAws_restJson1CreateConnectorDefinitionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConnectorDefinitionCommand = /** @class */ (function (_super) {
    __extends(CreateConnectorDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConnectorDefinitionCommand(input) {
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
    CreateConnectorDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "CreateConnectorDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConnectorDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateConnectorDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConnectorDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateConnectorDefinitionCommand(input, context);
    };
    CreateConnectorDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateConnectorDefinitionCommand(output, context);
    };
    return CreateConnectorDefinitionCommand;
}($Command));
export { CreateConnectorDefinitionCommand };
//# sourceMappingURL=CreateConnectorDefinitionCommand.js.map