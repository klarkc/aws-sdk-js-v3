import { __extends } from "tslib";
import { AddFlowMediaStreamsRequest, AddFlowMediaStreamsResponse } from "../models/models_0";
import { deserializeAws_restJson1AddFlowMediaStreamsCommand, serializeAws_restJson1AddFlowMediaStreamsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowMediaStreamsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowMediaStreamsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new AddFlowMediaStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddFlowMediaStreamsCommandInput} for command's `input` shape.
 * @see {@link AddFlowMediaStreamsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddFlowMediaStreamsCommand = /** @class */ (function (_super) {
    __extends(AddFlowMediaStreamsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddFlowMediaStreamsCommand(input) {
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
    AddFlowMediaStreamsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "AddFlowMediaStreamsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddFlowMediaStreamsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddFlowMediaStreamsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddFlowMediaStreamsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddFlowMediaStreamsCommand(input, context);
    };
    AddFlowMediaStreamsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddFlowMediaStreamsCommand(output, context);
    };
    return AddFlowMediaStreamsCommand;
}($Command));
export { AddFlowMediaStreamsCommand };
//# sourceMappingURL=AddFlowMediaStreamsCommand.js.map