"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNamespaceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>(Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight.</p>
 *         <p>A namespace allows you to isolate the QuickSight users and groups that are registered
 *             for that namespace. Users that access the namespace can share assets only with other
 *             users or groups in the same namespace. They can't see users and groups in other
 *             namespaces. You can create a namespace after your AWS account is subscribed to
 *             QuickSight. The namespace must be unique within the AWS account. By default, there is a
 *             limit of 100 namespaces per AWS account. To increase your limit, create a ticket with
 *             AWS Support. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateNamespaceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateNamespaceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new CreateNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateNamespaceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateNamespaceCommand extends smithy_client_1.Command {
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
        const clientName = "QuickSightClient";
        const commandName = "CreateNamespaceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateNamespaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateNamespaceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateNamespaceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateNamespaceCommand(output, context);
    }
}
exports.CreateNamespaceCommand = CreateNamespaceCommand;
//# sourceMappingURL=CreateNamespaceCommand.js.map