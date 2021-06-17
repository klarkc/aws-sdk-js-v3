"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateResolverEndpointCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p>
 * 		       <ul>
 *             <li>
 *                <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC
 * 				from your network.</p>
 *             </li>
 *             <li>
 *                <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC
 * 				to your network.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, CreateResolverEndpointCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, CreateResolverEndpointCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new CreateResolverEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResolverEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateResolverEndpointCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateResolverEndpointCommand extends smithy_client_1.Command {
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
        const clientName = "Route53ResolverClient";
        const commandName = "CreateResolverEndpointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateResolverEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateResolverEndpointResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateResolverEndpointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateResolverEndpointCommand(output, context);
    }
}
exports.CreateResolverEndpointCommand = CreateResolverEndpointCommand;
//# sourceMappingURL=CreateResolverEndpointCommand.js.map