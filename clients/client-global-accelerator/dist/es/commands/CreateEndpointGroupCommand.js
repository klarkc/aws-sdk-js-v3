import { __extends } from "tslib";
import { CreateEndpointGroupRequest, CreateEndpointGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateEndpointGroupCommand, serializeAws_json1_1CreateEndpointGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS
 * 			Region. A resource must be valid and active when you add it as an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateEndpointGroupCommand = /** @class */ (function (_super) {
    __extends(CreateEndpointGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateEndpointGroupCommand(input) {
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
    CreateEndpointGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "CreateEndpointGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateEndpointGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateEndpointGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateEndpointGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateEndpointGroupCommand(input, context);
    };
    CreateEndpointGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateEndpointGroupCommand(output, context);
    };
    return CreateEndpointGroupCommand;
}($Command));
export { CreateEndpointGroupCommand };
//# sourceMappingURL=CreateEndpointGroupCommand.js.map