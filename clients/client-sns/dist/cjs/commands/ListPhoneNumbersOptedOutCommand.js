"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPhoneNumbersOptedOutCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS
 *             messages to them.</p>
 *         <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page
 *             returns up to 100 phone numbers. If additional phone numbers are available after the
 *             first page of results, then a <code>NextToken</code> string will be returned. To receive
 *             the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the
 *                 <code>NextToken</code> string received from the previous call. When there are no
 *             more records to return, <code>NextToken</code> will be null.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListPhoneNumbersOptedOutCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListPhoneNumbersOptedOutCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListPhoneNumbersOptedOutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPhoneNumbersOptedOutCommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumbersOptedOutCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListPhoneNumbersOptedOutCommand extends smithy_client_1.Command {
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
        const commandName = "ListPhoneNumbersOptedOutCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListPhoneNumbersOptedOutInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListPhoneNumbersOptedOutResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryListPhoneNumbersOptedOutCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryListPhoneNumbersOptedOutCommand(output, context);
    }
}
exports.ListPhoneNumbersOptedOutCommand = ListPhoneNumbersOptedOutCommand;
//# sourceMappingURL=ListPhoneNumbersOptedOutCommand.js.map