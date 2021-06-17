import { __extends } from "tslib";
import { DeleteDevEndpointRequest, DeleteDevEndpointResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteDevEndpointCommand, serializeAws_json1_1DeleteDevEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified development endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteDevEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDevEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDevEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteDevEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDevEndpointCommand(input) {
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
    DeleteDevEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteDevEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDevEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDevEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDevEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDevEndpointCommand(input, context);
    };
    DeleteDevEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDevEndpointCommand(output, context);
    };
    return DeleteDevEndpointCommand;
}($Command));
export { DeleteDevEndpointCommand };
//# sourceMappingURL=DeleteDevEndpointCommand.js.map