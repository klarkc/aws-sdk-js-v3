"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVirtualClustersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListVirtualClustersCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListVirtualClustersCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new ListVirtualClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualClustersCommandInput} for command's `input` shape.
 * @see {@link ListVirtualClustersCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListVirtualClustersCommand extends smithy_client_1.Command {
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
        const clientName = "EMRContainersClient";
        const commandName = "ListVirtualClustersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListVirtualClustersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListVirtualClustersResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListVirtualClustersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListVirtualClustersCommand(output, context);
    }
}
exports.ListVirtualClustersCommand = ListVirtualClustersCommand;
//# sourceMappingURL=ListVirtualClustersCommand.js.map