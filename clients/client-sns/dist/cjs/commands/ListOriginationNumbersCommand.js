"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOriginationNumbersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class ListOriginationNumbersCommand extends smithy_client_1.Command {
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
        const commandName = "ListOriginationNumbersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListOriginationNumbersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListOriginationNumbersResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryListOriginationNumbersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryListOriginationNumbersCommand(output, context);
    }
}
exports.ListOriginationNumbersCommand = ListOriginationNumbersCommand;
//# sourceMappingURL=ListOriginationNumbersCommand.js.map