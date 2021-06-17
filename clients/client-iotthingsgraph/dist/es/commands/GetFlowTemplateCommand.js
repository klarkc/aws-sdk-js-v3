import { __extends } from "tslib";
import { GetFlowTemplateRequest, GetFlowTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1GetFlowTemplateCommand, serializeAws_json1_1GetFlowTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the latest version of the <code>DefinitionDocument</code> and <code>FlowTemplateSummary</code> for the specified workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetFlowTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetFlowTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetFlowTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFlowTemplateCommandInput} for command's `input` shape.
 * @see {@link GetFlowTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFlowTemplateCommand = /** @class */ (function (_super) {
    __extends(GetFlowTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFlowTemplateCommand(input) {
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
    GetFlowTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "GetFlowTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFlowTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFlowTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFlowTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetFlowTemplateCommand(input, context);
    };
    GetFlowTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetFlowTemplateCommand(output, context);
    };
    return GetFlowTemplateCommand;
}($Command));
export { GetFlowTemplateCommand };
//# sourceMappingURL=GetFlowTemplateCommand.js.map