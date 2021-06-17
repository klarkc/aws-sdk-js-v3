import { __extends } from "tslib";
import { GetAnomalyGroupRequest, GetAnomalyGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAnomalyGroupCommand, serializeAws_restJson1GetAnomalyGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns details about a group of anomalous metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetAnomalyGroupCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetAnomalyGroupCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new GetAnomalyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAnomalyGroupCommandInput} for command's `input` shape.
 * @see {@link GetAnomalyGroupCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAnomalyGroupCommand = /** @class */ (function (_super) {
    __extends(GetAnomalyGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAnomalyGroupCommand(input) {
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
    GetAnomalyGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "GetAnomalyGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAnomalyGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAnomalyGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAnomalyGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAnomalyGroupCommand(input, context);
    };
    GetAnomalyGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAnomalyGroupCommand(output, context);
    };
    return GetAnomalyGroupCommand;
}($Command));
export { GetAnomalyGroupCommand };
//# sourceMappingURL=GetAnomalyGroupCommand.js.map