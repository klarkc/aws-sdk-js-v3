import { __extends } from "tslib";
import { UpdateResourceShareRequest, UpdateResourceShareResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateResourceShareCommand, serializeAws_restJson1UpdateResourceShareCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified resource share that you own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, UpdateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, UpdateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new UpdateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceShareCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResourceShareCommand = /** @class */ (function (_super) {
    __extends(UpdateResourceShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateResourceShareCommand(input) {
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
    UpdateResourceShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "UpdateResourceShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateResourceShareRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateResourceShareResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateResourceShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateResourceShareCommand(input, context);
    };
    UpdateResourceShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateResourceShareCommand(output, context);
    };
    return UpdateResourceShareCommand;
}($Command));
export { UpdateResourceShareCommand };
//# sourceMappingURL=UpdateResourceShareCommand.js.map