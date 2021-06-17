import { __extends } from "tslib";
import { CreateExclusionsPreviewRequest, CreateExclusionsPreviewResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateExclusionsPreviewCommand, serializeAws_json1_1CreateExclusionsPreviewCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the generation of an exclusions preview for the specified assessment template.
 *          The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can
 *          detect before it runs the assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, CreateExclusionsPreviewCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, CreateExclusionsPreviewCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new CreateExclusionsPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExclusionsPreviewCommandInput} for command's `input` shape.
 * @see {@link CreateExclusionsPreviewCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateExclusionsPreviewCommand = /** @class */ (function (_super) {
    __extends(CreateExclusionsPreviewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateExclusionsPreviewCommand(input) {
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
    CreateExclusionsPreviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "CreateExclusionsPreviewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateExclusionsPreviewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateExclusionsPreviewResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateExclusionsPreviewCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateExclusionsPreviewCommand(input, context);
    };
    CreateExclusionsPreviewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateExclusionsPreviewCommand(output, context);
    };
    return CreateExclusionsPreviewCommand;
}($Command));
export { CreateExclusionsPreviewCommand };
//# sourceMappingURL=CreateExclusionsPreviewCommand.js.map