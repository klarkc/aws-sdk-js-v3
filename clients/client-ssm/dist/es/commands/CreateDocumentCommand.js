import { __extends } from "tslib";
import { CreateDocumentRequest, CreateDocumentResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDocumentCommand, serializeAws_json1_1CreateDocumentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Systems Manager (SSM) document. An SSM document defines the actions that Systems Manager performs on
 *    your managed instances. For more information about SSM documents, including information about
 *    supported schemas, features, and syntax, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-ssm-docs.html">AWS Systems Manager Documents</a> in the
 *     <i>AWS Systems Manager User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDocumentCommandInput} for command's `input` shape.
 * @see {@link CreateDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDocumentCommand = /** @class */ (function (_super) {
    __extends(CreateDocumentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDocumentCommand(input) {
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
    CreateDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDocumentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDocumentCommand(input, context);
    };
    CreateDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDocumentCommand(output, context);
    };
    return CreateDocumentCommand;
}($Command));
export { CreateDocumentCommand };
//# sourceMappingURL=CreateDocumentCommand.js.map