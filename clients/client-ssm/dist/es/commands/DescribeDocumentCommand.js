import { __extends } from "tslib";
import { DescribeDocumentRequest, DescribeDocumentResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeDocumentCommand, serializeAws_json1_1DescribeDocumentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified Systems Manager document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDocumentCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDocumentCommand = /** @class */ (function (_super) {
    __extends(DescribeDocumentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDocumentCommand(input) {
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
    DescribeDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDocumentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDocumentCommand(input, context);
    };
    DescribeDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDocumentCommand(output, context);
    };
    return DescribeDocumentCommand;
}($Command));
export { DescribeDocumentCommand };
//# sourceMappingURL=DescribeDocumentCommand.js.map