"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveComponentCandidatesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves a list of components that meet the component, version, and platform requirements
 *       of a deployment. AWS IoT Greengrass core devices call this operation when they receive a deployment to
 *       identify the components to install.</p>
 *          <p>This operation identifies components that meet all dependency requirements for a
 *       deployment. If the requirements conflict, then this operation returns an error and the
 *       deployment fails. For example, this occurs if component <code>A</code> requires version
 *         <code>>2.0.0</code> and component <code>B</code> requires version <code><2.0.0</code>
 *       of a component dependency.</p>
 *          <p>When you specify the component candidates to resolve, AWS IoT Greengrass compares each component's
 *       digest from the core device with the component's digest in the AWS Cloud. If the digests don't
 *       match, then AWS IoT Greengrass specifies to use the version from the AWS Cloud.</p>
 *          <important>
 *             <p>To use this operation, you must use the data plane API endpoint and authenticate with an
 *         AWS IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">AWS IoT Greengrass endpoints and quotas</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ResolveComponentCandidatesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ResolveComponentCandidatesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ResolveComponentCandidatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveComponentCandidatesCommandInput} for command's `input` shape.
 * @see {@link ResolveComponentCandidatesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ResolveComponentCandidatesCommand extends smithy_client_1.Command {
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
        const clientName = "GreengrassV2Client";
        const commandName = "ResolveComponentCandidatesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ResolveComponentCandidatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ResolveComponentCandidatesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ResolveComponentCandidatesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ResolveComponentCandidatesCommand(output, context);
    }
}
exports.ResolveComponentCandidatesCommand = ResolveComponentCandidatesCommand;
//# sourceMappingURL=ResolveComponentCandidatesCommand.js.map