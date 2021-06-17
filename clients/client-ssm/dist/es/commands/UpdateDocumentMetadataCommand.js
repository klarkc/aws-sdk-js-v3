import { __extends } from "tslib";
import { UpdateDocumentMetadataRequest, UpdateDocumentMetadataResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateDocumentMetadataCommand, serializeAws_json1_1UpdateDocumentMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates information related to approval reviews for a specific version of a document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateDocumentMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDocumentMetadataCommand = /** @class */ (function (_super) {
    __extends(UpdateDocumentMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDocumentMetadataCommand(input) {
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
    UpdateDocumentMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateDocumentMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDocumentMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDocumentMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDocumentMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDocumentMetadataCommand(input, context);
    };
    UpdateDocumentMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDocumentMetadataCommand(output, context);
    };
    return UpdateDocumentMetadataCommand;
}($Command));
export { UpdateDocumentMetadataCommand };
//# sourceMappingURL=UpdateDocumentMetadataCommand.js.map