import { __extends } from "tslib";
import { CreateResourceShareRequest, CreateResourceShareResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateResourceShareCommand, serializeAws_restJson1CreateResourceShareCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, CreateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, CreateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new CreateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceShareCommandInput} for command's `input` shape.
 * @see {@link CreateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResourceShareCommand = /** @class */ (function (_super) {
    __extends(CreateResourceShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResourceShareCommand(input) {
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
    CreateResourceShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "CreateResourceShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResourceShareRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResourceShareResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResourceShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateResourceShareCommand(input, context);
    };
    CreateResourceShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateResourceShareCommand(output, context);
    };
    return CreateResourceShareCommand;
}($Command));
export { CreateResourceShareCommand };
//# sourceMappingURL=CreateResourceShareCommand.js.map