"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyDocumentPermissionCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Shares a Systems Manager document publicly or privately. If you share a document privately, you must
 *    specify the AWS user account IDs for those people who can use the document. If you share a
 *    document publicly, you must specify <i>All</i> as the account ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ModifyDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ModifyDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ModifyDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link ModifyDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyDocumentPermissionCommand extends smithy_client_1.Command {
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
        const clientName = "SSMClient";
        const commandName = "ModifyDocumentPermissionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ModifyDocumentPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.ModifyDocumentPermissionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ModifyDocumentPermissionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ModifyDocumentPermissionCommand(output, context);
    }
}
exports.ModifyDocumentPermissionCommand = ModifyDocumentPermissionCommand;
//# sourceMappingURL=ModifyDocumentPermissionCommand.js.map