import { __extends } from "tslib";
import { GetSystemTemplateRevisionsRequest, GetSystemTemplateRevisionsResponse } from "../models/models_0";
import { deserializeAws_json1_1GetSystemTemplateRevisionsCommand, serializeAws_json1_1GetSystemTemplateRevisionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return
 *       the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetSystemTemplateRevisionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetSystemTemplateRevisionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new GetSystemTemplateRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSystemTemplateRevisionsCommandInput} for command's `input` shape.
 * @see {@link GetSystemTemplateRevisionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSystemTemplateRevisionsCommand = /** @class */ (function (_super) {
    __extends(GetSystemTemplateRevisionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSystemTemplateRevisionsCommand(input) {
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
    GetSystemTemplateRevisionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "GetSystemTemplateRevisionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSystemTemplateRevisionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSystemTemplateRevisionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSystemTemplateRevisionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSystemTemplateRevisionsCommand(input, context);
    };
    GetSystemTemplateRevisionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSystemTemplateRevisionsCommand(output, context);
    };
    return GetSystemTemplateRevisionsCommand;
}($Command));
export { GetSystemTemplateRevisionsCommand };
//# sourceMappingURL=GetSystemTemplateRevisionsCommand.js.map