import { __extends } from "tslib";
import { CreateQuickConnectRequest, CreateQuickConnectResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateQuickConnectCommand, serializeAws_restJson1CreateQuickConnectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Creates a quick connect for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateQuickConnectCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateQuickConnectCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateQuickConnectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQuickConnectCommandInput} for command's `input` shape.
 * @see {@link CreateQuickConnectCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateQuickConnectCommand = /** @class */ (function (_super) {
    __extends(CreateQuickConnectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateQuickConnectCommand(input) {
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
    CreateQuickConnectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "CreateQuickConnectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateQuickConnectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateQuickConnectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateQuickConnectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateQuickConnectCommand(input, context);
    };
    CreateQuickConnectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateQuickConnectCommand(output, context);
    };
    return CreateQuickConnectCommand;
}($Command));
export { CreateQuickConnectCommand };
//# sourceMappingURL=CreateQuickConnectCommand.js.map