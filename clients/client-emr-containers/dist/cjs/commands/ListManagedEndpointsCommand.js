"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListManagedEndpointsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListManagedEndpointsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListManagedEndpointsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new ListManagedEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListManagedEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListManagedEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListManagedEndpointsCommand extends smithy_client_1.Command {
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
        const commandName = "ListManagedEndpointsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListManagedEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListManagedEndpointsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListManagedEndpointsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListManagedEndpointsCommand(output, context);
    }
}
exports.ListManagedEndpointsCommand = ListManagedEndpointsCommand;
//# sourceMappingURL=ListManagedEndpointsCommand.js.map