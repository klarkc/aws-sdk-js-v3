import { __extends } from "tslib";
import { UpdateDocumentDefaultVersionRequest, UpdateDocumentDefaultVersionResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateDocumentDefaultVersionCommand, serializeAws_json1_1UpdateDocumentDefaultVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Set the default version of a document. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentDefaultVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentDefaultVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateDocumentDefaultVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDocumentDefaultVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateDocumentDefaultVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDocumentDefaultVersionCommand(input) {
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
    UpdateDocumentDefaultVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateDocumentDefaultVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDocumentDefaultVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDocumentDefaultVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDocumentDefaultVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDocumentDefaultVersionCommand(input, context);
    };
    UpdateDocumentDefaultVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDocumentDefaultVersionCommand(output, context);
    };
    return UpdateDocumentDefaultVersionCommand;
}($Command));
export { UpdateDocumentDefaultVersionCommand };
//# sourceMappingURL=UpdateDocumentDefaultVersionCommand.js.map