"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartLifecyclePolicyPreviewCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts a preview of a lifecycle policy for the specified repository. This allows you
 *             to see the results before associating the lifecycle policy with the repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, StartLifecyclePolicyPreviewCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, StartLifecyclePolicyPreviewCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new StartLifecyclePolicyPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartLifecyclePolicyPreviewCommandInput} for command's `input` shape.
 * @see {@link StartLifecyclePolicyPreviewCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartLifecyclePolicyPreviewCommand extends smithy_client_1.Command {
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
        const clientName = "ECRClient";
        const commandName = "StartLifecyclePolicyPreviewCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartLifecyclePolicyPreviewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StartLifecyclePolicyPreviewResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StartLifecyclePolicyPreviewCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StartLifecyclePolicyPreviewCommand(output, context);
    }
}
exports.StartLifecyclePolicyPreviewCommand = StartLifecyclePolicyPreviewCommand;
//# sourceMappingURL=StartLifecyclePolicyPreviewCommand.js.map