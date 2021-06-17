import { __extends } from "tslib";
import { CreateRoleAliasRequest, CreateRoleAliasResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRoleAliasCommand, serializeAws_restJson1CreateRoleAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a role alias.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateRoleAliasCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateRoleAliasCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateRoleAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoleAliasCommandInput} for command's `input` shape.
 * @see {@link CreateRoleAliasCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRoleAliasCommand = /** @class */ (function (_super) {
    __extends(CreateRoleAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRoleAliasCommand(input) {
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
    CreateRoleAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateRoleAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRoleAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRoleAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRoleAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRoleAliasCommand(input, context);
    };
    CreateRoleAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRoleAliasCommand(output, context);
    };
    return CreateRoleAliasCommand;
}($Command));
export { CreateRoleAliasCommand };
//# sourceMappingURL=CreateRoleAliasCommand.js.map