import { __extends } from "tslib";
import { UpdateCustomRoutingAcceleratorAttributesRequest, UpdateCustomRoutingAcceleratorAttributesResponse, } from "../models/models_0";
import { deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand, serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update the attributes for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateCustomRoutingAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomRoutingAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCustomRoutingAcceleratorAttributesCommand = /** @class */ (function (_super) {
    __extends(UpdateCustomRoutingAcceleratorAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCustomRoutingAcceleratorAttributesCommand(input) {
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
    UpdateCustomRoutingAcceleratorAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "UpdateCustomRoutingAcceleratorAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCustomRoutingAcceleratorAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCustomRoutingAcceleratorAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCustomRoutingAcceleratorAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand(input, context);
    };
    UpdateCustomRoutingAcceleratorAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand(output, context);
    };
    return UpdateCustomRoutingAcceleratorAttributesCommand;
}($Command));
export { UpdateCustomRoutingAcceleratorAttributesCommand };
//# sourceMappingURL=UpdateCustomRoutingAcceleratorAttributesCommand.js.map