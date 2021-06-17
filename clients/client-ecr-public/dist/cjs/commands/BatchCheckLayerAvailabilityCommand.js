"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchCheckLayerAvailabilityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Checks the availability of one or more image layers within a repository in a public
 *          registry. When an image is pushed to a repository, each image layer is checked to verify if
 *          it has been uploaded before. If it has been uploaded, then the image layer is
 *          skipped.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, BatchCheckLayerAvailabilityCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, BatchCheckLayerAvailabilityCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new BatchCheckLayerAvailabilityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCheckLayerAvailabilityCommandInput} for command's `input` shape.
 * @see {@link BatchCheckLayerAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchCheckLayerAvailabilityCommand extends smithy_client_1.Command {
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
        const clientName = "ECRPUBLICClient";
        const commandName = "BatchCheckLayerAvailabilityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchCheckLayerAvailabilityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchCheckLayerAvailabilityResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1BatchCheckLayerAvailabilityCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1BatchCheckLayerAvailabilityCommand(output, context);
    }
}
exports.BatchCheckLayerAvailabilityCommand = BatchCheckLayerAvailabilityCommand;
//# sourceMappingURL=BatchCheckLayerAvailabilityCommand.js.map