"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeRepositoryAssociationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *          Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
 *                <code>RepositoryAssociation</code>
 *             </a> object
 *          that contains information about the requested repository association.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeRepositoryAssociationCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeRepositoryAssociationCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new DescribeRepositoryAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRepositoryAssociationCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoryAssociationCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeRepositoryAssociationCommand extends smithy_client_1.Command {
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
        const clientName = "CodeGuruReviewerClient";
        const commandName = "DescribeRepositoryAssociationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeRepositoryAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeRepositoryAssociationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeRepositoryAssociationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeRepositoryAssociationCommand(output, context);
    }
}
exports.DescribeRepositoryAssociationCommand = DescribeRepositoryAssociationCommand;
//# sourceMappingURL=DescribeRepositoryAssociationCommand.js.map