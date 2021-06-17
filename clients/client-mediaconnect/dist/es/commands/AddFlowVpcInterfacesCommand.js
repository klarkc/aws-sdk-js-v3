import { __extends } from "tslib";
import { AddFlowVpcInterfacesRequest, AddFlowVpcInterfacesResponse } from "../models/models_0";
import { deserializeAws_restJson1AddFlowVpcInterfacesCommand, serializeAws_restJson1AddFlowVpcInterfacesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Adds VPC interfaces to flow
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowVpcInterfacesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowVpcInterfacesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new AddFlowVpcInterfacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFlowVpcInterfacesCommandInput} for command's `input` shape.
 * @see {@link AddFlowVpcInterfacesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddFlowVpcInterfacesCommand = /** @class */ (function (_super) {
    __extends(AddFlowVpcInterfacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddFlowVpcInterfacesCommand(input) {
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
    AddFlowVpcInterfacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "AddFlowVpcInterfacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddFlowVpcInterfacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddFlowVpcInterfacesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddFlowVpcInterfacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddFlowVpcInterfacesCommand(input, context);
    };
    AddFlowVpcInterfacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddFlowVpcInterfacesCommand(output, context);
    };
    return AddFlowVpcInterfacesCommand;
}($Command));
export { AddFlowVpcInterfacesCommand };
//# sourceMappingURL=AddFlowVpcInterfacesCommand.js.map