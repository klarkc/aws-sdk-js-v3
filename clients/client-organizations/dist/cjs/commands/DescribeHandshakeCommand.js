"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeHandshakeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves information about a previously requested handshake. The handshake ID comes
 *             from the response to the original <a>InviteAccountToOrganization</a>
 *             operation that generated the handshake.</p>
 *         <p>You can access handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>, or
 *                 <code>CANCELED</code> for only 30 days after they change to that state. They're then
 *             deleted and no longer accessible.</p>
 *         <p>This operation can be called from any account in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DescribeHandshakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHandshakeCommandInput} for command's `input` shape.
 * @see {@link DescribeHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeHandshakeCommand extends smithy_client_1.Command {
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
        const clientName = "OrganizationsClient";
        const commandName = "DescribeHandshakeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeHandshakeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeHandshakeResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeHandshakeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeHandshakeCommand(output, context);
    }
}
exports.DescribeHandshakeCommand = DescribeHandshakeCommand;
//# sourceMappingURL=DescribeHandshakeCommand.js.map