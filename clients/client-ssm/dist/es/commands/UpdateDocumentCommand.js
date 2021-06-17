import { __extends } from "tslib";
import { UpdateDocumentRequest, UpdateDocumentResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateDocumentCommand, serializeAws_json1_1UpdateDocumentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates one or more values for an SSM document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDocumentCommand = /** @class */ (function (_super) {
    __extends(UpdateDocumentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDocumentCommand(input) {
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
    UpdateDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDocumentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDocumentCommand(input, context);
    };
    UpdateDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDocumentCommand(output, context);
    };
    return UpdateDocumentCommand;
}($Command));
export { UpdateDocumentCommand };
//# sourceMappingURL=UpdateDocumentCommand.js.map