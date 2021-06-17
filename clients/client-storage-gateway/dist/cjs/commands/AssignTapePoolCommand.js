"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignTapePoolCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in
 *          the S3 storage class that is associated with the pool. When you use your backup application
 *          to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or
 *          S3 Glacier Deep Archive) that corresponds to the pool.</p>
 *
 *          <p>Valid Values: <code>GLACIER</code> | <code>DEEP_ARCHIVE</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AssignTapePoolCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AssignTapePoolCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new AssignTapePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignTapePoolCommandInput} for command's `input` shape.
 * @see {@link AssignTapePoolCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssignTapePoolCommand extends smithy_client_1.Command {
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
        const commandName = "AssignTapePoolCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssignTapePoolInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssignTapePoolOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AssignTapePoolCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AssignTapePoolCommand(output, context);
    }
}
exports.AssignTapePoolCommand = AssignTapePoolCommand;
//# sourceMappingURL=AssignTapePoolCommand.js.map