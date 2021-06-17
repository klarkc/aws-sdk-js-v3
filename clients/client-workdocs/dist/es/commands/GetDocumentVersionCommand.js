import { __extends } from "tslib";
import { GetDocumentVersionRequest, GetDocumentVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDocumentVersionCommand, serializeAws_restJson1GetDocumentVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves version metadata for the specified document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetDocumentVersionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetDocumentVersionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetDocumentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDocumentVersionCommandInput} for command's `input` shape.
 * @see {@link GetDocumentVersionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDocumentVersionCommand = /** @class */ (function (_super) {
    __extends(GetDocumentVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDocumentVersionCommand(input) {
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
    GetDocumentVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "GetDocumentVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDocumentVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDocumentVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDocumentVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDocumentVersionCommand(input, context);
    };
    GetDocumentVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDocumentVersionCommand(output, context);
    };
    return GetDocumentVersionCommand;
}($Command));
export { GetDocumentVersionCommand };
//# sourceMappingURL=GetDocumentVersionCommand.js.map