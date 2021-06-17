import { __extends } from "tslib";
import { PutTelemetryRecordsRequest, PutTelemetryRecordsResult } from "../models/models_0";
import { deserializeAws_restJson1PutTelemetryRecordsCommand, serializeAws_restJson1PutTelemetryRecordsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used by the AWS X-Ray daemon to upload telemetry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutTelemetryRecordsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutTelemetryRecordsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new PutTelemetryRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutTelemetryRecordsCommandInput} for command's `input` shape.
 * @see {@link PutTelemetryRecordsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutTelemetryRecordsCommand = /** @class */ (function (_super) {
    __extends(PutTelemetryRecordsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutTelemetryRecordsCommand(input) {
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
    PutTelemetryRecordsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "PutTelemetryRecordsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutTelemetryRecordsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutTelemetryRecordsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutTelemetryRecordsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutTelemetryRecordsCommand(input, context);
    };
    PutTelemetryRecordsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutTelemetryRecordsCommand(output, context);
    };
    return PutTelemetryRecordsCommand;
}($Command));
export { PutTelemetryRecordsCommand };
//# sourceMappingURL=PutTelemetryRecordsCommand.js.map