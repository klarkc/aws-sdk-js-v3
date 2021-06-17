"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateEncryptionConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Associate encryption configuration to an existing cluster.</p>
 *         <p>You can use this API to enable encryption on existing clusters which do not have
 *             encryption already enabled. This allows you to implement a defense-in-depth security
 *             strategy without migrating applications to new EKS clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateEncryptionConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, AssociateEncryptionConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new AssociateEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateEncryptionConfigCommand extends smithy_client_1.Command {
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
        const clientName = "EKSClient";
        const commandName = "AssociateEncryptionConfigCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateEncryptionConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateEncryptionConfigResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1AssociateEncryptionConfigCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1AssociateEncryptionConfigCommand(output, context);
    }
}
exports.AssociateEncryptionConfigCommand = AssociateEncryptionConfigCommand;
//# sourceMappingURL=AssociateEncryptionConfigCommand.js.map