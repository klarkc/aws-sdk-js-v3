"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccessCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Used by administrators to choose which groups in the directory should have access to
 *       upload and download files over the enabled protocols using AWS Transfer Family. For example, a
 *       Microsoft Active Directory might contain 50,000 users, but only a small fraction might need
 *       the ability to transfer files to the server. An administrator can use
 *         <code>CreateAccess</code> to limit the access to the correct set of users who need this
 *       ability.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new CreateAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessCommandInput} for command's `input` shape.
 * @see {@link CreateAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateAccessCommand extends smithy_client_1.Command {
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
        const clientName = "TransferClient";
        const commandName = "CreateAccessCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateAccessResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateAccessCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateAccessCommand(output, context);
    }
}
exports.CreateAccessCommand = CreateAccessCommand;
//# sourceMappingURL=CreateAccessCommand.js.map