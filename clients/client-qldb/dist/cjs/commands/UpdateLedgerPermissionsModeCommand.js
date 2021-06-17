"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLedgerPermissionsModeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the permissions mode of a ledger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, UpdateLedgerPermissionsModeCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, UpdateLedgerPermissionsModeCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new UpdateLedgerPermissionsModeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLedgerPermissionsModeCommandInput} for command's `input` shape.
 * @see {@link UpdateLedgerPermissionsModeCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateLedgerPermissionsModeCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateLedgerPermissionsModeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateLedgerPermissionsModeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateLedgerPermissionsModeResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateLedgerPermissionsModeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateLedgerPermissionsModeCommand(output, context);
    }
}
exports.UpdateLedgerPermissionsModeCommand = UpdateLedgerPermissionsModeCommand;
//# sourceMappingURL=UpdateLedgerPermissionsModeCommand.js.map