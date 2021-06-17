import { __extends } from "tslib";
import { RemoveFlowVpcInterfaceRequest, RemoveFlowVpcInterfaceResponse } from "../models/models_0";
import { deserializeAws_restJson1RemoveFlowVpcInterfaceCommand, serializeAws_restJson1RemoveFlowVpcInterfaceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowVpcInterfaceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowVpcInterfaceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowVpcInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowVpcInterfaceCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowVpcInterfaceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveFlowVpcInterfaceCommand = /** @class */ (function (_super) {
    __extends(RemoveFlowVpcInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveFlowVpcInterfaceCommand(input) {
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
    RemoveFlowVpcInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "RemoveFlowVpcInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveFlowVpcInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveFlowVpcInterfaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveFlowVpcInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveFlowVpcInterfaceCommand(input, context);
    };
    RemoveFlowVpcInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveFlowVpcInterfaceCommand(output, context);
    };
    return RemoveFlowVpcInterfaceCommand;
}($Command));
export { RemoveFlowVpcInterfaceCommand };
//# sourceMappingURL=RemoveFlowVpcInterfaceCommand.js.map