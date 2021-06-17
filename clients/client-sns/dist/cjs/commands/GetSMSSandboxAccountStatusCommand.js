"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSMSSandboxAccountStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the SMS sandbox status for the calling AWS account in the target AWS
 *             Region.</p>
 *         <p>When you start using Amazon SNS to send SMS messages, your AWS account is in the
 *                 <i>SMS sandbox</i>. The SMS sandbox provides a safe environment for
 *                 you to try Amazon SNS features without risking your reputation as an SMS sender. While your
 *                 account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send
 *                 SMS messages only to verified destination phone numbers. For more information, including how to
 *                 move out of the sandbox to send messages without restrictions,
 *                 see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html">SMS sandbox</a> in
 *                 the <i>Amazon SNS Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSMSSandboxAccountStatusCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSMSSandboxAccountStatusCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetSMSSandboxAccountStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSMSSandboxAccountStatusCommandInput} for command's `input` shape.
 * @see {@link GetSMSSandboxAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetSMSSandboxAccountStatusCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SNSClient";
        const commandName = "GetSMSSandboxAccountStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetSMSSandboxAccountStatusInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetSMSSandboxAccountStatusResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryGetSMSSandboxAccountStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryGetSMSSandboxAccountStatusCommand(output, context);
    }
}
exports.GetSMSSandboxAccountStatusCommand = GetSMSSandboxAccountStatusCommand;
//# sourceMappingURL=GetSMSSandboxAccountStatusCommand.js.map