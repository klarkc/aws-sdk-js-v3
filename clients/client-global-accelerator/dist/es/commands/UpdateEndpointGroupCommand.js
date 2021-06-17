import { __extends } from "tslib";
import { UpdateEndpointGroupRequest, UpdateEndpointGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateEndpointGroupCommand, serializeAws_json1_1UpdateEndpointGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update an endpoint group. A resource must be valid and active when you add it as an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new UpdateEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEndpointGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateEndpointGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEndpointGroupCommand(input) {
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
    UpdateEndpointGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "UpdateEndpointGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEndpointGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEndpointGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEndpointGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateEndpointGroupCommand(input, context);
    };
    UpdateEndpointGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateEndpointGroupCommand(output, context);
    };
    return UpdateEndpointGroupCommand;
}($Command));
export { UpdateEndpointGroupCommand };
//# sourceMappingURL=UpdateEndpointGroupCommand.js.map