import { __extends } from "tslib";
import { PutCodeBindingRequest, PutCodeBindingResponse } from "../models/models_0";
import { deserializeAws_restJson1PutCodeBindingCommand, serializeAws_restJson1PutCodeBindingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Put code binding URI</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, PutCodeBindingCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, PutCodeBindingCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new PutCodeBindingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutCodeBindingCommandInput} for command's `input` shape.
 * @see {@link PutCodeBindingCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutCodeBindingCommand = /** @class */ (function (_super) {
    __extends(PutCodeBindingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutCodeBindingCommand(input) {
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
    PutCodeBindingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "PutCodeBindingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutCodeBindingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutCodeBindingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutCodeBindingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutCodeBindingCommand(input, context);
    };
    PutCodeBindingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutCodeBindingCommand(output, context);
    };
    return PutCodeBindingCommand;
}($Command));
export { PutCodeBindingCommand };
//# sourceMappingURL=PutCodeBindingCommand.js.map