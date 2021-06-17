import { __extends } from "tslib";
import { CreateCustomRoutingEndpointGroupRequest, CreateCustomRoutingEndpointGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand, serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create an endpoint group for the specified listener for a custom routing accelerator.
 * 		An endpoint group is a collection of endpoints in one AWS
 * 		Region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCustomRoutingEndpointGroupCommand = /** @class */ (function (_super) {
    __extends(CreateCustomRoutingEndpointGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCustomRoutingEndpointGroupCommand(input) {
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
    CreateCustomRoutingEndpointGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "CreateCustomRoutingEndpointGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCustomRoutingEndpointGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCustomRoutingEndpointGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCustomRoutingEndpointGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand(input, context);
    };
    CreateCustomRoutingEndpointGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand(output, context);
    };
    return CreateCustomRoutingEndpointGroupCommand;
}($Command));
export { CreateCustomRoutingEndpointGroupCommand };
//# sourceMappingURL=CreateCustomRoutingEndpointGroupCommand.js.map