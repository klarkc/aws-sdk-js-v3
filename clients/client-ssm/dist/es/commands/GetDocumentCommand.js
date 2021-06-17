import { __extends } from "tslib";
import { GetDocumentRequest, GetDocumentResult } from "../models/models_1";
import { deserializeAws_json1_1GetDocumentCommand, serializeAws_json1_1GetDocumentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the contents of the specified Systems Manager document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDocumentCommandInput} for command's `input` shape.
 * @see {@link GetDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "SSMClient";
        var commandName = "GetDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDocumentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDocumentCommand(input, context);
    };
    GetDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDocumentCommand(output, context);
    };
    return GetDocumentCommand;
}($Command));
export { GetDocumentCommand };
//# sourceMappingURL=GetDocumentCommand.js.map