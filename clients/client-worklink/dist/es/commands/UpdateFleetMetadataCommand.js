import { __extends } from "tslib";
import { UpdateFleetMetadataRequest, UpdateFleetMetadataResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateFleetMetadataCommand, serializeAws_restJson1UpdateFleetMetadataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates fleet metadata, such as DisplayName.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateFleetMetadataCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateFleetMetadataCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateFleetMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFleetMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFleetMetadataCommand = /** @class */ (function (_super) {
    __extends(UpdateFleetMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFleetMetadataCommand(input) {
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
    UpdateFleetMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "UpdateFleetMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFleetMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFleetMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFleetMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateFleetMetadataCommand(input, context);
    };
    UpdateFleetMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateFleetMetadataCommand(output, context);
    };
    return UpdateFleetMetadataCommand;
}($Command));
export { UpdateFleetMetadataCommand };
//# sourceMappingURL=UpdateFleetMetadataCommand.js.map