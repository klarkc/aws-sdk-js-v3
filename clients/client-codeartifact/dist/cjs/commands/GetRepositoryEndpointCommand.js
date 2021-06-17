"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRepositoryEndpointCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *       Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
 *       package format:
 *     </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>npm</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>pypi</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>maven</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetRepositoryEndpointCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetRepositoryEndpointCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetRepositoryEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryEndpointCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryEndpointCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetRepositoryEndpointCommand extends smithy_client_1.Command {
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
        const clientName = "CodeartifactClient";
        const commandName = "GetRepositoryEndpointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetRepositoryEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetRepositoryEndpointResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetRepositoryEndpointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetRepositoryEndpointCommand(output, context);
    }
}
exports.GetRepositoryEndpointCommand = GetRepositoryEndpointCommand;
//# sourceMappingURL=GetRepositoryEndpointCommand.js.map