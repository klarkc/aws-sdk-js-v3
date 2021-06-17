"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRepositoryTriggersCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Tests the functionality of repository triggers by sending information to the trigger
 *             target. If real data is available in the repository, the test sends data from the last
 *             commit. If no data is available, sample data is generated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, TestRepositoryTriggersCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, TestRepositoryTriggersCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new TestRepositoryTriggersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestRepositoryTriggersCommandInput} for command's `input` shape.
 * @see {@link TestRepositoryTriggersCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
class TestRepositoryTriggersCommand extends smithy_client_1.Command {
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
        const clientName = "CodeCommitClient";
        const commandName = "TestRepositoryTriggersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.TestRepositoryTriggersInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.TestRepositoryTriggersOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1TestRepositoryTriggersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1TestRepositoryTriggersCommand(output, context);
    }
}
exports.TestRepositoryTriggersCommand = TestRepositoryTriggersCommand;
//# sourceMappingURL=TestRepositoryTriggersCommand.js.map