import { __extends } from "tslib";
import { GetExclusionsPreviewRequest, GetExclusionsPreviewResponse } from "../models/models_0";
import { deserializeAws_json1_1GetExclusionsPreviewCommand, serializeAws_json1_1GetExclusionsPreviewCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by
 *          the preview token. You can obtain the preview token by running the CreateExclusionsPreview
 *          API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetExclusionsPreviewCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetExclusionsPreviewCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetExclusionsPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExclusionsPreviewCommandInput} for command's `input` shape.
 * @see {@link GetExclusionsPreviewCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetExclusionsPreviewCommand = /** @class */ (function (_super) {
    __extends(GetExclusionsPreviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetExclusionsPreviewCommand(input) {
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
    GetExclusionsPreviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "GetExclusionsPreviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetExclusionsPreviewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetExclusionsPreviewResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetExclusionsPreviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetExclusionsPreviewCommand(input, context);
    };
    GetExclusionsPreviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetExclusionsPreviewCommand(output, context);
    };
    return GetExclusionsPreviewCommand;
}($Command));
export { GetExclusionsPreviewCommand };
//# sourceMappingURL=GetExclusionsPreviewCommand.js.map