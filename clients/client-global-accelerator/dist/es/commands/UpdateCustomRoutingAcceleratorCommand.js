import { __extends } from "tslib";
import { UpdateCustomRoutingAcceleratorRequest, UpdateCustomRoutingAcceleratorResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommand, serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCustomRoutingAcceleratorCommand = /** @class */ (function (_super) {
    __extends(UpdateCustomRoutingAcceleratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCustomRoutingAcceleratorCommand(input) {
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
    UpdateCustomRoutingAcceleratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "UpdateCustomRoutingAcceleratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCustomRoutingAcceleratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCustomRoutingAcceleratorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCustomRoutingAcceleratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateCustomRoutingAcceleratorCommand(input, context);
    };
    UpdateCustomRoutingAcceleratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateCustomRoutingAcceleratorCommand(output, context);
    };
    return UpdateCustomRoutingAcceleratorCommand;
}($Command));
export { UpdateCustomRoutingAcceleratorCommand };
//# sourceMappingURL=UpdateCustomRoutingAcceleratorCommand.js.map