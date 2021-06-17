import { __extends } from "tslib";
import { ClassifyDocumentRequest, ClassifyDocumentResponse } from "../models/models_0";
import { deserializeAws_json1_1ClassifyDocumentCommand, serializeAws_json1_1ClassifyDocumentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new document classification request to analyze a single document in real-time,
 *       using a previously created and trained custom model and an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ClassifyDocumentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ClassifyDocumentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ClassifyDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClassifyDocumentCommandInput} for command's `input` shape.
 * @see {@link ClassifyDocumentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ClassifyDocumentCommand = /** @class */ (function (_super) {
    __extends(ClassifyDocumentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ClassifyDocumentCommand(input) {
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
    ClassifyDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendClient";
        var commandName = "ClassifyDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ClassifyDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ClassifyDocumentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ClassifyDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ClassifyDocumentCommand(input, context);
    };
    ClassifyDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ClassifyDocumentCommand(output, context);
    };
    return ClassifyDocumentCommand;
}($Command));
export { ClassifyDocumentCommand };
//# sourceMappingURL=ClassifyDocumentCommand.js.map