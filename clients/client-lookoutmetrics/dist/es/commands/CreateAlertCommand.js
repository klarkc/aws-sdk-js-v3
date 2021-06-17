import { __extends } from "tslib";
import { CreateAlertRequest, CreateAlertResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateAlertCommand, serializeAws_restJson1CreateAlertCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an alert for an anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, CreateAlertCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, CreateAlertCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new CreateAlertCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAlertCommandInput} for command's `input` shape.
 * @see {@link CreateAlertCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAlertCommand = /** @class */ (function (_super) {
    __extends(CreateAlertCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAlertCommand(input) {
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
    CreateAlertCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "CreateAlertCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAlertRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAlertResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAlertCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateAlertCommand(input, context);
    };
    CreateAlertCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateAlertCommand(output, context);
    };
    return CreateAlertCommand;
}($Command));
export { CreateAlertCommand };
//# sourceMappingURL=CreateAlertCommand.js.map