import { __extends } from "tslib";
import { UpdateDevEndpointRequest, UpdateDevEndpointResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateDevEndpointCommand, serializeAws_json1_1UpdateDevEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a specified development endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateDevEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDevEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDevEndpointCommand = /** @class */ (function (_super) {
    __extends(UpdateDevEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDevEndpointCommand(input) {
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
    UpdateDevEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateDevEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDevEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDevEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDevEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDevEndpointCommand(input, context);
    };
    UpdateDevEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDevEndpointCommand(output, context);
    };
    return UpdateDevEndpointCommand;
}($Command));
export { UpdateDevEndpointCommand };
//# sourceMappingURL=UpdateDevEndpointCommand.js.map