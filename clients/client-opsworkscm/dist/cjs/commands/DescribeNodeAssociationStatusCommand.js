"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeNodeAssociationStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *       Returns the current status of an existing association or disassociation request.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found,
 *       or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DescribeNodeAssociationStatusCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DescribeNodeAssociationStatusCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new DescribeNodeAssociationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNodeAssociationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeAssociationStatusCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeNodeAssociationStatusCommand extends smithy_client_1.Command {
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
        const clientName = "OpsWorksCMClient";
        const commandName = "DescribeNodeAssociationStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeNodeAssociationStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeNodeAssociationStatusResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeNodeAssociationStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeNodeAssociationStatusCommand(output, context);
    }
}
exports.DescribeNodeAssociationStatusCommand = DescribeNodeAssociationStatusCommand;
//# sourceMappingURL=DescribeNodeAssociationStatusCommand.js.map