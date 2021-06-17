import { __extends } from "tslib";
import { GetTelemetryMetadataRequest, GetTelemetryMetadataResponse } from "../models/models_0";
import { deserializeAws_json1_1GetTelemetryMetadataCommand, serializeAws_json1_1GetTelemetryMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Information about the data that is collected for the specified assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetTelemetryMetadataCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetTelemetryMetadataCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetTelemetryMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTelemetryMetadataCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryMetadataCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTelemetryMetadataCommand = /** @class */ (function (_super) {
    __extends(GetTelemetryMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTelemetryMetadataCommand(input) {
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
    GetTelemetryMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "GetTelemetryMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTelemetryMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTelemetryMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTelemetryMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetTelemetryMetadataCommand(input, context);
    };
    GetTelemetryMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetTelemetryMetadataCommand(output, context);
    };
    return GetTelemetryMetadataCommand;
}($Command));
export { GetTelemetryMetadataCommand };
//# sourceMappingURL=GetTelemetryMetadataCommand.js.map