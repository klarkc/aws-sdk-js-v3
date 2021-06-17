import { __extends } from "tslib";
import { CreateMetricSetRequest, CreateMetricSetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateMetricSetCommand, serializeAws_restJson1CreateMetricSetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, CreateMetricSetCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, CreateMetricSetCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new CreateMetricSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMetricSetCommandInput} for command's `input` shape.
 * @see {@link CreateMetricSetCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMetricSetCommand = /** @class */ (function (_super) {
    __extends(CreateMetricSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMetricSetCommand(input) {
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
    CreateMetricSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "CreateMetricSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMetricSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMetricSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMetricSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateMetricSetCommand(input, context);
    };
    CreateMetricSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateMetricSetCommand(output, context);
    };
    return CreateMetricSetCommand;
}($Command));
export { CreateMetricSetCommand };
//# sourceMappingURL=CreateMetricSetCommand.js.map