"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSigningJobsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists all your signing jobs. You can use the <code>maxResults</code> parameter to
 * 			limit the number of signing jobs that are returned in the response. If additional jobs
 * 			remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in
 * 			subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can
 * 			continue calling <code>ListSigningJobs</code> with your <code>maxResults</code>
 * 			parameter and with new values that code signing returns in the <code>nextToken</code>
 * 			parameter until all of your signing jobs have been returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningJobsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningJobsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListSigningJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningJobsCommandInput} for command's `input` shape.
 * @see {@link ListSigningJobsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListSigningJobsCommand extends smithy_client_1.Command {
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
        const clientName = "SignerClient";
        const commandName = "ListSigningJobsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListSigningJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListSigningJobsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListSigningJobsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListSigningJobsCommand(output, context);
    }
}
exports.ListSigningJobsCommand = ListSigningJobsCommand;
//# sourceMappingURL=ListSigningJobsCommand.js.map