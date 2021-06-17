import { __extends } from "tslib";
import { GetFlowTemplateRevisionsRequest, GetFlowTemplateRevisionsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetFlowTemplateRevisionsCommand, serializeAws_json1_1GetFlowTemplateRevisionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated,
 *       this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetFlowTemplateRevisionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetFlowTemplateRevisionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetFlowTemplateRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFlowTemplateRevisionsCommandInput} for command's `input` shape.
 * @see {@link GetFlowTemplateRevisionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFlowTemplateRevisionsCommand = /** @class */ (function (_super) {
    __extends(GetFlowTemplateRevisionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFlowTemplateRevisionsCommand(input) {
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
    GetFlowTemplateRevisionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "GetFlowTemplateRevisionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFlowTemplateRevisionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFlowTemplateRevisionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFlowTemplateRevisionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetFlowTemplateRevisionsCommand(input, context);
    };
    GetFlowTemplateRevisionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetFlowTemplateRevisionsCommand(output, context);
    };
    return GetFlowTemplateRevisionsCommand;
}($Command));
export { GetFlowTemplateRevisionsCommand };
//# sourceMappingURL=GetFlowTemplateRevisionsCommand.js.map