import { __extends } from "tslib";
import { DeleteCustomMetricRequest, DeleteCustomMetricResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteCustomMetricCommand, serializeAws_restJson1DeleteCustomMetricCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>Before you can delete a custom metric, you must first remove the custom metric from all
 *         security profiles it's a part of.
 *         The
 *         security
 *         profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a>
 *         API with <code>metricName</code> set to your custom metric name.</p>
 *          </note>
 *          <p>
 *       Deletes a Device Defender detect custom metric.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteCustomMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomMetricCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCustomMetricCommand = /** @class */ (function (_super) {
    __extends(DeleteCustomMetricCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCustomMetricCommand(input) {
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
    DeleteCustomMetricCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteCustomMetricCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCustomMetricRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCustomMetricResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCustomMetricCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCustomMetricCommand(input, context);
    };
    DeleteCustomMetricCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCustomMetricCommand(output, context);
    };
    return DeleteCustomMetricCommand;
}($Command));
export { DeleteCustomMetricCommand };
//# sourceMappingURL=DeleteCustomMetricCommand.js.map