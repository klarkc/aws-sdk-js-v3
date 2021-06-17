import { __extends } from "tslib";
import { CreateStudioComponentRequest, CreateStudioComponentResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateStudioComponentCommand, serializeAws_restJson1CreateStudioComponentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new CreateStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStudioComponentCommandInput} for command's `input` shape.
 * @see {@link CreateStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStudioComponentCommand = /** @class */ (function (_super) {
    __extends(CreateStudioComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStudioComponentCommand(input) {
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
    CreateStudioComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "CreateStudioComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStudioComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateStudioComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStudioComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateStudioComponentCommand(input, context);
    };
    CreateStudioComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateStudioComponentCommand(output, context);
    };
    return CreateStudioComponentCommand;
}($Command));
export { CreateStudioComponentCommand };
//# sourceMappingURL=CreateStudioComponentCommand.js.map