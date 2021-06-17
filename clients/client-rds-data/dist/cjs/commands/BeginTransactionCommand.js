"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeginTransactionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts a SQL transaction.</p>
 *
 *         <important>
 *             <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and
 *                 rolled back automatically after 24 hours.</p>
 *             <p>A transaction times out if no calls use its transaction ID in three minutes.
 *                 If a transaction times out before it's committed, it's rolled back
 *                 automatically.</p>
 *             <p>DDL statements inside a transaction cause an implicit commit. We recommend
 *                 that you run each DDL statement in a separate <code>ExecuteStatement</code> call with
 *                 <code>continueAfterTimeout</code> enabled.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BeginTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BeginTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new BeginTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BeginTransactionCommandInput} for command's `input` shape.
 * @see {@link BeginTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BeginTransactionCommand extends smithy_client_1.Command {
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
        const clientName = "RDSDataClient";
        const commandName = "BeginTransactionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BeginTransactionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BeginTransactionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1BeginTransactionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1BeginTransactionCommand(output, context);
    }
}
exports.BeginTransactionCommand = BeginTransactionCommand;
//# sourceMappingURL=BeginTransactionCommand.js.map