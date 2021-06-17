"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListReviewableHITsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to
 *             Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListReviewableHITsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListReviewableHITsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListReviewableHITsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReviewableHITsCommandInput} for command's `input` shape.
 * @see {@link ListReviewableHITsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListReviewableHITsCommand extends smithy_client_1.Command {
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
        const clientName = "MTurkClient";
        const commandName = "ListReviewableHITsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListReviewableHITsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListReviewableHITsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListReviewableHITsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListReviewableHITsCommand(output, context);
    }
}
exports.ListReviewableHITsCommand = ListReviewableHITsCommand;
//# sourceMappingURL=ListReviewableHITsCommand.js.map