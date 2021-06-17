import { __extends } from "tslib";
import { AssociateResourceShareRequest, AssociateResourceShareResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateResourceShareCommand, serializeAws_restJson1AssociateResourceShareCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates the specified resource share with the specified principals and resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AssociateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AssociateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AssociateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResourceShareCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateResourceShareCommand = /** @class */ (function (_super) {
    __extends(AssociateResourceShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateResourceShareCommand(input) {
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
    AssociateResourceShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "AssociateResourceShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateResourceShareRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateResourceShareResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateResourceShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateResourceShareCommand(input, context);
    };
    AssociateResourceShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateResourceShareCommand(output, context);
    };
    return AssociateResourceShareCommand;
}($Command));
export { AssociateResourceShareCommand };
//# sourceMappingURL=AssociateResourceShareCommand.js.map