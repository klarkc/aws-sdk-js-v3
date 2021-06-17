"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLedgerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a ledger and all of its contents. This action is irreversible.</p>
 *          <p>If deletion protection is enabled, you must first disable it before you can delete the
 *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
 *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
 *          console disables deletion protection for you when you use it to delete a ledger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DeleteLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DeleteLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new DeleteLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLedgerCommandInput} for command's `input` shape.
 * @see {@link DeleteLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteLedgerCommand extends smithy_client_1.Command {
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
        const clientName = "QLDBClient";
        const commandName = "DeleteLedgerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteLedgerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteLedgerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteLedgerCommand(output, context);
    }
}
exports.DeleteLedgerCommand = DeleteLedgerCommand;
//# sourceMappingURL=DeleteLedgerCommand.js.map