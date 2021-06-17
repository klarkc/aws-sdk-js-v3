import { __extends } from "tslib";
import { DescribeDocumentClassifierRequest, DescribeDocumentClassifierResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDocumentClassifierCommand, serializeAws_json1_1DescribeDocumentClassifierCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the properties associated with a document classifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeDocumentClassifierCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeDocumentClassifierCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribeDocumentClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDocumentClassifierCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentClassifierCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDocumentClassifierCommand = /** @class */ (function (_super) {
    __extends(DescribeDocumentClassifierCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDocumentClassifierCommand(input) {
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
    DescribeDocumentClassifierCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendClient";
        var commandName = "DescribeDocumentClassifierCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDocumentClassifierRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDocumentClassifierResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDocumentClassifierCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDocumentClassifierCommand(input, context);
    };
    DescribeDocumentClassifierCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDocumentClassifierCommand(output, context);
    };
    return DescribeDocumentClassifierCommand;
}($Command));
export { DescribeDocumentClassifierCommand };
//# sourceMappingURL=DescribeDocumentClassifierCommand.js.map