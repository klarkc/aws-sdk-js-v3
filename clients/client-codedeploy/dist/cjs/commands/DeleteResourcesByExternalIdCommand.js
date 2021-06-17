"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteResourcesByExternalIdCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes resources linked to an external ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteResourcesByExternalIdCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteResourcesByExternalIdCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new DeleteResourcesByExternalIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourcesByExternalIdCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcesByExternalIdCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteResourcesByExternalIdCommand extends smithy_client_1.Command {
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
        const clientName = "CodeDeployClient";
        const commandName = "DeleteResourcesByExternalIdCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteResourcesByExternalIdInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteResourcesByExternalIdOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteResourcesByExternalIdCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteResourcesByExternalIdCommand(output, context);
    }
}
exports.DeleteResourcesByExternalIdCommand = DeleteResourcesByExternalIdCommand;
//# sourceMappingURL=DeleteResourcesByExternalIdCommand.js.map