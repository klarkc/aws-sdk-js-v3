import { __extends } from "tslib";
import { DeprecateFlowTemplateRequest, DeprecateFlowTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1DeprecateFlowTemplateCommand, serializeAws_json1_1DeprecateFlowTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing deployments will continue to run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeprecateFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeprecateFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeprecateFlowTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprecateFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link DeprecateFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeprecateFlowTemplateCommand = /** @class */ (function (_super) {
    __extends(DeprecateFlowTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeprecateFlowTemplateCommand(input) {
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
    DeprecateFlowTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "DeprecateFlowTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeprecateFlowTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeprecateFlowTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeprecateFlowTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeprecateFlowTemplateCommand(input, context);
    };
    DeprecateFlowTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeprecateFlowTemplateCommand(output, context);
    };
    return DeprecateFlowTemplateCommand;
}($Command));
export { DeprecateFlowTemplateCommand };
//# sourceMappingURL=DeprecateFlowTemplateCommand.js.map