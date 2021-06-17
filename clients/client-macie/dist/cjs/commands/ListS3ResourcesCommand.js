"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListS3ResourcesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists all the S3 resources associated with Amazon Macie Classic. If memberAccountId
 *       isn't specified, the action lists the S3 resources associated with Macie Classic for
 *       the current Macie Classic administrator account. If memberAccountId is specified, the action lists the S3 resources
 *       associated with Macie Classic for the specified member account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, ListS3ResourcesCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, ListS3ResourcesCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new ListS3ResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListS3ResourcesCommandInput} for command's `input` shape.
 * @see {@link ListS3ResourcesCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListS3ResourcesCommand extends smithy_client_1.Command {
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
        const commandName = "ListS3ResourcesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListS3ResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListS3ResourcesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListS3ResourcesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListS3ResourcesCommand(output, context);
    }
}
exports.ListS3ResourcesCommand = ListS3ResourcesCommand;
//# sourceMappingURL=ListS3ResourcesCommand.js.map