import { __extends } from "tslib";
import { CreateQueueRequest, CreateQueueResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateQueueCommand, serializeAws_restJson1CreateQueueCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Creates a new queue for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateQueueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateQueueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateQueueCommand = /** @class */ (function (_super) {
    __extends(CreateQueueCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateQueueCommand(input) {
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
    CreateQueueCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "CreateQueueCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateQueueRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateQueueResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateQueueCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateQueueCommand(input, context);
    };
    CreateQueueCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateQueueCommand(output, context);
    };
    return CreateQueueCommand;
}($Command));
export { CreateQueueCommand };
//# sourceMappingURL=CreateQueueCommand.js.map