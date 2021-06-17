import { __extends } from "tslib";
import { CreateAnomalyDetectorRequest, CreateAnomalyDetectorResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAnomalyDetectorCommand, serializeAws_restJson1CreateAnomalyDetectorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, CreateAnomalyDetectorCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, CreateAnomalyDetectorCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new CreateAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link CreateAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAnomalyDetectorCommand = /** @class */ (function (_super) {
    __extends(CreateAnomalyDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAnomalyDetectorCommand(input) {
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
    CreateAnomalyDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "CreateAnomalyDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAnomalyDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAnomalyDetectorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAnomalyDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAnomalyDetectorCommand(input, context);
    };
    CreateAnomalyDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAnomalyDetectorCommand(output, context);
    };
    return CreateAnomalyDetectorCommand;
}($Command));
export { CreateAnomalyDetectorCommand };
//# sourceMappingURL=CreateAnomalyDetectorCommand.js.map