"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveTapeRecoveryPointCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the recovery point for the specified virtual tape. This operation is only
 *          supported in the tape gateway type.</p>
 *
 *          <p>A recovery point is a point in time view of a virtual tape at which all the data on the
 *          tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be
 *          recovered to a new gateway.</p>
 *
 *          <note>
 *             <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is
 *             read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge
 *             for retrieving recovery points.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RetrieveTapeRecoveryPointCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RetrieveTapeRecoveryPointCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new RetrieveTapeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetrieveTapeRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link RetrieveTapeRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RetrieveTapeRecoveryPointCommand extends smithy_client_1.Command {
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
        const clientName = "StorageGatewayClient";
        const commandName = "RetrieveTapeRecoveryPointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RetrieveTapeRecoveryPointInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RetrieveTapeRecoveryPointOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RetrieveTapeRecoveryPointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RetrieveTapeRecoveryPointCommand(output, context);
    }
}
exports.RetrieveTapeRecoveryPointCommand = RetrieveTapeRecoveryPointCommand;
//# sourceMappingURL=RetrieveTapeRecoveryPointCommand.js.map