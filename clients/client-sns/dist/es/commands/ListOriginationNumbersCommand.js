import { __extends } from "tslib";
import { ListOriginationNumbersRequest, ListOriginationNumbersResult } from "../models/models_0";
import { deserializeAws_queryListOriginationNumbersCommand, serializeAws_queryListOriginationNumbersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the calling AWS account's dedicated origination numbers and their metadata. For
 *             more information about origination numbers, see <a href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html">Origination numbers</a> in the <i>Amazon SNS Developer
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListOriginationNumbersCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListOriginationNumbersCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListOriginationNumbersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOriginationNumbersCommandInput} for command's `input` shape.
 * @see {@link ListOriginationNumbersCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOriginationNumbersCommand = /** @class */ (function (_super) {
    __extends(ListOriginationNumbersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOriginationNumbersCommand(input) {
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
    ListOriginationNumbersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "ListOriginationNumbersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOriginationNumbersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOriginationNumbersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOriginationNumbersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListOriginationNumbersCommand(input, context);
    };
    ListOriginationNumbersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListOriginationNumbersCommand(output, context);
    };
    return ListOriginationNumbersCommand;
}($Command));
export { ListOriginationNumbersCommand };
//# sourceMappingURL=ListOriginationNumbersCommand.js.map