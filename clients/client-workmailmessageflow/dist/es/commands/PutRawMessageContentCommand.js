import { __extends } from "tslib";
import { PutRawMessageContentRequest, PutRawMessageContentResponse } from "../models/models_0";
import { deserializeAws_restJson1PutRawMessageContentCommand, serializeAws_restJson1PutRawMessageContentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the raw content of an in-transit email message, in MIME format.</p>
 *          <p>This example describes how to update in-transit email message. For more information and examples for using this API, see
 *       <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html">
 *         Updating message content with AWS Lambda</a>.</p>
 *
 *
 *          <note>
 *             <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function
 *       configured with a  synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules">
 *         Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged,
 *       even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated
 *         message.
 *     </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailMessageFlowClient, PutRawMessageContentCommand } from "@aws-sdk/client-workmailmessageflow"; // ES Modules import
 * // const { WorkMailMessageFlowClient, PutRawMessageContentCommand } = require("@aws-sdk/client-workmailmessageflow"); // CommonJS import
 * const client = new WorkMailMessageFlowClient(config);
 * const command = new PutRawMessageContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRawMessageContentCommandInput} for command's `input` shape.
 * @see {@link PutRawMessageContentCommandOutput} for command's `response` shape.
 * @see {@link WorkMailMessageFlowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRawMessageContentCommand = /** @class */ (function (_super) {
    __extends(PutRawMessageContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRawMessageContentCommand(input) {
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
    PutRawMessageContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailMessageFlowClient";
        var commandName = "PutRawMessageContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRawMessageContentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutRawMessageContentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRawMessageContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutRawMessageContentCommand(input, context);
    };
    PutRawMessageContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutRawMessageContentCommand(output, context);
    };
    return PutRawMessageContentCommand;
}($Command));
export { PutRawMessageContentCommand };
//# sourceMappingURL=PutRawMessageContentCommand.js.map