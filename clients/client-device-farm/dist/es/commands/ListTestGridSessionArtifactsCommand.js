import { __extends } from "tslib";
import { ListTestGridSessionArtifactsRequest, ListTestGridSessionArtifactsResult } from "../models/models_0";
import { deserializeAws_json1_1ListTestGridSessionArtifactsCommand, serializeAws_json1_1ListTestGridSessionArtifactsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of artifacts created during the session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionArtifactsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionArtifactsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListTestGridSessionArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTestGridSessionArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionArtifactsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTestGridSessionArtifactsCommand = /** @class */ (function (_super) {
    __extends(ListTestGridSessionArtifactsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTestGridSessionArtifactsCommand(input) {
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
    ListTestGridSessionArtifactsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListTestGridSessionArtifactsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTestGridSessionArtifactsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTestGridSessionArtifactsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTestGridSessionArtifactsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTestGridSessionArtifactsCommand(input, context);
    };
    ListTestGridSessionArtifactsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTestGridSessionArtifactsCommand(output, context);
    };
    return ListTestGridSessionArtifactsCommand;
}($Command));
export { ListTestGridSessionArtifactsCommand };
//# sourceMappingURL=ListTestGridSessionArtifactsCommand.js.map