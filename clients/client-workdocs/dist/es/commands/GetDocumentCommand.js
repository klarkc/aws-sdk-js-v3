import { __extends } from "tslib";
import { GetDocumentRequest, GetDocumentResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDocumentCommand, serializeAws_restJson1GetDocumentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details of a document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetDocumentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetDocumentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDocumentCommandInput} for command's `input` shape.
 * @see {@link GetDocumentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDocumentCommand = /** @class */ (function (_super) {
    __extends(GetDocumentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDocumentCommand(input) {
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
    GetDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "GetDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDocumentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDocumentCommand(input, context);
    };
    GetDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDocumentCommand(output, context);
    };
    return GetDocumentCommand;
}($Command));
export { GetDocumentCommand };
//# sourceMappingURL=GetDocumentCommand.js.map