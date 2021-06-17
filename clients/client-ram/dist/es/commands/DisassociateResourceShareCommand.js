import { __extends } from "tslib";
import { DisassociateResourceShareRequest, DisassociateResourceShareResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateResourceShareCommand, serializeAws_restJson1DisassociateResourceShareCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the specified principals or resources from the specified resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DisassociateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DisassociateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new DisassociateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResourceShareCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateResourceShareCommand = /** @class */ (function (_super) {
    __extends(DisassociateResourceShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateResourceShareCommand(input) {
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
    DisassociateResourceShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "DisassociateResourceShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateResourceShareRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateResourceShareResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateResourceShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateResourceShareCommand(input, context);
    };
    DisassociateResourceShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateResourceShareCommand(output, context);
    };
    return DisassociateResourceShareCommand;
}($Command));
export { DisassociateResourceShareCommand };
//# sourceMappingURL=DisassociateResourceShareCommand.js.map