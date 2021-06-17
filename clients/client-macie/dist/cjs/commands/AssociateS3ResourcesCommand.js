"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateS3ResourcesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Associates specified S3 resources with Amazon Macie Classic for monitoring and data
 *       classification. If memberAccountId isn't specified, the action associates specified S3
 *       resources with Macie Classic for the current Macie Classic administrator account. If memberAccountId is specified,
 *       the action associates specified S3 resources with Macie Classic for the specified member
 *       account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, AssociateS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, AssociateS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new AssociateS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link AssociateS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateS3ResourcesCommand extends smithy_client_1.Command {
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
        const clientName = "MacieClient";
        const commandName = "AssociateS3ResourcesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateS3ResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateS3ResourcesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AssociateS3ResourcesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AssociateS3ResourcesCommand(output, context);
    }
}
exports.AssociateS3ResourcesCommand = AssociateS3ResourcesCommand;
//# sourceMappingURL=AssociateS3ResourcesCommand.js.map